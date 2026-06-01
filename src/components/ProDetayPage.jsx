import { proDetaylar, proTopics } from '../data/proseries'

export default function ProDetayPage({ params, goBack }) {
  const topicId = params?.topicId
  const detay = proDetaylar[topicId]
  const topic = proTopics.find(t => t.id === topicId)

  if (!detay) {
    return (
      <div className="page pd-page">
        <header className="page-header pd-header">
          <button className="back-btn" onClick={goBack}>‹</button>
          <h1 className="page-header-name">Bulunamadı</h1>
        </header>
        <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)' }}>
          İçerik bulunamadı.
        </div>
        <PageStyle />
      </div>
    )
  }

  const renderContent = () => {
    if (topicId === 'espresso-nasil' || topicId === 'filtre-nasil' || topicId === 'soguk-nasil') {
      return <StepsContent detay={detay} />
    }
    if (topicId === 'ev-baristaniz') {
      return <BaristaContent detay={detay} />
    }
    if (topicId === 'temizlik-bakim') {
      return <TemizlikContent detay={detay} />
    }
    return <DefaultContent detay={detay} />
  }

  return (
    <div className="page pd-page">
      <header className="page-header pd-header">
        <button className="back-btn" onClick={goBack}>‹</button>
        <div className="page-header-title">
          <span className="page-header-label">{topic?.ikon} Pro Series</span>
          <h1 className="page-header-name">{detay.baslik}</h1>
        </div>
      </header>

      <div className="pd-hero">
        <h2 className="pd-hero-title">{detay.altBaslik}</h2>
        <p className="pd-hero-desc">{detay.aciklama}</p>
      </div>

      <div className="pd-body">
        {renderContent()}
      </div>

      <div className="page-bottom-space" />
      <PageStyle />
    </div>
  )
}

