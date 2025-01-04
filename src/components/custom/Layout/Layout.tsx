import { Container } from '@chakra-ui/react';
import React, {PropsWithChildren} from 'react';
import {Avatar} from "./Avatar";
import {Back} from "./Back";

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <Container centerContent position="relative">
            <Back />
            <Avatar />
            {children}
        </Container>
    );
};

