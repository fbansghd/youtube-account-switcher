import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './Popup.module.scss';

const Popup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const purposes = [
    {
      id: 'default',
      emoji: '👤',
      label: 'デフォルト',
      accountIndex: 0,
      color: '#a0aec0',
      description: 'メインアカウント'
    },
    {
      id: 'learning',
      emoji: '📚',
      label: '学習',
      accountIndex: 1,
      color: '#4ecdc4',
      description: 'プログラミング、チュートリアル'
    },
    {
      id: 'play',
      emoji: '🎮',
      label: '遊び',
      accountIndex: 2,
      color: '#ff6b6b',
      description: 'ゲーム実況、エンタメ動画'
    },
    {
      id: 'music',
      emoji: '🎵',
      label: '音楽',
      accountIndex: 3,
      color: '#ffe66d',
      description: 'ミュージックビデオ、ライブ'
    }
  ];

  const handleSelect = (purpose) => {
    setIsLoading(true);

    // 現在のタブをYouTubeホームに切り替え
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const youtubeUrl = `https://www.youtube.com/?authuser=${purpose.accountIndex}`;

      if (tab && tab.url && tab.url.includes('youtube.com')) {
        chrome.tabs.update(tab.id, { url: youtubeUrl });
      } else {
        chrome.tabs.create({ url: youtubeUrl });
      }
      window.close();
    });
  };

  return (
    <div className={styles.popup}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.titleIcon}>📺</span>
          YouTube
        </h1>
        <p className={styles.subtitle}>視聴目的を選択</p>
      </header>

      <div className={styles.purposeList}>
        {purposes.map((purpose) => (
          <button
            key={purpose.id}
            className={styles.purposeButton}
            onClick={() => handleSelect(purpose)}
            disabled={isLoading}
            style={{ '--accent-color': purpose.color }}
          >
            <span className={styles.purposeEmoji}>{purpose.emoji}</span>
            <div className={styles.purposeInfo}>
              <span className={styles.purposeLabel}>{purpose.label}</span>
              <span className={styles.purposeDesc}>{purpose.description}</span>
            </div>
          </button>
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          選択すると該当アカウントに切り替わります
        </p>
      </div>
    </div>
  );
};

// ポップアップをマウント
const root = ReactDOM.createRoot(document.getElementById('popup-root'));
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);

export default Popup;
