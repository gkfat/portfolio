<template>
    <v-row
        class="ma-0"
        :justify="props.justify"
    >
        <v-col
            v-for="(item, i) of SocialMedias"
            :key="i"
            cols="auto"
            class="pa-0"
        >
            <IconBtn
                :icon="item.icon"
                :link-url="item.link"
                :icon-size="props.iconSize"
            />
        </v-col>
    </v-row>
</template>
<script lang="ts" setup>
import { SocialMedias } from '@/data/social-media';

import IconBtn from './btn/IconBtn.vue';

const props = withDefaults(defineProps<{
    justify?: 'center' | 'start';
    iconSize?: 'default' | 'big';
}>(), {
    justify: 'center',
    iconSize: 'default',
});
</script>
