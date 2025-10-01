<template>
    <v-container fluid>
        <v-sheet
            color="transparent"
            class="d-flex align-center justify-center"
        >
            <div class="text-center">
                <v-icon
                    icon="mdi-format-quote-open"
                    size="64"
                    class="mb-4 text-primary"
                />

                <v-slide-y-reverse-transition mode="out-in">
                    <div
                        :key="'zh-' + zhIndex"
                        class="text-h4 font-weight-bold"
                    >
                        {{ quoteList[zhIndex].zh }}
                    </div>
                </v-slide-y-reverse-transition>

                <v-slide-y-reverse-transition mode="out-in">
                    <div
                        :key="'en-' + enIndex"
                        class="text-subtitle-1 mt-3 text-medium-emphasis"
                    >
                        — {{ quoteList[enIndex].en }}
                    </div>
                </v-slide-y-reverse-transition>
            </div>
        </v-sheet>
    </v-container>
</template>

<script lang="ts" setup>
import {
    onBeforeUnmount, onMounted, ref, 
} from 'vue';

type Quote = { zh: string; en: string };

const quoteList: Quote[] = [
    {
        zh: '持續學習，持續交付，讓價值說話。', en: 'Keep learning, keep shipping.', 
    },
    {
        zh: '我是 GK，一名網頁程式開發者。', en: 'I\'m GK, a web developer.', 
    },
    {
        zh: '整合生成式 AI 輔助，提升開發效率。', en: 'Integrate Generative AI in developing.', 
    },
    {
        zh: '專案的本質即為解決問題，程式只是手段。', en: 'All about solving problems.', 
    },
];

const baseIndex = ref(0);
const zhIndex = ref(0);
const enIndex = ref(0);

const INTERVAL_MS = 10 * 1000;
const EN_DELAY_MS = 500;

let intervalId: ReturnType<typeof setInterval> | null = null;
let timeoutId: ReturnType<typeof setTimeout> | null = null;

const tick = () => {
    const next = (baseIndex.value + 1) % quoteList.length;
    // 先切換中文
    zhIndex.value = next;
    // 再延遲切換英文
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        enIndex.value = next;
        baseIndex.value = next; // 更新基準 index
    }, EN_DELAY_MS);
};

onMounted(() => {
    intervalId = setInterval(tick, INTERVAL_MS);
});

onBeforeUnmount(() => {
    if (intervalId) clearInterval(intervalId);
    if (timeoutId) clearTimeout(timeoutId);
});
</script>
