<script setup>
    import ContainerTemplate from '~/components/templates/wrapper/ContainerTemplate.vue'

</script>


<template>
    <ContainerTemplate :templates="['w-1440']" :class="styl['support']">
        <h1 :class="styl['support__header']">SEND US A MESSAGE</h1>
        <h2 :class="styl['support__description']">Please feel comfortable reaching out to us via our email form whenever you like; we're here and eager to hear from you</h2>
    </ContainerTemplate>
</template>


<style lang="stylus" module='styl'>
    .support
        text-align: center
        padding: 100px 0 
        &__header
            font-size: 60px
            text-transform: uppercase
        &__description
            font-size: 30px
            font-weight: var(--normal)
            max-width: 1000px
            margin: 0 auto
</style>
