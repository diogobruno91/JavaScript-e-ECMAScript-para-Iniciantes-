function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtAno')
    var res = document.getElementById('res')
    if (formAno.value.length == 0 || formAno.value > ano) {
        alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('txtSexo')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança 
                img.setAttribute('src', 'images/criança-homem.png')

            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'images/jovem-homem.png')                

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/adulto-homem.png') 
            }
             else {
                //idoso
                img.setAttribute('src', 'images/idoso-homem.png')                
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'images/criança-mulher.png')

            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'images/jovem-mulher.png')

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/adulto-mulher.png')
            } 
            else {
                //idoso
                img.setAttribute('src', 'images/idosa-mulher.png')                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) 
    }
}