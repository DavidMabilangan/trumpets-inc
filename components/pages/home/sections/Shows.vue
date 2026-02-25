<script setup>
import ContainerTemplate from '~/components/templates/wrapper/ContainerTemplate.vue'

const shows = computed(() => {
  return [
    { 
      title: 'The Lion, The witch and the wardrobe',
      image: '/thumbnails/TheLionTheWitchAndTheWardrobe.webp',
    },
    {
      title: 'The Bluebird of Happiness',
      image: '/thumbnails/TheBlueBirdOfHappiness.webp',
    },
    {
      title: 'The Horse and his Boy',
      image: '/thumbnails/TheHorseAndHisBoy.webp',
    },
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
        <li
          v-for="(item, key) in shows"
          :key="key"
          :class="styl['shows__items-list__item']"
        >
          <div :class="styl['shows__items-list__item-img-wrapper']">
            <NuxtImg
              :src="item.image"
              :alt="item.title"
              :class="styl['shows__items-list__item-img-wrapper__img']"
              preload
              loading="lazy"
            />
          </div>
          <p :class="styl['shows__items-list__item-title']">{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </ContainerTemplate>
</template>

<style lang="stylus" module="styl">
.shows
    padding: 100px 0 0
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
        flex-flow: row wrap
        justify-content: flex-start
        padding:0
        margin: 0 -10px
        width: 100%
        &__item
          flex: 0 0 calc(33.33% - 20px)
          display: flex
          flex-direction: column
          margin: 0 10px
          list-style: none
          text-align: center
          &-img-wrapper
            height: 600px
            width: 100%
            &__img
                height: 100%
                width: 100%
                object-fit: cover
          &-title
              font-size: 24px
              font-weight: var(--semibold)
              text-transform: uppercase
  @media (max-width: 1024px) and (min-width: 280px)
    .shows
      padding: 50px 0 0
      &__header
        align-items: flex-start
        gap: 25px
        &-heading
            font-size: 30px
      &__items
        &-list
          justify-content: center
          margin: 0 auto
          &__item
            flex: 0 0 calc(50% - 40px)
            margin: 0 20px 20px
            align-items: center
            &-img-wrapper
              height: 500px
            &-title
              font-size: 18px
            &:nth-child(3)
                margin-top: 30px
    @media(max-width: 786px) and (min-width: 280px)
      .shows
        &__header
          margin-bottom: 30px
        &__items
          &-list
            &__item
              flex: 0 0 100%
              margin: 0 0 20px
              &-img-wrapper
                max-width: 400px
</style>
