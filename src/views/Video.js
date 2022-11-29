import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function VideoPlayer(urls) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [pause, setPause] = useState(false)
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: urls.route.params.urls,
                }}
                useNativeControls={true}
                resizeMode="contain"
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: '#8492A6',
        alignItems: 'center'
    },
    buttons: {
        backgroundColor: '#ffffff',

    },
    video: {
        width: '100%',
        marginTop: 80,
        height: 400,
    }
});