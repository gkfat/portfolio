<template>
    <div class="cards">
        <section
            v-for="group in groups"
            :key="group.title"
            class="card"
        >
            <h3 class="card-title">
                {{ group.title }}
            </h3>
            <div class="items">
                <p
                    v-for="item in group.items"
                    :key="item"
                    class="item"
                >
                    {{ item }}
                </p>
                <p
                    v-for="item in group.experiments"
                    :key="item"
                    class="item experiment"
                >
                    <span>{{ item }}</span>
                    <span class="tag">EXPERIMENT</span>
                </p>
            </div>
        </section>
    </div>
</template>
<script lang="ts" setup>
type Group = {
    title: string;
    items: string[];
    experiments?: string[];
};

// 僅列出已在作品中實作的能力；尚未有正式交付經驗者標記為 Experiment
const groups: Group[] = [
    {
        title: 'AI Engineering',
        items: ['AI-assisted Development（SDD 規格驅動開發）'],
        experiments: [
            'LLM API Integration',
            'RAG / Embedding',
            'Function Calling',
        ],
    },
    {
        title: 'Backend & Integration',
        items: [
            'RESTful API',
            'Authentication / RBAC',
            'Third-party Login（Google / LINE / OTP）',
            'Firebase / Firestore',
        ],
    },
    {
        title: 'Frontend & Product',
        items: [
            'Vue / Nuxt / TypeScript',
            'Admin Dashboard',
            'SaaS Architecture（Monorepo）',
            'LINE LIFF',
        ],
    },
    {
        title: 'Deployment & Operations',
        items: ['Cloud Deployment', 'Automated Deployment Setup'],
    },
];
</script>

<style scoped>
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
    gap: 16px;
}

.card {
    padding: 20px 22px 12px;
    border: 1px solid var(--hairline);
    background: rgb(var(--v-theme-surface));
}

.card-title {
    margin: 0 0 8px;
    color: rgb(var(--v-theme-secondary));
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.item {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 4px 10px;
    margin: 0;
    padding: 11px 0;
    border-top: 1px solid var(--hairline);
    color: rgb(var(--v-theme-primary));
    font-size: 1rem;
    line-height: 1.5;
}

.experiment {
    color: rgb(var(--v-theme-lightgrey));
}

.tag {
    padding: 0 7px;
    border: 1px solid var(--hairline);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    line-height: 1.7;
}
</style>
