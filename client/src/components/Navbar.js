import React from 'react';

const Navbar = () => {
    return(
		<nav class="navbar sticky-top navbar-dark bg-dark p-2 mb-4 shadow">

            <div class='container'>

                <a class="nav navbar-brand" href="/">
                    MERN stack
                </a>

                <div class='nav-item'>

                    <button className='btn btn-outline-light mx-1'>
                        Login
                    </button>
                    
                    <button className='btn btn-light '>
                        Sign Up!
                    </button>

                </div>

            </div>
        </nav>
    )
}

export default Navbar;