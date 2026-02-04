<script lang="ts" setup>
    import { useLink } from '~/store/links'
</script>


<template>
    <div :class="styl['top-bar']">
        <ul>
            <li v-for="(link, key) in useLink().links" :key="key">
                <a :href="link.to">{{ link.label }}</a>
            </li>
        </ul>
    </div>
</template>
<style lang="stylus" module='styl'>
    .top-bar
        background-color: var(--black)

</style>