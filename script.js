function entrar(){
    let nasdata = document.getElementById('nas');
    let corpo = document.getElementById('corpo');
    let res = document.getElementById('res');

    corpo.innerHTML = '';
    res.innerHTML = '';
    corpo.innerText = `Olá seja bem vindo(a) ao meu chá!
    Sinta-se a vontade para escolher algo para mim`

    for(let i = 0; i < 5; i++){  
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = `checkitem${i}`;
        checkbox.id = `checkitem${i}`;

        let label = document.createElement('label');
        label.htmlFor = `checkitem${i}`;
        let imag = document.createElement('img')
        imag.src = `Icons/icon${i}.png`
        imag.id = `icon${i}`
        label.innerText = `Mensagem \u{1F449}`;

        let textarea = document.createElement('textarea');
        textarea.id = `txtitem${i}`;
        textarea.cols = '30';
        textarea.rows = '5';
        textarea.placeholder = 'Escreva aqui sua mensagem';

        res.appendChild(checkbox);
        res.appendChild(imag);
        res.appendChild(label);
        res.appendChild(textarea);
    
        let br = document.createElement('br');
        res.appendChild(br);  
    }
        //input button
        let button = document.createElement('input');
        button.id = 'btsalvar'
        button.type = 'button';
        button.value = 'Salvar';
        button.addEventListener('click', salvar)
        res.appendChild(button);    
}
function salvar(){
    let vet = [];
    let i = 0;
    for(let l = 0; l < 5; l++){
        let c = document.getElementById(`checkitem${l}`);
            if(c.checked){
                vet[i] = `checkitem${l}`;
                i += 1;
           }
    }
    alert(`Você selecionou ${i} itens`);
    //listar(vet); 
}
function listar(vet){
    let res = document.getElementById('res');
    let p = document.createElement('p');

    for(let i = 0; i < vet.length; i++){
        if(`${vet[i]}` == 'checkitem0'){
            res.innerHTML = '';
            p.innerText = 'Pomada';
            res.appendChild(p);
        }
        if(`${vet[i]}` == 'checkitem1'){
        res.innerHTML = '';
        p.innerText = 'Fralda';
        res.appendChild(p);
        }
    }
}