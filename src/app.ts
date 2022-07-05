let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;
let soma = document.getElementById('soma') as HTMLInputElement;

let saldo: number = 0;

function somarAoSaldo(valor: number): void {
    saldo += Number(valor);
    campoSaldo.innerText = saldo.toString();
    soma.value = "";
}

function limparSaldo(): void {
    campoSaldo.innerText = "0";
    saldo = 0;
}

botaoAtualizar?.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value))
})

botaoLimpar?.addEventListener('click', limparSaldo);