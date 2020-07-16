import React from 'react'
import { Text } from 'react-native'
import Style from './../style'

export default props => {
    return (
        <>
        <Text style={Style.h1}>{props.a}</Text>
        <Text style={Style.h1}>{props.b}</Text>
        </>
    )
}