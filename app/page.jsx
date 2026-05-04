export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição Drop #01 — Apagão da Curadoria Raiz.'

  return (
    <main
      style={{
        background: '#F7F4EE',
        color: '#1E1E1B',
        overflow: 'hidden',
      }}
    >
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

      {/* MANIFESTO */}
      <section
        style={{
          padding: '120px 24px',
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          <div>
            <p
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#9D968B',
                fontSize: '11px',
                marginBottom: '24px',
              }}
            >
              Manifesto
            </p>

            <h2
              style={{
                fontSize: 'clamp(48px, 10vw, 82px)',
                lineHeight: '0.96',
                fontFamily: 'Georgia, serif',
                color: '#D4CCC0',
                letterSpacing: '-0.04em',
              }}
            >
              Menos
              <br />
              pressa,
              <br />
              mais
              <br />
              repertório.
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: 'clamp(20px, 4vw, 24px)',
                lineHeight: '1.8',
                color: '#3C3834',
              }}
            >
              A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade. Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente — não apenas pelo sabor, mas pela história, origem e modo de produção.
            </p>

            <p
              style={{
                marginTop: '32px',
                fontSize: 'clamp(16px, 3vw, 18px)',
                lineHeight: '1.9',
                color: '#716A62',
              }}
            >
              Sem excesso. Sem pressa. Apenas alimento honesto, logística consciente e encontros que fazem sentido.
            </p>
          </div>
        </div>
      </section>

      {/* TRIO */}
      <section
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 24px 120px',
        }}
      >
        <p
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#9D968B',
            fontSize: '11px',
            marginBottom: '24px',
          }}
        >
          Drop #01
        </p>

        <h2
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(52px, 8vw, 82px)',
            color: '#E4DDD3',
            marginBottom: '24px',
            lineHeight: '1',
          }}
        >
          O Trio da Vez
        </h2>

        <p
          style={{
            maxWidth: '720px',
            fontSize: '18px',
            lineHeight: '1.9',
            color: '#5B544C',
            marginBottom: '54px',
          }}
        >
          Uma combinação pensada para acompanhar o fim da tarde entre Santa Cecília, Higienópolis, Barra Funda, Vila Buarque e Campos Elíseos.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {[
            {
              image: '/images/apagao-editorial.webp',
              title: 'Apagão Rosé Natural',
              text: 'Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.',
            },
            {
              image: '/images/pao-sourdough.webp',
              title: 'Sourdough Natural',
              text: 'Casca crocante, fermentação lenta e miolo vivo. Assado poucas horas antes da entrega.',
            },
            {
              image: '/images/antepasto.webp',
              title: 'Antepasto de Berinjela',
              text: 'Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.',
            },
          ].map((item, index) => (
            <div key={index}>
              <div
                style={{
                  overflow: 'hidden',
                  borderRadius: '24px',
                  marginBottom: '24px',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '420px',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <h3
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '36px',
                  marginBottom: '14px',
                  color: '#2E2A26',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.9',
                  color: '#6B645D',
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUTOR */}
      <section
        style={{
          position: 'relative',
          height: '700px',
          overflow: 'hidden',
        }}
      >
        <img
          src='/images/produtor-faccin.webp'
          alt='Família Faccin'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.32)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              width: '100%',
              padding: '0 24px',
            }}
          >
            <div
              style={{
                maxWidth: '560px',
              }}
            >
              <p
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.72)',
                  fontSize: '11px',
                  marginBottom: '24px',
                }}
              >
                Pequenos produtores
              </p>

              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(52px, 7vw, 84px)',
                  lineHeight: '0.95',
                  color: '#fff',
                  marginBottom: '28px',
                }}
              >
                Curadoria feita perto de quem produz.
              </h2>

              <p
                style={{
                  color: 'rgba(255,255,255,0.82)',
                  lineHeight: '1.9',
                  fontSize: '18px',
                }}
              >
                Cada edição nasce da proximidade com produtores independentes, agricultura sustentável e processos artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
