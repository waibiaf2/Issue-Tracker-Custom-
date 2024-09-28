import React from 'react';
import {Button} from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";

import {Table} from "@radix-ui/themes";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import delay from "delay";
import IssueActions from "@/app/issues/IssueActions";

const IssuesPage = async () => {

    const issues = await prisma.issue.findMany({});

    await delay(2000);

    return (
        <div className="space-y-4">

            <IssueActions/>

            <Table.Root variant="surface">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>
                            Title
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell
                            className="hidden md:table-cell"
                        >
                            Status
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>
                            Description
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell
                            className="hidden md:table-cell"
                        >
                            Created At
                        </Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        issues.map((issue) =>
                            <Table.Row key={issue.id}>
                                <Table.RowHeaderCell>
                                    <Link href={`/issues/${issue.id}`}>
                                        {issue.title}
                                        <div className="block md:hidden">
                                            <IssueStatusBadge status={issue.status}/>
                                        </div>
                                    </Link>
                                </Table.RowHeaderCell>
                                <Table.RowHeaderCell
                                    className="hidden md:table-cell"
                                >
                                    <IssueStatusBadge status={issue.status} />
                                </Table.RowHeaderCell>
                                <Table.Cell>
                                    {issue.description}
                                </Table.Cell>
                                <Table.Cell
                                    className="hidden md:table-cell"
                                >
                                    {issue.createdAt.toLocaleDateString('en-UK')}
                                </Table.Cell>
                            </Table.Row>
                        )
                    }
                </Table.Body>
            </Table.Root>

        </div>
    );
};

export default IssuesPage;