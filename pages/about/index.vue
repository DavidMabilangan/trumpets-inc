<script setup>
    import { defineAsyncComponent } from 'vue';
    
    const aboutPage = defineAsyncComponent(() => import('~/components/pages/about/PageContent.vue'));
</script>


<template>
    <aboutPage/>
</template>