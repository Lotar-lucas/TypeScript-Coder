var funcionario = [{
        nomes: ["matilde", "jo\u00E3o"]
    }];
var funcionarios = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto: function (hora) {
        return hora > 8 ? 'Fora do horário' : 'Ponto normal';
    }
};
console.log(funcionarios.baterPonto(9));
