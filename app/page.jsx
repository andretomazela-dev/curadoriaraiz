export default function Home() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição atual da Curadoria Raiz.'

  return (
    <main className='overflow-hidden bg-[#F4EEE6] text-[#120E0B]'>
      {/* HERO */}

      <section className='relative overflow-hidden bg-[linear-gradient(135deg,#120b09_0%,#1b0d0a_45%,#2b130d_100%)] text-[#F4EEE6]'>
        {/* glow */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,59,48,0.24),transparent_36%)]' />

        <div className='relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 md:pb-32'>
          {/* HEADER */}

          <header className='mb-16 flex items-center justify-between md:mb-24'>
            <img
              src='/branding/05_horizontal_claro.svg'
              alt='Curadoria Raiz'
              className='h-auto w-[230px] md:w-[290px]'
            />

            <div className='hidden items-center gap-4 text-[10px] uppercase tracking-[0.34em] text-[#D6C6BA] md:flex'>
              <span>São Paulo</span>
              <span className='opacity-40'>•</span>
              <span>Curadoria artesanal</span>
            </div>
          </header>

          {/* HERO CONTENT */}

          <div className='grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]'>
            {/* LEFT */}

            <div className='max-w-2xl'>
              <div className='mb-10'>
                <img
                  src='/branding/01_principal_claro.svg'
                  alt='Curadoria Raiz'
                  className='h-auto w-[340px] md:w-[460px]'
                />
              </div>

              <div className='mb-8 text-[11px] uppercase tracking-[0.4em] text-[#C49A84]'>
                Drop #01 · Produção limitada
              </div>

              <h1 className='max-w-[720px] font-serif text-[4rem] leading-[0.9] tracking-[-0.05em] md:text-[6.8rem]'>
                Alimento
                <br />
                com história,
                <br />
                entregue por
                <br />
                quem escolhe.
              </h1>

              <p className='mt-8 max-w-md text-[16px] leading-8 text-[#D8CBC1]'>
                Uma seleção mensal de vinho natural, pão de fermentação lenta
                e produtos artesanais escolhidos para desacelerar o ritmo da
                cidade por algumas horas.
              </p>

              {/* CTA */}

              <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
                <a
                  href={whatsappLink}
                  target='_blank'
                  className='inline-flex items-center justify-center rounded-full bg-[#8C3B30] px-8 py-4 text-[11px] uppercase tracking-[0.26em] text-[#F4EEE6] transition hover:bg-[#6B2E24]'
                >
                  Reservar edição atual
                </a>

                <a
                  href='#manifesto'
                  className='inline-flex items-center justify-center rounded-full border border-[#5F4036] px-8 py-4 text-[11px] uppercase tracking-[0.26em] text-[#E6D8CF] transition hover:border-[#8F5F50] hover:bg-white/5'
                >
                  Conhecer a curadoria
                </a>
              </div>

              <div className='mt-8 text-[10px] uppercase tracking-[0.32em] text-[#9F877B]'>
                30 unidades · entregas sexta e sábado
              </div>
            </div>

            {/* RIGHT */}

            <div className='relative flex items-center justify-center lg:justify-end'>
              {/* glow */}

              <div className='absolute h-[520px] w-[520px] rounded-full bg-[#7A2F1E]/20 blur-3xl' />

              {/* image */}

              <div className='relative overflow-hidden rounded-[34px] bg-[#EFE8DF] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.42)]'>
                <img
                  src='/images/apagao-editorial.webp'
                  alt='Curadoria Raiz'
                  className='h-[560px] w-full rounded-[26px] object-cover md:w-[470px]'
                />

                {/* floating label */}

                <div className='absolute bottom-5 left-5 rounded-full bg-[#1C120F]/90 px-5 py-3 backdrop-blur'>
                  <div className='text-[10px] uppercase tracking-[0.3em] text-[#F4EEE6]'>
                    vinho natural · pão artesanal · conservas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}

      <section
        id='manifesto'
        className='bg-[#F4EEE6] py-28 md:py-36'
      >
        <div className='mx-auto grid max-w-7xl gap-20 px-6 md:grid-cols-2 md:px-10'>
          <div>
            <div className='mb-8 text-[11px] uppercase tracking-[0.34em] text-[#BCA898]'>
              Manifesto
            </div>

            <h2 className='font-serif text-[3.8rem] leading-[0.92] tracking-[-0.05em] text-[#BCA898] md:text-[6rem]'>
              Menos
              <br />
              pressa,
              <br />
              mais
              <br />
              repertório.
            </h2>
          </div>

          <div className='max-w-xl pt-2'>
            <h3 className='mb-10 text-[2.2rem] leading-[1.02] tracking-[-0.04em] text-[#120E0B] md:text-[3.2rem]'>
              A Curadoria Raiz nasce do desejo de aproximar pequenos produtores
              do ritmo da cidade.
            </h3>

            <div className='space-y-7 text-[17px] leading-loose text-[#6B4E3D]'>
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

      <section className='bg-[#F4EEE6] pb-28 md:pb-36'>
        <div className='mx-auto max-w-7xl px-6 md:px-10'>
          <div className='mb-16 max-w-3xl'>
            <div className='mb-6 text-[11px] uppercase tracking-[0.34em] text-[#BCA898]'>
              Drop #01
            </div>

            <h2 className='mb-6 font-serif text-[3.4rem] leading-none tracking-[-0.05em] text-[#BCA898] md:text-[5.2rem]'>
              O Trio da Vez
            </h2>

            <p className='max-w-2xl text-[17px] leading-relaxed text-[#6B4E3D]'>
              Uma combinação pensada para acompanhar o fim da tarde entre
              Santa Cecília, Higienópolis, Barra Funda, Vila Buarque e Campos
              Elíseos.
            </p>
          </div>

          {/* CARDS */}

          <div className='grid gap-8 md:grid-cols-3'>
            {/* CARD 1 */}

            <article className='group'>
              <div className='mb-6 overflow-hidden rounded-[30px] bg-[#E8DDD3]'>
                <img
                  src='/images/apagao-packshot.webp'
                  alt='Apagão Rosé Natural'
                  className='h-[520px] w-full object-cover transition duration-700 group-hover:scale-[1.03]'
                />
              </div>

              <h3 className='mb-4 font-serif text-[2.2rem] leading-[0.94] tracking-[-0.04em] text-[#120E0B]'>
                Apagão Rosé
                <br />
                Natural
              </h3>

              <p className='text-[15px] leading-relaxed text-[#6B4E3D]'>
                Rosé de intervenção mínima da Família Faccin. Fresco, vivo e
                levemente frutado.
              </p>
            </article>

            {/* CARD 2 */}

            <article className='group'>
              <div className='mb-6 overflow-hidden rounded-[30px] bg-[#E8DDD3]'>
                <img
                  src='/images/pao-sourdough.webp'
                  alt='Sourdough Natural'
                  className='h-[520px] w-full object-cover transition duration-700 group-hover:scale-[1.03]'
                />
              </div>

              <h3 className='mb-4 font-serif text-[2.2rem] leading-[0.94] tracking-[-0.04em] text-[#120E0B]'>
                Sourdough
                <br />
                Natural
              </h3>

              <p className='text-[15px] leading-relaxed text-[#6B4E3D]'>
                Fermentação lenta e forno artesanal. Assado poucas horas antes
                da entrega.
              </p>
            </article>

            {/* CARD 3 */}

            <article className='group'>
              <div className='mb-6 overflow-hidden rounded-[30px] bg-[#E8DDD3]'>
                <img
                  src='/images/antepasto.webp'
                  alt='Antepasto de Berinjela'
                  className='h-[520px] w-full object-cover transition duration-700 group-hover:scale-[1.03]'
                />
              </div>

              <h3 className='mb-4 font-serif text-[2.2rem] leading-[0.94] tracking-[-0.04em] text-[#120E0B]'>
                Antepasto de
                <br />
                Berinjela
              </h3>

              <p className='text-[15px] leading-relaxed text-[#6B4E3D]'>
                Receita artesanal preparada em pequenos lotes, com ingredientes
                frescos e sabor intenso.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRODUTOR */}

      <section className='relative min-h-[720px] overflow-hidden'>
        <img
          src='/images/produtor-faccin.webp'
          alt='Produtor artesanal'
          className='absolute inset-0 h-full w-full object-cover'
        />

        <div className='absolute inset-0 bg-[#120E0B]/45' />

        <div className='relative z-10 flex min-h-[720px] items-end'>
          <div className='mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-24'>
            <div className='max-w-2xl'>
              <div className='mb-6 text-[11px] uppercase tracking-[0.34em] text-[#D8C8BC]'>
                Pequenos produtores
              </div>

              <h2 className='mb-8 font-serif text-[3.8rem] leading-[0.92] tracking-[-0.05em] text-[#F4EEE6] md:text-[6rem]'>
                Curadoria feita
                <br />
                perto de quem
                <br />
                produz.
              </h2>

              <p className='max-w-lg text-[18px] leading-relaxed text-[#E3D6CC]'>
                Cada edição nasce da proximidade com produtores independentes,
                agricultura sustentável e processos artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RITUAL */}

      <section className='bg-[#F4EEE6] py-28 md:py-36'>
        <div className='mx-auto max-w-7xl px-6 md:px-10'>
          <div className='mb-20'>
            <div className='mb-6 text-[11px] uppercase tracking-[0.34em] text-[#BCA898]'>
              Como funciona
            </div>

            <h2 className='font-serif text-[3.4rem] tracking-[-0.05em] text-[#BCA898] md:text-[5.2rem]'>
              O Ritual do Drop
            </h2>
          </div>

          <div className='grid gap-12 md:grid-cols-3'>
            <div className='border-t border-[#D8CCC1] pt-8'>
              <div className='mb-6 text-xl text-[#B89D8A]'>01</div>

              <h3 className='mb-5 font-serif text-[2rem] tracking-[-0.03em] text-[#120E0B]'>
                Reserva
              </h3>

              <p className='leading-relaxed text-[#6B4E3D]'>
                Abrimos apenas 30 unidades por edição para garantir frescor,
                exclusividade e evitar desperdício.
              </p>
            </div>

            <div className='border-t border-[#D8CCC1] pt-8'>
              <div className='mb-6 text-xl text-[#B89D8A]'>02</div>

              <h3 className='mb-5 font-serif text-[2rem] tracking-[-0.03em] text-[#120E0B]'>
                Preparação
              </h3>

              <p className='leading-relaxed text-[#6B4E3D]'>
                Tudo é preparado sob ritmo artesanal e entregue no melhor
                momento.
              </p>
            </div>

            <div className='border-t border-[#D8CCC1] pt-8'>
              <div className='mb-6 text-xl text-[#B89D8A]'>03</div>

              <h3 className='mb-5 font-serif text-[2rem] tracking-[-0.03em] text-[#120E0B]'>
                Entrega
              </h3>

              <p className='leading-relaxed text-[#6B4E3D]'>
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section
        id='reserva'
        className='bg-[#F4EEE6] pb-32'
      >
        <div className='mx-auto max-w-5xl px-6'>
          <div className='relative overflow-hidden rounded-[42px] bg-[linear-gradient(135deg,#120b09_0%,#1b0d0a_45%,#2b130d_100%)] px-8 py-16 text-center text-[#F4EEE6] md:px-20 md:py-24'>
            {/* glow */}

            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,59,48,0.28),transparent_42%)]' />

            <div className='relative z-10'>
              <div className='mb-8 text-[11px] uppercase tracking-[0.34em] text-[#C49A84]'>
                Próxima edição
              </div>

              <h2 className='mb-8 font-serif text-[3.4rem] leading-[0.92] tracking-[-0.05em] md:text-[5.8rem]'>
                Reservas abertas
                <br />
                para o Drop #01
              </h2>

              <p className='mx-auto mb-12 max-w-2xl text-[17px] leading-relaxed text-[#D8CBC1]'>
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
              </p>

              <a
                href={whatsappLink}
                target='_blank'
                className='inline-flex items-center justify-center rounded-full bg-[#8C3B30] px-10 py-5 text-[12px] uppercase tracking-[0.24em] text-[#F4EEE6] transition hover:bg-[#6B2E24]'
              >
                Reservar meu drop
              </a>

              <div className='mt-8 text-[11px] uppercase tracking-[0.18em] text-[#9F877B]'>
                pagamento em até 2x disponível via link
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className='border-t border-[#DDD1C6] bg-[#F4EEE6]'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-10'>
          <img
            src='/branding/06_horizontal_escuro.svg'
            alt='Curadoria Raiz'
            className='h-auto w-[180px] opacity-90'
          />

          <div className='flex items-center gap-4 text-[10px] uppercase tracking-[0.32em] text-[#A38E80]'>
            <span>Instagram</span>
            <span className='opacity-30'>•</span>
            <span>São Paulo</span>
            <span className='opacity-30'>•</span>
            <span>Curadoria artesanal</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
