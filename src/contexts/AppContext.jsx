// Context lưu thông tin đơn giản cần dùng ở nhiều nơi.
import { createContext, useContext } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const appInfo = {
    name: 'Focus Tasks',
    student: 'Công việc cá nhân',
  }

  return <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
