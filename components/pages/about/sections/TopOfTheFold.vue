<script setup lang="ts">
import ContainerTemplate from '~/components/templates/wrapper/ContainerTemplate.vue';

</script>




<template>
    <ContainerTemplate :templates="['w-2000']" :class="styl['about']">
        <ContainerTemplate :templates="['w-1440', 'padding-tb-250']" >
            <h1 :class="styl['about__header']"> About Trumpets</h1>
        </ContainerTemplate>
    </ContainerTemplate>
</template>

<style lang="stylus" module="styl"> 
    .about
        background-image: url('/banners/aboutBanner.webp')
        background-size: cover
        background-position: center
        background-repeat: no-repeat
        &__header
            font-size: 60px
            max-width: var(--bold)

</style>