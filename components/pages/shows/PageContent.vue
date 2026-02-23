<script setup>
    import {defineAsyncComponent} from 'vue';

    const topofthefold = defineAsyncComponent(() => import('./sections/TopOfTheFold.vue'));
    const shows = defineAsyncComponent(() => import('./sections/Shows.vue'))
</script>

<template>
    <topofthefold />

    <shows/>
</template>