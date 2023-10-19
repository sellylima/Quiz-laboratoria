const botao = document.querySelector('.botao')
const respostas = document.querySelector('.respostas')

botao.addEventListener('click', (item) => {
  const checked = respostas.querySelector("input[name=cor]:checked"); 
  if (checked == null){ 
    alert("Selecione uma opção");
    return
  }
  
  if (checked.value === "Verde"){
    alert("Resposta correta")
  } else {
    alert('Resposta correta Verde');
  }
 
})