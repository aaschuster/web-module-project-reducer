import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, {initialState} from '../reducers/index';
import {changeOperation, applyNumber, clearDisplay, addMem, readMem, clearMem} from "../actions/index"


function App() {
const [state, dispatch] = useReducer(reducer, initialState); 

function evtHandler(e) {
  const val = e.target.value;

  if(val[0] === "M") {
    switch (val[1]) {
      case "+" :
        dispatch(addMem());
        break;
      case "R" :
        dispatch(readMem());
        break;
      case "C" :
        dispatch(clearMem());
        break;
      default: console.error("Something has gone horribly wrong.");
    }
  } else {
    if(val === "CE") dispatch(clearDisplay());
    else if (parseInt(val)) dispatch(applyNumber(parseInt(val)));
    else dispatch(changeOperation(val));
  }

}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={e => evtHandler(e)}/>
              <CalcButton value={"MR"} onClick={e => evtHandler(e)}/>
              <CalcButton value={"MC"} onClick={e => evtHandler(e)}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={e => evtHandler(e)}/>
              <CalcButton value={2} onClick={e => evtHandler(e)}/>
              <CalcButton value={3} onClick={e => evtHandler(e)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={e => evtHandler(e)}/>
              <CalcButton value={5} onClick={e => evtHandler(e)}/>
              <CalcButton value={6} onClick={e => evtHandler(e)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={e => evtHandler(e)}/>
              <CalcButton value={8} onClick={e => evtHandler(e)}/>
              <CalcButton value={9} onClick={e => evtHandler(e)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={e => evtHandler(e)}/>
              <CalcButton value={"*"} onClick={e => evtHandler(e)}/>
              <CalcButton value={"-"} onClick={e => evtHandler(e)}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={e => evtHandler(e)}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
