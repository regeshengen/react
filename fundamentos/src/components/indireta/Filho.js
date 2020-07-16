import React from 'react'
import { Text, Button } from 'react-native'
import Style from './../style'

export default props => {

    function gerarNumero(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }

    return(
        <Button
            title="executar"
            onPress={function() {
                const n = gerarNumero(props.min, props.max)
                props.funcao(n, 'O valor é: ')
            }}
        />
    )
}