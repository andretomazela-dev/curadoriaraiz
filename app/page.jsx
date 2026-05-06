export default function Home() {
  return (
    <main className="bg-[#F5F1EB] text-[#2B2623] overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#160402]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,43,0,0.35),transparent_42%)]" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-14 pt-8 sm:pt-10 lg:pt-12 pb-24 lg:pb-28">
          {/* topo */}
          <div className="flex items-start justify-between">
            <span className="text-[10px] sm:text-[11px] tracking-[0.42em] text-[#D8C6BC]/75 uppercase leading-[1.8]">
              Curadoria artesanal • São Paulo
            </span>

            <span className="text-[10px] sm:text-[11px] tracking-[0.42em] text-[#D8C6BC]/65 uppercase">
              Drop #01
            </span>
          </div>

          {/* hero grid */}
          <div
            className="
              mt-10
              grid
              gap-14
              items-center
              lg:grid-cols-[0.92fr_1.08fr]
            "
          >
            {/* coluna esquerda */}
            <div className="max-w-[760px]">
              {/* logo */}
              <img
                src="/images/logo-raiz.svg"
                alt="Curadoria Raiz"
                className="
                  w-[220px]
                  sm:w-[280px]
                  lg:w-[620px]
                  xl:w-[760px]
                  h-auto
                  object-contain
                "
              />

              {/* título */}
              <h1
                className="
                  mt-14

                  font-serif
                  font-normal
                  tracking-[-0.05em]
                  leading-[0.88]

                  text-[4.4rem]
                  sm:text-[5.5rem]
                  md:text-[6.5rem]
                  lg:text-[5.3rem]
                  xl:text-[6rem]

                  text-[#F8F2EC]
                "
              >
                Curadoria
                <br />

                <span className="text-[1.12em] inline-block">
                  artesanal
                </span>

                <br />
                em ritmo
                <br />

                <span className="text-[1.12em] inline-block">
                  humano.
                </span>
              </h1>

              {/* subtítulo */}
              <p
                className="
                  mt-8
                  max-w-[620px]

                  text-[18px]
                  sm:text-[20px]

                  leading-[1.9]
                  text-[#E3D7D0]/92
                "
              >
                Uma seleção mensal de vinho natural, pão de fermentação
                lenta e produtos artesanais escolhidos para desacelerar a
                cidade por algumas horas urbanas.
              </p>

              {/* botões */}
              <div
                className="
                  mt-10
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                "
              >
                <a
                  href="#reservas"
                  className="
                    inline-flex
                    items-center
                    justify-center

                    rounded-full
                    bg-[#DF7245]
                    hover:bg-[#eb8359]

                    px-10
                    py-4

                    text-[11px]
                    tracking-[0.35em]
                    uppercase
                    text-white

                    transition-all
                  "
                >
                  Reservar edição atual
                </a>

                <a
                  href="#produtos"
                  className="
                    inline-flex
                    items-center
                    justify-center

                    rounded-full
                    border
                    border-[#8A5A4A]

                    px-10
                    py-4

                    text-[11px]
                    tracking-[0.35em]
                    uppercase
                    text-[#F1E4DD]

                    hover:bg-[#2B0B05]
                    transition-all
                  "
                >
                  Conheça os produtos
                </a>
              </div>

              {/* microtexto */}
              <p className="mt-8 text-[10px] tracking-[0.42em] uppercase text-[#B08E82]">
                Produção limitada • 30 unidades por edição
              </p>
            </div>

            {/* coluna direita */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/curadoria-raiz-hero-composicao-vertical.png"
                alt="Vinho natural, pão artesanal e antepasto"
                className="
                  w-full
                  max-w-[360px]

                  sm:max-w-[460px]
                  lg:max-w-[620px]
                  xl:max-w-[720px]

                  h-auto
                  object-cover

                  rounded-[28px]
                "
              />
            </div>
          </div>
        </div>

        {/* fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#F5F1EB]" />
      </section>

      {/* MANIFESTO */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <span className="text-[10px] tracking-[0.42em] uppercase text-[#C9B7AE]">
                Manifesto
              </span>

              <h2
                className="
                  mt-8
                  font-serif
                  leading-[0.9]
                  tracking-[-0.05em]
                  text-[#CFBDB4]

                  text-[4rem]
                  sm:text-[5rem]
                  lg:text-[6rem]
                "
              >
                Menos
                <br />
                pressa,
                <br />
                mais
                <br />
                repertório.
              </h2>
            </div>

            <div className="max-w-[640px]">
              <h3
                className="
                  font-serif
                  leading-[0.92]
                  tracking-[-0.05em]
                  text-[#4B1F18]

                  text-[3.3rem]
                  sm:text-[4rem]
                "
              >
                A Curadoria Raiz nasce do desejo de aproximar pequenos
                produtores do ritmo da cidade.
              </h3>

              <div className="mt-10 space-y-8">
                <p className="text-[18px] leading-[2] text-[#7A6760]">
                  Cada edição reúne vinho vivo, pão artesanal e conservas
                  escolhidas manualmente. Não apenas pelo sabor, mas pela
                  história, origem e modo de produção.
                </p>

                <p className="text-[18px] leading-[2] text-[#7A6760]">
                  Sem excesso. Sem pressa. Apenas alimento honesto,
                  logística consciente e encontros que fazem sentido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section
        id="produtos"
        className="px-6 sm:px-10 lg:px-14 pb-24 lg:pb-36"
      >
        <div className="mx-auto max-w-[1320px]">
          <span className="text-[10px] tracking-[0.42em] uppercase text-[#C9B7AE]">
            Drop #01
          </span>

          <h2
            className="
              mt-6
              font-serif
              leading-[0.95]
              tracking-[-0.05em]
              text-[#CFBDB4]

              text-[3.8rem]
              sm:text-[4.6rem]
              lg:text-[5rem]
            "
          >
            O Trio da Vez
          </h2>

          <p className="mt-6 max-w-[760px] text-[18px] leading-[2] text-[#7A6760]">
            Uma combinação pensada para acompanhar o fim da tarde em Santa
            Cecília, Vila Buarque, Higienópolis, Campos Elíseos e Barra
            Funda.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                image: "/images/apagao-editorial.webp",
                title: "Apagão Rosé Natural",
                text: "Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.",
              },
              {
                image: "/images/pao-sourdough.webp",
                title: "Sourdough Natural",
                text: "Fermentação lenta e forno artesanal. Assado poucas horas antes da entrega.",
              },
              {
                image: "/images/antepasto.webp",
                title: "Antepasto de Berinjela",
                text: "Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.",
              },
            ].map((item) => (
              <article key={item.title}>
                <div className="overflow-hidden rounded-[28px] bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      aspect-[0.95]
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-[1.03]
                    "
                  />
                </div>

                <h3
                  className="
                    mt-6
                    font-serif
                    leading-[0.95]
                    tracking-[-0.04em]
                    text-[#4B1F18]

                    text-[2rem]
                    sm:text-[2.15rem]
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-[17px] leading-[1.9] text-[#7A6760]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOR */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />

        <img
          src="/images/produtor-faccin.webp"
          alt="Pequenos produtores"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        <div
          className="
            relative
            z-20

            min-h-[760px]
            lg:h-[760px]

            px-6
            sm:px-10
            lg:px-14

            flex
            items-center
          "
        >
          <div className="max-w-[760px]">
            <span className="text-[10px] tracking-[0.42em] uppercase text-[#F4E8E0]/80">
              Pequenos produtores
            </span>

            <h2
              className="
                mt-6
                font-serif
                leading-[0.88]
                tracking-[-0.06em]
                text-white

                text-[4rem]
                sm:text-[5rem]
              "
            >
              Curadoria feita perto de quem produz.
            </h2>

            <p className="mt-8 max-w-[620px] text-[20px] leading-[2] text-white/92">
              Cada edição nasce da proximidade com produtores
              independentes, agricultura sustentável e processos
              artesanais feitos em pequena escala.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="reservas"
        className="px-6 sm:px-10 lg:px-14 py-24 lg:py-36"
      >
        <div
          className="
            mx-auto
            max-w-[1200px]

            rounded-[40px]

            bg-[#1D0503]
            px-8
            py-20

            sm:px-12
            lg:px-20
            lg:py-28

            text-center

            relative
            overflow-hidden
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(170,61,18,0.45),transparent_36%)]" />

          <div className="relative z-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[18px] bg-[#DF7245] text-white text-[26px]">
              R
            </div>

            <span className="mt-10 block text-[11px] tracking-[0.42em] uppercase text-[#D9C7BE]">
              Próxima edição
            </span>

            <h2
              className="
                mt-10
                font-serif
                leading-[0.92]
                tracking-[-0.06em]
                text-[#F8F2EC]

                text-[4rem]
                sm:text-[5rem]
                lg:text-[5.2rem]
              "
            >
              Reservas abertas
              <br />
              para o Drop #01
            </h2>

            <p className="mx-auto mt-10 max-w-[820px] text-[20px] leading-[2] text-[#E2D7D1]">
              Entregas feitas de bicicleta às sextas-feiras e sábados em
              Santa Cecília, Vila Buarque, Higienópolis, Campos Elíseos e
              Barra Funda.
            </p>

            <div className="mt-14 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-full
                  bg-[#DF7245]

                  px-12
                  py-5

                  text-[11px]
                  tracking-[0.35em]
                  uppercase
                  text-white
                "
              >
                Reservar meu drop
              </a>

              <a
                href="#"
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-[#70453A]

                  px-12
                  py-5

                  text-[11px]
                  tracking-[0.35em]
                  uppercase
                  text-[#F1E4DD]
                "
              >
                Tirar dúvidas no WhatsApp
              </a>
            </div>

            <p className="mt-10 text-[10px] tracking-[0.42em] uppercase text-[#B89C91]">
              Parcelamento em até 2x • disponível via link
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E7DDD6] py-12">
        <div
          className="
            mx-auto
            max-w-[1320px]
            px-8

            flex
            flex-col
            gap-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <img
            src="/images/logo-raiz-footer.svg"
            alt="Curadoria Raiz"
            className="
              h-auto
              w-[170px]

              sm:w-[220px]
              lg:w-[340px]
            "
          />

          <span className="text-[11px] tracking-[0.42em] uppercase text-[#B8A59A] leading-[2]">
            Curadoria artesanal • São Paulo
          </span>

          <span className="text-[11px] tracking-[0.32em] uppercase text-[#B8A59A] leading-[2]">
            © 2026 Curadoria Raiz
          </span>
        </div>
      </footer>
    </main>
  )
}
