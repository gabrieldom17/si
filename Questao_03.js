let nomeAluno = "João da Silva";               // Nome do aluno
let primeiraNota = 7;                          // Primeira nota (inteiro)
let segundaNota = 8.5;                         // Segunda nota (real)

let primeiraNotaPeso = primeiraNota * 0.6;     // Primeira nota ponderada por 0.6
let segundaNotaPeso = segundaNota * 0.4;       // Segunda nota ponderada por 0.4

let notaTotal = primeiraNotaPeso + segundaNotaPeso; // Soma das notas ponderadas

// Mensagens de alerta
alert("Nome do aluno: " + nomeAluno + "\nPrimeira nota: " + primeiraNota + "\nSegunda nota: " + segundaNota);
alert("Nota total do aluno: " + notaTotal);