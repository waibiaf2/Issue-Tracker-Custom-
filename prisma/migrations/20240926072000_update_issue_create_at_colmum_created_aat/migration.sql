/*
  Warnings:

  - You are about to drop the column `createAt` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Issue` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Issue" DROP COLUMN "createAt",
DROP COLUMN "updateAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
