export function validate(input) {
  const date = new Date();
  const currentYear = date.getFullYear();
  let yearOfBirth = input.dateBirth.split("-")[0];
  let diference = currentYear - yearOfBirth;
  let errors = {};
  if (!input.first_name) errors.first_name = "*name is required";
  else if (!/^[a-zA-Z'-]+$/.test(input.first_name))
    errors.first_name = "*name is invalid";
  else if (!input.last_name) errors.last_name = "*lastName is required";
  else if (!/^[a-zA-Z'-]+$/.test(input.last_name))
    errors.last_name = "*lastName is invalid";
  else if (!input.dateBirth) errors.dateBirth = "*date of Birth is required";
  else if (diference < 18) errors.dateBirth = "*date of Birth is invalid";
  else if (!input.dateBirth) errors.dateBirth = "*date of Birth is required";
  else if (diference < 18) errors.dateBirth = "*date of Birth is invalid";
  else if (!input.phone) errors.phone = "*phone is required";
  else if (!input.email) errors.email = "*email is required";
  else if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      input.email
    )
  )
    errors.email = "*email must be valid-example:xxxx@xxxx.com";
  else if (!input.password) errors.password = "*password is required";
  else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(input.password))
    errors.password =
      "*password must have at least one letter,at least one number,at least one uppercase letter,at least 8 characters-spaces are not allowed";
  else if (!input.passwordAgain)
    errors.passwordAgain = "*type the password again";
  else if (input.passwordAgain !== input.password)
    errors.passwordAgain = "*password does not match or is invalid";
  else if (!input.accept)
    errors.accept =
      "*I have read and accept all the terms and conditions of the site.";
  else if (!input.accept) errors.accept = "*I accept";
  return errors;
}
