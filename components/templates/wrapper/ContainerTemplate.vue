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
  &--w-2000
    max-width: 2000px
  &--padding-tb-250
    padding: 250px 0
  &--padding-tb-300
    padding: 300px 0

@media (max-width: 1024px) and (min-width: 280px)
 .template
    &--padding-tb-300
      padding: 150px
</style>
