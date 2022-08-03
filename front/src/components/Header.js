import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

function Header(props) {
    return (
        <header>
            <div className='btnArea'>
                <Link to={'/'}>목록</Link>
                <Link to={'/write'}>글쓰기</Link>
            </div>
        </header>
    );
}

export default Header;