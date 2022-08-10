export function validate(values){
let errors={};
if(!values.email) errors.email='*email is required';
else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)
) errors.email='*email must be valid-example:xxxx@xxxx.com';
else if(!values.password) errors.password='*password is required'
else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(values.password)) 
errors.password='*password must have at least one letter,at least one number,at least one uppercase letter,at least 8 characters and spaces are not allowed'; 
return errors;
}