import Image from 'next/image'

export default function CuradoriaRaizLanding() {
  return (
    <main className='bg-[#F4EEE6] text-[#120E0B] overflow-hidden'>
      
      {/* HEADER */}

      <header className='absolute top-0 left-0 w-full z-50'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between'>
          
          <div className='text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#F3ECE4]/80'>
            Curadoria artesanal · São Paulo
          </div>

          <a
            href='#checkout'
            className='border border-[#F3ECE4]/20 hover:border-[#F3ECE4]/40 transition-all duration-300 text-[#F3ECE4] rounded-full px-5 py-2 text-sm'
          >
            Entrar para a curadoria
          </a>

        </div>
      </header>

      {/* HERO */}

      <section className='relative overflow-hidden bg-[#6B4E3D] min-h-screen flex items-center'>

        {/* glow */}
        <div className='absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#8C3B30]/20 blur-[140px] rounded-full' />

        <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40 grid lg:grid-cols-2 gap-16 items-center'>

          {/* LEFT */}

          <div className='max-w-xl'>

            {/* LOGO */}

            <div className='mb-10'>
              <Image
                src='/branding/02_principal_escuro.svg'
                alt='Curadoria Raiz'
                width={520}
                height={240}
                priority
                className='w-[300px] md:w-[430px] h-auto'
              />
            </div>

            {/* HEADLINE */}

            <h1 className='text-[#F3ECE4] text-5xl md:text-7xl leading-[0.95] font-light tracking-[-0.04em] mb-8'>
              Uma seleção artesanal para desacelerar a cidade.
            </h1>

            {/* SUB */}

            <p className='text-[#F3ECE4]/75 text-lg md:text-xl leading-relaxed max-w-lg mb-10 font-light'>
              Vinhos naturais, pão de fermentação natural e pequenos produtores escolhidos para transformar uma noite comum em ritual.
            </p>

            {/* CTA */}

            <div className='flex flex-col sm:flex-row gap-4'>

              <a
                href='#checkout'
                className='bg-[#F3ECE4] text-[#5F433B] hover:bg-[#EADFD5] transition-all duration-300 rounded-full px-8 py-4 text-sm tracking-[0.15em] uppercase inline-flex items-center justify-center'
              >
                Garantir minha caixa
              </a>

              <a
                href='#selecoes'
                className='border border-[#F3ECE4]/20 hover:border-[#F3ECE4]/40 text-[#F3ECE4] transition-all duration-300 rounded-full px-8 py-4 text-sm tracking-[0.15em] uppercase inline-flex items-center justify-center'
              >
                Conhecer a seleção
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className='relative flex justify-center lg:justify-end'>

            <div className='relative'>

              {/* glow vinho */}

              <div className='absolute inset-0 bg-[#8C3B30]/20 blur-[80px] scale-110 rounded-full' />

              {/* imagem */}

              <img
                src='/images/apagao-editorial.webp'
                alt='Seleção Curadoria Raiz'
                className='relative z-10 w-[320px] md:w-[460px] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.35)] rounded-[24px]'
              />

            </div>

          </div>

        </div>
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

      {/* SELEÇÕES */}

      <section id='selecoes' className='pb-24 md:pb-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>

          <div className='max-w-3xl mb-16'>
            <p className='uppercase tracking-[0.28em] text-[10px] text-[#8C3B30] mb-6'>
              Drop #01
            </p>

            <h2 className='font-serif text-[#BCA898] text-[54px] md:text-[84px] leading-[0.95] tracking-[-0.04em] mb-8'>
              O Trio da Vez
            </h2>

            <p className='text-[#6B4E3D] text-[18px] leading-[1.95] max-w-2xl'>
              Uma combinação pensada para acompanhar o fim da tarde entre Santa Cecília, Higienópolis, Barra Funda, Vila Buarque e Campos Elíseos.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>

            {/* CARD 1 */}

            <article className='group'>
              <div className='rounded-[28px] overflow-hidden bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
                <img
                  src='/images/apagao-packshot.webp'
                  alt='Apagão Rosé Natural'
                  className='w-full aspect-[4/5] object-cover group-hover:scale-[1.02] transition-transform duration-500'
                />
              </div>

              <div className='pt-6 min-h-[180px]'>
                <h3 className='font-serif text-[#120E0B] text-[38px] leading-[0.96] tracking-[-0.04em] mb-4'>
                  Apagão Rosé
                  <br />
                  Natural
                </h3>

                <p className='text-[#6B4E3D] text-[17px] leading-[1.85]'>
                  Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.
                </p>
              </div>
            </article>

            {/* CARD 2 */}

            <article className='group'>
              <div className='rounded-[28px] overflow-hidden bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
                <img
                  src='/images/pao-sourdough.webp'
                  alt='Sourdough Natural'
                  className='w-full aspect-[4/5] object-cover group-hover:scale-[1.02] transition-transform duration-500'
                />
              </div>

              <div className='pt-6 min-h-[180px]'>
                <h3 className='font-serif text-[#120E0B] text-[38px] leading-[0.96] tracking-[-0.04em] mb-4'>
                  Sourdough
                  <br />
                  Natural
                </h3>

                <p className='text-[#6B4E3D] text-[17px] leading-[1.85]'>
                  Fermentação lenta e forno artesanal. Assado poucas horas antes da entrega.
                </p>
              </div>
            </article>

            {/* CARD 3 */}

            <article className='group'>
              <div className='rounded-[28px] overflow-hidden bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
                <img
                  src='/images/antepasto.webp'
                  alt='Antepasto de Berinjela'
                  className='w-full aspect-[4/5] object-cover group-hover:scale-[1.02] transition-transform duration-500'
                />
              </div>

              <div className='pt-6 min-h-[180px]'>
                <h3 className='font-serif text-[#120E0B] text-[38px] leading-[0.96] tracking-[-0.04em] mb-4'>
                  Antepasto de
                  <br />
                  Berinjela
                </h3>

                <p className='text-[#6B4E3D] text-[17px] leading-[1.85]'>
                  Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.
                </p>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* PRODUTOR */}

      <section className='relative overflow-hidden'>

        <img
          src='/images/produtor-faccin.webp'
          alt='Produtor artesanal'
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-black/55' />

        <div className='relative z-20 max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-40'>

          <div className='max-w-[760px]'>

            <p className='uppercase tracking-[0.32em] text-[10px] text-white/60 mb-8'>
              Pequenos produtores
            </p>

            <h2 className='font-serif text-[#F4EEE6] text-[52px] md:text-[88px] leading-[0.9] tracking-[-0.05em] mb-10 max-w-[10ch]'>
              Curadoria feita perto de quem produz.
            </h2>

            <p className='text-[#F4EEE6]/80 text-[19px] md:text-[21px] leading-[1.9] max-w-2xl'>
              Cada edição nasce da proximidade com produtores independentes, agricultura sustentável e processos artesanais reais.
            </p>

          </div>

        </div>
      </section>

      {/* RITUAL */}

      <section className='py-24 md:py-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>

          <p className='uppercase tracking-[0.28em] text-[10px] text-[#8C3B30] mb-6'>
            Como funciona
          </p>

          <h2 className='font-serif text-[#BCA898] text-[54px] md:text-[86px] leading-[0.95] tracking-[-0.04em] mb-20'>
            O Ritual do Drop
          </h2>

          <div className='grid md:grid-cols-3 gap-10'>

            <div className='border-t border-[#DCCFC4] pt-8'>
              <p className='text-[#BCA898] text-[28px] mb-5'>01</p>

              <h3 className='font-serif text-[#120E0B] text-[34px] mb-4'>
                Reserva
              </h3>

              <p className='text-[#6B4E3D] text-[17px] leading-[1.9]'>
                Abrimos apenas 30 unidades por edição para garantir frescor, exclusividade e evitar desperdício.
              </p>
            </div>

            <div className='border-t border-[#DCCFC4] pt-8'>
              <p className='text-[#BCA898] text-[28px] mb-5'>02</p>

              <h3 className='font-serif text-[#120E0B] text-[34px] mb-4'>
                Preparação
              </h3>

              <p className='text-[#6B4E3D] text-[17px] leading-[1.9]'>
                Tudo é preparado sob ritmo artesanal e entregue no melhor momento.
              </p>
            </div>

            <div className='border-t border-[#DCCFC4] pt-8'>
              <p className='text-[#BCA898] text-[28px] mb-5'>03</p>

              <h3 className='font-serif text-[#120E0B] text-[34px] mb-4'>
                Entrega
              </h3>

              <p className='text-[#6B4E3D] text-[17px] leading-[1.9]'>
                Entregas entre sexta e sábado em Santa Cecília, Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section id='checkout' className='pb-20 md:pb-28'>
        <div className='max-w-5xl mx-auto px-6 md:px-10'>

          <div className='relative overflow-hidden rounded-[40px] bg-[#120E0B] px-8 md:px-16 py-16 md:py-20 text-center shadow-[0_40px_100px_rgba(0,0,0,0.16)]'>

            <div className='relative z-10 max-w-3xl mx-auto'>

              <p className='uppercase tracking-[0.32em] text-[10px] text-white/50 mb-8'>
                Próxima edição
              </p>

              <h2 className='font-serif text-[#F4EEE6] text-[46px] md:text-[78px] leading-[0.92] tracking-[-0.05em] mb-10'>
                Reservas abertas
                <br />
                para o Drop #01
              </h2>

              <p className='text-[#F4EEE6]/70 text-[18px] leading-[1.9] max-w-2xl mx-auto mb-12'>
                Entregas entre sexta e sábado em Santa Cecília, Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
              </p>

              <a
                href='#'
                className='inline-flex items-center justify-center bg-[#8C3B30] hover:bg-[#6B2E24] transition-all duration-300 text-white px-10 py-5 rounded-full text-[13px] tracking-[0.2em] uppercase shadow-[0_12px_35px_rgba(0,0,0,0.2)]'
              >
                Reservar meu Drop
              </a>

              <p className='text-[#BCA898] text-[15px] mt-6'>
                Pagamento em até 2x disponível via link.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer className='border-t border-[#E5DBD2] py-8'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[#6B4E3D] text-[12px] tracking-[0.08em] uppercase'>

          <div className='flex items-center gap-3'>
            <Image
              src='/branding/08_favicon.svg'
              alt='Curadoria Raiz'
              width={28}
              height={28}
            />

            <p>Curadoria Raiz · São Paulo</p>
          </div>

          <div className='flex items-center gap-5'>

            <a
              href='#'
              className='hover:text-[#8C3B30] transition-colors'
              aria-label='Instagram'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.6'
                className='w-5 h-5'
              >
                <rect x='2' y='2' width='20' height='20' rx='5' />
                <circle cx='12' cy='12' r='4' />
                <circle cx='18' cy='6' r='1' fill='currentColor' />
              </svg>
            </a>

            <p>Curadoria por André Tomazela</p>

          </div>

        </div>
      </footer>

    </main>
  )
}
