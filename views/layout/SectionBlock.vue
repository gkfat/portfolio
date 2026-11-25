<template>
    <section
        :id="id"
        :style="{
            'padding-top': smAndUp ? '72px' : '56px',
            'padding-bottom': smAndUp ? '72px' : '56px',
        }"
    >
        <v-container :max-width="1200" class="mx-auto px-6 px-md-16">
            <!-- 無標題（Hero）：滿版 -->
            <slot v-if="!title" />

            <!-- stacked：標題在上、內容全寬 -->
            <div
                v-else-if="stacked"
                class="rule-top"
            >
                <div class="pt-5 pb-2">
                    <p class="eyebrow text-secondary mb-1">
                        {{ prefix }}
                    </p>
                    <h2 class="text-h6 font-weight-bold">
                        {{ title }}
                    </h2>
                </div>
                <slot />
            </div>

            <!-- 12-column grid：左 3 欄標題、右 9 欄內容 -->
            <v-row
                v-else
                class="rule-top"
                no-gutters
            >
                <v-col
                    cols="12"
                    md="3"
                    class="pt-5 pb-6"
                >
                    <p class="eyebrow text-secondary mb-1">
                        {{ prefix }}
                    </p>
                    <h2 class="text-h6 font-weight-bold">
                        {{ title }}
                    </h2>
                </v-col>
                <v-col
                    cols="12"
                    md="9"
                    class="pt-md-5"
                >
                    <slot />
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

defineProps<{
    id?: string;
    prefix?: string;
    title?: string;
    stacked?: boolean;
}>();

const { smAndUp } = useDisplay();
</script>
