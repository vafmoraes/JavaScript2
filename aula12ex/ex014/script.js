function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() //var hora = 17
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#b5c8cc'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#ffcda8'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#7c609b'
    }
}