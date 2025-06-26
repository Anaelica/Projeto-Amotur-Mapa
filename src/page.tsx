// import Page from "@/server-client/page";
import { Cards } from "./app/components/Cards";
import NavBar from "./app/components/Navbar";

export default function Home() {
  return (
    <>
      <NavBar links={
        [
          {label:'Inicio', href:'/'},
          {label:'Sobre nós', href:'./about'},
          {label:'Produtos', href:'/produtos'}
        ]
      }/>
    <div className="">
      <div className="mt-10 ">
      {/* <Page/> */}
      </div>
    </div>
     <section className="bg-white py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Recursos Principais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
          <Cards
            title="Renderização Híbrida"
            description="SSG, SSR e ISR para otimizar performance e SEO."
            icon="🚀" />

          <Cards
            title="CSS Utility-First"
            description="Tailwind CSS para estilização rápida e consistente."
            icon="🎨" />

          <Cards
            title="TypeScript Integrado"
            description="Tipagem estática para um código mais seguro."
            icon="🔒" />
        </div>

      </section>
      </>
  )
}

