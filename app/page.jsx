export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição Drop #01 — Apagão da Curadoria Raiz.'

  return (
    <main
      style={{
        background: '#F7F4EE',
        color: '#1F1B18',
        overflow: 'hidden',
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          background: '#6F6660',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            width: '100%',
            padding: '80px 28px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'center',
              gap: '80px',
            }}
          >
            {/* TEXTO */}
            <div
              style={{
                maxWidth: '620px',
              }}
            >
              <p
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.24em',
                  color: 'rgba(255,255,255,0.72)',
                  fontSize: '11px',
                  marginBottom: '28px',
                }}
              >
                Curadoria artesanal · São Paulo
              </p>

              <h1
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(72px, 11vw, 148px)',
                  lineHeight: '0.88',
                  letterSpacing: '-0.06em',
                  color: '#F6F1EA',
                  marginBottom: '34px',
                }}
              >
                Curadoria
                <br />
                Raiz
              </h1>

              <p
                style={{
                  fontSize: 'clamp(30px, 4vw, 56px)',
                  lineHeight: '1',
                  color: '#F6F1EA',
                  fontWeight: 300,
                  maxWidth: '560px',
                  marginBottom: '34px',
                }}
              >
                Alimento com história, entregue por quem escolhe.
              </p>

              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '1.9',
                  color: 'rgba(255,255,255,0.82)',
                  maxWidth: '520px',
                  marginBottom: '42px',
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
                  background: '#C76643',
                  color: '#fff',
                  padding: '18px 34px',
                  borderRadius: '999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontSize: '12px',
                }}
              >
                Reservar edição atual
              </a>
            </div>

            {/* IMAGEM */}
            <div>
              <img
                src='/images/apagao-editorial.webp'
                alt='Curadoria Raiz'
                style={{
                  width: '100%',
                  borderRadius: '2px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        style={{
          padding: '140px 28px',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '80px',
          }}
        >
          <div>
            <p
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                color: '#A89F95',
                fontSize: '11px',
                marginBottom: '26px',
              }}
            >
              Manifesto
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(56px, 9vw, 96px)',
                lineHeight: '0.94',
                color: '#D4CBC0',
                letterSpacing: '-0.05em',
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
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: '1.8',
                color: '#3E3832',
              }}
            >
              A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade. Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente — não apenas pelo sabor, mas pela história, origem e modo de produção.
            </p>

            <p
              style={{
                marginTop: '36px',
                fontSize: '18px',
                lineHeight: '1.9',
                color: '#6D655D',
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
          padding: '0 28px 140px',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: '#A89F95',
              fontSize: '11px',
              marginBottom: '24px',
            }}
          >
            Drop #01
          </p>

          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(56px, 8vw, 92px)',
              lineHeight: '0.95',
              color: '#DDD4C9',
              marginBottom: '28px',
            }}
          >
            O Trio da Vez
          </h2>

          <p
            style={{
              maxWidth: '760px',
              color: '#655D55',
              lineHeight: '1.9',
              fontSize: '18px',
              marginBottom: '56px',
            }}
          >
            Uma combinação pensada para acompanhar o fim da tarde entre Santa Cecília, Higienópolis, Barra Funda, Vila Buarque e Campos Elíseos.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
            }}
          >
            {[
              {
                image: '/images/apagao-packshot.webp',
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
                    background: '#F1ECE5',
                    borderRadius: '24px',
                    overflow: 'hidden',
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
                    fontSize: 'clamp(34px, 4vw, 48px)',
                    lineHeight: '1',
                    color: '#2E2925',
                    marginBottom: '14px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: '#6A625A',
                    lineHeight: '1.9',
                    fontSize: '16px',
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOR */}
      <section
        style={{
          position: 'relative',
          minHeight: '720px',
          overflow: 'hidden',
        }}
      >
        <img
          src='/images/produtor-faccin.webp'
          alt='Família Faccin'
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.26)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '120px 28px',
            minHeight: '720px',
            display: 'flex',
            alignItems: 'center',
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
                color: 'rgba(255,255,255,0.75)',
                fontSize: '11px',
                marginBottom: '24px',
              }}
            >
              Pequenos produtores
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(62px, 8vw, 110px)',
                lineHeight: '0.92',
                color: '#fff',
                marginBottom: '32px',
                letterSpacing: '-0.05em',
              }}
            >
              Curadoria feita perto de quem produz.
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,0.88)',
                fontSize: '18px',
                lineHeight: '1.9',
                maxWidth: '520px',
              }}
            >
              Cada edição nasce da proximidade com produtores independentes, agricultura sustentável e processos artesanais reais.
            </p>
          </div>
        </div>
      </section>

      {/* RITUAL */}
      <section
        style={{
          padding: '140px 28px',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: '#A89F95',
              fontSize: '11px',
              marginBottom: '24px',
            }}
          >
            Como funciona
          </p>

          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(58px, 8vw, 92px)',
              lineHeight: '0.95',
              color: '#DDD4C9',
              marginBottom: '56px',
            }}
          >
            O Ritual do Drop
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '26px',
            }}
          >
            {[
              {
                title: 'Reserva',
                text: 'Abrimos poucos pedidos por edição para garantir frescor e evitar desperdício.',
              },
              {
                title: 'Preparação',
                text: 'Cada item é separado próximo da entrega, respeitando o tempo natural de produção.',
              },
              {
                title: 'Entrega',
                text: 'As entregas acontecem entre sexta e sábado em bairros centrais de São Paulo.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#EFE8DE',
                  padding: '40px',
                  borderRadius: '24px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '38px',
                    color: '#2C2723',
                    marginBottom: '18px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: '#665E57',
                    lineHeight: '1.9',
                    fontSize: '16px',
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '0 28px 140px',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            background: '#1E1A17',
            borderRadius: '36px',
            padding: '90px 28px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '11px',
              marginBottom: '22px',
            }}
          >
            Próxima edição
          </p>

          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(52px, 7vw, 92px)',
              lineHeight: '0.95',
              color: '#F7F2EA',
              marginBottom: '28px',
            }}
          >
            Reservas abertas para o Drop #01
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: '18px',
              lineHeight: '1.9',
              maxWidth: '760px',
              margin: '0 auto 42px',
            }}
          >
            Entregas entre sexta e sábado em Santa Cecília, Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
          </p>

          <a
            href={whatsappLink}
            target='_blank'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#C76643',
              color: '#fff',
              padding: '18px 34px',
              borderRadius: '999px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: '12px',
            }}
          >
            Reservar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '0 28px 40px',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            paddingTop: '26px',
          }}
        >
          <p
            style={{
              color: '#8A8177',
              fontSize: '13px',
            }}
          >
            Curadoria Raiz · São Paulo
          </p>

          <p
            style={{
              color: '#8A8177',
              fontSize: '13px',
            }}
          >
            Curadoria por André Tomazela
          </p>
        </div>
      </footer>
    </main>
  )
}
