<template>
    <div>
        <v-row
            v-for="(work, i) in caseStudies"
            :key="work.slug"
            no-gutters
            class="py-10 align-center"
            :class="{ 'rule-top': i > 0 }"
        >
            <v-col
                cols="12"
                md="5"
                class="pe-md-10 mb-8 mb-md-0"
            >
                <p class="eyebrow text-secondary mb-2">
                    {{ getWorkTypeLabel(work.type) }}<template v-if="work.industry">
                        · {{ work.industry }}
                    </template>
                </p>
                <h3 class="text-h5 font-weight-bold mb-5">
                    {{ work.title }}
                </h3>
                <dl class="mb-6">
                    <template
                        v-for="field in cardFields"
                        :key="field.label"
                    >
                        <dt class="eyebrow text-secondary mb-1">
                            {{ field.label }}
                        </dt>
                        <dd class="text-body-2 mb-4">
                            {{ formatField(work.featured, field.key) }}
                        </dd>
                    </template>
                </dl>
                <v-btn
                    :to="`/works/${work.slug}`"
                    variant="outlined"
                    rounded="0"
                    class="text-none"
                    append-icon="mdi-arrow-right"
                >
                    查看案例詳情
                </v-btn>
            </v-col>

            <v-col
                cols="12"
                md="7"
            >
                <DeviceMockup
                    :desktop-src="work.featured.mockup.desktop"
                    :mobile-src="work.featured.mockup.mobile"
                    :alt="work.title"
                />
            </v-col>
        </v-row>

        <div class="rule-top pt-8">
            <v-btn
                to="/works"
                color="primary"
                size="large"
                variant="outlined"
                rounded="0"
                class="text-none"
                append-icon="mdi-arrow-right"
            >
                查看所有作品
            </v-btn>
        </div>
    </div>
</template>

<script lang="ts" setup>
import DeviceMockup from '~/components/ui/DeviceMockup.vue';
import type {
    FeaturedCase, Work,
} from '~/types';

type FeaturedWork = Work & { featured: FeaturedCase };

type CardFieldKey = 'context' | 'problem' | 'outcome' | 'capabilities';

type CardField = {
    label: string;
    key: CardFieldKey;
};

// 卡片指標：業務情境、解決的問題、主要成果或驗證狀態、核心能力
const cardFields: CardField[] = [
    {
        label: '業務情境',
        key: 'context',
    },
    {
        label: '解決的問題',
        key: 'problem',
    },
    {
        label: '成果與驗證狀態',
        key: 'outcome',
    },
    {
        label: '核心能力',
        key: 'capabilities',
    },
];

const formatField = (featured: FeaturedCase, key: CardFieldKey): string => {
    const value = featured[key];

    return Array.isArray(value) ? value.join(' · ') : value;
};

const isFeaturedWork = (work: Work): work is FeaturedWork => Boolean(work.featured);

// 首頁案例由各作品 front matter 的 featured 欄位決定，依 featured.order 排序
const { data: caseStudies } = await useAsyncData('featured-case-studies', async () => {
    const works = await queryContent<Work>('/works')
        .where({ featured: { $exists: true } })
        .find();

    return works
        .filter(isFeaturedWork)
        .sort((a, b) => a.featured.order - b.featured.order);
});
</script>
