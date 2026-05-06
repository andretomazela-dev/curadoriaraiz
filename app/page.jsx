import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F3EEE8] text-[#3E241D] overflow-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1A0C06] text-[#F7F1EB]">

        {/* cinematic gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(130,38,18,0.35),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(110,33,16,0.22),transparent_32%)]" />

        {/* subtle texture */}
        <div className="absolute inset-0 opacity-[0.045] bg-[url('/images/noise.png')]" />

        {/* warm glow */}
        <div className="absolute right-[10%] top-[12%] h-[520px] w-[520px] rounded-full bg-[#A43D1F]/12 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-8 pt-8 pb-28">

          {/* topbar */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.34em] text-[#D8C6BC]/70">
              Curadoria artesanal · São Paulo
            </span>

            <span className="text-[10px] uppercase tracking-[0.34em] text-[#D8C6BC]/50">
              Drop #01
            </span>
          </div>

          {/* hero grid */}
          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">

            {/* LEFT */}
            <div className="max-w-[560px]">

              {/* LOGO */}
              <div className="mb-14">
                <Image
                  src="/branding/transparentes/07_vertical.png"
                  alt="Curadoria Raiz"
                  width={700}
                  height={700}
                  priority
                  className="
                    w-[240px]
                    lg:w-[340px]
                    xl:w-[380px]
                    h-auto
                    object-contain
                  "
                />
              </div>

              {/* HEADLINE */}
              <h1
                className="
                  font-serif
                  font-normal
                  tracking-[-0.03em]
                  leading-[0.92]
                  text-[#F8F2EC]
                  max-w-[520px]
                  text-[4.4rem]
                  lg:text-[5.2rem]
                "
              >
                Curadoria
                <br />

                <span className="text-[1.12em]">
                  artesanal
                </span>

                <br />
                em ritmo
                <br />

                <span className="text-[1.12em]">
                  humano.
                </span>
              </h1>

              {/* SUBTEXT */}
              <p
                className="
                  mt-10
                  max-w-[520px]
                  text-[16px]
                  leading-[2]
                  text-[#E3D7D0]/92
                "
              >
                Uma seleção mensal de vinho natural,
                pão de fermentação lenta e produtos artesanais
                escolhidos para desacelerar a cidade
                por algumas horas urbanas.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-wrap gap-4">

                <button
                  className="
                    rounded-full
                    bg-[#D66A41]
                    px-8
                    py-4
                    text-[11px]
                    uppercase
                    tracking-[0.26em]
                    text-white
                    transition-all
                    duration-500
                    hover:bg-[#E0784F]
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
                    tracking-[0.24em]
                    text-[#F1E6DF]
                    transition-all
                    duration-500
                    hover:border-[#B97B63]
                    hover:bg-white/5
                  "
                >
                  Conheça os produtos
                </button>
              </div>

              <div className="mt-10 text-[10px] uppercase tracking-[0.34em] text-[#9D7D72]">
                Produção limitada · 24 unidades por edição
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  shadow-[0_40px_120px_rgba(0,0,0,0.38)]
                "
              >

                <Image
                  src="/images/curadoria-raiz-hero-composicao-vertical.png"
                  alt="Curadoria Raiz"
                  width={900}
                  height={1200}
                  priority
                  className="
                    w-[420px]
                    lg:w-[520px]
                    xl:w-[580px]
                    h-auto
                    object-cover
                    scale-[1.04]
                    transition-transform
                    duration-[1400ms]
                    hover:scale-[1.07]
                  "
                />

                {/* subtle cinematic vignette */}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.16),transparent_35%)]" />
              </div>
            </div>
          </div>
        </div>

        {/* improved warm fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#4A1E12]/35 to-[#F3EEE8]" />
      </section>

      {/* MANIFESTO */}
      <section className="py-36">
        <div className="mx-auto max-w-[1320px] px-8">

          <div className="grid lg:grid-cols-2 gap-28 items-start">

            {/* LEFT */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.38em] text-[#CBBCAF]">
                Manifesto
              </span>

              <h2
                className="
                  mt-10
                  font-serif
                  font-normal
                  text-[6rem]
                  leading-[0.92]
                  tracking-[-0.04em]
                  text-[#C7B2A5]
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
                  font-normal
                  text-[4rem]
                  leading-[0.96]
                  tracking-[-0.03em]
                  text-[#4A2A22]
                "
              >
                A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade.
              </h3>

              <div className="mt-12 space-y-8 text-[16px] leading-[2.1] text-[#735D54]">
                <p>
                  Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente. Não apenas pelo sabor, mas pela história, origem e modo de produção.
                </p>

                <p>
                  Sem excesso. Sem pressa. Apenas alimento honesto, logística consciente e encontros que fazem sentido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pb-36">
        <div className="mx-auto max-w-[1320px] px-8">

          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.38em] text-[#CBBCAF]">
              Drop #01
            </span>

            <h2
              className="
                mt-5
                font-serif
                font-normal
                text-[5rem]
                leading-[0.94]
                tracking-[-0.04em]
                text-[#B89E91]
              "
            >
              O Trio da Vez
            </h2>

            <p className="mt-6 max-w-[720px] text-[16px] leading-[2] text-[#7B655C]">
              Uma combinação pensada para acompanhar o fim da tarde entre Santa Cecília, Higienópolis, Barra Funda e Vila Buarque.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">

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

                <div
                  className="
                    overflow-hidden
                    rounded-[28px]
                    bg-[#ECE4DD]
                    shadow-[0_12px_40px_rgba(0,0,0,0.04)]
                    transition-all
                    duration-700
                    group-hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)]
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
                      duration-[1400ms]
                      group-hover:scale-[1.035]
                    "
                  />
                </div>

                <h3
                  className="
                    mt-7
                    font-serif
                    font-normal
                    text-[2.15rem]
                    leading-[1]
                    tracking-[-0.03em]
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

        <div className="absolute inset-0 bg-black/42" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/24 to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1320px] px-8">

            <div className="max-w-[560px] -mt-10">

              <span className="text-[10px] uppercase tracking-[0.38em] text-[#E9D9CF]/80">
                Pequenos produtores
              </span>

              <h2
                className="
                  mt-8
                  font-serif
                  font-normal
                  text-[5rem]
                  leading-[0.92]
                  tracking-[-0.04em]
                  text-white
                "
              >
                Curadoria feita perto de quem produz.
              </h2>

              <p className="mt-10 text-[17px] leading-[2] text-[#E9DCD5]">
                Cada edição nasce da proximidade com produtores independentes, agricultura sustentável e processos artesanais reais.
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
              bg-[#1E0F0B]
              px-10
              py-28
              text-center
            "
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(173,67,36,0.45),transparent_34%)]" />

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
                  font-normal
                  text-[4.8rem]
                  leading-[0.96]
                  tracking-[-0.04em]
                  text-[#F8F2EC]
                "
              >
                Reservas abertas para o Drop #01
              </h2>

              <p className="mx-auto mt-10 max-w-[780px] text-[16px] leading-[2] text-[#D7C3B9]">
                Entregas feitas de bicicleta às sextas-feiras e sábados em Santa Cecília, Higienópolis, Barra Funda e Vila Buarque.
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
                    hover:scale-[1.03]
                  "
                >
                  Reservar meu drop
                </button>

                <button
                  className="
                    rounded-full
                    border
                    border-[#6B4A3F]
                    px-10
                    py-5
                    text-[11px]
                    uppercase
                    tracking-[0.26em]
                    text-[#DCC8BE]
                    transition-all
                    duration-300
                    hover:border-[#8A5E50]
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
            width={300}
            height={90}
            className="h-auto w-[220px]"
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
