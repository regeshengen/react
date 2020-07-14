import React from 'react'
import { View } from 'react-native'
import Primeiro from './components/Primeiro'
import Comp, { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Botao from './components/Botao'
import Contador from './components/Contador'

import Style from './components/style'

export default function() {
    return (
        <View style={Style.global}>
            {/* <Primeiro></Primeiro>
            <Comp></Comp>
            <Comp1></Comp1>
            <Comp2></Comp2>
            <MinMax min={3} max={20}></MinMax>
            <Aleatorio min={50} max={1000}></Aleatorio>
            <Botao></Botao>*/}
            <Contador inicial={100} valor={10}></Contador>
        </View>
    )
}