<html>
  <body> <img id="obj" style="width: 180px"> </body>
</html>

function Add_class() {
    // add CLASS list
    document.getElementById('obj').classList.toggle('container');             
}

function remove_class() {
    // Remove CLASS list
    document.getElementById('obj').classList.remove("container");
}
