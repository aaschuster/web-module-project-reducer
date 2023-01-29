# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

* The user presses the 1 button.
* This fires the onClick property on the element which fires the dispatch function which we recieved from the useReducer hook.
* Inside of that dispatch call is the addOne function which has been called (the addOne function was imported from the actions/index.js file).
* That addOne function returns an action (which is an object) containing the type of "ADD_ONE"
* That action is then passed into our reducer.
* The reducer moves through the switch based on the value of the action's type (action.type) and then returns an updated version of state with the total incremented.
* This state change fires a rerender so now...

* TotalDisplay shows the total plus 1.
