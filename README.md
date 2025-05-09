<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HDFMY's Resume</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        :root {
            --primary-color: #2ecc71;
            --secondary-color: #3498db;
            --bg-color: #f5f5f5;
            --text-color: #333;
            --card-bg: #fff;
            --header-bg: #222;
            --header-text: #fff;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --glow: 0 0 10px rgba(46, 204, 113, 0.5);
            --border: 1px solid rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }

        [data-theme="dark"] {
            --primary-color: #2ecc71;
            --secondary-color: #3498db;
            --bg-color: #121212;
            --text-color: #e0e0e0;
            --card-bg: #1e1e1e;
            --header-bg: #000;
            --header-text: #e0e0e0;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            --glow: 0 0 10px rgba(46, 204, 113, 0.7);
            --border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }

        @keyframes blink {
            50% { border-color: transparent }
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        @keyframes glitch {
            0% { transform: translate(0) }
            20% { transform: translate(-2px, 2px) }
            40% { transform: translate(-2px, -2px) }
            60% { transform: translate(2px, 2px) }
            80% { transform: translate(2px, -2px) }
            100% { transform: translate(0) }
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Courier New', monospace;
            transition: var(--transition);
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            overflow-x: hidden;
        }

        .terminal-text {
            overflow: hidden;
            white-space: nowrap;
            border-right: 3px solid var(--primary-color);
            animation: 
                typing 3.5s steps(30, end),
                blink 0.75s step-end infinite;
            margin-bottom: 15px;
        }

        header {
            background-color: var(--header-bg);
            color: var(--header-text);
            padding: 20px;
            position: relative;
            text-align: center;
            box-shadow: var(--shadow);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            color: var(--primary-color);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo i {
            animation: pulse 2s infinite;
        }

        .banner {
            margin: 30px 0;
            text-align: center;
        }

        .banner h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            animation: glitch 1s infinite;
            animation-play-state: paused;
        }

        .banner h1:hover {
            animation-play-state: running;
        }

        .banner p {
            font-size: 1.2rem;
            opacity: 0.8;
        }

        .controls {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .theme-switch {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.1);
        }

        .language-switch {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.1);
        }

        .clock {
            font-size: 1.2rem;
            font-weight: bold;
            text-align: center;
            color: var(--primary-color);
            margin-top: 10px;
        }

        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 0 20px;
        }

        .tabs {
            display: flex;
            background-color: var(--card-bg);
            border-radius: 8px 8px 0 0;
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .tab {
            flex: 1;
            padding: 15px;
            text-align: center;
            cursor: pointer;
            transition: var(--transition);
            border-bottom: 3px solid transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .tab.active {
            background-color: var(--card-bg);
            border-bottom: 3px solid var(--primary-color);
            color: var(--primary-color);
        }

        .tab:hover:not(.active) {
            background-color: rgba(46, 204, 113, 0.1);
        }

        .tab-content {
            display: none;
            background-color: var(--card-bg);
            padding: 30px;
            border-radius: 0 0 8px 8px;
            box-shadow: var(--shadow);
            animation: fadeIn 0.5s ease;
        }

        .tab-content.active {
            display: block;
        }

        .card {
            background-color: var(--card-bg);
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: var(--shadow);
            border: var(--border);
            transition: var(--transition);
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: var(--glow);
        }

        .section-title {
            color: var(--primary-color);
            margin-bottom: 20px;
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .skill-tag {
            background-color: rgba(46, 204, 113, 0.1);
            color: var(--primary-color);
            padding: 5px 15px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: var(--transition);
        }

        .skill-tag:hover {
            background-color: var(--primary-color);
            color: white;
            transform: scale(1.05);
        }

        .experience-item, .education-item {
            margin-bottom: 20px;
            position: relative;
            padding-left: 20px;
            border-left: 2px solid var(--primary-color);
        }

        .experience-item:hover, .education-item:hover {
            border-left: 2px solid var(--secondary-color);
        }

        .date {
            color: var(--secondary-color);
            font-style: italic;
            margin-bottom: 5px;
        }

        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        .project-card {
            border-radius: 8px;
            overflow: hidden;
            background: var(--card-bg);
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--glow);
        }

        .project-info {
            padding: 15px;
        }

        .project-title {
            color: var(--primary-color);
            margin-bottom: 10px;
        }

        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin-top: 10px;
        }

        .project-tag {
            background-color: rgba(52, 152, 219, 0.1);
            color: var(--secondary-color);
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
        }

        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px;
            background-color: rgba(46, 204, 113, 0.05);
            border-radius: 8px;
            transition: var(--transition);
        }

        .contact-item:hover {
            background-color: rgba(46, 204, 113, 0.1);
            transform: translateY(-3px);
        }

        .contact-icon {
            font-size: 1.5rem;
            color: var(--primary-color);
        }

        footer {
            text-align: center;
            padding: 20px;
            margin-top: 50px;
            background-color: var(--header-bg);
            color: var(--header-text);
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .social-links {
            display: flex;
            gap: 15px;
        }

        .social-icon {
            color: var(--header-text);
            font-size: 1.5rem;
            transition: var(--transition);
        }

        .social-icon:hover {
            color: var(--primary-color);
            transform: translateY(-3px);
        }

        .terminal-box {
            background-color: #000;
            color: #0f0;
            padding: 20px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            margin-bottom: 20px;
            position: relative;
        }

        .terminal-header {
            display: flex;
            gap: 5px;
            margin-bottom: 10px;
        }

        .terminal-circle {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #ff5f56;
        }

        .terminal-circle:nth-child(2) {
            background-color: #ffbd2e;
        }

        .terminal-circle:nth-child(3) {
            background-color: #27c93f;
        }

        .terminal-command {
            color: #0f0;
            margin-bottom: 10px;
        }

        .terminal-cursor {
            animation: blink 1s infinite;
        }

        .terminal-output {
            color: #fff;
        }

        .matrix-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.05;
            pointer-events: none;
        }

        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 20px;
            }

            .tabs {
                flex-direction: column;
            }

            .project-grid, .contact-grid {
                grid-template-columns: 1fr;
            }

            .footer-content {
                flex-direction: column;
                gap: 20px;
            }
        }
    </style>
