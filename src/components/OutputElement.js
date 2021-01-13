import React, { useEffect, useState, useRef, } from "react";

 const OutputElement=({type, html})=> {
const [val, setVal] = useState(null)

const [getCode, setCode] = useState(false);

const [tab, setTab] = useState('html');


 const inputRef = useRef(null);

const [htmlCopy, setHTMLCopy] = useState(false);

 const [cssCopy, setCSSCopy] = useState(false);


const cssValue = ()=>{
  
     switch (type) {
        case 'responsive':
             return'.responsive{display:-ms-grid;display:grid;-ms-grid-columns:(300px)[auto-fit];grid-template-columns:repeat(auto-fit,300px);gap:10px}.responsive li{-webkit-box-shadow:0 26px 36px -20px rgba(0,0,0,0.4);box-shadow:0 26px 36px -20px rgba(0,0,0,0.4);background-color:var(--primary);border-radius:5px}.responsive li .cards img{width:100%;height:300px;-o-object-fit:cover;object-fit:cover;border-top-left-radius:5px;border-top-right-radius:5px}.responsive li .cards article{padding:1.5em .75em}.responsive li .cards article p{font-size:.8rem}'
           
         case 'mobile':
             return `.mobile{display:-ms-grid;display:grid;-ms-grid-columns:(300px)[1];grid-template-columns:repeat(1,300px);gap:10px;place-content:center}.mobile li{-webkit-box-shadow:0 26px 36px -20px rgba(0,0,0,0.4);box-shadow:0 26px 36px -20px rgba(0,0,0,0.4);background-color:var(--primary);border-radius:5px}.mobile li .cards img{width:100%;height:300px;-o-object-fit:cover;object-fit:cover;border-top-left-radius:5px;border-top-right-radius:5px}.mobile li .cards article{padding:1.5em .75em}.mobile li .cards article p{font-size:.8rem}`;
       
        case 'ipad':
            return `.ipad{display:-ms-grid;display:grid;-ms-grid-columns:(300px)[2];grid-template-columns:repeat(2,300px);gap:10px}.ipad li{-webkit-box-shadow:0 26px 36px -20px rgba(0,0,0,0.4);box-shadow:0 26px 36px -20px rgba(0,0,0,0.4);background-color:var(--primary);border-radius:5px}.ipad li .cards img{width:100%;height:300px;-o-object-fit:cover;object-fit:cover;border-top-left-radius:5px;border-top-right-radius:5px}.ipad li .cards article{padding:1.5em .75em}.ipad li .cards article p{font-size:.8rem}`;
         
         case 'desktop':
             return `.desktop{display:-ms-grid;display:grid;-ms-grid-columns:(300px)[4];grid-template-columns:repeat(4,300px);gap:10px}.desktop li{-webkit-box-shadow:0 26px 36px -20px rgba(0,0,0,0.4);box-shadow:0 26px 36px -20px rgba(0,0,0,0.4);background-color:var(--primary);border-radius:5px}.desktop li .cards img{width:100%;height:300px;-o-object-fit:cover;object-fit:cover;border-top-left-radius:5px;border-top-right-radius:5px}.desktop li .cards article{padding:1.5em .75em}.desktop li .cards article p{font-size:.8rem}

`;   
        default:
         return;
    }



}

const copyTOclipBoard =()=>{
   
  inputRef.current.select();

  document.execCommand('copy');

if (inputRef.current.name==='html') {
    setHTMLCopy(!htmlCopy)
}
if (inputRef.current.name === "css") {
  setCSSCopy(!cssCopy);
}


}



useEffect(() => {
    
   setVal(cssValue);
}, [])



    return (
      <>
        <nav className="output--nav">
          <a href="/">
            <h1>card component generator</h1>
          </a>

          <button
            id="get--source--code"
            onClick={() => {
              setCode(!getCode);
            }}
          >
            get source code
          </button>
        </nav>

        {getCode && (
          <section className="overlay">
            <section className="output--area">
              <section
                className={`tab--section ${
                  tab === "html" ? "html--active" : "css--active"
                }`}
              >
                <button
                  id="get--html"
                  onClick={() => {
                    setTab("html");
                  }}
                >
                  html
                </button>
                <button
                  id="get--css"
                  onClick={() => {
                    setTab("css");
                  }}
                >
                  css
                </button>
              </section>
              {tab === "html" ? (
                <article className="html">
                  <h2>html</h2>
                  <textarea
                    name="html"
                    readOnly
                    value={html}
                    ref={inputRef}
                  ></textarea>
                  <button id="copy--html" onClick={copyTOclipBoard}>
                    {htmlCopy ? "copied" : "copyHTML"}
                  </button>
                </article>
              ) : (
                <article className="CSS">
                  <h2>css</h2>
                  <textarea
                    name="css"
                    value={val}
                    readOnly
                    ref={inputRef}
                  ></textarea>
                  <button id="copy--CSS" onClick={copyTOclipBoard}>
                    {cssCopy ? "copied" : "copycss"}
                  </button>
                </article>
              )}

              <button id="close--button" onClick={()=>{setCode(false)}}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="#4A5568"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </section>
          </section>
        )}
      </>
    );
}

export {OutputElement}
