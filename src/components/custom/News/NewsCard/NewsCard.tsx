import {Box, Card, Image, Skeleton} from "@chakra-ui/react"
import {Button} from "@/components/ui/button"
import React, {useMemo, useState} from "react";
import {TNews} from "@/types/news";
import {useAppDispatch} from "@/store/hooks";
import {deleteNews} from "@/store/slices/newsSlice";
import {FaEdit, FaTrashAlt} from "react-icons/fa";
import {areYouSure} from "@/utils/areYouSure";
import {useNavigate} from "react-router-dom";
import {navigation} from "@/constants/navigation";
import dayjs from "dayjs";
import {truncateText} from "@/utils/truncateText";

export const NewsCard: React.FC<TNews> = ({title, content, id, date}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const fromDate = useMemo(() => dayjs(date).fromNow(), [date])
    const truncatedTitle = useMemo(() => truncateText(title, 60), [title])
    const truncatedContent = useMemo(() => truncateText(content, 80), [content])

    return (
        <Card.Root
            flexBasis={{
                base: "100%",
                sm: `calc(${100 / 2}% - 1rem)`,
                md: `calc(${100 / 3}% - 1rem)`,
                lg: `calc(${100 / 4}% - 1rem)`,
            }}
        >
            <Card.Body gap="2" p={0} cursor={"pointer"}>
                <Box width={'100%'} height={'270px'} position={'relative'}>
                    {!isImageLoaded && (
                        <Skeleton height="270px" width="100%" position={'absolute'} rounded="md" />
                    )}
                    <Image
                        rounded="md"
                        width={'100%'}
                        height={'100%'}
                        src={"https://picsum.photos/800/800?seed=" + id}
                        onLoad={() => setIsImageLoaded(true)}
                        alt={'News image'}
                    />
                </Box>
                <Box px={3}>
                    <Card.Title mt="2" title={title}>{truncatedTitle}</Card.Title>
                    <Card.Description title={content}>
                        {truncatedContent}
                    </Card.Description>
                </Box>
            </Card.Body>
            <Card.Footer p={3} pt={1}>
                <Card.Description>
                    {fromDate}
                </Card.Description>
                <Button
                    bg={'red.500'}
                    _hover={{ bg: 'red.600' }}
                    variant="outline"
                    onClick={() => areYouSure(() => dispatch(deleteNews(id)), "Are you sure you want to delete the news?")}
                    size="sm"
                    ml={'auto'}
                >
                    <FaTrashAlt />
                </Button>
                <Button
                    onClick={() => navigate(navigation.generateEditPath(id))}
                    bg={'blue.500'}
                    _hover={{ bg: 'blue.600' }}
                    variant="outline"
                    size="sm"
                >
                    <FaEdit />
                </Button>
            </Card.Footer>
        </Card.Root>
    )
}
