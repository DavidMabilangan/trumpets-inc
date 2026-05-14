<script lang="ts" setup>
import { useLink } from '~/store/links'
import ContainerTemplate from '../templates/wrapper/ContainerTemplate.vue';

const scroll = ref(false)
const handleScroll = () => {
    scroll.value = window.scrollY > 50
}

const route = useRoute()
const links = useLink().links 

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div :class="[
        styl['top-bar'],
        scroll && styl['top-bar--scrolled'] 
    ]">
        <ContainerTemplate :templates="['w-1440']" :class="styl['top-bar__wrapper']">
            <div :class="styl['top-bar__wrapper-logo']"> <NuxtLink to="/"><NuxtImg src="/logo.svg" width="150" /></NuxtLink></div>
            <ul :class="styl['top-bar__wrapper-list']">
                <li 
    v-for="(link, key) in links" 
    :key="key"
    :class="[
        styl['top-bar__wrapper-list__item'],
        link.to === '/'
            ? route.path === '/' && styl['top-bar__wrapper-list__item--active']
            : link.to.startsWith('/') && route.path.startsWith(link.to) && styl['top-bar__wrapper-list__item--active']
    ]"
>
    <a :href="link.to">
        {{ link.label }}
    </a>
</li>
            </ul>
        </ContainerTemplate>
    </div>
</template>

<style lang="stylus" module='styl'>
.top-bar
    background-color: var(--black)
    &--scrolled
        position: fixed
        top: 0
        left: 0
        width: 100%
        z-index: 999
    &__wrapper
        display: flex
        flex-flow: row nowrap
        align-items: center
        justify-content: space-between
        padding: 30px 0
        &-list
            display: flex
            flex-flow: row nowrap
            align-items: center
            justify-content: space-between
            list-style: none
            margin: 0 -10px
            &__item
                flex: 0 0 
                margin: 0 10px
                white-space: nowrap
                font-size: 18px
                font-family: var(--font-primary)
                a
                    text-decoration: none
                    color: var(--secText)
                    text-transform: uppercase

                    &:hover
                        color: var(--red)
                        cursor: pointer

                &--active a 
                    color: var(--red)
                    cursor: pointer

@media (max-width: 1024px) and (min-width: 280px)
    .top-bar
        &__wrapper
            &-logo
                margin-bottom: 20px
            &-list
                display: none
</style>