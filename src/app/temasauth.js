

firebase.auth().onAuthStateChanged(user => {
    if (user) {
      localStorage.setItem('user', user.email);
      document.getElementById("userEmail").innerText = user.email;
        
    } else {
        window.location.href = "index.html";
    }
})
  
document.getElementById("btnSair").addEventListener("click", logout);

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
    }).catch(() => {
        alert('Erro ao fazer logout');
    })
}

