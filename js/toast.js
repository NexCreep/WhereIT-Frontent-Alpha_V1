$('.toast').toast({delay: 2000})

function OnLogin() {
 document.getElementById('title').innerHTML='Inicio de sesion &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'
 document.getElementById('toast-text-body').innerHTML='BIENVENIDO! 🥳'

 $('.toast').toast('show')
}

function OnLogout() {
  document.getElementById('title').innerHTML='Inicio de sesion &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'
  document.getElementById('toast-text-body').innerHTML='🙋🏾‍♀️ NOS VEMOS 🙋🏾‍♂️ '

  $('.toast').toast('show')
}
