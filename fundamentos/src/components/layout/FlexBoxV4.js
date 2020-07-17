import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
      return(
         <View style={style.FlexV4}>
             <View style={style.V1}></View>
             <View style={style.V2}></View>
             <View style={style.V3}></View>
         </View>
      )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#000'
    },
    V1: {
        flexGrow: 2,
        width: '100%',
        backgroundColor: '#FF801A'
    },
    V2: {
        flexGrow: 4,
        width: '100%',
        backgroundColor: '#8312ed'
    },
    V3: {
        flexGrow: 4,
        width: '100%',
        backgroundColor: '#50d1F6'
    }
})