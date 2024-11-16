import React, { createContext, useState, useContext, useEffect } from 'react'

// Create the context
const SiteContext = createContext()

// Create the provider component
const SiteProvider = ({ children }) => {
    const [modal, setModal] = useState(null)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [screenScrollY, setScreenScrollY] = useState(0)
    
    // SCREEN STUFF ---------------------------------------

    // Screen Scroll Y
    useEffect(() => {
        const handleScroll = () => {
            setScreenScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Screen Width
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // MODAL STUFF ---------------------------------------------

    const showModal = (newModal) => setModal(newModal)
    const hideModal = () => setModal(null)

    useEffect(() => {
        const originalOverflowY = document.body.style.overflowY
        if (modal) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
        return () => {
            document.body.style.overflowY = originalOverflowY
        }
    }, [modal])

    return (
        <SiteContext.Provider value={{
            screenScrollY,
            screenWidth,

            modal,
            showModal,
            hideModal,
        }}>
            {children}
        </SiteContext.Provider>
    )
}

// Custom hook to use the ModalContext
const useSiteContext = () => useContext(SiteContext)

export { SiteProvider, useSiteContext }