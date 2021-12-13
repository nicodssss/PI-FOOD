import React from "react";
import { Link } from "react-router-dom";



const Nav = () => {
    return (
        <div>
            {/* Nav to home */}
            <Link to='/home'>
                <span>Home</span>
            </Link>
            {/* Blank to my github */}
            <div>
                <a
                    href='https://github.com/nicodssss'
                    alt='Personal Mark'
                    target='_blank'
                    rel="noreferrer"
                ><img src={`https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2018/06/adobe-xd-alternativa-cabecera.png?fit=666%2C370&quality=100&strip=all&ssl=1`} alt='personal Mark' />
                </a>
            </div>
            {/* Nav to create new dog or breed */}
            {/* <Link to='/create'>
                <button className={styles.bttn}>
                    Create Dog
                </button>
            </Link> */}
        </div>
    )
}

export default Nav;