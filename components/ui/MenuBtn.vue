<template>
    <v-btn
        icon
        color="primary"
        :class="{
            'opacity-100': drawer
        }"
        variant="plain"
        :ripple="false"
        @click="toggleMobileMenu"
    >
        <v-icon :icon="drawer ? 'mdi-close' : 'mdi-menu'"/>
    </v-btn>
</template>

<script lang="ts" setup>
const {
    drawer, toggleMobileMenu, 
} = useNavigator();

</script>