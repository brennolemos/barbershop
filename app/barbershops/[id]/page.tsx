import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/info";
import ServiceItem from "./_components/service-item";

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
    include: {
      Service: true,
    },
  });

  if (!barbershop) {
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="px-5 flex flex-col gap-4 py-6">
        {barbershop.Service.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetailsPage;
