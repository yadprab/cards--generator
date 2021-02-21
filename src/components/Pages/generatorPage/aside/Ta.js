import React, { useContext, useRef, useState } from "react";
import { dataContext } from "../conetext";
import  {Check} from './Check'
function Ta() {
  const { StyleObject, setStyleObject } = useContext(dataContext);

const ref = useRef(null);

const [Notifications, setNotifications] = useState(false)

const copyToClipBoard = () => {

  ref.current.select();
 
  document.execCommand('copy');
  setNotifications(true);

  
}


  return (
    <>
      <article className="ta--section">
        <h3>HTML and CSS</h3>
        <textarea
          name="html--area"
          id="html--area"
          readOnly
          value={StyleObject.html}
          ref={ref}
        ></textarea>
        <pre>
          <code>
            {`
             /* this is the main container increase the number of cards by multiplying article--card element and increase grid-template column count */
             ${StyleObject.html}
          
          `}
          </code>
          <button
            id="close--button"
            onClick={() => {
              setStyleObject({ ...StyleObject, code: false });
            }}
          >
            Close
          </button>
        </pre>
        <button className="button" onClick={copyToClipBoard}>
        {Notifications?'copied':'copy'}
         
        </button>
        <article className={`notification ${Notifications?'notify':'hide'}`}>
          <Check />
          <p>successfully copied</p>
        </article>
      </article>
    </>
  );
}

export { Ta };
