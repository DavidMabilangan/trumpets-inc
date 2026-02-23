<script setup>
    import { defineAsyncComponent } from 'vue';
    
    const shows = defineAsyncComponent(() => import('~/components/pages/shows/PageContent.vue'));
</script>

<template>
    <shows />
</template>