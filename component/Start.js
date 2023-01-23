import {StyleSheet, Text, View,TextInput } from "react-native"
import React, { useState } from "react"

const PizzaTranslator = () => {
    const [text, setText] = useState('')
    return (
        <View style={{padding: 10}}>
            <TextInput
            style={{height:40}}
            placeholder="Type here to translate"
            onChangeText={newText => setText(newText)} 
            defaultValue = {text}
            />          
            <Text>
            {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
        
        </View>
    )
}

export default PizzaTranslator

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColour: 'lightblue',
        alignitems: 'center',
        justifycontent: 'center'
    },
    heading:{
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        fontweight: 'bold',
        color: 'yellow',
        backgroundColour: 'black'
    }
})