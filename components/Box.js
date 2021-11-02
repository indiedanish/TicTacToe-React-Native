import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Box({ no, boxInfo, chance, winner }) {
  const { IsXChance, setIsXChance } = chance;
  const { boxes, setBoxes } = boxInfo;
  const player = IsXChance ? 'X' : 'O';

  return (
    <TouchableWithoutFeedback onPress={() => {


        if(boxes[no] === null && winner === null ){

            setBoxes ((preBox) => {

                preBox[no] = player;
                return preBox;
            })
            
            setIsXChance((preCh) => !preCh )

            
        }


    } } >


      {boxes[no] !== null ? 
        <View style={styles.boxView}>
          {boxes[no] === 'X' ? 
            <Entypo name='cross' size={84} color="black" />
           : 
            <Entypo name='circle' size={84} color="black" />
          }
        </View>
      : 
        <View style={styles.boxView}></View>
      }
    </TouchableWithoutFeedback>
  );
    }

const styles = StyleSheet.create({
  boxView: {
    minHeight: 110,
    minWidth: 110,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
});
