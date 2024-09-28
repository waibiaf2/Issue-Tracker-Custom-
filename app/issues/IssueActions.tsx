import React from 'react';
import {Button} from "@radix-ui/themes";
import Link from "next/link";

const IssueActions = () => {
    return (
        <div>
            <Button size={"4"}>
                <Link href="/issues/new">New Issue</Link>
            </Button>
        </div>
    );
};

export default IssueActions;