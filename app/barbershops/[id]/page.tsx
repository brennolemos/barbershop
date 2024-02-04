import { db } from "@/app/_lib/prisma";

type BarbershopDetailsPageProps = {
  params: {
    id?: string;
  };
};

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  if (!params.id) {
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) {
    return null;
  }

  return <div>{barbershop.name}</div>;
};

export default BarbershopDetailsPage;
