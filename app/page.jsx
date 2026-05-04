{/* HERO */}
<section
  style={{
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
    background: '#2D2926',
    display: 'flex',
    alignItems: 'center',
  }}
>
  {/* IMAGEM */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      overflow: 'hidden',
    }}
  >
    <img
      src='/images/apagao-packshot.webp'
      alt='Vinho Apagão'
      style={{
        width: '42%',
        minWidth: '340px',
        maxWidth: '620px',
        objectFit: 'contain',
        opacity: 0.95,
        transform: 'translateX(6%)',
      }}
    />

    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(90deg, rgba(45,41,38,0.96) 0%, rgba(45,41,38,0.85) 36%, rgba(45,41,38,0.55) 60%, rgba(45,41,38,0.2) 100%)',
      }}
    />
  </div>

  {/* TEXTO */}
  <div
    style={{
      position: 'relative',
      zIndex: 2,
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '120px 32px',
    }}
  >
    <div
      style={{
        maxWidth: '620px',
      }}
    >
      <p
        style={{
          textTransform: 'uppercase',
          letterSpacing: '0.22em',
          color: 'rgba(255,255,255,0.72)',
          fontSize: '12px',
          marginBottom: '32px',
        }}
      >
        Curadoria artesanal · São Paulo
      </p>

      <h1
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(72px, 11vw, 140px)',
          lineHeight: '0.9',
          letterSpacing: '-0.06em',
          color: '#F5F1EA',
          marginBottom: '40px',
        }}
      >
        Curadoria
        <br />
        Raiz
      </h1>

      <p
        style={{
          fontSize: 'clamp(30px, 4vw, 52px)',
          lineHeight: '1.02',
          color: '#F5F1EA',
          fontWeight: 300,
          maxWidth: '560px',
          marginBottom: '36px',
        }}
      >
        Alimento com história, entregue por quem escolhe.
      </p>

      <p
        style={{
          fontSize: '18px',
          lineHeight: '1.9',
          color: 'rgba(255,255,255,0.78)',
          maxWidth: '520px',
          marginBottom: '44px',
        }}
      >
        Uma seleção mensal de vinho natural, pão de fermentação natural e produtos artesanais escolhidos para desacelerar o ritmo da cidade por algumas horas.
      </p>

      <a
        href={whatsappLink}
        target='_blank'
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#C65A38',
          color: '#fff',
          padding: '18px 34px',
          borderRadius: '999px',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontSize: '12px',
          transition: 'all .3s ease',
        }}
      >
        Reservar edição atual
      </a>
    </div>
  </div>
</section>
