import React from "react";
import { Svg } from "./Svg";
function Nav() {
  return (
    <>
      <nav>
        <article>
          <img src="/images/logo.png" alt=""/>
        </article>

        <a href="#" target="_blank" rel="noOpener noReferrer">
          <Svg />
        </a>
      </nav>
    </>
  );
}

export { Nav };
