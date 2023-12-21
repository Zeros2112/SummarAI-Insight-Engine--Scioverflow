# Summize - OpenAI GPT-4 Article Summarizer

## Overview

Summize is an open-source article summarizer powered by OpenAI GPT-4. It allows users to input article links and receive concise summaries for easy reading.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Article Summarization:** Utilizes OpenAI GPT-4 to generate summaries for provided article links.
- **Language Support:** Supports multiple languages for summarization.
- **History:** Keeps track of previously summarized articles.
- **User Feedback:** Provides visual feedback on copying and loading states.
- **Responsive Design:** User-friendly interface with responsiveness for various screen sizes.

## Technologies

- **React:** Front-end library for building user interfaces.
- **Redux Toolkit:** State management library for React applications.
- **Redux Toolkit Query:** For managing remote data fetching and state.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **OpenAI GPT-4:** Powerful natural language processing model.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager)
- RapidAPI Key (for the OpenAI GPT-4 API)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Zeros2112/summize.git
   ```

2. Navigate to the project directory:

```
cd summize
```

3. Install dependencies:

```
npm install
```

4. Create a `.env` file in the project root and add your RapidAPI key:

```
VITE_RAPID_API_ARTICLE_KEY=your-rapid-api-key
```

5. Start the development server:

```
npm start
```

6. Open your browser and visit http://localhost:3000.

## Usage

1. Enter the article link in the input field.

2. Select the language for summarization.

3. Click the "Summarize" button.

4. View the summary and copy the link if needed.

5. Explore the history section for previously summarized articles.

## Folder Structure

```
summize/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- Demo.js
|   |   |-- Hero.js
|   |-- services/
|   |   |-- article.js
|   |-- App.js
|   |-- index.js
|-- .env.example
|-- .gitignore
|-- package.json
|-- README.md
|-- ...
```

## Contributing

Contributions are welcome!

## License

This project is licensed under the MIT License.

## Acknowledgements

- Special thanks to OpenAI for providing the GPT-4 model.
- Inspiration from projects in the open-source community.
