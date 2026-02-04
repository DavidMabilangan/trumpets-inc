<script setup>
    import { defineAsyncComponent } from 'vue';
    const home = defineAsyncComponent(() => import('~/components/pages/home/PageContent.vue'));
</script>
<template>
    <home />
</template> 