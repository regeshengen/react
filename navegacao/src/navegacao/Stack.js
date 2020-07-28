import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Stack = new createStackNavigator()

export default props => {
    return(
        <Stack.Navigator initialRoute="TelaA" screenOptions={{ headerShown: true}}>
            <Stack.Screen name="TelaA" options={{title: 'Informações iniciais'}}>
                {props => (
                    <PassoStack {...props} avancar="TelaB">
                        <TelaA></TelaA>
                    </PassoStack>
                )}
            </Stack.Screen>
            <Stack.Screen name="TelaB">
                {props => (
                    <PassoStack {...props} avancar="TelaC" voltar>
                        <TelaB></TelaB>
                    </PassoStack>
                )}
            </Stack.Screen>
            <Stack.Screen name="TelaC" component={TelaC} voltar></Stack.Screen>
        </Stack.Navigator>
    )
}