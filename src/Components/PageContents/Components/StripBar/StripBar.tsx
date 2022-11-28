import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const StripBar: React.FC<{gender: string}> = ({gender}) => {
  return (
    <div className="strip-bar">
        <Link to={'/'}><span className='back'><FontAwesomeIcon icon={faArrowLeftLong}/>Home</span></Link>
        <span className='title'>Shop {gender}'s</span>
    </div>
    )
}


export default StripBar