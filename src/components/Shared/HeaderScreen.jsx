import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './headerScreen.css'

const HeaderScreen = () => {

    const navbar = useRef()

    console.log(navbar)

    const clickMenuHam = () => {
        navbar.current.classList.toggle('navbar-open')
    }



    return (
        <header className='header'>
            <h1 className='header-title'>
                <Link to='/'>Tech Hub</Link>
            </h1>
            <div onClick={clickMenuHam} className='header-menu-ham'>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </div>
            <nav ref={navbar} className="navbar">
                <ul className='navbar-list'>
                    <li className='navbar-items'>
                        <NavLink 
                        to='/login' 
                        className={({isActive}) => isActive ? 'navbar-link-active navbar-links' : 
                        "navbar-links"}>
                            <span className="material-symbols-outlined">
                                person
                            </span>
                            <p className='navbar-label'></p>
                        </NavLink>
                    </li>
                    <li className='navbar-items'>
                        <NavLink to='/purchases' 
                        className={({isActive}) => isActive ? 'navbar-link-active navbar-links' : 
                        "navbar-links"}>
                        <span className="material-symbols-outlined">
                            local_mall
                        </span>
                        <p className='navbar-label'></p>
                    </NavLink>
                    </li>
                    <li className='navbar-items'>
                        <NavLink to='/cart' 
                        className={({isActive}) => isActive ? 'navbar-link-active navbar-links' : 
                        "navbar-links"}>
                        <span className="material-symbols-outlined">
                            shopping_cart_checkout
                        </span>
                        <p className='navbar-label'></p>
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderScreen