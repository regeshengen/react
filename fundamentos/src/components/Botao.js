import React from 'react'
import { Button } from 'react-native'

export default () => {

    function executar() {
        alert("Botão pressionado")
    }

    return (
        <Button title="Executar" onPress={executar}></Button>
    )
}