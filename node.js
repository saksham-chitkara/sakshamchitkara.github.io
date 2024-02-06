var isDarkMode = true;

function changeContent(page) {
    var contentDiv = document.getElementById('content');
    contentDiv.classList.remove('edu-animation', 'ach-animation', 'skills-animation', 'about-animation', 'blog-animation');

    switch (page) {
        case 'about':
            contentDiv.classList.add('about-animation');
            contentDiv.innerHTML = `<h1>About Me</h1>
                <p>
                    Hi, I'm Saksham Chitkara, a freshman at IIIT Hyderabad pursuing a Bachelor's Degree in Computer Science.
                </p>
                <p>
                    Originally from Haryana, I'm 18 years old and passionate about exploring the vast world of technology. In addition to my academic pursuits, I find joy in playing cricket.
                </p>
                <p>
                    I'm an avid gamer who enjoys the adrenaline rush of battle royale games. When I'm not gaming, you can often find me immersed in the world of esports, witnessing the excitement and skill of competitive gaming.
                </p>
                <a href="IIOT LAB 04.pdf" download>Link to external pdf</a>`;
            break;
        case 'education':
            contentDiv.classList.add('edu-animation');
            contentDiv.innerHTML = `<h1 style="margin-bottom: 5%;">Education Background</h1>
                <table>
                    <tr>
                        <th class="short">SNo.</th>
                        <th class="long">Institution</th>
                        <th class="long">Purpose</th>
                        <th class="middle">Year</th>
                    </tr>
                    <tr>
                        <td>1</td><td>St. Thomas School</td><td>Primary Education</td><td>2010-20</td>
                    </tr>
                    <tr>
                        <td>2</td><td>KDPS</td><td>Secondary Education</td><td>2021-23</td>
                    </tr>
                    <tr>
                        <td>3</td><td>FIITJEE</td><td>JEE Coaching</td><td>2021-23</td>
                    </tr>
                    <tr>
                        <td>4</td><td>IIIT Hyderabad</td><td>BTech</td><td>2023-now</td>
                    </tr>
                </table>`;
            break;
        case 'achievements':
            contentDiv.classList.add('ach-animation');
            contentDiv.innerHTML = `<h1 style="margin-bottom: 5%;">Achievements</h1>
                <table>
                    <tr>
                        <th class="short">SNo.</th>
                        <th class="long">Name Of Examination</th>
                        <th class="short">Year</th>
                        <th class="long">Remarks</th>
                    </tr>
                    <tr>
                        <td>1</td><td>CBSE Class 10th</td><td>2020</td><td>Scored 98.2%</td>
                    </tr>
                    <tr>
                        <td>2</td><td>CBSE Class 12th</td><td>2022</td><td>Scored 97.6%</td>
                    </tr>
                    <tr>
                        <td>3</td><td>JEE Mains</td><td>2023</td><td>Secured AIR 941</td>
                    </tr>
                    <tr>
                        <td>4</td><td>JEE Advanced</td><td>2023</td><td>Secured AIR 2985</td>
                    </tr>
                    <tr>
                        <td>5</td><td>IOQM</td><td>2021</td><td>Cleared</td>
                    </tr>
                </table>`;
            break;
        case 'skill':
            contentDiv.classList.add('skills-animation');
            contentDiv.innerHTML = `<h1>Skills</h1>
            <div>
                <div class="row">
                    <div class="col">
                        <img src="c.png" alt="wait" class="skill-img"  style="background-color: transparent;"><br>
                        C
                    </div>
                    <div class="col">
                        <img src="c++.png" alt="wait" class="skill-img"><br>
                        C++
                    </div>
                    <div class="col">
                        <img src="py.jpg" alt="wait" class="skill-img"><br>
                        Python
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <img src="html.png" alt="wait" class="skill-img"><br>
                        HTML
                    </div>
                    <div class="col">
                        <img src="css.png" alt="wait" class="skill-img"><br>
                        CSS
                    </div>
                    <div class="col">
                        <img src="js.png" alt="wait" class="skill-img"><br>
                        JavaScript
                    </div>
                </div>
            </div>`;
            break;
            case 'blog':
                contentDiv.classList.add('blog-animation');
                contentDiv.innerHTML = `<h1>Blogs</h1>
                <div class="blog-boundary">
                    <div id="blog1" class="blog">
                        <div class="img-blog">
                            <a href="blog1.html" target="_blank">
                                <img src="ai.jpg" alt="blog1 image" id="img1">
                            </a>
                        </div>

                        <div class="blog-heading">
                            AI's Shadows: Navigating Disadvantages
                        </div>
                    </div>

                    <div id="blog2" class="blog">
                        <div class="img-blog">
                            <a href="blog2.html" target="_blank">
                                <img src="gw.jpg" alt="blog2 image" id="img2">
                            </a>
                        </div>

                        <div class="blog-heading">
                            Warming Planets, Cooling Resolve: Navigating Global Warming
                        </div>
                    </div>
                </div>`;
                
                break;
        default:
            break;
    }
}

function toggleMode() {
    var contentDiv = document.getElementById('content');
    var buttons = document.getElementsByTagName('button');
    var navb = document.getElementById('navbar');
    
    var body = document.body;
    var bg = document.getElementById('image');
    var text = document.getElementById('text');

    var button = document.getElementById('toggle');

    if (isDarkMode) {
        var active = document.querySelectorAll('.active');

        contentDiv.classList.remove('dark-mode');
        contentDiv.classList.add('light-mode');

        navb.classList.remove('nav-dark');
        navb.classList.add('nav-light');

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('button-dark');
            buttons[i].classList.add('button-light');
        }

        bg.classList.remove('image-dark');
        bg.classList.add('image-light');

        text.classList.remove('text-dark');  
        text.classList.add('text-light');

        body.classList.remove('body-dark');
        body.classList.add('body-light');

        isDarkMode = !isDarkMode

        active[0].classList.remove('active');
        active[0].classList.add('active-light');

        button.setAttribute('src', 'night-mode.png');

    }
    
    else {
        
        contentDiv.classList.remove('light-mode');
        contentDiv.classList.add('dark-mode');

        navb.classList.remove('nav-light');
        navb.classList.add('nav-dark');

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('button-light');
            buttons[i].classList.add('button-dark');
        }

        text.classList.remove('text-light');
        text.classList.add('text-dark');
       
        bg.classList.remove('image-light');
        bg.classList.add('image-dark');

        body.classList.remove('body-light');
        body.classList.add('body-dark');

        isDarkMode = !isDarkMode

        var activelight = document.querySelectorAll('.active-light');

        activelight[0].classList.remove('active-light');
        activelight[0].classList.add('active');

        button.setAttribute('src', 'day-mode.png');

    }
}

function activeClass(button){
    if (isDarkMode){
        var current = document.getElementsByClassName('active');
        current[0].classList.remove('active');

        button.classList.add('active');
    }

    else{
        var current = document.getElementsByClassName('active-light');
        current[0].classList.remove('active-light');

        button.classList.add('active-light');
    }
}
