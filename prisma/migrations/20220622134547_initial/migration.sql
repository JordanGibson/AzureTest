/*
  Warnings:

  - You are about to drop the column `mediaId` on the `User` table. All the data in the column will be lost.
  - Added the required column `avatarId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_mediaId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "mediaId",
ADD COLUMN     "avatarId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
