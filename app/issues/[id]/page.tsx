import React from 'react';
import {string} from "zod";
import prisma from "@/prisma/client";
import {Card, Flex, Heading, Text} from "@radix-ui/themes";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import {notFound} from "next/navigation";

interface Props {
    params: { id: string };
}

const IssueDetailsPage = async ({params}: Props) => {
    const issue = await  prisma.issue.findUnique({
        where: {id: parseInt(params.id)},
    });

    if (!issue) return notFound();

    return (
        <div>
            <Heading>{issue.title}</Heading>
            <Flex gap="3" my={"5"}>
                <IssueStatusBadge status={issue.status}/> |
                <Text>{issue.createdAt.toLocaleDateString('en-UK')}</Text>
            </Flex>
            <Card>
                <Text>{issue.description}</Text>
            </Card>
        </div>
    );
};

export default IssueDetailsPage;