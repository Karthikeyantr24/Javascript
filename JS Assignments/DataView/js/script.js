function fn1()
{
    event.preventDefault();
    isValid=true;
    var username = document.getElementById("uname").value;
    var mailid = document.getElementById("mail").value;
    var phoneNumber = document.getElementById("phone").value;
    var password1 = document.getElementById("password").value;
    var genderMale= document.getElementById("mgender");
    var genderFemale = document.getElementById("fgender");
    var genderNot = document.getElementById("ngender")
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    var time = document.getElementById("time").value;
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var interest1 = document.getElementById("int");
    var photo = document.getElementById("photo");
    // var int1 = document.getElementById("int1");
    // var int2 = document.getElementById("int2");
    // var int3 = document.getElementById("int3");

    // var nameError =document.getElementById("unameInvalid");
    // nameError.textContent="";
    //user name
    if(username.trim()=="" || /\d/.test(username) )
    {
        // nameError.textContent="Invalid Username";
        // isValid=false;
        // nameError.style.color="red";

        uname.style.border =  "3px solid red ";
        document.getElementById("unameInvalid").style.visibility="visible";
        return false;
    }
    else
    {
        document.getElementById("unameInvalid").style.visibility="hidden";
        uname.style.border="1px solid black";
    }
    //mail id
    var regx = /^([a-z0-9\.-]+)@([a-z]+).([a-z]{2,8})$/;
    if(!regx.test(mailid))
    {
        mail.style.border = "3px solid red ";
        document.getElementById("mailInvalid").style.visibility="visible";
        return false;
    }
    else
    {
        document.getElementById("mailInvalid").style.visibility="hidden";
        mail.style.border="1px solid black";
    }
    //phone number
    var regx1=/^([6-9])(\d{9})/;
    if(!regx1.test(phoneNumber))
    {
        phone.style.border="3px solid red";
        document.getElementById("phoneInvalid").style.visibility="visible";
        return false;
    }
    else
    {
        document.getElementById("phoneInvalid").style.visibility="hidden";
        phone.style.border="1px solid black";
    }
    //password
    if(password1.length<8)
    {
        password.style.border="3px solid red";
        document.getElementById("passwordInvalid").style.visibility="visible";
        return false;
    }
    else
    {
        document.getElementById("passwordInvalid").style.visibility="hidden";
        password.style.border="1px solid black";
    }
    //gender
    var Gender = "";
    if(genderMale.checked==true)
    {
        document.getElementById("genderInvalid").style.visibility="hidden";
        Gender=genderMale.value;
    }
    else if(genderFemale.checked==true)
    {
        document.getElementById("genderInvalid").style.visibility="hidden";
        Gender=genderFemale.value;
    }
    else if(genderNot.checked==true)
    {
        document.getElementById("genderInvalid").style.visibility="hidden";
        Gender=genderNot.value;
    }
    else
    {
        document.getElementById("genderInvalid").style.visibility="visible";
        return false;
    }

    //address
    if(address.length<1)
    {
        document.getElementById("addressInvalid").style.visibility="visible";
        return false;
    }
    else
    {
        document.getElementById("addressInvalid").style.visibility="hidden";
    }

    // //dob
    if(dob=="")
    {
        document.getElementById("dobInvalid").style.visibility="visible";
        return false;
    }
    else
    {
        document.getElementById("dobInvalid").style.visibility="hidden";
    }
    //time
    if(time=="")
    {
        document.getElementById("timeInvalid").style.visibility="visible";
        return false;
    }
    else
    {
        document.getElementById("timeInvalid").style.visibility="hidden";
    }

    //language
    var flag=0;
    var CheckboxesValue= "";
    checkboxes.forEach(function(checkbox)
    {
        if(checkbox.checked)
        {
            CheckboxesValue+=checkbox.value +" ";
            flag++;
        }
    });
    if(flag>0)
    {
        document.getElementById("langInvalid").style.visibility="hidden";
    }
    else
    {
        document.getElementById("langInvalid").style.visibility="visible";
        return false;
    }

    

    //Interest
     if(interest1.selectedIndex>=0)
     {
        document.getElementById("intInvalid").style.visibility="hidden";
     }
     else
     {
        document.getElementById("intInvalid").style.visibility="visible";
        return false;
     }
    
     //Image
     var file =photo.files[0];
     if(!file)
     {
        document.getElementById("photoInvalid").style.visibility="visible";
        return false;
     }
     else
     {
        const reader = new FileReader();
        reader.onload = function(event)
        {
            const imageUrl = event.target.result;
            displayImage(imageUrl);
        };
        reader.readAsDataURL(file);
     }

     function displayImage(imageUrl)
     {
        const cell = document.getElementById("tdPhoto");
        const img = document.createElement("img");
        img.src = imageUrl;
        cell.appendChild(img);
        img.width=150;
     }



    document.getElementById("tdUsername").innerHTML=username;
    document.getElementById("tdMail").innerHTML=mailid;
    document.getElementById("tdPhone").innerHTML=phoneNumber;
    document.getElementById("tdPassword").innerHTML=password1;
    document.getElementById("tdGender").innerHTML=Gender;
    document.getElementById("tdAddress").innerHTML=address;
    document.getElementById("tdDob").innerHTML=dob;
    document.getElementById("tdTime").innerHTML=time;
    document.getElementById("tdLang").innerHTML=CheckboxesValue;
    document.getElementById("tdInterest").innerHTML=interest1.value;
    // document.getElementById("tdPhoto").innerHTML=photo.value;
    
    //Table and Form Visibility
    document.getElementById("form").style.display="none";
    document.getElementById("table").style.display="block";


}