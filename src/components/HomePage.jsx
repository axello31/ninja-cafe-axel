export default function HomePage({ navigate }) {
  return (
    <div className="home-page">
      {/* Hero */}
      <div className="home-hero">
        <div className="home-logo-wrap">
          <img src="/logo.png" alt="Ninja Luxe Café Pro Seri" className="home-logo" />
        </div>
        <div className="home-brand">
          <h1 className="home-app-name">Ninja Cafe Axel</h1>
          <p className="home-tagline">Mükemmel fincanınız için rehberiniz</p>
        </div>
        <div className="home-divider">
          <span className="home-divider-line" />
          <span className="home-divider-dot">✦</span>
          <span className="home-divider-line" />
        </div>
      </div>

      {/* Ana Kartlar */}
      <div className="home-cards">
        <button className="home-card" onClick={() => navigate('pro-series')}>
          <div className="home-card-icon-wrap">
            <span className="home-card-icon">⚙️</span>
          </div>
          <div className="home-card-body">
            <span className="home-card-label">Ninja Luxe Café</span>
            <h2 className="home-card-title">Pro Series</h2>
            <p className="home-card-desc">
              Makinenizi tanıyın — özellikler, demleme rehberi, Barista Assist™ ve bakım.
            </p>
          </div>
          <span className="home-card-arrow">›</span>
        </button>

        <button className="home-card" onClick={() => navigate('tarifler')}>
          <div className="home-card-icon-wrap home-card-icon-wrap--coffee">
            <span className="home-card-icon">☕</span>
          </div>
          <div className="home-card-body">
            <span className="home-card-label">16 Tarif</span>
            <h2 className="home-card-title">Kahve Tarifleri</h2>
            <p className="home-card-desc">
              Espresso'dan soğuk demleye, klasiklerden özel tariflere kadar tüm rehberler.
            </p>
          </div>
          <span className="home-card-arrow">›</span>
        </button>
      </div>

      {/* Hızlı Erişim */}
      <div className="home-quick">
        <p className="home-quick-title">Hızlı Erişim</p>
        <div className="home-quick-grid">
          {[
            { emoji: '☕', ad: 'Espresso', id: 'espresso-sotu' },
            { emoji: '🥛', ad: 'Latte', id: 'latte' },
            { emoji: '🧊', ad: 'Soğuk', id: 'soguk-demleme' },
            { emoji: '🍸', ad: 'Martini', id: 'espresso-martini' },
          ].map(item => (
            <button
              key={item.id}
              className="home-quick-btn"
              onClick={() => navigate('tarif-detail', { id: item.id })}
            >
              <span className="home-quick-emoji">{item.emoji}</span>
              <span className="home-quick-name">{item.ad}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="home-footer">
        <p>Ninja Luxe Café · Pro Seri · 2024</p>
      </div>

      <style>{`
        .home-page {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
          min-height: 100dvh;
        }
        .home-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 48px 24px 32px;
          background: radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%);
        }
        .home-logo-wrap {
          width: 200px;
          max-width: 70vw;
          margin-bottom: 20px;
        }
        .home-logo {
          width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(201,168,76,0.25), 0 2px 8px rgba(0,0,0,0.6);
        }
        .home-brand {
          text-align: center;
          margin-bottom: 20px;
        }
        .home-app-name {
          font-family: var(--font-serif);
          font-size: clamp(1.6rem, 6vw, 2.4rem);
          font-weight: 600;
          color: var(--gold-light);
          letter-spacing: 0.04em;
          margin-bottom: 6px;
        }
        .home-tagline {
          font-size: 0.88rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .home-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          max-width: 280px;
        }
        .home-divider-line {
          flex: 1;
          height: 1px;
          background: var(--gold-border);
        }
        .home-divider-dot {
          color: var(--gold);
          font-size: 0.7rem;
        }
        .home-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 24px 16px;
          max-width: 640px;
          width: 100%;
          margin: 0 auto;
        }
        .home-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--bg-card);
          border: 1px solid var(--gold-border);
          border-radius: var(--radius-lg);
          padding: 20px;
          text-align: left;
          transition: var(--transition);
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        .home-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .home-card:active {
          transform: scale(0.98);
          background: var(--bg-card-hover);
          border-color: var(--gold-border-bright);
        }
        @media (hover: hover) {
          .home-card:hover {
            background: var(--bg-card-hover);
            border-color: var(--gold-border-bright);
            box-shadow: var(--gold-glow);
          }
        }
        .home-card-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(201,168,76,0.10);
          border: 1px solid var(--gold-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .home-card-icon-wrap--coffee {
          background: rgba(201,168,76,0.08);
        }
        .home-card-icon {
          font-size: 1.5rem;
        }
        .home-card-body {
          flex: 1;
          min-width: 0;
        }
        .home-card-label {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 3px;
        }
        .home-card-title {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 5px;
          line-height: 1.2;
        }
        .home-card-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }
        .home-card-arrow {
          font-size: 1.5rem;
          color: var(--gold);
          flex-shrink: 0;
          opacity: 0.7;
        }
        .home-quick {
          padding: 0 16px 24px;
          max-width: 640px;
          width: 100%;
          margin: 0 auto;
        }
        .home-quick-title {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 10px;
          padding-left: 4px;
        }
        .home-quick-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .home-quick-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          background: var(--bg-secondary);
          border: 1px solid var(--gold-border);
          border-radius: var(--radius-md);
          padding: 14px 8px;
          transition: var(--transition);
        }
        .home-quick-btn:active {
          background: var(--bg-card);
          border-color: var(--gold-border-bright);
          transform: scale(0.95);
        }
        @media (hover: hover) {
          .home-quick-btn:hover {
            background: var(--bg-card);
            border-color: var(--gold-border-bright);
          }
        }
        .home-quick-emoji {
          font-size: 1.4rem;
        }
        .home-quick-name {
          font-size: 0.72rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .home-footer {
          margin-top: auto;
          padding: 20px 16px calc(20px + env(safe-area-inset-bottom, 0px));
          text-align: center;
        }
        .home-footer p {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }
        @media (min-width: 640px) {
          .home-hero {
            padding: 60px 24px 36px;
          }
          .home-logo-wrap {
            width: 240px;
          }
          .home-app-name {
            font-size: 2.4rem;
          }
        }
        @media (min-width: 768px) {
          .home-cards {
            flex-direction: row;
          }
          .home-card {
            flex: 1;
            flex-direction: column;
            align-items: flex-start;
          }
          .home-card-arrow {
            position: absolute;
            right: 16px;
            bottom: 16px;
          }
        }
      `}</style>
    </div>
  )
}
