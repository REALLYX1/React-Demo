import { createContext, useContext } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const appInfo = {
    name: 'Check List',
    student: 'Việc cá nhân',
  }

  return <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
