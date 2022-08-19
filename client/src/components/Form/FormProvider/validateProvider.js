export default function validate(input) {
  let errors = {};

  let validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!input.providerName.trim()) {
    errors.providerName = "Name is required";
  } else if (input.providerName.length < 4) {
    errors.providerName = "Name must have more than 4 letters";
  }

  if (!input.providerPhone) {
    errors.providerPhone = "You must provide a phone number";
  } else if (!validPhone.test(input.providerPhone)) {
    errors.providerPhone = "Phone number should have a valid format";
  }

  if (!input.providerAddress.trim()) {
    errors.providerAddress = "You must provide an address";
  } else if (input.providerAddress.length < 10) {
    errors.providerAddress = "Address should have at least 10 letters";
  }

  if (!validEmail.test(input.providerEmail)) {
    errors.providerEmail = "Insert a valid email format";
  }

  return errors;
}
