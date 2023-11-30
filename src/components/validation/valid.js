export const vaidData = (values)=>{
    let errors ={};
    if(values.name.trim()==""){
        errors.name = "user name is required"
    }else if(values.name.trim().length<3){
        errors.name = "user name must be at least 3 characters"
    }

    if(values.email.trim()==""){
        errors.email = "user email is required"
    }else if(values.email.trim().length<9){
        errors.email = "user email must be at least 9 characters"
    }


    if(values.password.trim()==""){
        errors.password = "user password is required"
    }else if(values.password.trim().length<3){
        errors.password = "user password must be at least 3 characters"
    }
    return errors
}