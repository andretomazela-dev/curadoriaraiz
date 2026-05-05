export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição atual da Curadoria Raiz.'

  return (
    <main className='bg-[#F4EEE6] text-[#120E0B] overflow-hidden'>
      {/* HERO */}

      <section className='relative overflow-hidden bg-[#120E0B]'>
        {/* textura */}

        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-8 md:pt-10 pb-20 md:pb-28'>
          {/* HEADER */}

          <header className='flex items-center justify-between mb-14 md:mb-20'>
            <img
              src='/branding/05_horizontal_claro.svg'
              alt='Curadoria Raiz'
              className='w-[190px] md:w-[240px] h-auto'
            />

            <p className='hidden md:block text-[10px] tracking-[0.28em] uppercase text-white/45'>
              São Paulo · Curadoria artesanal
            </p>
          </header>

          <div className='grid lg:grid-cols-2 gap-14 lg:gap-24 items-center'>
            {/* TEXTO */}

            <div className='max-w-xl'>
              <p className='uppercase tracking-[0.34em] text-[10px] text-[#BCA898] mb-8'>
                Drop #01 · Produção limitada
              </p>

              <h1 className='font-serif text-[#F4EEE6] text-[46px] md:text-[72px] leading-[0.94] tracking-[-0.05em] mb-8'>
                Alimento com história, entregue por quem escolhe.
              </h1>

              <p className='text-[#D7CCC2] text-[17px] md:text-[18px] leading-[1.95] max-w-lg mb-10'>
                Uma seleção mensal de vinho natural, pão de fermentação natural
                e produtos artesanais escolhidos para desacelerar o ritmo da
                cidade por algumas horas.
              </p>

              <div className='flex flex-col items-start gap-4'>
                <a
                  href={whatsappLink}
                  target='_blank'
                  className='inline-flex items-center justify-center rounded-full bg-[#8C3B30] hover:bg-[#6B2E24] transition-all duration-300 px-8 py-4 text-[11px] tracking-[0.2em] uppercase text-[#F4EEE6]'
                >
                  Reservar edição atual
                </a>

                <p className='text-[#BCA898] text-[12px] tracking-[0.08em] uppercase'>
                  30 unidades · Entregas sexta e sábado
                </p>
              </div>
            </div>

            {/* IMAGEM */}

            <div className='relative flex justify-center lg:justify-end'>
              <div className='relative rounded-[30px] overflow-hidden border border-white/8'>
                <img
                  src='/images/apagao-editorial.webp'
                  alt='Curadoria Raiz'
                  className='w-full max-w-[620px] aspect-[4/5] object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}

      <section className='py-24 md:py-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 md:gap-28 items-start'>
          <div>
            <p className='uppercase tracking-[0.28em] text-[10px] text-[#BCA898] mb-8'>
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
              A Curadoria Raiz nasce do desejo de aproximar pequenos produtores
              do ritmo da cidade.
            </h3>

            <div className='space-y-8 text-[#6B4E3D] text-[18px] leading-[2]'>
              <p>
                Cada edição reúne vinho vivo, pão artesanal e conservas
                escolhidas manualmente. Não apenas pelo sabor, mas pela
                história, origem e modo de produção.
              </p>

              <p>
                Sem excesso. Sem pressa. Apenas alimento honesto, logística
                consciente e encontros que fazem sentido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DROP */}

      <section className='pb-24 md:pb-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>
          <div className='max-w-3xl mb-16'>
            <p className='uppercase tracking-[0.28em] text-[10px] text-[#BCA898] mb-6'>
              Drop #01
            </p>

            <h2 className='font-serif text-[#BCA898] text-[54px] md:text-[84px] leading-[0.95] tracking-[-0.04em] mb-8'>
              O Trio da Vez
            </h2>

            <p className='text-[#6B4E3D] text-[18px] leading-[1.95] max-w-2xl'>
              Uma combinação pensada para acompanhar o fim da tarde entre Santa
              Cecília, Higienópolis, Barra Funda, Vila Buarque e Campos
              Elíseos.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* CARD 1 */}

            <article className='group'>
              <div className='rounded-[28px] overflow-hidden bg-[#F8F3EC] shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
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
                  Rosé de intervenção mínima da Família Faccin. Fresco, vivo e
                  levemente frutado.
                </p>
              </div>
            </article>

            {/* CARD 2 */}

            <article className='group'>
              <div className='rounded-[28px] overflow-hidden bg-[#F8F3EC] shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
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
                  Fermentação lenta e forno artesanal. Assado poucas horas antes
                  da entrega.
                </p>
              </div>
            </article>

            {/* CARD 3 */}

            <article className='group'>
              <div className='rounded-[28px] overflow-hidden bg-[#F8F3EC] shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
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
                  Receita artesanal preparada em pequenos lotes, com
                  ingredientes frescos e sabor intenso.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PRODUTORES */}

      <section className='relative overflow-hidden'>
        <img
          src='/images/produtor-faccin.webp'
          alt='Produtor artesanal'
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-[#120E0B]/72' />

        <div className='absolute inset-0 bg-gradient-to-r from-[#120E0B]/80 via-black/30 to-transparent z-10' />

        <div className='relative z-20 max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-40'>
          <div className='max-w-[760px]'>
            <p className='uppercase tracking-[0.32em] text-[10px] text-white/60 mb-8'>
              Pequenos produtores
            </p>

            <h2 className='font-serif text-[#F4EEE6] text-[52px] md:text-[88px] leading-[0.9] tracking-[-0.05em] mb-10 max-w-[10ch]'>
              Curadoria feita perto de quem produz.
            </h2>

            <p className='text-[#EEE5DD] text-[19px] md:text-[21px] leading-[1.9] max-w-2xl'>
              Cada edição nasce da proximidade com produtores independentes,
              agricultura sustentável e processos artesanais reais.
            </p>
          </div>
        </div>
      </section>

      {/* RITUAL */}

      <section className='py-24 md:py-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>
          <p className='uppercase tracking-[0.28em] text-[10px] text-[#BCA898] mb-6'>
            Como funciona
          </p>

          <h2 className='font-serif text-[#BCA898] text-[54px] md:text-[86px] leading-[0.95] tracking-[-0.04em] mb-20'>
            O Ritual do Drop
          </h2>

          <div className='grid md:grid-cols-3 gap-10'>
            <div className='border-t border-[#DED3C7] pt-8'>
              <p className='text-[#BCA898] text-[28px] mb-5'>01</p>

              <h3 className='font-serif text-[#120E0B] text-[34px] mb-4'>
                Reserva
              </h3>

              <p className='text-[#6B4E3D] text-[17px] leading-[1.9]'>
                Abrimos apenas 30 unidades por edição para garantir frescor,
                exclusividade e evitar desperdício.
              </p>
            </div>

            <div className='border-t border-[#DED3C7] pt-8'>
              <p className='text-[#BCA898] text-[28px] mb-5'>02</p>

              <h3 className='font-serif text-[#120E0B] text-[34px] mb-4'>
                Preparação
              </h3>

              <p className='text-[#6B4E3D] text-[17px] leading-[1.9]'>
                Tudo é preparado sob ritmo artesanal e entregue no melhor
                momento.
              </p>
            </div>

            <div className='border-t border-[#DED3C7] pt-8'>
              <p className='text-[#BCA898] text-[28px] mb-5'>03</p>

              <h3 className='font-serif text-[#120E0B] text-[34px] mb-4'>
                Entrega
              </h3>

              <p className='text-[#6B4E3D] text-[17px] leading-[1.9]'>
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className='pb-20 md:pb-28'>
        <div className='max-w-5xl mx-auto px-6 md:px-10'>
          <div className='relative overflow-hidden rounded-[40px] bg-[#120E0B] px-8 md:px-16 py-16 md:py-20 text-center'>
            <div className='relative z-10 max-w-3xl mx-auto'>
              <p className='uppercase tracking-[0.32em] text-[10px] text-white/50 mb-8'>
                Próxima edição
              </p>

              <h2 className='font-serif text-[#F4EEE6] text-[46px] md:text-[78px] leading-[0.92] tracking-[-0.05em] mb-10'>
                Reservas abertas
                <br />
                para o Drop #01
              </h2>

              <p className='text-[#D7C8BE] text-[18px] leading-[1.9] max-w-2xl mx-auto mb-12'>
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
              </p>

              <a
                href={whatsappLink}
                target='_blank'
                className='inline-flex items-center justify-center bg-[#8C3B30] hover:bg-[#6B2E24] transition-all duration-300 text-[#F4EEE6] px-10 py-5 rounded-full text-[13px] tracking-[0.2em] uppercase'
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

      <footer className='border-t border-[#DED3C7] py-10 bg-[#F4EEE6]'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8'>
          <img
            src='/branding/05_horizontal_claro.svg'
            alt='Curadoria Raiz'
            className='w-[170px] md:w-[210px] h-auto'
          />

          <div className='flex items-center gap-6 text-[#6B4E3D]'>
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

            <p className='text-[11px] tracking-[0.16em] uppercase'>
              São Paulo · Curadoria artesanal
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
