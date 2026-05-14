<script setup>

    const props = defineProps ({
        heading: {
            type: Object,
            default: () => ({
                title: { 
                    level: 1,
                    text: '',
                },
                subtitle: {
                    level: 2,
                    text: '',
                }
            })
        },
        templates:    {
            type: Array,
            default: () => []
        }
    })
</script>

<template>
    <header
        :class="[
            styl['template'], //
            templates.length && templates.map(item => styl[`template--${item}`])
            ]"
    >
        <template v-if="heading.title && heading.title.text">
            <div
                role="heading"
                :aria-level="heading.title.level"
                :class="[
                    styl['template__title'], //
                    heading.title?.templates?.length &&
                    heading.title.templates.map(item => styl[`template__title--${item}`]) 
                ]"
                v-html="heading.title.text"
                >
            </div>
        </template>
        <template v-if="heading.subtitle && heading.subtitle.text">
            <div
                role="heading"
                :aria-level="heading.subtitle.level"
                :class="[
                    styl['template__subtitle'], //
                    heading.subtitle?.templates?.length &&
                    heading.subtitle.templates.map(item => styl[`template__subtitle--${item}`]) 
                ]"
                v-html="heading.subtitle.text"
                >
            </div>
        </template>
    </header>
</template>

<style lang="stylus" module='styl'>
.template
    &--ff-primary
        font-family: var(--font-primary)
    &--fw-smbold
        font-weight: var(--semi-bold)
    &--fw-bold
        font-weight: var(--bold)
    &__title, &__subtitle
        &--fw-regular
            font-weight: var(--regular)
        &--fw-smbold
            font-weight: var(--semi-bold)
        &--fw-bold
            font-weight: var(--bold)
        &--gold
            color: var(--gold)
        &--uppercase
            text-transform: uppercase   
        &--ff-primary
            font-family: var(--font-primary)
    &__title
        &--mb-20
            margin-bottom: 20px
        &--fs-24
            font-size: 24px
        &--fs-50
            font-size: 50px
        &--fs-64
            font-size: 64px
    &__subtitle
        &--fs-18
            font-size: 18px
</style>