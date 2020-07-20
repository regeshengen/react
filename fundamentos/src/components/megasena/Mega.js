import React, { Component } from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import Style from './../style'
import Numero from './Numero'
 
export default class Mega extends Component {

    state = {
        qtd: this.props.qtd,
        numeros: []
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

    exibirNumeros = () => {
        const number = this.state.numeros
        return number.map(num => {
            return <Numero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Style.h1}>Gerador de Mega Sena</Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderWidth: 1, fontSize: 20, textAlign: 'center', borderRadius: 10, marginTop: 15, backgroundColor: '#FFF'}}
                    placeholder="Quantidade"
                    value={`${this.state.qtd}`}
                    onChangeText={this.alterar}
                ></TextInput>
                <View style={{margin: 20}}><Button title='Gerar' onPress={this.gerarNumeros} ></Button></View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>{this.exibirNumeros()}</View>
            </>
        )
    }
}