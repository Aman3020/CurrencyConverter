import { useEffect, useState } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const data = useCurrencyInfo('usd');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [Fcurrency, setFcurrency] = useState('usd');
  const [Tcurrency, setTcurrency] = useState('inr');

  useEffect(() => {
    const From = data[Fcurrency];
    const To = data[Tcurrency];
    const a = Math.round((amount / From) * To * 100) / 100;
    setConvertedAmount(a);
  }, [amount, Fcurrency, Tcurrency]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-700">Currency Converter</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={(e) => setAmount(e.target.value)}
            min="0"
          />
        </div>
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">From</label>
            <select
              value={Fcurrency}
              onChange={(e) => setFcurrency(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              {Object.keys(data).map((c, i) => (
                <option key={i} value={c}>
                  {c.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">To</label>
            <select
              value={Tcurrency}
              onChange={(e) => setTcurrency(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              {Object.keys(data).map((c, i) => (
                <option key={i} value={c}>
                  {c.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 mb-2">Converted Amount</label>
          <input
            type="number"
            value={convertedAmount}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;
