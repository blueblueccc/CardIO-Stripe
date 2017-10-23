
import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'rgba(0,0,0,0)',
    }
};

export { Card };
