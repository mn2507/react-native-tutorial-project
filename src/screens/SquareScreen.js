import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 30;

const reducer = (state, action) => { 
// state === {red: number, green: number, blue: number}
// action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
// action: how should we change the state object (e.g increase/decrease red/blue, etc)

switch (action.colorToChange) {
    case 'red':
        //dont do: state.red = state.red - 15;
        return {...state, red: state.red + action.amount};
     /* return {green: 0, blue: 0, red: state.red + action.amount}
        a new property has been redefined for red on the right side
       "red: 0" had been overwritten by the "red:" value, so the red's value in state gets deleted
     */

        /*  "{}"        : create a new object
            "...state"  : take all the existing properties out of the state object, 
                          and copy-paste them into this new object
            "red:"      : overwrite the existing red property
            "state.red + action.amount" : new value for red

            **No change has been made to the original STATE object**
        */
    case 'green':
    case 'blue':
    default:
}
};

const SquareScreen = () => {

/*const reducer = (state) => {
    //this implementation will easily be confused as there'll be 2 "state" variables 
      within the component
      Hence, define reducer function outside the component
}*/

    const [state,dispatch] = useReducer(reducer, {red:0, green:0, blue:0})
    //console.log(state) === {red:0, green:0, blue:0}
  return (
    <View>
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
