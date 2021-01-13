import React, { useState, useReducer } from "react";
import { useHistory } from "react-router-dom";
const reducer = (state, action) => {
  switch (action.type) {
   
    
    case "EMPTY-TYPE":
      return {
        ...state,
        isEmpty: true,
        alertContent: "choose the device type",
      };
    
    
    case "SUBMIT":
    
      return {
        ...state,
        isEmpty: false,
        alertContent: "",
       
      };

    default:
      return state;
  }
};
const initialState = {

  isEmpty: false,
  alertContent: "",
};
const Forms = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formData, setData] = useState({type: ""});
  const history = useHistory();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     if (formData.type === "") {
      dispatch({ type: "EMPTY-TYPE" });
    } else {
      dispatch({ type: "SUBMIT"});
 
      sessionStorage.setItem('data', JSON.stringify(formData));
   
     
      history.push('/generator')

     
    }
  };
  return (
    <>
      <main className="form--main">
        <section className="form--container">
          <form action="" onSubmit={handleSubmit}>
            {state.isEmpty ? (
                <small className="error">{state.alertContent}</small>
              ) : (
                ""
              )}
         
            <section className="form--control">
              <label htmlFor="type">type</label>
              <select
                name="type"
                id="type"
                autoComplete="off"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="" defaultValue disabled>
                  choose the option
                </option>
                <option value="responsive">responsive</option>
                <option value="mobile">mobile</option>
                <option value="ipad">ipad</option>
                <option value="desktop">desktop</option>
              </select>
            </section>
          
           

            <input type="submit" value="generate" id="submit" />
          </form>
        </section>
      </main>
    </>
  );
};

export { Forms };
