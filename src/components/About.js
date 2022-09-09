import React from 'react';

export default function About() {
    return (
        <div className="about-wrapper">
            <div>
                <h1>{'Hi, I\'m Chetanya! 👋'}</h1>
                <blockquote>
                    <p>💻 Full-stack Software Engineer | Go + React</p>
                </blockquote>
                <p className="about-links-container">
                    <a href="https://twitter.com/availchet">
                        <img
                            src="https://img.shields.io/twitter/follow/availchet?style=social"
                            alt="Twitter: @availchet"
                        />
                    </a>
                    <a href="https://github.com/availchet">
                        <img
                            src="https://img.shields.io/github/followers/availchet?label=follow&style=social"
                            alt="GitHub: @availchet"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/chetanya-kandhari/">
                        <img
                            alt="Linkedin: @chetanya-kandhari"
                            src="https://img.shields.io/badge/-Chetanya%20Kandhari-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/chetanya-kandhari/"
                        />
                    </a>
                    <a href="mailto:availchet@gmail.com">
                        <img
                            src="https://img.shields.io/badge/Gmail-@availchet-red"
                            alt="Gmail: @availchet"
                        />
                    </a>
                    <a href="https://stackoverflow.com/users/story/6241000">
                        <img
                            src="https://img.shields.io/badge/-Stack%20Overflow-222222?logo=stack-overflow&link=https://stackoverflow.com/users/story/6241000"
                            alt="Stack Overflow: chetanya"
                        />
                    </a>
                </p>
                <p>
                    My passion lies in solving challenging problems, designing algorithms, and
                    communicating complex ideas to non-technical stakeholders.
                </p>
                <p>
                    I always look to exceed expectations and am effective both working as an
                    individual and as part of a team.
                </p>
                <p>
                    In my spare time, I like to travel 🚶, read books 📚, listen to music 🎧 and
                    watch movies 📺.
                </p>
                <p>
                    I enjoy learning new things and connecting with people across a range of
                    industries. If you ever want to bounce ideas off of me, please feel free to
                    reach out on twitter or email. 😄
                </p>
                <hr className="about-separator" />
                <h2>⚡ Technical Skills ⚡</h2>
                <table className="about-skills-table">
                    <tr>
                        <th>Area</th>
                        <th>Proficiencies</th>
                    </tr>
                    <tr>
                        <td>FrontEnd</td>
                        <td>React, Redux, Angular, RxJs, SASS, Webpack</td>
                    </tr>
                    <tr>
                        <td>BackEnd</td>
                        <td>Go, Node.js, Express</td>
                    </tr>
                    <tr>
                        <td>CI/CD</td>
                        <td>CircleCI, GitHub Actions, Azure Pipelines</td>
                    </tr>
                    <tr>
                        <td>DevOps</td>
                        <td>Docker, Ansible, Fastlane, Nginx, Makefile</td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td>React Native</td>
                    </tr>
                    <tr>
                        <td>Bots</td>
                        <td>Botkit, Rasa</td>
                    </tr>
                    <tr>
                        <td>UI Frameworks</td>
                        <td>Material-UI, Bootstrap</td>
                    </tr>
                    <tr>
                        <td>Web technologies</td>
                        <td>HTML5, CSS3, ES7+, a11y</td>
                    </tr>
                    <tr>
                        <td>Databases</td>
                        <td>MongoDB (Mongoose), MySQL, PostgreSQL, Gremlin</td>
                    </tr>
                    <tr>
                        <td>Misc</td>
                        <td>Git, Eslint, Prettier, Typescript</td>
                    </tr>
                    <tr>
                        <td>Languages</td>
                        <td>C, C++, Java</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
