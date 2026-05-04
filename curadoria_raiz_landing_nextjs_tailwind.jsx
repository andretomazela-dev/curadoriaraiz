export default function CuradoriaRaizLanding() {
  const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20reservar%20a%20edi%C3%A7%C3%A3o%20Drop%20%2301%20%E2%80%94%20Apag%C3%A3o%20da%20Curadoria%20Raiz.";

  return (
    <main className="bg-[#F7F4EE] text-[#1E1E1B] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center border-b border-black/5">
        <div className="absolute inset-0">
          <img
            src="/images/apagao-editorial.webp"
            alt="Vinho Apagão"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32 w-full">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.25em] text-sm text-white/70 mb-6">
              Curadoria artesanal · São Paulo
            </p>

            <h1 className="text-5xl md:text-7xl leading-[0.95] font-serif text-white mb-8">
              Curadoria Raiz
            </h1>

            <p className="text-2xl md:text-3xl leading-tight text-white mb-8 font-light">
              Alimento com história, entregue por quem escolhe.
            </p>

            <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl mb-10">
              Uma seleção mensal de vinho natural, pão de fermentação natural e produtos artesanais escolhidos para desacelerar o ritmo da cidade por algumas horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href={whatsappLink}
                target="_blank"
                className="bg-[#C65A38] hover:bg-[#AF4B2D] transition-all duration-300 text-white px-8 py-4 rounded-full text-sm tracking-wide uppercase"
              >
                Reservar edição atual
              </a>

              <span className="text-white/70 text-sm tracking-wide uppercase">
                Primeira edição limitada a 12 kits
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-[#6D6A63] mb-6">
              Manifesto
            </p>

            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-10">
              Menos pressa,<br />mais repertório.
            </h2>

            <div className="space-y-6 text-[#494741] leading-relaxed text-lg">
              <p>
                A Curadoria Raiz nasce da vontade de aproximar o pequeno produtor do ritmo da cidade.
              </p>

              <p>
                Selecionamos cada edição pensando no tempo de preparo, na origem dos ingredientes e na experiência de compartilhar uma boa mesa.
              </p>

              <p>
                Vinhos naturais, fermentação lenta e produção artesanal fazem parte da nossa forma de olhar para o alimento.
              </p>

              <div className="pt-4 space-y-2 text-[#1E1E1B] font-medium">
                <p>Sem excesso.</p>
                <p>Sem escala artificial.</p>
                <p>Sem pressa.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/produtor-faccin.webp"
              alt="Produtor Faccin"
              className="w-full h-[650px] object-cover rounded-[32px]"
            />
          </div>
        </div>
      </section>

      {/* DROP */}
      <section className="py-28 md:py-36 bg-[#EFE9DD]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-20">
            <p className="uppercase tracking-[0.25em] text-xs text-[#6D6A63] mb-6">
              O Trio da Vez
            </p>

            <h2 className="text-4xl md:text-6xl font-serif mb-8">
              Drop #01 — Apagão
            </h2>

            <p className="text-lg text-[#4E4B45] leading-relaxed">
              Uma edição pensada para abrir o fim de semana com calma, boa comida e uma pausa necessária no ritmo da cidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vinho */}
            <article className="group bg-[#F7F4EE] rounded-[28px] overflow-hidden hover:-translate-y-1 transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src="/images/apagao-packshot.webp"
                  alt="Apagão Rosé Natural"
                  className="w-full h-[420px] object-cover group-hover:scale-[1.02] transition-all duration-700"
                />
              </div>

              <div className="p-8">
                <span className="text-sm uppercase tracking-[0.2em] text-[#8C4B39]">
                  Vinho Natural
                </span>

                <h3 className="font-serif text-3xl mt-4 mb-5 leading-tight">
                  Apagão Rosé Natural — Faccin
                </h3>

                <p className="text-[#4F4B45] leading-relaxed">
                  Um rosé natural fresco e expressivo, produzido em pequena escala na Serra Gaúcha.
                </p>
              </div>
            </article>

            {/* Pão */}
            <article className="group bg-[#F7F4EE] rounded-[28px] overflow-hidden hover:-translate-y-1 transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src="/images/pao-sourdough.webp"
                  alt="Pão sourdough"
                  className="w-full h-[420px] object-cover group-hover:scale-[1.02] transition-all duration-700"
                />
              </div>

              <div className="p-8">
                <span className="text-sm uppercase tracking-[0.2em] text-[#8C4B39]">
                  Fermentação Natural
                </span>

                <h3 className="font-serif text-3xl mt-4 mb-5 leading-tight">
                  Sourdough artesanal
                </h3>

                <p className="text-[#4F4B45] leading-relaxed">
                  Casca crocante, miolo macio e fermentação lenta. Assado poucas horas antes da entrega.
                </p>
              </div>
            </article>

            {/* Antepasto */}
            <article className="group bg-[#F7F4EE] rounded-[28px] overflow-hidden hover:-translate-y-1 transition-all duration-500">
              <div className="overflow-hidden bg-[#ECE7DE] flex items-center justify-center p-10">
                <img
                  src="/images/antepasto.webp"
                  alt="Antepasto de berinjela"
                  className="w-full max-w-[280px] h-auto object-contain group-hover:scale-[1.02] transition-all duration-700"
                />
              </div>

              <div className="p-8">
                <span className="text-sm uppercase tracking-[0.2em] text-[#8C4B39]">
                  Produção Artesanal
                </span>

                <h3 className="font-serif text-3xl mt-4 mb-5 leading-tight">
                  Antepasto de berinjela
                </h3>

                <p className="text-[#4F4B45] leading-relaxed">
                  Receita artesanal preparada com ingredientes frescos e sabor intenso.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* RITUAL */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-20">
            <p className="uppercase tracking-[0.25em] text-xs text-[#6D6A63] mb-6">
              O Ritual do Drop
            </p>

            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Uma operação pequena.<br />Feita de propósito.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                number: "01",
                title: "Reserva",
                text:
                  "Abrimos uma janela curta para pedidos. As edições são limitadas e montadas sob demanda.",
              },
              {
                number: "02",
                title: "Preparação",
                text:
                  "Coordenamos o preparo e a seleção de cada item diretamente com os produtores parceiros.",
              },
              {
                number: "03",
                title: "Entrega",
                text:
                  "Entre sexta e sábado, os kits seguem de bike pelas ruas do centro de São Paulo.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-t border-black/10 pt-8"
              >
                <span className="text-[#8C4B39] text-sm tracking-[0.2em] uppercase">
                  {item.number}
                </span>

                <h3 className="text-3xl font-serif mt-4 mb-5">
                  {item.title}
                </h3>

                <p className="text-[#4F4B45] leading-relaxed text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32 bg-[#1F2B25] text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="uppercase tracking-[0.25em] text-xs text-white/50 mb-6">
            Próxima edição
          </p>

          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
            Drop #01 — Apagão
          </h2>

          <div className="space-y-2 text-lg text-white/80 mb-10">
            <p>🍷 Rosé natural Faccin</p>
            <p>🍞 Pão sourdough artesanal</p>
            <p>🍆 Antepasto artesanal de berinjela</p>
          </div>

          <p className="text-5xl md:text-6xl font-serif mb-8">
            R$ 199
          </p>

          <p className="max-w-2xl mx-auto text-white/70 leading-relaxed mb-12">
            Entrega incluída para Santa Cecília, Vila Buarque, Higienópolis, Barra Funda e Campos Elíseos.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            className="inline-flex bg-[#C65A38] hover:bg-[#AF4B2D] transition-all duration-300 text-white px-10 py-5 rounded-full text-sm uppercase tracking-[0.2em]"
          >
            Reservar pelo WhatsApp
          </a>

          <p className="mt-8 text-white/50 text-sm uppercase tracking-wide">
            Pedidos abertos até quarta-feira ou enquanto durarem os kits desta edição.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 border-t border-black/5 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-3">
              Curadoria Raiz
            </h3>

            <p className="text-[#5C5953] leading-relaxed">
              Curadoria por André Tomazela.<br />
              São Paulo — entregas locais e produção em pequena escala.
            </p>
          </div>

          <div className="flex gap-6 text-sm uppercase tracking-wide text-[#5C5953]">
            <a href="#" className="hover:text-black transition-colors">
              Instagram
            </a>
            <a href={whatsappLink} className="hover:text-black transition-colors">
              WhatsApp
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Dúvidas
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
