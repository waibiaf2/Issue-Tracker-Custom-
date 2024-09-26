'use client'
import {Controller, useForm} from "react-hook-form";
import axios from 'axios';

import {Button, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useRouter} from "next/navigation";

interface IssueForm {
    title: string;
    description: string;
}

const NewIssuesPage = () => {
    const {register, control, handleSubmit} = useForm<IssueForm>();
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
            <Button
                type="submit"
                size={"3"}
                className="hover:cursor-pointer"
            >
                Submit New Issue
            </Button>
        </form>
    );
};

export default NewIssuesPage;