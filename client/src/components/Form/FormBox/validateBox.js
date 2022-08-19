export default function validateBox(input) {
  let errors = {};

  let validPrice = /^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(.[0-9]{1,9})?$/;
  let validUrl =
    /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
  let validPerson = /^[0-9]+$/;

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
