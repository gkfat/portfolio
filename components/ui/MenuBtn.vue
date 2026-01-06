<template>
    <div 
        class="hamburger-menu position-relative d-flex justify-space-between align-end flex-column cursor-pointer" 
        @click="toggleMobileMenu"
    >
        <input 
            type="checkbox" 
            :checked="drawer"
            class="position-absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"
            readonly
        >
        <span class="bg-primary" />
        <span class="bg-secondary" />
        <span class="bg-primary" />
    </div>
</template>

<script lang="ts" setup>
const {
    drawer, toggleMobileMenu, 
} = useNavigator();

</script>

<style lang="scss" scoped>
.hamburger-menu {
    width: 40px;
    height: 32px;

    span {
        height: 3px;
        transition: all 0.3s ease;
        border-radius: 2px;

        &:nth-child(2) {
            width: 100%;
        }
        &:nth-child(3) {
            width: 80%;
        }
        &:nth-child(4) {
            width: 60%;
        }
    }
    
    input:checked {
        ~ span {
            width: 100%;

            &:nth-child(2) {
                transform: translateY(14.5px) rotate(45deg);
            }
            &:nth-child(3) {
                opacity: 0;
                transform: translateX(-20px);
            }
            &:nth-child(4) {
                transform: translateY(-14.5px) rotate(-45deg);
            }
        }
    }
}

</style>