import React, { useState} from 'react'
import { Text, Button } from 'react-native'
import Style from './style'

export default props => {

    const [numero, setNumero] = useState(props.inicial)
    const inc = () => setNumero(numero + props.valor)
    const dec = () => setNumero(numero - props.valor)

    return (
        <>
            <Text style={Style.h1}>{numero}</Text>
            <Button title="Incrementar" onPress={inc}></Button>
            <Button title="Decrementar" onPress={dec}></Button>
        </>
    )
}