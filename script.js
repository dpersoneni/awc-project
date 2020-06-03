
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonObject = JSON.parse(xhr.responseText);
        
        txt = "";
        txt += "<table border='1'>"
        for (x in jsonObject) {

            txt += "<tr><td>" + jsonObject[x].name + "</td></tr>";
        }
        txt += "</table>"
        document.getElementById("ciao").innerHTML = txt;

        txt1 = "";
        txt1 += "<table border='1'>"
        x = 3;
        for (i in jsonObject[x].ingredients) {
                // txt1 += "<tr><td>" + jsonObject[x].ingredients[i] + "</td></tr>";
                console.log(jsonObject[x].ingredients[i] )
        }

        txt1 += "</table>"
        document.getElementById("ingredienti").innerHTML = txt1;

    }
}
xhr.open('GET', 'https://raw.githubusercontent.com/dpersoneni/awc-project/master/prodotti1.json', true);
xhr.send(null);