# Rainbow Sprouts

Rainbow Sprouts is a student-focused career exploration site. It helps kids and teenagers
discover careers, learn about paths, and chat with a career coach to get
personalized questions, skill ratings, and a learning roadmap.

Website: https://www.rainbowsprouts.net/

## What is included

- Static site pages (HTML/CSS/JS)
- Dashboard with AI-driven career quiz and roadmap
- Node.js server that connects to Gemini AI for dynamic questions and evaluation

## Prerequisites

- Node.js 18+ (includes npm)
- A Gemini API key

## Local setup (macOS and Windows)

1. Clone or download this repo to your machine.
2. Install server dependencies:
    - Open a terminal in the project root
    - Run:
        ```bash
        cd server
        npm install
        ```
3. Update the server env file:
    - Update `server/.env`
    - Add:
        ```
        GEMINI_API_KEY="your_key_here"
        ```

## Run locally

1. Start the server:

    ```bash
    cd server
    node server.js
    ```

    You should see: `Server running on http://localhost:3000`

2. Open the site:
    - Open `index.html` in your browser
    - Enter your dream career and click Search
    - You'll be redirected to the dashboard to start the quiz

## How to use the dashboard quiz

1. On `index.html`, enter your dream career (e.g., "astronaut") and click Search.
2. You'll be redirected to `dashboard.html`.
3. The coach will ask for your name.
4. Then it will ask for your age (5-19).
5. Answer each question with a number 1-5 (1 = not yet, 5 = yes always!).
6. The coach will return a summary, skill ratings specific to your career, and an age-appropriate roadmap.

## Project structure (high level)

- `index.html` and other HTML pages: static site content
- `dashboard.html`: interactive career dashboard and quiz
- `css/`: styling for each page
- `js/`: page logic
- `server/`: Node.js backend for AI chat and quiz
    - `server.js`: Express server with Gemini AI integration
    - `.env`: Environment variables (API key)

## Troubleshooting

- If the chat does not respond, confirm the server is running on port 3000.
- If you see an API error, verify `server/.env` has a valid `GEMINI_API_KEY`.
- To start a new career, go back to `index.html` and enter a new career (this will clear previous results).

## NOTE: DO not push your .env files to GitHub!
