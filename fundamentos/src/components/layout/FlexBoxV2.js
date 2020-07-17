import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'
 
export default props => {
      return(
         <View style={style.FlexV2}>
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
    FlexV2: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        backgroundColor: '#000'
    }
})