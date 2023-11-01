<html>
  <body> <img class="obj" style="width: 180px"> </body>
</html>

function Add_id() {
  document.getElementsByClassName('obj').setAttribure('id', 'example');
  // or
  document.getElementsByClassName('obj')[0].id = "example";
}
