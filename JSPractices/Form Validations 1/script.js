function fn1()
{
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");

    if(username.value.trim() =="" || password.value.trim()=="")
    {
        document.write("No Blank values allowed");
        return false;
    }
    else
    {
        return true;
    }

}