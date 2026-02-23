<script setup>
    import ContainerTemplate from '~/components/templates/wrapper/ContainerTemplate.vue'

</script>


<template>
    <ContainerTemplate :templates="['w-2000', 'padding-tb-300']" :class="styl['topofthefold']">
        <ContainerTemplate :templates="['w-1440']">
            <h1 :class="styl['topofthefold__header']">Enjoy different kinds of Genres</h1>
        <p>
            Explore Trumpets’ collection of acclaimed original musicals and adaptations suited for all ages.
        </p>
        </ContainerTemplate>
    </ContainerTemplate>
</template>

<style lang="stylus" module='styl'>
    .topofthefold
        background-image: url('/banners/showBanner.webp')
        background-size: cover
        background-repeat: no-repeat
        &__header
            font-size: 60px
            max-width: 700px
</style>
