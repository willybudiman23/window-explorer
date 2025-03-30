import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 🗂 Create root folder
  const rootFolder = await prisma.folder.create({
    data: {
      name: "Root Folder",
      children: {
        create: [
          {
            name: "Sub Folder 1",
            children: {
              create: [
                {
                  name: "Sub Folder 1.1",
                  files: {
                    create: [
                      { name: "file1.1.txt" },
                      { name: "file1.2.txt" },
                    ],
                  },
                },
                {
                  name: "Sub Folder 1.2",
                  children: {
                    create: [
                      { name: "Sub Folder 1.2.1" },
                      { name: "Sub Folder 1.2.2" },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Sub Folder 2",
            files: {
              create: [
                { name: "file2.1.pdf" },
                { name: "file2.2.docx" },
              ],
            },
          },
          {
            name: "Sub Folder 3",
            children: {
              create: [
                {
                  name: "Sub Folder 3.1",
                  files: {
                    create: [
                      { name: "file3.1.jpg" },
                      { name: "file3.2.png" },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      files: {
        create: [
          { name: "root-file1.txt" },
          { name: "root-file2.csv" },
        ],
      },
    },
  });

  console.log("Database seeding completed!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
