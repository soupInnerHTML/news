import {NewsFormState} from "@/components/custom/NewsForm/types";

export const newsFormInitialState: NewsFormState = {
    errors: {
        title: "",
        content: ""
    },
    fields: {
        title: "",
        content: ""
    }
}