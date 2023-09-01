var prods = [
    { id: 1, name: "Bife com batatas", price: 30.0 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.0 },
    { id: 3, name: "Carne de Pamela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];
function calc() {
    var quantities = document.getElementsByName("quantity");
    var output = document.getElementById("output");
    var total = 0;
    var nome = document.getElementById("nome").value;
    output.innerHTML = "";
    var modalContent = "";
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });


 

     modalContent = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Dados do pedido</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3>Caro: ${nome}</h3>
                    <h5>O seu pedido é:</h5>`;

    for (var input of quantities) {
        var id = input.id;
        if (input.value > 0) {
            modalContent += `Prato: ${prods[id - 1].name} - Preço Unitário: ${formatter.format(prods[id - 1].price)} - Quantidade: ${input.value} - Total ${formatter.format(prods[id - 1].price * parseFloat(input.value))}. <br>`;
            total += prods[id - 1].price * parseFloat(input.value);
        }
    }

    if(total>0){
    modalContent += `<br><br><h2>Preço final: ${formatter.format(total)}</h2><br><br>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>`;
    }else{
        modalContent +=  `<br><br><h2>Erro: Você não selecionou nenhum prato</h2><br><br>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div>
    </div>
</div>
</div>`;

    }
    output.innerHTML = modalContent;

    $('#exampleModal').modal('show');
    output.innerHTML = "";
    modalContent = "";
}
