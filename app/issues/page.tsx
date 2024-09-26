import React from 'react';
import {Button} from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";

import {Table} from "@radix-ui/themes";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";

const IssuesPage = async () => {
    const issues = await prisma.issue.findMany();

    return (
        <div className="space-y-4">

            <Button size={"4"}>
                <Link href="/issues/new">New Issue</Link>
            </Button>

            <Table.Root variant="surface">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>
                            Id
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell
                            className="hidden md:table-cell"
                        >
                            Status
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell
                            className="hidden md:table-cell"
                        >
                            Created At
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>
                            Title
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>
                            Description
                        </Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        issues.map((issue) =>
                            <Table.Row key={issue.id}>
                                <Table.RowHeaderCell>
                                    {issue.id}
                                    <div className="block md:hidden">
                                        <IssueStatusBadge status={issue.status} />
                                    </div>
                                </Table.RowHeaderCell>
                                <Table.RowHeaderCell
                                    className="hidden md:table-cell"
                                >
                                    <IssueStatusBadge status={issue.status} />
                                </Table.RowHeaderCell>
                                <Table.Cell
                                    className="hidden md:table-cell"
                                >
                                    {issue.createdAt.toDateString()}
                                </Table.Cell>
                                <Table.RowHeaderCell>
                                    {issue.title}
                                </Table.RowHeaderCell>
                                <Table.Cell>
                                    {issue.description}
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