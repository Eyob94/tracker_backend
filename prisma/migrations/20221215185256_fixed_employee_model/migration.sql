/*
  Warnings:

  - You are about to drop the column `employeeUserId` on the `Employee` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[managerId]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `managerId` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_employeeUserId_fkey";

-- DropIndex
DROP INDEX "Employee_employeeUserId_key";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "employeeUserId",
ADD COLUMN     "managerId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_managerId_key" ON "Employee"("managerId");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Employee"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
