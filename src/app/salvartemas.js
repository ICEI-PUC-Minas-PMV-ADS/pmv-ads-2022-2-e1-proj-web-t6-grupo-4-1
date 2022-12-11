
firebase.auth().onAuthStateChanged(user => {
    if (user) {
     // localStorage.setItem('user', user.email);
      document.getElementById("userEmail").innerText = user.email;
        
    } else {
        window.location.href = "index.html";
    }
})
function saveTemas() {
    

    const tema = createTema();

    firebase.firestore()
        .collection('temas')
        .add(tema)
        .then(() => {
           
            window.location.href = "./temas.html";
        })
        .catch(() => {
            
            alert('Erro ao salvar transaçao');
        })
}

function createTema() {
   
        let titulo = document.getElementById("titulo").value;
        let desc = document.getElementById("descricao").value;
    let linkUser = document.getElementById("linkUser").value;

    

        return {
            titulo: `${titulo}`,
            descricao: `${desc}`,
            link: `${linkUser}`,
            
            user: {
                name: firebase.auth().currentUser.email,
                uid: firebase.auth().currentUser.uid
        }
    };
}

function campoVazio() {
    const vazio = form.titulo().value;
    form.dateRequiredError().style.display = !titulo ? "block" : "none";

    toggleSaveButtonDisable();
}

/*function onChangeValue() {
    const value = form.value().value;
    form.valueRequiredError().style.display = !value ? "block" : "none";

    form.valueLessOrEqualToZeroError().style.display = value <= 0 ? "block" : "none";

    toggleSaveButtonDisable();
}

function onChangeTransactionType() {
    const transactionType = form.transactionType().value;
    form.transactionTypeRequiredError().style.display = !transactionType ? "block" : "none";

    toggleSaveButtonDisable();
}*/

/*
function toggleSaveButtonDisable() {
    form.saveButton().disabled = !isFormValid();
}*/
/*
function isFormValid() {
    const date = form.date().value;
    if (!date) {
        return false;
    }

    const value = form.value().value;
    if (!value || value <= 0) {
        return false;
    }

    const transactionType = form.transactionType().value;
    if (!transactionType) {
        return false;
    }

    return true;
}*/


/*
const form = {    
    titulo: () => document.getElementById("titulo").value,
    desc: () => document.getElementById("descricao").value,
    link: () => document.getElementById("linkUser").value

}*/


document.getElementById('btnSalvar').addEventListener('click', saveTemas);




