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
      {/* GRAIN */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.045,
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
          mixBlendMode: 'multiply',
          zIndex: 999,
        }}
      />

      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          background:
            'linear-gradient(135deg, #726760 0%, #645A54 42%, #534944 100%)',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            width: '900px',
            height: '900px',
            borderRadius: '999px',
            background: 'rgba(199,102,67,0.18)',
            filter: 'blur(120px)',
            top: '-320px',
            right: '-280px',
          }}
        />

        <div
          style={{
            maxWidth: '1380px',
            margin: '0 auto',
            width: '100%',
            padding: '120px 32px 100px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(320px,1fr))',
              alignItems: 'center',
              gap: '80px',
            }}
          >
            {/* LEFT */}
            <div
              style={{
                maxWidth: '620px',
              }}
            >
              <p
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.24em',
                  color: 'rgba(255,255,255,0.62)',
                  fontSize: '11px',
                  marginBottom: '32px',
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
                    fontSize: 'clamp(58px, 6vw, 92px)',
                    lineHeight: '0.92',
                    letterSpacing: '-0.07em',
                    color: '#F8F2EA',
                    margin: 0,
                  }}
                >
                  Curadoria
                </h1>

                <h1
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 'clamp(92px, 11vw, 190px)',
                    lineHeight: '0.8',
                    letterSpacing: '-0.09em',
                    color: '#F8F2EA',
                    margin: 0,
                  }}
                >
                  Raiz
                </h1>
              </div>

              <p
                style={{
                  fontSize: 'clamp(28px,4vw,52px)',
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
                  lineHeight: '1.95',
                  color: 'rgba(255,255,255,0.74)',
                  maxWidth: '510px',
                  marginBottom: '44px',
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
                  boxShadow: '0 14px 40px rgba(0,0,0,0.18)',
                  transition: 'all .35s ease',
                }}
              >
                Reservar edição atual
              </a>
            </div>

            {/* RIGHT */}
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
                  width: '480px',
                  height: '480px',
                  borderRadius: '999px',
                  background: 'rgba(199,102,67,0.26)',
                  filter: 'blur(90px)',
                }}
              />

              <div
                style={{
                  position: 'relative',
                  borderRadius: '36px',
                  overflow: 'hidden',
                  boxShadow:
                    '0 30px 80px rgba(0,0,0,0.26)',
                  transform: 'translateY(10px)',
                }}
              >
                <img
                  src='/images/apagao-editorial.webp'
                  alt='Vinho Apagão'
                  style={{
                    width: '100%',
                    maxWidth: '620px',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.22), transparent)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        style={{
          padding: '150px 32px',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(320px,1fr))',
            gap: '90px',
          }}
        >
          <div
            style={{
              position: 'relative',
            }}
          >
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#A79D95',
                marginBottom: '34px',
              }}
            >
              Manifesto
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(72px,8vw,118px)',
                lineHeight: '0.9',
                color: '#D8CFC6',
                letterSpacing: '-0.08em',
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
                fontSize: 'clamp(26px,3vw,40px)',
                lineHeight: '1.6',
                color: '#312B28',
                marginBottom: '40px',
                fontWeight: 300,
              }}
            >
              A Curadoria Raiz nasce do desejo de aproximar
              pequenos produtores do ritmo da cidade.
            </p>

            <p
              style={{
                fontSize: '18px',
                lineHeight: '2.05',
                color: '#615852',
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
          padding: '0 32px 150px',
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
              color: '#A79D95',
              marginBottom: '20px',
            }}
          >
            Drop #01
          </p>

          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(60px,7vw,96px)',
              color: '#D4CBC3',
              lineHeight: '0.95',
              letterSpacing: '-0.06em',
              marginBottom: '26px',
            }}
          >
            O Trio da Vez
          </h2>

          <p
            style={{
              maxWidth: '760px',
              fontSize: '18px',
              lineHeight: '1.95',
              color: '#615852',
              marginBottom: '80px',
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
                'repeat(auto-fit,minmax(280px,1fr))',
              gap: '34px',
            }}
          >
            {[
              {
                title: 'Apagão Rosé Natural',
                image: '/images/apagao-editorial.webp',
                text: 'Rosé de intervenção mínima da Família Faccin.',
              },
              {
                title: 'Sourdough Natural',
                image: '/images/pao-sourdough.webp',
                text: 'Fermentação lenta e forno artesanal.',
              },
              {
                title: 'Antepasto de Berinjela',
                image: '/images/antepasto.webp',
                text: 'Receita artesanal preparada em pequenos lotes.',
              },
            ].map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    overflow: 'hidden',
                    borderRadius: '30px',
                    marginBottom: '24px',
                    background: '#EEE7DE',
                    boxShadow:
                      '0 12px 40px rgba(0,0,0,0.04)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height:
                        index === 1 ? '440px' : '520px',
                      objectFit: 'cover',
                      transition: 'transform .6s ease',
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '44px',
                    lineHeight: '0.95',
                    color: '#2C2724',
                    marginBottom: '14px',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: '#6A625B',
                    lineHeight: '1.9',
                    fontSize: '16px',
                    maxWidth: '90%',
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
          minHeight: '88vh',
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
              'linear-gradient(90deg, rgba(24,30,24,0.58), rgba(24,30,24,0.12))',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '160px 32px',
          }}
        >
          <div
            style={{
              maxWidth: '600px',
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
                fontSize: 'clamp(60px,8vw,120px)',
                lineHeight: '0.9',
                color: '#fff',
                marginBottom: '30px',
                letterSpacing: '-0.07em',
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
          padding: '150px 32px',
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
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#A79D95',
              marginBottom: '20px',
            }}
          >
            Como funciona
          </p>

          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(60px,7vw,96px)',
              color: '#D4CBC3',
              lineHeight: '0.95',
              marginBottom: '80px',
              letterSpacing: '-0.06em',
            }}
          >
            O Ritual do Drop
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(260px,1fr))',
              gap: '40px',
            }}
          >
            {[
              {
                n: '01',
                title: 'Reserva',
                text: 'Abrimos poucos pedidos por edição para garantir frescor e evitar desperdício.',
              },
              {
                n: '02',
                title: 'Preparação',
                text: 'Tudo é preparado sob ritmo artesanal e entregue no melhor momento.',
              },
              {
                n: '03',
                title: 'Entrega',
                text: 'As entregas acontecem entre sexta e sábado em bairros centrais de São Paulo.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  paddingTop: '24px',
                  borderTop:
                    '1px solid rgba(0,0,0,0.08)',
                }}
              >
                <p
                  style={{
                    fontSize: '13px',
                    marginBottom: '18px',
                    color: '#B0A59B',
                  }}
                >
                  {item.n}
                </p>

                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '42px',
                    marginBottom: '18px',
                    color: '#2C2724',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    lineHeight: '1.95',
                    color: '#665E58',
                    maxWidth: '90%',
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
            borderRadius: '42px',
            overflow: 'hidden',
            background:
              'linear-gradient(135deg, #1E1917 0%, #2A221E 100%)',
            padding: '120px 40px',
            textAlign: 'center',
            position: 'relative',
            boxShadow:
              '0 30px 80px rgba(0,0,0,0.12)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              borderRadius: '999px',
              background: 'rgba(199,102,67,0.12)',
              filter: 'blur(100px)',
              top: '-180px',
              right: '-180px',
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
                color: 'rgba(255,255,255,0.46)',
                marginBottom: '22px',
              }}
            >
              Próxima edição
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(54px,7vw,96px)',
                color: '#fff',
                lineHeight: '0.92',
                marginBottom: '28px',
                letterSpacing: '-0.06em',
              }}
            >
              Reservas abertas
              <br />
              para o Drop #01
            </h2>

            <p
              style={{
                maxWidth: '700px',
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
