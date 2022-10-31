import React, {useState} from 'react';

import { View, StyleSheet } from 'react-native';
import themes from '../themes/padrao'
import { Video } from 'expo-av';



const VideoComp =({name}) => {
    const video = React.useRef(null);
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://mind-app-bucket.s3.sa-east-1.amazonaws.com/videos/cc274c5327a7c64b6ccb84d63d5137d3-como_controlar_a_ansiedade.mp4',
                }}
                useNativeControls={true}
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    )
}

export default VideoComp


const styles = StyleSheet.create({
    video: {
        width: '100%',
        marginTop: 80,
        height: 400,
    }
});