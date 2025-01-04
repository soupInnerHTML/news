import {TNews} from "@/types/news";

export interface NewsFormProps {
    method: 'add' | 'update'
}

export type NewsFormState = {fields: NewsFormFields, errors: NewsFormErrors}
export type NewsFormFields = Omit<TNews, 'date' | 'id'>
export type NewsFormErrors = NewsFormFields