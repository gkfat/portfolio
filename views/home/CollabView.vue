<template>
    <section class="collab">
        <p class="lead">
            {{ statement }}
        </p>

        <div class="flow">
            <div class="node">
                <p class="title">
                    討論
                </p>
                <p class="sub">
                    從明確需求或一個想像開始
                </p>
                <span
                    class="fwd"
                    aria-hidden="true"
                >→</span>
            </div>

            <!-- 迴圈：Prototype → 試用與調整 → 反覆修正 → 回到 Prototype -->
            <div class="loop-group">
                <div class="node proto">
                    <p class="title">
                        Prototype
                    </p>
                    <p class="sub">
                        約 1 週，視規模而定
                    </p>
                    <span
                        class="fwd"
                        aria-hidden="true"
                    >→</span>
                </div>

                <div class="node">
                    <p class="title">
                        試用與調整
                    </p>
                    <p class="sub">
                        實際試用後調整
                    </p>
                    <span
                        class="fwd"
                        aria-hidden="true"
                    >→</span>
                </div>

                <div class="node">
                    <p class="title">
                        反覆修正
                    </p>
                    <p class="sub">
                        一步步更靠近理想
                    </p>
                    <p class="back-note">
                        ↺ 再回到 Prototype
                    </p>
                    <span
                        class="fwd"
                        aria-hidden="true"
                    >→</span>
                </div>

                <div
                    class="loop-line"
                    aria-hidden="true"
                >
                    <span class="loop-label">再回到 Prototype</span>
                </div>
            </div>

            <a
                href="#solutions"
                class="node goal"
                @click.prevent="onNavClick('#solutions')"
            >
                <p class="title">
                    解決方案
                </p>
                <p class="sub">
                    看我能解決的問題
                </p>
                <span
                    class="goal-arrow"
                    aria-hidden="true"
                >↓</span>
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
const { onNavClick } = useNavigator();

const statement = '不論需求已有明確的定義，或只是一個想像，我都能藉由討論，快速製作 prototype，再透過試用與調整，反覆修正、更靠近理想。';
</script>

<style scoped>
/* 以容器寬度切換版型：窄 = 垂直堆疊，寬 = 橫向主軸 */
.collab {
    container-type: inline-size;
}

.lead {
    max-width: 760px;
    margin: 0 0 36px;
    color: rgb(var(--v-theme-primary));
    font-size: 1.1875rem;
    font-weight: 500;
    line-height: 1.75;
}

/* ===== 手機（預設）：垂直堆疊 ===== */
.flow {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.loop-group {
    position: relative;
    display: grid;
    row-gap: 28px;
    padding-right: 52px;
}

.node {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 84px;
    padding: 14px 18px;
    border: 1px solid var(--hairline);
    background: rgb(var(--v-theme-surface));
}

.title {
    margin: 0;
    color: rgb(var(--v-theme-primary));
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.4;
}

.sub {
    margin: 2px 0 0;
    color: rgb(var(--v-theme-lightgrey));
    font-size: 0.875rem;
    line-height: 1.5;
}

.back-note {
    margin: 2px 0 0;
    color: rgb(var(--v-theme-secondary));
    font-size: 0.875rem;
    font-weight: 600;
}

.proto {
    border: 1.5px solid rgb(var(--v-theme-secondary));
}

/* 往下一步的箭頭：手機朝下 */
.fwd {
    position: absolute;
    top: 100%;
    left: 50%;
    height: 28px;
    color: rgb(var(--v-theme-secondary));
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 28px;
    transform: translateX(-50%) rotate(90deg);
}

/* 回頭線：從「反覆修正」右側繞回「Prototype」 */
.loop-line {
    position: absolute;
    top: 42px;
    right: 0;
    bottom: 42px;
    width: 52px;
    border: 2px solid rgb(var(--v-theme-secondary));
    border-left: none;
}

.loop-line::before {
    content: '';
    position: absolute;
    top: -7px;
    left: -1px;
    border-top: 6px solid transparent;
    border-right: 9px solid rgb(var(--v-theme-secondary));
    border-bottom: 6px solid transparent;
}

.loop-label {
    display: none;
}

/* 終點：解決方案 */
.goal {
    border-color: rgb(var(--v-theme-secondary));
    background: rgb(var(--v-theme-secondary));
    text-decoration: none;
    transition: filter 0.2s ease;
}

.goal:hover {
    filter: brightness(1.1);
}

.goal:focus-visible {
    outline: 2px solid rgb(var(--v-theme-primary));
    outline-offset: 3px;
}

.goal .title {
    color: rgb(var(--v-theme-background));
}

.goal .sub {
    color: rgb(var(--v-theme-background));
    opacity: 0.8;
}

.goal-arrow {
    position: absolute;
    top: 50%;
    right: 20px;
    color: rgb(var(--v-theme-background));
    font-size: 1.5rem;
    font-weight: 700;
    transform: translateY(-50%);
}

/* ===== 桌機：橫向主軸＋底部回頭弧線 ===== */
@container (min-width: 760px) {
    .lead {
        font-size: 1.375rem;
        margin-bottom: 44px;
    }

    .flow {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        column-gap: 44px;
        row-gap: 0;
        align-items: stretch;
    }

    .loop-group {
        display: contents;
    }

    .node {
        min-height: 96px;
    }

    .fwd {
        top: 50%;
        left: 100%;
        width: 44px;
        height: auto;
        line-height: 1;
        text-align: center;
        transform: translateY(-50%);
    }

    .back-note {
        display: none;
    }

    /* 弧線：由「反覆修正」底部，回到「Prototype」底部 */
    .loop-line {
        position: relative;
        grid-column: 2 / 5;
        grid-row: 2;
        inset: auto;
        width: auto;
        height: 52px;
        margin: 0 calc(100% / 6 - 44px / 3);
        border: 2px solid rgb(var(--v-theme-secondary));
        border-top: none;
    }

    .loop-line::before {
        top: -1px;
        left: -7px;
        border-top: none;
        border-right: 6px solid transparent;
        border-bottom: 9px solid rgb(var(--v-theme-secondary));
        border-left: 6px solid transparent;
    }

    .loop-label {
        position: absolute;
        bottom: 0;
        left: 50%;
        display: block;
        padding: 0 14px;
        background: rgb(var(--v-theme-background));
        color: rgb(var(--v-theme-secondary));
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        transform: translate(-50%, 50%);
    }

    .goal-arrow {
        right: 18px;
    }
}
</style>
