import React from 'react'
import { View } from 'react-native'
import Primeiro from './components/Primeiro'
import Comp, { Comp1, Comp2 } from './components/Multi'

export default function() {
    return (
        <View>
            <Primeiro></Primeiro>
            <Comp></Comp>
        </View>
    )
}