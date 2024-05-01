function fn()
{
    var val1 = document.getElementById("rd1");
    var val2 = document.getElementById("rd2");
    var val3 = document.getElementById("rd3");

    if(val1.checked==true)
    {
        document.write("You Choose : "+val1.value);
        // alert(val1.value);
    }
    else if(val2.checked==true)
    {
        document.write("You Choose : "+val2.value);
    }
    else if(val3.checked==true)
    {
        document.write("You Choose : "+val3.value);
    }
    else
    {
        document.write("Not selected");
    }

}