'use strict'

const app = new Vue ({
    el: '#app',
    data(){
        return {
            mensaje: 'Discover your character...',
            selected: [],
            options: [
                { text: 'Orange', value: 'orange' },
                { text: 'Apple', value: 'apple' },
                { text: 'Pineapple', value: 'pineapple' },
                { text: 'Grape', value: 'grape' }
            ],
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart(slide) {
          this.sliding = true
        },
        onSlideEnd(slide) {
          this.sliding = false
        }
      }
})