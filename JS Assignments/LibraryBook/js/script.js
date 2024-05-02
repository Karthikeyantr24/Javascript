function fn1()
{
    event.preventDefault();

var option = document.getElementById("category");
// var cat1 = document.getElementById("id1");
// var cat2=document.getElementById("id2");
// var cat3 = document.getElementById("id3");
var book = document.getElementById("book").value;
var email = document.getElementById("email").value;
var name = document.getElementById("name").value;
var published = document.getElementById("published").value;
var price = document.getElementById("price").value;


//book
if(book.trim()=="" || (/\d/.test(book)))
{
    document.getElementById("invalidBook").style.visibility ="visible";
    return false;
}
else
{
    document.getElementById("invalidBook").style.visibility ="hidden";
}

//email
if(/^([a-z0-9\.-]+)@([a-z]+).([a-z]{2,8})$/.test(email))
{
    document.getElementById("invalidEmail").style.visibility="hidden";
}
else
{
    document.getElementById("invalidEmail").style.visibility="visible";
    return false;
}

//name
if(name.trim()=="" || (/\d/.test(book)))
{
    document.getElementById("invalidName").style.visibility ="visible";
    return false;
}
else
{
    document.getElementById("invalidName").style.visibility ="hidden";
}
//published
year=parseInt(published)
if(year>1000 && year<=2100)
{
    document.getElementById("invalidPublished").style.visibility ="hidden";
}
else
{
    document.getElementById("invalidPublished").style.visibility ="visible";
    return false;
}
//price

if((/^([\d]+).([\d]+)/).test(price))
{
    document.getElementById("invalidPrice").style.visibility ="hidden";
}
else
{
    document.getElementById("invalidPrice").style.visibility ="visible";
    return false;
}

//insert into table
document.getElementById("thd").innerHTML = `${book} Book Details`;
document.getElementById("tdCategory").innerHTML=option.value;
document.getElementById("tdBook").innerHTML=book;
document.getElementById("tdEmail").innerHTML=email;
document.getElementById("tdName").innerHTML=name;
document.getElementById("tdPublished").innerHTML=published;
document.getElementById("tdPrice").innerHTML=price;

document.getElementById("cpyYear").innerHTML=published;
document.getElementById("form").style.display="none";
document.getElementById("table").style.display="block";






}