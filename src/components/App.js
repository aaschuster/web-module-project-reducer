import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, {initialState} from '../reducers/index';
import {changeOperation, applyNumber, clearDisplay} from "../actions/index"


function App() {
const [state, dispatch] = useReducer(reducer, initialState); 

function evtHandler(val) {

  if(val === "CE") dispatch(clearDisplay());
  else if(typeof val === "string") dispatch(changeOperation(val));
  else dispatch(applyNumber(val));
  
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
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => evtHandler(1)}/>
              <CalcButton value={2} onClick={() => evtHandler(2)}/>
              <CalcButton value={3} onClick={() => evtHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => evtHandler(4)}/>
              <CalcButton value={5} onClick={() => evtHandler(5)}/>
              <CalcButton value={6} onClick={() => evtHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => evtHandler(7)}/>
              <CalcButton value={8} onClick={() => evtHandler(8)}/>
              <CalcButton value={9} onClick={() => evtHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => evtHandler("+")}/>
              <CalcButton value={"*"} onClick={() => evtHandler("*")}/>
              <CalcButton value={"-"} onClick={() => evtHandler("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => evtHandler("CE")}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
