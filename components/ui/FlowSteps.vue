<template>
    <v-timeline
        side="end"
        align="start"
        density="compact"
        line-color="lightgrey"
        line-thickness="2"
        class="steps"
    >
        <v-timeline-item
            v-for="(step, i) in steps"
            :key="step.title"
            dot-color="secondary"
            size="small"
            fill-dot
        >
            <template #icon>
                <span class="step-no">{{ String(i + 1).padStart(2, '0') }}</span>
            </template>

            <p class="step-title">
                {{ step.title }}
            </p>
            <p class="step-desc">
                {{ step.desc }}
            </p>
        </v-timeline-item>
    </v-timeline>
</template>

<script lang="ts">
export type FlowStep = {
    title: string;
    desc: string;
};
</script>

<script lang="ts" setup>
defineProps<{ steps: FlowStep[] }>();
</script>

<style scoped>
.steps {
    margin-top: 16px;
}

.step-no {
    color: rgb(var(--v-theme-background));
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.02em;
}

.step-title {
    margin: 0;
    color: rgb(var(--v-theme-primary));
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.4;
}

.step-desc {
    margin: 2px 0 0;
    color: rgb(var(--v-theme-lightgrey));
    font-size: 0.9375rem;
    line-height: 1.6;
}

.steps :deep(.v-timeline-item) {
    padding-bottom: 20px;
}
</style>
