function fn1()
{
    var select = document.getElementById("id1");
    document.write("You selected : "+ select.options[select.selectedIndex].value);
}