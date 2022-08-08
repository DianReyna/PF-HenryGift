export default function validate(input){
    let errors = {};


    let validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let validPrice = /^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(.[0-9]{1,9})?$/; 
    let validUrl = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
    let valiDate = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    let validPerson = /^[0-9]+$/
    let validNum = /^[0-9]+$/
    
    if(!input.providerName.trim()){
        errors.providerName = 'Nombre requerido';
    } else if(input.providerName.length < 4) {
        errors.providerName = 'Nombre tiene que tener al menos 4 caracteres';
    }
    
    if(!input.providerPhone.trim()){
        errors.providerPhone = 'You must provide a phone number';
    } else if(!validPhone.test(input.providerPhone)){
        errors.providerPhone = 'Phone number should have a valid format'
    }

    if(!input.providerAddress.trim()){
        errors.providerAddress = 'You must provide an address';
    } else if(input.providerAddress.length < 10){
        errors.providerAddress = 'Address should have at least 10 letters'
    } 

    if(!validEmail.test(input.providerEmail)){
        errors.providerEmail = 'Insert a valid email format'
    }

    //--------------------- PRODUCT -------------------------------

    
    if(!input.productName.trim()){
        errors.productName = 'Nombre requerido';
    } else if(input.productName.length < 4) {
        errors.productName = 'Nombre tiene que tener al menos 4 caracteres';
    }
    if(!input.productDescription.trim()){
        errors.productDescription = 'Describa el detalle de su producto ';
    } else if(input.productDescription.length < 25) {
        errors.productDescription = 'La descripcion tiene que tener al menos 25 caracteres';
    }
    if(!input.productPrice.trim()){
        errors.productPrice = 'Ingrese el precio del producto';
    }  else if(!validPrice.test(input.productPrice)){
        errors.productPrice = 'Ingrese un formato válido'
    }
    if(!input.productLocation.trim()){
        errors.productLocation = 'Debe ingresar la ubicacion dodnde se provee el servicio';
    } else if(input.productLocation.length < 10){
        errors.productLocation = 'La dirección debe tener al menos 10 letras'
    }
    if(!input.productImage.trim()){
        errors.productImage = 'Ingrese una imagen';
    } else if(!validUrl.test(input.productImage)){
        errors.productImage = 'Ingrese una URL valida para la imagen'
    }
    
    //-----------BOX-----------

    if(!input.boxName.trim()){
        errors.boxName = 'Nombre requerido';
    } else if(input.boxName.length < 4) {
        errors.boxName = 'Nombre tiene que tener al menos 4 caracteres';
    }
     if(!input.boxPrice.trim()){
        errors.boxPrice = 'Ingrese el precio de la boxo';
    }  else if(!validPrice.test(input.boxPrice)){
        errors.boxPrice = 'Ingrese un formato válido'
    }
    if(!input.boxDetail.trim()){
        errors.boxDetail = 'Describa el detalle de la box ';
    } else if(input.boxDetail.length < 25) {
        errors.boxDetail = 'La descripcion tiene que tener al menos 25 caracteres';
    }
    if(!input.boxRanking.trim()){
        errors.boxRanking = 'Ingrese un su valoracion';
    }  else if(!validNum.test(input.boxRanking)){
        errors.boxRanking = 'Ingrese un valor del 1 al 5'
    }
    if(!input.boxExpirationDate.trim()){
        errors.boxExpirationDate = 'Ingrese la fecha de vencimiento';
    }  else if(!valiDate.test(input.boxExpirationDate)){
        errors.boxExpirationDate = 'Ingrese un formato válido (dd/mm/yyyy)'
    }
    if(!input.boxImage.trim()){
        errors.boxImage = 'Ingrese una imagen';
    } else if(!validUrl.test(input.boxImage)){
        errors.boxImage = 'Ingrese una URL valida para la imagen'
    }
    if(!input.boxPerson.trim()){
        errors.boxImage = 'Ingrese la cantidad de personas';
    } else if(!validPerson.test(input.boxPerson)){
        errors.boxPerson = 'Ingrese un formato valido(solo numero enteros)'
    }  
    
    
    return errors
};