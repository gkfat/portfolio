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
