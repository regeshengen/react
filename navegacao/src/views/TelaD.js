import React from 'react'
import { View, Button } from 'react-native'
import TextCenter from '../components/TextCenter'

export default props => {
    return(
        <View style={{ flex: 1}}>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button title='Abrir' onPress={() => {
                    props.navigation.openDrawer()
                }}></Button>
            </View>

            <TextCenter backgroundColor='#33fa70' TextColor="#000">
                Tela D
            </TextCenter>

        </View>
        
    )
}