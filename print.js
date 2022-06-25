 <script>

var username = prompt("Enter your name: ", "");

let result;

    if (confirm("Your name is " + username)) {
       document.write("<h1>Name: " + username + "</h1>");
    } else {
       document.write("<h1>Name:</h1>");
    }

    height = prompt("Enter your height: : ", "");
    if (confirm("Your height is " + height)) {
       document.write("<h1>Height: " + height + "</h1>");
    } else {
       document.write("<h1>Height: :</h1>");
    }

    country = prompt("Enter your country: ", "");
    if (confirm("Your cuntry is " + country)) {
       document.write("<h1>Country: " + country + "</h1>");
    } else {
       document.write("<h1>Country:</h1>");
    }

    console.log(`${username} ${height} ${country} = ${result}`);

    </script>
