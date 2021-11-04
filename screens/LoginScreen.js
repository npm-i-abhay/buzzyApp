import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar';
import TaskCardArea from '../comps/taskCardArea';
import InputField from '../comps/InputField'
import RecBtn from '../comps/RecBtn';


const LogoWrapper = styled.View`
margin-left:10px;
margin-top:8%;
margin-bottom:8%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
justify-content:space-between;
width:75%;
height:150px
`
const TaskButtonWrapper = styled.View`
margin:3%
`
const CourseEventCardWrapper = styled.View`
height:100%;

`
const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92.5%;
height:100%
width:100%
left:5%
`

const TaskCardsWrapper = styled.ScrollView`
position:absolute;
z-index:2;
top:300px
height:52.5%;
width:100%;
`



const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [password, setPassword] = useState('');
  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <AppHeader text="Welcome" display="none"/>
      <LogoWrapper>
        <Image source={require("../assets/honeycomb.png")} style={styles.honeycomb} />
        <Image source={require("../assets/BuzzyBeeLogo.png")} style={styles.logo} />
        <Text style={styles.Logoin}>Login</Text>
        <Text style={styles.Logoin}>Login</Text>
      </LogoWrapper>
      <TaskCardArea style={{ position: 'Iabsolute', zIndex: 3 }} />
      <View style={styles.inpuTable}>
      <Text style={styles.title2}>Email</Text>
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: '6%',
          borderBottomWidth: 1,

        }}
        leftIcon='email'
        placeholder='username@my.bcit.ca'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.title2}>Password</Text>
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: '8%',
          borderBottomWidth: 1,
        }}
        leftIcon='lock'
        placeholder='*************'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType='password'
        rightIcon={rightIcon}
        value={password}
        onChangeText={text => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      <Text style={styles.title3}>Forgot Password?</Text>
      <Text style={styles.button}>
      <RecBtn text="Login" height="75px"   width="200px"/>
         </Text>
      <Text style={styles.title3}>OR</Text>
  </View>
  <Image source={require("../assets/D2L.png")} style={styles.D2L} />
  <View style={styles.container3}>
      <Text style={styles.title4}>Don’t have an account yet?</Text>
      <Text style={styles.title5} onPress={() => navigation.navigate('SignUp') }>Signup</Text>
      <Text style={styles.title5} onPress={() => navigation.navigate('Taskboard') }>Taskdoashboard</Text>
        </View>
    </View>
  );
}


export default LoginScreen

const styles = StyleSheet.create({
  inpuTable: {
    position: 'absolute',
    zIndex: 4,
    fontSize:55,
    fontWeight:'bold',
    color:'yellow',
    marginLeft:-30,
    marginTop:350
  },
  Logoin: {
    position: 'absolute',
    zIndex: 3,
    fontSize:55,
    fontWeight:'bold',
    color:'yellow',
    marginLeft:-30,
    marginTop:90
  },
  title2: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    // marginLeft:20,
    alignSelf: 'flex-start',
    paddingBottom:5,
  },
  title3: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    // marginLeft:20,
    alignSelf: 'center',
    paddingBottom:5,
  },
  button: {
    flex:1,
    textAlign:'center',
    marginTop:20
    
  },
  logo: {
    position: 'absolute',
    width: 150,
    height: 150,
    zIndex: 3,
    marginLeft:200,
    // marginTop:0,
  },
  honeycomb: {
    marginLeft: -60,
    marginTop: -35,
  },
  D2L: {
    width: 50,
    height:  50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 740,
    position: 'absolute',
    zIndex: 4,
  },
  container3: {
    position: 'absolute',
    zIndex: 4,
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 810,
  },
  title4: {
    fontSize: 18,
    fontWeight: '400',
    color: '#B4B4B4',
    alignSelf: 'center',
    paddingBottom: '-17.5%',
 
  },
  title5: {
    fontSize: 18,
    fontWeight: '700',
    color: 'orange',
    marginLeft:10,
    alignSelf: 'center',
    paddingBottom: '-17.5%',
 
  },

});