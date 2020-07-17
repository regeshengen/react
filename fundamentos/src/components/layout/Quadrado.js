import React from 'react'
import { Text, View } from 'react-native'

export default props => {
    const tamanho = 50
    return (
        <View style={ {
            height: tamanho,
            width: tamanho,
            backgroundColor: props.cor || '#000'
        }}>

        </View>
    )
}