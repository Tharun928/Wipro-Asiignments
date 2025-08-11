<html>
<head>
<title>Simple AJAX JSP</title>
<script>
    function sayHello() {
      var name = document.getElementById("name").value;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("output").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "greet.jsp?name=" + name, true);
      xhttp.send();
    }
</script>
</head>
<body>
<h3>Enter Name:</h3>
<input type="text" id="name">
<button onclick="sayHello()">Greet</button>
<p id="output"></p>
</body>
</html>