import Image from 'next/image'

export default function CuradoriaRaizLanding() {
  return (
    <main className='bg-[#F4EEE6] text-[#120E0B] overflow-hidden'>

      {/* HEADER */}

      <header className='absolute top-0 left-0 w-full z-50'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between'>

          <p className='text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#F3E6DA]/85'>
            Curadoria artesanal · São Paulo
          </p>

          <a
            href='#checkout'
            className='border border-[#F3E6DA]/25 hover:border-[#F3E6DA]/50 transition-all duration-300 text-[#F3E6DA] rounded-full px-5 py-2 text-[11px] md:text-xs tracking-[0.12em] uppercase'
          >
            Entrar para a curadoria
          </a>

        </div>
      </header>

      {/* HERO */}

      <section className='relative overflow-hidden bg-[#6A4B3D]'>

        {/* background glow */}

        <div className='absolute right-[-180px] top-[10%] w-[720px] h-[720px] bg-[#A13F2D]/20 blur-[140px] rounded-full opacity-80' />

        {/* subtle texture */}

        <div className='absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]' />

        <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 md:pb-28 grid lg:grid-cols-2 gap-16 items-center'>

          {/* LEFT */}

          <div className='max-w-[620px]'>

            {/* LOGO */}

            <div className='mb-10'>
              <img
                src='/branding/02_principal_escuro.svg'
                alt='Curadoria Raiz'
                className='w-[320px] md:w-[500px] h-auto'
              />
            </div>

            {/* HEADLINE */}

            <h1 className='text-[#F4E8DF] text-[52px] md:text-[86px] leading-[0.92] tracking-[-0.05em] font-light mb-8'>
              Uma seleção artesanal para desacelerar a cidade.
            </h1>

            {/* SUBTITLE */}

            <p className='text-[#D8C1B4] text-[18px] md:text-[21px] leading-[1.9] max-w-[560px] mb-12 font-light'>
              Vinhos naturais, pão de fermentação natural e pequenos produtores escolhidos para transformar uma noite comum em ritual.
            </p>

            {/* CTA */}

            <div className='flex flex-col sm:flex-row gap-4'>

              <a
                href='#checkout'
                className='bg-[#F3E6DA] hover:bg-[#fff7f1] text-[#7E3428] px-8 py-4 rounded-full uppercase tracking-[0.18em] text-xs font-medium transition-all inline-flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.12)]'
              >
                Garantir minha caixa
              </a>

              <a
                href='#selecoes'
                className='border border-[#F3E6DA]/25 hover:border-[#F3E6DA]/50 text-[#F3E6DA] px-8 py-4 rounded-full uppercase tracking-[0.18em] text-xs font-medium transition-all inline-flex items-center justify-center'
              >
                Conhecer a seleção
              </a>

            </div>

            {/* INFO */}

            <p className='mt-6 text-[#D8C1B4]/70 text-sm'>
              Produção limitada · 30 unidades por edição
            </p>

          </div>

          {/* RIGHT */}

          <div className='relative flex justify-center lg:justify-end'>

            {/* image glow */}

            <div className='absolute w-[520px] h-[520px] bg-[#D97A55]/20 blur-[120px] rounded-full' />

            {/* IMAGE */}

            <div className='relative'>

              <img
                src='/apagao-editorial.webp.webp'
                alt='Apagão Rosé Natural'
                className='relative z-10 w-full max-w-[420px] md:max-w-[560px] h-auto rounded-[32px] shadow-[0_40px_80px_rgba(0,0,0,0.32)] object-cover'
              />

              {/* FLOATING CARD */}

              <div className='absolute -bottom-10 -left-6 md:-left-10 backdrop-blur-md bg-[#4B3328]/72 border border-white/10 rounded-[28px] p-5 max-w-[260px] hidden md:block shadow-2xl'>

                <p className='text-[10px] uppercase tracking-[0.3em] text-[#D8C1B4] mb-3'>
                  Destaque do mês
                </p>

                <h3 className='text-[#F4E8DF] text-[24px] leading-[1.05] mb-3 font-serif'>
                  Apagão
                  <br />
                  Rosé Natural
                </h3>

                <p className='text-[#D8C1B4] text-[14px] leading-[1.7]'>
                  Vinificação natural, cultivo sustentável e produção artesanal da Serra Gaúcha.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* fade bottom */}

        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F4EEE6]' />

      </section>

      {/* MANIFESTO */}

      <section className='py-24 md:py-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 md:gap-28 items-start'>

          <div>

            <p className='uppercase tracking-[0.28em] text-[10px] text-[#8C3B30] mb-8'>
              Manifesto
            </p>

            <h2 className='font-serif text-[#BCA898] text-[56px] md:text-[96px] leading-[0.92] tracking-[-0.04em]'>
              Menos
              <br />
              pressa,
              <br />
              mais
              <br />
              repertório.
            </h2>

          </div>

          <div className='max-w-[620px]'>

            <h3 className='text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.03em] text-[#120E0B] mb-10'>
              A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade.
            </h3>

            <div className='space-y-8 text-[#6B4E3D] text-[18px] leading-[2]'>

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

    </main>
  )
}
