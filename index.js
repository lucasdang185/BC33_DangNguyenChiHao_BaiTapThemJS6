function ex() {
  var num = parseInt(document.getElementById("txtNumber").value);
  var rs = "";
  for (var i = 1; i <= num; i++) {
    rs += i +" ";
  }
  document.getElementById("result").innerHTML = rs;
}
