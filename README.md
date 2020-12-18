# EligeTuPropiaAventura

Este juego tiene su origen en unas novelas de nuestra infancia donde la historia te permitía tomar decisiones y recorrer diferentes hilos argumentales. En este repositorio iré poniendo diferentes versiones del juego hechas con distintas arquitecturas o estructuras. Colaboraciones en otros lenguajes/soluciones son más que bienvenidas. La idea es que este repo siga siendo un buen proyecto de iniciación para cualquiera.

De momento éstas son las versiones que hay disponibles

- Plain JS:
  - Esta versión utiliza únicamente un archivo JS implementando únicamente estructuras condicionales, window.Prompt() y window.alert(). Es una versión básica para principiantes.
- HTML + JS + CSS:
  - Esta versión incorpora una interfaz HTML con dos opciones, que se va actualizando. Para cargar los textos, se apoya en un JSON que importa a través del método FETCH. Importante: si se ejecuta en local se debe hacer a través de un servidor dado que Chrome no permite método fetch desde local y fallará. Se puede ejecutar a través de MAMP, XAMP o Ok200 Server para Chrome.
- React:
    - Implementa:
      - reactJS : librería para interfaces en JS.
      - react-dom-router: para enrutamiento programático y rutas dinámicas (las historias)
      - styled-components: librería para construir componentes con estilo encapsulado. 
    - Funcionalidades adicionales a otras versiones:
      - Permite seleccionar entre varias historias
      - Estructura basada en componentes.
      - Enrutamiento dinámico
    - Añadir nuevas historias: para incluir nuevas historias, puedes modificar cualquier de los archivos de ejemplo que ya existen alojados en la carpeta public/stories. Es importante que respetes la estructura del JSON, puedes agregar tantos párrafos y opciones como quieras, pero debes tener cuidado con las referencias (id) que indiques para que la app encuentre los textos. Recuerda actualizar el archivo story-index.json con los datos del libro de la referencia correspondiente, de lo contrario no saldrá en la página de selección.
    - Mejoras que se pueden hacer a este proyecto (abierto a contribución):
      - Montar las historias en una Base de Datos.
      - Centralizar los estados con Redux
      - Refactorización de código, especialmente en css.
    


