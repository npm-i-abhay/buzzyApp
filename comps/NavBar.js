
import React from "react";
import {View, TouchableOpacity, Dimensions} from 'react-native';
import Styled from "styled-components/native";
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const BarCont = Styled.View`
width:90%;
height:8%;
display:flex;
background-color:${(props) => props.backgroundColor};
flex-direction:row;
border-radius: 30px;
justify-content:space-evenly;
align-items:center;
`
const YellowCircle = Styled.View`
background-color:${(props) => props.circleBackgroundColor};
display:flex;
justify-content:center;
align-items:center;
height:100%;
width:16%;
top:-5%;
`



const NavBar = ({
    backgroundColor="#1E315C",
    circleBackgroundColor="#FCCA12",
    onCalendarPress = () => {},
    onHomePress = () => {},
    addEventPress = () => {},
    onCoursesPress = () => {},
    onGroupsPress = () => {},
}) => {
  return (
  <BarCont backgroundColor={backgroundColor}>
      <TouchableOpacity onPress={onCalendarPress}>
        <Foundation name="calendar" size={35} color="white"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={onHomePress}>
        <Foundation name="home" size={35} color="white"/>
      </TouchableOpacity>
      
      <YellowCircle 
      circleBackgroundColor={circleBackgroundColor}
      style={{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2
      }}>
        <TouchableOpacity onPress={addEventPress}>
            <AntDesign name="plus" size={35} color="black" />
        </TouchableOpacity>
      </YellowCircle>
      
      <TouchableOpacity onPress={onCoursesPress}>
        <FontAwesome5 name="book" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onGroupsPress}>
        <MaterialIcons name="group" size={35} color="white" />
      </TouchableOpacity>
  </BarCont>
  );
};



export default NavBar;