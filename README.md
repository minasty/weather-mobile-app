# 🌦️ Weather App — React Native

## 📱 Overview

**Weather App** is a mobile weather application built with **React Native and Expo**. It allows users to search for weather information for cities around the world and view detailed environmental and geographical information.

The application provides:

* 🌍 Search for any city worldwide
* 🌡️ View real-time weather information
* 🌫️ Check air quality information
* ☀️ View UV index / solar radiation information
* 🗺️ Visualize the searched location on a map
* 🎨 Modern and responsive mobile interface
* ℹ️ About screen with application information

The application can be developed and tested using **Expo Go** and can also be built as a **standalone Android APK/AAB**, allowing it to run independently without Expo Go.

---

## 🚀 Features

### 🔍 City-Based Weather Search

Search for a city and retrieve its current weather information.

### 🌡️ Weather Information

The application displays information such as:

* Temperature
* Atmospheric pressure
* Humidity
* Weather conditions
* Rainfall data, when available
* Geographic coordinates

### 🌫️ Air Quality

Provides air pollution information, including:

* Air Quality Index (AQI)
* Carbon monoxide (CO)
* Nitrogen dioxide (NO₂)

### ☀️ UV Index

Displays UV index / solar radiation information when available.

### 🗺️ Map Visualization

The searched location can be displayed on a map using its geographic coordinates.

### 🎨 Modern User Interface

The application provides a modern mobile interface with weather-related visual elements and background imagery.

### ℹ️ About Screen

Provides information about the application and its developer.

---

## 🛠️ Technologies Used

* **React Native**
* **Expo**
* **React Navigation**
* **React Native Maps**
* **JavaScript**
* **Fetch API**
* **OpenWeatherMap API**
* **EAS Build**

---

## 📂 Project Structure

```text
weather-mobile-app/
│
├── App.js
├── index.js
├── app.json
├── eas.json
├── babel.config.js
├── package.json
│
├── assets/
│   ├── icon.png
│   ├── adaptive-icon.png
│   └── nature.jpg
│
├── screens/
│   ├── HomeScreen.js
│   ├── MapScreen.js
│   └── AboutScreen.js
│
├── components/
│   ├── WeatherCard.js
│   ├── AirQualityCard.js
│   └── RadiationCard.js
│
├── services/
│   └── WeatherService.js
│
└── styles/
    └── globalStyles.js
```

---

## 🔑 API

Weather, air quality, and UV-related information are obtained using the:

**OpenWeatherMap API**

Before running the application, configure your OpenWeatherMap API key according to the environment/API-key configuration used by the project.

> ⚠️ Do not commit private API keys or `.env` files containing secrets to GitHub.

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/minasty/weather-mobile-app.git
```

Navigate to the project directory:

```bash
cd weather-mobile-app
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure the API Key

Configure your OpenWeatherMap API key using the project's environment-variable configuration.

For example:

```env
WEATHER_API_KEY=YOUR_API_KEY
```

Make sure that `.env` is included in `.gitignore` if it contains a private API key.

---

# ▶️ Running the Application

## Using Expo Go

Start the development server:

```bash
npx expo start
```

Then scan the QR code using **Expo Go** on your Android device.

---

# 📦 Building a Standalone Android APK

The application can be built as a standalone Android APK using **EAS Build**.

Install EAS CLI globally:

```bash
npm install -g eas-cli
```

Or use it without a global installation:

```bash
npx eas-cli
```

Log in to your Expo account:

```bash
npx eas login
```

Build the Android APK:

```bash
npx eas build -p android --profile preview
```

The generated APK can be downloaded and installed directly on an Android device.

### 📱 Standalone APK

The standalone APK:

* Does not require Expo Go
* Can be installed directly on an Android phone
* Runs as an independent Android application

---

# 📦 Building an Android App Bundle (AAB)

For Google Play Store distribution, build an Android App Bundle:

```bash
npx eas build -p android --profile production
```

The resulting `.aab` file can be uploaded to the **Google Play Console**.

### APK vs AAB

| Format | Purpose                        | Direct Installation |
| ------ | ------------------------------ | ------------------- |
| `.apk` | Testing / direct distribution  | ✅ Yes               |
| `.aab` | Google Play Store distribution | ❌ No                |

Google Play uses the AAB to generate optimized APKs for individual devices.

---

# 📸 App Screenshots

Screenshots of the application are available in:

```text
assets/screenshoots/
```

Example:

```markdown
![Weather App](assets/nature.jpg)
```

---

# 🔐 Privacy & Copyright

© 2026 **Anastase Minani**. All rights reserved.

This application uses third-party APIs to retrieve weather and environmental information.

The application does not intentionally store personal user information.

---

# 👨‍💻 Author

**Anastase MINANI**

Software Developer
Electronics & Telecommunication Engineer

GitHub:

https://github.com/minasty

---

# 💡 Future Improvements

Planned improvements include:

* 🌍 Automatic location detection using GPS
* 🌈 Dynamic backgrounds based on weather conditions
* 📊 Weather charts and extended forecasts
* 🔔 Weather alerts and notifications
* 📍 Weather information based on the user's current location
* 🌙 Dark mode
* 🌐 Improved offline support

---

# 🤝 Contributing

Contributions are welcome!

To contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push the branch
6. Submit a pull request

---

# ⭐ Support

If you find this project useful, please consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is currently maintained by **Anastase Minani**.

© 2026 Anastase Minani. All rights reserved.
