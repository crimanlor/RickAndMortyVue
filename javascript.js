'use strict'

const app = new Vue ({
    el: '#app',
    data(){
        return {
            mensaje: 'Discover your character...',
            buttons: [
                { caption: 'Toggle 1', state: true },
                { caption: 'Toggle 2', state: false },
                { caption: 'Toggle 3', state: false }
              ]
        }
    },
    computed: {
        btnStates() {
          return this.buttons.map(btn => btn.state)
        }
      }
})