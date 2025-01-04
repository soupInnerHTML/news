import React from 'react';
import {Avatar as ChakraAvatar} from '@/components/ui/avatar'

export const Avatar = () => {
    return (
        <ChakraAvatar
            src="https://bit.ly/dan-abramov"
            position={'fixed'}
            size={'xl'}
            right={4}
            top={4}
            cursor={'pointer'}
            zIndex={1000}
        />
    );
};

