# Uniba Onboarding Assignment

This is a website to show the connections between APIs and react. This website allows users to enter names of games and rate them from 1-10. It connects to a firebase API that stores all the data of the users and their associated games and ratings.

## Set-up

```bash
# clone the repository
git clone <repository-url>

# install dependencies
npm install

# start the development server
npm run dev
```

## Env

Once you create your firebase API, replace all the information in the .env file with your own

```bash
VITE_FIREBASE_API_KEY="apikey"
VITE_FIREBASE_AUTH_DOMAIN="authdomain"
VITE_FIREBASE_PROJECT_ID="projectId"
VITE_FIREBASE_STORAGE_BUCKET="storagebucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="messagingsenderId"
VITE_FIREBASE_APP_ID="appId"
VITE_FIREBASE_MEASUREMENT_ID="measurementId"
VITE_USE_MOCK_DB=false
```

Set the MOCK_DB to false whenever you want to use the firebase DB.

## Techstack

```bash
- React 18
- Vite
- TypeScript
- Firebase
- Styled-components
```
