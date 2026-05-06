import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F3EEE8] text-[#3E241D] overflow-hidden">

     {/* HERO */}
<section className="relative min-h-screen bg-[#1A0C06] text-[#F7F1EB] overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0">

    <Image
      src="/images/curadoria-raiz-hero-composicao-vertical.png"
      alt="Curadoria Raiz"
      fill
      priority
      className="
        object-cover
        object-[78%_center]
        lg:object-[82%_center]
      "
    />

    {/* OVERLAY ESQUERDO */}
    <div
      className="
        absolute
        inset-0
        bg-[linear-gradient(to_right,rgba(16,8,6,0.96)_0%,rgba(16,8,6,0.92)_26%,rgba(16,8,6,0.72)_42%,rgba(16,8,6,0.38)_58%,transparent_78%)]
      "
    />

    {/* NOISE */}
    <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/noise.png')]" />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 mx-auto max-w-[1440px] px-8">

    {/* TOP BAR */}
    <div className="flex items-center justify-between pt-8">

      <span className="text-[10px] uppercase tracking-[0.38em] text-[#D7C2B5]">
        Curadoria artesanal · São Paulo
      </span>

      <span className="hidden lg:block text-[10px] uppercase tracking-[0.34em] text-[#8B675B]">
        Drop #01
      </span>
    </div>

    {/* GRID */}
    <div className="grid lg:grid-cols-[620px_1fr] items-center min-h-[92vh]">

      {/* LEFT */}
      <div className="relative z-20 max-w-[620px] py-20 lg:py-0">

        {/* LOGO */}
        <div className="mb-16">

          <Image
            src="/branding/transparentes/07_vertical.png"
            alt="Curadoria Raiz"
            width={1200}
            height={1200}
            priority
            className="
              w-[320px]
              md:w-[430px]
              lg:w-[560px]
              xl:w-[620px]
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
            text-[#F7F0EA]
            leading-[0.88]
            text-[4.5rem]
            md:text-[5.6rem]
            lg:text-[6.2rem]
            max-w-[620px]
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
            text-[#E1D2C8]
          "
        >
          Uma seleção mensal de vinho natural, pão de fermentação lenta
          e produtos artesanais escolhidos para desacelerar a cidade
          por algumas horas.
        </p>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-wrap gap-4">

          <a
            href="#cta"
            className="
              rounded-full
              bg-[#D3673C]
              px-8
              py-4
              text-[11px]
              uppercase
              tracking-[0.28em]
              text-white
              transition-all
              duration-300
              hover:bg-[#E0794F]
            "
          >
            Reservar edição atual
          </a>

          <a
            href="#produtos"
            className="
              rounded-full
              border
              border-[#7F5A4E]
              px-8
              py-4
              text-[11px]
              uppercase
              tracking-[0.28em]
              text-[#F2E7E0]
              transition-all
              duration-300
              hover:bg-white/5
            "
          >
            Conheça os produtos
          </a>
        </div>

        {/* INFO */}
        <div className="mt-10 text-[10px] uppercase tracking-[0.34em] text-[#B08B7D]">
          Produção limitada · 30 unidades por edição
        </div>
      </div>

      {/* RIGHT */}
      <div />
    </div>
  </div>

  {/* TRANSIÇÃO */}
  <div
    className="
      absolute
      bottom-0
      left-0
      right-0
      h-[260px]
      bg-[linear-gradient(to_bottom,rgba(26,12,6,0)_0%,rgba(93,48,30,0.10)_42%,#F3EEE8_100%)]
    "
  />
</section>

      {/* MANIFESTO */}
      <section className="py-36">
        <div className="mx-auto max-w-[1320px] px-8">

          <div className="grid lg:grid-cols-2 gap-28 items-start">

            {/* LEFT */}
            <div>

              <span className="text-[10px] uppercase tracking-[0.38em] text-[#B8A69C]">
                Manifesto
              </span>

              <h2
                className="
                  mt-10
                  font-serif
                  font-normal
                  tracking-[-0.02em]
                  leading-[0.92]
                  text-[4.8rem]
                  md:text-[5.8rem]
                  text-[#B8A59A]
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
                  tracking-[-0.02em]
                  leading-[0.95]
                  text-[3.2rem]
                  md:text-[4rem]
                  text-[#4A2A22]
                "
              >
                A Curadoria Raiz nasce do desejo de aproximar pequenos
                produtores do ritmo da cidade.
              </h3>

              <div className="mt-12 space-y-8 text-[16px] leading-[2] text-[#735D54]">

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
      <section id="produtos" className="pb-36">
        <div className="mx-auto max-w-[1320px] px-8">

          <div className="mb-16">

            <span className="text-[10px] uppercase tracking-[0.38em] text-[#B8A69C]">
              Drop #01
            </span>

            <h2
              className="
                mt-5
                font-serif
                font-normal
                tracking-[-0.02em]
                leading-[0.94]
                text-[4rem]
                md:text-[5rem]
                text-[#BFAEA2]
              "
            >
              O Trio da Vez
            </h2>

            <p className="mt-6 max-w-[720px] text-[16px] leading-[2] text-[#7B655C]">
              Uma combinação pensada para acompanhar o fim da tarde
              entre Santa Cecília, Higienópolis, Barra Funda e Vila Buarque.
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
                    tracking-[-0.02em]
                    leading-[1]
                    text-[2rem]
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

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

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
                  font-normal
                  tracking-[-0.03em]
                  leading-[0.92]
                  text-[4.6rem]
                  md:text-[5.4rem]
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
      <section id="cta" className="py-40">

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
                  tracking-[-0.03em]
                  leading-[0.94]
                  text-[4.4rem]
                  md:text-[5rem]
                  text-[#F8F2EC]
                "
              >
                Reservas abertas para o Drop #01
              </h2>

              <p className="mx-auto mt-10 max-w-[720px] text-[16px] leading-[2] text-[#D7C3B9]">
                Entregas feitas de bicicleta às sextas-feiras e sábados
                em Santa Cecília, Higienópolis, Barra Funda e Vila Buarque.
              </p>

              <div className="mt-14 flex flex-wrap items-center justify-center gap-4">

                <a
                  href="#"
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
                </a>

                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border
                    border-[#7F5A4E]
                    px-10
                    py-5
                    text-[11px]
                    uppercase
                    tracking-[0.28em]
                    text-[#F2E7E0]
                    transition-all
                    duration-300
                    hover:bg-white/5
                    inline-flex
                    items-center
                    justify-center
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

      {/* FOOTER */}
      <footer className="border-t border-[#E4D9D0] py-14">

        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-8">

          <Image
            src="/branding/transparentes/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            width={320}
            height={90}
            className="h-auto w-[300px]"
          />

          <span className="hidden md:block text-[10px] uppercase tracking-[0.34em] text-[#B2A197]">
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
