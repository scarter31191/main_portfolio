import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Software Engineer & Creator</h1>
                <Typed
                    className='typed-text'
                    strings={['Web Design', 'Web Dev', 'Mobile Desing', 'Mobile Dev', 'Web Dev Tutor' ]}
                />
            </div>
        </div>
    )
}

export default Header
