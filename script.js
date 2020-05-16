var mydata = JSON.parse(prodotti);
var paragraph = document.getElementById("div1");
for ( i=0; i < mydata.length; i++) {

    paragraph.innerHTML += "<p>" + mydata[i].name + "</p>"
}
