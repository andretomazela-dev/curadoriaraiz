# app/page.jsx — Hero refinado com novo branding

```jsx
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#6A4B3D] text-[#F3E6DA] overflow-hidden'>
      {/* HEADER */}
      <header className='relative z-20 px-6 md:px-12 py-6'>
        <div className='flex items-center justify-between'>
          <p className='text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#E8D7CC] opacity-90'>
            Curadoria artesanal · São Paulo
          </p>

          <button className='border border-[#E8D7CC]/30 hover:border-[#E8D7CC]/60 transition-all px-5 py-2 rounded-full text-[11px] md:text-xs tracking-[0.12em] uppercase text-[#F3E6DA]'>
            Entrar para a curadoria
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className='relative min-h-screen flex items-center px-6 md:px-12 pb-20 pt-8'>
        {/* GLOW */}
        <div className='absolute right-[-120px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#A13F2D]/20 blur-[140px] rounded-full opacity-80'></div>

        <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-[1500px] mx-auto'>
          {/* LEFT */}
          <div className='max-w-[620px]'>
            {/* LOGO */}
            <div className='mb-10'>
              <Image
                src='/branding/02_principal_escuro.svg'
                alt='Curadoria Raiz'
                width={900}
                height={400}
                priority
                className='w-[320px] md:w-[460px] h-auto'
              />
            </div>

            {/* HEADLINE */}
            <h1 className='text-[56px] md:text-[88px] leading-[0.92] tracking-[-0.05em] font-light mb-8 text-[#F4E8DF]'>
              Uma seleção artesanal para desacelerar a cidade.
            </h1>

            {/* SUBTITLE */}
            <p className='text-[#D8C1B4] text-lg md:text-xl leading-relaxed max-w-[560px] mb-12 font-light'>
              Vinhos naturais, pão de fermentação natural e pequenos produtores escolhidos para transformar uma noite comum em ritual.
            </p>

            {/* CTA */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <a
                href='#'
                className='bg-[#F3E6DA] hover:bg-[#fff7f1] text-[#7E3428] px-8 py-4 rounded-full uppercase tracking-[0.18em] text-xs font-medium transition-all inline-flex items-center justify-center'
              >
                Garantir minha caixa
              </a>

              <a
                href='#selecoes'
                className='border border-[#F3E6DA]/25 hover:border-[#F3E6DA]/50 text-[#F3E6DA] px-8 py-4 rounded-full uppercase tracking-[0.18em] text-xs font-medium transition-all inline-flex items-center justify-center'
              >
                Conhecer a seleção
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className='relative flex items-center justify-center lg:justify-end'>
            {/* IMAGE GLOW */}
            <div className='absolute w-[520px] h-[520px] bg-[#D97A55]/20 blur-[120px] rounded-full'></div>

            {/* MAIN IMAGE */}
            <div className='relative'>
              <Image
                src='/apagao-editorial.webp.webp'
                alt='Vinho natural Apagão'
                width={900}
                height={1100}
                priority
                className='relative z-10 w-full max-w-[720px] h-auto object-cover rounded-[32px] shadow-2xl'
              />

              {/* FLOATING CARD */}
              <div className='absolute -bottom-10 -left-8 backdrop-blur-md bg-[#4B3328]/70 border border-white/10 rounded-3xl p-5 max-w-[240px] hidden md:block'>
                <p className='text-[11px] uppercase tracking-[0.3em] text-[#D8C1B4] mb-3'>
                  Destaque do mês
                </p>

                <p className='text-xl text-[#F4E8DF] leading-tight mb-2'>
                  Apagão Rosé Natural
                </p>

                <p className='text-sm text-[#D8C1B4] leading-relaxed'>
                  Vinificação natural, cultivo sustentável e produção artesanal da Serra Gaúcha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
```

# Assets utilizados

```txt
/branding/02_principal_escuro.svg
/apagao-editorial.webp.webp
```

# Resultado esperado

* Hero mais editorial e sofisticado
* Integração total com o novo branding
* Atmosfera boutique premium
* Menos “template” e mais direção de arte
* Melhor contraste visual
* Fotografia integrada ao ambiente
* CTAs mais elegantes
