import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F3EEE8] text-[#3E241D] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen bg-[#1A0C06] text-[#F7F1EB]">

        {/* cinematic background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,28,0.36),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(110,33,16,0.22),transparent_34%)]" />

        <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/noise.png')]" />

        {/* glow */}
        <div className="absolute right-[14%] top-[24%] h-[520px] w-[520px] rounded-full bg-[#A43D1F]/20 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 pt-10 pb-24">

          {/* top label */}
          <div className="mb-20">
            <span className="text-[11px] tracking-[0.22em] uppercase text-[#D9C8BC]/80">
              Curadoria artesanal · São Paulo
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div className="max-w-[640px]">

              {/* LOGO */}
              <div className="mb-10">
                <Image
                  src="/branding/transparentes/07_vertical.png"
                  alt="Curadoria Raiz"
                  width={820}
                  height={820}
                  priority
                  className="
                    w-[420px]
                    sm:w-[520px]
                    lg:w-[760px]
                    xl:w-[820px]
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
                  text-[4.2rem]
                  sm:text-[5rem]
                  lg:text-[6.2rem]
                  leading-[0.96]
                  tracking-[-0.01em]
                  text-[#F5EEE8]
                  max-w-[680px]
                "
              >
                Comida, vinho e pequenos produtores em ritmo humano.
              </h1>

              {/* SUBTEXT */}
              <p className="mt-10 text-[15px] leading-[1.75] text-[#D8C8BE] max-w-[500px]">
                Uma seleção mensal de vinho natural, pão de fermentação lenta
                e produtos artesanais escolhidos para desacelerar a cidade
                por algumas horas.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-wrap gap-4">

                <button
                  className="
                    rounded-full
                    bg-[#C55A36]
                    px-8
                    py-4
                    text-[11px]
                    uppercase
                    tracking-[0.22em]
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
                    px-8
                    py-4
                    text-[11px]
                    uppercase
                    tracking-[0.22em]
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

              <div className="mt-10 text-[10px] uppercase tracking-[0.22em] text-[#9D7D72]">
                Produção limitada · 30 unidades por edição
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-[#D5C5BB]/20
                  bg-[#241411]
                  p-3
                  shadow-[0_40px_120px_rgba(0,0,0,0.55)]
                "
              >
                <Image
                  src="/images/apagao-editorial.webp"
                  alt="Apagão Rosé Natural"
                  width={640}
                  height={760}
                  className="
                    w-[360px]
                    sm:w-[460px]
                    lg:w-[520px]
                    h-[460px]
                    sm:h-[560px]
                    lg:h-[620px]
                    object-cover
                    rounded-[26px]
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* smoother transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[#5A2417]/20 to-[#F3EEE8]" />
      </section>

      {/* MANIFESTO */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8">

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-start">

            {/* LEFT */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#CBBCAF]">
                Manifesto
              </span>

              <h2
                className="
                  mt-10
                  font-serif
                  font-normal
                  text-[3.8rem]
                  sm:text-[5rem]
                  lg:text-[6.4rem]
                  leading-[0.96]
                  tracking-[-0.01em]
                  text-[#D7CAC0]
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
                  text-[2.6rem]
                  sm:text-[3.2rem]
                  lg:text-[4rem]
                  leading-[1]
                  tracking-[-0.01em]
                  text-[#4A2A22]
                "
              >
                A Curadoria Raiz nasce do desejo de aproximar pequenos
                produtores do ritmo da cidade.
              </h3>

              <div className="mt-12 space-y-8 text-[16px] leading-[1.85] text-[#735D54]">
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
      <section className="pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8">

          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#CBBCAF]">
              Drop #01
            </span>

            <h2
              className="
                mt-5
                font-serif
                font-normal
                text-[3.2rem]
                sm:text-[4rem]
                lg:text-[5rem]
                leading-[0.98]
                tracking-[-0.01em]
                text-[#D3C4B9]
              "
            >
              O Trio da Vez
            </h2>

            <p className="mt-6 max-w-[720px] text-[16px] leading-[1.75] text-[#7B655C]">
              Uma combinação pensada para acompanhar o fim da tarde
              entre Santa Cecília, Higienópolis, Barra Funda e Vila Buarque.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

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
                      h-[430px]
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
                    mt-7
                    font-serif
                    font-normal
                    text-[2rem]
                    sm:text-[2.2rem]
                    leading-[1.02]
                    tracking-[-0.01em]
                    text-[#3C241E]
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-[1.75] text-[#7B665E]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCER BANNER */}
      <section className="relative h-[720px] overflow-hidden">

        <Image
          src="/images/produtor-faccin.webp"
          alt="Curadoria feita perto de quem produz"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8">

            <div className="max-w-[620px]">

              <span className="text-[10px] uppercase tracking-[0.22em] text-[#E9D9CF]/80">
                Pequenos produtores
              </span>

              <h2
                className="
                  mt-8
                  font-serif
                  font-normal
                  text-[3.4rem]
                  sm:text-[4.4rem]
                  lg:text-[5.4rem]
                  leading-[0.96]
                  tracking-[-0.01em]
                  text-white
                "
              >
                Curadoria feita perto de quem produz.
              </h2>

              <p className="mt-10 text-[17px] leading-[1.85] text-[#E9DCD5]">
                Cada edição nasce da proximidade com produtores independentes,
                agricultura sustentável e processos artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8">

          <div
            className="
              relative
              overflow-hidden
              rounded-[42px]
              bg-[#1E0F0B]
              px-6
              sm:px-10
              py-20
              lg:py-28
              text-center
            "
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(173,67,36,0.45),transparent_34%)]" />

            <div className="relative z-10">

              <div className="mx-auto mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B84E2D] text-sm text-white">
                R
              </div>

              <span className="text-[10px] uppercase tracking-[0.22em] text-[#C8A99C]">
                Próxima edição
              </span>

              <h2
                className="
                  mx-auto
                  mt-8
                  max-w-[760px]
                  font-serif
                  font-normal
                  text-[3.2rem]
                  sm:text-[4.2rem]
                  lg:text-[5rem]
                  leading-[0.96]
                  tracking-[-0.01em]
                  text-[#F8F2EC]
                "
              >
                Reservas abertas para o Drop #01
              </h2>

              <p className="mx-auto mt-10 max-w-[680px] text-[16px] leading-[1.85] text-[#D7C3B9]">
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque e Barra Funda.
              </p>

              <button
                className="
                  mt-14
                  rounded-full
                  bg-[#D96B41]
                  px-10
                  py-5
                  text-[11px]
                  uppercase
                  tracking-[0.22em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#E27A51]
                  hover:scale-[1.03]
                "
              >
                Reservar meu drop
              </button>

              <div className="mt-10 text-[10px] uppercase tracking-[0.22em] text-[#9D7B6F]">
                Pagamento em até 3x · disponível via link
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E4D9D0] py-14">
        <div className="mx-auto flex flex-col gap-8 lg:flex-row items-center justify-between max-w-[1320px] px-6 sm:px-8">

          <Image
            src="/branding/transparentes/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            width={360}
            height={90}
            className="
              h-auto
              w-[210px]
              sm:w-[260px]
              lg:w-[320px]
            "
          />

          <span className="text-[10px] uppercase tracking-[0.22em] text-[#B2A197] text-center">
            Curadoria artesanal · São Paulo
          </span>

          <span className="text-[10px] uppercase tracking-[0.22em] text-[#B7A69C] text-center">
            © 2026 Curadoria Raiz
          </span>
        </div>
      </footer>
    </main>
  );
}
