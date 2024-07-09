<template>
    <div
        ref="containerRef"
        class="w-100 mb-10 d-flex justify-center align-center"
    >
        <div class="w-100 overflow-hidden d-flex justify-center">
            <p
                class="title title-left text-h4 text-center text-primary font-weight-bold"
                :class="{ 'show-up': isVisible }"
            >
                {{ splitTitle.left }}
            </p>
            <p
                class="title title-right text-h4 text-center text-primary font-weight-bold"
                :class="{ 'show-up': isVisible }"
            >
                {{ splitTitle.right }}
            </p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {
    computed,
    onMounted,
    ref,
} from 'vue';

const props = defineProps<{
    title: string;
}>();

const containerRef = ref<HTMLElement>();
const isVisible = ref(false);

const splitTitle = computed(() => {
    const center = Math.floor(props.title.length / 2);
    const left = props.title.slice(0, center);
    const right = props.title.slice(center);

    return {
        left,
        right,
    };
});

const checkVisibility = () => {
    if (!containerRef.value) return;

    const rect = containerRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    isVisible.value = (
        rect.top >= 100 && rect.bottom <= windowHeight
    );
};

onMounted(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
</script>
<style lang="scss" scoped>
.title {
    opacity: 0;
    transition: all 0.3s ease-out;
    letter-spacing: 2px !important;

    &-left {
        transform: translateX(-100%);
    }

    &-right {
        transform: translateX(100%);
    }

    &.show-up {
        opacity: 1;
        transform: translateX(0);
    }
}

</style>
