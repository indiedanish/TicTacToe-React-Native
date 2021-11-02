import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect} from "react";
import { StyleSheet, Text, View , TouchableOpacity } from "react-native";
import Box from "./components/Box";

export default function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [IsXChance, setIsXChance] = useState(true);
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false)

  function PlayBox(no) {
    return (
      <Box
        no={no}
        boxInfo={{ boxes, setBoxes }}
        chance={{ IsXChance, setIsXChance }}
        winner={winner}
      />
    );
  }


  const winPos = [

    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]

  ]

  function calWin () {


    for (var i = 0 ; i <winPos.length ; i++) {
      if ( boxes[winPos[i][0]] !== null 
        && boxes[winPos[i][0]] === boxes[winPos[i][1]] 
        && boxes[winPos[i][0]] === boxes[winPos[i][2]]   )
      
      {
        setWinner(boxes[winPos[i][0]])
        return

      }

    }

  }

  function checkDraw() {
     for (let i  = 0; i < boxes.length; i++) { 

      if ( boxes[i] === null ) {setDraw(false) ;break; }
      else {setDraw (true); break;}

     } 

     
  }

  function reset(){
   

    setBoxes(Array(9).fill(null))
    setIsXChance(true)
    setWinner(null)
    setDraw(false)
  }

  useEffect(()=> {
 checkDraw()
    calWin()
   

  } , [IsXChance] )


  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="gray" />

      <TouchableOpacity onPress={reset}  >
         <Text style={styles.resetButton} > Reset </Text>
         </TouchableOpacity> 

      <View style={styles.Banner} >

        {winner !== null ?
        <Text  > Winner: {winner} </Text>
        : <Text>  { draw === false ? <Text> {IsXChance ? 'X' : 'O'} </Text> : <Text>Draw</Text>  }  </Text> 
         
        }

      </View>

      <View style={styles.playBoard}>
        <View style={styles.row}>
          {PlayBox(0)}
          {PlayBox(1)}
          {PlayBox(2)}
        </View>

        <View style={styles.row}>
          {PlayBox(3)}
          {PlayBox(4)}
          {PlayBox(5)}
        </View>

        <View style={styles.row}>
          {PlayBox(6)}
          {PlayBox(7)}
          {PlayBox(8)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    flexDirection: 'row',
  },

  playBoard: {



  },
});
