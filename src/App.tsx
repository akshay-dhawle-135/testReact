import './App.css'; // Ensure you have styles for the components

function App() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our Amazing App V2</h1>
        <p>Your one-stop solution for all your needs!</p>
        <button className="cta-button">Get Started</button>
      </header>

      <main className="main-content">
        <h2>Features</h2>
        <ul>
          <li>🌟 Intuitive Interface</li>
          <li>⚡ Fast and Reliable</li>
          <li>📞 24/7 Customer Support</li>
          <li>🔒 Secure and Scalable</li>
        </ul>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
