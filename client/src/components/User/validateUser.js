export default function validateUser(users) {
    let errors = {};
  
    let validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let validPrice = /^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(.[0-9]{1,9})?$/;
    let validUrl =
      /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    let valiDate =
      /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    let validPerson = /^[0-9]+$/;
    let validNum = /^[0-9]+$/;
    let validPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/

  
   
     if (!users.first_name.trim()) {
      errors.first_name = "Nombre requerido";
    } else if (users.first_name.length < 4) {
      errors.first_name = "Nombre tiene que tener al menos 4 caracteres";
    }
    if (!users.last_name.trim()) {
      errors.last_name = "Nombre requerido";
    } else if (users.last_name.length < 4) {
      errors.last_name = "Nombre tiene que tener al menos 4 caracteres";
    }
    if (!validEmail.test(users.email)) {
      errors.email = "Insert un correo valido";
    }
    if (!users.phone.trim()) {
      errors.phone = "You must provide a phone number";
    } else if (!validPhone.test(users.phone)) {
      errors.phone = "Phone number should have a valid format";
    }
    if (!users.password.trim()) {
      errors.password = "Ingrese contraseña";
    } else if (!validPassword.test(users.password)) {
      errors.password = "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.";
    }
    
    return errors;
  }
  