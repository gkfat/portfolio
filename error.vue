<template>
    <div />
</template>

<script setup lang="ts">
const error = useError();

// 其他錯誤也重導向到 / (可選)
if (error.value) {
    await navigateTo('/', { replace: true });
}
</script>