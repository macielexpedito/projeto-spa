
const elemento = {

    aside: document.querySelector('aside'),
    sections: document.querySelectorAll('section')

}

console.log(elemento.aside);

elemento.aside.addEventListener('click', (e)=>{

    e.preventDefault();

    if(e.target.tagName === 'BUTTON'){

        console.log(e.target.id);

        displayController(e.target.id);

    }

});

function displayController(id){

    elemento.sections.forEach(section => {

        section.classList.add('painel');

        if(section.classList.contains(id)){

            section.classList.remove('painel');

        }

    });

}


