<script lang="ts" setup>
    import { useLink } from '~/store/links'
    import ContainerTemplate from '../templates/wrapper/ContainerTemplate.vue';

    
</script>


<template>
    <div :class="styl['top-bar']">
        <ContainerTemplate :templates="['w-1440']" :class="styl['top-bar__wrapper']">
            <div :class="styl['top-bar__wrapper-logo']"> LOGO</div>
            <ul :class="styl['top-bar__wrapper-list']">
                <li :class="styl['top-bar__wrapper-list__item']" v-for="(link, key) in useLink().links" :key="key">
                    <a :href="link.to" class="d-none">{{ link.label }}</a>
                </li>
            </ul>
        </ContainerTemplate>
    </div>
</template>
<style lang="stylus" module='styl'>
    .top-bar
        background-color: var(--black)
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
                    a
                        text-decoration: none
                        color: var(--white)
                        text-transform: uppercase
                        &:hover,
                        &--active
                            color: var(--gold)
                            cursor: pointer
    @media (max-width: 1024px) and (min-width: 280px)
        .top-bar
            &__wrapper
                &-logo
                    margin-bottom: 20px
                &-list
                    display: none

</style>