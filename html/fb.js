$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:8
            },
            sname:{
                required:true,
                minlength:4
            },
            emailadd:{
                required:true,
                email:true,
                //mobile:true,
            },
            password:{
                required:true,
                minlength:6
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:"enter your first name.....",
            minlength:"enter 4 charcters...."
        }
  
    })
})