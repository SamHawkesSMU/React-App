# React Weather App

## Project Overview

This project is a React web application developed using Vite. It contains two views, **About Me** and **My Town**, allowing users to navigate between personal information and real-time weather information for Halifax, Nova Scotia.

The application retrieves current weather data from the Open-Meteo API and dynamically displays weather images based on temperature.

## Features

### 1. About Me
- Displays information about the developer, including education and interests.
- Accessible through the navigation bar.

### 2. My Town
- Displays information about Halifax, Nova Scotia.
- Retrieves the current temperature using the Open-Meteo Weather API.
- Dynamically selects a weather image based on temperature:
  - **10°C or below:** Cold (`cold.png`)
  - **Above 10°C and below 20°C:** Mild (`mild.png`)
  - **20°C or above:** Sunny (`sunny.png`)
- Allows users to toggle between Celsius (°C) and Fahrenheit (°F).

### 3. Navigation
- Uses React's `useState` hook to switch between the two views without reloading the page.

## Technologies Used

- **React:** Builds the user interface using reusable components.
- **JavaScript:** Handles application logic and interactivity.
- **HTML/JSX:** Defines the structure of the application.
- **CSS:** Styles the interface.
- **Vite:** Provides the development environment and build tools.
- **ESLint:** Checks code quality and consistency.
- **Open-Meteo API:** Provides current weather data.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/SamHawkesSMU/React-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd React-App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal, typically `http://localhost:5173/`.

## Application Structure

```text
weather-app/
├── public/
│   ├── cold.png
│   ├── mild.png
│   └── sunny.png
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── README.md
├── package.json
└── vite.config.js
```

## How It Works

The application uses React hooks to manage state and retrieve data.

- **useState:** Manages the selected view, current temperature, loading status, error messages, and temperature unit.
- **useEffect:** Fetches current weather data when the My Town component mounts.
- **fetch():** Sends an HTTP request to the Open-Meteo API.
- **Conditional rendering:** Determines which weather image to display based on the temperature in Celsius.
- **Temperature conversion:** Converts Celsius to Fahrenheit using:

  °F = (°C × 9/5) + 32

## API Reference

Weather data is provided by Open-Meteo.

https://open-meteo.com/

The application requests the current temperature using Halifax's approximate geographic coordinates.

## AI Tool Disclosure

ChatGPT (OpenAI) was used to debug React code and git commands. 

## Deployment

The application will be deployed online using Vercel.

**Live Website:** To be added after deployment.

## Author

Sam Hawkes

MSc Computing & Data Analytics

Saint Mary's University
