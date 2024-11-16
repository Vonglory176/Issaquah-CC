import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useSiteContext } from '../../context/SiteContext'

const ModalWrapper = ({ children, className, title }) => {
    const { hideModal } = useSiteContext()

    return (
        <div className={`modal ${className}`}>

            <div className="modal-overlay" onClick={hideModal}></div>

            <div className="modal-content flex flex-col gap-4 relative">

                <div className="modal-content-wrapper">

                    <div className="modal-header relative">
                        <h2 className='mr-[50px] md:mx-[50px] md:text-center md:text-3xl'>{title}</h2>

                        <button onClick={hideModal} className='w-10 max-h-10 absolute right-0 top-0 bottom-0' aria-label='Close the calendar event modal' >
                            <FaTimes size={24} className="cursor-pointer mx-auto" />
                        </button>
                    </div>

                    <hr />

                    {children}

                </div>

            </div>

        </div>
    )
}

export default ModalWrapper
