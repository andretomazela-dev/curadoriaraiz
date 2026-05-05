import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F5F1EB] text-[#3E241D] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(126,44,23,0.20),_transparent_28%),linear-gradient(135deg,#3A1C16_0%,#1A0E0B_42%,#0E0908_100%)] text-[#F7F1EB]">
        {/* GLOW */}
        <div className="absolute top-[-180px] right-[-120px] w-[720px] h-[720px] rounded-full bg-[#8B3A28]/20 blur-[140px]" />

        {/* NOISE */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03]" />

        <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 pt-10 pb-28">
          {/* TOP */}
          <div className="mb-12">
            <span className="text-[10px] md:text-[11px] tracking-[0.42em] uppercase text-[#E9DCD2]/75">
              Curadoria artesanal · São Paulo
            </span>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center min-h-[82vh]">
            {/* LEFT */}
            <div className="flex flex-col justify-center">
              {/* LOGO */}
              <div className="mb-10">
                <Image
                  src="/branding/transparentes/02_principal_escuro.svg"
                  alt="Curadoria Raiz"
                  width={1200}
                  height={680}
                  priority
                  className="
                    w-[640px]
                    md:w-[820px]
                    lg:w-[980px]
                    h-auto
                    object-contain
                    opacity-[0.92]
                    drop-shadow-[0_0_50px_rgba(145,74,58,0.12)]
                    -ml-10
                  "
                />
              </div>

              {/* TITLE */}
              <h1 className="font-serif text-[4.4rem] md:text-[5.8rem] lg:text-[6.4rem] leading-[0.88] tracking-[-0.07em] max-w-[540px] text-[#F8F2ED]">
                Comida,
                <br />
                vinho e
                <br />
                pequenos
                <br />
                produtores
                <br />
                em ritmo
                <br />
                humano.
              </h1>

              {/* TEXT */}
              <p className="mt-8 text-[14px] md:text-[15px] leading-[2.1] text-[#E7D8CD]/72 max-w-[500px]">
                Uma seleção mensal de vinho natural, pão de fermentação lenta e
                produtos artesanais escolhidos para desacelerar a cidade por
                algumas horas.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-[#C65E3D] hover:bg-[#D86D4A] transition-all duration-500 text-[#FFF8F3] uppercase tracking-[0.24em] text-[11px] px-8 py-4 rounded-full shadow-[0_12px_40px_rgba(198,94,61,0.30)]">
                  Reservar edição atual
                </button>

                <button className="border border-[#CBB4A4]/30 hover:border-[#D8C4B5] hover:bg-white/5 transition-all duration-500 text-[#F3E7DE] uppercase tracking-[0.22em] text-[11px] px-8 py-4 rounded-full">
                  Conheça o manifesto
                </button>
              </div>

              {/* SMALL */}
              <div className="mt-10 text-[10px] uppercase tracking-[0.34em] text-[#D5BFB0]/50">
                Produção limitada · 30 unidades por edição
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end">
              {/* GLOW */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[460px] h-[460px] rounded-full bg-[#A6462A]/18 blur-[120px]" />
              </div>

              {/* CARD */}
              <div className="relative rounded-[36px] border border-white/10 bg-[#E8DED4]/80 backdrop-blur-md shadow-[0_40px_120px_rgba(0,0,0,0.45)] p-5">
                <Image
                  src="/images/apagao-packshot.webp"
                  alt="Apagão Rosé Natural"
                  width={760}
                  height={920}
                  className="w-full max-w-[560px] rounded-[28px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FADE */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#F5F1EB]" />
      </section>

      {/* MANIFESTO */}
      <section className="py-32 md:py-44">
        <div className="max-w-[1450px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-28 items-start">
            {/* LEFT */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.38em] text-[#C8B7AB]">
                Manifesto
              </span>

              <h2 className="mt-6 font-serif text-[4.8rem] md:text-[7.2rem] leading-[0.86] tracking-[-0.08em] text-[#D7CAC0]">
                Menos
                <br />
                pressa,
                <br />
                mais
                <br />
                repertório.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="max-w-[520px]">
              <h3 className="font-serif text-[3.4rem] md:text-[4.6rem] leading-[1.08] tracking-[-0.06em] text-[#4A2A22]">
                A Curadoria Raiz nasce do desejo de aproximar pequenos
                produtores do ritmo da cidade.
              </h3>

              <div className="mt-10 space-y-8 text-[15px] leading-[2.15] text-[#6F5A50]">
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
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="pb-36">
        <div className="max-w-[1450px] mx-auto px-6 md:px-10 lg:px-16">
          {/* HEADER */}
          <div className="mb-20">
            <span className="text-[10px] uppercase tracking-[0.38em] text-[#C8B7AB]">
              Drop #01
            </span>

            <h2 className="mt-4 font-serif text-[4rem] md:text-[5.6rem] tracking-[-0.06em] leading-[0.92] text-[#D1C2B7]">
              O Trio da Vez
            </h2>

            <p className="mt-6 text-[15px] leading-[2] text-[#746257] max-w-[620px]">
              Uma combinação pensada para acompanhar o fim da tarde entre Santa
              Cecília, Higienópolis, Barra Funda e Vila Buarque.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/produtor-faccin.webp",
                title: "Apagão Rosé Natural",
                text: "Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.",
              },
              {
                image: "/images/pao-sourdough.webp",
                title: "Sourdough Natural",
                text: "Fermentação lenta e forno artesanal. Assado poucas horas antes da entrega.",
              },
              {
                image: "/images/antepasto.webp",
                title: "Antepasto de Berinjela",
                text: "Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="overflow-hidden rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={900}
                    className="w-full h-[520px] object-cover hover:scale-[1.02] transition-all duration-700"
                  />
                </div>

                <h3 className="mt-7 font-serif text-[2.2rem] tracking-[-0.05em] text-[#4A2A22]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[2] text-[#746257] max-w-[92%]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="relative h-[820px] overflow-hidden">
        <Image
          src="/images/apagao-editorial.webp"
          alt="Curadoria artesanal"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/22" />

        <div className="relative z-10 h-full max-w-[1450px] mx-auto px-6 md:px-10 lg:px-16 flex items-center">
          <div className="max-w-[620px] pl-2 md:pl-10">
            <span className="text-[10px] uppercase tracking-[0.38em] text-[#F1E3D8]/70">
              Pequenos produtores
            </span>

            <h2 className="mt-6 font-serif text-[4.6rem] md:text-[6.6rem] leading-[0.9] tracking-[-0.08em] text-[#FFF8F3]">
              Curadoria feita perto de quem produz.
            </h2>

            <p className="mt-8 text-[15px] leading-[2.1] text-[#F4E7DC]/80 max-w-[520px]">
              Cada edição nasce da proximidade com produtores independentes,
              agricultura sustentável e processos artesanais reais.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="rounded-[42px] bg-gradient-to-br from-[#2A1714] via-[#3B1F1A] to-[#6E2E1F] px-10 md:px-24 py-20 md:py-24 shadow-[0_40px_120px_rgba(62,27,17,0.25)]">
            <div className="max-w-[720px]">
              {/* ICON */}
              <div className="w-12 h-12 rounded-2xl bg-[#C65E3D] text-white flex items-center justify-center text-sm font-semibold">
                R
              </div>

              <div className="mt-6 text-[10px] uppercase tracking-[0.38em] text-[#DAB8A8]/70">
                Próxima edição
              </div>

              {/* TITLE */}
              <h2 className="mt-8 font-serif text-[4rem] md:text-[6rem] leading-[0.9] tracking-[-0.08em] text-[#FFF7F2]">
                Reservas abertas
                <br />
                para o Drop #01
              </h2>

              {/* TEXT */}
              <p className="mt-8 text-[15px] leading-[2] text-[#F0D9CC]/75 max-w-[560px]">
                Entregas entre sexta e sábado em Santa Cecília, Higienópolis,
                Vila Buarque e Barra Funda.
              </p>

              {/* BUTTON */}
              <button className="mt-12 bg-[#D66C4A] hover:bg-[#E17956] transition-all duration-500 text-white uppercase tracking-[0.22em] text-[11px] px-10 py-4 rounded-full shadow-[0_14px_50px_rgba(214,108,74,0.28)]">
                Reservar meu drop
              </button>

              {/* SMALL */}
              <div className="mt-8 text-[10px] uppercase tracking-[0.32em] text-[#CBAE9E]/45">
                Pagamento em até 3x · Disponível via link
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E8DED4] py-12">
        <div className="max-w-[1450px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* LOGO */}
          <Image
            src="/branding/transparentes/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            width={420}
            height={100}
            className="w-[340px] h-auto opacity-95"
          />

          {/* CENTER */}
          <div className="text-[10px] uppercase tracking-[0.36em] text-[#B9A89D] text-center">
            Curadoria artesanal · São Paulo
          </div>

          {/* RIGHT */}
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#B9A89D]">
            © 2026 Curadoria Raiz
          </div>
        </div>
      </footer>
    </main>
  );
}
