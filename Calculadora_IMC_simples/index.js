let peso, altura;

alert('Por favor, insira seu peso e altura.');

peso = parseFloat(prompt('Insira seu peso (kg): '));
altura = parseFloat(prompt('Insira sua altura (m): '));

const imc = peso / (altura * altura);

alert(`Seu IMC é ${imc.toFixed(2)}`);