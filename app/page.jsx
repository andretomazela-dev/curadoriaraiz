import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F3EEE7] text-[#A33E2F] overflow-hidden">
      {/* HERO */}
      <section className="min-h-screen px-6 md:px-14 pt-10 pb-20">
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-16">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#B8A89C]">
            Curadoria artesanal · São Paulo
          </span>

          <button
            className="
              hidden md:flex
              items-center
              justify-center
              px-6
              py-3
              rounded-full
              bg-[#A33E2F]
              text-[#F3EEE7]
              text-[11px]
              tracking-[0.25em]
              uppercase
              transition-all
              hover:scale-[1.02]
            "
          >
            Assinar
          </button>
        </div>

        {/* HERO GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="max-w-[620px]">
            {/* LOGO GRANDE */}
            <div className="mb-14">
              <Image
                src="/branding/01_principal_claro.svg"
                alt="Curadoria Raiz"
                width={620}
                height={260}
                priority
                className="
                  w-[280px]
                  md:w-[420px]
                  lg:w-[500px]
                  h-auto
                "
              />
            </div>

            {/* HEADLINE */}
            <h1
              className="
                text-[56px]
                md:text-[88px]
                leading-[0.92]
                tracking-[-0.04em]
                text-[#E1D5CB]
                font-light
                mb-10
              "
            >
              Alimento
              <br />
              com história,
              <br />
              entregue
              <br />
              por quem
              <br />
              escolhe.
            </h1>

            {/* SUB */}
            <p
              className="
                text-[17px]
                leading-[1.9]
                text-[#8B7466]
                max-w-[520px]
                mb-12
              "
            >
              Uma seleção mensal de vinho natural, pão de fermentação
              natural e pequenos produtores escolhidos para desacelerar o
              ritmo da cidade por algumas horas.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <button
                className="
                  px-8
                  py-4
                  rounded-full
                  bg-[#A33E2F]
                  text-[#F3EEE7]
                  text-[12px]
                  tracking-[0.25em]
                  uppercase
                  transition-all
                  hover:scale-[1.02]
                "
              >
                Assinar agora
              </button>

              <button
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-[#D9CCC2]
                  text-[#A38271]
                  text-[12px]
                  tracking-[0.25em]
                  uppercase
                  hover:bg-[#EFE6DE]
                  transition-all
                "
              >
                Como funciona
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="
                absolute
                w-[520px]
                h-[520px]
                bg-[#E8DDD3]
                blur-3xl
                rounded-full
                opacity-60
              "
            />

            <Image
              src="/images/apagao-editorial.webp"
              alt="Curadoria Raiz"
              width={760}
              height={920}
              priority
              className="
                relative
                w-full
                max-w-[620px]
                object-contain
                drop-shadow-[0_45px_70px_rgba(0,0,0,0.16)]
              "
            />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 md:px-14 py-28 border-t border-[#E7DCD3]">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#B9A99D]">
            Como funciona
          </span>

          <h2
            className="
              mt-6
              text-[44px]
              md:text-[72px]
              leading-[0.95]
              tracking-[-0.04em]
              max-w-[780px]
            "
          >
            Uma curadoria pensada
            <br />
            para desacelerar.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              {
                n: "01",
                title: "Selecionamos",
                text: "Escolhemos vinhos naturais, pães artesanais e pequenos produtores com produção autoral e limitada.",
              },
              {
                n: "02",
                title: "Montamos",
                text: "Cada caixa é composta para criar uma experiência equilibrada entre sabor, estética e descoberta.",
              },
              {
                n: "03",
                title: "Entregamos",
                text: "Você recebe em casa uma experiência pronta para transformar uma noite comum em ritual.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="
                  bg-[#EFE6DE]
                  rounded-[32px]
                  p-10
                  min-h-[280px]
                "
              >
                <span className="text-[11px] tracking-[0.3em] text-[#C1B2A6]">
                  {item.n}
                </span>

                <h3 className="text-[34px] mt-8 mb-6 leading-none">
                  {item.title}
                </h3>

                <p className="text-[#8D7769] leading-[1.9] text-[16px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO EDITORIAL */}
      <section className="px-6 md:px-14 py-28">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-[1280px] mx-auto">
          <div>
            <Image
              src="/images/produtor-faccin.webp"
              alt="Produtor artesanal"
              width={720}
              height={920}
              className="rounded-[34px]"
            />
          </div>

          <div>
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#B9A99D]">
              Pequenos produtores
            </span>

            <h2
              className="
                mt-6
                text-[44px]
                md:text-[72px]
                leading-[0.95]
                tracking-[-0.04em]
              "
            >
              Escolhas que
              <br />
              carregam origem.
            </h2>

            <p
              className="
                mt-10
                text-[18px]
                leading-[2]
                text-[#8C7668]
                max-w-[520px]
              "
            >
              Sem excesso, sem algoritmo, sem catálogo infinito.
              Apenas produtos escolhidos manualmente, com produção
              limitada e histórias reais por trás de cada entrega.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 md:px-14 py-32 border-t border-[#E7DCD3]">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#B9A99D]">
            Assinatura mensal
          </span>

          <h2
            className="
              mt-6
              text-[52px]
              md:text-[88px]
              leading-[0.92]
              tracking-[-0.05em]
            "
          >
            Curadoria autoral,
            <br />
            sem excesso.
          </h2>

          <p
            className="
              mt-10
              text-[18px]
              leading-[1.9]
              text-[#8C7668]
              max-w-[680px]
              mx-auto
            "
          >
            Sem marketplaces infinitos. Sem escolha cansativa.
            Apenas uma seleção enxuta, sazonal e feita por pessoas.
          </p>

          <button
            className="
              mt-12
              px-10
              py-5
              rounded-full
              bg-[#A33E2F]
              text-[#F3EEE7]
              text-[12px]
              tracking-[0.25em]
              uppercase
              transition-all
              hover:scale-[1.02]
            "
          >
            Quero assinar
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-14 py-10 border-t border-[#E7DCD3]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/branding/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            width={240}
            height={80}
            className="w-[180px] h-auto"
          />

          <span className="text-[12px] text-[#B09F92]">
            © 2026 Curadoria Raiz · São Paulo
          </span>
        </div>
      </footer>
    </main>
  );
}
