import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Box({ no, boxInfo, chance, winner }) {
  const { IsXChance, setIsXChance } = chance;
  const { boxes, setBoxes } = boxInfo;
  const player = IsXChance ? 'X' : 'O';

  return (
    <TouchableOpacity onPress={() => {


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
            <Entypo name='cross' size={84} color="#9e3700" />
           : 
            <Entypo name='circle' size={80} color="#9e3700" />
          }
        </View>
      : 
        <View style={styles.boxView}></View>
      }
    </TouchableOpacity>
  );
    }

const styles = StyleSheet.create({
  boxView: {
    minHeight: 110,
    minWidth: 110,
    borderWidth: 2,
    borderColor: "#822d00",
    justifyContent: "center",
    alignItems: "center",
  },



});
