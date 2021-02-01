import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 30;

const reducer = (state, action) => {
  /*
LEGEND:
    state === {red: number, green: number, blue: number}
    action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
    action: how should we change the state object (e.g increase/decrease red/blue, etc)

COMMUNITY CONVENTION:
    action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

NOTE: ALWAYS RETURN A VALUE FROM REDUCER! DO NOT END A STATEMENT WITH JUST "return;"
*/
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    /* 
    NOTE: Cannot have return expression inside ternary

    ALTERNATIVE TO TERNARY:

        if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state;
      }
      return { ...state, red: state.red + action.amount };
    

    NOTE: Dont do: state.red = state.red - 15;
      
    EXTRACTED MEANING:
        return {green: 0, blue: 0, red: state.red + action.amount}
        a new property has been redefined for red on the right side
        "red: 0" had been overwritten by the "red:" value, so the red's value in state gets deleted
        
    LEGEND:
        "{}"        : create a new object
        "...state"  : take all the existing properties out of the state object, 
                      and copy-paste them into this new object
        "red:"      : overwrite the existing red property
        "state.red + action.amount" : new value for red

        **No change has been made to the original STATE object**
    */
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  /*const reducer = (state) => {}
        this implementation will easily be confused as there'll be 2 "state" variables 
        within the component
        Hence, define reducer function outside the component
 */

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  //console.log(state) === {red:0, green:0, blue:0}
  //dispatch === run the reducer
  const { red, blue, green } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
          /* can also be written as `rgb(${state.red},${state.green},${state.blue})`
             rather than adding "const { red, blue, green } = state;"
          */
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
