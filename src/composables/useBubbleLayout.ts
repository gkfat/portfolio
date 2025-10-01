import {
    ref, type Ref, 
} from 'vue';
import { watchDebounced } from '@vueuse/core';
import {
    pack, hierarchy, 
} from 'd3-hierarchy';
import {
    forceSimulation, forceCollide, forceX, forceY, forceCenter, 
} from 'd3-force';

import type { IProject } from '@/types/project';
import {
    type BubbleNode,
    type BubbleDatum,
    type SimNode,
    type WeightMode,
    SIM_STRENGTH,
    SIM_TICKS,
    remapY,
    getValue,
} from '@/utils/bubbleLayout';

export type UseBubbleLayoutOptions = {
  width: Ref<number>;
  height: Ref<number>;
  padding?: number;
  weightMode?: WeightMode;
  focusHeightRatio?: number;
  debounceMs?: number;
  maxWait?: number;
};

/**
 * Bubble layout composable using d3-hierarchy and d3-force
 */
export function useBubbleLayout(
    projects: Ref<IProject[]>,
    options: UseBubbleLayoutOptions,
) {
    const nodes = ref<BubbleNode[]>([]);

    const {
        width,
        height,
        padding = 8,
        weightMode = 'weight',
        focusHeightRatio = 0.5,
        debounceMs = 200,
        maxWait = 400,
    } = options;

    const calculateLayout = () => {
        if (!width.value || !height.value || projects.value.length === 0) {
            nodes.value = [];
            return;
        }

        // 1. 建立 hierarchy data
        const data = {
            name: 'root',
            children: projects.value.map((p) => ({
                name: p.title,
                value: getValue(p, weightMode),
                project: p,
            })),
        } as const;

        // 2. Pack layout 計算初始位置與半徑
        const root = hierarchy<BubbleDatum>(data as any)
            .sum((d) => d.value ?? 1)
            .sort((a, b) => (b.value || 0) - (a.value || 0));

        // 使用更大的虛擬高度來保持 bubble 尺寸，但最終壓縮到實際高度
        const virtualHeight = height.value * 1.8; // 虛擬高度比實際高度大 80%
        const layout = pack<BubbleDatum>()
            .size([width.value, virtualHeight])
            .padding(padding)(root as any);

        // 3. 生成初始節點，將 Y 座標壓縮到實際高度範圍
        const leaves = layout.leaves();
        const yCompressionRatio = height.value / virtualHeight;
        const initialNodes = leaves.map((leaf, idx) => ({
            id: `${leaf.data.name}-${idx}`,
            x: leaf.x,
            y: remapY(leaf.y * yCompressionRatio, height.value),
            r: leaf.r, // 半徑保持不變，維持原始 bubble 大小
            project: leaf.data.project as IProject,
        }));

        // 4. d3-force simulation for collision and convergence
        const simNodes: SimNode[] = initialNodes.map((n) => ({
            id: n.id,
            x: n.x,
            y: n.y,
            vx: 0,
            vy: 0,
            r: n.r,
            targetX: n.x,
            targetY: n.y,
            project: n.project,
        }));

        const sim = forceSimulation(simNodes as any)
            .force('collide', forceCollide<SimNode>().radius(d => d.r + padding))
            .force('x', forceX<SimNode>().x(d => d.targetX).strength(SIM_STRENGTH))
            .force('y', forceY<SimNode>().y(d => d.targetY).strength(SIM_STRENGTH))
            .force('center', forceCenter(width.value / 2, height.value / 2).strength(0.05))
            .stop();

        // 5. 執行固定次數模擬
        for (let i = 0; i < SIM_TICKS; i++) sim.tick();

        // 6. 回填結果
        nodes.value = simNodes.map(n => ({
            id: n.id,
            x: n.x,
            y: n.y,
            r: n.r,
            project: n.project,
        }));
    };

    // 監聽依賴變化並重算 layout
    watchDebounced(
        [
            width,
            height,
            projects,
            () => padding,
            () => weightMode,
            () => focusHeightRatio,
        ],
        calculateLayout,
        {
            debounce: debounceMs, maxWait, 
        },
    );

    return { nodes };
}