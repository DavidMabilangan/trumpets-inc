<script setup>
import ContainerTemplate from '~/components/templates/wrapper/ContainerTemplate.vue';

</script>

<template>
  <ContainerTemplate :templates="['w-2000']" :class="styl['top-of-the-fold']">
    <ContainerTemplate :templates="['w-1440', 'padding-tb-250']">
      <h1 :class="styl['top-of-the-fold__header']">Bringing Stories of Faith to Life Throught Theater</h1>
    </ContainerTemplate>
  </ContainerTemplate>
</template>

<style lang="stylus" module='styl'>
  .top-of-the-fold
    background-image: url('/banners/heroBanner.webp')
    background-repeat: no-repeat
    background-size: cover
    background-position: center right
    &__header
      font-size: 60px
      max-width: 700px

@media (max-width: 1024px) and (min-width: 280px)
  .top-of-the-fold
    &__header
      font-size: 30px
      max-width: unset
    
      
</style>
