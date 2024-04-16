

//  Função para Adicionar uma novaEntrada/Terefa
 function adicionar(){
    let lista = document.getElementById("lista_tarefa");
    let entrada = document.getElementById("entrada").value
    
    if(entrada != "") { 
        
        var novaEntrada = document.createElement("li")
        var id = entrada+Math.floor(Math.random()*2000)// criando um id aleatorio
        novaEntrada.setAttribute("id",id)// colocar o atributo id na entrada
        
        novaEntrada.innerHTML = entrada;
        
        // Criando um botão de  Delete
        var btn_delete = document.createElement('button')
        btn_delete.setAttribute('onclick',`excluirTarefa(${id})`)// Colocando uma função dentro do botão delete
        btn_delete.setAttribute('class', 'btDelete')
        btn_delete.innerHTML = `<i class='bx bx-trash'></i>`;
        // Criando um botão de  Editar
        var btn_editar = document.createElement('button')
        btn_editar.setAttribute('class','btEditar')
        btn_editar.setAttribute('onclick',`editar(${id})`)
        btn_editar.innerHTML = `<i class='bx bx-edit-alt'></i>`;
        //NovaEntrada que é um li recebe o botão
        novaEntrada.appendChild(btn_delete)
        novaEntrada.appendChild(btn_editar)
        //Adiciona o elemento novaEntrada na lista de tarefas
        lista.appendChild(novaEntrada);
        limpar();//Chamada da função
    }
}

var bt_adicionar = document.querySelector('#add')
//Colocando o evento de click no botão bt_adicionar
bt_adicionar.addEventListener("click",adicionar);
// Função que Exclui uma tarefa pelo id
function excluirTarefa(id){
        lista = document.getElementById("lista_tarefa");
        lista.removeChild(id)
}
function editar(ida){
    
    lista = document.getElementById("lista_tarefa");
    //criando novo texto
    let novoTexto = prompt("edite o texto");
   
    if(novoTexto != null){
        let nodTexto = document.createTextNode(novoTexto);//Nó de texto
        let novoEle = document.createElement('li')
        novoEle.appendChild( nodTexto);
        // criando um novo id
        var id = novoTexto+Math.floor(Math.random()*2000)
        novoEle.setAttribute("id",id)
        
    // Criando o botão delete e coloca no novoEle editado
        btn_delete = document.createElement('button')
        btn_delete.setAttribute('onclick',`excluirTarefa(${id})`)// Colocando uma função dentro do botão delete
        btn_delete.setAttribute('class', 'btDelete')
        btn_delete.innerHTML = `<i class='bx bx-trash'></i>`;
        novoEle.appendChild( btn_delete);
        // Criando o botão editar e coloca no elemento editado
        btn_editar = document.createElement('button')
        btn_editar.setAttribute('class','btEditar')
        btn_editar.setAttribute('onclick',`editar(${id})`)
        btn_editar.innerHTML = `<i class='bx bx-edit-alt'></i>`;
        novoEle.appendChild( btn_editar);
        
        // Substituindo o ida por novoEle/novo elemento
        lista.replaceChild(novoEle,ida);
    }else{
        lista.appendChild(ida);
        console.log(lista);
        
    } 
}
// Função para limpar o campo
function limpar(){
    let entrada = document.getElementById('entrada').value = "";
}