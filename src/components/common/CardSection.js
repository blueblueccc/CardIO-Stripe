
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderStyle: 'dotted',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'white',
    }
};

export { CardSection };
