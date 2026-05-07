import Image from "next/image";

export default function Home() {
  return (
    <main   id="top"   className="bg-[#F3EEE8] text-[#3E241D] overflow-x-hidden" >

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1A0C06] text-[#F7F1EB]">

        {/* cinematic gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(130,38,18,0.35),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(110,33,16,0.22),transparent_32%)]" />

        {/* subtle texture */}
        <div className="absolute inset-0 opacity-[0.045] bg-[url('/images/noise.png')]" />

        {/* warm glow */}
        <div className="absolute right-[10%] top-[12%] h-[520px] w-[520px] rounded-full bg-[#A43D1F]/12 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 pt-6 sm:pt-8 pb-20 sm:pb-24">

          {/* topbar */}
          <div className="flex items-start justify-between gap-6">

            <span
              className="
                max-w-[170px]
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
                shrink-0
                text-right
                text-[10px]
                leading-[1.7]
                uppercase
                tracking-[0.34em]
                text-[#D8C6BC]/50

                sm:whitespace-nowrap
              "
            >
              Drop #01
            </span>
          </div>

          {/* hero grid */}
          <div className="mt-10 sm:mt-14 grid items-center gap-12 lg:gap-14 lg:grid-cols-[0.92fr_1.08fr]">

            {/* LEFT */}
            <div className="max-w-[640px]">

              {/* LOGO */}
              <div className="mb-10 sm:mb-14">
                <Image
                  src="/branding/transparentes/07_vertical.png"
                  alt="Curadoria Raiz"
                  width={1100}
                  height={1100}
                  priority
                  className="
                    w-[448px]
                    sm:w-[420px]
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
                  tracking-[-0.045em]
                  leading-[0.9]
                  text-[#F8F2EC]

                  max-w-[7.6ch]
                  sm:max-w-[640px]

                  text-[3.85rem]
                  sm:text-[4.8rem]
                  lg:text-[5.6rem]
                "
              >
                Curadoria
                <br />

                <span className="text-[1.14em]">
                  artesanal
                </span>

                <br />
                em ritmo
                <br />

                <span className="text-[1.14em]">
                  humano.
                </span>
              </h1>

              {/* SUBTEXT */}
              <p
                className="
                  mt-10
                  max-w-[520px]
                  text-[16px]
                  sm:text-[17px]
                  leading-[1.85]
                  sm:leading-[1.95]
                  text-[#E3D7D0]/92
                "
              >
                Uma seleção mensal de vinho natural,
                pão de fermentação lenta e produtos artesanais
                escolhidos para desacelerar a cidade
                por algumas horas urbanas.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-4">

                <a
                  href="https://tally.so/r/0Qo94N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
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
                </a>

                <a
                  href="#produtos"
                  className="
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
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
                </a>
              </div>

              <div className="mt-10 text-[10px] uppercase tracking-[0.34em] text-[#9D7D72]">
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
                    w-full
                    max-w-[520px]
                    lg:w-[620px]
                    xl:w-[700px]
                    h-auto
                    object-cover
                    scale-[1.04]
                    transition-transform
                    duration-[1400ms]
                    hover:scale-[1.07]
                  "
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.16),transparent_35%)]" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#4A1E12]/35 to-[#F3EEE8]" />
      </section>

      {/* MANIFESTO */}
      <section className="py-24 sm:py-36">
        <div className="mx-auto max-w-[1320px] px-8">

          <div className="grid gap-20 lg:grid-cols-2 lg:gap-28 items-start">

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
                  text-[4.4rem]
                  sm:text-[6rem]
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
                  text-[3.3rem]
                  sm:text-[4rem]
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
      <section id="produtos" className="pb-24 sm:pb-36">
        <div className="mx-auto max-w-[1320px] px-8">

          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.38em] text-[#CBBCAF]">
              Drop #01
            </span>

            <h2
              className="
                mt-5
                max-w-[5ch]
                font-serif
                font-normal
                text-[4rem]
                sm:text-[5.8rem]
                leading-[0.94]
                tracking-[-0.04em]
                text-[#B89E91]
              "
            >
              O Trio da Vez
            </h2>

            <p className="mt-6 max-w-[720px] text-[16px] leading-[2] text-[#7B655C]">
              Uma combinação pensada para acompanhar o fim da tarde em Santa Cecília, Vila Buarque, Higienópolis, Campos Elíseos e Barra Funda.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">

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
                      h-auto
                      sm:h-[430px]
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
      <section className="relative min-h-[720px] sm:h-[760px] overflow-hidden">

        <Image
          src="/images/produtor-faccin.webp"
          alt="Curadoria feita perto de quem produz"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55 sm:bg-black/42" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/38 to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1320px] px-8">

            <div className="max-w-[340px] sm:max-w-[620px] -mt-10">

              <span className="text-[10px] uppercase tracking-[0.38em] text-[#E9D9CF]/82">
                Pequenos produtores
              </span>

              <h2
                className="
                  mt-8
                  font-serif
                  font-normal
                  text-[3.7rem]
                  sm:text-[5rem]
                  leading-[0.92]
                  tracking-[-0.04em]
                  text-white
                "
              >
                Curadoria feita perto de quem produz.
              </h2>

              <p
                className="
                  mt-10
                  max-w-[460px]
                  text-[17px]
                  sm:text-[19px]
                  leading-[1.85]
                  text-[#F5EEE8]
                "
              >
                Cada edição nasce da proximidade com produtores independentes,
                agricultura sustentável e processos artesanais feitos em pequena escala.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
<section className="bg-[#F5F1EB] px-6 py-24 md:px-16 md:py-32">
  <div className="mx-auto max-w-[1180px]">

    <div className="mb-16">
      <p className="mb-4 text-[0.62rem] uppercase tracking-[0.45em] text-[#B8A79D]">
        Como funciona
      </p>

      <h2 className="max-w-[720px] font-serif text-[3rem] leading-[0.95] tracking-[-0.04em] text-[#4A1F1A] md:text-[5.5rem]">
        Reserva simples, entrega humana.
      </h2>
    </div>

    <div className="grid gap-14 border-t border-[#D8CCC3] pt-14 md:grid-cols-3 md:gap-12">

      <div>
        <p className="mb-5 font-serif text-[2.8rem] leading-none text-[#D66A41]">
          01
        </p>

        <h3 className="mb-3 font-serif text-[1.7rem] text-[#4A1F1A]">
          Reserva
        </h3>

        <p className="max-w-[280px] text-[1rem] leading-[1.9] text-[#7A6258]">
          Você reserva sua edição pelo formulário da Curadoria Raiz.
        </p>
      </div>

      <div>
        <p className="mb-5 font-serif text-[2.8rem] leading-none text-[#D66A41]">
          02
        </p>

        <h3 className="mb-3 font-serif text-[1.7rem] text-[#4A1F1A]">
          Confirmação
        </h3>

        <p className="max-w-[280px] text-[1rem] leading-[1.9] text-[#7A6258]">
          Entramos em contato pelo WhatsApp para confirmar entrega e envio do link de pagamento ou PIX.
        </p>
      </div>

      <div>
        <p className="mb-5 font-serif text-[2.8rem] leading-none text-[#D66A41]">
          03
        </p>

        <h3 className="mb-3 font-serif text-[1.7rem] text-[#4A1F1A]">
          Entrega
        </h3>

        <p className="max-w-[320px] text-[1rem] leading-[1.9] text-[#7A6258]">
          As entregas acontecem de bicicleta em Santa Cecília, Vila Buarque, Higienópolis, Campos Elíseos e Barra Funda.
        </p>
      </div>

    </div>

    <div className="mt-16 border-t border-[#E2D8D1] pt-8">
      <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#9D7D72]">
        Produção limitada · apenas 30 edições disponíveis neste drop.
      </p>
    </div>

  </div>
</section>

      {/* CTA */}
      <section id="reserva" className="py-24 sm:py-40">
        <div className="mx-auto max-w-[1320px] px-8">

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

              <span className="text-[10px] uppercase tracking-[0.38em] text-[#C8A99C]">
                Próxima edição
              </span>

              <h2
                className="
                  mx-auto
                  mt-8
                  max-w-[900px]
                  font-serif
                  font-normal
                  text-[4rem]
                  sm:text-[5.2rem]
                  leading-[0.96]
                  tracking-[-0.04em]
                  text-[#F8F2EC]
                "
              >
                Reservas abertas para o Drop #01
              </h2>

              <p className="mx-auto mt-10 max-w-[760px] text-[17px] sm:text-[20px] leading-[1.9] text-[#F2E7DF]">
                Entregas de bicicleta às sextas e sábados em Santa Cecília,
                Vila Buarque, Higienópolis, Campos Elíseos e Barra Funda.
              </p>

              <div className="mt-14 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">

                <a
                  href="https://tally.so/r/0Qo94N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
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
                </a>

                <a
                  href="https://wa.me/5511968468668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
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
                </a>
              </div>

              <div className="mt-10 text-[10px] uppercase tracking-[0.32em] text-[#9D7B6F]">
                Parcelamento em até 2x · disponível via link
              </div>
            </div>
          </div>
        </div>
      </section>
      
{/* BACK TO TOP */}
<div className="flex justify-center pb-10">
  <a
    href="#top"
    className="
      inline-flex
      items-center
      gap-3
      text-[11px]
      uppercase
      tracking-[0.28em]
      text-[#9D7D72]/75
      hover:text-[#D66A41]
      transition-all
      duration-300
      hover:text-[#D66A41]
    "
  >
    ↑ Voltar ao topo
  </a>
</div>
      {/* FOOTER */}
      <footer className="border-t border-[#E4D9D0] py-20">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 text-center lg:flex-row lg:items-center lg:justify-between px-6 sm:px-8">

          <Image
            src="/branding/transparentes/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            width={420}
            height={120}
            className="h-auto w-[448px] sm:w-[320px]"
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
