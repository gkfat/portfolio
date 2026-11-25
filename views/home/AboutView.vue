<template>
    <div class="about">
        <!-- 自我介紹 + 照片 -->
        <v-row
            no-gutters
            class="align-start"
        >
            <v-col
                cols="12"
                md="8"
                class="pe-md-10"
            >
                <p class="lead text-primary mb-5">
                    {{ intro.lead }}
                </p>
                <p class="text-body-1 text-lightgrey mb-0">
                    {{ intro.background }}
                </p>
            </v-col>

            <v-col
                cols="12"
                md="4"
                class="mt-8 mt-md-0"
            >
                <v-img
                    alt="Gk Wang 個人照片"
                    :src="AvatarImg"
                    aspect-ratio="1"
                    cover
                    :max-width="220"
                    class="ms-md-auto"
                />
            </v-col>
        </v-row>

        <!-- 工作方式 -->
        <section class="mt-12">
            <p class="eyebrow text-secondary rule-top pt-4 mb-5">
                我的工作方式
            </p>
            <v-row>
                <v-col
                    v-for="(step, i) in approach"
                    :key="step.title"
                    cols="12"
                    sm="6"
                >
                    <p class="eyebrow text-secondary mb-1">
                        {{ String(i + 1).padStart(2, '0') }}
                    </p>
                    <h3 class="text-h6 font-weight-bold mb-1">
                        {{ step.title }}
                    </h3>
                    <p class="text-body-2 text-lightgrey mb-0">
                        {{ step.desc }}
                    </p>
                </v-col>
            </v-row>
        </section>

        <!-- 技能 -->
        <section class="mt-10">
            <p class="eyebrow text-secondary rule-top pt-4 mb-4">
                近期較常使用的技能
            </p>
            <div class="d-flex flex-wrap ga-2">
                <v-chip
                    v-for="skill in skills"
                    :key="skill"
                    variant="outlined"
                    rounded="0"
                >
                    {{ skill }}
                </v-chip>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import AvatarImg from '~/public/avatar.jpg';

const intro = {
    lead: '我是 Gk Wang。真正稀缺的能力不再是寫出程式，而是定義問題、設計架構與整合需求。',
    background: '我從設計、行銷、文案到軟體開發，橫跨產品打造的多個角色，能理解需求、規劃流程、設計系統，也能和不同角色順暢溝通。',
};

type ApproachStep = {
    title: string;
    desc: string;
};

const approach: ApproachStep[] = [
    {
        title: 'Understand the Business',
        desc: '理解營運流程、痛點與真正需求',
    },
    {
        title: 'Design the Solution',
        desc: '規劃系統架構、資料流、API 與 AI 應用方式',
    },
    {
        title: 'Build & Integrate',
        desc: '開發軟體、整合現有系統與第三方服務',
    },
    {
        title: 'Deploy & Iterate',
        desc: '部署、測試，並依實際使用情況持續改善',
    },
];

const skills = [
    'JavaScript(ES6+)',
    'TypeScript',
    'Vue(3+)',
    'Angular(19+)',
    'React',
    'Node.js',
    'Claude',
];
</script>

<style scoped>
.lead {
    font-size: 1.375rem;
    font-weight: 500;
    line-height: 1.7;
}

@media (max-width: 599px) {
    .lead {
        font-size: 1.1875rem;
    }
}
</style>
