import React from 'react';
import {Button} from "@chakra-ui/react";
import {FiPlus} from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import {navigation} from "@/constants/navigation";

export const AddNewsButton: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Button
            position="fixed"
            right={4}
            bottom={4}
            colorScheme="blue"
            onClick={() => navigate(navigation.ADD)}
            borderRadius="full"
            size="lg"
            boxShadow="md"
        >
            <FiPlus/>
        </Button>
    );
};