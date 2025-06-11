# 🎬 Movie Explorer

A full-stack web application for discovering movies with search, trending tracking, and infinite scrolling features — built with **Next.js** (Frontend) and **Go Fiber + SQLite** (Backend).

## ✨ Features

- 🔍 **Search Movies** — Fetch movies from TMDB and track search terms.
- 📈 **Trending List** — Displays most searched movies based on tracked user activity.
- ♾️ **Infinite Scroll** — Seamless loading of more movies as you scroll.
- ⚡️ **Fast & Modern UI** — Styled with Tailwind CSS, fully responsive.
- 🧠 **Debounced Search** — Optimized to reduce API calls while typing.

---

## 🛠 Tech Stack

### Frontend
- **Next.js 14**
- **Tailwind CSS**
- **TypeScript**
- **React Infinite Scroll**

### Backend
- **Go Fiber**
- **SQLite**
- **REST API**
- **CORS Enabled**

---

## 🚀 Getting Started

You can run this project either with **Docker** or by setting it up **manually**.

---

## 🐳 Run with Docker

### Prerequisites
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/inkinkink111/movie-explorer.git
   cd movie-explorer
   ```

2. **Update TMDB API key**:  
   Open `docker-compose.yml` and replace:
   ```yaml
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
   ```
   with your actual API key from [TMDB](https://www.themoviedb.org/).

3. **Build and start the app**:
   ```bash
   docker compose up --build
   ```

4. **Access the app**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8080](http://localhost:8080)

5. **Stop the app**:
   ```bash
   docker compose down
   ```

---

## 🧑‍💻 Manual Installation (Without Docker)

### Prerequisites

- [Go](https://go.dev/) (v1.22+)
- [Node.js](https://nodejs.org/) (v18+)
- [SQLite](https://www.sqlite.org/download.html)

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install Go dependencies:
   ```bash
   go mod tidy
   ```

3. Run the server:
   ```bash
   go run main.go
   ```

   The API will be available at [http://localhost:8080](http://localhost:8080)

### Frontend Setup

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Create a `.env` file in the `frontend` folder with the following content:
   ```env
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
   NEXT_PUBLIC_TMDB_API_URL=https://api.themoviedb.org/3
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
   ```

3. Install Node dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000)

---

## 🗃 Database

- The backend uses a file-based SQLite database (`movies.db`).
- When using Docker, the database file is mounted as a volume.
- When running locally, the `movies.db` file will be created and used inside the `backend/` folder.
