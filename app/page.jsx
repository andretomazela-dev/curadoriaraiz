export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição atual da Curadoria Raiz.'

  return (
    <main className='bg-[#F5F1EB] text-[#2B2623] overflow-hidden'>

      {/* HERO */}
      <section className='relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(182,93,61,0.22),_transparent_35%),linear-gradient(135deg,#746860_0%,#5F534D_45%,#433834_100%)]'>

        <div className='absolute inset-0 opacity-[0.06] bg-[url("https://www.transparenttextures.com/patterns/noise.png")]' />

        <div className='relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28'>

          <div className='grid lg:grid-cols-2 gap-14 items-center'>

            {/* TEXTO */}
            <div className='max-w-xl'>

              <p className='uppercase tracking-[0.32em] text-[10px] md:text-xs text-white/55 mb-8'>
                Curadoria artesanal · São Paulo
              </p>

              <h1 className='font-serif text-[#F7F3EE] leading-[0.88] tracking-[-0.04em]'>
                <span className='block text-[72px] md:text-[118px]'>
                  Curadoria
                </span>

                <span className='block text-[82px] md:text-[138px] -mt-4 md:-mt-7'>
                  Raiz
                </span>
              </h1>

              <p className='mt-10 text-[38px] md:text-[52px] leading-[0.95] tracking-[-0.04em] text-[#F7F3EE] max-w-lg'>
                Alimento com história,
                entregue por quem escolhe.
              </p>

              <p className='mt-8 text-[15px] md:text-[17px] leading-[2] text-white/72 max-w-md'>
                Uma seleção mensal de vinho natural,
                pão de fermentação natural e produtos
                artesanais escolhidos para desacelerar
                o ritmo da cidade por algumas horas.
              </p>

              <a
                href={whatsappLink}
                target='_blank'
                className='group mt-12 inline-flex items-center justify-center rounded-full bg-[#D56A44] hover:bg-[#E17852] px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(213,106,68,0.28)]'
              >
                Reservar edição atual
              </a>
            </div>

            {/* IMAGEM */}
            <div className='relative flex justify-center lg:justify-end'>

              <div className='absolute w-[520px] h-[520px] rounded-full bg-[#C86B48]/10 blur-3xl' />

              <div className='relative rounded-[32px] overflow-hidden bg-[#F4EFE8]/95 shadow-[0_35px_90px_rgba(0,0,0,0.28)] p-5 md:p-8 backdrop-blur-sm border border-white/20'>

                <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none' />

                <img
                  src='/images/apagao-packshot.webp'
                  alt='Vinho Apagão'
                  className='w-full max-w-[520px] object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className='py-28 md:py-36'>
        <div className='max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-20 items-start'>

          <div>
            <p className='uppercase tracking-[0.32em] text-[10px] text-[#A89B92] mb-10'>
              Manifesto
            </p>

            <h2 className='font-serif text-[56px] md:text-[92px] leading-[0.88] tracking-[-0.05em] text-[#D6CDC5]'>
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

            <p className='text-[30px] md:text-[42px] leading-[1.35] tracking-[-0.03em] text-[#332E2A]'>
              A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade.
            </p>

            <p className='mt-10 text-[16px] leading-[2] text-[#5F5954]'>
              Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente — não apenas pelo sabor, mas pela história, origem e modo de produção.
            </p>

            <p className='mt-8 text-[15px] leading-[2] text-[#7C746D]'>
              Sem excesso. Sem pressa. Apenas alimento honesto, logística consciente e encontros que fazem sentido.
            </p>
          </div>
        </div>
      </section>

      {/* TRIO */}
      <section className='pb-28 md:pb-36'>
        <div className='max-w-7xl mx-auto px-6 md:px-10'>

          <div className='max-w-2xl mb-16'>

            <p className='uppercase tracking-[0.32em] text-[10px] text-[#A89B92] mb-6'>
              Drop #01
            </p>

            <h2 className='font-serif text-[56px] md:text-[88px] leading-[0.95] tracking-[-0.05em] text-[#D8CEC6]'>
              O Trio da Vez
            </h2>

            <p className='mt-6 text-[#6B635D] leading-[2] max-w-xl'>
              Uma combinação pensada para acompanhar o fim da tarde entre Santa Cecília, Higienópolis, Barra Funda, Vila Buarque e Campos Elíseos.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>

            {/* VINHO */}
            <div className='group'>
              <div className='overflow-hidden rounded-[28px] bg-[#EFE9E2] shadow-[0_18px_45px_rgba(0,0,0,0.05)]'>
                <img
                  src='/images/apagao-packshot.webp'
                  alt='Apagão Rosé'
                  className='w-full h-[520px] object-cover transition duration-700 group-hover:scale-[1.03]'
                />
              </div>

              <div className='pt-7'>
                <h3 className='font-serif text-[42px] leading-[0.95] tracking-[-0.04em] text-[#2E2825]'>
                  Apagão
                  <br />
                  Rosé Natural
                </h3>

                <p className='mt-5 text-[15px] leading-[1.9] text-[#746B65]'>
                  Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.
                </p>
              </div>
            </div>

            {/* PÃO */}
            <div className='group md:pt-16'>
              <div className='overflow-hidden rounded-[28px] bg-[#EFE9E2] shadow-[0_18px_45px_rgba(0,0,0,0.05)]'>
                <img
                  src='/images/pao-sourdough.webp'
                  alt='Pão sourdough'
                  className='w-full h-[440px] object-cover transition duration-700 group-hover:scale-[1.03]'
                />
              </div>

              <div className='pt-7'>
                <h3 className='font-serif text-[34px] leading-[1] tracking-[-0.04em] text-[#2E2825]'>
                  Sourdough
                  <br />
                  Natural
                </h3>

                <p className='mt-5 text-[15px] leading-[1.9] text-[#746B65]'>
                  Casca crocante, fermentação lenta e miolo vivo. Assado poucas horas antes da entrega.
                </p>
              </div>
            </div>

            {/* ANTEPASTO */}
            <div className='group md:pt-8'>
              <div className='overflow-hidden rounded-[28px] bg-[#EFE9E2] shadow-[0_18px_45px_rgba(0,0,0,0.05)]'>
                <img
                  src='/images/antepasto.webp'
                  alt='Antepasto'
                  className='w-full h-[480px] object-cover transition duration-700 group-hover:scale-[1.03]'
                />
              </div>

              <div className='pt-7'>
                <h3 className='font-serif text-[36px] leading-[0.98] tracking-[-0.04em] text-[#2E2825]'>
                  Antepasto de
                  <br />
                  Berinjela
                </h3>

                <p className='mt-5 text-[15px] leading-[1.9] text-[#746B65]'>
                  Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.
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

        <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/55' />

        <div className='absolute inset-0 flex items-end'>

          <div className='max-w-6xl mx-auto px-6 md:px-10 pb-24 md:pb-28 w-full'>

            <div className='max-w-2xl'>

              <p className='uppercase tracking-[0.32em] text-[10px] text-white/65 mb-8'>
                Pequenos produtores
              </p>

              <h2 className='font-serif text-[64px] md:text-[92px] leading-[0.9] tracking-[-0.05em] text-white'>
                Curadoria feita perto de quem produz.
              </h2>

              <p className='mt-8 text-[16px] leading-[2] text-white/78 max-w-lg'>
                Cada edição nasce da proximidade com produtores independentes, agricultura sustentável e processos artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RITUAL */}
      <section className='py-28 md:py-36'>

        <div className='max-w-6xl mx-auto px-6 md:px-10'>

          <div className='mb-20'>

            <p className='uppercase tracking-[0.32em] text-[10px] text-[#A89B92] mb-6'>
              Como funciona
            </p>

            <h2 className='font-serif text-[58px] md:text-[92px] leading-[0.95] tracking-[-0.05em] text-[#D6CDC5]'>
              O Ritual do Drop
            </h2>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>

            {[
              ['01', 'Reserva', 'Abrimos poucos pedidos por edição para garantir frescor e evitar desperdício.'],
              ['02', 'Preparação', 'Tudo é preparado sob ritmo artesanal e entregue no melhor momento.'],
              ['03', 'Entrega', 'As entregas acontecem entre sexta e sábado em bairros centrais de São Paulo.'],
            ].map((item) => (
              <div
                key={item[0]}
                className='group border-t border-[#DDD4CB] pt-8'
              >
                <p className='text-[#B5AAA0] text-sm mb-8'>
                  {item[0]}
                </p>

                <h3 className='font-serif text-[42px] tracking-[-0.04em] text-[#2E2825]'>
                  {item[1]}
                </h3>

                <p className='mt-5 text-[15px] leading-[1.9] text-[#6E6660] max-w-xs'>
                  {item[2]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className='pb-24 md:pb-32'>

        <div className='max-w-6xl mx-auto px-6 md:px-10'>

          <div className='relative overflow-hidden rounded-[40px] bg-[radial-gradient(circle_at_top_right,_rgba(201,104,71,0.22),_transparent_30%),linear-gradient(135deg,#181312_0%,#231916_55%,#35231E_100%)] px-8 md:px-16 py-20 md:py-24 text-center shadow-[0_35px_90px_rgba(0,0,0,0.18)]'>

            <div className='absolute inset-0 opacity-[0.05] bg-[url("https://www.transparenttextures.com/patterns/noise.png")]' />

            <div className='relative z-10'>

              <p className='uppercase tracking-[0.32em] text-[10px] text-white/45 mb-8'>
                Próxima edição
              </p>

              <h2 className='font-serif text-[52px] md:text-[86px] leading-[0.92] tracking-[-0.05em] text-[#F8F3EE] max-w-4xl mx-auto'>
                Reservas abertas para o Drop #01
              </h2>

              <p className='mt-8 text-white/70 leading-[2] max-w-2xl mx-auto'>
                Entregas entre sexta e sábado em Santa Cecília, Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
              </p>

              <a
                href={whatsappLink}
                target='_blank'
                className='inline-flex mt-12 bg-[#D56A44] hover:bg-[#E17852] text-white rounded-full px-10 py-4 uppercase tracking-[0.22em] text-[11px] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_18px_50px_rgba(213,106,68,0.32)]'
              >
                Reservar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='border-t border-[#E6DDD5] py-10 text-[11px] tracking-wide text-[#9A9189]'>

        <div className='max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-4'>
          <p>Curadoria Raiz · São Paulo</p>
          <p>Curadoria por André Tomazela</p>
        </div>
      </footer>
    </main>
  )
}
