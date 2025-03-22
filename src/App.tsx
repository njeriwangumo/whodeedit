import MiniKitProvider from './minikit-provider';
import './App.css';

function App() {
  return (
    <MiniKitProvider>
      <div className="app-container">
        <h1>WhoDeedIt</h1>
        {/* Your app content and components go here */}
      </div>
    </MiniKitProvider>
  );
}

export default App;