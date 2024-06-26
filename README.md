<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<div align="center">

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>

[contributors-shield]: https://img.shields.io/github/contributors/omrfrkcpr/novelit.svg?style=flat-square&color=blue
[contributors-url]: https://github.com/omrfrkcpr/novelit/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/omrfrkcpr/novelit.svg?style=flat-square&color=blueviolet
[forks-url]: https://github.com/omrfrkcpr/novelit/network/members
[stars-shield]: https://img.shields.io/github/stars/omrfrkcpr/novelit.svg?style=flat-square&color=brightgreen
[stars-url]: https://github.com/omrfrkcpr/novelit/stargazers
[issues-shield]: https://img.shields.io/github/issues/omrfrkcpr/novelit.svg?style=flat-square&color=red
[issues-url]: https://github.com/omrfrkcpr/novelit/issues
[license-shield]: https://img.shields.io/github/license/omrfrkcpr/novelit.svg?style=flat-square&color=yellow
[license-url]: https://github.com/omrfrkcpr/novelit/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&color=blue
[linkedin-url]: https://linkedin.com/in/omrfrkcpr

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/omrfrkcpr/novelit">
    <img src="./src/assets/logo.svg" alt="Logo" width="120" height="80">
  </a>

<h3 align="center">Novelit</h3>

  <p align="center">
    Novelit is a user-friendly full-stack application designed to provide users with a robust platform for managing detailed information about books. This project is an excellent tool for book enthusiasts, librarians, and anyone who needs to maintain a personalized database of books. With its modern tech stack, efficient search capabilities, and intuitive UI, Novelit stands out as an essential tool for book lovers and professionals alike.
    <br />
    <a href="https://github.com/omrfrkcpr/novelit"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://novelit.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/omrfrkcpr/novelit/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/omrfrkcpr/novelit/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#structure">Structure</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#technical">Technical</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![novelit](https://github.com/omrfrkcpr/novelit/assets/77440899/b2d120be-5b71-481d-b9a0-c5aae3403de7)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<p align="center">
  <a href="https://react.dev/">
    <img src="https://skillicons.dev/icons?i=react" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://skillicons.dev/icons?i=ts" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://skillicons.dev/icons?i=tailwind" />
  </a>
  <a href="https://nodejs.org/en">
    <img src="https://skillicons.dev/icons?i=nodejs" />
  </a>
  <a href="https://www.postman.com/">
    <img src="https://skillicons.dev/icons?i=postman" />
  </a>
  <a href="https://vercel.com/">
    <img src="https://skillicons.dev/icons?i=vercel" />
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://skillicons.dev/icons?i=vite" />
  </a>
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- STRUCTURE -->

## Structure

```
novelit
  ├── public
  ├── src/
  |     ├── assets // (image,gif,svg...)
  |     ├── components
  |     |        ├── BookCard.tsx
  |     |        ├── BookForm.tsx
  |     |        ├── BookList.tsx
  |     |        ├── BookSettings.tsx
  |     |        ├── Loading.tsx
  |     |        ├── Navbar.tsx
  |     |        ├── SearchBar.tsx
  |     |        └── SingleBookCard.tsx
  |     ├── context
  |     |     └── BookContext.tsx
  |     ├── helpers
  |     |     └── functions.tsx
  |     ├── hooks
  |     |     └── useWindowSize.tsx
  |     ├── pages
  |     |     ├── Home.tsx
  |     |     ├── NotFound.tsx
  |     |     └── SingleBook.tsx
  |     ├── router
  |     |     └── routes.tsx
  |     ├── App.tsx
  |     ├── index.css
  |     ├── main.tsx
  |     └── vite-env.d.ts
  ├── .gitignore
  ├── index.html
  ├── LICENSE
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  ├── README.md    // Project documentation
  ├── tailwind.config.js
  ├── tsconfig.json
  ├── tsconfig.node.json
  ├── vercel.json
  └── vite.config.ts
```

See the [open issues](https://github.com/omrfrkcpr/novelit/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->

## Features

Book Management:

- Users can add detailed information about their favorite books, including title, author, genre, publication date, summary, and more.
- The application allows users to search for specific books using various filters and criteria.
- Users can edit and update the information of any book in their collection.
- Books can be deleted from the database if they are no longer needed.

Search and Filter:

- A powerful search functionality enables users to find books quickly and efficiently.
- Filters can be applied to narrow down search results based on specific attributes like genre, author, or publication year.

User Interface:

- The frontend is built with React and TypeScript, providing a modern and responsive user experience.
- TailwindCSS is used for styling, ensuring a clean and consistent design throughout the application.
- State management is handled using ContextAPI, allowing for efficient data handling and component communication.

Backend:

- The backend server is created using Node.js with Express.js, providing a robust and scalable architecture for handling requests and managing the database.
- RESTful APIs are implemented to facilitate seamless communication between the frontend and backend.

Tools and Technologies:

- Postman is used for API testing, ensuring that all endpoints are functioning correctly and efficiently.
  The application is hosted on Render, a reliable hosting service that ensures high availability and performance.
  Deployment:

The project is deployed on Render, allowing for easy access and scalability. Render's platform provides automatic builds and deployments, making the development process smoother.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TECHNICAL -->

## Technical

Frontend:

- React: A JavaScript library for building user interfaces.
- TypeScript: A statically typed superset of JavaScript.
- TailwindCSS: A utility-first CSS framework for rapid UI development.
- ContextAPI: For managing state across the application.

Backend:

- Node.js: A JavaScript runtime built on Chrome's V8 engine.
- Express.js: A minimal and flexible Node.js web application framework.

Tools:

- Postman: An API client for testing and developing APIs.
- Render: A cloud platform for hosting web applications.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE.txt](https://github.com/omrfrkcpr/novelit/blob/main/LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[Send a Email](omerrfarukcapur@gmail.com)<br />
[Repo Link](https://github.com/omrfrkcpr/novelit)<br />
[Demo Link](novelit.vercel.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [server](https://novelit-server.onrender.com/books)
- [server-repo](https://github.com/omrfrkcpr/novelit_server)
- [postman-doc]()

<p align="right">(<a href="#readme-top">back to top</a>)</p>
