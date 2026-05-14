import Image from "next/image";

export default function Home() {
  return (
    <main   id="top"   className="bg-[#F3EEE8] text-[#3E241D] overflow-x-hidden" >

{/* HERO */}
<section className="relative overflow-hidden bg-[#1A0C06] text-[#F7F1EB]">

  {/* ========================= */}
  {/* DESKTOP HERO */}
  {/* ========================= */}
  <div className="relative hidden min-h-[100svh] md:block">

    {/* BACKGROUND IMAGE */}
    <div className="absolute inset-0">

      <Image
        src="/images/curadoria-raiz-hero-composicao_02.png"
        alt="Curadoria Raiz"
        fill
        priority
       className="object-cover object-center"
       
      />

      {/* cinematic overlay */}
      <div className="absolute inset-0 bg-black/52 sm:bg-black/44" />

      {/* left gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#120905]/95 via-[#120905]/58 to-transparent" />

      {/* warm glow */}
      <div className="absolute left-[10%] top-[14%] h-[520px] w-[520px] rounded-full bg-[#A43D1F]/12 blur-[150px]" />
    </div>

    <div className="relative z-10 mx-auto max-w-[1680px] px-6 sm:px-8 pt-6 sm:pt-8 pb-20 sm:pb-24">

      {/* TOPBAR */}
      <div className="flex items-start justify-between gap-6">

        <span
          className="
            max-w-[170px]
            text-[11px] sm:text-[12px]
            leading-[1.7]
            uppercase
            tracking-[0.32em]
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
            text-[11px] sm:text-[12px]
            leading-[1.7]
            uppercase
            tracking-[0.32em]
            text-[#D8C6BC]/50

            sm:whitespace-nowrap
          "
        >
          Drop #01
        </span>
      </div>

      {/* HERO CONTENT */}
      <div className="min-h-[calc(100svh-80px)] grid grid-cols-[0.9fr_1.1fr] items-center gap-0">

  {/* LEFT */}
  <div className="relative z-20 max-w-[540px]">
    
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
                lg:w-[640px]
                xl:w-[720px]
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

          <div className="mt-10 text-[11px] sm:text-[12px] uppercase tracking-[0.32em] text-[#9D7D72]">
            Produção limitada · 30 unidades por edição
          </div>

        </div>
      </div>
    </div>

    {/* BOTTOM FADE */}
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#4A1E12]/35 to-[#F3EEE8]" />
  </div>

  {/* ========================= */}
{/* MOBILE HERO */}
{/* ========================= */}
<div className="relative block md:hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0 bg-[#1A0C06]" />

  <div className="relative z-10 px-6 pt-24">

    {/* TOP */}
    <p
      className="
        mb-6
        text-[11px] sm:text-[12px]
        uppercase
        tracking-[0.32em]
        text-[#D8C2B6]
      "
    >
      Curadoria artesanal · São Paulo
    </p>

    {/* LOGO */}
    <div className="mb-12">
      <Image
        src="/branding/transparentes/07_vertical.png"
        alt="Curadoria Raiz"
        width={1100}
        height={1100}
        priority
        className="
          w-[320px]
          h-auto
          object-contain
        "
      />
    </div>

    {/* HEADLINE */}
    <h1
      className="
        max-w-[320px]
        font-serif
        font-normal
        tracking-[-0.045em]
        leading-[0.92]
        text-[#F8F2EC]
        text-[4.2rem]
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

    {/* TEXT */}
    <p
      className="
        mt-8
        max-w-[340px]
        text-[16px]
        leading-[1.9]
        text-[#E3D7D0]/92
      "
    >
      Uma seleção mensal de vinho natural,
      pão de fermentação lenta e produtos artesanais
      escolhidos para desacelerar a cidade
      por algumas horas urbanas.
    </p>

    {/* BUTTONS */}
    <div className="mt-10 flex flex-col gap-4">

      <a
        href="https://tally.so/r/0Qo94N"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          w-full
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
        "
      >
        Reservar edição atual
      </a>

      <a
        href="#produtos"
        className="
          inline-flex
          w-full
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
        "
      >
        Conheça os produtos
      </a>

    </div>
  </div>

    {/* IMAGE */}
<div className="relative mt-14">

  <Image
    src="/images/curadoria-raiz-hero-mobile.png"
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

  {/* TOP BLEND */}
  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#1A0C06] to-transparent" />

  {/* BOTTOM FADE */}
  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F3EEE8]" />

</div>
</div>

</section>

     {/* MANIFESTO */}
<section className="py-24 sm:py-36">
  <div className="mx-auto max-w-[1320px] px-8">

    <div className="grid gap-20 lg:grid-cols-2 lg:gap-28 items-start">

      {/* LEFT */}
      <div>
        <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.32em] text-[#CBBCAF]">
          Manifesto
        </span>

        <h2
          className="
            mt-10
            font-serif
            font-normal
            text-[4.8rem]
            sm:text-[6.8rem]
            leading-[0.9]
            tracking-[-0.05em]
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
            text-[3.5rem]
            sm:text-[4.8rem]
            leading-[0.94]
            tracking-[-0.04em]
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
      <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.32em] text-[#CBBCAF]">
        Drop #01
      </span>

      <h2
        className="
          mt-5
          max-w-[5ch]
          font-serif
          font-normal
          text-[4.5rem]
          sm:text-[6.5rem]
          leading-[0.9]
          tracking-[-0.05em]
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
              text-[2.5rem]
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

  <div className="absolute inset-0 bg-black/62 sm:bg-black/50" />

  <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/52 to-transparent" />

  <div className="relative z-10 flex h-full items-center">
    <div className="mx-auto w-full max-w-[1320px] px-8">

      <div className="max-w-[320px] sm:max-w-[760px]">

        <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.32em] text-[#E9D9CF]/82">
          Pequenos produtores
        </span>

        <h2
          className="
            mt-6
            sm:mt-8
            font-serif
            font-normal
            text-[3.7rem]
            sm:text-[6.4rem]
            leading-[0.9]
            tracking-[-0.05em]
            text-white
          "
        >
          Curadoria feita perto de quem produz.
        </h2>

        <p
          className="
            mt-8
            max-w-[520px]
            text-[17px]
            sm:text-[20px]
            leading-[1.9]
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
<section className="bg-[#F5F1EB] px-6 pt-24 pb-12 md:px-16 md:pt-32 md:pb-20">
  <div className="mx-auto max-w-[1180px]">

    <div className="mb-16">
  <p className="mb-4 text-[11px] sm:text-[12px] uppercase tracking-[0.32em] text-[#B8A79D]">
    Como funciona
  </p>

  <h2 className="max-w-[760px] font-serif text-[3.5rem] leading-[0.92] tracking-[-0.05em] text-[#4A1F1A] md:text-[6.2rem]">
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
          Entregas e retiradas organizadas em bairros centrais de São Paulo.
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

              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.32em] text-[#C8A99C]">
  Próxima edição
</span>

<h2
  className="
    mx-auto
    mt-8
    max-w-[980px]
    font-serif
    font-normal
    text-[4.4rem]
    sm:text-[6.2rem]
    leading-[0.92]
    tracking-[-0.05em]
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

              <div className="mt-10 text-[11px] sm:text-[12px] uppercase tracking-[0.32em] text-[#9D7B6F]">
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
<footer className="pb-16 pt-10">
  <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-10 px-6 text-center sm:px-8 lg:flex-row lg:text-left">

    {/* LOGO */}
    <div className="flex items-center">
      <Image
        src="/branding/transparentes/05_horizontal_claro.svg"
        alt="Curadoria Raiz"
        width={420}
        height={120}
       className="h-auto w-[370px] sm:w-[437px]"
      />
    </div>

    {/* CENTRO */}
    <div className="flex items-center justify-center gap-6">

      {/* INSTAGRAM */}
      <a
        href="https://instagram.com/curadoriaraiz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Curadoria Raiz"
        className="
          text-[#9F8778]
          transition-all
          duration-300
          hover:text-[#D66A41]
          hover:scale-105
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-[19px] w-[19px]"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37a4 4 0 1 1-2.63-2.63A4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>

      <span className="text-[11px] uppercase tracking-[0.28em] text-[#9F8778]">
        Curadoria artesanal · São Paulo
      </span>

    </div>

    {/* COPYRIGHT */}
    <span className="text-[11px] uppercase tracking-[0.24em] text-[#9F8778]">
      © 2026 Curadoria Raiz
    </span>

  </div>
</footer>
     </main>
  );
}
