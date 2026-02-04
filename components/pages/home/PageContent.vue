<script setup>
    import { defineAsyncComponent } from 'vue';

    const topofthefold = defineAsyncComponent(() => import('./sections/TopOfTheFold.vue'));
</script>

<template>
    <topofthefold />
</template>