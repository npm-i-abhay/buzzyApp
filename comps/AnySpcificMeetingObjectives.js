import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const AnySpcificMeetingObjectives = ({
    meetingObjectives,
    setMeetingObjectives,
}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name="checkmark-sharp" size={18} color="white" />
                <Ionicons name="checkmark-sharp" size={18} color="white" />
                <Text style={{color: '#fff'}}>Any specific meeting objectives?</Text>
            </View>
            <View style={styles.midBox}>
                <TextInput
                    value={meetingObjectives}
                    onChangeText={setMeetingObjectives(meetingObjectives)}
                />
                <Text style={{color: '#dbdbdb', padding: 10}}>Type any objectives your team should complete during this meeting!</Text>
            </View>
        </View>
    )
}

export default AnySpcificMeetingObjectives

const styles = StyleSheet.create({
    midBox: {
        width: '90%',
        height: 200,
        flexDirection: 'row',
        alignItems: 'flex-end',
        // justifyContent: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 15,
    }
})