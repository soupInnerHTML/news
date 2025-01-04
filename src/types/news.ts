export interface TNews {
    id: TNewsId;
    title: string;
    content: string;
    date: number;
}

export type TNewsId = string

export interface TNewsState {
    news: TNews[];
}