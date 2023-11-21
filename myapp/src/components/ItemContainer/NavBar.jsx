import React from 'react';
import NavBarItem from '../Item/NavBarItem';
import SearchItem from '../Item/SearchItem';

export default function NavBar() {
  return (
    <div className='navMenu'>
        <NavBarItem title='Home'/>
        <NavBarItem title='Novedades'/>
        <NavBarItem title='Nosotros'/>
        <SearchItem />
    </div>
  )
}

