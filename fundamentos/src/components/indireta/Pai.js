import React, { Fragment, useState } from 'react'
import { Text } from 'react-native'
import Style from './../style'
import Filho from './Filho'


export default props => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)
    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }
    return(
        <Fragment>
            <Text style={Style.h1}>
                {texto}{num}
            </Text>
            <Filho min={1} max={100} funcao={exibirValor}>
                
            </Filho>
        </Fragment>
    )
}