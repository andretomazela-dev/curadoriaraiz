export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição Drop #01 — Apagão da Curadoria Raiz.'

  return (
    <main className="hero">
      <div className="overlay"></div>

      <img
        src="/images/apagao-editorial.webp"
        alt="Vinho Apagão"
        className="hero-image"
      />

      <section className="content">
        <p className="eyebrow">
          Curadoria artesanal · São Paulo
        </p>

        <h1>Curadoria Raiz</h1>

        <h2>
          Alimento com história, entregue por quem escolhe.
        </h2>

        <p className="description">
          Uma seleção mensal de vinho natural, pão de fermentação natural e produtos artesanais escolhidos para desacelerar o ritmo da cidade por algumas horas.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          className="button"
        >
          Reservar edição atual
        </a>
      </section>
    </main>
  )
}
