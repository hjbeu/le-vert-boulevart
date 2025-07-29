import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800 font-['Poppins',sans-serif]">
      <header
        style={{ backgroundColor: "#FBB040" }}
        className=" text-white p-6 shadow-lg"
      >
        <div className="container mx-auto text-center">
          <div className="flex justify-center">
            <img
              src="./logoChapa.jpeg"
              alt="Logo Chapa 03"
              style={{ borderRadius: "10px", border: "5px solid white" }}
              width="200"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            CHAPA 2 — O QUE DÁ CERTO, CONTINUA
          </h1>
          <p className="text-lg mt-2">
            Condomínio Le Vert Boulevard - Gestão 2025/2027
          </p>
        </div>
      </header>

      <div className="bg-red-600 text-white text-center p-4 font-bold text-xl animate-pulse">
        ⚠️ ATENÇÃO: A ELEIÇÃO SERÁ DIA <strong>04/08/2025</strong>! Venha e faça
        sua parte!
      </div>

      <main className="container mx-auto p-4 md:p-8">
        <section
          id="propostas"
          className="bg-white p-6 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-6 border-b-2 border-teal-200 pb-2">
            📌 Propostas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* SEGURANÇA — Propostas */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                🔐 SEGURANÇA
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  Criação de vaga de pânico (vaga de visitantes dentro da G2
                  para uso em caso de suspeita de crime).
                </li>
                <li>
                  Gaiola da portaria com cobertura total, incluindo as escadas.
                </li>
                <li>
                  Interfone para entrada de veículos de visitantes e moradores
                  sem TAG.
                </li>
              </ul>
            </div>

            {/* LAZER — Propostas */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                🎉 LAZER
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Espaço pet na área do G1.</li>
                <li>Sala de cinema na Torre Jardin (garagem G1).</li>
                <li>
                  Estudo para nova área gourmet, possivelmente na área da
                  piscina.
                </li>
                <li>Estudo para aquecedor na piscina.</li>
                <li>
                  Novo acesso da piscina para facilitar o caminho aos banheiros
                  e ao minimercado.
                </li>
                <li>
                  Alteração do local das festividades de São João e Carnaval.
                </li>
              </ul>
            </div>

            {/* AQUISIÇÕES & MELHORIAS — Propostas */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                🛠️ AQUISIÇÕES & MELHORIAS
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  Reforma da G1, com colocação de pisos semelhantes ao G2.
                </li>
                <li>
                  Estudo para vaga externa de carregamento de veículos
                  elétricos.
                </li>
                <li>Estudo para isolamento acústico nos salões de festa.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="acoes" className="bg-white p-6 rounded-lg shadow-md mb-8 ">
          <h2 className="text-3xl font-bold text-teal-800 mb-6 border-b-2 border-teal-200 pb-2">
            ✅ Ações já executadas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* SEGURANÇA — Ações */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                🔐 SEGURANÇA
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Telas de segurança, prevenindo acidentes com crianças.</li>
                <li>Película protetora e ar-condicionado na guarita.</li>
                <li>Película espelhada nas janelas externas da garagem.</li>
                <li>
                  Bases de alvenaria para os sombreiros (mais estabilidade e
                  prevenção de acidentes).
                </li>
                <li>
                  Espelhos nos elevadores (melhor visibilidade e segurança).
                </li>
              </ul>
            </div>

            {/* LAZER — Ações */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                🎉 LAZER
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Espaço gourmet entregue totalmente equipado.</li>
                <li>Salão de festas adulto completo com utensílios.</li>
                <li>
                  Salão de festas kids (previsto para agosto) totalmente
                  equipado.
                </li>
                <li>Brinquedoteca climatizada e estruturada.</li>
                <li>Novos sombreiros adquiridos.</li>
              </ul>
            </div>

            {/* AQUISIÇÕES & MELHORIAS — Ações */}
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border mt-4 border-gray-200">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              🛠️ AQUISIÇÕES & MELHORIAS
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                Comissões de moradores para câmeras, energia solar, academia e
                eventos.
              </li>
              <li>
                Internet gratuita em todas as áreas comuns e TV a cabo no espaço
                gourmet.
              </li>
              <li>Bebedouro na portaria (doação).</li>
              <li>
                Inventário do condomínio em estudo com a empresa responsável.
              </li>
              <li>Implantação do programa “Inadimplência Zero”.</li>
              <li>Minimercado instalado para comodidade dos moradores.</li>
              <li>Poço artesiano instalado conforme normas ambientais.</li>
              <li>Caixas de correspondência instaladas.</li>
              <li>Carrinhos de compras adquiridos.</li>
              <li>Lixeiras seletivas e +20 tonéis na casa do lixo.</li>
              <li>Administração estruturada com equipamentos e materiais.</li>
              <li>Sala de descanso e copa dos funcionários equipada.</li>
              <li>
                Materiais esportivos adquiridos: rede, bolas e reforma da tabela
                de basquete.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="membros"
          className="bg-teal-50 p-6 rounded-lg shadow-md mb-8 border-l-4 border-teal-500"
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-4">
            📅 Composição da Chapa 03
          </h2>
          {/* Informações dos membros aqui */}
        </section>

        <section
          id="comparativo"
          className="bg-white p-6 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-4">
            📊 Por que escolher a Chapa 03?
          </h2>
          <p className="text-lg">
            As chapas 01 e 02 representam a continuidade das gestões anteriores,
            sem renovação real. Já a{" "}
            <span className="text-red-600 font-bold">
              Chapa 03 é composta por moradores novos
            </span>
            , comprometidos com a{" "}
            <strong>mudança, transparência e participação ativa</strong> de
            todos os condôminos.
          </p>
        </section>

        <section
          id="sugestao"
          className="bg-blue-100 text-center p-8 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            💡 Queremos ouvir você!
          </h2>
          <p className="text-lg mb-6">
            Suas ideias são essenciais para o nosso projeto. Envie suas
            sugestões de melhorias para o condomínio através do nosso
            formulário.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSebPDDcONmvVeJAOFWlwiZ19UoIWfH0YUGL-5Tp1HS8TLwkcg/viewform"
            target="_blank"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-xl hover:bg-blue-700 transition-colors shadow-lg"
          >
            Enviar minha Sugestão
          </a>
        </section>

        <div className="text-center mb-8">
          <img
            src="/figura/juntosSeremosMaisForte.png"
            alt="Logo Futuro Gestão"
            className="mx-auto max-w-sm w-full rounded-lg shadow-md"
          />
        </div>
      </main>

      <footer className="bg-teal-800 text-white text-center p-6 mt-8">
        <p>Condomínio Le Vert Boulevard © Chapa 03 - 2025/2027</p>
        <div className="mt-4">
          <a
            title="Contador de Visitas do MegaContador"
            href="https://megacontador.com.br/"
          >
            {/* <img
              src="https://megacontador.com.br/img-bJQiYkVzPg4Rx95v-1.gif"
              alt="Contador de visitas"
            /> */}
          </a>
        </div>
      </footer>
    </div>
  );
}
