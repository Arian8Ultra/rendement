import { Category } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { Metadata, ResolvingMetadata } from "next";
const prisma = new PrismaClient();

type Props = {
  params: { id: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;
  const category = (await prisma.category.findUnique({
    where: { id: id },
  })) as Category;

  return {
    title: category.name,
  };
}

export default function CategoryPagePage() {
  return <h1>Welcome to CategoryPagepage!</h1>;
}
