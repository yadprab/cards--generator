import React from 'react'

function HeroImg({src}) {
    return (
      <>
        <video autoPlay loop muted playsInline>
          <source src={src} type="video/webm" />
        </video>
      </>
    );
}

export {HeroImg}
