import {RootState} from "@/types/store";
import {TNews} from "@/types/news";

export const selectNews = (state: RootState) => state.news.news as TNews[]

export const selectSpecificNews = (id: string | undefined) => (
    (state: RootState)=> id ? state.news.news.find(news => news.id === id) : null
)