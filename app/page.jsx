import Image from 'next/image'

export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição atual da Curadoria Raiz.'

  return (
    <main className='bg-[#F6F2EC] text-[#2B2623] overflow-hidden'>
      {/* HERO */}

      <section className='relative overflow-hidden bg-gradient-to-br from-[#7A6A61] via-[#5C4A43] to-[#241714]'>
        {/* glow */}
        <div className='absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_40%)]' />

        {/* grain */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* vinho glow */}
        <div className='absolute right-0 top-0 w-[700px] h-[700px] bg-[#A33E2F]/20 blur-3xl rounded-full' />

        <div className='relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28'>
          <div className='grid lg:grid-cols-2 gap-14 items-center'>
            {/* TEXTO */}

            <div className='relative z-10 max-w-xl'>
              <p className='uppercase tracking-[0.35em] text-[10px] md:text-xs text-white/55 mb-10'>
                Curadoria artesanal · São Paulo
              </p>

              {/* NOVO LOGO */}

              <div className='mb-12 md:mb-14'>
                <Image
                  src='/branding/02_principal_escuro.svg'
                  alt='Curadoria Raiz'
                  width={620}
                  height={260}
                  priority
                  className='w-[240px] md:w-[360px] lg:w-[420px] h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
                />
              </div>

              {/* HEADLINE */}

              <h2 className='text-[40px] md:text-[60px] leading-[0.94] tracking-[-0.05em] text-[#F7F1EC] font-light max-w-lg'>
                Alimento com história, entregue por quem escolhe.
              </h2>

              <p className='mt-8 text-[15px] md:text-[18px] leading-[1.9] text-white/72 max-w-md'>
                Uma seleção mensal de vinho natural, pão de fermentação
                natural e produtos artesanais escolhidos para desacelerar o
                ritmo da cidade por algumas horas.
              </p>

              <div className='mt-10 flex flex-wrap items-center gap-4'>
                <a
                  href={whatsappLink}
                  target='_blank'
                  className='inline-flex items-center justify-center rounded-full bg-[#D66A42] hover:bg-[#BF5934] transition-all duration-300 px-7 py-4 text-[11px] tracking-[0.18em] uppercase text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:scale-[1.02]'
                >
                  Reservar edição atual
                </a>

                <a
                  href='#manifesto'
                  className='inline-flex items-center justify-center rounded-full border border-white/16 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 px-7 py-4 text-[11px] tracking-[0.18em] uppercase text-white/85'
                >
                  Conhecer o manifesto
                </a>
              </div>

              <p className='mt-5 text-[12px] text-white/50'>
                Produção limitada · 30 unidades por edição
              </p>
            </div>

            {/* IMAGEM */}

            <div className='relative flex justify-center lg:justify-end'>
              {/* glow vinho */}

              <div className='absolute w-[420px] h-[420px] rounded-full bg-[#B24A2B]/20 blur-3xl' />

              {/* frame premium */}

              <div className='relative backdrop-blur-md bg-[#F6F0EA]/10 border border-white/12 rounded-[34px] p-4 md:p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]'>
                {/* brilho */}

                <div className='absolute inset-0 rounded-[34px] bg-gradient-to-br from-white/18 to-transparent pointer-events-none' />

                <div className='relative overflow-visible rounded-[26px]'>
                  {/* imagem */}

                  <img
                    src='/images/apagao-editorial.webp'
                    alt='Vinho Apagão Curadoria Raiz'
                    className='relative z-10 w-full max-w-[560px] object-cover rounded-[22px] shadow-2xl scale-[1.04]'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fade */}

        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F6F1EB]' />
      </section>

      {/* MANIFESTO */}

      <section id='manifesto' className='py-24 md:py-36'>
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
              A Curadoria Raiz nasce do desejo de aproximar pequenos produtores
              do ritmo da cidade.
            </h3>

            <div className='space-y-8 text-[#574F4A] text-[18px] leading-[2]'>
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
            <p className='uppercase tracking-[0.28em] text-[10px] text-[#B9ADA2] mb-6'>
              Drop #01
            </p>

            <h2 className='font-serif text-[#D0C4BA] text-[54px] md:text-[84px] leading-[0.95] tracking-[-0.04em] mb-8'>
              O Trio da Vez
            </h2>

            <p className='text-[#5E5650] text-[18px] leading-[1.95] max-w-2xl'>
              Uma combinação pensada para acompanhar o fim da tarde entre Santa
              Cecília, Higienópolis, Barra Funda, Vila Buarque e Campos
              Elíseos.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* CARD */}

            {[
              {
                image: '/images/apagao-packshot.webp',
                title: 'Apagão Rosé Natural',
                text: 'Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.',
              },
              {
                image: '/images/pao-sourdough.webp',
                title: 'Sourdough Natural',
                text: 'Fermentação lenta e forno artesanal. Assado poucas horas antes da entrega.',
              },
              {
                image: '/images/antepasto.webp',
                title: 'Antepasto de Berinjela',
                text: 'Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.',
              },
            ].map((item, index) => (
              <article key={index} className='group'>
                <div className='rounded-[28px] overflow-hidden bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full aspect-[4/5] object-cover group-hover:scale-[1.02] transition-transform duration-500'
                  />
                </div>

                <div className='pt-6 min-h-[180px]'>
                  <h3 className='font-serif text-[#2F2926] text-[38px] leading-[0.96] tracking-[-0.04em] mb-4'>
                    {item.title}
                  </h3>

                  <p className='text-[#6A625C] text-[17px] leading-[1.85]'>
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
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

        <div className='absolute inset-0 bg-black/52' />

        <div className='absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent z-10' />

        <div className='relative z-20 max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-40'>
          <div className='max-w-[760px]'>
            <p className='uppercase tracking-[0.32em] text-[10px] text-white/60 mb-8'>
              Pequenos produtores
            </p>

            <h2 className='font-serif text-[#F8F3EE] text-[52px] md:text-[88px] leading-[0.9] tracking-[-0.05em] mb-10 max-w-[10ch]'>
              Curadoria feita perto de quem produz.
            </h2>

            <p className='text-[#EEE5DD] text-[19px] md:text-[21px] leading-[1.9] max-w-2xl'>
              Cada edição nasce da proximidade com produtores independentes,
              agricultura sustentável e processos artesanais reais.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className='pb-20 md:pb-28 pt-24'>
        <div className='max-w-5xl mx-auto px-6 md:px-10'>
          <div className='relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#241714] via-[#2B1915] to-[#6A3426] px-8 md:px-16 py-16 md:py-20 text-center shadow-[0_40px_100px_rgba(0,0,0,0.16)]'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]' />

            <div className='relative z-10 max-w-3xl mx-auto'>
              <Image
                src='/branding/08_favicon.png'
                alt='Monograma Curadoria Raiz'
                width={62}
                height={62}
                className='mx-auto mb-8 rounded-2xl shadow-lg'
              />

              <p className='uppercase tracking-[0.32em] text-[10px] text-white/50 mb-8'>
                Próxima edição
              </p>

              <h2 className='font-serif text-[#F8F3EE] text-[46px] md:text-[78px] leading-[0.92] tracking-[-0.05em] mb-10'>
                Reservas abertas
                <br />
                para o Drop #01
              </h2>

              <p className='text-[#E7D8D0] text-[18px] leading-[1.9] max-w-2xl mx-auto mb-12'>
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
              </p>

              <a
                href={whatsappLink}
                target='_blank'
                className='inline-flex items-center justify-center bg-[#D56A44] hover:bg-[#C45B36] transition-all duration-300 text-white px-10 py-5 rounded-full text-[13px] tracking-[0.2em] uppercase shadow-[0_12px_35px_rgba(0,0,0,0.2)]'
              >
                Reservar meu Drop
              </a>

              <p className='text-[#D7C8BE] text-[15px] mt-6'>
                Pagamento em até 2x disponível via link.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className='border-t border-[#E5DBD2] py-10'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8'>
          <Image
            src='/branding/06_horizontal_escuro.svg'
            alt='Curadoria Raiz'
            width={240}
            height={90}
            className='w-[180px] h-auto opacity-90'
          />

          <div className='flex items-center gap-5 text-[#9D9186] text-[12px] tracking-[0.08em] uppercase'>
            <p>© 2026 Curadoria Raiz · São Paulo</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
