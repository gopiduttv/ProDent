import { Children, createContext, useState } from 'react'

export const BookDemoProvider = createContext(null)

export default function BookDemoContextProvider({ children }) {
  const [showPopup, setDemoPopupActive] = useState(false)

  return (
    <BookDemoProvider.Provider value={{ showPopup, setDemoPopupActive }}>
      {children}
    </BookDemoProvider.Provider>
  )
}
