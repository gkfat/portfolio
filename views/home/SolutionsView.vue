<template>
    <div>
        <v-row
            v-for="(item, i) in solutions"
            :key="item.title"
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
                    {{ item.eyebrow }}
                </p>
                <h3 class="text-h5 font-weight-bold mb-3">
                    {{ item.title }}
                </h3>
                <p class="text-body-1 mb-4">
                    {{ item.summary }}
                </p>
                <dl class="mb-4">
                    <dt class="eyebrow text-secondary mb-1">
                        這個案例解決了什麼？
                    </dt>
                    <dd class="text-body-2 mb-3">
                        {{ item.problem }}
                    </dd>
                    <dt class="eyebrow text-secondary mb-1">
                        這個案例帶來什麼效益？
                    </dt>
                    <dd class="text-body-2">
                        {{ item.benefit }}
                    </dd>
                </dl>
                <p class="text-body-2 text-lightgrey mb-5">
                    {{ item.tech.join(' · ') }}
                </p>
                <v-btn
                    :to="`/works/${item.slug}`"
                    variant="outlined"
                    rounded="0"
                    class="text-none"
                    append-icon="mdi-arrow-right"
                >
                    查看案例
                </v-btn>
            </v-col>

            <v-col
                cols="12"
                md="7"
            >
                <DeviceMockup
                    :desktop-src="item.desktopSrc"
                    :mobile-src="item.mobileSrc"
                    :alt="item.caseName"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" setup>
import DeviceMockup from '~/components/ui/DeviceMockup.vue';

type Solution = {
    eyebrow: string;
    title: string;
    caseName: string;
    summary: string;
    problem: string;
    benefit: string;
    tech: string[];
    slug: string;
    desktopSrc: string;
    mobileSrc?: string;
};

const solutions: Solution[] = [
    {
        eyebrow: 'Case · CNC MES',
        title: 'Workflow Automation',
        caseName: 'CNC MES 系統',
        summary: '製造現場的生產狀況需要即時回報，管理端才能掌握每張工單進度。現場人員掃描 QR Code 即可把資料登錄進後台，管理端即時追蹤工單，把人工回報的流程數位化。',
        problem: '現場生產進度仰賴人工回報，管理端無法即時掌握每張工單的狀況。',
        benefit: '現場掃描 QR Code 即登錄資料，管理端即時追蹤工單進度，生產資訊全面數位化。',
        tech: [
            'Vue',
            'TypeScript',
            'Vuetify',
        ],
        slug: '2024-cnc-mes',
        desktopSrc: '/images/works/2024-cnc-mes/1.jpg',
    },
    {
        eyebrow: 'Case · 派車系統',
        title: 'System Integration',
        caseName: '派車系統',
        summary: '長照預約派車的需求分散在多個管道。乘客透過 LINE LIFF 表單預約，需求單直接串接到後台，並與內勤電話接單集中管理，消弭資訊落差。',
        problem: '預約需求來自多個管道、資訊分散，車行難以集中管控與安排車趟。',
        benefit: 'LIFF 送單直接進後台並與電話接單集中管理，消弭資訊落差，排車更便利。',
        tech: [
            'LINE LIFF',
            'Vue',
            'TypeScript',
            'Vuetify',
        ],
        slug: '2024-welcabin-admin',
        desktopSrc: '/images/works/2024-welcabin-admin/3.png',
        mobileSrc: '/images/works/2024-welcabin-liff/3.png',
    },
    {
        eyebrow: 'Case · SaaS Starter Kit',
        title: 'Custom Software',
        caseName: 'SaaS Starter Kit 會員系統',
        summary: '把店家常見的會員需求整理成可直接套用的範本：Monorepo 拆成後台管理、API Server 與 LINE 會員卡，涵蓋會員、RBAC 權限、等級、點數、優惠券與預約。',
        problem: '店家需要會員系統，但每次都得從零開發，耗時又重複。',
        benefit: '一套範本涵蓋後台、API 與 LINE 會員卡，挑選需要的功能模組即可快速套用。',
        tech: [
            'Nuxt',
            'Nitro',
            'Firebase',
            'LINE',
        ],
        slug: '2026-saas-starter-kit',
        desktopSrc: '/images/works/2026-saas-starter-kit/1.jpg',
        mobileSrc: '/images/works/2026-saas-starter-kit/20.jpg',
    },
];
</script>
