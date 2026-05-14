<script setup>
</script>

<template>
  <ContainerTemplate :templates="['w-2000']" :class="styl['top-of-the-fold']">
    <ContainerTemplate :templates="['w-1440', 'padding-tb-300']" :class="styl['top-of-the-fold__container']">
      <HeadingTemplate
        :heading="{
          title: {
            level: 1,
            text: 'Bringing Stories of Faith to <br> Life Throught Theater',
            templates: ['fs-50', 'gold', 'uppercase']
          }
        }"
        :templates="['ff-primary', 'fw-bold']"
        :class="styl['top-of-the-fold__container-heading']"
      />
    </ContainerTemplate>
  </ContainerTemplate>
</template>

<style lang="stylus" module='styl'>
  .top-of-the-fold
    background-image: url('/banners/heroBanner.webp')
    background-repeat: no-repeat
    background-size: cover
    background-position: center right
    overflow: hidden
    &__container
      position: relative
      &-heading
        position: absolute
        bottom: 50px
        left: 50px


</style>
