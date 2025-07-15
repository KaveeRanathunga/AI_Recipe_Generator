# Recipes Generator

A full-stack recipe application with React Native frontend and Strapi backend.

## Project Structure

```
├── frontend/          # React Native (Expo) mobile app
├── backend/           # Strapi CMS backend
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Expo Go app (for testing on mobile)

## Getting Started

### Frontend (React Native)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Scan the QR code with Expo Go app to run on your mobile device

### Backend (Strapi)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run develop
   ```

4. Access the admin panel at `http://localhost:1337/admin`

## Features

- Modern React Native UI with custom fonts
- Strapi headless CMS backend
- RESTful API integration
- Mobile-first design

## Environment Variables

Make sure to set up your environment variables:

### Frontend
Create a `.env` file in the `frontend` directory:
```
EXPO_PUBLIC_STRAPI_API_KEY=your_strapi_api_key_here
```

### Backend
The backend `.env` file is already configured in the `backend` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
