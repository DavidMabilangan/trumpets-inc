<template>
    <ContainerTemplate :class="styl['bottom-bar']"> 
        <ContainerTemplate :templates="['w-1440']" :class="styl['bottom-bar__container']">
            <div :class="styl['bottom-bar__container-wrapper']">
                <div>
                     <h1>Contact Us</h1>
                <ul :class="styl['bottom-bar__container-wrapper__list']">
                    <li :class="styl['bottom-bar__container-wrapper__list-item']">
                        <p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg> 
                            0917 - 566 - 4777
                        </p>
                    </li>
                     <li :class="styl['bottom-bar__container-wrapper__list-item']">
                        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg> 
                  playshopworkshops@gmail.com</li>
                </ul>
                </div>
                <div>
                    <h1>Follow Us</h1>
                <ul :class="[styl['bottom-bar__container-wrapper__list'], styl['bottom-bar__container-wrapper__list2']]">
                    <li :class="styl['bottom-bar__container-wrapper__list-item']">
                        <a href="https://www.instagram.com/trumpetsph/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                            </a>
                    </li>
                    <li :class="styl['bottom-bar__container-wrapper__list-item']">
                        <a href="https://www.facebook.com/trumpetsinc" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
                        </a>
                    </li>
                    <li :class="styl['bottom-bar__container-wrapper__list-item']">
                        <a href="https://www.youtube.com/@trumpetsplayshopofficial8460" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/></svg>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
            <hr>
            <p :class="styl['bottom-bar__container-creadits']">© Trumpets Incorporated 2024. All rights reserve</p>
        </ContainerTemplate>
    </ContainerTemplate>
</template>

<style lang="stylus" module="styl">
.bottom-bar   
    padding: 80px 0
    background-color: var(--black)
    &__container
        &-creadits
            margin-top: 20px
            text-align: center
            color: var(--white)
            font-size: 14px
        &-wrapper
            margin-bottom: 20px
            display: flex
            flex-flow: row wrap
            justify-content: space-between
            h1
                font-size: 24px
                font-weight: var(--semi-bold)
                color: var(--red)
            &__list
                display: flex
                flex-flow: column nowrap
                margin: 0 
                padding: 0
                &-item
                    margin: 0
                    padding: 0
                    list-style: none
                    display: flex
                    flex-flow: row nowrap
                    align-items: center
                    gap: 30px
                    svg 
                        width: 30px
                        color: var(--white)
                        &:hover
                            color: var(--red)
                            cursor: pointer
            &__list2
                display: flex
                flex-flow: row nowrap
                gap: 20p
</style>