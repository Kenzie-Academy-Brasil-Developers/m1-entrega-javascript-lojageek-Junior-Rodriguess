const listaActions =[]
const listaPainting =[]
const listaPainting1 =[]
const listaPainting2 = []
function createpaintings(img, nome, valor){
  let obj1 = {
    imagem: img,
    nome: nome,
    valor: valor
  }
return listaPainting1.push(obj1)
}
createpaintings("./assets/img/painting/clock.jpg","Relógio","R$ 50,00")
createpaintings("./assets/img/painting/gamepad.jpg","Controle Sem Fio - Dualshock 4 Preto","R$ 340,00")
createpaintings("./assets/img/painting/personagem.jpg","C-3PO","R$ 100,00")
const ulPainting = document.querySelector(".secao1")
function paintingsrelogio(){
  for (let figPainting of listaPainting1) {
    let tagLi = document.createElement('li')
    tagLi.className = "cards1"
    let tagFigure = document.createElement('figure')
    let tagImg = document.createElement('img')
    tagImg.src = `${figPainting.imagem}`
    let tagPNome = document.createElement('p')
    tagPNome.innerText = `${figPainting.nome}`
    let tagPValor = document.createElement('p')
    tagPValor.className = "valor"
    tagPValor.innerText = `${figPainting.valor}`
    ulPainting.append(tagLi)
    tagLi.append(tagFigure, tagPNome, tagPValor)
    tagFigure.appendChild(tagImg)
  }
}
paintingsrelogio()

function paintingsgamepad(){
  for (let figPainting of listaPainting) {
    let tagLi = document.createElement('li')
    tagLi.className = "cards1" 
    let tagFigure = document.createElement('figure')
    let tagImg = document.createElement('img')
    tagImg.src = `${figPainting.imagem}`
    let tagPNome = document.createElement('p')
    tagPNome.innerText = `${figPainting.nome}`
    let tagPValor = document.createElement('p')
    tagPValor.className = "valor"
    tagPValor.innerText = `${figPainting.valor}`
    ulPainting.append(tagLi)
    tagLi.append(tagFigure, tagPNome, tagPValor)
    tagFigure.appendChild(tagImg)
  }
}
  paintingsgamepad()
function cpo(){
  for (let figPainting of listaPainting2) {
    let tagLi = document.createElement('li')
    tagLi.className = "cards1"
    let tagFigure = document.createElement('figure')
    let tagImg = document.createElement('img')
    tagImg.src = `${figPainting.imagem}`
    let tagPNome = document.createElement('p')
    tagPNome.innerText = `${figPainting.nome}`
    let tagPValor = document.createElement('p')
    tagPValor.className = "valor"
    tagPValor.innerText = `${figPainting.valor}`
    ulPainting.append(tagLi)
    tagLi.append(tagFigure, tagPNome, tagPValor)
    tagFigure.appendChild(tagImg)    
  }
}
cpo()
function createactions(img, nome, valor){
  let obj = {
    imagem: img,
    nome: nome,
    valor: valor
  }
  return listaActions.push(obj)
  }
createactions("./assets/img/actions/animewoman.jpg","Boneca Asuka","R$250,00")
createactions("./assets/img/actions/dragonballpersonagem.jpg","Goku Dragon Ball Z","R$250,00")
createactions("./assets/img/actions/starwarspersonagem.jpg","Boneco Yoda","R$250,00")
let ulAction = document.querySelector(".secao2")
function bonecaasuka(){
  for (let figactions of listaActions) {
    let tagLi = document.createElement('li')
    let tagFigure = document.createElement('figure')
    let tagImg = document.createElement('img')
    tagImg.src = `${figactions.imagem}`
    let tagp = document.createElement('p')
    tagp.innerText = `${figactions.nome}`
    let tagPValor = document.createElement('p')
    tagPValor.innerText = `${figactions.valor}`
    tagLi.classList.add("card2") 
    tagPValor.classList.add("valor")
    tagFigure.appendChild(tagImg)
    tagLi.append(tagFigure, tagp, tagPValor)
    ulAction.appendChild(tagLi)
  }
}
bonecaasuka()
