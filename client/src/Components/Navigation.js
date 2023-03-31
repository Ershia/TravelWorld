import React from 'react'

function Navigation() {
  return (
    <div>
        <nav className='navigation'>
            <div className='logo'>LOGO</div>
            <div className='navbar'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Explore</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='login-btn'>
                <button type='text'>login</button>
            </div>
        </nav>
    </div>
  )
}

export default Navigation