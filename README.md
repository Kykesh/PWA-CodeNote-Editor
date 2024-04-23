# PWA-CodeNote-Editor
 Progressive Web Application Text Editor: This repository hosts a browser-based text editor designed as a Progressive Web Application (PWA). It features offline functionality, data persistence through IndexedDB, and deployability as a desktop app. Built with modern web technologies like Webpack, Babel, and Workbox, it allows users to create and manage notes or code snippets with or without an internet connection. Deployed and functional on Render, this application showcases robust client-server architecture and responsive UI for an optimal user experience.

## Table of Contents
1. [Overview](#overview)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Features](#features)
7. [Technologies Used](#technologies-used)
8. [Screenshot](#screenshot)
9. [Deployed Application](#deployed-application)
10. [License](#license)
11. [Collaborators](#collaborators)
12. [Code Attribution](#code-attribution)
13. [External Resources](#external-resources)
14. [Credits](#credits)


## User Story
```
AS A developer,
I WANT to create notes or code snippets with or without an internet connection,
SO THAT I can reliably retrieve them for later use.
```

## Acceptance Criteria
```
GIVEN a text editor web application,
WHEN I open my application in my editor,
THEN I should see a client server folder structure.
WHEN I run `npm run start` from the root directory,
THEN my application should start up the backend and serve the client.
WHEN I run my webpack plugins,
THEN I should have a generated HTML file, service worker, and a manifest file.
```

## Installation
Clone the repository, navigate to the project directory, and install dependencies:
```bash
git clone https://github.com/yourusername/PWA-CodeNote-Editor.git
cd PWA-CodeNote-Editor
npm install
```

## Usage
To run the application locally:
```bash
npm run start
```
Navigate to `localhost:3000` in your web browser to open the application.

## Features
- **Offline Functionality**: Works without an internet connection.
- **IndexedDB for Storage**: Uses IndexedDB to save and retrieve notes or code snippets.
- **Installable**: Can be installed on your desktop or mobile device as a PWA.

## Technologies Used
- HTML
- CSS
- JavaScript
- Workbox for service workers
- Webpack
- Babel
- Express.js
- IndexedDB

## Screenshot
![PWA CodeNote Editor](url_to_screenshot)

## Deployed Application
[View the deployed application here](url_to_deployed_application)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Collaborators
None.

## Code Attribution
- CodeMirror library used for the text editor component.
- IndexedDB used for client-side storage management.

## External Resources
- [CodeMirror](https://codemirror.net/)
- [Workbox](https://developers.google.com/web/tools/workbox)
- [Webpack](https://webpack.js.org/)

## Credits
© 2024 edX Boot Camps LLC. Starter code provided by edX Boot Camps.
