<script setup>
    import {  defineAsyncComponent } from 'vue'
    const topbar = defineAsyncComponent(() => import('~/components/general/TopBar.vue'))
    const support = defineAsyncComponent(() => import('~/components/general/Support.vue'))
    const bottombar = defineAsyncComponent(() => import('~/components/general/BottomBar.vue'))
</script>
<template>
    <topbar />
    <section>
        <slot />
    </section>
    <bottombar />
</template>