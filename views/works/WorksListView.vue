<template>
    <section
        :style="{
            'padding-top': '30px',
            'padding-bottom': '60px'
        }"
    >
        <v-container>
            <v-row no-gutters class="ga-3 mb-4 align-center">
                <v-btn-toggle
                    v-model="selectedType"
                    variant="outlined"
                    color="primary"
                    mandatory
                >
                    <v-btn
                        class="text-none"
                        value="work"
                        text="合作案例"
                    />
                    <v-btn
                        class="text-none"
                        value="side_project"
                        text="Side Projects"
                    />
                </v-btn-toggle>
            </v-row>

            <v-table class="bg-transparent">
                <thead>
                    <tr>
                        <td class="text-h6 font-weight-bold text-grey">Year</td>
                        <td class="text-h6 font-weight-bold text-grey">Title</td>
                        <td v-if="smAndUp" class="text-h6 font-weight-bold text-grey">Built with</td>
                        <td class="text-h6 font-weight-bold text-grey">Link</td>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="work in works" 
                        v-show="(work.type || 'work') === selectedType"
                        :key="work.slug"
                    >
                        <td class="border-none text-body-1 text-primary font-weight-bold">
                            {{ work.year }}
                        </td>
                        <td class="border-none">
                            <v-btn
                                variant="plain"
                                color="secondary"
                                size="sm"
                                :to="`/works/${work.slug}`"
                                :max-width="!smAndUp ? 180 : ''"
                                :ripple="false"
                                class="text-none"
                            >
                                <p
                                    class="text-wrap"
                                    :class="{
                                        'text-body-1': !smAndUp,
                                        'text-h6': smAndUp
                                    }"
                                >
                                    {{ work.title }}
                                </p>
                            </v-btn>
                        </td>
                        <td
                            v-if="smAndUp"
                            class="border-none"
                            :style="{ maxWidth: '300px' }"
                        >
                            <v-row no-gutters class="ga-1 py-3">
                                <v-col
                                    v-for="tech of sortedTechList(work.tech)"
                                    :key="tech"
                                    cols="auto"
                                >
                                    <v-chip
                                        size="sm"
                                        color="primary"
                                        class="px-2"
                                    >
                                        {{ tech }}
                                    </v-chip>
                                </v-col>
                            </v-row>
                        </td>
                        <td class="border-none">
                            <v-row no-gutters class="align-center ga-3 flex-nowrap">
                                <v-col v-if="work.github" cols="auto">
                                    <v-btn
                                        variant="plain"
                                        target="_blank"
                                        color="primary"
                                        icon="mdi-github"
                                        size="sm"
                                        :href="work.github"
                                        :ripple="false"
                                    />
                                </v-col>
                                <v-col v-if="work.url" cols="auto">
                                    <v-btn
                                        variant="plain"
                                        target="_blank"
                                        color="primary"
                                        icon="mdi-open-in-new"
                                        size="sm"
                                        :href="work.url"
                                        :ripple="false"
                                    />
                                </v-col>
                            </v-row>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type {
    Work, WorkType, 
} from '~/types';

const { smAndUp } = useDisplay();

const selectedType = ref<WorkType>();

const { data: works } = await useAsyncData('works', () => 
    queryContent<Work>('/works')
        .sort({ year: -1 })
        .find(),
);

const sortedTechList = (techs: string[]) => {
    return techs.sort((a,b) => a.localeCompare(b));
};

onMounted(() => {
    selectedType.value = 'work';
});
</script>