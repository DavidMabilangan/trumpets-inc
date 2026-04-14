<script setup>
    import { defineAsyncComponent } from 'vue';
    
    const topofthefold = defineAsyncComponent(() => import('./sections/TopOfTheFold.vue'));
    const abouttrumpets = defineAsyncComponent(()=> import('./sections/AboutTrumpets.vue'))
</script>

<template>
    <topofthefold />
    <abouttrumpets/>
</template>
