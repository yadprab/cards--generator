import React from 'react'

function HeroImg() {
    return (
      <>
        <video autoPlay loop muted playsInline>
          <source src="/images/Screen.webm" type="video/webm" />
        </video>
      </>
    );
}

export {HeroImg}
