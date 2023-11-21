import React from 'react';

const NavBarItem = (props) => {
    return (
        <div className='navMenuItem'>
            <p>{props.title}</p>
        </div>
    );
}

export default NavBarItem;
