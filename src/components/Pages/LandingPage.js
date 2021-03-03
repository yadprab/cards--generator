import React from 'react'
import {HeroImg} from './landingPage/HeroImg'
import { HeroText } from "./landingPage/HeroText";
import {Nav} from './Nav'
import {MobileAlert} from './landingPage/MobileAlert';
function LandingPage() {
    return (
      <>
        {/* displaying nav and intro about our page */}
        <Nav />
        <header>
          <section className="hero--section">
            {/* text content about our page*/}
            <HeroText
              content1="Generate Card Easily"
              content2="Get the code Instantly"
            />
            {/* video content about our page */}
            <HeroImg src="/images/header1.webm" />
          </section>

          <section className="hero--section-2">
            {/* text content about our page*/}
            <HeroText
              content1="Easy to customize"
              content2="multiple options available to customize your card"
            />
            {/* video content about our page */}
            <HeroImg src="/images/Screen.webm" />
          </section>
          <section className="hero--section-3">
            {/* text content about our page*/}
            <HeroText
              content1="choose the type of cards you need"
              content2="Right now six variety is available"
            />
            {/* video content about our page */}
            <HeroImg src="/images/section2.webm" />
          </section>
          <section className="hero--section-4">
            {/* text content about our page*/}
            <HeroText
              content1="Get the code Instantly"
              content2="try it right now"
            />
            {/* video content about our page */}
            <HeroImg src="/images/section3.webm" />
          </section>
        </header>
        <MobileAlert />
      </>
    );
}

export  {LandingPage}
