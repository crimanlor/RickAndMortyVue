'use strict'
   
const app = new Vue ({
    el: '#app',
    data(){
        return {
            mensaje: 'Discover your character...',
            characterImage: '',
            selected: [],
            questions: [
              '1. ¿Para que sirve Plumbus?',
              '2. ¿Conoces el efecto secundario de la inserción rectal de mega-semillas?',
              '3. ¿Qué es una batería microversal?'
            ],
            answers: [
              [
                { text: 'Nuevo y útil método lavaplatos', value: 0 },
                { text: 'Aparato sexual/satisfactorio intergaláctico', value: 1 },
                { text: 'Arma de destrucción masiva para dominar cualquier galaxia', value: 2 }
              ],
              [
                { text: 'Super inteligencia temporal con muy posible parálisis cerebral', value: 0 },
                { text: 'Conversión del recto en propulsor espacial', value: 1 },
                { text: 'Combustión espontánea', value: 2 }
              ],
              [
                { text: 'Es una puerta a otras dimensiones', value: 0 },
                { text: 'Recoge la energía generada por una civilización creando un universo artificial', value: 1 },
                { text: 'Fue creada por Pepinillo Rick, para generar flatulencias', value: 2 }
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
      },
      restartCarousel(index){
        this.$refs.myCarousel.setSlide(index);
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
              this.mensaje="Your character is: " + response.data.name;
              showCharacter();
            });
        }
        
      });

      document.querySelector('#restartButton').addEventListener('click', () =>{
        this.selected = [];
        this.mensaje = "Discover your character (again)...";
        document.querySelector('#carousel-1').style.display = 'flex';
        document.querySelector('#container-vortex-container').style.display = 'none';
        this.restartCarousel(0);
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
        document.querySelector('#container-vortex-container').style.display = 'flex';
      }
    }
})
// function returnUrl() {
//   console.log(this.characterImage);
//   return this.characterImage;
// }