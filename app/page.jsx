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

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 pt-6 sm:pt-8 pb-20 lg:pb-24">

          {/* TOPBAR */}
          <div className="flex items-start justify-between gap-6">

            <span
              className="
                max-w-[180px]
                text-[10px]
                leading-[1.7]
                uppercase
                tracking-[0.34em]
                text-[#D8C6BC]/70

                sm:max-w-none
                sm:whitespace-nowrap
              "
            >
              Curadoria artesanal · São Paulo
            </span>

            <span
              className="
                text-right
                text-[10px]
                uppercase
                tracking-[0.34em]
                leading-[1.6]
                text-[#D8C6BC]/50
                whitespace-nowrap
              "
            >
              Drop #01
            </span>
          </div>

          {/* HERO GRID */}
          <div className="mt-10 lg:mt-14 grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">

            {/* MOBILE IMAGE FIRST */}
            <div className="relative flex justify-center lg:hidden order-1">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  shadow-[0_40px_120px_rgba(0,0,0,0.38)]
                  w-full
                  max-w-[560px]
                "
              >

                <Image
                  src="/images/curadoria-raiz-hero-composicao-vertical.png"
                  alt="Curadoria Raiz"
                  width={1200}
                  height={1600}
                  priority
                  className="
                    h-auto
                    w-full
                    object-cover
                  "
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.12),transparent_30%)]" />
              </div>
            </div>

            {/* LEFT */}
            <div className="max-w-[640px] order-2 lg:order-1">

              {/* LOGO */}
              <div className="mb-10 lg:mb-14 flex justify-center lg:justify-start">

                <Image
                  src="/branding/transparentes/07_vertical.png"
                  alt="Curadoria Raiz"
                  width={1100}
                  height={1100}
                  priority
                  className="
                    w-[240px]
                    sm:w-[300px]
                    lg:w-[760px]
                    xl:w-[860px]
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
                  tracking-[-0.04em]
                  leading-[0.88]
                  text-[#F8F2EC]

                  text-[4.4rem]
                  sm:text-[5.6rem]
                  lg:text-[5.6rem]

                  max-w-[340px]
                  sm:max-w-[520px]
                  lg:max-w-[640px]
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
                  mt-8 sm:mt-10
                  max-w-[520px]
                  text-[15px]
                  sm:text-[17px]
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
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4">

                <a
                  href="#reserva"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D66A41]
                    px-8
                    py-5
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
                </a>

                <a
                  href="#produtos"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#7A5448]
                    px-8
                    py-5
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
                </a>
              </div>

              <div className="mt-10 text-[10px] uppercase tracking-[0.34em] text-[#9D7D72]">
                Produção limitada · 30 unidades por edição
              </div>
            </div>

            {/* DESKTOP IMAGE */}
            <div className="relative hidden lg:flex justify-center lg:justify-end order-2">

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
                  width={860}
                  height={1180}
                  priority
                  className="
                    h-auto
                    w-[560px]
                    xl:w-[620px]
                    object-cover
                  "
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.12),transparent_30%)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRIO */}
      <section
        id="produtos"
        className="px-6 sm:px-8 py-24 lg:py-32"
      >

        <div className="mx-auto max-w-[1320px]">

          <span className="text-[10px] uppercase tracking-[0.34em] text-[#C8B5AC]">
            Drop #01
          </span>

          <h2
            className="
              mt-5
              font-serif
              text-[#C8B0A7]
              tracking-[-0.04em]
              leading-[0.9]

              text-[4.2rem]
              sm:text-[5.4rem]
              lg:text-[6rem]

              max-w-[720px]
            "
          >
            O Trio da
            <br className="hidden sm:block" />
            {" "}Vez
          </h2>

          <p
            className="
              mt-10
              max-w-[780px]
              text-[17px]
              leading-[2]
              text-[#8E746B]
            "
          >
            Uma combinação pensada para acompanhar o fim da tarde em Santa Cecília,
            Vila Buarque, Higienópolis, Campos Elíseos e Barra Funda.
          </p>
        </div>
      </section>

      {/* PRODUTOR */}
      <section className="relative overflow-hidden">

        <div className="relative min-h-[760px] lg:min-h-[920px]">

          <Image
            src="/images/produtor-vinho.jpg"
            alt="Produtor"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/28" />

          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.58),rgba(0,0,0,0.18))]" />

          <div className="relative z-10 mx-auto flex min-h-[760px] lg:min-h-[920px] max-w-[1320px] items-start lg:items-center px-6 sm:px-8 py-20">

            <div className="max-w-[760px]">

              <span className="text-[10px] uppercase tracking-[0.34em] text-white/70">
                Pequenos produtores
              </span>

              <h2
                className="
                  mt-6
                  font-serif
                  text-white
                  tracking-[-0.05em]
                  leading-[0.9]

                  text-[4.8rem]
                  sm:text-[6rem]
                  lg:text-[7rem]

                  max-w-[780px]
                "
              >
                Curadoria
                <br />
                feita perto de
                <br />
                quem produz.
              </h2>

              <p
                className="
                  mt-8
                  max-w-[560px]
                  text-[17px]
                  leading-[2]
                  text-white/92
                "
              >
                Cada edição nasce da proximidade com produtores independentes,
                agricultura sustentável e processos artesanais feitos em pequena escala.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="reserva"
        className="px-6 sm:px-8 py-24 lg:py-32"
      >

        <div
          className="
            relative
            mx-auto
            max-w-[1180px]
            overflow-hidden
            rounded-[34px]
            bg-[#250400]
            px-8
            py-20
            text-center
            text-white
          "
        >

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(180,70,32,0.26),transparent_36%)]" />

          <div className="relative z-10">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D66A41] text-sm uppercase tracking-[0.2em]">
              R
            </div>

            <div className="mt-8 text-[10px] uppercase tracking-[0.34em] text-[#B79B90]">
              Próxima edição
            </div>

            <h2
              className="
                mt-8
                font-serif
                tracking-[-0.05em]
                leading-[0.92]

                text-[4rem]
                sm:text-[5rem]
                lg:text-[5.8rem]
              "
            >
              Reservas abertas
              <br />
              para o Drop #01
            </h2>

            <p
              className="
                mx-auto
                mt-8
                max-w-[700px]
                text-[16px]
                leading-[2]
                text-white/82
              "
            >
              Entregas feitas de bicicleta às sextas-feiras e sábados
              em Santa Cecília, Vila Buarque, Higienópolis,
              Campos Elíseos e Barra Funda.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

              <a
                href="#"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D66A41]
                  px-10
                  py-5
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-white
                  transition-all
                  duration-500
                  hover:bg-[#E0784F]
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
                  border-[#6E4337]
                  px-10
                  py-5
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-white
                  transition-all
                  duration-500
                  hover:bg-white/5
                "
              >
                Tirar dúvidas no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E5DDD7] px-6 sm:px-8 py-10">

        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <Image
            src="/branding/transparentes/01_principal_escuro.png"
            alt="Curadoria Raiz"
            width={420}
            height={140}
            className="
              w-[210px]
              lg:w-[340px]
              h-auto
              object-contain
            "
          />

          <div className="text-[10px] uppercase tracking-[0.34em] text-[#B5A39B]">
            Curadoria artesanal · São Paulo
          </div>

          <div className="text-[10px] uppercase tracking-[0.34em] text-[#B5A39B]">
            © 2026 Curadoria Raiz
          </div>
        </div>
      </footer>
    </main>
  );
}
