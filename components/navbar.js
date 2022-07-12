import React from 'react';
import Styles from '../styles/navbar.module.css';
import Link from 'next/link'
const Navbar=()=>{
    return <>
    <nav className={Styles.navbar}>
    <ul>
        <li><Link href="/"><a>Home</a></Link>
            
        </li>
        <li>
        <Link href="/"><a>Learn</a></Link>
        </li>
        <li>
        <Link href="/"><a>About</a></Link>
        </li>
    </ul>
    </nav>
    </>
}
export default Navbar;