'use strict'

const app = new Vue ({
    el: '#app',
    data(){
        return {
            mensaje: 'Discover your character...',
            characterImage: '',
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
          let decimalAnswer= translateAnswerToDecimal(this.selected);
          axios
            .get(`https://rickandmortyapi.com/api/character/${decimalAnswer}`)
            .then(response => {
              console.log(response.data);
              this.characterImage = response.data.image;
              showCharacter();
            });
        }
        
      });
      function translateAnswerToDecimal(answerArray){
        answerArray.reverse();
        let numeroDecimal = 1; //API characters start at 1, so we start at 1 to avoid 0 result.
        for(let i = 0; i < answerArray.length; i++){
          numeroDecimal += answerArray[i]*Math.pow(3, i);
        }
        console.log(numeroDecimal);
        return numeroDecimal;
      }
      
      function showCharacter(){
        document.querySelector('#carousel-1').style.display = 'none';
        document.querySelector('#vortex-container').style.display = 'flex';
      }
    }
})
// function returnUrl() {
//   console.log(this.characterImage);
//   return this.characterImage;
// }