# Puredesk - A Minimalist Productivity Dashboard

## Project Overview
Puredesk is a minimalist, productivity dashboard that serves as a unified workspace for essential productivity tools. Starting with a comprehensive to-do list feature, Puredesk is designed to grow into a complete productivity ecosystem while maintaining a clean, distraction-free interface.

### Core Concept
Puredesk transforms the scattered digital workspace experience by centralizing productivity tools in one beautifully designed dashboard. Users navigate between different tools via an elegant sidebar, with each tool rendered in the main content area using a consistent, card-based design language.

### Key Differentiators
- **Monorepo Architecture:** Structured for seamless expansion to mobile apps (iOS/Android) while sharing core business logic.
- **Design-Driven Experience:** Every interaction follows a carefully crafted design system inspired by modern dashboard aesthetics.
- **Progressive Enhancement:** Starts simple (to-do list) but architected to handle complex productivity workflows.

### Target User Experience
Users open Puredesk to find:
- **Clean Landing Experience:** Minimal interface with clear visual hierarchy.
- **Intuitive Navigation:** Left sidebar with tool icons and names, easy switching between contexts.
- **Focused Work Area:** Right-side main content area dedicated to the active tool.
- **Consistent Interactions:** All tools follow the same design patterns and user flows.
- **Smart Features:** Priority-based task management, smart filtering, and contextual actions.

## Technical Philosophy
- **Simplicity First:** Clean codebase with clear separation of concerns.
- **Future-Ready:** Every architectural decision considers mobile app expansion.
- **Developer Experience:** CLI AI integration for rapid feature development.
- **Performance Focused:** Fast loading, smooth animations, responsive interactions.
- **Type Safety:** Full TypeScript implementation across all layers.

## Design Inspiration
The interface draws inspiration from modern dashboard designs (similar to food delivery admin panels) but optimized for personal productivity. Features include:
- Clean typography using Plus Jakarta Sans.
- Carefully chosen color palette emphasizing readability.
- Card-based layouts with subtle shadows and hover effects.
- Smooth micro-animations that enhance rather than distract.
- Mobile-first responsive design principles.

## Growth Roadmap
**Phase 1:** To-do list with advanced features (priorities, categories, due dates, tags).

**Future roadmap may include:**
- Notes management with rich text editing and organization.
- Calendar integration.
- Additional tools (time tracking, habit tracking, document management).
- Mobile apps and offline sync.
- Team collaboration.

## Requirements

### 1. Technical Prerequisites
- **Node.js** (v18 or higher)
- **Git**
- **GitHub CLI** (`gh`) or GitHub Personal Access Token
- **TypeScript:** Type safety across the entire application.
- **Tailwind CSS:** Utility-first CSS framework for consistent design implementation.
- **PostgreSQL:** Robust relational database for complex queries and data relationships.
- **Monorepo (TurboRepo):** Efficient code sharing and build optimization across web and future mobile apps.

### 2. API Keys Required
- **GitHub Personal Access Token** (for repository operations)

## Environment Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd puredesk
    ```

2.  **Install TurboRepo globally:**
    ```bash
    npm install -g turbo
    ```

3.  **Create a `.env` file** in the root directory (e.g., `/Users/napendra/git/puredesk/.env`) if you plan to use actual API keys or database connections. For local development with mock data, this is not strictly necessary for the web app.

## Project Structure

This project is a monorepo managed by [TurboRepo](https://turbo.build/repo).

```
. (root)
├── apps/
│   └── web/                 # Next.js web application
├── packages/
│   └── database/            # Database schema and utilities
│       └── schema/          # SQL schema files
├── turbo.json               # TurboRepo configuration
├── package.json             # Root package.json for monorepo management
└── README.md                # This file
```

## Installation

1.  **Install root dependencies:**
    ```bash
    npm install
    ```

2.  **Install web app dependencies:**
    ```bash
    cd apps/web
    npm install
    cd ../..
    ```

## Database Setup (PostgreSQL)

This project is designed to work with a PostgreSQL database. For local development, you can use a mock database (as currently implemented).

To set up a real PostgreSQL database:

1.  **Install PostgreSQL:** Follow instructions for your operating system.
2.  **Create a database:**
    ```sql
    CREATE DATABASE puredesk_db;
    ```
3.  **Run schema migrations:** Execute the SQL files located in `packages/database/schema/` against your database.
    - `users.sql`
    - `todos.sql`
    - `tools.sql`

4.  **Set `DATABASE_URL`:** Add your PostgreSQL connection string to your `.env` file in the root directory:
    ```
    DATABASE_URL="postgresql://user:password@host:port/database"
    ```

## Usage

To start the development server for the web application:

```bash
npm run dev
```

The application will typically run on `http://localhost:3000`.

### To-Do List Features
- Add new tasks.
- Mark tasks as complete/incomplete using the checkbox.
- Filter tasks by All, Active, and Completed.

## Core Components & API Routes

### Components
- `DashboardLayout`: Main layout for the dashboard.
- `Sidebar`: Navigation sidebar for tools.
- `TodoList`: Component for managing to-do items.

### API Routes
- `/api/todos`: Handles `GET` (fetch all todos) and `POST` (create new todo) requests.
- `/api/todos/[id]`: Handles `PATCH` (update todo) and `DELETE` (delete todo) requests.

## Error Handling Conventions

### Backend/API
- **Error Objects:** Always send structured error objects with error (string or object) and status code.
- **Input Validation:** Use Zod (or a similar library) to validate incoming payloads. Return 400 (Bad Request) for validation errors.
- **Database Errors:** Catch and log DB/query errors with enough context, but avoid leaking sensitive details in client-facing messages.
- **Logging:** Use a centralized logger (e.g., `utils/logger.js`) for error, info, and warn logging, including stack traces and timestamps.

### Frontend/UI
- **User Feedback:** Show user-friendly error messages via toasts, banners, or alerts for fetch failures or API errors.
- **Silent Failures:** Never fail silently; always surface unhandled errors in development and provide actionable messages in production.
- **Boundary Components:** Use React error boundaries around key components to gracefully handle UI crashes and display fallback UI.

## Contributing
Contributions are welcome! Please ensure your code adheres to the project's technical philosophy and design principles.

## License
This project is licensed under the MIT License.
