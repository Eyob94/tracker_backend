/*
  Warnings:

  - A unique constraint covering the columns `[employeeUserId]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `employeeUserId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `position` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Position" AS ENUM ('CASHIER', 'MANAGER', 'JANITOR', 'ACCOUNTANT', 'CUSTOMER_SERVICE', 'GUARD');

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "employeeUserId" TEXT NOT NULL,
DROP COLUMN "position",
ADD COLUMN     "position" "Position" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employeeUserId_key" ON "Employee"("employeeUserId");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_employeeUserId_fkey" FOREIGN KEY ("employeeUserId") REFERENCES "Employee"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
