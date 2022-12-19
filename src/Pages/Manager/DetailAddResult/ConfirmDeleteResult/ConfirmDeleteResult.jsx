import React from 'react'
import './ConfirmDeleteResult.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function ConfirmDeleteResult({openModal, onClose, onConfirm}) {
  if (!openModal) return null
    return (
    <div className='overlay' onClick={onClose}>
        <div className='modal-container'>
            <p>{`Bạn có chắc chắn muốn xoá sự kiện này?`}</p>
            <div className='button-container'>
                <button className='confirm-button' onClick={onConfirm}>Có<FontAwesomeIcon icon={faCheck}/></button>
                <button className='cancle-button' onClick={onClose}>Huỷ<FontAwesomeIcon icon={faXmark}/></button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmDeleteResult