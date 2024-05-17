<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Professional GitHub Page</title>
    <style>
        :root {
            --primary-color: #333;
            --secondary-color: #f4f4f4;
            --font-color: #fff;
        }
        [data-theme="light"] {
            --primary-color: #f4f4f4;
            --secondary-color: #333;
            --font-color: #000;
        }
        body {
            font-family: 'Arial', sans-serif;
            background-color: var(--primary-color);
            color: var(--font-color);
            margin: 0;
            padding: 0;
            transition: background-color 0.3s, color 0.3s;
        }
        header, footer {
            background-color: var(--secondary-color);
            color: var(--font-color);
            padding: 1rem;
            text-align: center;
        }
        nav {
            display: flex;
            justify-content: center;
            padding: 1rem;
        }
        nav a {
            color: var(--font-color);
            text-decoration: none;
            margin: 0 1rem;
        }
        .content {
            padding: 2rem;
        }
        .theme-switcher {
            position: fixed;
            top: 1rem;
            right: 1rem;
            cursor: pointer;
        }
    </style>
</head>
<body data-theme="dark">
    <header>
        <h1>Welcome to My Professional GitHub Page</h1>
    </header>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="content">
        <section id="home">
            <h2>Home</h2>
            <p>This is the home section of the page.</p>
        </section>
        <section id="about">
            <h2>About</h2>
            <p>This section is about me and my work.</p>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p>Here's how you can reach me.</p>
        </section>
    </div>
    <footer>
        <p>Copyright © 2024 by Me</p>
    </footer>
    <div class="theme-switcher" onclick="switchTheme()">Switch Theme</div>
    <script>
        function switchTheme() {
            const currentTheme = document.body.getAttribute('data-theme');
            document.body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
        }
    </script>
</body>
</html>
