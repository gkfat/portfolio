<template>
    <v-row
        class="align-center"
        :style="{
            height: '80vh'
        }"
    >
        <v-col
            cols="12"
        >
            <p
                class="text-center text-primary text-montserrat font-weight-bold mb-3"
                :class="{
                    'text-h4': smAndUp,
                    'text-h6': !smAndUp
                }"
            >
                Hello, I'm Gk Wang
            </p>
            <p
                class="text-center text-primary text-montserrat font-weight-bold mb-5"
                :class="{
                    'text-h4': smAndUp,
                    'text-h6': !smAndUp
                }"
            >
                A Web Developer
            </p>

            <p class="text-center">
                <v-btn
                    flat
                    color="secondary"
                    class="text-none text-montserrat font-weight-bold"
                    rounded="lg"
                    size="x-large"
                    @click="scrollToProjects"
                >
                    See Projects
                </v-btn>
            </p>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';

const { smAndUp } = useDisplay();

const scrollToProjects = () => {
    const element = document.getElementById('projects');

    if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: top - 100,
            behavior: 'smooth', 
        });
    }
};
</script>
