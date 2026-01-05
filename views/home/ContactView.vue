import { contactInfo } from '../../config/config';
<template>
    <v-row no-gutters class="justify-center align-center flex-column ga-5">
        <v-col cols="auto">
            <h3 class="text-h4 font-weight-bold">保持聯絡</h3>
        </v-col>

        <v-col cols="auto">
            <p  class="text-center">
                雖然我目前並未尋找新的工作機會，但我的信箱隨時開啟。<br>
                若您有任何疑問，或單純只是想要聯繫我，請直接來信。我會盡我所能回覆您！
            </p>
        </v-col>
        
        <v-col cols="auto">
            <v-btn
                variant="outlined"
                size="x-large"
                class="text-none"
                color="secondary"
                :href="`mailto:${contactInfo.email}`"
            >
                寫封郵件吧
            </v-btn>
        </v-col>

        <v-col cols="auto" class="text-center">
            <v-chip
                color="success"
                variant="tonal"
                size="small"
                class="mb-2"
            >
                快速回應
            </v-chip>
            <p class="text-grey-darken-1 text-caption">
                通常在 24 小時內回覆
            </p>
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
import { contactInfo } from '~/config/config';

</script>