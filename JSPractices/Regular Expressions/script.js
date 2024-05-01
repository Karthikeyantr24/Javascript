function fn1()
{
    var us1 = document.getElementById("uname1").value;
    var us2 = document.getElementById("uname2").value;
    var us3 = document.getElementById("uname3").value;

    var regx1 = /E00/;
    var regx2 = /[a-z]100/;
    var regx3 = /[^1-10]abc/;
    
    if(regx1.test(us1))
    {
        document.write("Valid Expression!!! "+ " ");
    }
    else{
        document.write("Invalid Expression");
    }

    if(regx2.test(us2))
    {
        document.write("Valid Expression!!! "+ " ");
    }
    else{
        document.write("Invalid Expression");
    }

    if(regx3.test(us3))
    {
        document.write("Valid Expression!!! "+ " ");
    }
    else{
        document.write("Invalid Expression");
    }
}