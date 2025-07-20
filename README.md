# Currency Converter

A simple, modern currency converter built with React, Vite, and Tailwind CSS. Instantly convert between multiple currencies using real-time exchange rates from a public API.

## Features

- Convert between dozens of world currencies
- Real-time exchange rates powered by [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)
- Fast, responsive UI with React and Tailwind CSS
- Seamless switching between source and target currencies
- Input validation and instant conversion

## Demo

![Currency Converter Screenshot](public/vite.svg)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/currencyConverter.git
   cd currencyConverter
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser to use the app.

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## Project Structure

- `src/App.jsx` - Main application component
- `src/hooks/useCurrencyInfo.js` - Custom React hook for fetching currency rates
- `src/assets/` - Static assets
- `public/` - Public files

## Requirements
- Internet connection (to fetch live exchange rates)

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
