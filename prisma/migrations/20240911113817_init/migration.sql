/*
  Warnings:

  - Added the required column `layout` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobileLayout` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "enName" TEXT NOT NULL,
    "layout" TEXT NOT NULL,
    "mobileLayout" TEXT NOT NULL
);
INSERT INTO "new_Category" ("enName", "id", "name") SELECT "enName", "id", "name" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
