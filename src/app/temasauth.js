

firebase.auth().onAuthStateChanged(user => {
    if (user) {
      document.getElementById("userEmail").innerText = user.email;
        
    } else {
        window.location.href = "home.html";
    }
})
  
document.getElementById("btnSair").addEventListener("click", logout);

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "home.html";
    }).catch(() => {
        alert('Erro ao fazer logout');
    })
}