import React from 'react'
import { View, Text, Button } from 'react-native'
import TextCenter from '../components/TextCenter'

export default props => {
    return(
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {props.voltar ? <Button title='Voltar' onPress={() => {props.navigation.goBack()}}></Button> : false }
                {props.avancar ? <Button title='Avançar' onPress={() => {props.navigation.navigate(props.avancar)}}></Button> : false }
            </View>
            <View style={{flex: 1}}>
                {props.children}
            </View>
        </View>
    )
}