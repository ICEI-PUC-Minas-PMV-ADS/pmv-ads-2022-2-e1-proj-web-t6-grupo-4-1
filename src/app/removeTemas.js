async function askRemoveTemas() {
    const shouldRemove = confirm('Deseja remover o tema?');
    if (shouldRemove) {
        update();
        consultaTemas();
    }
}


function update() {

   firebase.firestore().collection("temas").doc('id').delete();

    /*var removerTema = tema.update({
        user: firebase.firestore.FieldValue.delete(),
        titulo: firebase.firestore.FieldValue.delete(),
        descricao: firebase.firestore.FieldValue.delete()
        
    });*/
 //   return removerTema;
}
 function consultaTemas() {
    return firebase.firestore().collection("temas").doc('id')
        .delete({
            id:true,
            titulo: true,
            descricao: true,
            user:true
        })
        .then(() => update())
        .then(() => {
            alert('Documento removido com Sucesso!');
            //window.location.href="./temas.html" 
        });
      
    
}

        
        /*then(() => {

            //document.querySelector(`tema.uid`).remove();

            
            alert('Removido com SUCESSO')
          
        })
        .catch(error => {

            console.log(error);
            alert('Erro ao remover transaçao');
        })
}

/*
const tema = deleteTema() 

function deleteTema() {

   
    let titulo = `${temas.titulo}`;
    let desc = `${temas.descricao}`;
    let linkUser = `${temas.link}`;
    



    return {
        titulo: `${titulo}`,
        descricao: `${desc}`,
        link: `${linkUser}`,
        id: `${temas.id}`
      
    }
};*/

