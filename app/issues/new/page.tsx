'use client'
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import axios from 'axios';
import {useRouter} from "next/navigation";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import {createIssueSchema} from "@/app/validationsSchemas";
import {Button, Spinner, TextField} from "@radix-ui/themes";
import ErrorMessage from "@/app/components/ErrorMessage";


type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuesPage = () => {

    const {
        register,
        control,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });

    const router = useRouter();

    return (
        <form
            className="max-w-xl space-y-4"
            onSubmit={
                handleSubmit(async (data) => {
                    try {
                        await axios.post('/api/issues', data)
                        router.push("/issues");
                    } catch (error) {
                        console.error(error);
                    }
                })
            }
        >
            <TextField.Root
                placeholder="Title..."
                {...register("title", {required: true})}
            />
            <ErrorMessage>
                {errors.title?.message}
            </ErrorMessage>
            <Controller
                name="description"
                control={control}
                render={({field}) =>
                    <SimpleMDE
                        {...field}
                        placeholder="Description..."
                    />
                }
            />
            <ErrorMessage>
                {errors.title?.message}
            </ErrorMessage>
            <Button
                disabled={isSubmitting}
                type="submit"
                size={"3"}
                className="hover:cursor-pointer"
            >
                { isSubmitting ? <Spinner /> : "" }
                Submit New Issue
            </Button>
        </form>
    );
};

export default NewIssuesPage;