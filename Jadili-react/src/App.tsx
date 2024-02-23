// Jadili-react/src/App.tsx
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch('./api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Jadili Blog-App</h1>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
