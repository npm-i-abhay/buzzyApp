// imports from dependancies ==========
import React, { useState, useEffect } from 'react';
import { Button, View, Text,ScrollView, FlatList, Pressable, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styled from 'styled-components/native';
import axios from 'axios';

// Component imports===============
import TaskBtn from '../comps/taskBtn';
import NavBar from '../comps/NavBar'
import IndividualEventCard from '../comps/IndividualEventCard';



// Data imports===============
import talktoserver from "../api/talktoserver"
import { SelectedDay } from '../data/test';
import { Configurations } from '../PropConfig/Props'
import { groupsData } from '../data/tasks';
import {coursesData} from '../data/tasks';
import {eventsData} from '../data/tasks'
import {category} from '../data/category'
import { ToDate } from '../comps/ToDate';
import { Events } from '../data/Events';
import {GroupEventCard} from '../comps/GroupEventCard';


const colors = Configurations.colors;
const secCol = colors.secCol;
const accent = colors.butCol;


const Wrapper =styled.ScrollView`

`



const TaskButtonWrapper = styled.View`
justify-content:center
margin:3.5%;
margin-top:5%;
margin-bottom:5%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
`
const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92%;
height:100%
width:100%
left:5%
`
const TaskBtnCont = styled.View`
flex-direction:row;
padding:20px;
justify-content:space-evenly;
`

// ========================agenda comments===========================
const selectedDay = SelectedDay
const primCol = Configurations.colors.primCol



// ========================agenda comments============================


const DashboardScreen = ({navigation }) => {
  const [newDaysObject, setNewDaysObject]= useState({})
  const [dbResult, setDbResult] = useState()

  useEffect (()=>{

      var loadTaskList = {
        op: 'get_tasks_ls',
        user_id: '1',
    }
    
      talktoserver(loadTaskList).then((rd) => {
        setDbResult(rd)
      })

  },[dbResult])
  
  useEffect (()=>{
  
  
    const GetDays = async ()=>{
const whatever = {
  
  day:'2021-11-10',
  start:'2021-11-10 11:30',
  end:'2021-11-10 12:30',
  title:'something to test',
  summary:'does it work?' 

}
    
console.log(dbResult)

        
        const daysObject = dbResult
        const newArray=[]

        for(let i=0; i<daysObject.length; i++)
        {
          newArray.push(daysObject[i].day)
        }      
        
        let newObject = newArray.map(function(obj)
        {
            return{
              [obj]:[]
            }
        })
      
        const eventDays = newObject.reduce(((r,c)=>Object.assign(r,c)),{})
  
        let dailyEvents = {}
  
        Object.keys(eventDays).forEach((day) => 
          {
            dailyEvents[day] =  
                {
                  marked: true, 
                  dotColor: colors.lightBg, 
                  selectedDotColor: 'red',             
                };
          }
        );
              
        
        // console.log(dailyEvents)
        setNewDaysObject(dailyEvents)
      }
      GetDays()
  },[])



  
  // state for switching between courses groups and events
  const [courses, setCourses] = useState(true);
  const [groups, setGroups] = useState(false);
  const [events, setEvents] = useState(false);

  // relatable code on line 286-294, 211-230
  
  const [selected, setSelected] = useState({});
  const [selectCol, setSelectCol] = useState('#F5F5E1')
  
  
  
  const onDayPress = day => {
    
  
    //  const exportDate = day.dateString
    //  console.log("hey this is the date ", exportDate)

    setSelected(day.dateString);

    console.log(day.dateString)  
    console.log(selected)
    
    if (selected === day.dateString)
    {
      setSelectCol(accent)
      navigation.navigate('Agenda', {day: selected})
    }
    else
    {
      setSelectCol('#F5F5E1')
    }
    

  };


  const coursePress =()=> 
  {
    setCourses(true);
    setGroups(false);
    setEvents(false);
  }
  
  const groupPress =()=> 
  {
    setCourses(false);
    setGroups(true);
    setEvents(false);
  }
  
  const eventPress =()=> 
  {
    setCourses(false);
    setGroups(false);
    setEvents(true);
  }



  return (
  
    <View style=
    {{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      backgroundColor: primCol
    }}>

      <Wrapper> 
    
      <ToDate/>
 
          
        <Calendar 

          
          theme=
          {{
            backgroundColor: '#ffffff',
            calendarBackground: '#94bdd4',
            textSectionTitleColor: 'black',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#F5F5E1',
            selectedDayTextColor: 'black',
            todayTextColor: 'white',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: '#ffffff',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: colors.secCol,
            indicatorColor: 'blue',
            // textDayFontFamily: 'monospace',
            // textMonthFontFamily: 'monospace',
            // textDayHeaderFontFamily: 'monospace',
            // textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            // textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}



          enableSwipeMonths={true}
        // onDayLongPress={()=>{setSelectCol('green')}}
          onDayPress={onDayPress}
            style=
              {{
                maxWidth: 400,
                width:400,
                height: 400,
              }}
      
            markedDates= {{
                
            ...newDaysObject,
                
            [selected]: 
              {
                  selected: true,
                  disableTouchEvent: false,
                  selectedColor: selectCol ,
                  selectedTextColor: 'black',
                  
              }

            
            
            }}
          />

          {/* functions on 211-230============= */}
        <TaskBtnCont>
        <View style={styles.shadows}> 
          <TaskBtn 
              taskNum={category.taskCategory.Course.taskNum} 
              taskCate={category.taskCategory.Course.taskCate}
              taskBtnColor={ courses ? colors.secCol : 'white' }
              textColor= {courses ? 'white' : colors.secCol }
              onBtnPress={coursePress}  
          />
        </View>  


        <View style={styles.shadows}>
          <TaskBtn 
              taskNum={category.taskCategory.Group.taskNum} 
              taskCate={category.taskCategory.Group.taskCate}
              taskBtnColor={ groups ? colors.secCol : 'white' }
              textColor= {groups ? 'white' : colors.secCol }

              onBtnPress={groupPress}   
          />
        </View>

        < View style={styles.shadows}>
          <TaskBtn 
              taskNum={category.taskCategory.Event.taskNum} 
              taskCate={category.taskCategory.Event.taskCate}
              taskBtnColor={ events ? colors.secCol : 'white' }
              textColor= {events ? 'white' : colors.secCol }
              onBtnPress={eventPress}  

          />
        </View>
        </TaskBtnCont>

          
      { courses ?
        <FlatList 
          contentContainerStyle={{ maxWidth:'100%'}}
          data = {coursesData}
          renderItem={({item})=> 
                <IndividualEventCard 
                  EventBackgroundColor="#EC8B1A"
                  EventTitle={item.EventTitle}
                  EventDescrip = {item.EventDescrip}
                  EventStartTime={item.EventStartTime}
                  EventDueTime = {item.EventDueTime}
                  IconDisplay="none" 
                  onCardPress=  {()=>{navigation.navigate('CourseInfo')}}
                  /> }
        /> : null
      }
      { groups ?
        <FlatList 
          contentContainerStyle={{ maxWidth:'100%'}}
          data = {groupsData}
          renderItem={({item})=> 
                <IndividualEventCard 
                  EventTitle={item.EventTitle}
                  EventDescrip = {item.EventDescrip}
                  EventStartTime={item.EventStartTime}
                  EventDueTime = {item.EventDueTime} /> }
        /> : null
      }
      { events ?
        <FlatList 
          contentContainerStyle={{ maxWidth:'100%'}}
          data = {eventsData}
          renderItem={({item})=> 
                <IndividualEventCard 
                  EventTitle={item.EventTitle}
                  EventDescrip = {item.EventDescrip}
                  EventStartTime={item.EventStartTime}
                  EventDueTime = {item.EventDueTime}
                  IconDisplay="none" /> }
        /> : null
      }
        {/* <IndividualEventCard EventBackgroundColor={colors.accColOne}/> */}
          
    </Wrapper>
    
      <NavBarCon>
          <NavBar/>
      </NavBarCon>

    </View>
   

  );
}

const styles = StyleSheet.create({

  shadows: 
    {
      shadowColor: '#5B7797',
      shadowOffset: {width: 10, height: 8},
      shadowOpacity: 1,
      shadowRadius: 7,
    }
 
});

export default DashboardScreen


// {

                
                  
//   newDaysObject,
//   // '2021-11-18': {marked: true, dotColor: 'red', activeOpacity: 0},
//           [selected]: {
//             selected: true,
//             disableTouchEvent: false,
//             selectedColor: selectCol ,
//             selectedTextColor: 'black'
//           }
//   }