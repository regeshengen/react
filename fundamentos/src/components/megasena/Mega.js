import React, { Component } from 'react'
import { Text, TextInput, Button } from 'react-native'
import Style from './../style'
 
export default class Mega extends Component {

    state = {
        qtd: this.props.qtd
    }

    alterar = (nova_qtd) => {
        this.setState({qtd: +nova_qtd})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtd).fill().reduce( n => [...n, this.gerarNumeroNaoContido(n)], []).sort((a, b) => a-b)
        this.setState({ numeros })

    }

    render() {
        return (
            <>
                <Text style={Style.h1}>Gerador de Mega Sena</Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Quantidade"
                    value={`${this.state.qtd}`}
                    onChangeText={this.alterar}
                ></TextInput>
                <Button title='Gerar' onPress={this.gerarNumeros} ></Button>
                <Text>
                    {`${this.state.numeros}`}
                </Text>
            </>
        )
    }
}