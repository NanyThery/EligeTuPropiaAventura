let userName = window.prompt(`¿Cómo se llama el/la protagonista de la historia?`)
let text1 = `8.30 de la mañana, verano. Estás de vacaciones. De repente te despiertas sobresaltad@ por el desagradable sonido del timbre de la puerta. Alguien llama. ¿Qué haces?`
let text1OptionA= `Lo ignoro y sigo durmiendo`
let text1OptionB= `Me levanto a ver quién es`

let text2 = `Te tapas con la sábana hasta la cabeza para evitar la luz del sol y te giras hacia la derecha. No tienes ganas de levantarte, ya volverán. Sin embargo, quein llama no está dispuesto a rendirse. Parece que ignorarlo no es una opcion. Así que te levantas, un poco de mal humor.`
let text3 = `Te pones algo encima y bajas las escaleras. Mueves la mirilla de la puerta y del otro lado ves a una chica que no conoces. La mirilla no te deja apreciar muchos detalles, pero hay algo en ella que te resulta extraño, como que no encaja. Parece inofensiva, así que abres la puerta. - ${userName}, ¡por fin! Llevamos esperándote media hora, ¿qué estabas haciendo?` 
let text3optionA = `Estaba durmiendo`
let text3optionB = `¿quién eres?`

let text4 = `¿Cómo que quién soy?, ¿estás tont@?`
let text5 = `La chica te mira con una expresión entre divertida y molesta. Está claro que te conoce, pero tú a ella no... crees que no, al menos. Asiente con la cabeza y te dice:
¡Venga, ${userName}. No podemos perder más tiempo. La misión está a punto de empezar!
La chica te toma de la mano y casi te arrastra hasta el coche con chófer, dentro está esperando otra persona que te mira con despreocupación, pero un poco irritada. El coche arranca. Miras a tu alrededor todavía muy confundid@ ¿Cómo has llegado hasta aquí?¿Por qué esta gente te conoce y a ti no? ¿Por qué no te negaste a subir? En este punto, no puedes negar que tu aburrimiento estival está exigiendo aventuras. Pero quizás esto sea demasiado.`

let text5optionA = `Esperar y ver a dónde te lleva el coche`
let text5optionB = `Saltar del coche en marcha`

let text6= `A partir de aquí, la historia de ${userName} la escribes tú. Continúala con tu ejercicio de "Elige tu Propia Aventura!"`
let text7= `Abres la puerta del coche en marcha. Tus acompañantes te miran con una expresión de horror e incomprensión. No parece que seas un prisionero. Tampoco nadie te detiene. Saltas del coche en marcha...`



window.alert(text1);
let optionText1= window.prompt(`Elige A o B: a- Seguir durmiendo // b- Bajar a abrir la puerta`);
let optionText2;
let optionText3;

switch (optionText1) {
    case 'a':
    case 'A':
        window.alert(text2 + ' ' + text3);
        optionText2 = window.prompt(`Elige A o B:  a- estaba durmiendo // b-¿quién eres?`)
        break;
    case 'b':
        window.alert(text3);
        optionText2 = window.prompt(`Elige A o B:  a- estaba durmiendo // b-¿quién eres?`)
        break;
    default:
            window.alert('Vaya, esa no es una opción válida. Pulsa Aceptar para volver a empezar')
            location.reload();
            break;
}


    switch (optionText2) {
    case 'a':
    case 'A':
        window.alert(text5);
        optionText3 = window.prompt(`Elige A o B:  a- Esperar y ver dónde te lleva el coche // b- Saltar del coche en marcha`)
        break;
    case 'B':
    case 'b':
        window.alert(text4 + ' ' + text5);
        optionText3 = window.prompt(`Elige A o B:  a- Esperar y ver dónde te lleva el coche // b- Saltar del coche en marcha`)
        break;
        default:
            window.alert('Vaya, esa no es una opción válida. Aprieta F5 para volver a empezar');
            break;
}


    switch (optionText3){
    case 'a':
        case 'A':
            window.alert(text6);
            break;
        case 'B':
        case 'b':
            window.alert(text7 + ' ' + text6);
            break;
        default:
            window.alert('Vaya, esa no es una opción válida. Aprieta F5 para volver a empezar');
            break;
}

document.getElementById('title').innerHTML = 'The end';

