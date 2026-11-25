<template>
    <div class="flows">
        <p
            v-if="intro"
            class="intro"
        >
            {{ intro }}
        </p>

        <section
            v-for="flow in flows"
            :key="flow.no"
            class="flow"
        >
            <p class="flow-no">
                {{ flow.no }}
            </p>
            <h3 class="flow-title">
                {{ flow.title }}
            </h3>
            <p class="flow-actors">
                {{ flow.actors }}
            </p>
            <FlowSteps :steps="flow.steps" />
        </section>
    </div>
</template>

<script lang="ts">
import type { FlowStep } from '~/components/ui/FlowSteps.vue';
</script>

<script lang="ts" setup>
import FlowSteps from '~/components/ui/FlowSteps.vue';

export type Flow = {
    no: string;
    title: string;
    actors: string;
    steps: FlowStep[];
};

defineProps<{
    flows: Flow[];
    intro?: string;
}>();
</script>

<style scoped>
.flows {
    margin: 8px 0 32px;
}

.intro {
    margin: 0 0 16px;
    color: rgb(var(--v-theme-lightgrey));
    font-size: 0.9375rem;
    line-height: 1.7;
}

.flow {
    margin-top: 20px;
    padding: 20px 20px 22px;
    border: 1px solid var(--hairline);
    background: rgb(var(--v-theme-surface));
}

.flow-no {
    margin: 0 0 2px;
    color: rgb(var(--v-theme-secondary));
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.1em;
}

.flow-title {
    margin: 0;
    color: rgb(var(--v-theme-primary));
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.4;
}

.flow-actors {
    margin: 4px 0 14px;
    color: rgb(var(--v-theme-lightgrey));
    font-size: 0.875rem;
    line-height: 1.6;
}
</style>
