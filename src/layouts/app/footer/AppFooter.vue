<template>
    <v-card
        color="dark"
        flat
        tile
    >
        <v-card-text class="text-center">
            {{ createDate().year() }} GK All rights reserved.
        </v-card-text>
    </v-card>
</template>
<script lang="ts" setup>
import { createDate } from '@/utils/time';

</script>