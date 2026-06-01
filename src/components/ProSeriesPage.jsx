import { proTopics } from '../data/proseries'

export default function ProSeriesPage({ navigate, goBack }) {
  return (
    <div className="page">
      {/* Header */}
      <header className="page-header">
        <button className="back-btn" onClick={goBack} aria-label="Geri">
          ‹
        </button>
        <div className="page-header-title">
          <span className="page-header-label">Makineniz</span>
          <h1 className="page-header-name">Pro Series</h1>
        </div>
        <div className="page-header-logo-sm">
          <img src="/logo.png" alt="Ninja" />
        </div>
      </header>

      {/* Hero banner */}
      <div className="pros-hero">
        <div className="pros-hero-text">
          <p className="pros-hero-label">Ninja Luxe Café</p>
          <h2 className="pros-hero-title">Rehberinize<br />Hoş Geldiniz</h2>
          <p className="pros-hero-desc">
            Makinenizden en iyi verimi almak için ihtiyacınız olan her şey burada.
          </p>
        </div>
        <div className="pros-hero-badge">
          <span>PRO</span>
          <span>SERİ</span>
        </div>
      </div>

      {/* Konular */}
      <div className="pros-grid-wrap">
        <p className="section-label">Bölümler</p>
        <div className="pros-grid">
          {proTopics.map(topic => (
            <button
              key={topic.id}
              className="pros-card"
              onClick={() => navigate('pro-detail', { topicId: topic.id })}
            >
              <span className="pros-card-icon">{topic.ikon}</span>
              <div className="pros-card-text">
                <span className="pros-card-title">{topic.baslik}</span>
                <span className="pros-card-desc">{topic.ozet}</span>
              </div>
              <span className="pros-card-arrow">›</span>
            </button>
          ))}
        </div>
      </div>

      <div className="page-bottom-space" />

      <style>{`
        .page {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
          min-height: 100dvh;
        }
        .page-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          padding-top: calc(12px + env(safe-area-inset-top, 0px));
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--gold-border);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .back-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--gold-faint);
          border: 1px solid var(--gold-border);
          color: var(--gold);
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: var(--transition);
          line-height: 1;
        }
        .back-btn:active { background: rgba(201,168,76,0.2); }
        .page-header-title {
          flex: 1;
        }
        .page-header-label {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gold);
          display: block;
        }
        .page-header-name {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.1;
        }
        .page-header-logo-sm {
          width: 56px;
          flex-shrink: 0;
        }
        .page-header-logo-sm img {
          width: 100%;
          border-radius: 6px;
        }
        .pros-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 20px;
          background: linear-gradient(135deg, #1C1408 0%, #0F0B04 100%);
          border-bottom: 1px solid var(--gold-border);
          gap: 16px;
        }
        .pros-hero-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--gold);
          margin-bottom: 6px;
        }
        .pros-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(1.4rem, 5vw, 2rem);
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.15;
          margin-bottom: 10px;
        }
        .pros-hero-desc {
          font-size: 0.83rem;
          color: var(--text-secondary);
          max-width: 240px;
          line-height: 1.5;
        }
        .pros-hero-badge {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--gold-faint);
          border: 2px solid var(--gold-border-bright);
        }
        .pros-hero-badge span {
          font-family: var(--font-serif);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.1em;
          line-height: 1.3;
        }
        .pros-grid-wrap {
          padding: 24px 16px;
          max-width: 640px;
          width: 100%;
          margin: 0 auto;
        }
        .section-label {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 12px;
        }
        .pros-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .pros-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: var(--bg-card);
          border: 1px solid var(--gold-border);
          border-radius: var(--radius-md);
          padding: 16px;
          text-align: left;
          transition: var(--transition);
          width: 100%;
        }
        .pros-card:active {
          background: var(--bg-card-hover);
          border-color: var(--gold-border-bright);
          transform: scale(0.98);
        }
        @media (hover: hover) {
          .pros-card:hover {
            background: var(--bg-card-hover);
            border-color: var(--gold-border-bright);
          }
        }
        .pros-card-icon {
          font-size: 1.4rem;
          width: 40px;
          text-align: center;
          flex-shrink: 0;
        }
        .pros-card-text {
          flex: 1;
          min-width: 0;
        }
        .pros-card-title {
          display: block;
          font-size: 0.93rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 3px;
        }
        .pros-card-desc {
          display: block;
          font-size: 0.76rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .pros-card-arrow {
          font-size: 1.2rem;
          color: var(--text-muted);
          flex-shrink: 0;
        }
        .page-bottom-space {
          height: calc(24px + env(safe-area-inset-bottom, 0px));
        }
        @media (min-width: 640px) {
          .pros-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .pros-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .pros-card-arrow {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
