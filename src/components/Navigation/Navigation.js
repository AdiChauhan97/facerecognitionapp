import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline ph2 pointer'>Sign out</p>
            </nav>
            <h1 className="titlefont di black-90 f-subheadline">FACE RECOGNITION APP</h1>
            </div>
        )
    } else {
        return (
            <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline ph2 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline ph2 pointer'>Register</p>
            </nav>
            <h1 className="titlefont di black-90 f-subheadline">FACE RECOGNITION APP</h1>
            </div>
        )
    }
}

export default Navigation;