import React, {useActionState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {addNews, updateNews} from "@/store/slices/newsSlice";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, Heading, Input, Stack, Textarea} from "@chakra-ui/react";
import {Field} from "@/components/ui/field";
import {NewsFormProps, NewsFormState} from "./types";
import {selectSpecificNews} from "@/store/selectors/news";
import {navigation} from "@/constants/navigation";
import {validateNewsForm} from "./validateNewsForm";
import {newsFormInitialState} from "./initialFormState";

export const NewsForm: React.FC<NewsFormProps> = ({method}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {id} = useParams()
    const editableNews = useAppSelector(selectSpecificNews(id))
    useEffect(() => {
        if(!editableNews && method === 'update') {
            navigate(-1)
        }
    }, [editableNews, method])

    const onSubmit = (_: NewsFormState, formData: FormData) => {
        const title = formData.get("title") as string;
        const content = formData.get("content") as string;

        const state = validateNewsForm({title, content});
        if(state.errors.content || state.errors.title) {
            return state
        }

        const action = method === "add" ? addNews({ title, content}) : updateNews({ title, content, id: id! })
        dispatch(action);
        navigate(navigation.MAIN, {replace: true});

        return newsFormInitialState
    };
    const [{errors, fields: {title, content}}, formAction] = useActionState<NewsFormState, FormData>(onSubmit, {
        ...newsFormInitialState,
        fields: editableNews ?? newsFormInitialState.fields,
    });

    return (
        <Box w={{base: '100%', md: '50%', xl: '33%'}} mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
            <Heading as="h3" mb={6} textAlign="center" textTransform={'capitalize'}>
                {method} news
            </Heading>
            <form action={formAction}>
                <Stack gap={4}>
                    <Field label="Title" invalid={!!errors.title} errorText={errors.title}>
                        <Input
                            defaultValue={title}
                            type="text"
                            name="title"
                            placeholder="For example: Elon Musk launched a new rocket"
                        />
                    </Field>
                    <Field label="Content" invalid={!!errors.content} errorText={errors.content}>
                        <Textarea
                            // ошибка в типах внутри chakra-ui? https://www.chakra-ui.com/docs/components/textarea#autoresize
                            // @ts-ignore
                            autoresize
                            defaultValue={content}
                            name="content"
                            rows={10}
                            placeholder="For example: Elon Musk, the founder of SpaceX and Tesla,
                                has once again amazed the world with his ambitious plans.
                                At a press conference held yesterday, he spoke about a new project
                                for Mars colonization, which he believes could be a turning point
                                for humanity."
                        />
                    </Field>
                    <Button colorScheme="blue" width="full" type="submit" textTransform={'capitalize'}>
                        {method} news
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};
