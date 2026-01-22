import React, { useState, useEffect } from 'react';
import styles from './AccountSwitcher.module.scss';

const AccountSwitcher = () => {
  const [selectedPurpose, setSelectedPurpose] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [accountNames, setAccountNames] = useState({});

  const purposes = [
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

  // 保存されているアカウント名を読み込み
  useEffect(() => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.get(['accounts'], (result) => {
        if (result.accounts) {
          const names = {};
          result.accounts.forEach(acc => {
            names[acc.id] = acc.name;
          });
          setAccountNames(names);
        }
      });
    }
  }, []);

  const handleSelect = async (purpose) => {
    setSelectedPurpose(purpose.id);
    setIsAnimating(true);
    
    // アニメーション後にアカウント切り替え
    setTimeout(() => {
      switchAccount(purpose.accountIndex);
    }, 600);
  };

  const switchAccount = (accountIndex) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('authuser', accountIndex);
    window.location.href = currentUrl.toString();
  };

  return (
    <div className={`${styles.overlay} ${isAnimating ? styles.fadeOut : ''}`}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.icon}>📺</div>
          <h2 className={styles.title}>視聴目的を選択してください</h2>
          <p className={styles.subtitle}>
            適切なアカウントに切り替えます
          </p>
        </div>

        <div className={styles.purposeGrid}>
          {purposes.map((purpose) => (
            <button
              key={purpose.id}
              className={`${styles.purposeCard} ${
                selectedPurpose === purpose.id ? styles.selected : ''
              }`}
              onClick={() => handleSelect(purpose)}
              style={{ '--accent-color': purpose.color }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.emoji}>{purpose.emoji}</span>
                <span className={styles.label}>{purpose.label}</span>
              </div>
              
              <p className={styles.description}>{purpose.description}</p>
              
              <div className={styles.accountBadge}>
                {accountNames[purpose.accountIndex] || `アカウント ${purpose.accountIndex + 1}`}
              </div>

              {selectedPurpose === purpose.id && (
                <div className={styles.loadingSpinner}>
                  <div className={styles.spinner}></div>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.hint}>
            💡 ヒント: 拡張機能の設定でアカウント名をカスタマイズできます
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSwitcher;
