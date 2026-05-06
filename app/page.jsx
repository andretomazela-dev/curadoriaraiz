import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F3EEE8] text-[#3E241D] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#1A0C06] text-[#F7F1EB]">

        {/* BG IMAGE */}
        <div
          className="
            absolute
            inset-0
            bg-cover
            opacity-95
            scale-[1.02]
            bg-[position:78%_38%]
            md:bg-[position:82%_36%]
            lg:bg-[position:88%_34%]
          "
          style={{
            backgroundImage:
              "url('/images/curadoria-raiz-hero-composicao-horizontal.png')",
          }}
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,rgba(12,6,4,0.94)_0%,rgba(12,6,4,0.88)_24%,rgba(12,6,4,0.62)_46%,rgba(12,6,4,0.16)_72%,rgba(12,6,4,0)_100%)]
          "
        />

        {/* TEXTURE */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/noise.png')]" />

        {/* TOP BAR */}
        <div className="relative z-20 mx-auto flex max-w-[1440px] items-center justify-between px-8 pt-8">

          <span className="text-[10px] uppercase tracking-[0.34em] text-[#D8C7BB]/80">
            Curadoria artesanal · São Paulo
          </span>

          <span className="text-[10px] uppercase tracking-[0.32em] text-[#B88B78]">
            Drop #01
          </span>
        </div>

        {/* CONTENT */}
        <div className="relative z-20 mx-auto flex min-h-screen max-w-[1440px] items-center px-8">

          <div className="max-w-[520px]">

            {/* LOGO */}
            <div className="mb-14">
              <Image
                src="/branding/transparentes/07_vertical.png"
                alt="Curadoria Raiz"
                width={720}
                height={720}
                priority
                className="
                  w-[500px]
                  md:w-[720px]
                  h-auto
                  object-contain
                "
              />
            </div>

            {/* HEADLINE */}
            <h1
              className="
                max-w-[520px]
                font-serif
                text-[4.4rem]
                md:text-[5.3rem]
                leading-[0.9]
                tracking-[-0.03em]
                font-normal
                text-[#F6EFE8]
              "
            >
              Comida,
              <br />
              vinho e
              <br />
              pequenos
              <br />
              produtores
              <br />
              em ritmo
              <br />
              humano.
            </h1>

            {/* SUBTEXT */}
            <p
              className="
                mt-10
                max-w-[470px]
                text-[15px]
                leading-[2]
                text-[#E5D6CC]
              "
            >
              Uma seleção mensal de vinho natural, pão de fermentação lenta
              e produtos artesanais escolhidos para desacelerar a cidade
              por algumas horas.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">

              <button
                className="
                  rounded-full
                  bg-[#D96B41]
                  px-8
                  py-4
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-white
                  transition-all
                  duration-300
                  hover:translate-y-[-2px]
                  hover:bg-[#E2794F]
                "
              >
                Reservar edição atual
              </button>

              <button
                className="
                  rounded-full
                  border
                  border-[#8E6B5D]
                  px-8
                  py-4
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-[#F2E6DE]
                  transition-all
                  duration-300
                  hover:bg-white/5
                  hover:border-[#C89A86]
                "
              >
                Conheça os produtos
              </button>
            </div>

            {/* MICRO INFO */}
            <div className="mt-10 text-[10px] uppercase tracking-[0.32em] text-[#AF8C7D]">
              Produção limitada · 30 unidades por edição
            </div>
          </div>
        </div>

        {/* FADE */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[260px]
            bg-[linear-gradient(to_bottom,rgba(26,12,6,0)_0%,rgba(70,32,20,0.18)_35%,rgba(243,238,232,0.72)_72%,#F3EEE8_100%)]
            backdrop-blur-[2px]
          "
        />
      </section>

      {/* MANIFESTO */}
      <section className="py-44">
        <div className="mx-auto max-w-[1320px] px-8">

          <div className="grid lg:grid-cols-2 gap-32 items-start">

            {/* LEFT */}
            <div>

              <span className="text-[10px] uppercase tracking-[0.38em] text-[#B8A59A]">
                Manifesto
              </span>

              <h2
                className="
                  mt-14
                  font-serif
                  text-[5.6rem]
                  leading-[0.92]
                  tracking-[-0.03em]
                  font-normal
                  text-[#CBB9AF]
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

            {/* RIGHT */}
            <div className="max-w-[560px]">

              <h3
                className="
                  font-serif
                  text-[4rem]
                  leading-[0.96]
                  tracking-[-0.03em]
                  font-normal
                  text-[#4A2A22]
                "
              >
                A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade.
              </h3>

              <div className="mt-16 space-y-10 text-[16px] leading-[2.1] text-[#735D54]">

                <p>
                  Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente.
                  Não apenas pelo sabor, mas pela história, origem e modo de produção.
                </p>

                <p>
                  Sem excesso. Sem pressa. Apenas alimento honesto,
                  logística consciente e encontros que fazem sentido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pb-40">
        <div className="mx-auto max-w-[1320px] px-8">

          <div className="mb-20">

            <span className="text-[10px] uppercase tracking-[0.38em] text-[#B8A59A]">
              Drop #01
            </span>

            <h2
              className="
                mt-6
                font-serif
                text-[4.8rem]
                leading-[0.96]
                tracking-[-0.03em]
                font-normal
                text-[#C4B1A5]
              "
            >
              O Trio da Vez
            </h2>

            <p className="mt-7 max-w-[720px] text-[16px] leading-[2] text-[#7B655C]">
              Uma combinação pensada para acompanhar o fim da tarde entre Santa Cecília,
              Higienópolis, Barra Funda e Vila Buarque.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">

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
            ].map((item, index) => (
              <div key={index} className="group">

                <div
                  className="
                    overflow-hidden
                    rounded-[30px]
                    bg-[#ECE4DD]
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={620}
                    className="
                      h-[430px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                    "
                  />
                </div>

                <h3
                  className="
                    mt-7
                    font-serif
                    text-[2rem]
                    leading-[1]
                    tracking-[-0.03em]
                    font-normal
                    text-[#3C241E]
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-[1.9] text-[#7B665E]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCER */}
      <section className="relative h-[760px] overflow-hidden">

        <Image
          src="/images/produtor-faccin.webp"
          alt="Curadoria feita perto de quem produz"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex h-full items-center">

          <div className="mx-auto w-full max-w-[1320px] px-8">

            <div className="max-w-[560px]">

              <span className="text-[10px] uppercase tracking-[0.38em] text-[#E9D9CF]/80">
                Pequenos produtores
              </span>

              <h2
                className="
                  mt-8
                  font-serif
                  text-[5rem]
                  leading-[0.92]
                  tracking-[-0.03em]
                  font-normal
                  text-white
                "
              >
                Curadoria feita perto de quem produz.
              </h2>

              <p className="mt-10 text-[17px] leading-[2] text-[#E9DCD5]">
                Cada edição nasce da proximidade com produtores independentes,
                agricultura sustentável e processos artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40">
        <div className="mx-auto max-w-[1320px] px-8">

          <div
            className="
              relative
              overflow-hidden
              rounded-[42px]
              bg-[#1A0C06]
              px-10
              py-28
              text-center
            "
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(173,67,36,0.42),transparent_34%)]" />

            <div className="relative z-10">

              <div className="mx-auto mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B84E2D] text-sm text-white">
                R
              </div>

              <span className="text-[10px] uppercase tracking-[0.38em] text-[#C8A99C]">
                Próxima edição
              </span>

              <h2
                className="
                  mx-auto
                  mt-8
                  max-w-[760px]
                  font-serif
                  text-[4.8rem]
                  leading-[0.94]
                  tracking-[-0.03em]
                  font-normal
                  text-[#F8F2EC]
                "
              >
                Reservas abertas para o Drop #01
              </h2>

              <p className="mx-auto mt-10 max-w-[760px] text-[16px] leading-[2] text-[#D7C3B9]">
                Entregas feitas de bicicleta às sextas-feiras e sábados
                em Santa Cecília, Higienópolis, Barra Funda e Vila Buarque.
              </p>

              <div className="mt-14 flex flex-wrap items-center justify-center gap-4">

                <button
                  className="
                    rounded-full
                    bg-[#D96B41]
                    px-10
                    py-5
                    text-[11px]
                    uppercase
                    tracking-[0.3em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#E27A51]
                  "
                >
                  Reservar meu drop
                </button>

                <button
                  className="
                    rounded-full
                    border
                    border-[#76544A]
                    px-10
                    py-5
                    text-[11px]
                    uppercase
                    tracking-[0.28em]
                    text-[#EADDD5]
                    transition-all
                    duration-300
                    hover:bg-white/5
                  "
                >
                  Tirar dúvidas no WhatsApp
                </button>
              </div>

              <div className="mt-10 text-[10px] uppercase tracking-[0.32em] text-[#9D7B6F]">
                Parcelamento em até 2x · disponível via link
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E4D9D0] py-14">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-8">

          <Image
            src="/branding/transparentes/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            width={270}
            height={90}
            className="w-[210px] md:w-[270px] h-auto opacity-90"
          />

          <span className="text-[10px] uppercase tracking-[0.34em] text-[#B2A197]">
            Curadoria artesanal · São Paulo
          </span>

          <span className="text-[10px] uppercase tracking-[0.28em] text-[#B7A69C]">
            © 2026 Curadoria Raiz
          </span>
        </div>
      </footer>
    </main>
  );
}
