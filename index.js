function ValidaCpf() {
    let res = document.querySelector('div#resposta')
    var cpf = document.getElementById('cpf').value,
        cpfNumero = cpf.replace('.', '').replace('.', '').replace('-', ''),
        NovePrimeiros = cpfNumero.substr(0, 9),
        DezPrimeiros = cpfNumero.substr(0, 10),
        somaNovePrimeiros = 0,
        somaDezPrimeiros = 0,
        multiplicado = 10;

    for (var i = 0; i < NovePrimeiros.length; i++) {
        var numero = NovePrimeiros.substr(i, 1);
        somaNovePrimeiros += numero * multiplicado;
        multiplicado--;
    }

    multiplicado = 11;

    for (var i = 0; i < DezPrimeiros.length; i++) {
        var numero = DezPrimeiros.substr(i, 1);
        somaDezPrimeiros += numero * multiplicado;
        multiplicado--;
    }

    var resultado1 = (somaNovePrimeiros * 10) % 11;
    var resultado2 = (somaDezPrimeiros * 10) % 11;

    if ((resultado1.toString() + resultado2.toString()) === cpfNumero.substr(9, 2)) {
        alert('Válido');
        res.innerHTML = ''
        res.innerHTML += `${cpf}<br/>`
        res.innerHTML += `O CPF informado é válido.`
    }else {
        alert("Inválido");
        if (cpf.length == 0) {
            res.innerHTML = ''
            res.innerHTML += `Informe o campo CPF.`
        }else {
            res.innerHTML = ''
            res.innerHTML += `${cpf}<br/>`
            res.innerHTML += `O CPF informado é inválido.`
        }
    }
}
