<template>
    <div class="notes">
        <section
            v-for="(note, i) in notes"
            :key="note.title ?? i"
            class="note"
        >
            <h3
                v-if="note.title"
                class="note-title"
            >
                {{ note.title }}
            </h3>
            <ul class="note-list">
                <li
                    v-for="point in note.points"
                    :key="point"
                >
                    {{ point }}
                </li>
            </ul>
            <p
                v-if="note.value"
                class="note-value"
            >
                <span class="note-value-label">價值</span>{{ note.value }}
            </p>
        </section>
    </div>
</template>

<script lang="ts">
export type FlowNote = {
    title?: string;
    points: string[];
    value?: string;
};
</script>

<script lang="ts" setup>
defineProps<{ notes: FlowNote[] }>();
</script>

<style scoped>
.notes {
    margin-top: 20px;
    padding-top: 8px;
    border-top: 1px solid var(--hairline);
}

.note:first-child {
    margin-top: 10px;
}

.note {
    margin-top: 18px;
}

.note-title {
    margin: 0 0 6px;
    color: rgb(var(--v-theme-secondary));
    font-size: 0.9375rem;
    font-weight: 700;
}

.note-list {
    margin: 0;
    padding-left: 1.25rem;
    list-style: disc;
}

.note-list li {
    margin: 2px 0;
    color: rgb(var(--v-theme-primary));
    font-size: 0.9375rem;
    line-height: 1.7;
}

.note-value {
    margin: 6px 0 0;
    color: rgb(var(--v-theme-primary));
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 1.7;
}

.note-value-label {
    margin-right: 8px;
    padding: 1px 8px;
    border: 1px solid rgb(var(--v-theme-secondary));
    color: rgb(var(--v-theme-secondary));
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
}
</style>
