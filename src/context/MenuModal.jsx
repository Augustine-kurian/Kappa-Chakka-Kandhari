import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { GRAND_SUNDAY_MENU } from '../data/site.js'
import './MenuModal.css'

const MenuModalCtx = createContext({ openMenu: () => {} })
export const useMenuModal = () => useContext(MenuModalCtx)

/** Provides openMenu() anywhere in the app and renders the Grand Sunday menu popup. */
export function MenuModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openMenu = useCallback(() => setOpen(true), [])
  const close = () => setOpen(false)

  // Esc to close + lock page scroll while open
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <MenuModalCtx.Provider value={{ openMenu }}>
      {children}
      {open && (
        <div className="menu-modal" onClick={close} role="dialog" aria-modal="true" aria-label="Grand Sunday Breakfast menu">
          <button className="modal-close" onClick={close} aria-label="Close">×</button>
          <div className="menu-modal__inner" onClick={(e) => e.stopPropagation()}>
            <img src={GRAND_SUNDAY_MENU} alt="Grand Sunday Breakfast menu" />
          </div>
        </div>
      )}
    </MenuModalCtx.Provider>
  )
}
