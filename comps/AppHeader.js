
import styled from "@emotion/styled-base";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import Styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons'; 


const CardCon = Styled.View`
width:${(props) => props.width};
height:${(props) => props.height};
background-color:${(props) => props.bgc};
justify-content:space-between;
align-items:center;
display:flex;
flex-direction:row;
padding-left:5%;
padding-right:5%;
`

const TextInput = Styled.Text`
font-size:24px;
text-align:center;
color:#ffffff;
`

const AppHeader = ({
  text = 'Settings',
  headColor = '#1E315C',
  height = '7.5%',
  width = '100%',
  onMenuPress = () => { },
  onBackPress = () => { },

}) => {
  return (
    <CardCon bgc={headColor}  height={height} width={width}>
<TouchableOpacity  onPress={onMenuPress}>
<Entypo name="arrow-with-circle-left" size={24} color="white" />
</TouchableOpacity>
<TextInput>{text}</TextInput>
<TouchableOpacity onPress={onBackPress}>
<Entypo name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
    </CardCon>
  );
};



export default AppHeader;