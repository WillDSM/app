let nome = document.getElementById('nome');
let corpo = document.getElementById('corpo');
let res = document.getElementById('res');
let tagsel = document.getElementById('sel');

function entrar(){
    corpo.innerHTML = '';
    res.innerHTML = '';
    corpo.innerText = `Olá ${nome.value} seja bem vindo(a) ao meu chá`
    let tagsel = document.createElement('select');
    let tagopt = document.createElement('option'); 
    let tagopt2 = document.createElement('option'); 
    tagsel.setAttribute('sel', 'id', 'sel')
    res.appendChild(tagsel)
    tagopt.setAttribute('value', 'op1')
    tagopt.innerText = 'Fralda'
    tagsel.appendChild(tagopt) 
    tagopt2.setAttribute('value', 'op2')
    tagopt2.innerText = `Talco`
    tagsel.appendChild(tagopt2)
    
}