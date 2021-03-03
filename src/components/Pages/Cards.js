import React from 'react'
import { CardsType } from './CardsType';
import {Nav} from './Nav';

function Cards() {
    return (
      <>
        {/* nav component and cards types component */}
        <Nav />
        <CardsType />
      </>
    );
}

export { Cards}
