export default function CuradoriaRaizLanding() {
  const whatsappLink =
    'https://wa.me/5511999999999?text=Olá! Quero reservar a edição atual da Curadoria Raiz.'

  return (
    <main
      style={{
        background: '#F7F4EE',
        color: '#1E1E1B',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          <img
            src='/images/apagao-editorial.webp'
            alt='Vinho Apagão'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '72% center',
              filter: 'brightness(0.72)',
            }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to right, rgba(0,0,0,0.62), rgba(0,0,0,0.28))',
            }}
          />
        </div>

        {/* grain */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            mixBlendMode: 'overlay',
            backgroundImage:
              'url("https://grainy-gradients.vercel.app/noise.svg")',
          }}
        />

        {/* content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '120px 42px',
          }}
        >
          <div
            style={{
              maxWidth: '640px',
            }}
          >
            <p
              style={{
                color: 'rgba(255,255,255,0.74)',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                fontSize: '12px',
                marginBottom: '26px',
              }}
            >
              Curadoria artesanal · São Paulo
            </p>

            <h1
              style={{
                color: '#F7F4EE',
                fontSize: 'clamp(58px, 10vw, 118px)',
                lineHeight: '0.92',
                marginBottom: '34px',
                fontFamily: 'Georgia, serif',
                fontWeight: '700',
                letterSpacing: '-0.04em',
              }}
            >
              Curadoria
              <br />
              Raiz
            </h1>

            <p
              style={{
                color: '#F4EFE8',
                fontSize: 'clamp(28px, 4vw, 44px)',
                lineHeight: '1.08',
                marginBottom: '30px',
                fontWeight: '300',
                maxWidth: '620px',
              }}
            >
              Alimento com história, entregue por quem escolhe.
            </p>

            <p
              style={{
                color: 'rgba(255,255,255,0.82)',
                fontSize: '18px',
                lineHeight: '1.9',
                maxWidth: '560px',
                marginBottom: '42px',
              }}
            >
              Uma seleção mensal de vinho natural, pão de fermentação natural e produtos artesanais escolhidos para desacelerar o ritmo da cidade por algumas horas.
            </p>

            <a
              href={whatsappLink}
              target='_blank'
              style={{
                display: 'inline-block',
                background: '#A55239',
                color: '#fff',
                padding: '17px 32px',
                borderRadius: '999px',
                textDecoration: 'none',
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                transition: '0.3s',
                fontWeight: '500',
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
          padding: '140px 42px',
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '90px',
          }}
        >
          <div>
            <p
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#9D968B',
                fontSize: '11px',
                marginBottom: '26px',
              }}
            >
              Manifesto
            </p>

            <h2
              style={{
                fontSize: 'clamp(42px, 6vw, 72px)',
                lineHeight: '0.98',
                fontFamily: 'Georgia, serif',
                color: '#D4CCC0',
                letterSpacing: '-0.04em',
              }}
            >
              Menos pressa,
              <br />
              mais repertório.
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: '22px',
                lineHeight: '1.9',
                color: '#3C3834',
              }}
            >
              A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade. Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente — não apenas pelo sabor, mas pela história, origem e modo de produção.
            </p>

            <p
              style={{
                marginTop: '34px',
                fontSize: '17px',
                lineHeight: '1.9',
                color: '#716A62',
              }}
            >
              Sem excesso. Sem pressa. Apenas alimento honesto, logística consciente e encontros que fazem sentido.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section
        style={{
          padding: '20px 42px 150px',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            marginBottom: '70px',
            maxWidth: '720px',
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
              fontSize: 'clamp(42px, 7vw, 72px)',
              lineHeight: '0.98',
              fontFamily: 'Georgia, serif',
              color: '#D4CCC0',
              letterSpacing: '-0.04em',
              marginBottom: '26px',
            }}
          >
            O Trio da Vez
          </h2>

          <p
            style={{
              fontSize: '20px',
              lineHeight: '1.9',
              color: '#5F5952',
            }}
          >
            Uma combinação pensada para acompanhar o fim da tarde entre Santa Cecília, Higienópolis, Barra Funda, Vila Buarque e Campos Elíseos.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '38px',
            alignItems: 'start',
          }}
        >
          {/* vinho */}
          <div
            style={{
              transform: 'translateY(0px)',
            }}
          >
            <img
              src='/images/apagao-editorial.webp'
              alt='Apagão'
              style={{
                width: '100%',
                height: '620px',
                objectFit: 'cover',
                borderRadius: '28px',
                marginBottom: '26px',
              }}
            />

            <h3
              style={{
                fontSize: '38px',
                marginBottom: '14px',
                fontFamily: 'Georgia, serif',
                letterSpacing: '-0.03em',
              }}
            >
              Apagão Rosé Natural
            </h3>

            <p
              style={{
                lineHeight: '1.9',
                color: '#6A645D',
                fontSize: '17px',
              }}
            >
              Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.
            </p>
          </div>

          {/* pão */}
          <div
            style={{
              transform: 'translateY(48px)',
            }}
          >
            <img
              src='/images/pao-sourdough.webp'
              alt='Pão'
              style={{
                width: '100%',
                height: '540px',
                objectFit: 'cover',
                borderRadius: '28px',
                marginBottom: '26px',
              }}
            />

            <h3
              style={{
                fontSize: '38px',
                marginBottom: '14px',
                fontFamily: 'Georgia, serif',
                letterSpacing: '-0.03em',
              }}
            >
              Sourdough Natural
            </h3>

            <p
              style={{
                lineHeight: '1.9',
                color: '#6A645D',
                fontSize: '17px',
              }}
            >
              Casca crocante, fermentação lenta e miolo vivo. Assado poucas horas antes da entrega.
            </p>
          </div>

          {/* antepasto */}
          <div
            style={{
              transform: 'translateY(96px)',
            }}
          >
            <img
              src='/images/antepasto.webp'
              alt='Antepasto'
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '28px',
                marginBottom: '26px',
              }}
            />

            <h3
              style={{
                fontSize: '38px',
                marginBottom: '14px',
                fontFamily: 'Georgia, serif',
                letterSpacing: '-0.03em',
              }}
            >
              Antepasto de Berinjela
            </h3>

            <p
              style={{
                lineHeight: '1.9',
                color: '#6A645D',
                fontSize: '17px',
              }}
            >
              Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUTOR */}
      <section
        style={{
          position: 'relative',
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '150px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          <img
            src='/images/produtor-faccin.webp'
            alt='Produtor'
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
              background: 'rgba(0,0,0,0.48)',
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '0 42px',
            width: '100%',
          }}
        >
          <div
            style={{
              maxWidth: '680px',
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
                color: '#F7F4EE',
                fontSize: 'clamp(42px, 7vw, 78px)',
                lineHeight: '0.98',
                marginBottom: '34px',
                fontFamily: 'Georgia, serif',
                letterSpacing: '-0.04em',
              }}
            >
              Curadoria feita perto de quem produz.
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,0.86)',
                lineHeight: '1.9',
                fontSize: '21px',
                maxWidth: '620px',
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
          padding: '0 42px 150px',
          maxWidth: '1240px',
          margin: '0 auto',
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
          Como funciona
        </p>

        <h2
          style={{
            fontSize: 'clamp(42px, 7vw, 72px)',
            lineHeight: '0.98',
            marginBottom: '70px',
            fontFamily: 'Georgia, serif',
            color: '#D4CCC0',
            letterSpacing: '-0.04em',
          }}
        >
          O Ritual do Drop
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
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
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: '#EFE8DC',
                borderRadius: '30px',
                padding: '42px',
              }}
            >
              <h3
                style={{
                  fontSize: '34px',
                  marginBottom: '18px',
                  fontFamily: 'Georgia, serif',
                  letterSpacing: '-0.03em',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  lineHeight: '1.9',
                  color: '#6A645D',
                  fontSize: '17px',
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '0 42px 160px',
        }}
      >
        <div
          style={{
            background: '#171614',
            borderRadius: '42px',
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '110px 50px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.42)',
              fontSize: '11px',
              marginBottom: '24px',
            }}
          >
            Próxima edição
          </p>

          <h2
            style={{
              color: '#F7F4EE',
              fontSize: 'clamp(40px, 7vw, 76px)',
              lineHeight: '1',
              marginBottom: '28px',
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.04em',
            }}
          >
            Reservas abertas
            <br />
            para o Drop #01
          </h2>

          <p
            style={{
              maxWidth: '760px',
              margin: '0 auto 42px',
              lineHeight: '1.9',
              color: 'rgba(255,255,255,0.72)',
              fontSize: '20px',
            }}
          >
            Entregas entre sexta e sábado em Santa Cecília, Higienópolis, Vila Buarque, Barra Funda e Campos Elíseos.
          </p>

          <a
            href={whatsappLink}
            target='_blank'
            style={{
              display: 'inline-block',
              background: '#A55239',
              color: '#fff',
              padding: '16px 30px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: '500',
            }}
          >
            Reservar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '0 42px 60px',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p
            style={{
              color: '#8B847A',
              fontSize: '13px',
            }}
          >
            Curadoria Raiz · São Paulo
          </p>

          <p
            style={{
              color: '#8B847A',
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
