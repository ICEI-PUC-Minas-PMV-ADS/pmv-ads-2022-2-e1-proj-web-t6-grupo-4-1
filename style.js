function salvar(){
    localStorage.info = document.getElementById("dado").value;
}
function carregar(){
    document.getElementById("dado").value = localStorage.info;
}