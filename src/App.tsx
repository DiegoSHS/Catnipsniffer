import { useState } from 'react'
import { ViewPage } from './pages/View'
import { EditPage } from './pages/Edit'

function App() {
  const [currentPage, setCurrentPage] = useState<'view' | 'edit'>('view')

  return (
    <>
      {currentPage === 'view' ? (
        <ViewPage onNavigateToEdit={() => setCurrentPage('edit')} />
      ) : (
        <EditPage onNavigateToView={() => setCurrentPage('view')} />
      )}
    </>
  )
}

export default App
