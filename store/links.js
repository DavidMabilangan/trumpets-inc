import {defineStore} from 'pinia'

export const useLink = defineStore('link', {
    state: () => ({
        links : [
            {
                to: '/',
                label: 'Home',
                active: false
            },
            {
                to: '/shows',
                label: 'Shows',
                active: false
            },
            {
                to: '/about',
                label: 'About',
                active: false
            },
            {
                to: 'https://www.trumpetsplayshop.com/',
                label: 'workshop',
                active: false
            },
            {
                to: '/support-us',
                label: 'Support Us',
                active: false
            }
        ]
    })
})