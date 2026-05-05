<section className='relative overflow-hidden bg-[#120b09] text-[#f3eee7]'>
  {/* glow */}
  <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,52,32,0.35),transparent_35%)]' />

  {/* header */}
  <header className='relative z-20'>
    <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10'>
      {/* logo */}
      <img
        src='/branding/05_horizontal_claro.svg'
        alt='Curadoria Raiz'
        className='w-[220px] md:w-[300px] h-auto object-contain'
      />

      {/* right */}
      <div className='hidden md:flex items-center gap-5 text-[11px] uppercase tracking-[0.38em] text-[#d6c6ba]'>
        <span>São Paulo</span>
        <span className='opacity-40'>•</span>
        <span>Curadoria artesanal</span>
      </div>
    </div>
  </header>

  {/* hero */}
  <div className='relative z-10 mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-10 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:pb-32 md:pt-16'>
    {/* left */}
    <div className='max-w-2xl'>
      <div className='mb-8 text-[11px] uppercase tracking-[0.42em] text-[#c49a84]'>
        Drop #01 · Produção limitada
      </div>

      <h1 className='max-w-[720px] font-serif text-[4.4rem] leading-[0.9] tracking-[-0.05em] text-[#f3eee7] md:text-[7rem]'>
        Alimento
        <br />
        com história,
        <br />
        entregue por
        <br />
        quem escolhe.
      </h1>

      <p className='mt-8 max-w-md text-[15px] leading-8 text-[#d8cbc1]'>
        Uma seleção mensal de vinho natural, pão de fermentação
        lenta e produtos artesanais escolhidos para desacelerar o
        ritmo da cidade por algumas horas.
      </p>

      {/* ctas */}
      <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
        <a
          href='#reserva'
          className='inline-flex items-center justify-center rounded-full bg-[#9e4630] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-[#f8f3ee] transition hover:bg-[#b14f36]'
        >
          Reservar meu drop
        </a>

        <a
          href='#manifesto'
          className='inline-flex items-center justify-center rounded-full border border-[#5f4036] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-[#d8cbc1] transition hover:border-[#8f5f50] hover:bg-white/5'
        >
          Conhecer a curadoria
        </a>
      </div>

      <div className='mt-8 text-[10px] uppercase tracking-[0.32em] text-[#9f877b]'>
        30 unidades · entregas sexta e sábado
      </div>
    </div>

    {/* right */}
    <div className='relative flex items-center justify-center'>
      {/* glow behind image */}
      <div className='absolute h-[540px] w-[540px] rounded-full bg-[#7a2f1e]/20 blur-3xl' />

      {/* editorial card */}
      <div className='relative overflow-hidden rounded-[34px] bg-[#efe8df] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)]'>
        <img
          src='/images/apagao-editorial.webp'
          alt='Curadoria Raiz'
          className='h-[560px] w-full rounded-[24px] object-cover md:w-[480px]'
        />

        {/* floating label */}
        <div className='absolute bottom-5 left-5 rounded-full bg-[#1c120f]/90 px-5 py-3 backdrop-blur'>
          <div className='text-[10px] uppercase tracking-[0.32em] text-[#f3eee7]'>
            vinho natural · pão artesanal · conservas
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
