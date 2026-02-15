<script setup>
import ContainerTemplate from '~/components/templates/wrapper/ContainerTemplate.vue';


const shows = computed( () => {
    return [
        {
            title:'The Lion, The witch and the wardrobe',
            image: '/thumbnails/LWWBanner.webp'
        },
        {
            title: 'The Bluebird of Happiness',
            image:'/thumbnails/BBBanner.webp'
        },
        {
            title: 'The Horse and his Boy',
            image:'/thumbnails/THBBanner.webp'
        }
    ]
})

</script>


<template>
    <ContainerTemplate :templates="['w-1440']" :class="styl['shows']">
        <div :class="styl['shows__header']">
            <h1 :class="styl['shows__header-heading']">SHOWS</h1>
            <NuxtLink to="#" class="btn">
                <p>ALL SHOWS</p>
            </NuxtLink>
        </div>
        <div :class="styl['shows__items']">
            <ul :class="styl['shows__items-list']">
                <li v-for="(item,key) in shows" :key="key"  :class="styl['shows__items-list__item']" >
                    <NuxtImg :src="item.image" :alt="item.title" :class="styl['shows__items-list__item-img']" preload loading="lazy"/>
                    <p :class="styl['shows__items-list__item-title']"> {{ item.title }}</p>
                </li>
            </ul>
        </div>
    </ContainerTemplate>
</template>

<style lang="stylus" module="styl">
    .shows
        padding: 100px 0
        &__header
            display: flex
            flex-direction: row nowrap
            justify-content: space-between
            align-items: center
            &-heading
                font-size: 60px
        &__items
            &-list
                display: flex
                flex-flow: row nowrap
                justify-content: flex-start
                padding:0
                width: 100%
                margin: 0 -10px
                &__item
                    flex: 0 0 calc(33.33% - 20px)
                    display: flex
                    flex-direction: column
                    margin: 0 10px
                    list-style: none
                    text-align: center
                    &-img
                        width: 100%
                        height: 600px
                    &-title
                        font-size: 24px
                        font-weight: var(--semibold)

</style>