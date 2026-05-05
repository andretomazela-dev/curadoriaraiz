import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#efe9e1] text-[#201815] overflow-hidden'>
      {/* HERO */}
      <section className='relative min-h-screen bg-[#140f0d] text-[#f5f0ea]'>
        {/* glow */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(157,69,45,0.22),transparent_38%)] pointer-events-none' />

        <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-20'>
          {/* HEADER */}
          <header className='flex items-center justify-between mb-20 lg:mb-28'>
            <Image
              src='/branding/09_mobile.svg'
              alt='Curadoria Raiz'
              width={170}
              height={80}
              priority
              className='w-[120px] md:w-[150px] h-auto'
            />

            <div className='flex items-center gap-4 text-[10px] tracking-[0.32em] uppercase text-[#c9b8ab]'>
              <span>São Paulo</span>
              <span className='opacity-30'>•</span>
              <span>Curadoria artesanal</span>
            </div>
          </header>

          {/* HERO CONTENT */}
          <div className='grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center'>
            {/* LEFT */}
            <div className='max-w-xl'>
              <div className='mb-8 text-[11px] tracking-[0.35em] uppercase text-[#bfa99a]'>
                Drop #01 · Produção limitada
              </div>

              <h1 className='font-serif text-[clamp(3.6rem,7vw,7.2rem)] leading-[0.92] tracking-[-0.04em] mb-8'>
                Alimento com
                <br />
                história,
                <br />
                entregue por
                <br />
                quem escolhe.
              </h1>

              <p className='text-[#d5c6bb] text-[17px] leading-relaxed max-w-md mb-10'>
                Uma seleção mensal de vinho natural, pão de fermentação
                lenta e produtos artesanais escolhidos para desacelerar o
                ritmo da cidade por algumas horas.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                <a
                  href='#reserva'
                  className='inline-flex items-center justify-center rounded-full bg-[#9d452d] hover:bg-[#b45439] transition-colors px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-white'
                >
                  Reservar meu drop
                </a>

                <a
                  href='#manifesto'
                  className='inline-flex items-center justify-center rounded-full border border-[#5a4438] hover:border-[#8a6656] transition-colors px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-[#f1e7df]'
                >
                  Conhecer a curadoria
                </a>
              </div>

              <div className='text-[11px] tracking-[0.24em] uppercase text-[#8f7768]'>
                30 unidades · entregas sexta e sábado
              </div>
            </div>

            {/* RIGHT */}
            <div className='relative'>
              <div className='relative rounded-[38px] overflow-hidden bg-[#efe9e1] p-5 md:p-8 shadow-[0_40px_100px_rgba(0,0,0,0.35)]'>
                <Image
                  src='/images/vinho-hero.jpg'
                  alt='Vinho natural Curadoria Raiz'
                  width={900}
                  height={1200}
                  className='w-full h-auto object-cover rounded-[26px]'
                  priority
                />
              </div>

              {/* floating label */}
              <div className='absolute -bottom-6 left-6 bg-[#1b1411] border border-[#3a2b24] rounded-full px-5 py-3 text-[11px] tracking-[0.22em] uppercase text-[#d7c4b7] backdrop-blur-sm'>
                vinho natural · pão artesanal · conservas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        id='manifesto'
        className='py-28 lg:py-36 bg-[#efe9e1]'
      >
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <div className='grid lg:grid-cols-2 gap-20 items-start'>
            <div>
              <div className='text-[11px] tracking-[0.32em] uppercase text-[#b8a08f] mb-8'>
                Manifesto
              </div>

              <h2 className='font-serif text-[clamp(3.2rem,6vw,6rem)] leading-[0.95] tracking-[-0.04em] text-[#b89d8a]'>
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
              <h3 className='text-[clamp(2rem,3vw,3.2rem)] leading-[1.02] tracking-[-0.04em] mb-10'>
                A Curadoria Raiz nasce do desejo de aproximar pequenos
                produtores do ritmo da cidade.
              </h3>

              <div className='space-y-7 text-[#5f5148] leading-loose text-[17px]'>
                <p>
                  Cada edição reúne vinho vivo, pão artesanal e conservas
                  escolhidas manualmente. Não apenas pelo sabor, mas pela
                  história, origem e modo de produção.
                </p>

                <p>
                  Sem excesso. Sem pressa. Apenas alimento honesto,
                  logística consciente e encontros que fazem sentido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DROP */}
      <section className='pb-28 lg:pb-36 bg-[#efe9e1]'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <div className='mb-16'>
            <div className='text-[11px] tracking-[0.32em] uppercase text-[#b8a08f] mb-6'>
              Drop #01
            </div>

            <h2 className='font-serif text-[clamp(2.8rem,5vw,5rem)] leading-none tracking-[-0.04em] mb-6 text-[#b89d8a]'>
              O Trio da Vez
            </h2>

            <p className='max-w-2xl text-[#5f5148] text-[17px] leading-relaxed'>
              Uma combinação pensada para acompanhar o fim da tarde entre
              Santa Cecília, Higienópolis, Barra Funda e Campos Elíseos.
            </p>
          </div>

          {/* CARDS */}
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Apagão Rosé Natural',
                image: '/images/vinho.jpg',
                text: 'Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.',
              },
              {
                title: 'Sourdough Natural',
                image: '/images/pao.jpg',
                text: 'Fermentação lenta e forno artesanal. Assado poucas horas antes da entrega.',
              },
              {
                title: 'Antepasto de Berinjela',
                image: '/images/antepasto.jpg',
                text: 'Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className='group'
              >
                <div className='overflow-hidden rounded-[28px] mb-6 bg-[#ddd4ca]'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={900}
                    className='w-full h-[520px] object-cover group-hover:scale-[1.03] transition duration-700'
                  />
                </div>

                <h3 className='font-serif text-[2rem] leading-[0.95] tracking-[-0.04em] mb-4'>
                  {item.title}
                </h3>

                <p className='text-[#5f5148] leading-relaxed text-[15px]'>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCER */}
      <section className='relative h-[78vh] min-h-[620px] overflow-hidden'>
        <Image
          src='/images/produtor.jpg'
          alt='Produtor artesanal'
          fill
          className='object-cover'
        />

        <div className='absolute inset-0 bg-black/40' />

        <div className='relative z-10 h-full flex items-end'>
          <div className='max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24'>
            <div className='max-w-2xl'>
              <div className='text-[11px] tracking-[0.32em] uppercase text-[#d8c8bc] mb-6'>
                Pequenos produtores
              </div>

              <h2 className='font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.92] tracking-[-0.05em] text-[#f5f0ea] mb-8'>
                Curadoria feita
                <br />
                perto de quem
                <br />
                produz.
              </h2>

              <p className='text-[#e3d6cc] text-[18px] leading-relaxed max-w-lg'>
                Cada edição nasce da proximidade com produtores
                independentes, agricultura sustentável e processos
                artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className='py-28 lg:py-36 bg-[#efe9e1]'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <div className='mb-20'>
            <div className='text-[11px] tracking-[0.32em] uppercase text-[#b8a08f] mb-6'>
              Como funciona
            </div>

            <h2 className='font-serif text-[clamp(2.8rem,5vw,5rem)] tracking-[-0.04em] text-[#b89d8a]'>
              O Ritual do Drop
            </h2>
          </div>

          <div className='grid md:grid-cols-3 gap-12'>
            {[
              {
                number: '01',
                title: 'Reserva',
                text: 'Abrimos apenas 30 unidades por edição para garantir frescor, exclusividade e evitar desperdício.',
              },
              {
                number: '02',
                title: 'Preparação',
                text: 'Tudo é preparado sob ritmo artesanal e entregue no melhor momento.',
              },
              {
                number: '03',
                title: 'Entrega',
                text: 'Entregas entre sexta e sábado em Santa Cecília, Higienópolis, Barra Funda e Campos Elíseos.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className='border-t border-[#d8ccc1] pt-8'
              >
                <div className='text-[#b89d8a] text-xl mb-6'>
                  {item.number}
                </div>

                <h3 className='font-serif text-[2rem] tracking-[-0.03em] mb-5'>
                  {item.title}
                </h3>

                <p className='text-[#5f5148] leading-relaxed'>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id='reserva'
        className='pb-32 bg-[#efe9e1]'
      >
        <div className='max-w-5xl mx-auto px-6'>
          <div className='bg-[#140f0d] rounded-[42px] px-8 py-16 lg:px-20 lg:py-24 text-center text-[#f5f0ea] relative overflow-hidden'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(157,69,45,0.24),transparent_45%)]' />

            <div className='relative z-10'>
              <div className='text-[11px] tracking-[0.32em] uppercase text-[#bfa99a] mb-8'>
                Próxima edição
              </div>

              <h2 className='font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.92] tracking-[-0.05em] mb-8'>
                Reservas abertas
                <br />
                para o Drop #01
              </h2>

              <p className='max-w-2xl mx-auto text-[#d5c6bb] leading-relaxed text-[17px] mb-12'>
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
              </p>

              <a
                href='https://SEU-LINK-DE-PAGAMENTO.com'
                target='_blank'
                className='inline-flex items-center justify-center rounded-full bg-[#9d452d] hover:bg-[#b45439] transition-colors px-10 py-5 text-[12px] uppercase tracking-[0.24em] text-white'
              >
                Reservar meu drop
              </a>

              <div className='mt-8 text-[12px] tracking-[0.12em] uppercase text-[#8f7768]'>
                pagamento em até 2x disponível
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='border-t border-[#ddd1c6] bg-[#efe9e1]'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6'>
          <Image
            src='/branding/05_horizontal_claro.svg'
            alt='Curadoria Raiz'
            width={180}
            height={60}
            className='w-[140px] h-auto'
          />

          <div className='flex items-center gap-4 text-[10px] tracking-[0.32em] uppercase text-[#a38e80]'>
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
