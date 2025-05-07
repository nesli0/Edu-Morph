import React from 'react';
import './App.css';
import { images } from './assets/images';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EduMorph</h1>
        <p>Modern Eğitim Platformu</p>
        <div className="features">
          <div className="feature-card">
            <img src={images.learning} alt="Öğrenme" />
            <h3>Öğrenme</h3>
            <p>Kişiselleştirilmiş öğrenme deneyimi</p>
          </div>
          <div className="feature-card">
            <img src={images.analysis} alt="Analiz" />
            <h3>Analiz</h3>
            <p>Detaylı performans analizi</p>
          </div>
          <div className="feature-card">
            <img src={images.collaboration} alt="İşbirliği" />
            <h3>İşbirliği</h3>
            <p>Öğrenciler ve öğretmenler için işbirliği araçları</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
