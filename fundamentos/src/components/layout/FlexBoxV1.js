import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'
 
export default props => {
      return(
         <View style={style.FlexV1}>
            <Quadrado cor={'#FFC'}></Quadrado>
            <Quadrado cor={'#F00'}></Quadrado>
            <Quadrado cor={'#50d1F6'}></Quadrado>
            <Quadrado cor={'#8312ed'}></Quadrado>
            <Quadrado cor={'#FF801A'}></Quadrado>
            <Quadrado cor={'#F00'}></Quadrado>
            <Quadrado></Quadrado>
         </View>
      )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000'
    }
})