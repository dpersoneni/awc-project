
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

    }
}
xhr.open('GET', 'https://raw.githubusercontent.com/dpersoneni/awc-project/master/prodotti1.json', true);
xhr.send(null);