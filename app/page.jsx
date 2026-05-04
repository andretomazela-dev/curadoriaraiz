export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição atual da Curadoria Raiz.'

  return (
    <main className="bg-[#F5F1EB] text-[#2A2623] overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,90,56,0.18),transparent_30%),linear-gradient(135deg,#6E625D_0%,#534842_45%,#413733_100%)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
            {/* TEXTO */}
            <div className="relative z-10 max-w-xl">
              <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-white/60 mb-8">
                Curadoria artesanal · São Paulo
              </p>

              <div className="leading-[0.9] mb-8">
                <h1 className="font-serif text-[#F8F3ED] text-[68px] md:text-[120px] tracking-[-0.06em]">
                  Curadoria
                </h1>

                <h1 className="font-serif text-[#F8F3ED] text-[78px] md:text-[138px] tracking-[-0.08em] -mt-3 md:-mt-5">
                  Raiz
                </h1>
              </div>

              <h2 className="text-[34px] md:text-[52px] leading-[1.02] font-light text-[#F6F1EB] max-w-lg mb-8 tracking-[-0.04em]">
                Alimento com história, entregue por quem escolhe.
              </h2>

              <p className="text-sm md:text-lg text-white/72 leading-[1.9] max-w-md mb-12 font-light">
                Uma seleção mensal de vinho natural, pão de fermentação natural e produtos artesanais escolhidos para desacelerar o ritmo da cidade por algumas horas.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center justify-center bg-[#C96A45] hover:bg-[#B75B38] text-white text-[11px] md:text-xs uppercase tracking-[0.16em] px-7 md:px-9 py-4 rounded-full transition-all duration-500 hover:scale-[1.03] shadow-[0_10px_40px_rgba(201,106,69,0.25)]"
              >
                Reservar edição atual
              </a>
            </div>

            {/* IMAGEM */}
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] blur-3xl scale-110" />

              <div className="relative rounded-[34px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                <img
                  src="/images/apagao-editorial.webp"
                  alt="Vinho Apagão"
                  className="w-full h-[480px] md:h-[720px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* selo editorial */}
              <div className="hidden md:flex absolute -bottom-8 -left-8 backdrop-blur-md bg-white/8 border border-white/10 rounded-3xl px-6 py-5 items-center gap-5 shadow-2xl">
                <div>
                  <p className="text-white/55 uppercase text-[10px] tracking-[0.25em] mb-2">
                    Drop #01
                  </p>

                  <p className="text-[#F5EFE9] font-serif text-2xl leading-none">
                    Apagão
                  </p>
                </div>

                <div className="w-px h-12 bg-white/10" />

                <div className="text-white/65 text-xs leading-relaxed">
                  Rosé natural <br />
                  Família Faccin
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <p className="uppercase tracking-[0.28em] text-[10px] text-[#A69B91] mb-8">
                Manifesto
              </p>

              <h2 className="font-serif text-[58px] md:text-[108px] leading-[0.92] tracking-[-0.06em] text-[#D9CEC3]">
                Menos pressa, mais repertório.
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-[30px] md:text-[42px] leading-[1.3] tracking-[-0.04em] text-[#2D2926] mb-10 font-light">
                A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade.
              </p>

              <div className="space-y-8 text-[#615953] leading-[2] text-base md:text-lg">
                <p>
                  Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente — não apenas pelo sabor, mas pela história, origem e modo de produção.
                </p>

                <p>
                  Sem excesso. Sem pressa. Apenas alimento honesto, logística consciente e encontros que fazem sentido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRIO */}
      <section className="pb-28 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <p className="uppercase tracking-[0.28em] text-[10px] text-[#A69B91] mb-6">
              Drop #01
            </p>

            <h2 className="font-serif text-[54px] md:text-[96px] leading-[0.95] tracking-[-0.06em] text-[#D1C5B9] mb-6">
              O Trio da Vez
            </h2>

            <p className="text-[#6A625D] text-base md:text-lg leading-[1.9] max-w-2xl">
              Uma combinação pensada para acompanhar o fim da tarde entre Santa Cecília, Higienópolis, Barra Funda, Vila Buarque e Campos Elíseos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                image: '/images/apagao-packshot.webp',
                title: 'Apagão Rosé Natural',
                text: 'Rosé vivo e levemente frutado.',
              },
              {
                image: '/images/pao-sourdough.webp',
                title: 'Sourdough Natural',
                text: 'Fermentação lenta e miolo vivo.',
              },
              {
                image: '/images/antepasto.webp',
                title: 'Antepasto de Berinjela',
                text: 'Receita artesanal em pequeno lote.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="overflow-hidden rounded-[30px] bg-[#F8F5F0] border border-[#ECE5DC] shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all duration-700 group-hover:-translate-y-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[4/4.5] object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="pt-7 px-1">
                  <h3 className="font-serif text-[42px] leading-[0.95] tracking-[-0.05em] text-[#2B2725] mb-5">
                    {item.title}
                  </h3>

                  <p className="text-[#6E655F] leading-[1.8] text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOR */}
      <section className="relative overflow-hidden">
        <img
          src="/images/produtor-faccin.webp"
          alt="Produtor"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.18)_60%,rgba(0,0,0,0.05)_100%)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-44">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.28em] text-[10px] text-white/70 mb-8">
              Pequenos produtores
            </p>

            <h2 className="font-serif text-white text-[58px] md:text-[110px] leading-[0.92] tracking-[-0.06em] mb-10">
              Curadoria feita perto de quem produz.
            </h2>

            <p className="text-white/78 text-base md:text-xl leading-[1.9] max-w-xl">
              Cada edição nasce da proximidade com produtores independentes, agricultura sustentável e processos artesanais reais.
            </p>
          </div>
        </div>
      </section>

      {/* RITUAL */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <p className="uppercase tracking-[0.28em] text-[10px] text-[#A69B91] mb-6">
              Como funciona
            </p>

            <h2 className="font-serif text-[52px] md:text-[92px] leading-[0.95] tracking-[-0.06em] text-[#D1C5B9]">
              O Ritual do Drop
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              ['01', 'Reserva', 'Abrimos poucos pedidos por edição para garantir frescor e evitar desperdício.'],
              ['02', 'Preparação', 'Tudo é preparado sob ritmo artesanal e entregue no melhor momento.'],
              ['03', 'Entrega', 'As entregas acontecem entre sexta e sábado em bairros centrais de São Paulo.'],
            ].map(([number, title, text], index) => (
              <div
                key={index}
                className="bg-[#EFE7DC] rounded-[28px] p-8 md:p-10 border border-[#E4D8CB]"
              >
                <p className="text-[#A39385] text-xs tracking-[0.24em] mb-8">
                  {number}
                </p>

                <h3 className="font-serif text-[38px] leading-none text-[#2B2725] mb-6">
                  {title}
                </h3>

                <p className="text-[#645B54] leading-[1.9] text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="relative overflow-hidden rounded-[42px] bg-[linear-gradient(135deg,#241B18_0%,#352722_45%,#553225_100%)] px-8 md:px-16 py-20 md:py-28 text-center shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#C96A45]/20 blur-3xl rounded-full" />

            <div className="relative z-10">
              <p className="uppercase tracking-[0.28em] text-[10px] text-white/45 mb-8">
                Próxima edição
              </p>

              <h2 className="font-serif text-white text-[54px] md:text-[92px] leading-[0.95] tracking-[-0.06em] mb-8">
                Reservas abertas para o Drop #01
              </h2>

              <p className="text-white/72 max-w-2xl mx-auto leading-[1.9] text-base md:text-lg mb-12">
                Entregas entre sexta e sábado em Santa Cecília, Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center justify-center bg-[#C96A45] hover:bg-[#B75B38] text-white text-[11px] md:text-xs uppercase tracking-[0.16em] px-8 md:px-10 py-4 rounded-full transition-all duration-500 hover:scale-[1.03] shadow-[0_10px_40px_rgba(201,106,69,0.25)]"
              >
                Reservar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E6DED3]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-4 text-[11px] tracking-[0.14em] uppercase text-[#A59B92]">
          <p>Curadoria Raiz · São Paulo</p>
          <p>Curadoria por André Tomazela</p>
        </div>
      </footer>
    </main>
  )
}
