import Header from "@/app/_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="p-6">
        <h2 className="text-xl font-bold ">Olá, Breno</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>

      <div className="px-5">
        <Search />
      </div>
    </div>
  );
}
