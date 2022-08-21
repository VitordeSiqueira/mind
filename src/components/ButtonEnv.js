import React from 'react'
import { StyleSheet, Text} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'


export function ButtonEnv({title, active=false, ...rest}){
return (
    <RectButton
            style={[
                styles.container,
                active && styles.containerActive
            ]}
            {...rest}
        >

            <Text style={[
                    styles.text,
                    active && styles.textActive
                ]}>
                { title }
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 40,
        width: 76,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 5,
        margin: 22
    },
    containerActive: {
        backgroundColor: '#505050'
    },
    text: {
        color: '#505050',

    },
    textActive: {

        color: '#fff',
    }
})

export default ButtonEnv