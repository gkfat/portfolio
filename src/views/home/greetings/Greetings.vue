<template>
    <v-row
        class="justify-center align-end"
        :style="{ height: '70vh' }"
    >
        <v-col cols="auto">
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

            <!-- <p class="text-center">
                <v-btn
                    flat
                    color="secondary"
                    class="text-none text-montserrat font-weight-bold"
                    rounded="lg"
                    size="x-large"
                    @click="scrollToServices"
                >
                    What I provide
                </v-btn>
            </p> -->
        </v-col>
        <v-col
            cols="12"
            class="d-flex justify-center"
        >
            <v-btn
                flat
                variant="plain"
                :ripple="false"
                block
                size="120"
              
                @click="scrollToServices"
            >
                <v-icon
                    color="secondary"
                    icon="mdi-chevron-down"
                    flat
                    size="120"
                />
            </v-btn>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';

const { smAndUp } = useDisplay();

const scrollToServices = () => {
    const element = document.getElementById('services');

    if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: top - 100,
            behavior: 'smooth', 
        });
    }
};
</script>
