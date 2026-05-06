<section className="relative overflow-hidden bg-[#1A0703]">

  {/* glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(160,52,18,0.28),transparent_38%)]" />

  <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-16 pt-6 sm:px-10 sm:pb-24 sm:pt-8">

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

    {/* hero */}
    <div className="mt-10 grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">

      {/* coluna esquerda */}
      <div className="order-2 lg:order-1">

        {/* logo */}
        <div className="mb-10 sm:mb-14">

          <img
            src="/images/logo-raiz.svg"
            alt="Curadoria Raiz"
            className="
              w-[220px]
              sm:w-[320px]
              lg:w-[360px]
            "
          />
        </div>

        {/* headline */}
        <h1
          className="
            max-w-[7.6ch]
            font-serif
            font-normal
            text-[3.85rem]
            leading-[0.9]
            tracking-[-0.06em]
            text-[#F6F1EB]
            sm:max-w-[8.4ch]
            sm:text-[6.2rem]
            lg:text-[5.8rem]
          "
        >
          Curadoria{" "}
          <span className="inline-block text-[1.08em]">
            artesanal
          </span>
          <br />
          em ritmo{" "}
          <span className="inline-block text-[1.08em]">
            humano.
          </span>
        </h1>

        {/* subtítulo */}
        <p
          className="
            mt-8
            max-w-[32ch]
            text-[1.05rem]
            leading-[1.9]
            text-[#F3E7DE]/88
            sm:mt-10
            sm:max-w-[46ch]
            sm:text-[1.02rem]
            sm:leading-[2]
          "
        >
          Uma seleção mensal de vinho natural, pão de fermentação lenta e produtos artesanais escolhidos para desacelerar a cidade por algumas horas urbanas.
        </p>

        {/* botões */}
        <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row">

          <a
            href="#reservas"
            className="
              inline-flex
              h-14
              items-center
              justify-center
              rounded-full
              bg-[#D86F45]
              px-10
              text-[0.72rem]
              uppercase
              tracking-[0.32em]
              text-white
              transition
              duration-300
              hover:bg-[#e47b52]
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
              border-[#9D5C46]
              px-10
              text-[0.72rem]
              uppercase
              tracking-[0.32em]
              text-[#F3E7DE]
              transition
              duration-300
              hover:bg-[#2A0D07]
            "
          >
            Conheça os produtos
          </a>
        </div>

        {/* info */}
        <div
          className="
            mt-8
            text-[0.68rem]
            uppercase
            tracking-[0.34em]
            text-[#B88B79]/70
          "
        >
          Produção limitada · 30 unidades por edição
        </div>
      </div>

      {/* imagem */}
      <div className="order-1 lg:order-2">

        <div
          className="
            overflow-hidden
            rounded-[34px]
            bg-[#140603]
            shadow-[0_40px_90px_rgba(0,0,0,0.45)]
          "
        >
          <img
            src="/images/curadoria-raiz-hero-composicao-vertical.png"
            alt="Vinho natural, pão artesanal e antepasto"
            className="
              h-full
              w-full
              object-cover
            "
          />
        </div>
      </div>
    </div>
  </div>

  {/* fade */}
  <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-b from-transparent to-[#F5F1EB]" />
</section>

{/* manifesto */}
<section className="bg-[#F5F1EB] px-6 py-24 sm:px-10 sm:py-32">

  <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-2">

    <div>

      <span className="text-[0.68rem] uppercase tracking-[0.36em] text-[#C9B8AE]">
        Manifesto
      </span>

      <h2
        className="
          mt-6
          max-w-[5ch]
          font-serif
          text-[4.8rem]
          leading-[0.92]
          tracking-[-0.05em]
          text-[#D1BEB4]
          sm:text-[7rem]
        "
      >
        Menos pressa, mais repertório.
      </h2>
    </div>

    <div className="max-w-[620px]">

      <h3
        className="
          font-serif
          text-[4rem]
          leading-[0.92]
          tracking-[-0.05em]
          text-[#4A2019]
          sm:text-[5.4rem]
        "
      >
        A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade.
      </h3>

      <div
        className="
          mt-10
          space-y-7
          text-[1.08rem]
          leading-[2]
          text-[#7E6C64]
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

{/* produtos */}
<section
  id="produtos"
  className="bg-[#F5F1EB] px-6 pb-28 sm:px-10 sm:pb-36"
>

  <div className="mx-auto max-w-[1320px]">

    <span className="text-[0.68rem] uppercase tracking-[0.36em] text-[#C9B8AE]">
      Drop #01
    </span>

    <h2
      className="
        mt-5
        max-w-[5ch]
        font-serif
        font-normal
        text-[3.4rem]
        leading-[0.94]
        tracking-[-0.04em]
        text-[#B89E91]
        sm:text-[5rem]
      "
    >
      O Trio da Vez
    </h2>

    <p
      className="
        mt-8
        max-w-[760px]
        text-[1.05rem]
        leading-[2]
        text-[#7D6C65]
      "
    >
      Uma combinação pensada para acompanhar o fim da tarde em Santa Cecília, Vila Buarque, Higienópolis, Campos Elíseos e Barra Funda.
    </p>

    {/* cards */}
    <div className="mt-16 grid gap-8 lg:grid-cols-3">

      {/* vinho */}
      <article>
        <div className="overflow-hidden rounded-[28px] bg-white">
          <img
            src="/images/apagao-editorial.webp"
            alt="Apagão Rosé Natural"
            className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
          />
        </div>

        <h3 className="mt-7 font-serif text-[2.5rem] leading-none tracking-[-0.04em] text-[#4A2019]">
          Apagão Rosé Natural
        </h3>

        <p className="mt-4 text-[1.02rem] leading-[1.9] text-[#7E6C64]">
          Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.
        </p>
      </article>

      {/* pão */}
      <article>
        <div className="overflow-hidden rounded-[28px] bg-white">
          <img
            src="/images/pao-sourdough.webp"
            alt="Sourdough Natural"
            className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
          />
        </div>

        <h3 className="mt-7 font-serif text-[2.5rem] leading-none tracking-[-0.04em] text-[#4A2019]">
          Sourdough Natural
        </h3>

        <p className="mt-4 text-[1.02rem] leading-[1.9] text-[#7E6C64]">
          Fermentação lenta e forno artesanal. Assado poucas horas antes da entrega.
        </p>
      </article>

      {/* antepasto */}
      <article>
        <div className="overflow-hidden rounded-[28px] bg-white">
          <img
            src="/images/antepasto.webp"
            alt="Antepasto de Berinjela"
            className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
          />
        </div>

        <h3 className="mt-7 font-serif text-[2.5rem] leading-none tracking-[-0.04em] text-[#4A2019]">
          Antepasto de Berinjela
        </h3>

        <p className="mt-4 text-[1.02rem] leading-[1.9] text-[#7E6C64]">
          Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.
        </p>
      </article>
    </div>
  </div>
</section>

{/* produtor */}
<section className="relative overflow-hidden">

  <div className="absolute inset-0 bg-black/55 sm:bg-black/42" />

  <img
    src="/images/produtor-faccin.webp"
    alt="Pequenos produtores"
    className="h-[760px] w-full object-cover"
  />

  <div className="absolute inset-0 flex items-center px-6 sm:px-10">

    <div className="max-w-[340px] sm:max-w-[620px]">

      <span className="text-[0.68rem] uppercase tracking-[0.34em] text-white/70">
        Pequenos produtores
      </span>

      <h2
        className="
          mt-6
          font-serif
          text-[3.7rem]
          leading-[0.9]
          tracking-[-0.05em]
          text-white
          sm:text-[5.8rem]
        "
      >
        Curadoria feita perto de quem produz.
      </h2>

      <p
        className="
          mt-8
          text-[1.08rem]
          leading-[2]
          text-white/90
        "
      >
        Cada edição nasce da proximidade com produtores independentes, agricultura sustentável e processos artesanais feitos em pequena escala.
      </p>
    </div>
  </div>
</section>

{/* CTA */}
<section
  id="reservas"
  className="bg-[#F5F1EB] px-6 py-24 sm:px-10 sm:py-32"
>

  <div
    className="
      relative
      mx-auto
      max-w-[1180px]
      overflow-hidden
      rounded-[42px]
      bg-[#1A0703]
      px-8
      py-20
      sm:px-16
      sm:py-24
    "
  >

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(179,63,22,0.34),transparent_36%)]" />

    <div className="relative z-10 text-center">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D86F45] text-xl text-white">
        R
      </div>

      <div className="mt-8 text-[0.68rem] uppercase tracking-[0.36em] text-[#D7B6A7]">
        Próxima edição
      </div>

      <h2
        className="
          mx-auto
          mt-8
          max-w-[10ch]
          font-serif
          text-[4.2rem]
          leading-[0.92]
          tracking-[-0.05em]
          text-[#F6F1EB]
          sm:text-[6rem]
        "
      >
        Reservas abertas para o Drop #01
      </h2>

      <p
        className="
          mx-auto
          mt-10
          max-w-[22ch]
          text-[1.08rem]
          leading-[2]
          text-[#F2DDD1]
          sm:max-w-[760px]
        "
      >
        Entregas feitas de bicicleta às sextas-feiras e sábados em Santa Cecília, Vila Buarque, Higienópolis, Campos Elíseos e Barra Funda.
      </p>

      <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

        <a
          href="#"
          className="
            inline-flex
            h-16
            items-center
            justify-center
            rounded-full
            bg-[#D86F45]
            px-12
            text-[0.72rem]
            uppercase
            tracking-[0.32em]
            text-white
            transition
            duration-300
            hover:bg-[#e57b52]
          "
        >
          Reservar meu drop
        </a>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            h-16
            items-center
            justify-center
            rounded-full
            border
            border-[#7E4C3C]
            px-12
            text-[0.72rem]
            uppercase
            tracking-[0.32em]
            text-[#F3E7DE]
            transition
            duration-300
            hover:bg-[#2A0D07]
          "
        >
          Tirar dúvidas no WhatsApp
        </a>
      </div>

      <div className="mt-10 text-[0.68rem] uppercase tracking-[0.34em] text-[#C89B88]">
        Parcelamento em até 2x · disponível via link
      </div>
    </div>
  </div>
</section>

{/* footer */}
<footer className="border-t border-[#E8DDD4] bg-[#F5F1EB] px-6 py-10 sm:px-10">

  <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

    <img
      src="/images/logo-raiz.svg"
      alt="Curadoria Raiz"
      className="w-[150px]"
    />

    <div className="text-[0.68rem] uppercase tracking-[0.34em] text-[#B9AAA2]">
      Curadoria artesanal · São Paulo
    </div>

    <div className="text-[0.68rem] uppercase tracking-[0.34em] text-[#B9AAA2]">
      © 2026 Curadoria Raiz
    </div>
  </div>
</footer>
