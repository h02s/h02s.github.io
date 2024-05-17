<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HOSS website</title>
    <style>
        body {
            font-family: 'Tahoma', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        section.content {
            padding: 20px;
            margin: 15px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        button {
            background-color: #008CBA;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to the HOSS webste!</h1>
    </header>
    <section class="content">
        <h2>About me</h2>
        <p>I'm begginer in code world and love league :) .</p>
        <button onclick="displayDate()">2024</button>
        <p id="date"></p>
    </section>
    <footer>
        <p>xdd</p>
    </footer>
    <script>
        function displayDate() {
            document.getElementById("date").innerHTML = Date();
        }
    </script>
</body>
</html>
