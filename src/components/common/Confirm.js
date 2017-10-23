import React from 'react'
import { Text, View, Modal, TouchableWithoutFeedback } from 'react-native'
import { Button } from './Button'

const Confirm = ({ error, visible, onAccept }) => {
    const { containerStyle, textStyle } = styles
    return (
        <Modal
            visible={visible}
            transparent
            animationType="none"
            onRequestClose={() => {}}
        >
            <TouchableWithoutFeedback>
                <View style={containerStyle}>
                    <View style={{backgroundColor: 'white', marginLeft: 55, marginRight: 55}}>
                        <Text style={textStyle}>
                            {error}
                        </Text>
                        <Button onPress={onAccept}>Continue</Button>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = {
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,.50)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { Confirm }
