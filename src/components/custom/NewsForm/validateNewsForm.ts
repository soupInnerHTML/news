import {NewsFormErrors, NewsFormFields, NewsFormState} from "@/components/custom/NewsForm/types";
import {newsFormInitialState} from "./initialFormState";

export const validateNewsForm = (fields: NewsFormFields): NewsFormState => {
    const errors: NewsFormErrors = {...newsFormInitialState.errors}

    for(const key in fields) {
        const fieldKey = key as keyof NewsFormErrors
        const field = fields[fieldKey]
        if(!field) {
            errors[fieldKey] = "The field is required";
        }
        if(field && !field.trim()) {
            errors[fieldKey] = "The field can't be just white spaces";
        }
    }

    return {errors, fields}
}