function DefaultContent({ detay }) {
  return (
    <>
      {detay.bolumler?.map((b, i) => (
        <div key={i} className="pd-section">
          <div className="pd-section-header">
            <span className="pd-section-icon">{b.ikon}</span>
            <h3 className="pd-section-title">{b.baslik}</h3>
          </div>
          <p className="pd-section-text">{b.icerik}</p>
        </div>
      ))}
      {detay.ekBilgi && (
        <div className="pd-extra-box">
          <h4 className="pd-extra-title">{detay.ekBilgi.baslik}</h4>
          <ul className="pd-extra-list">
            {detay.ekBilgi.icerik.map((item, i) => (
              <li key={i} className="pd-extra-item">
                <span className="pd-extra-dot">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      {detay.aksesuarlar && (
        <div className="pd-accessories">
          {detay.aksesuarlar.map((a, i) => (
            <div key={i} className="pd-accessory">
              <span className="pd-accessory-name">{a.ad}</span>
              <span className="pd-accessory-desc">{a.aciklama}</span>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

function StepsContent({ detay }) {
  return (
    <>
      <div className="pd-steps">
        {detay.adimlar.map(adim => (
          <div key={adim.numara} className="pd-step">
            <div className="pd-step-num">
              <span>{adim.numara}</span>
            </div>
            <div className="pd-step-body">
              <div className="pd-step-top">
                <span className="pd-step-icon">{adim.ikon}</span>
                <span className="pd-step-title">{adim.baslik}</span>
              </div>
              <p className="pd-step-desc">{adim.aciklama}</p>
            </div>
          </div>
        ))}
      </div>
      {detay.ekBilgi && (
        <div className="pd-extra-box">
          <h4 className="pd-extra-title" style={{ color: 'var(--gold-light)' }}>Önemli Not</h4>
          <p className="pd-section-text">{detay.ekBilgi}</p>
        </div>
      )}
    </>
  )
}

function BaristaContent({ detay }) {
  return (
    <>
      <div className="pd-barista-kategori-wrap">
        {detay.kategoriler?.map((kat, i) => (
          <div key={i} className="pd-barista-kat">
            <h3 className="pd-barista-kat-title">{kat.ad}</h3>
            <div className="pd-barista-kat-grid">
              {kat.icerikler.map((item, j) => (
                <div key={j} className="pd-barista-item">
                  <span className="pd-barista-item-name">{item.ad}</span>
                  <span className="pd-barista-item-tur">{item.tur}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {detay.favoriKombinasyonlar && (
        <div style={{ marginTop: '8px' }}>
          <h3 className="pd-section-title" style={{ marginBottom: '12px', color: 'var(--gold)' }}>
            ✦ Favori Kombinasyonlar
          </h3>
          {detay.favoriKombinasyonlar.map((fav, i) => (
            <div key={i} className="pd-section" style={{ marginBottom: '10px' }}>
              <h4 className="pd-section-title">{fav.ad}</h4>
              <p className="pd-section-text" style={{ fontSize: '0.82rem' }}>{fav.icerik}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

function TemizlikContent({ detay }) {
  return (
    <>
      {detay.bolumler?.map((b, i) => (
        <div key={i} className="pd-section">
          <div className="pd-section-header">
            <span className="pd-section-icon">{b.ikon}</span>
            <h3 className="pd-section-title">{b.baslik}</h3>
          </div>
          <p className="pd-section-text">{b.icerik}</p>
        </div>
      ))}
      {detay.onemliNotlar && (
        <div className="pd-extra-box pd-extra-box--warn">
          <h4 className="pd-extra-title">⚠️ Önemli Notlar</h4>
          <ul className="pd-extra-list">
            {detay.onemliNotlar.map((not, i) => (
              <li key={i} className="pd-extra-item">
                <span className="pd-extra-dot">•</span>
                {not}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

function PageStyle() {
  return (
    <style>{`
      .pd-page {
        background: var(--bg-primary);
      }
      .pd-header {
        background: var(--bg-secondary);
      }
      .pd-hero {
        padding: 24px 20px;
        background: linear-gradient(180deg, #1C1408 0%, var(--bg-primary) 100%);
        border-bottom: 1px solid var(--gold-border);
      }
      .pd-hero-title {
        font-family: var(--font-serif);
        font-size: clamp(1.1rem, 4vw, 1.5rem);
        font-weight: 600;
        color: var(--gold-light);
        margin-bottom: 8px;
        line-height: 1.25;
      }
      .pd-hero-desc {
        font-size: 0.84rem;
        color: var(--text-secondary);
        line-height: 1.55;
      }
      .pd-body {
        padding: 20px 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 640px;
        width: 100%;
        margin: 0 auto;
      }
      .pd-section {
        background: var(--bg-card);
        border: 1px solid var(--gold-border);
        border-radius: var(--radius-md);
        padding: 16px;
      }
      .pd-section-header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
      }
      .pd-section-icon {
        font-size: 1.2rem;
        flex-shrink: 0;
      }
      .pd-section-title {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-primary);
        line-height: 1.3;
      }
      .pd-section-text {
        font-size: 0.84rem;
        color: var(--text-secondary);
        line-height: 1.6;
      }
      .pd-extra-box {
        background: rgba(201,168,76,0.06);
        border: 1px solid var(--gold-border-bright);
        border-radius: var(--radius-md);
        padding: 16px;
      }
      .pd-extra-box--warn {
        background: rgba(255,200,50,0.05);
        border-color: rgba(255,200,50,0.2);
      }
      .pd-extra-title {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--gold);
        margin-bottom: 10px;
        letter-spacing: 0.03em;
      }
      .pd-extra-list {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }
      .pd-extra-item {
        display: flex;
        gap: 8px;
        font-size: 0.82rem;
        color: var(--text-secondary);
        line-height: 1.5;
        align-items: flex-start;
      }
      .pd-extra-dot {
        color: var(--gold);
        flex-shrink: 0;
        margin-top: 1px;
        font-size: 0.65rem;
      }
      /* Steps */
      .pd-steps {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .pd-step {
        display: flex;
        gap: 14px;
        align-items: flex-start;
        background: var(--bg-card);
        border: 1px solid var(--gold-border);
        border-radius: var(--radius-md);
        padding: 16px;
      }
      .pd-step-num {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--gold);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .pd-step-num span {
        font-size: 0.85rem;
        font-weight: 700;
        color: #0F0B04;
      }
      .pd-step-body {
        flex: 1;
      }
      .pd-step-top {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      .pd-step-icon {
        font-size: 1rem;
      }
      .pd-step-title {
        font-size: 0.82rem;
        font-weight: 700;
        color: var(--gold);
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .pd-step-desc {
        font-size: 0.84rem;
        color: var(--text-secondary);
        line-height: 1.55;
      }
      /* Barista */
      .pd-barista-kategori-wrap {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .pd-barista-kat {
        background: var(--bg-card);
        border: 1px solid var(--gold-border);
        border-radius: var(--radius-md);
        padding: 16px;
      }
      .pd-barista-kat-title {
        font-family: var(--font-serif);
        font-size: 1rem;
        color: var(--gold-light);
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--gold-border);
      }
      .pd-barista-kat-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      .pd-barista-item {
        background: var(--bg-secondary);
        border-radius: var(--radius-sm);
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .pd-barista-item-name {
        font-size: 0.84rem;
        font-weight: 500;
        color: var(--text-primary);
      }
      .pd-barista-item-tur {
        font-size: 0.68rem;
        color: var(--gold);
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      /* Accessories */
      .pd-accessories {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .pd-accessory {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--bg-card);
        border: 1px solid var(--gold-border);
        border-radius: var(--radius-sm);
        padding: 12px 16px;
        gap: 12px;
      }
      .pd-accessory-name {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--text-primary);
      }
      .pd-accessory-desc {
        font-size: 0.76rem;
        color: var(--text-muted);
      }
    `}</style>
  )
}
