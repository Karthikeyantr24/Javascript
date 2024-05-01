function Cars(car_name, car_model,car_price)
{
    this.car_name = car_name;
    this.car_model = car_model;
    this.car_price = car_price;

    this.TeslaPrint = function()
    {
        document.write("Welcome to Tesla Print Function");
    }
}
var c1 = new Cars("Tesla","Model A",50000);
document.write(c1.car_name);
c1.TeslaPrint();
c1.car_year = "2000";
document.write(c1.car_year); 