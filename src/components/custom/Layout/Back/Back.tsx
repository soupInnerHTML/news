import React from 'react';
import {Button} from "@chakra-ui/react";
import {useLocation, useNavigate} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import {navigation} from "@/constants/navigation";

export const Back = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    return (
        <Button
            opacity={pathname === navigation.MAIN ? 0 : 1}
            position="fixed"
            left={4}
            top={4}
            borderRadius="full"
            size="lg"
            boxShadow="md"
            colorScheme="teal"
            zIndex={1000}
            onClick={() => navigate(-1)} // Переход к предыдущей странице
        >
            <FiArrowLeft />
        </Button>
    );
};

