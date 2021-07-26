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
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href='#' className='btn-main-offer'>contact me</a>
            </div>
        </div>
    )
}

export default Header
