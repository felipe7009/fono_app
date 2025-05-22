import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage {

  //las 20 primeras son de comprension y el resto de Expresion
  questions: string[] = [

    '1. Me mira cuando le hablo o le canto suavemente.',
    '2. Sonríe cuando le sonrío o le hablo.',
    '3. Reconoce voces familiares.',
    '4. Vuelve la cabeza en la dirección desde la que escucha los sonidos.',
    '5. Responde cuando digo su nombre mirándome, moviendo su cuerpo o quedándose tranquilo.',
    '6. Comprende palabras familiares en situaciones cotidianas, como adiós o upa.',
    '7. Comprende los nombres de objetos familiares, como mamadera, luz y cama.',
    '8. Responde a preguntas simples, como "¡Dónde está tu osito?", moviéndose hacia el objeto, mirándolo o señalándolo.',
    '9. Puede seguir instrucciones sencillas, que vayan acompañadas de gestos (como cuando usted agita la mano y dice: "Di adiós").',
    '10. Comprende el significado de no.',
    '11. Puede señalar hacia las partes del cuerpo y objetos familiares.',
    '12. Sigue instrucciones sencillas incluso sin gestos (como "Dale un beso a la muñeca").',
    '13. Puede responder preguntas de sí o no, como "¿Quieres un plátano?"',
    '14. Responde a preguntas como "¿Dónde está la pelota?"',
    '15. Comprende el nombre de muchos objetos, personas y animales conocidos.',
    '16. ¿Puede responder preguntas como "¿Qué tienes en los pies?"',
    '17. Comprende preguntas que comienzan con: "quién, cómo", por ejemplo, ¿Quién toca la puerta?',
    '18. Comprende el significado de los siguientes conceptos: en, sobre, debajo, grande, pequeño.',
    '19. Puede ordenar objetos por categoría, como los animales y los juguetes.',
    '20. Escucha cuentos sencillos.',
    '21. Mira, se estira o se mueve hacia los objetos o las personas que le interesan.',
    '22. Llora o se pone inquieto cuando tiene sueño, hambre o se siente molesto.',
    '23. Llora de maneras diferentes, según lo que necesita.',
    '24. Hace ruiditos cuando le hablan o le sonríen.',
    '25. Hace sonidos de vocales, como "aaa".',
    '26. Hace sonidos de vocales, como "uuu" y/o "eee".',
    '27. Me lleva de la mano hacia los objetos que desea.',
    '28. Llama mi atención hacia los objetos y las personas, dándomelos o mostrándomelos o apuntando hacia ellos.',
    '29. Imita acciones, (como aplaudir) e imita sonidos.',
    '30. Usa algunos gestos, como mover la cabeza para decir que no y la mano para decir adiós.',
    '31. Mira o señala hacia lo que le interesa, y luego me mira.',
    '32. Hace sonidos que parecen palabras.',
    '33. Usa al menos tres palabras (o señas o apunta hacia imágenes) para comunicarse.',
    '34. Usa más gestos y palabras que los que usaba antes.',
    '35. Imita sonidos (como los que hacen los animales o medios de transporte) y palabras.',
    '36. Usa entre 10 y 25 palabras o señas.',
    '37. Señala 10 imágenes o más y envía mensajes.',
    '38. Usa de 25 a 50 palabras o señas.',
    '39. Combina dos palabras o señas, como en "Quiero agua" o "Mamá ven".',
    '40. Usa al menos 50 palabras.',
    '41. Hace preguntas elevando el tono de la voz (como en ¿Mami sueño?).',
    '42. Hace preguntas que comienzan con ¿qué y dónde, ¿cómo “¿Qué es eso?"',
    '43. Combina tres palabras, como en "Quiero más jugo" o "Yo no sombrero".',
    '44. Se refiere a sí mismo por su nombre.',

  ];

  options: string[] = [
    "No",
    "Si"
  ];

  constructor(private navController: NavController) {}


  //Inicializa con ceros la cantidad de preguntas
  selections: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  calculateSum() {
    // Verificar que no falten respuestas
    if (this.selections.includes(0)) {
      // Al menos una respuesta no ha sido seleccionada
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'Por favor responda todas las preguntas antes de continuar.',
        confirmButtonText: 'OK',
        heightAuto: false
      })
    } else {


      //const de comprension:
      const descubridor = [1, 2, 3, 4, 5];
      const comunicador = [6, 7, 8, 9, 10];
      const ppalabras = [11, 12, 13, 14, 15];
      const combinador = [16, 17, 18, 19, 20];

      //Const de Expresion:
      const descubridorE = [21, 22, 23, 24, 25, 26];
      const comunicadorE = [27, 28, 29, 30, 31, 32];
      const ppalabrasE = [33, 34, 35, 36, 37, 38];
      const combinadorE = [39, 40, 41, 42, 43, 44];

      //Sumas de comprension
      let sumaDescubridor = 0;
      let sumaComunicador = 0;
      let sumaPpalabras = 0;
      let sumaCombinador = 0;

      //Sumas de expresion:
      let sumaDescubridorE = 0;
      let sumaComunicadorE = 0;
      let sumaPpalabrasE = 0;
      let sumaCombinadorE = 0;

      // let sumaVisual = 0;
      // let sumaAuditivo = 0;
      // let sumaKinestesico = 0;

      //Sumas para comprension:
      for (let i = 0; i < this.selections.length; i++) {
        const resultado = this.selections[i];

        if (descubridor.includes(i + 1)) {
          // Suma para descubridor
          sumaDescubridor += +resultado;
        } else if (comunicador.includes(i + 1)) {
          // Suma para comunicador
          sumaComunicador += +resultado;
        } else if (ppalabras.includes(i + 1)) {
          // Suma para primeras palabras
          sumaPpalabras += +resultado;
        } else if (combinador.includes(i + 1)) {
          // Suma para combinador
          sumaCombinador += +resultado;
        }
      }

      //Sumas para Expresion:
      for (let i = 0; i < this.selections.length; i++) {
        const resultado = this.selections[i];

        if (descubridorE.includes(i + 1)) {
          // Suma para descubridor
          sumaDescubridorE += +resultado;
        } else if (comunicadorE.includes(i + 1)) {
          // Suma para comunicador
          sumaComunicadorE += +resultado;
        } else if (ppalabrasE.includes(i + 1)) {
          // Suma para primeras palabras
          sumaPpalabrasE += +resultado;
        } else if (combinadorE.includes(i + 1)) {
          // Suma para combinador
          sumaCombinadorE += +resultado;
        }
      }



      // Comprension : Encuentre el mayor de las cuatro sumas
      let mayor = Math.max(sumaDescubridor, sumaComunicador, sumaPpalabras, sumaCombinador);
      let mensaje = '';

      if (mayor === sumaDescubridor) {
        mensaje = "Tu hijo se encuentra Comprensivamente en la etapa de Descubridor";
      } else if (mayor === sumaComunicador) {
        mensaje = 'Tu hijo se encuentra Comprensivamente en la etapa de Comunicador';
      } else if (mayor === sumaPpalabras) {
        mensaje = 'Tu hijo se encuentra Comprensivamente en la etapa de Primeras palabras';
      } else if (mayor === sumaCombinador) {
        mensaje = 'Tu hijo se encuentra Comprensivamente en la etapa de Combinador';
      }

      // Expresion : Encuentre el mayor de las cuatro sumas
      let mayorE = Math.max(sumaDescubridorE, sumaComunicadorE, sumaPpalabrasE, sumaCombinadorE);
      let mensajeE = '';

      if (mayorE === sumaDescubridorE) {
        mensajeE = " y Expresivamente en la etapa de Descubridor.";
      } else if (mayorE === sumaComunicadorE) {
        mensajeE = ' y Expresivamente en la etapa de Comunicador.';
      } else if (mayorE === sumaPpalabrasE) {
        mensajeE = ' y Expresivamente en la etapa de Primeras palabras.';
      } else if (mayorE === sumaCombinadorE) {
        mensajeE = ' y Expresivamente en la etapa de Combinador.';
      }

      //Info Comprension en Consola
      console.log('Suma Descubridor:', sumaDescubridor);
      console.log('Suma Comunicador:', sumaComunicador);
      console.log('Suma P.Palabras:', sumaPpalabras);
      console.log('Suma Combinador:', sumaCombinador);
      console.log('Mensaje:', mensaje);

      //Info Expresion en Consola
      console.log('Expresivo Descubridor:', sumaDescubridorE);
      console.log('Expresivo Comunicador:', sumaComunicadorE);
      console.log('Expresivo P.Palabras:', sumaPpalabrasE);
      console.log('Expresivo Combinador:', sumaCombinadorE);
      console.log('Mensaje:', mensajeE);

      Swal.fire({
        icon: 'success',
        title: 'RESULTADO TEST',
        text: mensaje + mensajeE,
        confirmButtonText: 'Ok',
        showCancelButton: true,  // Agregando otro botón
        cancelButtonText: 'Aprender más',  // Texto del nuevo botón
        heightAuto: false
      }).then((result) => {
        if (result.isConfirmed) {
          // El usuario hizo clic en 'Ok'
          localStorage.removeItem('questionnaireSelections');
          location.reload();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // El usuario hizo clic en 'Aprender más'
          // Navegar a la página estim-por-niveles
          this.navController.navigateForward('/estim-por-niveles');
        }
        
      });
    }
  }


}

