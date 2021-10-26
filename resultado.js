var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

/*
    [0] = Nome do cliente
    [1] = CPF
    [2] = Contrato
    [3] = Valor parcela
    [4] = Conveniada
    [5] = Produto
    [6] = Proxima Parcela
    [7] = Data proximo vencimento
    [8] = QTD de parcelas
    [9] = Parcelas pagas
    [10] = Status
    [11] = Data Contrato
    [12] = Data cancelamento
    [13] = Data iner Carne
    [14] = Empresa
    [15] = Loja
    [16] = Valor BEM
    [17] = Valor financiamento
    [18] = Data primeiro Vencimento
    [19] = Data ultimo vencimento
    [20] = Banco
    [21] = Agencia
    [22] =  Conta

 */


function ogzdata() {
    switch (mes) {
        case 0:
            mes = "janeiro"
            break;
        case 1:
            mes = "Fevereiro"
            break;
        case 2:
            mes = "Março"
            break;
        case 3:
            mes = "Abril"
            break;
        case 4:
            mes = "Maio"
            break;
        case 5:
            mes = "Junho"
            break;
        case 6:
            mes = "Julho"
            break;
        case 7:
            mes = "Agosto"
            break;
        case 8:
            mes = "Setembro"
            break;
        case 9:
            mes = "Outubro"
            break;
        case 10:
            mes = "Novembro"
            break;
        case 11:
            mes = "Dezembro"
            break;


    }
}

function textoBase(){
    ogzdata();
    document.getElementById("resultado").innerText =" São paulo, SP "+dia+" de "+mes+" de "+ano+"." +
        "\n" +
        "Prezados,\n";



    textContrato1();
    textContrato2();

}


function textContrato1() {
    if (document.getElementById('linhacontrato1').value.length > 0) {
        var texto = document.getElementById('linhacontrato1').value;
        var posicoes = [];
        var dados = [];
        var firstindex = 0;
        var lastindex = 0;
        var i = 0;
        while (i < texto.length) {
            if (texto.substring(i, i + 1) == '\t') {

                posicoes[firstindex] = i;
                firstindex++;

            }
            i++;
        }
        for (var i = 0; i < posicoes.length; i++) {
            dados[i] = texto.substring(lastindex, posicoes[i]);
            lastindex = posicoes[i];
        }
        valor2 = document.getElementById('c1_valor2').value;
        document.getElementById("resultado").innerText += " \n Localizamos o contrato " + dados[2] + ", no valor de " + dados[16] + " formalizado em " + dados[11] + " no total de " + dados[8] + " parcelas com o valor de " + dados[3] +

            ", O crédito referente à operação foi encaminhado ao Banco " + dados[20] + ", agência n° " + dados[21] + " e conta corrente nº " + dados[22] + ", além do pagamento de " + valor2 + " referente ao valor complementar pelo período entre a assinatura do contrato e a averbação.";
        if (dados[12].length > 1) {
            document.getElementById("resultado").innerText += "\n \ninformamos que o contrato consta cancelado em " + dados[12];

        }else if (document.getElementById('pcacisemail').checked) {
            document.getElementById("resultado").innerText +=
                "\n\nComo o cliente não disponibilizou e-mail, segue abaixo dados para o cliente efetuar a devolução dos valores.\n" +
                "\nMediante a solicitação de cancelamento da operação, solicitamos que efetue a devolução dos valores de " + dados[16] + " + " + valor2 + " nos dados bancários abaixo:\n" +
                "\nBanco 394 (Banco Bradesco Financiamentos)\n\n" +
                "Agência: 0012-6\n\n" +
                "Conta Corrente: 888985-3\n\n" +
                "CNPJ: 07.207.996/0001-50\n\n" +
                "Após a confirmação da devolução do valor, o prazo para o cancelamento do contrato é de até 07 dias úteis.\n"

        } else if (document.getElementById('pcacicemail').checked) {
            document.getElementById("resultado").innerText +=
                "\n\n Informamos que enviamos um E-mail no endereço " + document.getElementById('c1_email').value + ", com informações para o cliente realizar a devolução dos valores, e assim prosseguirmos com o cancelamento do contrato.\n";
        } else if (document.getElementById('boletosemail').checked) {
            document.getElementById("resultado").innerText +=
                "\n\nComo o cliente não disponibilizou e-mail, segue em anexo o boleto para o cliente efetuar a devolução dos valores e assim prosseguirmos com o cancelamento do contrato.\n";
        }else if(document.getElementById('boletocemail').checked){
            document.getElementById("resultado").innerText +=
                "\n\nInformamos que enviamos um E-mail no endereço "+document.getElementById('c1_email').value +", com boleto e informações para o cliente realizar a devolução dos valores, e assim prosseguirmos com o cancelamento do contrato.";
        }

        if(document.getElementById('reembolsocativo').checked){
            document.getElementById("resultado").innerText +=
                "\n\n Com relação ao reembolso solicitado pelo cliente, informamos que o mesmo ocorrerá em até 5 dias úteis a contar da data do cancelamento do contrato.\n"
        }

        document.getElementById("resultado").innerText +=
        "\n\nEm caso de dúvidas, poderá contatar a Central de Atendimento do Bradesco Financiamentos no telefone 3004 7224 (para capitais e regiões metropolitanas) ou 0800 055 7222 (para demais localidades – Não recebe ligações de aparelhos celulares), de segunda a sexta-feira, das 9h às 17h, exceto feriados."
    }
}

function textContrato2(){
    if(document.getElementById('linhacontrato2').value.length >0) {
        var texto = document.getElementById('linhacontrato2').value;
        var posicoes = [];
        var dados = [];
        var firstindex = 0;
        var lastindex = 0;
        var i = 0;
        while (i < texto.length) {
            if (texto.substring(i, i + 1) == '\t') {

                posicoes[firstindex] = i;
                firstindex++;

            }
            i++;
        }
        for (var i = 0; i < posicoes.length; i++) {
            dados[i] = texto.substring(lastindex, posicoes[i]);
            lastindex = posicoes[i];
        }
        valor2 = document.getElementById('c2_valor2').value;
        document.getElementById("resultado").innerText += " \n \n Localizamos o contrato " + dados[2] + ", formalizado em " + dados[11] + " no total de " + dados[8] + " parcelas com o valor de " + dados[3] +

            ", O crédito referente à operação foi encaminhado ao Banco " + dados[20] + ", agência n° " + dados[21] + " e conta corrente nº " + dados[22] + ", além do pagamento de " + valor2 + " referente ao valor complementar pelo período entre a assinatura do contrato e a averbação.";
        if(dados[12].length >1){
            document.getElementById("resultado").innerText += "\n \ninformamos que o contrato consta cancelado em "+dados[12];
        }
    }
}




