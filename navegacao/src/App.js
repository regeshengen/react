import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import TextCenter from './components/TextCenter'
import TelaA from './views/TelaA'
import TelaB from './views/TelaB'
import TelaC from './views/TelaC'

export default props => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <TelaA></TelaA>
            <TelaB></TelaB>
            <TelaC></TelaC>
        </SafeAreaView>
    )
}