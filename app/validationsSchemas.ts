import {z} from "zod";

export const createIssueSchema = z.object({
    title: z.string({message: "Title should be a string"})
        .min(1,{message: "Title should be at least 1 character"})
        .max(255, {message: "Title should be between 1 and 255 characters"}),
    description: z.string({message: "Description should be a strings"})
        .min(1),
})