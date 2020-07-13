import React from 'react'
import { Text } from 'react-native'
import Style from './style'
import style from './style'

export default (props) => {
    console.warn(props)
    return (
        <Text style={style.h1}>
            O valor {props.max} é maior que o valor {props.min}
        </Text>
    )
}
