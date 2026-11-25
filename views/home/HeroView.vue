<template>
    <v-row no-gutters class="pt-md-10">
        <v-col
            cols="12"
            md="10"
            lg="9"
        >
            <p class="eyebrow text-secondary mb-6">
                AI Forward Deployed Engineer · Taiwan
            </p>
            <h1 class="display-title mb-8">
                I Build AI Systems That Solve
                <span class="text-secondary">Real Business Problems.</span>
            </h1>
            <p class="text-h6 font-weight-regular text-lightgrey mb-10" :style="{ maxWidth: '720px', lineHeight: 1.7 }">
                我協助企業整合 AI、既有系統與營運流程，從需求分析、技術架構到產品部署，打造真正能投入生產環境的解決方案。
            </p>
            <div class="d-flex flex-wrap ga-3 mb-8">
                <v-btn
                    color="secondary"
                    size="x-large"
                    variant="flat"
                    class="text-none"
                    rounded="0"
                    @click="onNavClick('#features')"
                >
                    Selected Projects
                </v-btn>
                <v-btn
                    color="primary"
                    size="x-large"
                    variant="outlined"
                    class="text-none"
                    rounded="0"
                    @click="onNavClick('#solutions')"
                >
                    AI Solutions
                </v-btn>
            </div>
            <p class="text-body-2 text-lightgrey">
                <v-icon
                    icon="mdi-circle"
                    color="success"
                    size="10"
                    class="me-2"
                />Available for AI implementation & system integration projects.
            </p>
        </v-col>
    </v-row>
</template>
<script lang="ts" setup>
const { onNavClick } = useNavigator();
</script>
