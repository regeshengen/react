import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'
 
export default props => {
      return(
         <View style={style.FlexV3}>
            <Quadrado cor={'#FFC'}></Quadrado>
            <Quadrado cor={'#F00'}></Quadrado>
            <Quadrado cor={'#50d1F6'}></Quadrado>
            <Quadrado cor={'#8312ed'}></Quadrado>
            <Quadrado cor={'#FF801A'}></Quadrado>
            <Quadrado cor={'#F00'}></Quadrado>
         </View>
      )
}

const style = StyleSheet.create({
    FlexV3: {
        width: '100%',
        height: 450,
        flexDirection: "row",
        alignItems: 'baseline',
        justifyContent: 'space-evenly',
        backgroundColor: '#000'
    }
})