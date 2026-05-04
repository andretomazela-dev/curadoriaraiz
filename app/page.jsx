export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição atual da Curadoria Raiz.'

  return (
    <main className='bg-[#F5F1EA] text-[#2B211D] overflow-hidden'>
      {/* HERO */}
      <section className='relative overflow-hidden bg-gradient-to-br from-[#74665D] via-[#6B5D55] to-[#4A3C35]'>

        {/* glow */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_35%)] opacity-80' />

        {/* ambient glow */}
        <div className='absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-[#B86A46]/10 blur-3xl rounded-full' />

        <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28'>

          <div className='grid lg:grid-cols-2 gap-14 lg:gap-20 items-center'>

            {/* TEXT */}
            <div className='text-center lg:text-left max-w-xl'>

              <p className='uppercase tracking-[0.35em] text-[10px] text-[#E8DED5]/70 mb-8'>
                Curadoria artesanal · São Paulo
              </p>

              <h1
                style={{ fontFamily: 'var(--font-serif)' }}
                className='leading-[0.82] text-[#F8F3EE]'
              >
                <span className='block text-[56px] md:text-[76px] font-medium'>
                  Curadoria
                </span>

                <span className='block text-[92px] md:text-[158px] -mt-4 md:-mt-8'>
                  Raiz
                </span>
              </h1>

              <p className='mt-8 text-[40px] md:text-[62px] leading-[0.95] text-[#F7F1EB] max-w-xl'>
                Alimento com história, entregue por quem escolhe.
              </p>

              <p className='mt-8 text-[17px] md:text-[18px] leading-[1.9] text-[#E6DDD3]/88 max-w-lg'>
                Uma seleção mensal de vinho natural, pão de fermentação natural e produtos artesanais escolhidos para desacelerar o ritmo da cidade por algumas horas.
              </p>

              <a
                href={whatsappLink}
                target='_blank'
                className='inline-flex mt-10 items-center justify-center rounded-full bg-[#D56A44] hover:bg-[#C65A38] transition-all duration-300 px-8 py-4 text-sm tracking-[0.18em] uppercase text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]'
              >
                Reservar edição atual
              </a>
            </div>

            {/* IMAGE */}
            <div className='relative flex justify-center lg:justify-end'>

              <div className='absolute inset-0 bg-[#D56A44]/10 blur-3xl scale-110 rounded-full' />

              <div className='relative rounded-[28px] overflow-hidden border border-white/12 shadow-[0_35px_80px_rgba(0,0,0,0.28)] bg-[#F6F1EB]/10 backdrop-blur-sm p-3'>

                <img
                  src='/images/apagao-editorial.webp'
                  alt='Vinho Apagão'
                  className='w-full max-w-[340px] md:max-w-[560px] h-auto object-cover rounded-[20px]'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className='py-28 md:py-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>

          <div className='grid lg:grid-cols-2 gap-20 items-start'>

            <div>
              <p className='uppercase tracking-[0.3em] text-[10px] text-[#B9ADA1] mb-8'>
                Manifesto
              </p>

              <h2
                style={{ fontFamily: 'var(--font-serif)' }}
                className='text-[#C2B3A7] text-[62px] md:text-[108px] leading-[0.88] tracking-[-0.06em]'
              >
                Menos pressa, mais repertório.
              </h2>
            </div>

            <div className='max-w-2xl'>
              <p className='text-[38px] md:text-[54px] leading-[1.1] text-[#2E2521]'>
                A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade.
              </p>

              <p className='mt-10 text-[18px] leading-[2] text-[#5E5752]'>
                Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente. Escolhas guiadas pelo sabor, pela origem e pelo modo de produção.
              </p>

              <p className='mt-8 text-[16px] leading-[2] text-[#8B8076]'>
                Sem excesso. Sem pressa. Apenas alimento honesto, logística consciente e encontros que fazem sentido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DROP */}
      <section className='pb-28 md:pb-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>

          <p className='uppercase tracking-[0.3em] text-[10px] text-[#B9ADA1] mb-6'>
            Drop #01
          </p>

          <h2
            style={{ fontFamily: 'var(--font-serif)' }}
            className='text-[#C2B3A7] text-[58px] md:text-[92px] leading-[0.92] tracking-[-0.05em]'
          >
            O Trio da Vez
          </h2>

          <p className='mt-8 text-[18px] leading-[2] text-[#5E5752] max-w-3xl'>
            Uma combinação pensada para acompanhar o fim da tarde entre Santa Cecília, Higienópolis, Barra Funda, Vila Buarque e Campos Elíseos.
          </p>

          <div className='grid md:grid-cols-3 gap-12 mt-16'>

            {/* CARD 1 */}
            <div className='group flex flex-col'>
              <div className='overflow-hidden rounded-[28px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]'>
                <img
                  src='/images/apagao-packshot.webp'
                  alt='Apagão Rosé Natural'
                  className='w-full h-[440px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.03]'
                />
              </div>

              <div className='pt-6 min-h-[180px] mt-auto'>
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className='text-[40px] leading-[0.95] text-[#2B211D]'
                >
                  Apagão Rosé Natural
                </h3>

                <p className='mt-4 text-[16px] leading-[1.9] text-[#6A625C]'>
                  Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className='group flex flex-col'>
              <div className='overflow-hidden rounded-[28px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]'>
                <img
                  src='/images/pao-sourdough.webp'
                  alt='Sourdough Natural'
                  className='w-full h-[440px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.03]'
                />
              </div>

              <div className='pt-6 min-h-[180px] mt-auto'>
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className='text-[40px] leading-[0.95] text-[#2B211D]'
                >
                  Sourdough Natural
                </h3>

                <p className='mt-4 text-[16px] leading-[1.9] text-[#6A625C]'>
                  Casca crocante, fermentação lenta e miolo vivo. Assado poucas horas antes da entrega.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className='group flex flex-col'>
              <div className='overflow-hidden rounded-[28px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]'>
                <img
                  src='/images/antepasto.webp'
                  alt='Antepasto de Berinjela'
                  className='w-full h-[440px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.03]'
                />
              </div>

              <div className='pt-6 min-h-[180px] mt-auto'>
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className='text-[40px] leading-[0.95] text-[#2B211D]'
                >
                  Antepasto de Berinjela
                </h3>

                <p className='mt-4 text-[16px] leading-[1.9] text-[#6A625C]'>
                  Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOR */}
      <section className='relative overflow-hidden'>

        <div className='absolute inset-0 bg-black/35 z-10' />

        <img
          src='/images/produtor-faccin.webp'
          alt='Produtor artesanal'
          className='w-full h-[720px] object-cover'
        />

        <div className='absolute inset-0 z-20 flex items-center'>
          <div className='max-w-7xl mx-auto px-6 md:px-10 w-full'>

            <div className='max-w-3xl'>
              <p className='uppercase tracking-[0.3em] text-[10px] text-white/70 mb-8'>
                Pequenos produtores
              </p>

              <h2
                style={{ fontFamily: 'var(--font-serif)' }}
                className='text-[62px] md:text-[92px] leading-[0.92] text-white tracking-[-0.05em]'
              >
                Curadoria feita perto de quem produz.
              </h2>

              <p className='mt-10 text-[18px] leading-[2] text-white/88 max-w-2xl'>
                Cada edição nasce da proximidade com produtores independentes, agricultura sustentável e processos artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RITUAL */}
      <section className='py-28 md:py-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>

          <p className='uppercase tracking-[0.3em] text-[10px] text-[#B9ADA1] mb-8'>
            Como funciona
          </p>

          <h2
            style={{ fontFamily: 'var(--font-serif)' }}
            className='text-[#B8A89C] text-[54px] md:text-[88px] leading-[0.92] tracking-[-0.05em]'
          >
            O Ritual do Drop
          </h2>

          <div className='grid md:grid-cols-3 gap-10 mt-20'>

            <div className='border-t border-[#D8CEC5] pt-8'>
              <p className='text-[#B9ADA1] text-sm mb-5'>01</p>

              <h3
                style={{ fontFamily: 'var(--font-serif)' }}
                className='text-[42px] leading-none text-[#2B211D]'
              >
                Reserva
              </h3>

              <p className='mt-5 text-[17px] leading-[1.9] text-[#5E5752]'>
                Abrimos apenas 30 unidades por edição para garantir frescor e evitar desperdício.
              </p>
            </div>

            <div className='border-t border-[#D8CEC5] pt-8'>
              <p className='text-[#B9ADA1] text-sm mb-5'>02</p>

              <h3
                style={{ fontFamily: 'var(--font-serif)' }}
                className='text-[42px] leading-none text-[#2B211D]'
              >
                Preparação
              </h3>

              <p className='mt-5 text-[17px] leading-[1.9] text-[#5E5752]'>
                Tudo é preparado sob ritmo artesanal e entregue no melhor momento.
              </p>
            </div>

            <div className='border-t border-[#D8CEC5] pt-8'>
              <p className='text-[#B9ADA1] text-sm mb-5'>03</p>

              <h3
                style={{ fontFamily: 'var(--font-serif)' }}
                className='text-[42px] leading-none text-[#2B211D]'
              >
                Entrega
              </h3>

              <p className='mt-5 text-[17px] leading-[1.9] text-[#5E5752]'>
                Entregas entre sexta e sábado em Santa Cecília, Higienópolis, Barra Funda, Vila Buarque e Campos Elíseos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='pb-28 md:pb-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>

          <div className='relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#1E1714] via-[#2A1C18] to-[#5B2E22] px-8 md:px-16 py-20 md:py-28 text-center shadow-[0_40px_80px_rgba(0,0,0,0.18)]'>

            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]' />

            <div className='relative z-10 max-w-5xl mx-auto'>

              <p className='uppercase tracking-[0.35em] text-[10px] text-white/50 mb-8'>
                Próxima edição
              </p>

              <h2
                style={{ fontFamily: 'var(--font-serif)' }}
                className='text-[58px] md:text-[92px] leading-[0.92] text-[#F8F3EE] tracking-[-0.05em]'
              >
                Reservas abertas para o Drop #01
              </h2>

              <p className='mt-10 text-[18px] leading-[2] text-white/78 max-w-3xl mx-auto'>
                Entregas entre sexta e sábado em Santa Cecília, Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
              </p>

              <a
                href={whatsappLink}
                target='_blank'
                className='inline-flex mt-12 items-center justify-center rounded-full bg-[#D56A44] hover:bg-[#C65A38] transition-all duration-300 px-10 py-5 text-sm tracking-[0.18em] uppercase text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]'
              >
                Reservar meu Drop
              </a>

              <p className='mt-5 text-sm text-white/60'>
                Pagamento em até 2x disponível via link.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='border-t border-[#E3DAD1]'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-4 text-[#9D9186] text-sm'>
          <p>Curadoria Raiz · São Paulo</p>
          <p>Curadoria por André Tomazela</p>
        </div>
      </footer>
    </main>
  )
}
