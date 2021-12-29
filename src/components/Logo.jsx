import React from 'react'

function Logo() {
    return (
        <div className='logo'>
            <h1 style={logo} >Appknowledged</h1>
        </div>
    )
}

const logo = {
    color: '#ef5151',
    fontSize: '27px',
    fontWeight: '700',
 }

export default Logo;