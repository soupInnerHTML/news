import React from 'react';
import {useAppSelector} from "@/store/hooks";
import {selectNews} from "@/store/selectors/news";
import {Flex} from "@chakra-ui/react";
import {NewsCard} from "./NewsCard";
import {Empty} from "@/components/custom/Empty";
import {AddNewsButton} from "./AddNewsButton";

export const News: React.FC = () => {
    const news = useAppSelector(selectNews);
    return (
        <Flex p={4} gap={4} wrap="wrap" width={'100%'} justifyContent={{base: 'center', sm: 'flex-start'}}>
            {news.length ? news.map((newsItem) => <NewsCard {...newsItem} key={newsItem.id} />) : <Empty />}
            <AddNewsButton />
        </Flex>
    );
};