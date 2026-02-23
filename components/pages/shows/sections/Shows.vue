<script setup>
    import ContainerTemplate from '~/components/templates/wrapper/ContainerTemplate.vue'

    import {useShows} from  '~/store/shows'


    const shows = useShows()
</script>


<template>
    <ContainerTemplate :templates="['w-1440']" :class="styl['shows']">
        <ul :class="styl['shows__list']">
            <li v-for="(item, key) in shows.shows" :key="key" :class="styl['shows__list-item']">
                <NuxtImg :src="item.thumbnail" preload loading="lazy"/>
                <p>{{item.title}}</p>
            </li>
        </ul>
    </ContainerTemplate>
</template>


<style lang="stylus" module="styl">
    .shows
        padding: 100px 0
        &__list
            display: flex
            flex-flow: row wrap
            margin:  0 -15px
            &-item
                flex: 0 0 calc(33.33% - 30px)
                text-align: center
                margin: 0 15px
                list-style: none

</style>