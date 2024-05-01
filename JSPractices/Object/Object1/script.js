var Car = {
    car_brand : "Tesla",
    car_model : "Model A",
    car_price : 50000,
    teslaFunction : function()
    {
        document.write("Welcome to Tesla Function");
    }
}
document.write(Car.car_brand +" ");
Car.teslaFunction();