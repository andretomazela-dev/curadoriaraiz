import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F3EEE8] text-[#3E241D] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen bg-[#1A0C06] text-[#F7F1EB] overflow-hidden">

        {/* cinematic background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,28,0.30),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(110,33,16,0.18),transparent_34%)]" />

        {/* noise */}
        <div className="absolute inset-0 opacity-[0.035] bg-[url('/images/noise.png')]" />

        {/* glow */}
        <div className="absolute right-[12%] top-[16%] h-[520px] w-[520px] rounded-full bg-[#8E3217]/20 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 pt-10 pb-28">

          {/* top label */}
          <div className="mb-14 sm:mb-20">
            <span className="text-[10px] sm:text-[11px] tracking-[0.34em] uppercase text-[#D9C8BC]/80">
              Curadoria artesanal · São Paulo
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT */}
            <div className="max-w-[620px]">

              {/* LOGO */}
              <div className="mb-8">
                <Image
                  src="/branding/transparentes/07_vertical.png"
                  alt="Curadoria Raiz"
                  width={900}
                  height={900}
                  priority
                  className="
                    w-[260px]
                    sm:w-[340px]
                    md:w-[420px]
                    lg:w-[500px]
                    xl:w-[560px]
                    h-auto
                    object-contain
                  "
                />
              </div>

              {/* TITLE */}
              <h1
                className="
                  font-serif
                  font-normal
                  tracking-[-0.01em]
                  text-[#F5EEE8]
                  leading-[0.92]

                  text-[3.3rem]
                  sm:text-[4.4rem]
                  md:text-[5.6rem]
                  lg:text-[6rem]

                  max-w-[620px]
                "
              >
                Comida, vinho e pequenos produtores em ritmo humano.
              </h1>

              {/* SUBTEXT */}
              <p
                className="
                  mt-8
                  sm:mt-10
                  text-[15px]
                  sm:text-[16px]
                  leading-[1.9]
                  text-[#D8C8BE]
                  max-w-[540px]
                "
              >
                Uma seleção mensal de vinho natural, pão de fermentação lenta
                e produtos artesanais escolhidos para desacelerar a cidade
                por algumas horas.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 sm:mt-12 flex flex-wrap gap-4">

                <button
                  className="
                    rounded-full
                    bg-[#C55A36]
                    px-7
                    sm:px-8
                    py-4
                    text-[10px]
                    sm:text-[11px]
                    uppercase
                    tracking-[0.28em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#D66A45]
                    hover:scale-[1.02]
                  "
                >
                  Reservar edição atual
                </button>

                <button
                  className="
                    rounded-full
                    border
                    border-[#7A5448]
                    px-7
                    sm:px-8
                    py-4
                    text-[10px]
                    sm:text-[11px]
                    uppercase
                    tracking-[0.28em]
                    text-[#F1E6DF]
                    transition-all
                    duration-300
                    hover:border-[#B97B63]
                    hover:bg-white/5
                  "
                >
                  Conheça o manifesto
                </button>
              </div>

              <div className="mt-9 text-[9px] sm:text-[10px] uppercase tracking-[0.34em] text-[#9D7D72]">
                Produção limitada · 30 unidades por edição
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-[#D5C5BB]/18
                  bg-[#241411]
                  p-2 sm:p-3
                  shadow-[0_40px_120px_rgba(0,0,0,0.55)]
                "
              >
                <Image
                  src="/images/apagao-editorial.webp"
                  alt="Apagão Rosé Natural"
                  width={640}
                  height={760}
                  className="
                    w-[320px]
                    sm:w-[420px]
                    md:w-[480px]
                    lg:w-[520px]

                    h-auto
                    object-cover
                    rounded-[24px]
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* SMOOTH TRANSITION */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[320px]
            bg-gradient-to-b
            from-transparent
            via-[rgba(107,43,24,0.04)]
            to-[#F3EEE8]
            pointer-events-none
          "
        />
      </section>

      {/* MANIFESTO */}
      <section className="py-24 sm:py-32 lg:py-36">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">

            {/* LEFT */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.34em] text-[#CBBCAF]">
                Manifesto
              </span>

              <h2
                className="
                  mt-8
                  sm:mt-10
                  font-serif
                  font-normal
                  tracking-[-0.01em]
                  text-[#D7CAC0]
                  leading-[0.92]

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

            {/* RIGHT */}
            <div className="max-w-[620px]">

              <h3
                className="
                  font-serif
                  font-normal
                  tracking-[-0.01em]
                  text-[#4A2A22]
                  leading-[0.98]

                  text-[2.8rem]
                  sm:text-[3.6rem]
                  lg:text-[4.4rem]
                "
              >
                A Curadoria Raiz nasce do desejo de aproximar pequenos
                produtores do ritmo da cidade.
              </h3>

              <div className="mt-10 sm:mt-12 space-y-7 text-[15px] sm:text-[16px] leading-[1.9] text-[#735D54]">
                <p>
                  Cada edição reúne vinho vivo, pão artesanal e conservas
                  escolhidas manualmente. Não apenas pelo sabor, mas pela
                  história, origem e modo de produção.
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
      <section className="pb-24 sm:pb-32 lg:pb-36">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8">

          <div className="mb-14 sm:mb-16">
            <span className="text-[10px] uppercase tracking-[0.34em] text-[#CBBCAF]">
              Drop #01
            </span>

            <h2
              className="
                mt-5
                font-serif
                font-normal
                tracking-[-0.01em]
                text-[#D3C4B9]
                leading-[0.96]

                text-[3.4rem]
                sm:text-[4.4rem]
                lg:text-[5rem]
              "
            >
              O Trio da Vez
            </h2>

            <p className="mt-6 max-w-[720px] text-[15px] sm:text-[16px] leading-[1.9] text-[#7B655C]">
              Uma combinação pensada para acompanhar o fim da tarde
              entre Santa Cecília, Higienópolis, Barra Funda e Vila Buarque.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                image: "/images/apagao-packshot.webp",
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

                <div className="overflow-hidden rounded-[28px] bg-[#ECE4DD]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={620}
                    className="
                      h-[360px]
                      sm:h-[420px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                <h3
                  className="
                    mt-6
                    font-serif
                    font-normal
                    tracking-[-0.01em]
                    text-[#3C241E]
                    leading-[1]

                    text-[2rem]
                    sm:text-[2.2rem]
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#7B665E]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCER */}
      <section className="relative h-[620px] sm:h-[760px] overflow-hidden">

        <Image
          src="/images/produtor-faccin.webp"
          alt="Curadoria feita perto de quem produz"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8">

            <div className="max-w-[620px]">

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#E9D9CF]/80">
                Pequenos produtores
              </span>

              <h2
                className="
                  mt-8
                  font-serif
                  font-normal
                  tracking-[-0.01em]
                  text-white
                  leading-[0.94]

                  text-[3.6rem]
                  sm:text-[5rem]
                  lg:text-[5.8rem]
                "
              >
                Curadoria feita perto de quem produz.
              </h2>

              <p className="mt-8 sm:mt-10 text-[15px] sm:text-[17px] leading-[1.9] text-[#E9DCD5]">
                Cada edição nasce da proximidade com produtores independentes,
                agricultura sustentável e processos artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-36">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8">

          <div
            className="
              relative
              overflow-hidden
              rounded-[34px]
              sm:rounded-[42px]
              bg-[#1E0F0B]
              px-6
              sm:px-10
              py-20
              sm:py-28
              text-center
            "
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(173,67,36,0.45),transparent_34%)]" />

            <div className="relative z-10">

              <div className="mx-auto mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B84E2D] text-sm text-white">
                R
              </div>

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#C8A99C]">
                Próxima edição
              </span>

              <h2
                className="
                  mx-auto
                  mt-8
                  max-w-[760px]
                  font-serif
                  font-normal
                  tracking-[-0.01em]
                  text-[#F8F2EC]
                  leading-[0.94]

                  text-[3.2rem]
                  sm:text-[4.6rem]
                  lg:text-[5.4rem]
                "
              >
                Reservas abertas para o Drop #01
              </h2>

              <p className="mx-auto mt-8 sm:mt-10 max-w-[680px] text-[15px] sm:text-[16px] leading-[1.9] text-[#D7C3B9]">
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque e Barra Funda.
              </p>

              <button
                className="
                  mt-12 sm:mt-14
                  rounded-full
                  bg-[#D96B41]
                  px-9
                  py-5
                  text-[10px]
                  sm:text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#E27A51]
                  hover:scale-[1.03]
                "
              >
                Reservar meu drop
              </button>

              <div className="mt-10 text-[9px] sm:text-[10px] uppercase tracking-[0.32em] text-[#9D7B6F]">
                Pagamento em até 3x · disponível via link
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E4D9D0] py-12 sm:py-14">
        <div className="mx-auto flex flex-col gap-8 sm:gap-10 lg:flex-row items-center justify-between max-w-[1320px] px-6 sm:px-8">

          <Image
            src="/branding/transparentes/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            width={340}
            height={90}
            className="
              h-auto
              w-[180px]
              sm:w-[230px]
              lg:w-[260px]
            "
          />

          <span className="text-[10px] uppercase tracking-[0.34em] text-[#B2A197] text-center">
            Curadoria artesanal · São Paulo
          </span>

          <span className="text-[10px] uppercase tracking-[0.28em] text-[#B7A69C] text-center">
            © 2026 Curadoria Raiz
          </span>
        </div>
      </footer>
    </main>
  );
}
