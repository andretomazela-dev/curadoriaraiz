export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição atual da Curadoria Raiz.'

  return (
    <main
      style={{
        background: '#F5F1EB',
        color: '#2A2623',
        overflow: 'hidden',
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          background:
            'radial-gradient(circle at top right, rgba(198,102,67,0.18), transparent 32%), linear-gradient(135deg, #6B625C 0%, #5D5550 42%, #4B433E 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '700px',
            height: '700px',
            borderRadius: '999px',
            background: 'rgba(199,102,67,0.12)',
            filter: 'blur(90px)',
            right: '-120px',
            top: '-120px',
          }}
        />

        <div
          style={{
            maxWidth: '1380px',
            margin: '0 auto',
            width: '100%',
            padding: '110px 32px',
            position: 'relative',
            zIndex: 2,
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
            <div
              style={{
                maxWidth: '620px',
              }}
            >
              <p
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.24em',
                  color: 'rgba(255,255,255,0.68)',
                  fontSize: '11px',
                  marginBottom: '28px',
                }}
              >
                Curadoria artesanal · São Paulo
              </p>

              <div
                style={{
                  marginBottom: '34px',
                }}
              >
                <h1
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 'clamp(62px, 7vw, 110px)',
                    lineHeight: '0.9',
                    letterSpacing: '-0.06em',
                    color: '#F7F1E8',
                    margin: 0,
                  }}
                >
                  Curadoria
                </h1>

                <h1
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 'clamp(88px, 11vw, 180px)',
                    lineHeight: '0.82',
                    letterSpacing: '-0.08em',
                    color: '#F7F1E8',
                    margin: 0,
                  }}
                >
                  Raiz
                </h1>
              </div>

              <p
                style={{
                  fontSize: 'clamp(28px, 4vw, 52px)',
                  lineHeight: '1',
                  color: '#F7F1E8',
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
                  color: 'rgba(255,255,255,0.78)',
                  maxWidth: '520px',
                  marginBottom: '42px',
                }}
              >
                Uma seleção mensal de vinho natural, pão de
                fermentação natural e produtos artesanais
                escolhidos para desacelerar o ritmo da cidade por
                algumas horas.
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
                  boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
                }}
              >
                Reservar edição atual
              </a>
            </div>

            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '420px',
                  height: '420px',
                  borderRadius: '999px',
                  background: 'rgba(199,102,67,0.22)',
                  filter: 'blur(60px)',
                }}
              />

              <img
                src='/images/apagao-packshot.webp'
                alt='Vinho Apagão'
                style={{
                  width: '100%',
                  maxWidth: '620px',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2,
                  mixBlendMode: 'multiply',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        style={{
          padding: '140px 32px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#9A918A',
                marginBottom: '28px',
              }}
            >
              Manifesto
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(56px, 8vw, 96px)',
                lineHeight: '0.95',
                letterSpacing: '-0.06em',
                color: '#D3CBC3',
                margin: 0,
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

          <div
            style={{
              maxWidth: '620px',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(24px, 3vw, 38px)',
                lineHeight: '1.6',
                marginBottom: '36px',
                color: '#322D29',
                fontWeight: 300,
              }}
            >
              A Curadoria Raiz nasce do desejo de aproximar
              pequenos produtores do ritmo da cidade.
            </p>

            <p
              style={{
                fontSize: '18px',
                lineHeight: '2',
                color: '#5E5650',
              }}
            >
              Cada edição reúne vinho vivo, pão artesanal e
              conservas escolhidas manualmente — não apenas pelo
              sabor, mas pela história, origem e modo de
              produção.
              <br />
              <br />
              Sem excesso. Sem pressa. Apenas alimento honesto,
              logística consciente e encontros que fazem sentido.
            </p>
          </div>
        </div>
      </section>

      {/* TRIO */}
      <section
        style={{
          padding: '0 32px 140px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#9A918A',
              marginBottom: '20px',
            }}
          >
            Drop #01
          </p>

          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(52px, 7vw, 86px)',
              color: '#D8D0C7',
              lineHeight: '0.95',
              letterSpacing: '-0.05em',
              marginBottom: '24px',
            }}
          >
            O Trio da Vez
          </h2>

          <p
            style={{
              maxWidth: '760px',
              fontSize: '18px',
              lineHeight: '1.9',
              color: '#5B544F',
              marginBottom: '70px',
            }}
          >
            Uma combinação pensada para acompanhar o fim da tarde
            entre Santa Cecília, Higienópolis, Barra Funda, Vila
            Buarque e Campos Elíseos.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '34px',
            }}
          >
            {[
              {
                title: 'Apagão Rosé Natural',
                image: '/images/apagao-packshot.webp',
                text: 'Rosé de intervenção mínima da Família Faccin.',
              },
              {
                title: 'Sourdough Natural',
                image: '/images/pao-sourdough.webp',
                text: 'Casca crocante, fermentação lenta e miolo vivo.',
              },
              {
                title: 'Antepasto de Berinjela',
                image: '/images/antepasto.webp',
                text: 'Receita artesanal preparada em pequenos lotes.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  transition: 'all .4s ease',
                }}
              >
                <div
                  style={{
                    overflow: 'hidden',
                    borderRadius: '28px',
                    marginBottom: '24px',
                    background: '#EFE8DF',
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
                    fontSize: '40px',
                    lineHeight: '1',
                    marginBottom: '16px',
                    color: '#2B2622',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: '#6A625B',
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
          minHeight: '82vh',
          overflow: 'hidden',
        }}
      >
        <img
          src='/images/produtor-faccin.webp'
          alt='Produtor'
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
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.56), rgba(0,0,0,0.18))',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '140px 32px',
          }}
        >
          <div
            style={{
              maxWidth: '640px',
            }}
          >
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '24px',
              }}
            >
              Pequenos produtores
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(58px, 8vw, 110px)',
                lineHeight: '0.92',
                color: '#fff',
                marginBottom: '32px',
                letterSpacing: '-0.06em',
              }}
            >
              Curadoria feita perto de quem produz.
            </h2>

            <p
              style={{
                fontSize: '18px',
                lineHeight: '2',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              Cada edição nasce da proximidade com produtores
              independentes, agricultura sustentável e processos
              artesanais reais.
            </p>
          </div>
        </div>
      </section>

      {/* RITUAL */}
      <section
        style={{
          padding: '140px 32px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#9A918A',
              marginBottom: '20px',
            }}
          >
            Como funciona
          </p>

          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(54px, 7vw, 88px)',
              color: '#D3CBC3',
              lineHeight: '0.95',
              marginBottom: '70px',
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
                text: 'Tudo é preparado sob ritmo artesanal e entregue no melhor momento.',
              },
              {
                title: 'Entrega',
                text: 'As entregas acontecem entre sexta e sábado em bairros centrais de São Paulo.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '40px',
                  borderRadius: '28px',
                  background: '#EEE6DB',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '36px',
                    marginBottom: '18px',
                    color: '#2C2724',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    lineHeight: '1.9',
                    color: '#5F5751',
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
          padding: '0 32px 120px',
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            borderRadius: '40px',
            overflow: 'hidden',
            background:
              'linear-gradient(135deg, #1F1A17 0%, #2C2521 100%)',
            padding: '110px 40px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '420px',
              height: '420px',
              background: 'rgba(199,102,67,0.14)',
              filter: 'blur(80px)',
              borderRadius: '999px',
              top: '-120px',
              right: '-120px',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
            }}
          >
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '20px',
              }}
            >
              Próxima edição
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(48px, 7vw, 88px)',
                color: '#fff',
                lineHeight: '0.95',
                marginBottom: '26px',
                letterSpacing: '-0.05em',
              }}
            >
              Reservas abertas para o Drop #01
            </h2>

            <p
              style={{
                maxWidth: '720px',
                margin: '0 auto 42px',
                color: 'rgba(255,255,255,0.74)',
                lineHeight: '2',
                fontSize: '17px',
              }}
            >
              Entregas entre sexta e sábado em Santa Cecília,
              Higienópolis, Vila Buarque, Barra Funda e Campos
              Elíseos.
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
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: '1px solid rgba(0,0,0,0.06)',
          padding: '42px 32px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '18px',
            color: '#8B837D',
            fontSize: '13px',
          }}
        >
          <p>Curadoria Raiz · São Paulo</p>
          <p>Curadoria por André Tomazela</p>
        </div>
      </footer>
    </main>
  )
}
