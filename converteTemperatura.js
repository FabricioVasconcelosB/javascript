function CelciusParaFaharenheit(){
var C = Number(document.getElementById("temperaturaC").value);
document.write((C*1.8) + 32 + " Fahrenheit");
}
function FaharenheitParaCelsius(){
    var F = Number(document.getElementById("temperaturaF").value);
    document.write((F-32) * (5/9) + " Celsius");
    }