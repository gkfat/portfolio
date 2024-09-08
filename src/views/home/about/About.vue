<template>
    <v-card
        rounded="xl"
        :max-width="660"
        flat
        color="white"
        class="mx-auto border pt-5"
        :class="{
            'pa-8': mdAndUp,
            'pa-4': !mdAndUp
        }"
    >
        <v-card-text class="text-center">
            <v-avatar :size="mdAndUp ? 160 : 120">
                <v-img
                    :aspect-ratio="1/1"
                    src="/avatar.jpg"
                    contain
                />
            </v-avatar>

            <p class="text-h5 text-primary my-5 font-weight-bold">
                王哲楷 | Gk Wang<br>
            </p>

            <SocialMediaGroup :icon-size="'big'" />
        </v-card-text>

        <v-card-text>
            歡迎來信聯絡：<span class="text-caption">{{ URL_SOURCE.socialMedias.email }}</span>
            <br>
            <br>
            我是 Gk，一名全端工程師。由於本科設計系的訓練，對於美感有較高要求，從程式碼編排格式、註解、命名風格、架構設計、效能到說明文件編寫，一以貫之。具備美感的程式碼及文件，才能流暢交付，節省大量無形溝通成本。
            <br>
            <br>
            在交付期限與品質的拉鋸間，我能提出最佳解決方案。事前分析規劃、良好的架構設計、清楚的文件，才能確保開發效率，減少除錯時間。在期限內達到品質保證，取得完美平衡，就是我所追求的軟體開發標準。
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';

import SocialMediaGroup from '@/components/SocialMediaGroup.vue';
import { URL_SOURCE } from '@/data/url-source';

const { mdAndUp } = useDisplay();
</script>