</head>
<body>
    <canvas id="matrixCanvas" class="matrix-bg"></canvas>
    
    <header>
        <div class="header-content">
            <div class="logo">
                <i class="fas fa-code"></i> 
                <span class="language-switch-text">رزومه </span>
            </div>
            <div class="controls">
                <div class="theme-switch" id="themeSwitch">
                    <i class="fas fa-moon"></i>
                    <span>Dark Mode</span>
                </div>
                <div class="language-switch" id="languageSwitch">
                    <i class="fas fa-language"></i>
                    <span>EN</span>
                </div>
            </div>
        </div>
        <div class="clock" id="clock"></div>
    </header>

    <div class="container">
        <div class="banner">
            <h1 class="language-content en">Hi, I'm John Doe</h1>
            <h1 class="language-content fa" style="display: none;">سلام من حسین دهقانی ام!</h1>
            <div class="terminal-text language-content en">Junior Developer</div>
            <div class="terminal-text language-content fa" style="display: none;">برنامه نویس تازه‌کار</div>
        </div>

        <div class="terminal-box">
            <div class="terminal-header">
                <div class="terminal-circle"></div>
                <div class="terminal-circle"></div>
                <div class="terminal-circle"></div>
            </div>
            <div class="terminal-command">
                <span class="language-content en">$ ./display_skills.sh</span>
                <span class="language-content es" style="display: none;">$ ./mostrar_habilidades.sh</span>
                <span class="terminal-cursor">█</span>
            </div>
            <div class="terminal-output">
                <span class="language-content en">> Python,Git,Github,Linux...</span>
                <span class="language-content fa" style="display: none;">> Python,Git,Github,Linux...</span>
            </div>
        </div>

        <div class="tabs">
            <div class="tab active" data-tab="about">
                <i class="fas fa-user"></i> 
                <span class="language-content en">About</span>
                <span class="language-content es" style="display: none;">Sobre Mí</span>
            </div>
            <div class="tab" data-tab="experience">
                <i class="fas fa-briefcase"></i>
                <span class="language-content en">Experience</span>
                <span class="language-content es" style="display: none;">Experiencia</span>
            </div>
            <div class="tab" data-tab="skills">
                <i class="fas fa-code"></i>
                <span class="language-content en">Skills</span>
                <span class="language-content es" style="display: none;">Habilidades</span>
            </div>
            <div class="tab" data-tab="projects">
                <i class="fas fa-project-diagram"></i>
                <span class="language-content en">Projects</span>
                <span class="language-content es" style="display: none;">Proyectos</span>
            </div>
            <div class="tab" data-tab="contact">
                <i class="fas fa-envelope"></i>
                <span class="language-content en">Contact</span>
                <span class="language-content es" style="display: none;">Contacto</span>
            </div>
        </div>

        <!-- About Tab -->
        <div class="tab-content active" id="about">
            <h2 class="section-title">
                <i class="fas fa-user"></i>
                <span class="language-content en">About Me</span>
                <span class="language-content es" style="display: none;">Sobre Mí</span>
            </h2>
            <div class="card">
                <p class="language-content en"></p>
                <p class="language-content es" style="display: none;"></p>
            </div>
            
            <h2 class="section-title">
                <i class="fas fa-graduation-cap"></i>
                <span class="language-content en">Education</span>
                <span class="language-content es" style="display: none;">Educación</span>
            </h2>
            <div class="card">
                <div class="education-item">
                    <div class="date">2015 - 2019</div>
                    <h3 class="language-content en">Bachelor of Science in Computer Science</h3>
                    <h3 class="language-content es" style="display: none;">Licenciatura en Ciencias de la Computación</h3>
                    <p class="language-content en">University of Technology</p>
                    <p class="language-content es" style="display: none;">Universidad de Tecnología</p>
                </div>
                <div class="education-item">
                    <div class="date">2019 - 2021</div>
                    <h3 class="language-content en"></h3>
                    <h3 class="language-content es" style="display: none;"></h3>
                    <p class="language-content en"></p>
                    <p class="language-content es" style="display: none;"></p>
                </div>
            </div>

            <h2 class="section-title">
                <i class="fas fa-certificate"></i>
                <span class="language-content en">Certifications</span>
                <span class="language-content es" style="display: none;">Certificaciones</span>
            </h2>
            <div class="card">
                <ul>
                    <li class="language-content en">AWS Certified Solutions Architect</li>
                    <li class="language-content es" style="display: none;">Arquitecto de Soluciones Certificado AWS</li>
                    <li class="language-content en">Certified Ethical Hacker (CEH)</li>
                    <li class="language-content es" style="display: none;">Hacker Ético Certificado (CEH)</li>
                    <li class="language-content en">CompTIA Security+</li>
                    <li class="language-content es" style="display: none;">CompTIA Security+</li>
                </ul>
            </div>
        </div>

        <!-- Experience Tab -->
        <div class="tab-content" id="experience">
            <h2 class="section-title">
                <i class="fas fa-briefcase"></i>
                <span class="language-content en">Work Experience</span>
                <span class="language-content es" style="display: none;">Experiencia Laboral</span>
            </h2>
            <div class="card">
                <div class="experience-item">
                    <div class="date">2021 - Present</div>
                    <h3 class="language-content en">Senior Full Stack Developer</h3>
                    <h3 class="language-content es" style="display: none;">Desarrollador Full Stack Senior</h3>
                    <p class="language-content en">TechCorp Solutions</p>
                    <p class="language-content es" style="display: none;">TechCorp Solutions</p>
                    <ul class="language-content en">
                        <li>Lead a team of 5 developers in building enterprise-level applications</li>
                        <li>Implemented secure authentication systems using JWT and OAuth</li>
                        <li>Reduced API response time by 40% through optimization techniques</li>
                        <li>Conducted regular security audits and penetration testing</li>
                    </ul>
                    <ul class="language-content es" style="display: none;">
                        <li>Lideré un equipo de 5 desarrolladores en la creación de aplicaciones de nivel empresarial</li>
                        <li>Implementé sistemas de autenticación seguros utilizando JWT y OAuth</li>
                        <li>Reduje el tiempo de respuesta de la API en un 40% mediante técnicas de optimización</li>
                        <li>Realicé auditorías de seguridad y pruebas de penetración regulares</li>
                    </ul>
                </div>
                <div class="experience-item">
                    <div class="date">2019 - 2021</div>
                    <h3 class="language-content en">Full Stack Developer</h3>
                    <h3 class="language-content es" style="display: none;">Desarrollador Full Stack</h3>
                    <p class="language-content en">Innovate Digital</p>
                    <p class="language-content es" style="display: none;">Innovate Digital</p>
                    <ul class="language-content en">
                        <li>Developed and maintained React-based front-end applications</li>
                        <li>Built RESTful APIs using Node.js and Express</li>
                        <li>Implemented CI/CD pipelines using GitHub Actions</li>
                        <li>Collaborated with UX designers to implement responsive designs</li>
                    </ul>
                    <ul class="language-content es" style="display: none;">
                        <li>Desarrollé y mantuve aplicaciones front-end basadas en React</li>
                        <li>Construí APIs RESTful utilizando Node.js y Express</li>
                        <li>Implementé pipelines CI/CD utilizando GitHub Actions</li>
                        <li>Colaboré con diseñadores UX para implementar diseños responsivos</li>
                    </ul>
                </div>
                <div class="experience-item">
                    <div class="date">2017 - 2019</div>
                    <h3 class="language-content en">Security Analyst</h3>
                    <h3 class="language-content es" style="display: none;">Analista de Seguridad</h3>
                    <p class="language-content en">CyberShield Inc.</p>
                    <p class="language-content es" style="display: none;">CyberShield Inc.</p>
                    <ul class="language-content en">
                        <li>Performed vulnerability assessments for client applications</li>
                        <li>Developed security policies and best practices</li>
                        <li>Created secure coding guidelines for development teams</li>
                        <li>Conducted security training for developers</li>
                    </ul>
                    <ul class="language-content es" style="display: none;">
                        <li>Realicé evaluaciones de vulnerabilidad para aplicaciones de clientes</li>
                        <li>Desarrollé políticas de seguridad y mejores prácticas</li>
                        <li>Creé directrices de codificación segura para equipos de desarrollo</li>
                        <li>Realicé capacitación en seguridad para desarrolladores</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Skills Tab -->
        <div class="tab-content" id="skills">
            <h2 class="section-title">
                <i class="fas fa-laptop-code"></i>
                <span class="language-content en">Technical Skills</span>
                <span class="language-content es" style="display: none;">Habilidades Técnicas</span>
            </h2>
            <div class="card">
                <h3 class="language-content en">Frontend Development</h3>
                <h3 class="language-content es" style="display: none;">Desarrollo Frontend</h3>
                <div class="skill-list">
                    <div class="skill-tag"><i class="fab fa-react"></i> React</div>
                    <div class="skill-tag"><i class="fab fa-js"></i> JavaScript</div>
                    <div class="skill-tag"><i class="fab fa-vuejs"></i> Vue.js</div>
                    <div class="skill-tag"><i class="fab fa-html5"></i> HTML5</div>
                    <div class="skill-tag"><i class="fab fa-css3-alt"></i> CSS3/SASS</div>
                    <div class="skill-tag"><i class="fab fa-bootstrap"></i> Bootstrap</div>
                    <div class="skill-tag"><i class="fas fa-mobile-alt"></i> Responsive Design</div>
                </div>
            </div>

            <div class="card">
                <h3 class="language-content en">Backend Development</h3>
                <h3 class="language-content es" style="display: none;">Desarrollo Backend</h3>
                <div class="skill-list">
                    <div class="skill-tag"><i class="fab fa-node-js"></i> Node.js</div>
                    <div class="skill-tag"><i class="fab fa-python"></i> Python</div>
                    <div class="skill-tag"><i class="fas fa-server"></i> Express</div>
                    <div class="skill-tag"><i class="fas fa-database"></i> MongoDB</div>
                    <div class="skill-tag"><i class="fas fa-table"></i> SQL</div>
                    <div class="skill-tag"><i class="fas fa-fire"></i> Firebase</div>
                    <div class="skill-tag"><i class="fas fa-exchange-alt"></i> RESTful APIs</div>
                </div>
            </div>

            <div class="card">
                <h3 class="language-content en">DevOps & Tools</h3>
                <h3 class="language-content es" style="display: none;">DevOps & Herramientas</h3>
                <div class="skill-list">
                    <div class="skill-tag"><i class="fab fa-git-alt"></i> Git</div>
                    <div class="skill-tag"><i class="fab fa-docker"></i> Docker</div>
                    <div class="skill-tag"><i class="fab fa-aws"></i> AWS</div>
                    <div class="skill-tag"><i class="fas fa-cloud"></i> Google Cloud</div>
                    <div class="skill-tag"><i class="fas fa-terminal"></i> CI/CD</div>
                    <div class="skill-tag"><i class="fas fa-project-diagram"></i> Jira</div>
                </div>
            </div>

            <div class="card">
                <h3 class="language-content en">Security</h3>
                <h3 class="language-content es" style="display: none;">Seguridad</h3>
                <div class="skill-list">
                    <div class="skill-tag"><i class="fas fa-shield-alt"></i> Penetration Testing</div>
                    <div class="skill-tag"><i class="fas fa-user-shield"></i> Authentication</div>
                    <div class="skill-tag"><i class="fas fa-lock"></i> Encryption</div>
                    <div class="skill-tag"><i class="fas fa-bug"></i> Vulnerability Assessment</div>
                    <div class="skill-tag"><i class="fas fa-code-branch"></i> Secure Coding</div>
                </div>
            </div>
        </div>

        <!-- Projects Tab -->
        <div class="tab-content" id="projects">
            <h2 class="section-title">
                <i class="fas fa-project-diagram"></i>
                <span class="language-content en">Featured Projects</span>
                <span class="language-content es" style="display: none;">Proyectos Destacados</span>
            </h2>
            <div class="project-grid">
                <div class="project-card">
                    <div class="project-info">
                        <h3 class="project-title language-content en">Secure Banking Portal</h3>
                        <h3 class="project-title language-content es" style="display: none;">Portal Bancario Seguro</h3>
                        <p class="language-content en">A secure online banking platform with multi-factor authentication and real-time fraud detection.</p>
                        <p class="language-content es" style="display: none;">Una plataforma bancaria en línea segura con autenticación de múltiples factores y detección de fraude en tiempo real.</p>
                        <div class="project-tags">
                            <span class="project-tag">React</span>
                            <span class="project-tag">Node.js</span>
                            <span class="project-tag">MongoDB</span>
                            <span class="project-tag">OAuth</span>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-info">
                        <h3 class="project-title language-content en">E-Commerce Platform</h3>
                        <h3 class="project-title language-content es" style="display: none;">Plataforma de Comercio Electrónico</h3>
                        <p class="language-content en">A scalable e-commerce solution with secure payment processing and real-time inventory management.</p>
                        <p class="language-content es" style="display: none;">Una solución de comercio electrónico escalable con procesamiento de pagos seguro y gestión de inventario en tiempo real.</p>
                        <div class="project-tags">
                            <span class="project-tag">Vue.js</span>
                            <span class="project-tag">Express</span>
                            <span class="project-tag">PostgreSQL</span>
                            <span class="project-tag">Stripe API</span>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-info">
                        <h3 class="project-title language-content en">Security Audit Tool</h3>
                        <h3 class="project-title language-content es" style="display: none;">Herramienta de Auditoría de Seguridad</h3>
                        <p class="language-content en">An automated tool for scanning web applications and identifying security vulnerabilities.</p>
                        <p class="language-content es" style="display: none;">Una herramienta automatizada para escanear aplicaciones web e identificar vulnerabilidades de seguridad.</p>
                        <div class="project-tags">
                            <span class="project-tag">Python</span>
                            <span class="project-tag">Docker</span>
                            <span class="project-tag">REST API</span>
                            <span class="project-tag">OWASP</span>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-info">
                        <h3 class="project-title language-content en">Real-time Chat App</h3>
                        <h3 class="project-title language-content es" style="display: none;">App de Chat en Tiempo Real</h3>
                        <p class="language-content en">End-to-end encrypted messaging platform with support for text, voice, and video communication.</p>
                        <p class="language-content es" style="display: none;">Plataforma de mensajería encriptada de extremo a extremo con soporte para comunicación de texto, voz y video.</p>
                        <div class="project-tags">
                            <span class="project-tag">React Native</span>
                            <span class="project-tag">Socket.io</span>
                            <span class="project-tag">WebRTC</span>
                            <span class="project-tag">Firebase</span>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="section-title">
                <i class="fas fa-code-branch"></i>
                <span class="language-content en">Open Source Contributions</span>
                <span class="language-content es" style="display: none;">Contribuciones de Código Abierto</span>
            </h2>
            <div class="card">
                <ul class="language-content en">
                    <li>Contributed to React security best practices documentation</li>
                    <li>Created a Node.js package for secure authentication workflows</li>
                    <li>Fixed security vulnerabilities in popular npm packages</li>
                    <li>Developed plug-ins for security scanning tools</li>
                </ul>
                <ul class="language-content es" style="display: none;">
                    <li>Contribuí a la documentación de mejores prácticas de seguridad de React</li>
                    <li>Creé un paquete de Node.js para flujos de autenticación seguros</li>
                    <li>Corregí vulnerabilidades de seguridad en paquetes npm populares</li>
                    <li>Desarrollé plugins para herramientas de escaneo de seguridad</li>
                </ul>
            </div>
        </div>

        <!-- Contact Tab -->
        <div class="tab-content" id="contact">
            <h2 class="section-title">
                <i class="fas fa-envelope"></i>
                <span class="language-content en">Contact Information</span>
                <span class="language-content es" style="display: none;">Información de Contacto</span>
            </h2>
            <div class="contact-grid">
                <div class="contact-item">
                    <i class="fas fa-envelope contact-icon"></i>
                    <div>
                        <p>john.doe@example.com</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone contact-icon"></i>
                    <div>
                        <p>+1 (123) 456-7890</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt contact-icon"></i>
                    <div>
                        <p class="language-content en">San Francisco, CA</p>
                        <p class="language-content es" style="display: none;">San Francisco, CA</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fab fa-github contact-icon"></i>
                    <div>
                        <p>github.com/johndoe</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fab fa-linkedin contact-icon"></i>
                    <div>
                        <p>linkedin.com/in/johndoe</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-globe contact-icon"></i>
                    <div>
                        <p>johndoe.dev</p>
                    </div>
                </div>
            </div>

            <h2 class="section-title" style="margin-top: 30px;">
                <i class="fas fa-paper-plane"></i>
                <span class="language-content en">Get In Touch</span>
                <span class="language-content es" style="display: none;">Ponte en Contacto</span>
            </h2>
            <div class="card">
                <form id="contactForm">
                    <div style="margin-bottom: 15px;">
                        <label for="name" class="language-content en">Name</label>
                        <label for="name" class="language-content es" style="display: none;">Nombre</label>
                        <input type="text" id="name" name="name" style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid #ddd; background: var(--card-bg); color: var(--text-color);">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label for="email" class="language-content en">Email</label>
                        <label for="email" class="language-content es" style="display: none;">Correo</label>
                        <input type="email" id="email" name="email" style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid #ddd; background: var(--card-bg); color: var(--text-color);">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label for="message" class="language-content en">Message</label>
                        <label for="message" class="language-content es" style="display: none;">Mensaje</label>
                        <textarea id="message" name="message" rows="5" style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid #ddd; background: var(--card-bg); color: var(--text-color);"></textarea>
                    </div>
                    <button type="submit" style="background-color: var(--primary-color); color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; transition: var(--transition);">
                        <span class="language-content en">Send Message</span>
                        <span class="language-content es" style="display: none;">Enviar Mensaje</span>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <footer>
        <div class="footer-content">
            <div>
                <p class="language-content en">© 2025 John Doe - Full Stack Developer</p>
                <p class="language-content es" style="display: none;">© 2025 John Doe - Desarrollador Full Stack</p>
            </div>
            <div class="social-links">
                <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-dev"></i></a>
            </div>
        </div>
    </footer>

    <script>
        // Matrix Background Effect
        const canvas = document.getElementById('matrixCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/\\|[]{}!@#$%^&*()_+-=';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#0f0';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
        }

        setInterval(drawMatrix, 50);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // Tab Switching
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Theme Switching
        const themeSwitch = document.getElementById('themeSwitch');
        const themeSwitchIcon = themeSwitch.querySelector('i');
        const themeSwitchText = themeSwitch.querySelector('span');
        let isDarkMode = true; // Start with dark mode
        
        // Initial theme setup
        document.body.setAttribute('data-theme', 'dark');
        
        themeSwitch.addEventListener('click', () => {
            if (isDarkMode) {
                document.body.removeAttribute('data-theme');
                themeSwitchIcon.classList.remove('fa-moon');
                themeSwitchIcon.classList.add('fa-sun');
                themeSwitchText.textContent = currentLanguage === 'en' ? 'Light Mode' : 'Modo Claro';
            } else {
                document.body.setAttribute('data-theme', 'dark');
                themeSwitchIcon.classList.remove('fa-sun');
                themeSwitchIcon.classList.add('fa-moon');
                themeSwitchText.textContent = currentLanguage === 'en' ? 'Dark Mode' : 'Modo Oscuro';
            }
            isDarkMode = !isDarkMode;
        });

        // Language Switching
        const languageSwitch = document.getElementById('languageSwitch');
        const languageSwitchText = languageSwitch.querySelector('span');
        let currentLanguage = 'en';
        
        languageSwitch.addEventListener('click', () => {
            const enElements = document.querySelectorAll('.language-content.en');
            const esElements = document.querySelectorAll('.language-content.es');
            
            if (currentLanguage === 'en') {
                enElements.forEach(el => el.style.display = 'none');
                esElements.forEach(el => el.style.display = 'block');
                languageSwitchText.textContent = 'ES';
                document.querySelector('.language-switch-text').textContent = 'Currículum de Desarrollador';
                themeSwitchText.textContent = isDarkMode ? 'Modo Oscuro' : 'Modo Claro';
                currentLanguage = 'es';
            } else {
                esElements.forEach(el => el.style.display = 'none');
                enElements.forEach(el => el.style.display = 'block');
                languageSwitchText.textContent = 'EN';
                document.querySelector('.language-switch-text').textContent = 'Developer Resume';
                themeSwitchText.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
                currentLanguage = 'en';
            }
        });

        // Clock function
        function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            
            // Add leading zeros
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            
            const timeString = `${hours}:${minutes}:${seconds}`;
            document.getElementById('clock').innerHTML = `<i class="fas fa-clock"></i> ${timeString}`;
        }

        // Update clock immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);

        // Form submission (prevent default behavior for demo)
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert(currentLanguage === 'en' ? 'Message sent successfully!' : '¡Mensaje enviado con éxito!');
            contactForm.reset();
        });

        // Add some terminal typing effect
        const terminalOutputs = document.querySelectorAll('.terminal-output');
        terminalOutputs.forEach(output => {
            const text = output.textContent;
            output.textContent = '';
            let i = 0;
            
            function typeWriter() {
                if (i < text.length) {
                    output.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 20);
                }
            }
            
            typeWriter();
        });

        // Pulse effect on skills when hovering
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.addEventListener('mouseover', () => {
                tag.style.animation = 'pulse 1s infinite';
            });
            
            tag.addEventListener('mouseout', () => {
                tag.style.animation = '';
            });
        });
    </script>
</body>
</html>
