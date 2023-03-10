document.getElementById("btn").addEventListener('click', myfunction);
function myfunction()
{
        var e = document.getElementById("firstname").value;
        var f = document.getElementById("lastname").value;
        var g = document.getElementById("gen").value;
        var h = document.getElementById("email").value;
        var i = document.getElementById("inputAddressLine1").value;
        var j = document.getElementById("inputCityTown").value;
        var k = document.getElementById("inputStateProvinceRegion").value;
        var l = document.getElementById("inputZipPostalCode").value;
        var m = document.getElementById("birthday").value;
       // var n = document.getElementById("customFile").value;

   
    document.getElementById("1").innerHTML = "firstname=" + e;
    "\n";
    document.getElementById("2").innerHTML = "lastname=" + f;
    document.getElementById("3").innerHTML = "gen=" + g;
    document.getElementById("4").innerHTML = "email=" + h;
    document.getElementById("5").innerHTML = "address=" + i;
    document.getElementById("6").innerHTML = "city=" + j;
    document.getElementById("7").innerHTML = "state=" + k;
    document.getElementById("8").innerHTML = "zipcode=" + l;
    document.getElementById("9").innerHTML = "birthday=" + m;
    //document.getElementById("10").innerHTML = "resume" + n;
  }

$(document).ready(function () {
  $("#btnj").click(function () {
    alert()
  });
});