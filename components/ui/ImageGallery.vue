<template>
    <div v-if="images?.length">
        <!-- Single image mode -->
        <div
            v-if="images.length === 1"
            class="d-flex justify-center"
        >
            <button
                type="button"
                class="thumb"
                :aria-label="`放大檢視：${altFor(0)}`"
                @click="open(0)"
            >
                <LazyImage
                    :src="images[0]"
                    :alt="altFor(0)"
                />
            </button>
        </div>

        <!-- Grid mode -->
        <v-row v-else>
            <v-col
                v-for="(img, index) in images"
                :key="img"
                cols="12"
                sm="6"
            >
                <button
                    type="button"
                    class="thumb"
                    :aria-label="`放大檢視：${altFor(index)}`"
                    @click="open(index)"
                >
                    <LazyImage
                        :src="img"
                        :alt="altFor(index)"
                    />
                </button>
            </v-col>
        </v-row>

        <v-dialog
            v-model="viewerOpen"
            max-width="1400"
            scrim="black"
            :aria-label="`${workTitle || '專案'} 截圖預覽`"
        >
            <div class="viewer">
                <div class="viewer-bar">
                    <span
                        v-if="images.length > 1"
                        class="viewer-count"
                    >{{ current + 1 }} / {{ images.length }}</span>
                    <v-spacer />
                    <v-btn
                        icon="mdi-close"
                        variant="text"
                        color="white"
                        aria-label="關閉預覽"
                        @click="viewerOpen = false"
                    />
                </div>

                <div class="viewer-stage">
                    <v-btn
                        v-if="images.length > 1"
                        class="viewer-nav prev"
                        icon="mdi-chevron-left"
                        variant="tonal"
                        color="white"
                        aria-label="上一張"
                        @click="step(-1)"
                    />
                    <img
                        :src="images[current]"
                        :alt="altFor(current)"
                        class="viewer-image"
                    >
                    <v-btn
                        v-if="images.length > 1"
                        class="viewer-nav next"
                        icon="mdi-chevron-right"
                        variant="tonal"
                        color="white"
                        aria-label="下一張"
                        @click="step(1)"
                    />
                </div>
            </div>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import LazyImage from './LazyImage.vue';

const props = defineProps<{
    images: string[]
    workTitle?: string  // 用於生成 alt 文字
}>();

const viewerOpen = ref(false);
const current = ref(0);

function altFor(index: number): string {
    const title = props.workTitle || '專案';

    return props.images.length === 1 ? `${title} 截圖` : `${title} 截圖 ${index + 1}`;
}

function open(index: number): void {
    current.value = index;
    viewerOpen.value = true;
}

// 循環切換：最後一張的下一張回到第一張
function step(delta: number): void {
    const count = props.images.length;

    current.value = (current.value + delta + count) % count;
}

// 方向鍵切換；對話框的焦點不一定在內容上，所以只在預覽開啟期間監聽 window
function onKeydown(event: KeyboardEvent): void {
    if (props.images.length < 2) return;
    if (event.key === 'ArrowLeft') step(-1);
    if (event.key === 'ArrowRight') step(1);
}

watch(viewerOpen, (isOpen) => {
    if (isOpen) window.addEventListener('keydown', onKeydown);
    else window.removeEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown));
</script>

<style scoped>
.thumb {
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    background: none;
    cursor: zoom-in;
    transition: opacity 0.15s;
}

.thumb:hover {
    opacity: 0.85;
}

.thumb:focus-visible {
    outline: 2px solid rgb(var(--v-theme-secondary));
    outline-offset: 4px;
}

.viewer {
    display: flex;
    flex-direction: column;
}

.viewer-bar {
    display: flex;
    align-items: center;
    min-height: 48px;
}

.viewer-count {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.875rem;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.08em;
}

.viewer-stage {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.viewer-image {
    display: block;
    max-width: 100%;
    max-height: 85vh;
    object-fit: contain;
}

.viewer-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.viewer-nav.prev {
    left: 8px;
}

.viewer-nav.next {
    right: 8px;
}
</style>
