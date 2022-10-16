var agora = new Date()
var hora = agora.getDay() // para verificar a hora do servidor que esta sendo utilizado
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log ('Bom dia!')
} else if (hora <= 18) {
    console.log ('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}