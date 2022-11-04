import * as React from 'react';
import { Avatar, HStack, Center, NativeBaseProvider } from 'native-base';

const Example = ({ url }) => {
    return (
        <NativeBaseProvider>
            <HStack justifyContent="center" >
                <Avatar alignSelf="center" bg="green.500" size="2xl" source={{
                    uri: url
                }}>
                    TS
                </Avatar>
            </HStack>
        </NativeBaseProvider>
    )
}

export default Example