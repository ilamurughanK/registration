function Check(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phno=document.getElementById("phno").value;
    var pass=document.getElementById("password").value;
    var cpass=document.getElementById("cpass").value;
    var username=document.getElementById("username").value;
    var Gender="";
    var gender=document.getElementsByName("gender");
    for(var i=0;i<gender.length;i++)
        {
            if(gender[i].checked);
                {
                    console.log(gender[i].value);
                    Gender=gender[i].value;
                }
        }

        if(name=="" || email=="" || phno==""|| pass==""|Gender=="")
            {
                window.alert("Fill the proper details!")
            }
        
            else{
                window.confirm(`
                    \n🔥\n
                    Name -> ${name}\n
                    UserName -> ${username}\n
                    Email -> ${email}\n
                    DOB  -> ${cpass}\n
                    Gender -> ${Gender}\n

                    `);
            }

}