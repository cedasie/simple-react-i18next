import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <nav style={{ with: '100%', padding: '2rem', backgroundColor: 'gray' }}>
        <button onClick={() => handleClick('en')}>English</button>
        <button onClick={() => handleClick('ko')}>한국어</button>
        <button onClick={() => handleClick('chi')}>汉语</button>
        <button onClick={() => handleClick('fr')}>Français</button>
        <button onClick={() => handleClick('ja')}>日本語</button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t('Thanks.1')}</p>
        <p>{t('why.1')}</p>
      </header>
    </div>
  );
}

export default App;
