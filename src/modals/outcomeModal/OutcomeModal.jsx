import React from 'react'
import ModalWrapper from '../../components/modalWrapper/ModalWrapper'

const OutcomeModal = ({ title = 'Something Went Wrong', message = 'Please try again later' }) => {
    return (
        <ModalWrapper className='outcome' title={title}>

            <p className='md:text-center text-lg'>{message}</p>

        </ModalWrapper>
    )
}

export default OutcomeModal
