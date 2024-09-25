'use client'
import {Controller, useForm} from "react-hook-form";
import axios from 'axios';

import {Button, TextField} from "@radix-ui/themes";
import {HiMiniMagnifyingGlass} from "react-icons/hi2";
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
                    await axios.post('/api/issues', data)
                        .then(response => {
                            console.log(response);
                            router.push('/issues');
                        }).catch(error => console.log(error))
                })
            }
        >
            <TextField.Root
                placeholder="Title..."
                {...register("title", {required: true})}
            >
                <TextField.Slot>
                    <HiMiniMagnifyingGlass/>
                </TextField.Slot>
            </TextField.Root>
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