# 🚀 QuoteSpark

A sleek and responsive **Random Quote Generator** web app built using **React**, **TypeScript**, and **Vite**, and fully containerized using **Docker**.

Whether you're looking for daily motivation or just some good words, QuoteSpark brings inspiration to your screen — one quote at a time.

## 📸 Preview
![image](https://github.com/user-attachments/assets/0d336384-8159-4a69-904a-0ef466a87c28)

Coming soon...

## ✨ Features

* 🎲 Random quote generation
* 🎨 Clean UI with fast interactions
* ⚡ Superfast build with Vite + React
* 🧱 Type-safe development using TypeScript
* 🐳 Docker support for containerized deployment

## 🛠️ Tech Stack

* **Frontend**: React (TypeScript), Vite
* **Containerization**: Docker
* **Styling**: CSS Modules / Tailwind *(based on your setup)*
* **Linting**: ESLint

## 🧊 What is Docker?

**Docker** is a platform that allows developers to package applications and their dependencies into a single **container**. This ensures your app runs the same in every environment — whether it's your local machine, a teammate's laptop, or a cloud server.

### ✅ Benefits of using Docker:

* No "it works on my machine" problems
* Simplified app setup & portability
* Consistent and isolated development environments
* Great for deployment and DevOps workflows

## 🚀 Getting Started

### 🧑‍💻 Run Locally (Without Docker)

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🐳 Running with Docker

You can easily run this application in a Docker container with the following steps:

### 📦 Build the Docker Image

```bash
docker build -t quotespark .
```

This command reads the `Dockerfile` and creates a Docker image named `quotespark`.

### ▶️ Run the Container

```bash
docker run -p 5173:5173 quotespark
```

This maps port `5173` from the container to your local machine so you can open:
http://localhost:5173

## 🌟 Future Improvements

* Add quote API integration (e.g., type.fit)
* Dark/light theme toggle
* Social sharing buttons
* Deploy via GitHub Actions / Vercel / DockerHub

## 🙌 Acknowledgements

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Docker](https://www.docker.com/)
* [Type.fit Quote API](https://type.fit/api/quotes)
