{/* HERO */}
<section className="relative overflow-hidden bg-[#1A0703]">

  {/* background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#5B1408_0%,#1A0703_60%)] opacity-90" />

  {/* glow bottom */}
  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-[#f5f1eb]/40 to-[#f5f1eb]" />

  <div className="relative z-10 px-6 pt-7 pb-20 sm:px-10 lg:px-14 lg:pt-8 lg:pb-24">

    {/* TOPBAR */}
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

    {/* GRID */}
    <div className="mt-10 grid items-center gap-14 lg:mt-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">

      {/* LEFT */}
      <div className="max-w-[620px]">

        {/* LOGO */}
        <div className="mb-10 sm:mb-14">

          <img
            src="/images/logo-raiz.svg"
            alt="Curadoria Raiz"
            className="
              w-[230px]
              sm:w-[280px]
              lg:w-[340px]
            "
          />
        </div>

        {/* TITLE */}
        <h1
          className="
            max-w-[7.6ch]
            font-serif
            text-[3.85rem]
            leading-[0.9]
            tracking-[-0.055em]
            text-[#F7F1EC]
            sm:max-w-[8.4ch]
            sm:text-[6.2rem]
            lg:text-[6.6rem]
          "
        >
          Curadoria{" "}
          <span className="text-[1.12em]">artesanal</span>
          <br />
          em ritmo{" "}
          <span className="text-[1.12em]">humano.</span>
        </h1>

        {/* SUB */}
        <p
          className="
            mt-8
            max-w-[33ch]
            text-[1.1rem]
            leading-[1.95]
            text-[#F1E5DC]/88
            sm:text-[1.05rem]
            lg:text-[1.08rem]
          "
        >
          Uma seleção mensal de vinho natural, pão de fermentação lenta e produtos artesanais escolhidos para desacelerar a cidade por algumas horas urbanas.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <a
            href="#reservas"
            className="
              inline-flex
              h-14
              items-center
              justify-center
              rounded-full
              bg-[#D96D43]
              px-10
              text-[11px]
              uppercase
              tracking-[0.34em]
              text-white
              transition
              hover:brightness-110
            "
          >
            Reservar edição atual
          </a>

          <a
            href="#produtos"
            className="
              inline-flex
              h-14
              items-center
              justify-center
              rounded-full
              border
              border-[#8E5A47]
              px-10
              text-[11px]
              uppercase
              tracking-[0.34em]
              text-[#F5E9E1]
              transition
              hover:bg-[#2A0E08]
            "
          >
            Conheça os produtos
          </a>
        </div>

        {/* MICROCOPY */}
        <p
          className="
            mt-8
            text-[10px]
            uppercase
            tracking-[0.34em]
            text-[#B99180]/70
          "
        >
          Produção limitada · 30 unidades por edição
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">

        <div
          className="
            overflow-hidden
            rounded-[34px]
            bg-[#120603]
            shadow-[0_40px_120px_rgba(0,0,0,0.45)]
          "
        >
          <img
            src="/images/curadoria-raiz-hero-composicao-vertical.png"
            alt="Curadoria Raiz"
            className="
              w-full
              object-cover
              object-center
            "
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* MANIFESTO */}
<section className="bg-[#F5F1EB] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

  <div className="grid gap-20 lg:grid-cols-2">

    <div>

      <span
        className="
          text-[10px]
          uppercase
          tracking-[0.34em]
          text-[#D3C0B5]
        "
      >
        Manifesto
      </span>

      <h2
        className="
          mt-6
          max-w-[5ch]
          font-serif
          text-[5rem]
          leading-[0.9]
          tracking-[-0.05em]
          text-[#D0BBB1]
          sm:text-[7rem]
        "
      >
        Menos pressa, mais repertório.
      </h2>
    </div>

    <div className="max-w-[560px]">

      <h3
        className="
          font-serif
          text-[3.8rem]
          leading-[0.92]
          tracking-[-0.045em]
          text-[#4A1F1A]
          sm:text-[5rem]
        "
      >
        A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade.
      </h3>

      <div
        className="
          mt-10
          space-y-8
          text-[1.15rem]
          leading-[2]
          text-[#705E58]
        "
      >
        <p>
          Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente. Não apenas pelo sabor, mas pela história, origem e modo de produção.
        </p>

        <p>
          Sem excesso. Sem pressa. Apenas alimento honesto, logística consciente e encontros que fazem sentido.
        </p>
      </div>
    </div>
  </div>
</section>

{/* PRODUTOS */}
<section
  id="produtos"
  className="bg-[#F5F1EB] px-6 pb-24 sm:px-10 lg:px-14 lg:pb-32"
>

  <span
    className="
      text-[10px]
      uppercase
      tracking-[0.34em]
      text-[#D3C0B5]
    "
  >
    Drop #01
  </span>

  <h2
    className="
      mt-5
      max-w-[5ch]
      font-serif
      font-normal
      text-[3.4rem]
      sm:text-[5rem]
      leading-[0.94]
      tracking-[-0.04em]
      text-[#B89E91]
    "
  >
    O Trio da Vez
  </h2>

  <p
    className="
      mt-8
      max-w-[36ch]
      text-[1.1rem]
      leading-[1.9]
      text-[#7A6761]
    "
  >
    Uma combinação pensada para acompanhar o fim da tarde em Santa Cecília, Vila Buarque, Higienópolis, Campos Elíseos e Barra Funda.
  </p>

  <div className="mt-14 grid gap-10 md:grid-cols-3">

    {/* vinho */}
    <article>
      <div className="overflow-hidden rounded-[28px] bg-white">
        <img
          src="/images/apagao-editorial.webp"
          alt="Apagão Rosé Natural"
          className="w-full object-cover"
        />
      </div>

      <h3 className="mt-6 font-serif text-[2.3rem] tracking-[-0.04em] text-[#4A1F1A]">
        Apagão Rosé Natural
      </h3>

      <p className="mt-3 text-[1.05rem] leading-[1.9] text-[#7A6761]">
        Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.
      </p>
    </article>

    {/* pão */}
    <article>
      <div className="overflow-hidden rounded-[28px] bg-white">
        <img
          src="/images/pao-sourdough.webp"
          alt="Sourdough Natural"
          className="w-full object-cover"
        />
      </div>

      <h3 className="mt-6 font-serif text-[2.3rem] tracking-[-0.04em] text-[#4A1F1A]">
        Sourdough Natural
      </h3>

      <p className="mt-3 text-[1.05rem] leading-[1.9] text-[#7A6761]">
        Fermentação lenta e forno artesanal. Assado poucas horas antes da entrega.
      </p>
    </article>

    {/* antepasto */}
    <article>
      <div className="overflow-hidden rounded-[28px] bg-white">
        <img
          src="/images/antepasto.webp"
          alt="Antepasto de Berinjela"
          className="w-full object-cover"
        />
      </div>

      <h3 className="mt-6 font-serif text-[2.3rem] tracking-[-0.04em] text-[#4A1F1A]">
        Antepasto de Berinjela
      </h3>

      <p className="mt-3 text-[1.05rem] leading-[1.9] text-[#7A6761]">
        Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.
      </p>
    </article>
  </div>
</section>

{/* PRODUTOR */}
<section className="relative overflow-hidden">

  <img
    src="/images/produtor-faccin.webp"
    alt="Produtor"
    className="h-[780px] w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/55 sm:bg-black/42" />

  <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-14">

    <div className="max-w-[340px] sm:max-w-[620px]">

      <span
        className="
          text-[10px]
          uppercase
          tracking-[0.34em]
          text-white/70
        "
      >
        Pequenos produtores
      </span>

      <h2
        className="
          mt-6
          font-serif
          text-[3.7rem]
          sm:text-[5.8rem]
          leading-[0.92]
          tracking-[-0.05em]
          text-white
        "
      >
        Curadoria feita perto de quem produz.
      </h2>

      <p
        className="
          mt-8
          max-w-[28ch]
          text-[1.12rem]
          leading-[1.95]
          text-white/92
        "
      >
        Cada edição nasce da proximidade com produtores independentes, agricultura sustentável e processos artesanais feitos em pequena escala.
      </p>
    </div>
  </div>
</section>

{/* RESERVAS */}
<section
  id="reservas"
  className="bg-[#F5F1EB] px-6 py-24 sm:px-10 lg:px-14 lg:py-32"
>

  <div
    className="
      rounded-[42px]
      bg-[radial-gradient(circle_at_bottom_right,#7A230E_0%,#250603_60%)]
      px-6
      py-20
      text-center
      sm:px-12
      lg:px-20
      lg:py-24
    "
  >

    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D96D43] text-white">
      R
    </div>

    <span
      className="
        mt-8
        block
        text-[10px]
        uppercase
        tracking-[0.34em]
        text-[#D8C6BC]
      "
    >
      Próxima edição
    </span>

    <h2
      className="
        mx-auto
        mt-8
        max-w-[10ch]
        font-serif
        text-[4.5rem]
        sm:text-[6rem]
        leading-[0.92]
        tracking-[-0.05em]
        text-[#F7F1EC]
      "
    >
      Reservas abertas para o Drop #01
    </h2>

    <p
      className="
        mx-auto
        mt-10
        max-w-[34ch]
        text-[1.1rem]
        leading-[2]
        text-[#F3E8E1]
      "
    >
      Entregas de bicicleta às sextas-feiras e sábados em Santa Cecília, Vila Buarque, Higienópolis, Campos Elíseos e Barra Funda.
    </p>

    <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

      <a
        href="#"
        className="
          inline-flex
          h-14
          items-center
          justify-center
          rounded-full
          bg-[#D96D43]
          px-10
          text-[11px]
          uppercase
          tracking-[0.34em]
          text-white
        "
      >
        Reservar meu drop
      </a>

      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        className="
          inline-flex
          h-14
          items-center
          justify-center
          rounded-full
          border
          border-[#8E5A47]
          px-10
          text-[11px]
          uppercase
          tracking-[0.34em]
          text-[#F7F1EC]
        "
      >
        Tirar dúvidas no WhatsApp
      </a>
    </div>

    <p
      className="
        mt-10
        text-[10px]
        uppercase
        tracking-[0.34em]
        text-[#C9AEA1]
      "
    >
      Parcelamento em até 2x · disponível via link
    </p>
  </div>
</section>

{/* FOOTER */}
<footer className="bg-[#F5F1EB] px-6 pb-14 sm:px-10 lg:px-14">

  <div className="flex flex-col gap-10 border-t border-[#E6DDD6] pt-10 sm:flex-row sm:items-center sm:justify-between">

    <img
      src="/images/logo-raiz.svg"
      alt="Curadoria Raiz"
      className="w-[150px]"
    />

    <p
      className="
        text-[10px]
        uppercase
        tracking-[0.34em]
        text-[#BBA9A0]
      "
    >
      Curadoria artesanal · São Paulo
    </p>

    <p
      className="
        text-[10px]
        uppercase
        tracking-[0.34em]
        text-[#BBA9A0]
      "
    >
      © 2026 Curadoria Raiz
    </p>
  </div>
</footer>
