<script setup>
import ContainerTemplate from '~/components/templates/wrapper/ContainerTemplate.vue';

</script>

<template>
  <ContainerTemplate :templates="['w-1440']">
    <section :class="$style['top-of-the-fold']">
      <h1>HELLO</h1>
    </section>
  </ContainerTemplate>
</template>

<style lang="stylus" module>
.top-of-the-fold
  color: red
</style>
