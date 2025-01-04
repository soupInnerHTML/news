import {Box, Center, Text} from '@chakra-ui/react';
import React from 'react';

export const Empty = () => {
    return (
        <Center height="100vh" width="100%">
            <Box textAlign="center">
                <Text fontSize="xl" mb="4">
                    No news available
                </Text>
            </Box>
        </Center>
    );
};

