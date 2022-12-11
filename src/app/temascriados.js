const findTemas = () => {

    firebase.firestore()
        .collection('temas')
        .get()
        .then(snapshot => {
            const temas = snapshot.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
           
            }));
            addTemasToScreen(temas);
            
        })
}


function addTemasToScreen(temas) {
    const carousel = document.getElementById('carousel');
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Remover";
    deleteButton.classList.add('btn', 'btn-dark', 'btnRemover');
    deleteButton.setAttribute('onclick', 'askRemoveTemas()')

    firebase.auth().onAuthStateChanged(user => {

        for (let i = 0; i < temas.length; i++) {

            if (user.email === temas[i].user.name && user.uid === temas[i].user.uid) {
                deleteButton;
            } else {
                document.querySelector('.btnRemover').remove();
            }
        }
    })


    let card = '';
    let active = false

    for (let i = 0; i < temas.length; i++) {

        card +=
            `
            <div id="${temas[i].uid}" class="col">
                <div class="card">
                    <div class="card-body">
                     <a href=""><h5 class="card-title">${temas[i].titulo}</h5></a>
                        <p id="descTema" class="card-text">${temas[i].descricao}</p>
                    </div>
                    
                    <p>  
                         <button class="btn btn-dark" href="#multiCollapseExample${[i]}" type="button" data-bs-toggle="collapse"  aria-expanded="false" aria-controls="multiCollapseExample">
                         Inscreva-se
                         </button>
                         
                    </p>

                    <div class="collapse" id="multiCollapseExample${[i]}">
                        <div class="card card-body">
                            <a href="${temas[i].link}">${temas[i].link}</a>
                        </div>
                    </div>
                </div>
            </div>
        `


        if ((i + 1) % 3 == 0 && i != 0) {

            if (active) {

                carousel.innerHTML +=

                    `<div class="carousel-item"> ${card}</div>`

            } else {
                carousel.innerHTML +=

                    `<div class="carousel-item active"> ${card}</div>`
                active = true
            }

            card = ''
        }


    };
    if (card != '') {
        carousel.innerHTML +=

            `<div class="carousel-item"> ${card}</div>`
    }


















    function listItems(items, pageActual, limitItems) {
        let result = [];
        let totalPage = Math.ceil(items.length / limitItems);
        let count = (pageActual * limitItems) - limitItems;
        let delimiter = count + limitItems;

        if (pageActual <= totalPage) {
            for (let i = count; i < delimiter; i++) {
                if (items[i] != null) {
                    result.push(items[i]);
                }
                count++;
            }
        }
        return result;
    };

    var resultNext = listItems(temas, 1, 3);
    var resultNext2 = listItems(temas, 2, 3);
    var resultNext3 = listItems(temas, 3, 3);

    ;


    console.log(" Array temas", temas)
    console.log(" Result 1 : ", resultNext)
    console.log(" Result 2 : ", resultNext2)
    console.log(" Result 3 : ", resultNext3)


}


findTemas();



