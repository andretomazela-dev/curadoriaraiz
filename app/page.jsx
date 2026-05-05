import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F4EEE6] text-[#3D1F14] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[96vh] flex items-center bg-[radial-gradient(circle_at_top_right,_rgba(140,59,48,0.25),_transparent_35%),linear-gradient(135deg,#5A4942_0%,#2B1D19_55%,#120E0B_100%)]">
        <div className="absolute inset-0 opacity-[0.08] bg-[url('/noise.png')]" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-14 py-20">
          <div className="mb-12">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#F4EEE6]/70">
              Curadoria artesanal · São Paulo
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            {/* LEFT */}
            <div className="max-w-[620px]">
              <div className="mb-12">
                <Image
                  src="/branding/02_principal_escuro.png"
                  alt="Curadoria Raiz"
                  width={760}
                  height={380}
                  priority
                  className="w-[520px] md:w-[640px] h-auto object-contain -ml-3"
                />
              </div>

              <h1 className="font-serif text-[#F4EEE6] text-[54px] md:text-[82px] leading-[0.92] tracking-[-0.04em] max-w-[700px]">
                Comida, vinho
                <br />
                e pequenos produtores
                <br />
                em ritmo humano.
              </h1>

              <p className="mt-10 text-[#D8C9BC] text-[15px] leading-[1.9] max-w-[520px]">
                Uma seleção mensal de vinho natural, pão de fermentação
                natural e produtos artesanais escolhidos para desacelerar a
                cidade por algumas horas.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="#cta"
                  className="px-8 py-4 rounded-full bg-[#8C3B30] hover:bg-[#6B2E24] transition-all duration-300 text-[#F4EEE6] text-[11px] uppercase tracking-[0.24em]"
                >
                  Reservar edição atual
                </a>

                <a
                  href="#manifesto"
                  className="px-8 py-4 rounded-full border border-[#F4EEE6]/20 text-[#F4EEE6]/90 hover:bg-[#F4EEE6]/10 transition-all duration-300 text-[11px] uppercase tracking-[0.24em]"
                >
                  Conheça o manifesto
                </a>
              </div>

              <div className="mt-8 text-[11px] tracking-[0.18em] uppercase text-[#D8C9BC]/50">
                Produção limitada · 30 unidades por edição
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#8C3B30]/20 blur-[120px] rounded-full scale-125" />

              <div className="relative rounded-[36px] overflow-hidden border border-[#F4EEE6]/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src="/images/apagao-editorial.webp"
                  alt="Curadoria Raiz"
                  width={900}
                  height={1100}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        id="manifesto"
        className="py-28 md:py-40 bg-[#F4EEE6]"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="uppercase tracking-[0.35em] text-[10px] text-[#BCA898]">
                Manifesto
              </span>

              <h2 className="mt-8 font-serif text-[72px] md:text-[110px] leading-[0.9] tracking-[-0.06em] text-[#D9CCC2]">
                Menos
                <br />
                pressa,
                <br />
                mais
                <br />
                repertório.
              </h2>
            </div>

            <div className="pt-8">
              <h3 className="font-serif text-[42px] md:text-[56px] leading-[1] tracking-[-0.04em] max-w-[650px]">
                A Curadoria Raiz nasce do desejo de aproximar pequenos
                produtores do ritmo da cidade.
              </h3>

              <div className="mt-12 space-y-8 text-[#6B4E3D] text-[17px] leading-[2] max-w-[620px]">
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

      {/* CURADORIA */}
      <section className="pb-32 bg-[#F4EEE6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="mb-16">
            <span className="uppercase tracking-[0.35em] text-[10px] text-[#BCA898]">
              Drop #01
            </span>

            <h2 className="mt-6 font-serif text-[56px] md:text-[86px] leading-[0.95] tracking-[-0.05em] text-[#CDBEB3]">
              O Trio da Vez
            </h2>

            <p className="mt-8 text-[#6B4E3D] text-[17px] leading-[1.9] max-w-[680px]">
              Uma combinação pensada para acompanhar o fim da tarde entre
              Santa Cecília, Higienópolis, Barra Funda e Vila Buarque.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <article>
              <div className="rounded-[28px] overflow-hidden mb-6 bg-[#E9DED4]">
                <Image
                  src="/images/produtor-faccin.webp"
                  alt="Apagão Rosé Natural"
                  width={700}
                  height={900}
                  className="w-full h-[460px] object-cover"
                />
              </div>

              <h3 className="font-serif text-[38px] leading-[1] tracking-[-0.04em]">
                Apagão Rosé Natural
              </h3>

              <p className="mt-4 text-[#6B4E3D] leading-[1.9]">
                Rosé de intervenção mínima da Família Faccin.
                Fresco, vivo e levemente frutado.
              </p>
            </article>

            {/* CARD 2 */}
            <article>
              <div className="rounded-[28px] overflow-hidden mb-6 bg-[#E9DED4]">
                <Image
                  src="/images/pao-sourdough.webp"
                  alt="Sourdough Natural"
                  width={700}
                  height={900}
                  className="w-full h-[460px] object-cover"
                />
              </div>

              <h3 className="font-serif text-[38px] leading-[1] tracking-[-0.04em]">
                Sourdough Natural
              </h3>

              <p className="mt-4 text-[#6B4E3D] leading-[1.9]">
                Fermentação lenta e forno artesanal. Assado poucas
                horas antes da entrega.
              </p>
            </article>

            {/* CARD 3 */}
            <article>
              <div className="rounded-[28px] overflow-hidden mb-6 bg-[#E9DED4]">
                <Image
                  src="/images/antepasto.webp"
                  alt="Antepasto de Berinjela"
                  width={700}
                  height={900}
                  className="w-full h-[460px] object-cover"
                />
              </div>

              <h3 className="font-serif text-[38px] leading-[1] tracking-[-0.04em]">
                Antepasto de Berinjela
              </h3>

              <p className="mt-4 text-[#6B4E3D] leading-[1.9]">
                Receita artesanal preparada em pequenos lotes, com
                ingredientes frescos e sabor intenso.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRODUTOR */}
      <section className="relative h-[760px] overflow-hidden">
        <Image
          src="/images/apagao-packshot.webp"
          alt="Produtores"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14 h-full flex items-center">
          <div className="max-w-[720px]">
            <span className="uppercase tracking-[0.35em] text-[10px] text-[#F4EEE6]/60">
              Pequenos produtores
            </span>

            <h2 className="mt-8 font-serif text-[#F4EEE6] text-[68px] md:text-[100px] leading-[0.9] tracking-[-0.06em]">
              Curadoria feita
              <br />
              perto de quem
              <br />
              produz.
            </h2>

            <p className="mt-10 text-[#F4EEE6]/80 text-[18px] leading-[2] max-w-[580px]">
              Cada edição nasce da proximidade com produtores
              independentes, agricultura sustentável e processos
              artesanais reais.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="cta"
        className="py-32 bg-[#F4EEE6]"
      >
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px] bg-[linear-gradient(135deg,#1A1412_0%,#2B1712_45%,#6B2E24_100%)] px-8 md:px-20 py-24 text-center shadow-[0_30px_100px_rgba(0,0,0,0.18)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(140,59,48,0.45),_transparent_35%)]" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#8C3B30] text-[#F4EEE6] flex items-center justify-center mx-auto text-lg font-medium">
                R
              </div>

              <span className="block mt-8 uppercase tracking-[0.35em] text-[10px] text-[#F4EEE6]/50">
                Próxima edição
              </span>

              <h2 className="mt-8 font-serif text-[#F4EEE6] text-[56px] md:text-[82px] leading-[0.92] tracking-[-0.06em]">
                Reservas abertas
                <br />
                para o Drop #01
              </h2>

              <p className="mt-10 text-[#F4EEE6]/70 leading-[2] max-w-[620px] mx-auto">
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque e Barra Funda.
              </p>

              <div className="mt-12">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#D86A43] hover:bg-[#C35A36] transition-all duration-300 text-[#F4EEE6] uppercase tracking-[0.24em] text-[11px]"
                >
                  Reservar meu drop
                </a>
              </div>

              <div className="mt-8 text-[11px] uppercase tracking-[0.18em] text-[#F4EEE6]/40">
                Pagamento em até 3x · Disponível via link
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E5D8CD] bg-[#F4EEE6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <Image
            src="/branding/05_horizontal_claro.png"
            alt="Curadoria Raiz"
            width={180}
            height={60}
            className="h-auto w-[130px] opacity-90"
          />

          <div className="text-[10px] uppercase tracking-[0.28em] text-[#BCA898] text-center">
            Curadoria artesanal · São Paulo
          </div>

          <div className="text-[10px] uppercase tracking-[0.28em] text-[#BCA898]">
            © 2026 Curadoria Raiz
          </div>
        </div>
      </footer>
    </main>
  );
}
