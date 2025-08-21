# How to Run This Project

## Requirements

### 1. Technical Prerequisites
- **Node.js** (v18 or higher)
- **Git**
- **GitHub CLI** (`gh`) or GitHub Personal Access Token
- **AI API Access** (OpenAI, Anthropic, etc.)

### 2. API Keys Required
- **AI Service API Key** (OpenAI GPT-4, Anthropic Claude, etc.)
- **GitHub Personal Access Token** (for repository operations)

## Environment Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd cli-ai-project-creator
    ```

2.  **Create a `.env` file** by copying the `.env.example` file:
    ```bash
    cp .env.example .env
    ```

3.  **Add your API keys** to the `.env` file:
    ```
    OPENAI_API_KEY=your_openai_api_key
    GITHUB_TOKEN=your_github_token
    ```

## Installation

Install the project dependencies using npm:
```bash
npm install
```

## Usage

To use the CLI tool, run the following command:

```bash
node bin/cli.js create
```

This will start an interactive prompt to gather information about the project you want to create.

You can also use options to provide information directly:

```bash
node bin/cli.js create --name my-app --type react --description "My awesome React app"
```

## Development

For development, you can use `npm link` to create a symbolic link to the package and run it globally.

1.  **Link the package:**
    ```bash
    npm link
    ```

2.  **Run the CLI:**
    ```bash
    ai-create create
    ```

Any changes you make to the code will be reflected immediately.

## Testing

To run the tests, use the following command:

```bash
npm test
```

## Running the Generated Project

After you have created a new project using the `ai-create` tool, you can run it on your local machine.

The following instructions are for a **React** project. The steps may vary for other project types.

1.  **Navigate to the project directory:**
    ```bash
    cd <project_name>
    ```

2.  **Install the project dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    ```

This will start the development server and open the project in your default web browser. You can now view the project and make changes to the code.
