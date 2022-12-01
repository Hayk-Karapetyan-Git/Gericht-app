import React from 'react';
import { SubHeading } from '../../components';
import {images} from "../../constants"

import './Header.css';

const Header = () =>{
  return (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The key to fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus iure explicabo nemo repellendus nostrum ab, eius dicta non rem soluta sunt praesentium eligendi aliquid. Amet deleniti consequuntur nesciunt eum atque voluptates laborum ipsam officia deserunt.
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
)};

export default Header;
