function aggiungiPiatto() {
    id = document.getElementById("id");
    namee = document.getElementById("name");
    image = document.getElementById("image");
    type = document.getElementById("type");
    price = document.getElementById("price");
    ingredients = document.getElementById("ingredients");
    
    var http = new XMLHttpRequest();
    console.log("ciao1")
    http.open('POST', "https://raw.githubusercontent.com/dpersoneni/awc-project/master/prodotti1.json", true);
    console.log("ciao2")

    params = new FormData();
    params.append("id", id.value)
    params.append("name", namee.value)   
    params.append("image", image.value)  
    params.append("type", type.value)  
    params.append("price", price.value)  
    params.append("ingredients", ingredients.value)  

    http.onreadystatechange = function() {
      if  (http.readyState == 4 && http.status == 200) {
          console.log(params)
      }
    }
    http.send(params)

}
