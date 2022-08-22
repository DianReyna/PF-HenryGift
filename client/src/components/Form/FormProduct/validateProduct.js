export default function validateProduct(input, data) {
  let errors = {};

  let validPrice = /^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(.[0-9]{1,9})?$/;

  const product = data.products.products.find(
    (e) => e.name === input.productName
  );

  if (!input.productName.trim()) {
    errors.productName = "Name is required";
  } else if (input.productName.length < 4) {
    errors.productName = "Name must have more than 4 letters";
  } else if (product) {
    errors.productName = "This product name already exists";
  }
  if (!input.productDescription.trim()) {
    errors.productDescription = "Describe the detail of your product ";
  } else if (input.productDescription.length < 25) {
    errors.productDescription =
      "The description must have at least 25 characters";
  }
  if (!input.productPrice) {
    errors.productPrice = "Enter product price";
  } else if (!validPrice.test(input.productPrice)) {
    errors.productPrice = "Please enter a valid format";
  }
  if (!input.productLocation.trim()) {
    errors.productLocation =
      "You must enter the location where the service is provided";
  } else if (input.productLocation.length < 10) {
    errors.productLocation = "The address must have at least 10 letters";
  }
  if (!input.productProvider) {
    errors.productProvider = "you must select a provider option";
  }
  // if (!input.productImage.trim()) {
  //   errors.productImage = "Required field, enter an image";
  // }
  return errors;
}
