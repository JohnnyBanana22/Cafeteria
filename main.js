//Sonido pop
const hoverSound = new Audio('assets/pop.mp3');
const elements = document.querySelectorAll('.pestana, .tarjeta-menu');
elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reinicia el audio
        hoverSound.play(); // Reproduce el sonido
    });
});

const menuFooter = document.querySelectorAll('.menu-footer');

document.addEventListener('DOMContentLoaded', () => {
    const bodyId = document.body.id;

    if (bodyId === 'pagina1') {
        const contenido1 = document.getElementById('contenido1');
        const bebidas = document.getElementById('bebidas');
        const postres = document.getElementById('postres');
        const productos = document.getElementById('productos');
        
        //Esto reinicia el display para que se vea solo el index sin el contenido de las pestañas
        function acomodarDisplay(){
            contenido1.classList.remove('oculto')
            bebidas.classList.add('oculto');
            postres.classList.add('oculto');
            productos.classList.add('oculto');
        } acomodarDisplay()
        
        //Bebidas
        elements[0].addEventListener('click', function() {
            if (bebidas.classList.contains('oculto')) {
            bebidas.classList.remove('oculto');
            contenido1.classList.add('oculto');
            postres.classList.add('oculto');
            productos.classList.add('oculto');
            elements[0].classList.add('pSelected');
            elements[1].classList.remove('pSelected');
            elements[2].classList.remove('pSelected');
            elements[0].scrollIntoView({ behavior: 'smooth', block: 'start'});
            } else {
                bebidas.classList.add('oculto');
                contenido1.classList.remove('oculto');
                postres.classList.add('oculto');
                productos.classList.add('oculto');
                elements[0].classList.remove('pSelected');
            }
        });
        //Postres
        elements[1].addEventListener('click', function() {
            if (postres.classList.contains('oculto')) {
            bebidas.classList.add('oculto');
            contenido1.classList.add('oculto');
            postres.classList.remove('oculto');
            productos.classList.add('oculto');
            elements[0].classList.remove('pSelected');
            elements[1].classList.add('pSelected');
            elements[2].classList.remove('pSelected');
            elements[1].scrollIntoView({ behavior: 'smooth', block: 'start'});
            } else {
                bebidas.classList.add('oculto');
                contenido1.classList.remove('oculto');
                postres.classList.add('oculto');
                productos.classList.add('oculto');
                elements[1].classList.remove('pSelected');
            }
        });
        //Productos
        elements[2].addEventListener('click', function() {
            if (productos.classList.contains('oculto')) {
            bebidas.classList.add('oculto');
            contenido1.classList.add('oculto');
            postres.classList.add('oculto');
            productos.classList.remove('oculto');
            elements[0].classList.remove('pSelected');
            elements[1].classList.remove('pSelected');
            elements[2].classList.add('pSelected');
            elements[2].scrollIntoView({ behavior: 'smooth', block: 'start'});
            } else {
                bebidas.classList.add('oculto');
                contenido1.classList.remove('oculto');
                postres.classList.add('oculto');
                productos.classList.add('oculto');
                elements[2].classList.remove('pSelected');
            }
        });
    } else if (bodyId === 'pagina2') {
        const secciones = document.querySelectorAll('.servicio-al-cliente')

        //Ocultar todo por defecto
        function noDisplay() {
            secciones[0].classList.add('oculto');
            secciones[1].classList.add('oculto');
            secciones[2].classList.add('oculto');
            secciones[3].classList.add('oculto');
            secciones[4].classList.add('oculto');
        } noDisplay();
        
        ///////////////////
               // Mostrar sección inicial según el parámetro en la URL
               const urlParams = new URLSearchParams(window.location.search);
               const section = urlParams.get('section'); // Ejemplo: ?section=aviso-legal
               if (section) {
                   const sectionMap = {
                       'aviso-legal': 0,
                       'sobre-nosotros': 1,
                       'contacto': 2,
                       'preguntas-frecuentes': 3,
                       'quejas-y-sugerencias': 4,
                   };
                   const index = sectionMap[section];
                   if (index !== undefined) {
                       secciones[index].classList.remove('oculto'); // Mostrar sección
                       elements[index + 1].classList.add('pSelected'); // Activar pestaña
                       elements[index + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
                   }
               }
        ///////////////////

        //Aviso legal
        elements[1].addEventListener('click', function() {  
            if (secciones[0].classList.contains('oculto')) {
                secciones[0].classList.remove('oculto');
                elements[1].scrollIntoView({ behavior: 'smooth', block: 'start'});
                //Manejo de secciones
                secciones[1].classList.add('oculto');
                secciones[2].classList.add('oculto');
                secciones[3].classList.add('oculto');
                secciones[4].classList.add('oculto');
                //Quitar pSelect
                elements[1].classList.add('pSelected');
                elements[2].classList.remove('pSelected');
                elements[3].classList.remove('pSelected');
                elements[4].classList.remove('pSelected');
                elements[5].classList.remove('pSelected');
            }
        });
        
        elements[2].addEventListener('click', function() {  
            if (secciones[1].classList.contains('oculto')) {
                secciones[1].classList.remove('oculto');
                elements[2].scrollIntoView({ behavior: 'smooth', block: 'start'});
                //Manejo de secciones
                secciones[0].classList.add('oculto');
                secciones[2].classList.add('oculto');
                secciones[3].classList.add('oculto');
                secciones[4].classList.add('oculto');
                //Quitar pSelect (pestañas)
                elements[1].classList.remove('pSelected');
                elements[2].classList.add('pSelected');
                elements[3].classList.remove('pSelected');
                elements[4].classList.remove('pSelected');
                elements[5].classList.remove('pSelected');
            }
        });
        
        elements[3].addEventListener('click', function() {  
            if (secciones[2].classList.contains('oculto')) {
                secciones[2].classList.remove('oculto');
                elements[3].scrollIntoView({ behavior: 'smooth', block: 'start'});
                //Manejo de secciones
                secciones[0].classList.add('oculto');
                secciones[1].classList.add('oculto');
                secciones[3].classList.add('oculto');
                secciones[4].classList.add('oculto');
                //Quitar pSelect (pestañas)
                elements[1].classList.remove('pSelected');
                elements[2].classList.remove('pSelected');
                elements[3].classList.add('pSelected');
                elements[4].classList.remove('pSelected');
                elements[5].classList.remove('pSelected');
            }
        });
        
        elements[4].addEventListener('click', function() {  
            if (secciones[3].classList.contains('oculto')) {
                secciones[3].classList.remove('oculto');
                elements[4].scrollIntoView({ behavior: 'smooth', block: 'start'});
                //Manejo de secciones
                secciones[0].classList.add('oculto');
                secciones[1].classList.add('oculto');
                secciones[2].classList.add('oculto');
                secciones[4].classList.add('oculto');
                //Quitar pSelect (pestañas)
                elements[1].classList.remove('pSelected');
                elements[2].classList.remove('pSelected');
                elements[3].classList.remove('pSelected');
                elements[4].classList.add('pSelected');
                elements[5].classList.remove('pSelected');
            }
        });
        
        elements[5].addEventListener('click', function() {  
            if (secciones[4].classList.contains('oculto')) {
                secciones[4].classList.remove('oculto');
                elements[5].scrollIntoView({ behavior: 'smooth', block: 'start'});
                //Manejo de secciones
                secciones[0].classList.add('oculto');
                secciones[1].classList.add('oculto');
                secciones[2].classList.add('oculto');
                secciones[3].classList.add('oculto');
                //Quitar pSelect (pestañas)
                elements[1].classList.remove('pSelected');
                elements[2].classList.remove('pSelected');
                elements[3].classList.remove('pSelected');
                elements[4].classList.remove('pSelected');
                elements[5].classList.add('pSelected');
            }
        });
    }
  });

