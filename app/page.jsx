export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição atual da Curadoria Raiz.'

  return (
    <main className='bg-[#F6F2EC] text-[#2B2623] overflow-hidden'>

      {/* HERO */}

      <section className='relative overflow-hidden bg-gradient-to-br from-[#6E5A51] via-[#5C4A43] to-[#3D302C]'>

        {/* glow */}
        <div className='absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_40%)]' />

        {/* grain */}
        <div
          className='absolute inset-0 opacity-[0.04] mix-blend-soft-light'
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        {/* wine glow */}
        <div className='absolute right-[-180px] top-[10%] w-[720px] h-[720px] bg-[#A54A31]/18 blur-[140px] rounded-full' />

        <div className='relative max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-24 md:pb-28'>

          <div className='grid lg:grid-cols-2 gap-14 items-center'>

            {/* TEXTO */}

            <div className='relative z-10 max-w-xl'>

              <p className='uppercase tracking-[0.35em] text-[10px] md:text-xs text-white/55 mb-8'>
                Curadoria artesanal · São Paulo
              </p>

              {/* LOGO */}

              <div className='mb-10'>
                <img
                  src='/branding/02_principal_escuro.svg'
                  alt='Curadoria Raiz'
                  className='w-[320px] md:w-[500px] h-auto'
                />
              </div>

              {/* HEADLINE */}

              <h2 className='text-[42px] md:text-[60px] leading-[0.94] tracking-[-0.04em] text-[#F7F1EC] font-light max-w-lg'>
                Alimento com história, entregue por quem escolhe.
              </h2>

              {/* SUB */}

              <p className='mt-8 text-[15px] md:text-[18px] leading-[1.9] text-white/72 max-w-md'>
                Uma seleção mensal de vinho natural, pão de fermentação natural e produtos artesanais escolhidos para desacelerar o ritmo da cidade por algumas horas.
              </p>

              {/* CTA */}

              <div className='mt-10 flex flex-col sm:flex-row gap-4'>

                <a
                  href={whatsappLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center rounded-full bg-[#D66A42] hover:bg-[#BF5934] transition-all duration-300 px-7 py-4 text-[11px] tracking-[0.18em] uppercase text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:scale-[1.02]'
                >
                  Reservar edição atual
                </a>

                <a
                  href='#drop'
                  className='inline-flex items-center justify-center rounded-full border border-white/15 hover:border-white/30 transition-all duration-300 px-7 py-4 text-[11px] tracking-[0.18em] uppercase text-white/90'
                >
                  Conhecer seleção
                </a>

              </div>

              <p className='mt-4 text-[12px] text-white/50'>
                Produção limitada · 30 unidades por edição
              </p>

            </div>

            {/* IMAGEM */}

            <div className='relative flex justify-center lg:justify-end'>

              {/* glow vinho */}

              <div className='absolute w-[520px] h-[520px] rounded-full bg-[#B24A2B]/18 blur-[120px]' />

              <div className='relative'>

                <div className='relative overflow-hidden rounded-[34px] shadow-[0_35px_90px_rgba(0,0,0,0.38)]'>

                  <img
                    src='/images/apagao-editorial.webp'
                    alt='Vinho Apagão Curadoria Raiz'
                    className='relative z-10 w-full max-w-[620px] object-cover scale-[1.02]'
                  />

                </div>

                {/* card flutuante */}

                <div className='hidden md:block absolute -bottom-10 -left-10 backdrop-blur-xl bg-[#3B2C27]/72 border border-white/10 rounded-[28px] px-6 py-5 max-w-[260px] shadow-2xl'>

                  <p className='uppercase tracking-[0.28em] text-[10px] text-[#D8C5B8] mb-3'>
                    Destaque do mês
                  </p>

                  <h3 className='font-serif text-[#F8F3EE] text-[26px] leading-[1.02] mb-3'>
                    Apagão
                    <br />
                    Rosé Natural
                  </h3>

                  <p className='text-[#D8C5B8] text-[14px] leading-[1.7]'>
                    Produção artesanal, vinificação natural e cultivo sustentável na Serra Gaúcha.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* fade bottom */}

        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F6F1EB]' />

      </section>

      {/* MANIFESTO */}

      <section className='py-24 md:py-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 md:gap-28 items-start'>

          <div>

            <p className='uppercase tracking-[0.28em] text-[10px] text-[#B9ADA2] mb-8'>
              Manifesto
            </p>

            <h2 className='font-serif text-[#D5CBC1] text-[56px] md:text-[96px] leading-[0.92] tracking-[-0.04em]'>
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

            <h3 className='text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.03em] text-[#2E2723] mb-10'>
              A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade.
            </h3>

            <div className='space-y-8 text-[#574F4A] text-[18px] leading-[2]'>

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

      {/* DROP */}

      <section id='drop' className='pb-24 md:pb-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>

          <div className='max-w-3xl mb-16'>

            <p className='uppercase tracking-[0.28em] text-[10px] text-[#B9ADA2] mb-6'>
              Drop #01
            </p>

            <h2 className='font-serif text-[#D0C4BA] text-[54px] md:text-[84px] leading-[0.95] tracking-[-0.04em] mb-8'>
              O Trio da Vez
            </h2>

            <p className='text-[#5E5650] text-[18px] leading-[1.95] max-w-2xl'>
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

                <h3 className='font-serif text-[#2F2926] text-[38px] leading-[0.96] tracking-[-0.04em] mb-4'>
                  Apagão Rosé
                  <br />
                  Natural
                </h3>

                <p className='text-[#6A625C] text-[17px] leading-[1.85]'>
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

                <h3 className='font-serif text-[#2F2926] text-[38px] leading-[0.96] tracking-[-0.04em] mb-4'>
                  Sourdough
                  <br />
                  Natural
                </h3>

                <p className='text-[#6A625C] text-[17px] leading-[1.85]'>
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

                <h3 className='font-serif text-[#2F2926] text-[38px] leading-[0.96] tracking-[-0.04em] mb-4'>
                  Antepasto de
                  <br />
                  Berinjela
                </h3>

                <p className='text-[#6A625C] text-[17px] leading-[1.85]'>
                  Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.
                </p>

              </div>

            </article>

          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer className='border-t border-[#E5DBD2] py-8'>

        <div className='max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[#9D9186] text-[12px] tracking-[0.08em] uppercase'>

          <div className='flex items-center gap-3'>

            <img
              src='/branding/08_favicon.svg'
              alt='Curadoria Raiz'
              className='w-6 h-6'
            />

            <p>Curadoria Raiz · São Paulo</p>

          </div>

          <div className='flex items-center gap-5'>

            <a
              href='#'
              className='hover:text-[#D56A44] transition-colors'
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
