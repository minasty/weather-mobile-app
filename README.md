🌦️ Weather App (React Native)
📱 Overview

This is a mobile weather application built using React Native.
The app allows users to:

🌍 Search for any city worldwide
🌡 View real-time weather information
🌫 Check air quality (AQI, CO, NO₂)
☀️ View UV index (solar radiation)
🗺 Visualize the location on a map
🚀 Features
🔍 City-based weather search
🌡 Temperature, pressure, humidity
🌧 Rainfall data (if available)
🌫 Air pollution details
☀️ UV Index display
🗺 Map view using coordinates
🎨 Modern UI with background image
ℹ️ About screen with app information

🛠️ Technologies Used
React Native
Expo (optional)
React Navigation
React Native Maps
Fetch API

📂 Project Structure:
/project-root
 ├── App.js
 ├── /screens
 │     ├── HomeScreen.js
 │     ├── MapScreen.js
 │     └── AboutScreen.js
 ├── /components
 │     ├── WeatherCard.js
 │     ├── AirQualityCard.js
 │     └── RadiationCard.js
 ├── /services
 │     └── weatherService.js
 ├── /styles
 │     └── globalStyles.js
 └── /assets
       └── nature.jpg

🔑 API Used:
Weather, Air Quality, and UV data are fetched from:
OpenWeatherMap API

⚙️ Installation & Setup
1️⃣ Clone the repository:
git clone https://github.com/minasty/WeatherMobileApp.git
cd WeatherMobileApp

2️⃣ Install dependencies:
npm install

3️⃣ Install required packages:
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-maps

4️⃣ Add your API key
Open:
/services/weatherService.js
Replace:
const API_KEY = "YOUR_API_KEY";
With your real API key.

5️⃣ Run the app:
npx expo start

📸 App screenshots:
!(image.png)

🔐 Privacy & Copyright:
© 2026 Anastase Minani. All rights reserved.
This app uses third-party APIs to provide weather data. No personal user data is stored.

👨‍💻 Author:
    Anastase MINANI
    Software Developer
    Electronics & Telecommunication Engineer

💡 Future Improvements:
    🌍 Auto-detect user location (GPS)
    🌈 Dynamic background based on weather
    📊 Weather charts and forecasts
    🔔 Weather alerts and notifications

🤝 Contributing:
    Contributions are welcome!
    Feel free to fork the project and submit a pull request.

⭐ Support:
    If you like this project, please ⭐ the repository.