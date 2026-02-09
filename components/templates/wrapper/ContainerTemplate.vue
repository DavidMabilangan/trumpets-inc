<script setup>
defineProps({
  templates: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section
    :class="[
      styl.template,
      ...templates.map(t => styl[`template--${t}`])
    ]"
  >
    <slot />
  </section>
</template>

<style lang="stylus" module="styl">
.template
  width: 100%
  margin: 0 auto
  &--relative
    position: relative
  &--w-1440
    max-width: 1440px
</style>
