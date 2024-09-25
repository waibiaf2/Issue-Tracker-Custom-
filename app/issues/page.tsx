import React from 'react';
import {Button} from "@radix-ui/themes";
import Link from "next/link";

const IssuesPage = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-4xl font-bold">Issues Page</h1>
            <Button size={"4"}>
                <Link href="/issues/new">New Issue</Link>
            </Button>


        </div>
    );
};

export default IssuesPage;