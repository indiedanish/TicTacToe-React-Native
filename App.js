import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect} from "react";
import { StyleSheet, ImageBackground, Image,Text, View , TouchableOpacity } from "react-native";
import Box from "./components/Box";
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

      if ( boxes[i] === null ) {setDraw(false) ;break ; }
      else {setDraw(true) }
      

     } 
     

     
  }

  function reset(){
   

    setBoxes(Array(9).fill(null))
    setIsXChance(true)
    setWinner(null)
    setDraw(false)
  }

  useEffect(()=> {
    
    calWin()
    checkDraw()
    
   

  } , [IsXChance] )



  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="orange" />
      <ImageBackground source={require("./Background.jpg" )} resizeMode="cover" style={styles.stretch}>

 
      <View >

        {winner !== null ?
        <Text style={styles.Banner} > Winner {winner} </Text>
        : <Text style={styles.Banner} >    { draw === false ? <Text> { IsXChance ? 'Chance X'  : 'Chance O'} </Text> : <Text>Draw</Text>  }  </Text> 
         
        }

      </View>

      <View >
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
      <TouchableOpacity onPress={reset}  >
         <Text style={styles.resetButton} >   <MaterialCommunityIcons name="restart" size={80} color="#822d00" /> </Text>
         </TouchableOpacity> 

      </ImageBackground>
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


  stretch: {        flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    
  
  }
    ,

  Banner: {
 
    fontWeight: 'bold',
    color: '#efe3dc',
    fontSize: 40,
    margin: 20


  },

  resetButton: {
    fontWeight: 'bold',
    color: '#ffe7db',
    fontSize: 50,
    marginTop: 60,
    paddingTop: 40,

  

  }
});
