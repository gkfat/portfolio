<template>
    <v-container
        :max-width="1000"
        class="pt-10"
    >
        <!--<v-row class="mb-14">
            <v-col cols="12">
                <p class="text-h5 text-center font-weight-medium">
                    {{ t('nav.' + NavItems.About) }}
                </p>
            </v-col>
            <v-col col="12">
                <v-divider
                    thickness="3"
                    class="w-25 mx-auto"
                />
            </v-col>
        </v-row>-->

        <v-row
            justify="center"
            justify-sm="start"
        >
            <!-- Avatar -->
            <v-col
                cols="auto"
                sm="2"
            >
                <v-avatar size="110">
                    <v-img
                        :aspect-ratio="1/1"
                        src="/gkfat.png"
                        contain
                    />
                </v-avatar>
            </v-col>
            <!-- 介紹 -->
            <v-col
                cols="auto"
                sm="10"
            >
                <h5
                    class="text-h5 mb-3 text-primary font-weight-bold"
                    style="letter-spacing: 1px !important;"
                >
                    王哲楷 | Gk Wang
                </h5>

                <v-chip
                    color="warning"
                    class="rounded-xl mb-8"
                    style="letter-spacing: 1px;"
                    variant="flat"
                    label
                >
                    Full-stack developer
                </v-chip>

                <p class="mb-3">
                    我是 Gk，一名全端工程師。由於本科設計系的訓練，對於美感有較高要求，從程式碼編排格式、註解、命名風格、架構設計、效能到說明文件編寫，一以貫之。具備美感的程式碼及文件，才能流暢交付，節省大量無形溝通成本。
                </p>
                <p class="mb-5">
                    在交付期限與品質的拉鋸間，我能提出最佳解決方案。事前分析規劃、良好的架構設計、清楚的文件，才能確保開發效率，減少除錯時間。在期限內達到品質保證，取得完美平衡，就是我所追求的軟體開發標準。
                </p>

                <!-- Social media -->
                <v-row class="mx-0 my-5 ga-1">
                    <v-col
                        v-for="(item, i) of socialMedias"
                        :key="i"
                        cols="12"
                        sm="auto"
                        class="pa-1"
                    >
                        <v-btn
                            block
                            color="primary"
                            :href="item.link"
                            target="_blank"
                            variant="outlined"
                            class="text-none"
                            :prepend-icon="item.icon"
                        >
                            {{ item.title }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
const socialMedias: { title: string; link: string; icon: string; }[] = [
    {
        title: 'Resume',
        link: 'https://www.cakeresume.com/s--nFb6N436eKp-1VNtf_cmSg--/gk-wang',
        icon: 'mdi-file-account',
    },
    {
        title: 'Github',
        link: 'https://github.com/gkfat',
        icon: 'mdi-github',
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/gkgkwang',
        icon: 'mdi-linkedin',
    },
    {
        title: 'Email',
        link: 'mailto:gkgkdesign@gmail.com',
        icon: 'mdi-email',
    },
    {
        title: 'Tech Blog',
        link: 'https://gkfat.github.io',
        icon: 'mdi-note',
    },
];
</script>
