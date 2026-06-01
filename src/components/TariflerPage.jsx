import { useState } from 'react'
import { tarifler, kategoriler } from '../data/tarifler'

const kategoriRenkler = {
  espresso: { bg: 'var(--badge-espresso)', text: 'var(--badge-espresso-text)' },
  filtre: { bg: 'var(--badge-filtre)', text: 'var(--badge-filtre-text)' },
  soguk: { bg: 'var(--badge-soguk)', text: 'var(--badge-soguk-text)' },
  diger: { bg: 'var(--badge-diger)', text: 'var(--badge-diger-text)' },
}

export default function TariflerPage({ navigate, goBack }) {
  const [aktifKat, setAktifKat] = useState('tumu')
  const [arama, setArama] = useState('')

  const filtrelenmis = tarifler.filter(t => {
    const katOk = aktifKat === 'tumu' || t.kategori === aktifKat
    const aramaOk = !arama || t.ad.toLowerCase().includes(arama.toLowerCase())
    return katOk && aramaOk
  })

  return (
    <div className="page tf-page">
      {/* Header */}
      <header className="page-header">
        <button className="back-btn" onClick={goBack}>‹</button>
        <div className="page-header-title">
          <span className="page-header-label">Ninja Luxe Café</span>
          <h1 className="page-header-name">Kahve Tarifleri</h1>
        </div>
        <span className="tf-count">{tarifler.length}</span>
      </header>

      {/* Arama */}
      <div className="tf-search-wrap">
        <div className="tf-search">
          <span className="tf-search-icon">🔍</span>
          <input
            type="search"
            placeholder="Tarif ara..."
            value={arama}
            onChange={e => setArama(e.target.value)}
            className="tf-search-input"
          />
          {arama && (
            <button className="tf-search-clear" onClick={() => setArama('')}>✕</button>
          )}
        </div>
      </div>

      {/* Kategori filtresi */}
      <div className="tf-kat-wrap">
        <div className="tf-kat-scroll">
          {kategoriler.map(kat => (
            <button
              key={kat.id}
              className={`tf-kat-btn${aktifKat === kat.id ? ' tf-kat-btn--active' : ''}`}
              onClick={() => setAktifKat(kat.id)}
            >
              {kat.ad}
            </button>
          ))}
        </div>
      </div>

      {/* Liste */}
      <div className="tf-list-wrap">
        {filtrelenmis.length === 0 ? (
          <div className="tf-empty">
            <span>☕</span>
            <p>Tarif bulunamadı</p>
          </div>
        ) : (
          <div className="tf-grid">
            {filtrelenmis.map(tarif => {
              const renk = kategoriRenkler[tarif.kategori] || kategoriRenkler.diger
              return (
                <button
                  key={tarif.id}
                  className="tf-card"
                  onClick={() => navigate('tarif-detail', { id: tarif.id })}
                >
                  <div className="tf-card-emoji-wrap" style={{ background: tarif.renk }}>
                    <span className="tf-card-emoji">{tarif.emoji}</span>
                  </div>
                  <div className="tf-card-body">
                    <div className="tf-card-top">
                      <span
                        className="tf-badge"
                        style={{ background: renk.bg, color: renk.text }}
                      >
                        {tarif.kategori === 'espresso' ? 'Espresso' :
                         tarif.kategori === 'filtre' ? 'Filtre' :
                         tarif.kategori === 'soguk' ? 'Soğuk' : 'Diğer'}
                      </span>
                      <span className="tf-zorluk">{tarif.zorluk}</span>
                    </div>
                    <h3 className="tf-card-title">{tarif.ad}</h3>
                    <p className="tf-card-desc">{tarif.aciklama}</p>
                    <div className="tf-card-meta">
                      <span>⏱ {tarif.sure}</span>
                      <span>👤 {tarif.porsiyon}</span>
                    </div>
                  </div>
                  <span className="tf-card-arrow">›</span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      <div className="page-bottom-space" />

      <style>{`
        .tf-page { background: var(--bg-primary); }
        .tf-count {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--gold-faint);
          border: 1px solid var(--gold-border);
          color: var(--gold);
          font-size: 0.72rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .tf-search-wrap {
          padding: 12px 16px 4px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--gold-border);
        }
        .tf-search {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--bg-input);
          border: 1px solid var(--gold-border);
          border-radius: var(--radius-md);
          padding: 10px 14px;
        }
        .tf-search-icon { font-size: 0.9rem; opacity: 0.6; }
        .tf-search-input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.9rem;
        }
        .tf-search-input::placeholder { color: var(--text-muted); }
        .tf-search-clear {
          color: var(--text-muted);
          font-size: 0.75rem;
          padding: 2px;
        }
        .tf-kat-wrap {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--gold-border);
          padding: 10px 0 10px 16px;
        }
        .tf-kat-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-right: 16px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .tf-kat-scroll::-webkit-scrollbar { display: none; }
        .tf-kat-btn {
          flex-shrink: 0;
          padding: 7px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          background: var(--gold-faint);
          border: 1px solid var(--gold-border);
          color: var(--text-secondary);
          transition: var(--transition);
          white-space: nowrap;
        }
        .tf-kat-btn--active {
          background: var(--gold);
          border-color: var(--gold);
          color: #0F0B04;
          font-weight: 600;
        }
        .tf-kat-btn:active { transform: scale(0.96); }
        .tf-list-wrap {
          padding: 16px;
          max-width: 640px;
          width: 100%;
          margin: 0 auto;
        }
        .tf-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .tf-card {
          display: flex;
          gap: 0;
          background: var(--bg-card);
          border: 1px solid var(--gold-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          text-align: left;
          transition: var(--transition);
          width: 100%;
          align-items: stretch;
        }
        .tf-card:active {
          border-color: var(--gold-border-bright);
          transform: scale(0.99);
        }
        @media (hover: hover) {
          .tf-card:hover {
            border-color: var(--gold-border-bright);
            box-shadow: var(--gold-glow);
          }
        }
        .tf-card-emoji-wrap {
          width: 72px;
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .tf-card-emoji {
          font-size: 1.8rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
        }
        .tf-card-body {
          flex: 1;
          padding: 14px 12px;
          min-width: 0;
        }
        .tf-card-top {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 5px;
          flex-wrap: wrap;
        }
        .tf-badge {
          font-size: 0.66rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 10px;
        }
        .tf-zorluk {
          font-size: 0.68rem;
          color: var(--text-muted);
        }
        .tf-card-title {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
          line-height: 1.25;
        }
        .tf-card-desc {
          font-size: 0.76rem;
          color: var(--text-secondary);
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 8px;
        }
        .tf-card-meta {
          display: flex;
          gap: 12px;
        }
        .tf-card-meta span {
          font-size: 0.72rem;
          color: var(--text-muted);
        }
        .tf-card-arrow {
          font-size: 1.2rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          padding-right: 12px;
          flex-shrink: 0;
        }
        .tf-empty {
          text-align: center;
          padding: 48px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .tf-empty span { font-size: 2.5rem; opacity: 0.4; }
        .tf-empty p { color: var(--text-muted); font-size: 0.9rem; }
        @media (min-width: 600px) {
          .tf-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .tf-card {
            flex-direction: column;
          }
          .tf-card-emoji-wrap {
            width: 100%;
            height: 80px;
            min-height: unset;
          }
          .tf-card-emoji { font-size: 2.2rem; }
          .tf-card-arrow { display: none; }
        }
      `}</style>
    </div>
  )
}
