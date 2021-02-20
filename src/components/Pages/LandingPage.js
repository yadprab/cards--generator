import React from 'react'
import {HeroImg} from './landingPage/HeroImg'
import { HeroText } from "./landingPage/HeroText";
import {Nav} from './Nav'
function LandingPage() {
    return (
      <>
      <Nav/>
        <header>
          <section className="hero--section">
            <HeroText />
            <HeroImg />
          </section>
        </header>
      </>
    );
}

export  {LandingPage}
