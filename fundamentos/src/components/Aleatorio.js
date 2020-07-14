import React from 'react'
import {Text} from 'react-native'

export default (props) => {
    const delta = props.max - props.min + 1
    const aleatorio = parseInt(Math.random() * delta) + props.min
    return (
        <Text>O valor aleatório gerado entre {props.min} e {props.max} é: {aleatorio}</Text>
    )
}