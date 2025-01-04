import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {TNews, TNewsId, TNewsState} from "@/types/news";
import {v4 as uuid} from 'uuid'

const initialState: TNewsState = {
    news: [],
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addNews: (state, action: PayloadAction<Omit<TNews, 'date' | 'id'>>) => {
            const now = new Date()
            state.news.push({
                ...action.payload,
                id: uuid(),
                date: now.getTime(),
            });
        },
        updateNews: (state, action: PayloadAction<Omit<TNews, 'date'>>) => {
            const index = state.news.findIndex((news) => news.id === action.payload.id);
            if (index !== -1) {
                state.news[index] = {
                    ...action.payload,
                    date: state.news[index].date,
                };
            }
        },
        deleteNews: (state, action: PayloadAction<TNewsId>) => {
            state.news = state.news.filter((news) => news.id !== action.payload);
        },
    },
});

export const { addNews, updateNews, deleteNews } = newsSlice.actions;

export default newsSlice.reducer;
