
export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição Drop #01 — Apagão da Curadoria Raiz.'

  return (
    <main className='bg-[#F7F4EE] text-[#1E1E1B] overflow-hidden'>
      <section className='relative min-h-screen flex items-center border-b border-black/5'>
        <div className='absolute inset-0'>
          <img
            src='/images/apagao-editorial.webp'
            alt='Vinho Apagão'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/35' />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32 w-full'>
          <div className='max-w-2xl'>
            <p className='uppercase tracking-[0.25em] text-sm text-white/70 mb-6'>
              Curadoria artesanal · São Paulo
            </p>

            <h1 className='text-5xl md:text-7xl leading-[0.95] font-serif text-white mb-8'>
              Curadoria Raiz
            </h1>

            <p className='text-2xl md:text-3xl leading-tight text-white mb-8 font-light'>
              Alimento com história, entregue por quem escolhe.
            </p>

            <p className='text-base md:text-lg text-white/85 leading-relaxed max-w-xl mb-10'>
              Uma seleção mensal de vinho natural, pão de fermentação natural e produtos artesanais escolhidos para desacelerar o ritmo da cidade por algumas horas.
            </p>

            <a
              href={whatsappLink}
              target='_blank'
              className='inline-flex bg-[#C65A38] hover:bg-[#AF4B2D] transition-all duration-300 text-white px-8 py-4 rounded-full text-sm tracking-wide uppercase'
            >
              Reservar edição atual
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
