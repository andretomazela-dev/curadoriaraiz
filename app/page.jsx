export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição atual da Curadoria Raiz.'

  return (
    <main
      style={{
        background: '#F4F0EA',
        color: '#2B2724',
        overflow: 'hidden',
      }}
    >
      {/* GRAIN */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.035,
          mixBlendMode: 'multiply',
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
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
            'linear-gradient(135deg, #6A625D 0%, #5A514D 40%, #473F3A 100%)',
        }}
      >
        {/* GLOW */}
        <div
          style={{
            position: 'absolute',
            width: '700px',
            height: '700px',
            borderRadius: '999px',
            background: 'rgba(199,102,67,0.16)',
            filter: 'blur(90px)',
            right: '-160px',
            top: '-140px',
          }}
        />

        <div
          style={{
            maxWidth: '1380px',
            margin: '0 auto',
            width: '100%',
            padding: '120px 36px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '90px',
              alignItems: 'center',
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
                  color: 'rgba(255,255,255,0.62)',
                  fontSize: '11px',
                  marginBottom: '26px',
                }}
              >
                Curadoria artesanal · São Paulo
              </p>

              <div
                style={{
                  marginBottom: '36px',
                }}
              >
                <h1
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 'clamp(62px, 7vw, 112px)',
                    lineHeight: '0.86',
                    letterSpacing: '-0.08em',
                    color: '#F7F1E8',
                    margin: 0,
                  }}
                >
                  Curadoria
                </h1>

                <h1
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 'clamp(100px, 12vw, 210px)',
                    lineHeight: '0.78',
                    letterSpacing: '-0.1em',
                    color: '#F7F1E8',
                    margin: 0,
                  }}
                >
                  Raiz
                </h1>
              </div>

              <p
                style={{
                  fontSize: 'clamp(28px, 4vw, 56px)',
                  lineHeight: '0.98',
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
                  lineHeight: '2',
                  color: 'rgba(255,255,255,0.78)',
                  maxWidth: '500px',
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
                  boxShadow: '0 12px 40px rgba(0,0,0,0.24)',
                  transition: 'all .3s ease',
                }}
              >
                Reservar edição atual
              </a>
            </div>

            {/* IMAGEM */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '420px',
                  height: '420px',
                  borderRadius: '999px',
                  background: 'rgba(199,102,67,0.22)',
                  filter: 'blur(70px)',
                  bottom: '0',
                }}
              />

              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '36px',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.28)',
                  transform: 'translateY(-10px)',
                }}
              >
                <img
                  src='/images/apagao-editorial.webp'
                  alt='Vinho Apagão'
                  style={{
                    width: '100%',
                    maxWidth: '560px',
                    height: '720px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.16), transparent 40%)',
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
          padding: '160px 36px',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '100px',
            alignItems: 'start',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#9D948D',
                marginBottom: '26px',
              }}
            >
              Manifesto
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(64px, 9vw, 120px)',
                lineHeight: '0.9',
                letterSpacing: '-0.08em',
                color: '#CFC5BC',
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
                fontSize: 'clamp(24px, 3vw, 42px)',
                lineHeight: '1.6',
                color: '#2F2A27',
                marginBottom: '38px',
                fontWeight: 300,
              }}
            >
              A Curadoria Raiz nasce do desejo de aproximar
              pequenos produtores do ritmo da cidade.
            </p>

            <p
              style={{
                fontSize: '18px',
                lineHeight: '2.1',
                color: '#625A54',
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
          padding: '0 36px 160px',
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
              color: '#9D948D',
              marginBottom: '18px',
            }}
          >
            Drop #01
          </p>

          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(58px, 7vw, 96px)',
              lineHeight: '0.92',
              letterSpacing: '-0.08em',
              color: '#D1C7BE',
              marginBottom: '28px',
            }}
          >
            O Trio da Vez
          </h2>

          <p
            style={{
              maxWidth: '720px',
              fontSize: '18px',
              lineHeight: '2',
              color: '#655C55',
              marginBottom: '72px',
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
                image: '/images/apagao-editorial.webp',
                text: 'Rosé vivo e levemente frutado.',
                height: '520px',
              },
              {
                title: 'Sourdough Natural',
                image: '/images/pao-sourdough.webp',
                text: 'Fermentação lenta e miolo vivo.',
                height: '460px',
              },
              {
                title: 'Antepasto de Berinjela',
                image: '/images/antepasto.webp',
                text: 'Receita artesanal em pequeno lote.',
                height: '500px',
              },
            ].map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    overflow: 'hidden',
                    borderRadius: '30px',
                    marginBottom: '26px',
                    background: '#ECE5DC',
                    boxShadow:
                      '0 18px 40px rgba(0,0,0,0.05)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: item.height,
                      objectFit: 'cover',
                      transition: 'transform .6s ease',
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '42px',
                    lineHeight: '0.95',
                    color: '#2A2522',
                    marginBottom: '14px',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: '#6A625B',
                    fontSize: '16px',
                    lineHeight: '1.9',
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
              'linear-gradient(90deg, rgba(26,32,24,0.58), rgba(0,0,0,0.12))',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '160px 36px',
          }}
        >
          <div
            style={{
              maxWidth: '580px',
            }}
          >
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.66)',
                marginBottom: '26px',
              }}
            >
              Pequenos produtores
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(64px, 8vw, 118px)',
                lineHeight: '0.9',
                letterSpacing: '-0.08em',
                color: '#fff',
                marginBottom: '34px',
              }}
            >
              Curadoria feita perto de quem produz.
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,0.82)',
                fontSize: '18px',
                lineHeight: '2',
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
          padding: '160px 36px',
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
              color: '#9D948D',
              marginBottom: '18px',
            }}
          >
            Como funciona
          </p>

          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(58px, 8vw, 96px)',
              lineHeight: '0.92',
              color: '#D1C7BE',
              marginBottom: '84px',
            }}
          >
            O Ritual do Drop
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '54px',
            }}
          >
            {[
              {
                number: '01',
                title: 'Reserva',
                text: 'Abrimos poucos pedidos por edição para garantir frescor e evitar desperdício.',
              },
              {
                number: '02',
                title: 'Preparação',
                text: 'Tudo é preparado sob ritmo artesanal e entregue no melhor momento.',
              },
              {
                number: '03',
                title: 'Entrega',
                text: 'As entregas acontecem entre sexta e sábado em bairros centrais de São Paulo.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  paddingTop: '34px',
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                }}
              >
                <p
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.18em',
                    color: '#B5ABA2',
                    marginBottom: '22px',
                  }}
                >
                  {item.number}
                </p>

                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '42px',
                    color: '#2C2724',
                    marginBottom: '18px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: '#655D57',
                    lineHeight: '2',
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
          padding: '0 36px 130px',
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            borderRadius: '44px',
            overflow: 'hidden',
            background:
              'linear-gradient(135deg, #1E1917 0%, #2A221F 60%, #3B2822 100%)',
            padding: '120px 42px',
            textAlign: 'center',
            position: 'relative',
            boxShadow: '0 30px 80px rgba(0,0,0,0.14)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '420px',
              height: '420px',
              background: 'rgba(199,102,67,0.12)',
              filter: 'blur(90px)',
              borderRadius: '999px',
              right: '-120px',
              top: '-120px',
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
                letterSpacing: '0.24em',
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
                fontSize: 'clamp(54px, 7vw, 94px)',
                lineHeight: '0.92',
                letterSpacing: '-0.06em',
                color: '#fff',
                marginBottom: '30px',
              }}
            >
              Reservas abertas
              <br />
              para o Drop #01
            </h2>

            <p
              style={{
                maxWidth: '720px',
                margin: '0 auto 42px',
                color: 'rgba(255,255,255,0.72)',
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
                boxShadow: '0 10px 30px rgba(0,0,0,0.24)',
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
          padding: '42px 36px',
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
            color: '#948B84',
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
