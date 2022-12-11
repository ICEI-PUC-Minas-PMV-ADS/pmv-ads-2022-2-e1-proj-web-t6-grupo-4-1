


async function getTemas() {
    let titulo = document.getElementById("titulo").value;
    let desc = document.getElementById("desc").value;
    let userEmail = localStorage.getItem('user');
    let linkUser = document.getElementById("linkUser").value;
   
   

// Get last id
const id =
GET('http://localhost:3000/tema?id_gte=1')
    .then(resp => {
        console.log(resp.data)
    }).catch(error => {
        console.log(error);
    });
         
    
    

    const update = {
    
        id: `${id}`,
        titulo: `${titulo}`,
        descricao: `${desc}`,
        emailUser: `${userEmail}`,
        linkUser: `${linkUser}`
    };
    console.log(update);
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(update),
                
    };
    
    fetch('http://localhost:3000/tema', options)
        .then(data => {
            if (!data.ok) {
                throw Error(data.status);
            }
            return data.json();
        }).then(update => {
            console.log(update);


        });
}


function auth() {

    let user = localStorage.getItem('user');
    localStorage.getItem('user', user.email);

    document.getElementById("userEmail").innerText = `${user}`;

}

addEventListener('load', auth);


