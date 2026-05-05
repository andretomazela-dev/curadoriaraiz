"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F4EEE6] text-[#9E3D2F] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        {/* glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(158,61,47,0.10),transparent_35%)]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <div className="max-w-xl">
              <p className="uppercase tracking-[0.35em] text-[11px] md:text-xs text-[#B19586] mb-8">
                Curadoria artesanal · São Paulo
              </p>

              {/* NOVO LOGO */}
              <div className="mb-10">
                <Image
                  src="/branding/01_principal_claro.svg"
                  alt="Curadoria Raiz"
                  width={560}
                  height={260}
                  priority
                  className="w-[320px] md:w-[440px] lg:w-[520px] h-auto"
                />
              </div>

              <h1 className="text-[3rem] leading-[0.95] md:text-[5.4rem] md:leading-[0.9] font-light tracking-[-0.04em] text-[#E7DED5] max-w-[8ch]">
                Alimento com história, entregue por quem escolhe.
              </h1>

              <p className="mt-8 text-[#9C8477] text-lg leading-relaxed max-w-lg">
                Uma seleção mensal de vinho natural, pão de fermentação natural
                e pequenos produtores escolhidos para desacelerar o ritmo da
                cidade por algumas horas.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#assinatura"
                  className="inline-flex items-center justify-center rounded-full bg-[#9E3D2F] hover:bg-[#8A3528] transition-colors text-[#F4EEE6] px-8 py-4 text-sm tracking-[0.18em] uppercase"
                >
                  Assinar agora
                </a>

                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center rounded-full border border-[#D7C8BC] hover:border-[#9E3D2F] transition-colors text-[#9E3D2F] px-8 py-4 text-sm tracking-[0.18em] uppercase"
                >
                  Como funciona
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end">
              {/* background card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[92%] h-[88%] rounded-[42px] bg-[#EDE5DC]" />
              </div>

              {/* bottle image */}
              <div className="relative z-10">
                <Image
                  src="/vinho-hero.png"
                  alt="Seleção Curadoria Raiz"
                  width={760}
                  height={900}
                  priority
                  className="
                    relative
                    w-full
                    max-w-[640px]
                    object-contain
                    drop-shadow-[0_35px_60px_rgba(0,0,0,0.18)]
                    hover:scale-[1.015]
                    transition-transform
                    duration-500
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        id="como-funciona"
        className="py-24 md:py-32 border-t border-[#E5DBD1]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <p className="uppercase tracking-[0.32em] text-xs text-[#B19586] mb-4">
              Como funciona
            </p>

            <h2 className="text-4xl md:text-6xl leading-[0.95] tracking-[-0.04em] text-[#9E3D2F]">
              Uma curadoria pensada para desacelerar.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Selecionamos",
                text: "Escolhemos vinhos naturais, pães artesanais e pequenos produtores com produção autoral e limitada.",
              },
              {
                number: "02",
                title: "Montamos",
                text: "Cada caixa é composta para criar uma experiência equilibrada entre sabor, estética e descoberta.",
              },
              {
                number: "03",
                title: "Entregamos",
                text: "Você recebe em casa uma experiência pronta para transformar uma noite comum em ritual.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-[32px] bg-[#EFE7DE] p-8 md:p-10"
              >
                <span className="text-[#C2AFA1] text-sm tracking-[0.28em] uppercase">
                  {item.number}
                </span>

                <h3 className="mt-6 text-3xl tracking-[-0.03em] text-[#9E3D2F]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[#8C766B] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSINATURA */}
      <section
        id="assinatura"
        className="py-24 md:py-32 bg-[#ECE3DA]"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="uppercase tracking-[0.32em] text-xs text-[#B19586] mb-5">
            Assinatura mensal
          </p>

          <h2 className="text-5xl md:text-7xl tracking-[-0.05em] leading-[0.92] text-[#9E3D2F]">
            Curadoria autoral,
            <br />
            sem excesso.
          </h2>

          <p className="mt-8 text-lg md:text-xl text-[#8E786C] leading-relaxed max-w-2xl mx-auto">
            Sem marketplaces infinitos. Sem escolha cansativa. Apenas uma
            seleção enxuta, sazonal e feita por pessoas.
          </p>

          <div className="mt-12">
            <a
              href="https://seulinkdepagamento.com"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-[#9E3D2F] hover:bg-[#8A3528] transition-colors text-[#F4EEE6] px-10 py-5 text-sm tracking-[0.22em] uppercase"
            >
              Quero assinar
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E5DBD1] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/branding/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            width={340}
            height={80}
            className="w-[220px] h-auto"
          />

          <p className="text-sm text-[#A08879]">
            © 2026 Curadoria Raiz · São Paulo
          </p>
        </div>
      </footer>
    </main>
  );
}
