/*
  Warnings:

  - A unique constraint covering the columns `[dept_name]` on the table `Department` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Department_dept_name_key" ON "Department"("dept_name");
