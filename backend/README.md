# InfoHub Backend

This is the backend server for the InfoHub application, providing necessary API endpoints and services.

## Technology Stack

- Node.js
- Express.js
- Environment variables for configuration

## Getting Started

1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file with required configuration:
   ```
   PORT=5000
   ```
5. Start the server:
   ```bash
   npm start
   ```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

The backend provides the following API endpoints:

- GET `/api/weather`: Fetch weather data
- GET `/api/quotes`: Fetch inspirational quotes
- POST `/api/convert`: Handle unit conversions

## Project Structure

- `index.js`: Main server file and entry point
- `package.json`: Project dependencies and scripts

