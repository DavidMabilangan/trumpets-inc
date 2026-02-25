<script setup>
import ContainerTemplate from '~/components/templates/wrapper/ContainerTemplate.vue'

const workshop = computed(() => {
  return [
    {
      title: 'Performance',
      description:
        'Classes under the Performance category are for kids ages 3.5 and up. These theater, dance, and singing classes introduce students to musical theater concepts and fundamentals, singing techniques, various dance styles, and ways to explore artistry, depending on age and skill level',
      image: '/playshop/CTheater.webp',
    },
    {
      title: 'Power',
      description:
        ' Power classes are for students ages seven years old and above. These classes give you the power to Speak Up and Stand Out! Experienced and well-known professionals in the modeling and speech industry will be your mentors.',
      image: '/playshop/DanceClass.webp',
    },
    {
      title: 'Premium',
      description:
        'Students will have hands-on experience in preparation for professional musical theater productions. Premium classes give students the  to be mentored by theater veterans and to launch their theater careers.',
      image: '/playshop/MusicTheater.webp',
    },
  ]
})
</script>

<template>
  <ContainerTemplate :templates="['w-1440']" :class="styl['workshop']">
    <div :class="styl['workshop__header']">
      <h1 :class="styl['workshop__header-heading']">Workshop</h1>
      <NuxtLink to="https://www.trumpetsplayshop.com/html/class/class.html" class="btn" target="_blank">
        <p>ALL WORKSHOP</p>
      </NuxtLink>
    </div>
    <p>
      Playshop is Trumpets’ workshop and training program that sets the stage
      for emerging and world class talent in the performing arts.
    </p>
    <div :class="styl['workshop__items']">
      <ul :class="styl['workshop__items-list']">
        <li
          v-for="(item, key) in workshop"
          :key="key"
          :class="styl['workshop__items-list__item']"
        >
          <NuxtImg
              :src="item.image"
              :alt="item.title"
             :class="styl['workshop__items-list__item-img']"
              preload
              loading="lazy"
            />
          <h1 :class="styl['workshop__items-list__item-title']">
            {{ item.title }}
          </h1>
          <p :class="styl['workshop__items-list__item-description']">
            {{ item.description }}
          </p>
        </li>
      </ul>
    </div>
  </ContainerTemplate>
</template>

<style lang="stylus" module="styl">
.workshop
  padding: 100px 0
  &__header
    display: flex
    flex-direction: row nowrap
    justify-content: space-between
    align-items: center
    &-heading
      font-size: 60px
      text-transform: uppercase
  &__items
    &-list
      display: flex
      flex-flow: row wrap
      justify-content: flex-start
      padding:0
      width: 100%
      margin: 0 -10px
      &__item
        flex: 0 0 calc(33.33% - 20px)
        margin: 0 10px
        display: flex
        flex-direction: column
        list-style: none
        text-align: center
        &-img
          height: 350px
          width: 100%
        &-title
          font-size: 24px
          font-weight: var(--semibold)
        &-description
          font-size: 18px
          font-weight: var(--regular)

@media (max-width: 1024px) and (min-width: 280px)
  .workshop
    &__header
      &-heading
        font-size: 30px
     &__items
        &-list
          justify-content: center
          align-items: flex-start
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
@media (max-width: 768px ) and (min-width: 280px)
  .workshop
    &__items
      &-list
        &__item
          flex: 0 0 100%
          margin: 0 0 20px
          &-img-wrapper
            max-width: 400px
</style>
