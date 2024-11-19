<template>
    <v-row class="align-center fill-height">
        <v-col
            cols="12"
        >
            <p
                class="text-center text-primary mb-3"
                :class="{
                    'text-h4': smAndUp,
                    'text-h6': !smAndUp
                }"
            >
                Hello, I'm Gk Wang
            </p>
            <p
                class="text-center text-primary mb-5"
                :class="{
                    'text-h4': smAndUp,
                    'text-h6': !smAndUp
                }"
            >
                I'm a Web Developer
            </p>

            <p class="text-center">
                <v-btn
                    to="/projects"
                    flat
                    color="secondary"
                    class="text-none"
                    size="x-large"
                >
                    See Project
                </v-btn>
            </p>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';

const { smAndUp } = useDisplay();

</script>
