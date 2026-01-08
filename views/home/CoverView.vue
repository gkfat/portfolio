<template>
    <div 
        class="position-fixed top-0 left-0 right-0 bottom-0 d-flex justify-center align-center bg-background"
        :style="{ 
            zIndex: 3000,
            transform: getTransform(),
            transition: 'all ease 0.5s'
        }"
    >
        <h1 class="text-h2 text-secondary font-weight-bold">Hello!</h1>
    </div>
</template>

<script lang="ts" setup>
type SlideDirection = 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down';

const props = defineProps<{
    startAnimation: boolean;
    direction?: SlideDirection;
}>();

const getTransform = () => {
    if (!props.startAnimation) return 'translateX(0)';
    
    switch (props.direction) {
    case 'slide-left':
        return 'translateX(-100vw)';
    case 'slide-right':
        return 'translateX(100vw)';
    case 'slide-up':
        return 'translateY(-100vh)';
    case 'slide-down':
        return 'translateY(100vh)';
    default:
        return 'translateX(-100vw)';
    }
};

watch(() => props.startAnimation, (newValue) => {
    if (!newValue) {
        setTimeout(() => {
            //
        }, 1200);
    }
});
</script>

