import * as React from 'react';
import { Avatar, HStack, Center, NativeBaseProvider } from 'native-base';

const Example = () => {
    return (
        <NativeBaseProvider>
            <HStack justifyContent="center" >
                <Avatar alignSelf="center" bg="green.500" size="2xl" source={{
                    uri:  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        TS
                </Avatar>
            </HStack>
        </NativeBaseProvider>
    )
}

export default Example