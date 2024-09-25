import React from 'react';
import {Button} from "@radix-ui/themes";
import Link from "next/link";

const IssuesPage = () => {
    return (
        <div>
            <h1>Issues Page</h1>
            <Button>
                <Link href="/issues/new">New Issue</Link>
            </Button>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto asperiores impedit tempora. Cumque dignissimos, dolore dolores dolorum earum, eos et excepturi illum ipsum numquam quas quasi rerum velit vitae.
            </p>

        </div>
    );
};

export default IssuesPage;