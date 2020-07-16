import React from 'react'
import { Text } from 'react-native'
import Style from './../style'

import Filho from './Filho'

export default props => {

    let x = 50
    let y = 330

        return(
            
            <>
            <Filho a={x}></Filho>
            <Filho b={y}></Filho>
            </>

        )

}