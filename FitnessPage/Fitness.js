function berechne_bmi(){
    m = document.getElementById("height").value;
    kg = document.getElementById("weight").value;
    document.getElementById("result").innerHTML = (kg)/((m/100)*(m/100));
}