import { useState, useCallback } from 'react'
import HomePage from './components/HomePage'
import ProSeriesPage from './components/ProSeriesPage'
import ProDetayPage from './components/ProDetayPage'
import TariflerPage from './components/TariflerPage'
import TarifDetayPage from './components/TarifDetayPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [pageParams, setPageParams] = useState({})
  const [navHistory, setNavHistory] = useState([])

  const navigate = useCallback((page, params = {}) => {
    setNavHistory(prev => [...prev, { page: currentPage, params: pageParams }])
    setCurrentPage(page)
    setPageParams(params)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [currentPage, pageParams])

  const goBack = useCallback(() => {
    setNavHistory(prev => {
      if (prev.length === 0) return prev
      const last = prev[prev.length - 1]
      setCurrentPage(last.page)
      setPageParams(last.params)
      window.scrollTo({ top: 0, behavior: 'instant' })
      return prev.slice(0, -1)
    })
  }, [])

  const canGoBack = navHistory.length > 0

  const props = { navigate, goBack, canGoBack, params: pageParams }

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      {currentPage === 'home' && <HomePage {...props} />}
      {currentPage === 'pro-series' && <ProSeriesPage {...props} />}
      {currentPage === 'pro-detail' && <ProDetayPage {...props} />}
      {currentPage === 'tarifler' && <TariflerPage {...props} />}
      {currentPage === 'tarif-detail' && <TarifDetayPage {...props} />}
    </div>
  )
}

export default App
