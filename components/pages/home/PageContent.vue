<script setup>
    import { defineAsyncComponent } from 'vue';
import WorkShop from './sections/WorkShop.vue';

    const topofthefold = defineAsyncComponent(() => import('./sections/TopOfTheFold'));
    const shows = defineAsyncComponent(()=> import ('./sections/Shows'))
    const workshop = defineAsyncComponent(() => import('./sections/WorkShop'))
</script>

<template>
    <topofthefold />

    <shows/>

    <workshop/>
</template>