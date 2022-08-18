export default function validate(input) {
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

  // if (!input.providerName.trim()) {
  //   errors.providerName = "Name is required";
  // } else if (input.providerName.length < 4) {
  //   errors.providerName = "Name must have more than 4 letters";
  // }

  // if (!input.providerPhone) {
  //   errors.providerPhone = "You must provide a phone number";
  // } else if (!validPhone.test(input.providerPhone)) {
  //   errors.providerPhone = "Phone number should have a valid format";
  // }

  // if (!input.providerAddress.trim()) {
  //   errors.providerAddress = "You must provide an address";
  // } else if (input.providerAddress.length < 10) {
  //   errors.providerAddress = "Address should have at least 10 letters";
  // }

  // if (!validEmail.test(input.providerEmail)) {
  //   errors.providerEmail = "Insert a valid email format";
  // }

  // //--------------------- PRODUCT -------------------------------

  // if (!input.productName.trim()) {
  //   errors.productName = "Name is required";
  // } else if (input.productName.length < 4) {
  //   errors.productName = "Name must have more than 4 letters";
  // }
  // if (!input.productDescription.trim()) {
  //   errors.productDescription = "Describe the detail of your product ";
  // } else if (input.productDescription.length < 25) {
  //   errors.productDescription =
  //     "The description must have at least 25 characters";
  // }
  // if (!input.productPrice) {
  //   errors.productPrice = "Enter product price";
  // } else if (!validPrice.test(input.productPrice)) {
  //   errors.productPrice = "Please enter a valid format";
  // }
  // if (!input.productLocation.trim()) {
  //   errors.productLocation =
  //     "You must enter the location where the service is provided";
  // } else if (input.productLocation.length < 10) {
  //   errors.productLocation = "The address must have at least 10 letters";
  // }
  // if (!input.productImage.trim()) {
  //   errors.productImage = "Required field, enter an image";
  // } else if (!validUrl.test(input.productImage)) {
  //   errors.productImage = "Enter a valid URL for the image";
  // }

  //-----------BOX-----------

  if (!input.boxName.trim()) {
    errors.boxName = "Name is required";
  } else if (input.boxName.length < 4) {
    errors.boxName = "Name must have more than 4 letters";
  }
  if (!input.boxPrice) {
    errors.boxPrice = "Enter box price";
  } else if (!validPrice.test(input.boxPrice)) {
    errors.boxPrice = "Please enter a valid format";
  }
  if (!input.boxDetail.trim()) {
    errors.boxDetail = "Describe the detail of the box";
  } else if (input.boxDetail.length < 25) {
    errors.boxDetail = "The description must have at least 25 characters";
  }

  if (!input.boxExpirationDate) {
    errors.boxExpirationDate = "Enter the expiration date";
  }
  // else if (!valiDate.test(input.boxExpirationDate)) {
  //   errors.boxExpirationDate = "Ingrese un formato válido (dd/mm/yyyy)";
  // }
  if (!input.boxImage.trim()) {
    errors.boxImage = "Required field, enter an image";
  } else if (!validUrl.test(input.boxImage)) {
    errors.boxImage = "Enter a valid URL for the image";
  }
  if (!input.boxPerson) {
    errors.boxPerson = "Enter the number of people";
  } else if (!validPerson.test(input.boxPerson)) {
    errors.boxPerson = "Enter a valid format (only integers)";
  }

  return errors;
}
