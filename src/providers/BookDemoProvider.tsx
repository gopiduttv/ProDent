import { Children, createContext, useState } from 'react'

export const BookDemoProvider = createContext(null)

export default function BookDemoContextProvider({ children }) {
  const [isDemoPopUpShown, setIsDemoPopUpShown] = useState(false)

  return (
    <BookDemoProvider.Provider value={{ isDemoPopUpShown, setIsDemoPopUpShown }}>
      {children}
    </BookDemoProvider.Provider>
  )
}
