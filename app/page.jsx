export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição atual da Curadoria Raiz.'

  const trio = [
    {
      image: '/images/apagao-packshot.webp',
      title: 'Apagão Rosé Natural',
      text: 'Rosé vivo, fresco e levemente frutado.',
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
  ]

  return (
    <main className="bg-[#F5F1EB] text-[#2C2724] overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#746861_0%,#5B514B_45%,#443A35_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,106,66,0.16),transparent_35%)]" />

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 lg:gap-20 items-center">
            {/* TEXTO */}
            <div className="max-w-[560px]">
              <p className="uppercase tracking-[0.28em] text-[10px] md:text-xs text-white/55 mb-6">
                Curadoria artesanal · São Paulo
              </p>

              <h1 className="font-serif text-[#F6F1EB] leading-[0.86] tracking-[-0.06em] mb-8">
                <span className="block text-[4.3rem] md:text-[7rem] font-semibold">
                  Curadoria
                </span>

                <span className="block text-[5.2rem] md:text-[8.4rem] -mt-4 md:-mt-7 font-semibold">
                  Raiz
                </span>
              </h1>

              <h2 className="text-white text-[2rem] md:text-[3.5rem] leading-[0.98] tracking-[-0.05em] font-light mb-8">
                Alimento com história,
                <br />
                entregue por quem escolhe.
              </h2>

              <p className="text-white/72 text-[15px] md:text-[18px] leading-[1.95] max-w-[520px] mb-10">
                Uma seleção mensal de vinho natural, pão de
                fermentação natural e produtos artesanais
                escolhidos para desacelerar o ritmo da cidade por
                algumas horas.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-[#D16A42] hover:bg-[#BC5B36] transition-all duration-500 hover:scale-[1.03] text-white px-8 py-4 uppercase tracking-[0.18em] text-[11px] shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
              >
                Reservar edição atual
              </a>
            </div>

            {/* IMAGEM */}
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)] blur-3xl scale-110" />

              <div className="relative rounded-[34px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.28)] border border-white/10">
                <img
                  src="/images/apagao-editorial.webp"
                  alt="Curadoria Raiz"
                  className="w-full h-[420px] md:h-[720px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <p className="uppercase tracking-[0.3em] text-[10px] text-[#A79C93] mb-8">
                Manifesto
              </p>

              <h2 className="font-serif text-[#D8CEC5] text-[4rem] md:text-[7rem] leading-[0.9] tracking-[-0.05em]">
                Menos
                <br />
                pressa,
                <br />
                mais
                <br />
                repertório.
              </h2>
            </div>

            <div className="max-w-[620px]">
              <p className="text-[2rem] md:text-[3rem] leading-[1.28] tracking-[-0.04em] font-light text-[#2D2926] mb-10">
                A Curadoria Raiz nasce do desejo de aproximar
                pequenos produtores do ritmo da cidade.
              </p>

              <div className="space-y-8 text-[#665E58] text-[17px] leading-[2]">
                <p>
                  Cada edição reúne vinho vivo, pão artesanal e
                  conservas escolhidas manualmente — não apenas
                  pelo sabor, mas pela história, origem e modo de
                  produção.
                </p>

                <p>
                  Sem excesso. Sem pressa. Apenas alimento
                  honesto, logística consciente e encontros que
                  fazem sentido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRIO */}
      <section className="pb-28 md:pb-36">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-20">
          <p className="uppercase tracking-[0.3em] text-[10px] text-[#A79C93] mb-6">
            Drop #01
          </p>

          <h2 className="font-serif text-[#D3C8BE] text-[3.5rem] md:text-[6rem] leading-[0.92] tracking-[-0.05em] mb-8">
            O Trio da Vez
          </h2>

          <p className="text-[#6A615B] text-[16px] md:text-[18px] leading-[1.9] max-w-[760px] mb-16">
            Uma combinação pensada para acompanhar o fim da tarde
            entre Santa Cecília, Higienópolis, Barra Funda, Vila
            Buarque e Campos Elíseos.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {trio.map((item, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="rounded-[30px] overflow-hidden bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:-translate-y-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[420px] object-cover"
                  />
                </div>

                <div className="pt-7 px-1">
                  <h3 className="font-serif text-[2.1rem] leading-[0.95] tracking-[-0.04em] text-[#2C2724] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[#746A64] text-[16px] leading-[1.8]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTORES */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/produtor-faccin.webp"
            alt="Produtor"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/10" />

        <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 lg:px-20 py-28 md:py-44">
          <div className="max-w-[620px]">
            <p className="uppercase tracking-[0.3em] text-[10px] text-white/60 mb-8">
              Pequenos produtores
            </p>

            <h2 className="font-serif text-white text-[4rem] md:text-[6rem] leading-[0.92] tracking-[-0.05em] mb-10">
              Curadoria feita
              <br />
              perto de quem
              <br />
              produz.
            </h2>

            <p className="text-white/80 text-[17px] md:text-[18px] leading-[2] max-w-[560px]">
              Cada edição nasce da proximidade com produtores
              independentes, agricultura sustentável e processos
              artesanais reais.
            </p>
          </div>
        </div>
      </section>

      {/* RITUAL */}
      <section className="py-28 md:py-36">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-20">
          <p className="uppercase tracking-[0.3em] text-[10px] text-[#A79C93] mb-6">
            Como funciona
          </p>

          <h2 className="font-serif text-[#D3C8BE] text-[3.5rem] md:text-[6rem] leading-[0.92] tracking-[-0.05em] mb-20">
            O Ritual do Drop
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Reserva',
                text: 'Abrimos poucos pedidos por edição para garantir frescor e evitar desperdício.',
              },
              {
                number: '02',
                title: 'Preparação',
                text: 'Tudo é preparado sob ritmo artesanal e entregue no melhor momento.',
              },
              {
                number: '03',
                title: 'Entrega',
                text: 'As entregas acontecem entre sexta e sábado em bairros centrais de São Paulo.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#EEE7DE] rounded-[28px] p-10 border border-[#E3DAD1]"
              >
                <span className="block text-[10px] tracking-[0.3em] text-[#B6AAA0] mb-8">
                  {item.number}
                </span>

                <h3 className="font-serif text-[2rem] text-[#2C2724] mb-6">
                  {item.title}
                </h3>

                <p className="text-[#6E655F] text-[16px] leading-[1.9]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 md:pb-36">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-20">
          <div className="relative overflow-hidden rounded-[40px] bg-[linear-gradient(135deg,#1C1715_0%,#2A211E_50%,#4A2C22_100%)] px-8 md:px-20 py-20 md:py-28 text-center shadow-[0_30px_120px_rgba(0,0,0,0.14)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,106,66,0.26),transparent_35%)]" />

            <div className="relative">
              <p className="uppercase tracking-[0.3em] text-[10px] text-white/40 mb-8">
                Próxima edição
              </p>

              <h2 className="font-serif text-white text-[3rem] md:text-[5.4rem] leading-[0.95] tracking-[-0.05em] mb-10">
                Reservas abertas
                <br />
                para o Drop #01
              </h2>

              <p className="text-white/70 text-[17px] leading-[2] max-w-[760px] mx-auto mb-12">
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque, Barra Funda e Campos
                Elíseos.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-[#D16A42] hover:bg-[#BC5B36] transition-all duration-500 hover:scale-[1.03] text-white px-10 py-5 uppercase tracking-[0.2em] text-[11px] shadow-[0_12px_30px_rgba(0,0,0,0.22)]"
              >
                Reservar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E5DDD5] py-8">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4 text-[#9A9088] text-[12px]">
          <span>Curadoria Raiz · São Paulo</span>
          <span>Curadoria por André Tomazela</span>
        </div>
      </footer>
    </main>
  )
}
