import React from 'react'

function Services() {
    return (
        <div className='services'>
            <div className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-mid-3 col-sm-6'>
                            <div className='box'>
                                <h3>Web Design</h3>
                                <p> I approach each project individually and always focus on the result.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className='col-mid-3 col-sm-6'>
                            <div className='box'>
                                <h3>Web Developer</h3>
                                <p> Your website will be built with new and proven technologies</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className='col-mid-3 col-sm-6'>
                            <div className='box'>
                                <h3>Mobile Developer</h3>
                                <p> Your apps will be built to your expectations and a user friendly flow</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className='col-mid-3 col-sm-6'>
                            <div className='box'>
                                <h3>Full-Stack Software Engineer Tutor</h3>
                                <p> The goal is to provide value to students with industry best practices and the confidence to build their carries path </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
