var prods = [
    { id: 1, name: "Bife com batatas", price: 30.0 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.0 },
    { id: 3, name: "Carne de Pamela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];

function calc(){
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var total      = 0;
    var nome = document.getElementById("nome");
    output.innerHTML = "";
   
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    output.innerHTML += `<div class="title_name">Caro&nbsp;<div class="negrito">${nome.value}</div><br><br><br>`;


output.innerHTML+=`Seguem os dados do seu pedido. </br></br>`;

output.innerHTML+=`O seu pedido é: </br></br>`;
    for (var input of quantities) {
        var id = input.id;
if(input.value>0){
        output.innerHTML += `Prato: ${prods[id-1].name}  - Preço Unitário: ${formatter.format(prods[id-1].price)} - Quantidade: ${input.value} - Total ${formatter.format(prods[id-1].price * parseFloat(input.value))}. </br>`;
        total            += prods[id-1].price * parseFloat(input.value);
    }
    }
    output.innerHTML += `</br></br><h2>Preço final: ${formatter.format(total)}</h2><br><br>`;

}

