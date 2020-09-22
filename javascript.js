'use strict'

const app = new Vue ({
    el: '#app',
    data(){
        return {
            mensaje: 'Discover your character...',
            selected: [],
            questions: [
              'Pregunta 1',
              'Pregunta 2',
              'Pregunta 3'
            ],
            answers: [
              [
                  { text: 'Respuesta a1', value: 0 },
                  { text: 'Respuesta a2', value: 1 },
                  { text: 'Respuesta a3', value: 2 }
              ],
              [
                { text: 'Respuesta b1', value: 0 },
                { text: 'Respuesta b2', value: 1 },
                { text: 'Respuesta b3', value: 2 }
              ],
              [
                { text: 'Respuesta c1', value: 0 },
                { text: 'Respuesta c2', value: 1 },
                { text: 'Respuesta c3', value: 2 }
              ],
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
      },
      next() {
        this.$refs.myCarousel.next();
      }
    },
    mounted(){
      document.querySelector('#sendAnswersButton').addEventListener('click', () => {
        if(this.selected.length < this.questions.length) {
          console.log('Answer all before!')
        }
        else {
          console.log(this.selected);
          axios
            .get('https://rickandmortyapi.com/api/character/1')
            .then(response => {
              console.log(response.data);
            });
        }
        
      });
    }
})