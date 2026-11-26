<template>
    <v-row no-gutters class="pt-md-10">
        <v-col
            cols="12"
            md="10"
            lg="9"
        >
            <p class="eyebrow text-secondary mb-6">
                AI Solutions Engineer · Taiwan
            </p>
            <h1 class="display-title mb-8">
                I Build AI Systems That Solve
                <span class="text-secondary">Real Business Problems.</span>
            </h1>
            <p class="text-h6 font-weight-regular text-lightgrey mb-10" :style="{ maxWidth: '720px', lineHeight: 1.7 }">
                我協助企業將業務流程與既有系統透過 AI 整合，打造能真正投入營運的解決方案。從需求探索、系統架構、AI Agent 開發，到產品部署上線與後續維護，提供完整的技術交付。
            </p>
            <div class="d-flex flex-wrap ga-3 mb-8">
                <v-btn
                    color="secondary"
                    size="x-large"
                    variant="flat"
                    class="text-none"
                    rounded="0"
                    @click="onNavClick('#cases')"
                >
                    View Case Studies
                </v-btn>
                <v-btn
                    color="primary"
                    size="x-large"
                    variant="outlined"
                    class="text-none"
                    rounded="0"
                    @click="onNavClick('#contact')"
                >
                    Discuss a Project
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
