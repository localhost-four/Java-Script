<html>
  <body> <img id="obj" style="width: 180px"> </body>
</html>

function Add_class() {
    // add CLASS list
    document.getElementById('obj').classList.toggle('rotation');             
}

function remove_class() {
    document.getElementById('obj').classList.remove("container");
}
