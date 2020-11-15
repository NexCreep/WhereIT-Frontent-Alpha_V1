function nameOfFunction(){
    var textNameOfFunction = document.getElementById('nameOf');
    var textNameOfFunctionValue = textNameOfFunction.value;
    var textCardNameOfFunction = document.getElementById('ad-title');

    if (textNameOfFunctionValue.length <= 0){
        textCardNameOfFunction.innerHTML = "WhereIT";
    }else{
        textCardNameOfFunction.innerHTML = textNameOfFunctionValue;
    }

}

function descriptionOfFunction (){
    var textDescriptionOfFuction = document.getElementById('describeOF');
    var textDescriptionOfFuctionValue = textDescriptionOfFuction.value;
    var textCardDescriptionOfFuction = document.getElementById('ad-description');

    if (textDescriptionOfFuctionValue.length <= 0){
        textCardDescriptionOfFuction.innerHTML = "¡¡Somos una pagina que te ayudara a encontrar al profesional informatico que necesites!! 🙆‍♂️🙆‍♀️";
    }else{
        textCardDescriptionOfFuction.innerHTML = textDescriptionOfFuctionValue;
    }

}

function imAFunction(){

    var entitySelected = document.getElementById('imA').value;
    var entitybody = document.getElementById('ad-body');
    var entityIcon = document.getElementById('entity-icon');

    if (entitySelected === 'enterprise'){
        entityIcon.classList.remove('badge-warning');
        entityIcon.classList.add('badge-danger');
        entityIcon.title = 'Amplia plantilla con alta disponibilidad';
        entityIcon.innerHTML = 'Empresa';

    }else if (entitySelected === 'profesional'){
        entityIcon.classList.remove('badge-danger');
        entityIcon.classList.add('badge-warning');
        entityIcon.title = 'Unica persona que puede darte una atencion personalizada';
        entityIcon.innerHTML = 'Profesional';

    
    }
}

function uploadCard(){
    document.getElementById('success').innerHTML = '🕙 Subiendo...'

    setTimeout(function(){
        document.getElementById('success').innerHTML = '✔ Anuncio colgado exitosamente'
    }, 3000)

}