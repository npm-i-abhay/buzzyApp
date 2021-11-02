
import styled from "@emotion/styled-base";
import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import Styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';
import AppTimePicker from "./AppTimePicker";
import NavBar from "./NavBar";
import RecBtn from "./RecBtn";

const CardCon = Styled.View`
width:${(props) => props.width};
height:${(props) => props.height}px;
background-color:${(props) => props.bgc};
justify-content:center;
align-items:center;
border-radius:${(props) => props.bradius}px;
display:flex;
flex-wrap:wrap;
flex-direction:row;
`
const TextCon = Styled.View`
display:flex;
height:50%;
width:300px;
justify-content:flex-start;
flex-direction:column;
flex-wrap:wrap;
`

const TextInput1 = Styled.Text`
font-size:24px;
color:#ffffff;
width:100%
padding-top:3%
marginLeft:0;
`
const TextInput2 = Styled.Text`
font-size:18px;
color:#ffffff;
padding-top:10px
`
const TextInput3 = Styled.TextInput`
width:100%;
color:#ffffff;
`
const PickerCon = Styled.Picker`
width:100%;
color:#ffffff;
`
const TimeCon = Styled.View`
height:10%;
`
const ButtonCon = Styled.View`
margin-top:10%
`

const TaskCardArea = ({

  text = 'Create Group',
  CardColor = '#35579F',
  bradius = 25,
  height = 600,
  width = "100%",
  onJoinPress = () => { },
  onCreatePress = () => { },
  onRecBtnPress=()=>{}
}) => {
  const [selectedValue, setSelectedValue] = useState("Courses")
  return (
    <CardCon bgc={CardColor} bradius={bradius} height={height} width={width}>

      
      
     



    </CardCon>
  );
};



export default TaskCardArea;