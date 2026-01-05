<template>
    <v-btn
        flat
        :ripple="false"
        variant="plain"
        class="opacity-100"
        icon
        :height="40"
        @click="homeTop"
    >
        <v-img
            src="/icon-512.png"
            :max-width="40"
            :width="40"
            contain
        />
    </v-btn>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function homeTop() {
    router.push('/');

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
</script>
