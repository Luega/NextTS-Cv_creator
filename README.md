# CV Creator

CV Creator is a web application designed to assist users in creating, managing, and optimizing their CVs (curriculum vitae). It provides a seamless experience by integrating with Google and GitHub for authentication purposes. With CV Creator, users can access their personalized board where they can create, view, and modify their CVs. The application also allows users to save their CVs as PDF files and offers job search functionality, enabling users to save their favorite job listings on their board. Additionally, CV Helper incorporates ChatGPT, a language model, to provide assistance.

[Take a look](https://next-ts-cv-creator.vercel.app/)

## Table of Contents

- [Features](#Features)
- [Installation](#Installation)
- [Technologies](#Technologies)
- [License](#license)

## Features

- Authentication: users can log in to the application using their Google or GitHub accounts, ensuring a secure and convenient authentication process.

- CV Management: once authenticated, users can access their personal board, where they can create, view, and modify their CVs. The board provides an intuitive interface for managing multiple CVs efficiently.

- PDF Export: CV Helper allows users to save their CVs as PDF files. This feature ensures that users can easily share or print their CVs in a professional and consistent format.

- Job Search: the application includes a job search feature that allows users to find relevant jobs. Users can save their preferred jobs on their board for later reference.

- ChatGPT Integration: CV Helper incorporates ChatGPT, a powerful language model, to provide assistance. Users can interact with ChatGPT to ask for help, suggestions, or examples for specific CV sections.

## Installation

To get started with CV Creator, follow these steps:

1. Clone the repository:

```bash
  git clone https://github.com/Luega/NextTS-Cv_creator.git
```

2. Navigate to the project directory:

```bash
  cd /NextTS-Cv_creator
```

3. Install the required dependencies:

```bash
  npm install
```

4. Set the environment variables in a .env file or as system environment variables.

```bash
NEXTAUTH_SECRET: Secret key for NextAuth authentication.
GITHUB_ID and GITHUB_SECRET: Client ID and secret for GitHub authentication.
GOOGLE_ID and GOOGLE_SECRET: Client ID and secret for Google authentication.
MONGO_INITDB_URL: MongoDB connection URL.
OPENAI_API_KEY: API key for accessing the OpenAI GPT-3.5 language model.
```

5. Build and run the application:

```bash
  npm run dev
```

6. Access the application at http://localhost:3000 in your web browser.

Please ensure that you have the required environment variables set up correctly before running the application.

## Technologies

CV Creator is built using the following technologies and frameworks:

- Next.js
- React.js
- Styled-Components
- NextAuth
- MongoDB
- ChatGPT API
- RapidAPI

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
