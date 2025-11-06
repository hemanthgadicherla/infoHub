# InfoHub Frontend

A modern React application built with Vite that provides three essential utilities: Weather Information, Unit Converter, and Inspirational Quotes.

![InfoHub Screenshot](./public/screenshot.png)

## 🌟 Features

- **Weather Information**: Get real-time weather data for any location
- **Unit Converter**: Convert between different units of measurement
- **Inspirational Quotes**: Access a collection of motivational quotes
- **Clean UI**: Modern, responsive design with smooth transitions
- **Dark Theme**: Eye-friendly dark mode interface

## 🚀 Tech Stack

- **React** - UI Library
- **Vite** - Build Tool
- **CSS3** - Styling with modern CSS features
- **Axios** - HTTP client for API requests
- **ESLint** - Code quality and consistency

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hemanthgadicherla/infoHub.git
   cd infoHub/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the client directory:
   ```env
   VITE_WEATHER_API_KEY=your_weather_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Converter.jsx    # Unit conversion component
│   │   ├── Weather.jsx      # Weather information component
│   │   └── Quotes.jsx       # Inspirational quotes component
│   ├── App.jsx             # Main application component
│   ├── App.css             # Global styles
│   └── main.jsx            # Entry point
└── public/                 # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌐 Environment Variables

Create a `.env` file with the following:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

## 🎨 Styling

The application uses modern CSS features including:
- Flexbox and Grid for layouts
- CSS Variables for theming
- Smooth transitions and animations
- Mobile-responsive design

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Deployment

This project is deployed on Vercel. For deployment:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!

## 🔗 API Integration

- Weather data from WeatherAPI
- Quotes from external API service
- All API calls are handled with Axios

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
