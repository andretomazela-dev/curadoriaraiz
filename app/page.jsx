export default function Home() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição atual da Curadoria Raiz.'

  return (
    <main className='bg-[#F5F1EB] text-[#2B2623] overflow-hidden'>
      {/* HERO */}
      <section className='relative overflow-hidden bg-gradient-to-br from-[#7A6C63] via-[#675B54] to-[#4A3F3A]'>
        <div className='absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]' />

        <div className='max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* TEXTO */}
            <div className='max-w-xl'>
              <p className='uppercase tracking-[0.35em] text-[10px] text-white/55 mb-8'>
                Curadoria artesanal · São Paulo
              </p>

              <h1
                style={{ fontFamily: 'var(--font-serif)' }}
                className='leading-[0.82] text-[#F8F3EE]'
              >
                <span className='block text-6xl md:text-7xl'>
                  Curadoria
                </span>

                <span className='block text-7xl md:text-9xl -mt-3 md:-mt-5'>
                  Raiz
                </span>
              </h1>

              <p className='mt-10 text-3xl md:text-5xl leading-[0.96] tracking-[-0.04em] text-white max-w-lg'>
                Alimento com história,
                entregue por quem escolhe.
              </p>

              <p className='mt-8 text-base leading-[2] text-white/78 max-w-md'>
                Uma seleção mensal de vinho natural, pão de
                fermentação natural e produtos artesanais
                escolhidos para desacelerar o ritmo da cidade por
                algumas horas.
              </p>

              <a
                href={whatsappLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex mt-12 bg-[#D56A44] hover:bg-[#E17852] text-white rounded-full px-9 py-4 uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:scale-[1.02]'
              >
                Reservar edição atual
              </a>
            </div>

            {/* IMAGEM */}
            <div className='flex justify-center lg:justify-end'>
              <div className='relative bg-[#F3EEE8]/95 backdrop-blur rounded-[32px] p-4 md:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]'>
                <div className='absolute inset-0 rounded-[32px] border border-white/30' />

                <img
                  src='/images/apagao-packshot.webp'
                  alt='Vinho Apagão'
                  className='relative z-10 w-full max-w-[520px] rounded-[22px] object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className='py-28 md:py-36 relative'>
        <div className='absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(213,198,187,0.25),transparent_30%)]' />

        <div className='max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-20 relative z-10'>
          <div>
            <p className='uppercase tracking-[0.35em] text-[10px] text-[#A89B92] mb-8'>
              Manifesto
            </p>

            <h2
              style={{ fontFamily: 'var(--font-serif)' }}
              className='text-5xl md:text-7xl leading-[0.9] tracking-[-0.05em] text-[#CBBEB4]'
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

          <div className='max-w-xl'>
            <p className='text-3xl md:text-4xl leading-[1.35] tracking-[-0.03em] text-[#322C28]'>
              A Curadoria Raiz nasce do desejo de aproximar
              pequenos produtores do ritmo da cidade.
            </p>

            <p className='mt-10 text-base leading-[2] text-[#615953]'>
              Cada edição reúne vinho vivo, pão artesanal e
              conservas escolhidas manualmente — não apenas pelo
              sabor, mas pela história, origem e modo de
              produção.
            </p>

            <p className='mt-8 text-sm leading-[2] text-[#7B736C]'>
              Sem excesso. Sem pressa. Apenas alimento honesto,
              logística consciente e encontros que fazem sentido.
            </p>
          </div>
        </div>
      </section>

      {/* TRIO */}
      <section className='pb-28 md:pb-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>
          <div className='max-w-3xl mb-16'>
            <p className='uppercase tracking-[0.35em] text-[10px] text-[#A89B92] mb-6'>
              Drop #01
            </p>

            <h2
              style={{ fontFamily: 'var(--font-serif)' }}
              className='text-5xl md:text-7xl leading-[0.95] tracking-[-0.05em] text-[#CBBEB4]'
            >
              O Trio da Vez
            </h2>

            <p className='mt-6 text-[#6A635D] leading-[2] max-w-2xl'>
              Uma combinação pensada para acompanhar o fim da
              tarde entre Santa Cecília, Higienópolis, Barra
              Funda, Vila Buarque e Campos Elíseos.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 items-start'>
            {/* VINHO */}
            <div className='group'>
              <div className='rounded-[28px] overflow-hidden bg-[#EFE8E1] shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl'>
                <img
                  src='/images/apagao-editorial.webp'
                  alt='Apagão Rosé'
                  className='w-full h-[520px] object-cover'
                />
              </div>

              <div className='pt-6 min-h-[150px]'>
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className='text-4xl leading-[0.95]'
                >
                  Apagão Rosé Natural
                </h3>

                <p className='mt-4 text-sm leading-[1.9] text-[#746B65]'>
                  Rosé de intervenção mínima da Família Faccin.
                  Fresco, vivo e levemente frutado.
                </p>
              </div>
            </div>

            {/* PÃO */}
            <div className='group md:pt-16'>
              <div className='rounded-[28px] overflow-hidden bg-[#EFE8E1] shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl'>
                <img
                  src='/images/pao-sourdough.webp'
                  alt='Pão sourdough'
                  className='w-full h-[440px] object-cover'
                />
              </div>

              <div className='pt-6 min-h-[150px]'>
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className='text-3xl leading-[1]'
                >
                  Sourdough Natural
                </h3>

                <p className='mt-4 text-sm leading-[1.9] text-[#746B65]'>
                  Fermentação lenta, casca crocante e forno
                  artesanal.
                </p>
              </div>
            </div>

            {/* ANTEPASTO */}
            <div className='group md:pt-8'>
              <div className='rounded-[28px] overflow-hidden bg-[#EFE8E1] shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl'>
                <img
                  src='/images/antepasto.webp'
                  alt='Antepasto'
                  className='w-full h-[480px] object-cover'
                />
              </div>

              <div className='pt-6 min-h-[150px]'>
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className='text-3xl leading-[0.98]'
                >
                  Antepasto de Berinjela
                </h3>

                <p className='mt-4 text-sm leading-[1.9] text-[#746B65]'>
                  Receita artesanal preparada em pequenos lotes,
                  com ingredientes frescos e sabor intenso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOR */}
      <section className='relative overflow-hidden'>
        <img
          src='/images/produtor-faccin.webp'
          alt='Produtor'
          className='w-full h-[760px] object-cover'
        />

        <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/10' />

        <div className='absolute inset-0 flex items-end'>
          <div className='max-w-6xl mx-auto px-6 md:px-10 pb-24 w-full'>
            <div className='max-w-2xl'>
              <p className='uppercase tracking-[0.35em] text-[10px] text-white/60 mb-8'>
                Pequenos produtores
              </p>

              <h2
                style={{ fontFamily: 'var(--font-serif)' }}
                className='text-6xl md:text-7xl leading-[0.9] tracking-[-0.05em] text-white'
              >
                Curadoria feita perto de quem produz.
              </h2>

              <p className='mt-8 text-base leading-[2] text-white/80 max-w-lg'>
                Cada edição nasce da proximidade com produtores
                independentes, agricultura sustentável e processos
                artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RITUAL */}
      <section className='py-28 md:py-36'>
        <div className='max-w-6xl mx-auto px-6 md:px-10'>
          <p className='uppercase tracking-[0.35em] text-[10px] text-[#A89B92] mb-6'>
            Como funciona
          </p>

          <h2
            style={{ fontFamily: 'var(--font-serif)' }}
            className='text-5xl md:text-7xl leading-[0.95] tracking-[-0.05em] text-[#CBBEB4] mb-20'
          >
            O Ritual do Drop
          </h2>

          <div className='grid md:grid-cols-3 gap-10'>
            <div className='border-t border-[#DDD4CB] pt-8'>
              <p className='text-[#B5AAA0] mb-6'>01</p>

              <h3
                style={{ fontFamily: 'var(--font-serif)' }}
                className='text-3xl'
              >
                Reserva
              </h3>

              <p className='mt-4 text-[#6E6660] leading-[1.9]'>
                Abrimos apenas 30 unidades por edição para
                garantir frescor, exclusividade e evitar
                desperdício.
              </p>
            </div>

            <div className='border-t border-[#DDD4CB] pt-8'>
              <p className='text-[#B5AAA0] mb-6'>02</p>

              <h3
                style={{ fontFamily: 'var(--font-serif)' }}
                className='text-3xl'
              >
                Preparação
              </h3>

              <p className='mt-4 text-[#6E6660] leading-[1.9]'>
                Tudo é preparado sob ritmo artesanal e entregue no
                melhor momento.
              </p>
            </div>

            <div className='border-t border-[#DDD4CB] pt-8'>
              <p className='text-[#B5AAA0] mb-6'>03</p>

              <h3
                style={{ fontFamily: 'var(--font-serif)' }}
                className='text-3xl'
              >
                Entrega
              </h3>

              <p className='mt-4 text-[#6E6660] leading-[1.9]'>
                Entregas entre sexta e sábado em bairros centrais
                de São Paulo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='pb-24 md:pb-32'>
        <div className='max-w-6xl mx-auto px-6 md:px-10'>
          <div className='relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#1A1413] via-[#241A18] to-[#4A2E24] px-8 md:px-16 py-20 md:py-24 text-center shadow-[0_25px_80px_rgba(0,0,0,0.18)]'>
            <div className='absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_30%)]' />

            <div className='relative z-10'>
              <p className='uppercase tracking-[0.35em] text-[10px] text-white/45 mb-8'>
                Próxima edição
              </p>

              <h2
                style={{ fontFamily: 'var(--font-serif)' }}
                className='text-5xl md:text-7xl leading-[0.92] tracking-[-0.05em] text-[#F8F3EE] max-w-4xl mx-auto'
              >
                Reservas abertas para o Drop #01
              </h2>

              <p className='mt-8 text-white/72 leading-[2] max-w-2xl mx-auto'>
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque, Barra Funda e Campos
                Elíseos.
              </p>

              <a
                href={whatsappLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex mt-12 bg-[#D56A44] hover:bg-[#E17852] text-white rounded-full px-10 py-4 uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:scale-[1.03]'
              >
                Reservar meu Drop
              </a>

              <p className='mt-5 text-xs text-white/45 tracking-wide'>
                Pagamento em até 2x disponível via link.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='border-t border-[#E6DDD5] py-10 text-xs tracking-wide text-[#9A9189]'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-4'>
          <p>Curadoria Raiz · São Paulo</p>
          <p>Curadoria por André Tomazela</p>
        </div>
      </footer>
    </main>
  )
}
