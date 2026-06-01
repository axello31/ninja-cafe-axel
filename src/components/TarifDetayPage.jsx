import { tarifler } from '../data/tarifler'

const kategoriAd = {
  espresso: 'Espresso',
  filtre: 'Filtre Kahvesi',
  soguk: 'Soğuk',
  diger: 'Diğer',
}

const kategoriRenk = {
  espresso: { bg: 'var(--badge-espresso)', text: 'var(--badge-espresso-text)' },
  filtre: { bg: 'var(--badge-filtre)', text: 'var(--badge-filtre-text)' },
  soguk: { bg: 'var(--badge-soguk)', text: 'var(--badge-soguk-text)' },
  diger: { bg: 'var(--badge-diger)', text: 'var(--badge-diger-text)' },
}

export default function TarifDetayPage({ params, navigate, goBack }) {
  const id = params?.id
  const tarif = tarifler.find(t => t.id === id)

  if (!tarif) {
    return (
      <div className="page td-page">
        <header className="page-header">
          <button className="back-btn" onClick={goBack}>‹</button>
          <h1 className="page-header-name">Bulunamadı</h1>
        </header>
        <p style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)' }}>
          Tarif bulunamadı.
        </p>
        <TdStyle />
      </div>
    )
  }

  const renk = kategoriRenk[tarif.kategori] || kategoriRenk.diger

  const ilgiliTarifler = tarifler
    .filter(t => t.kategori === tarif.kategori && t.id !== tarif.id)
    .slice(0, 3)

  return (
    <div className="page td-page">
      {/* Header */}
      <header className="page-header td-header">
        <button className="back-btn" onClick={goBack}>‹</button>
        <div className="page-header-title">
          <span className="page-header-label">Tarif</span>
          <h1 className="page-header-name">{tarif.ad}</h1>
        </div>
      </header>

      {/* Hero */}
      <div className="td-hero" style={{ background: `linear-gradient(135deg, ${tarif.renk} 0%, #0F0B04 100%)` }}>
        <div className="td-hero-emoji-wrap">
          <span className="td-hero-emoji">{tarif.emoji}</span>
        </div>
        <div className="td-hero-info">
          <div className="td-hero-badges">
            <span
              className="tf-badge"
              style={{ background: renk.bg, color: renk.text }}
            >
              {kategoriAd[tarif.kategori]}
            </span>
            <span className="td-zorluk-badge">{tarif.zorluk}</span>
          </div>
          <h2 className="td-hero-title">{tarif.ad}</h2>
          <p className="td-hero-desc">{tarif.aciklama}</p>
          <div className="td-hero-meta">
            <div className="td-meta-item">
              <span className="td-meta-icon">⏱</span>
              <span className="td-meta-val">{tarif.sure}</span>
              <span className="td-meta-label">Süre</span>
            </div>
            <div className="td-meta-divider" />
            <div className="td-meta-item">
              <span className="td-meta-icon">👤</span>
              <span className="td-meta-val">{tarif.porsiyon}</span>
              <span className="td-meta-label">Porsiyon</span>
            </div>
            <div className="td-meta-divider" />
            <div className="td-meta-item">
              <span className="td-meta-icon">☕</span>
              <span className="td-meta-val td-meta-val--sm">{tarif.demlemeTuru}</span>
              <span className="td-meta-label">Demleme</span>
            </div>
          </div>
        </div>
      </div>

      {/* İçerik */}
      <div className="td-body">
        {/* Malzemeler */}
        <section className="td-section">
          <h3 className="td-section-title">
            <span className="td-section-icon">🛒</span> Malzemeler
          </h3>
          <ul className="td-mal-list">
            {tarif.malzemeler.map((m, i) => (
              <li key={i} className="td-mal-item">
                <span className="td-mal-dot" />
                {m}
              </li>
            ))}
          </ul>
        </section>

        {/* Adımlar */}
        <section className="td-section">
          <h3 className="td-section-title">
            <span className="td-section-icon">📋</span> Yapılış
          </h3>
          <ol className="td-adim-list">
            {tarif.adimlar.map((adim, i) => (
              <li key={i} className="td-adim-item">
                <span className="td-adim-num">{i + 1}</span>
                <span className="td-adim-text">{adim}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Varyantlar */}
        {tarif.varyantlar && (
          <section className="td-section">
            <h3 className="td-section-title">
              <span className="td-section-icon">📐</span> Varyantlar
            </h3>
            <div className="td-var-grid">
              {tarif.varyantlar.map((v, i) => (
                <div key={i} className="td-var-card">
                  <span className="td-var-miktar">{v.miktar}</span>
                  <span className="td-var-ad">{v.ad}</span>
                  <span className="td-var-desc">{v.aciklama}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* İpucu */}
        {tarif.ipucu && (
          <section className="td-ipucu">
            <span className="td-ipucu-icon">💡</span>
            <div>
              <span className="td-ipucu-label">Barista İpucu</span>
              <p className="td-ipucu-text">{tarif.ipucu}</p>
            </div>
          </section>
        )}

        {/* İlgili tarifler */}
        {ilgiliTarifler.length > 0 && (
          <section style={{ marginTop: '8px' }}>
            <h3 className="td-section-title" style={{ marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Benzer Tarifler
            </h3>
            <div className="td-ilgili-list">
              {ilgiliTarifler.map(t => (
                <button
                  key={t.id}
                  className="td-ilgili-card"
                  onClick={() => navigate('tarif-detail', { id: t.id })}
                >
                  <span className="td-ilgili-emoji">{t.emoji}</span>
                  <span className="td-ilgili-ad">{t.ad}</span>
                  <span className="td-ilgili-arrow">›</span>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="page-bottom-space" />
      <TdStyle />
    </div>
  )
}

function TdStyle() {
  return (
    <style>{`
      .td-page { background: var(--bg-primary); }
      .td-header { background: transparent; position: sticky; top: 0; backdrop-filter: blur(12px); background: rgba(15,11,4,0.85); }
      .td-hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 28px 20px 24px;
        gap: 16px;
        border-bottom: 1px solid var(--gold-border);
      }
      .td-hero-emoji-wrap {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: rgba(255,255,255,0.08);
        border: 2px solid rgba(255,255,255,0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .td-hero-emoji { font-size: 2.4rem; }
      .td-hero-info { width: 100%; }
      .td-hero-badges {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
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
      .td-zorluk-badge {
        font-size: 0.7rem;
        color: var(--text-muted);
        background: var(--bg-secondary);
        padding: 3px 8px;
        border-radius: 10px;
        border: 1px solid var(--gold-border);
      }
      .td-hero-title {
        font-family: var(--font-serif);
        font-size: clamp(1.4rem, 5vw, 2rem);
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 8px;
        line-height: 1.2;
      }
      .td-hero-desc {
        font-size: 0.84rem;
        color: var(--text-secondary);
        line-height: 1.55;
        margin-bottom: 16px;
      }
      .td-hero-meta {
        display: flex;
        align-items: center;
        gap: 0;
        background: rgba(0,0,0,0.25);
        border: 1px solid var(--gold-border);
        border-radius: var(--radius-md);
        overflow: hidden;
      }
      .td-meta-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 8px;
        gap: 2px;
      }
      .td-meta-icon { font-size: 0.9rem; }
      .td-meta-val {
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--gold-light);
        text-align: center;
        line-height: 1.2;
      }
      .td-meta-val--sm { font-size: 0.72rem; }
      .td-meta-label {
        font-size: 0.65rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .td-meta-divider {
        width: 1px;
        height: 40px;
        background: var(--gold-border);
      }
      .td-body {
        padding: 20px 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        max-width: 640px;
        width: 100%;
        margin: 0 auto;
      }
      .td-section {
        background: var(--bg-card);
        border: 1px solid var(--gold-border);
        border-radius: var(--radius-lg);
        padding: 18px;
      }
      .td-section-title {
        font-size: 0.88rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .td-section-icon { font-size: 1rem; }
      /* Malzemeler */
      .td-mal-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .td-mal-item {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        font-size: 0.87rem;
        color: var(--text-secondary);
        line-height: 1.5;
      }
      .td-mal-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--gold);
        flex-shrink: 0;
        margin-top: 6px;
      }
      /* Adımlar */
      .td-adim-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .td-adim-item {
        display: flex;
        gap: 12px;
        align-items: flex-start;
      }
      .td-adim-num {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: var(--gold);
        color: #0F0B04;
        font-size: 0.78rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-top: 1px;
      }
      .td-adim-text {
        font-size: 0.87rem;
        color: var(--text-secondary);
        line-height: 1.6;
        flex: 1;
      }
      /* Varyantlar */
      .td-var-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }
      .td-var-card {
        background: var(--bg-secondary);
        border: 1px solid var(--gold-border);
        border-radius: var(--radius-md);
        padding: 12px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        text-align: center;
      }
      .td-var-miktar {
        font-family: var(--font-serif);
        font-size: 1.15rem;
        font-weight: 600;
        color: var(--gold);
      }
      .td-var-ad {
        font-size: 0.84rem;
        font-weight: 600;
        color: var(--text-primary);
      }
      .td-var-desc {
        font-size: 0.7rem;
        color: var(--text-muted);
      }
      /* İpucu */
      .td-ipucu {
        display: flex;
        gap: 12px;
        align-items: flex-start;
        background: rgba(201,168,76,0.07);
        border: 1px solid var(--gold-border-bright);
        border-radius: var(--radius-md);
        padding: 16px;
      }
      .td-ipucu-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }
      .td-ipucu-label {
        display: block;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--gold);
        margin-bottom: 5px;
      }
      .td-ipucu-text {
        font-size: 0.84rem;
        color: var(--text-secondary);
        line-height: 1.6;
      }
      /* İlgili */
      .td-ilgili-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .td-ilgili-card {
        display: flex;
        align-items: center;
        gap: 12px;
        background: var(--bg-card);
        border: 1px solid var(--gold-border);
        border-radius: var(--radius-md);
        padding: 12px 14px;
        width: 100%;
        transition: var(--transition);
      }
      .td-ilgili-card:active {
        background: var(--bg-card-hover);
        border-color: var(--gold-border-bright);
      }
      .td-ilgili-emoji { font-size: 1.2rem; }
      .td-ilgili-ad {
        flex: 1;
        font-size: 0.9rem;
        color: var(--text-primary);
        text-align: left;
      }
      .td-ilgili-arrow {
        font-size: 1.1rem;
        color: var(--text-muted);
      }
      @media (min-width: 480px) {
        .td-hero {
          flex-direction: row;
          align-items: flex-start;
        }
        .td-hero-emoji-wrap {
          width: 90px;
          height: 90px;
        }
        .td-hero-info { flex: 1; }
      }
    `}</style>
  )
}
