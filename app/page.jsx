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
            }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.45)',
            }}
          />
        </div>

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
              maxWidth: '760px',
            }}
          >
            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontSize: '13px',
                marginBottom: '24px',
              }}
            >
              Curadoria artesanal · São Paulo
            </p>

            <h1
              style={{
                color: '#fff',
                fontSize: 'clamp(56px, 9vw, 120px)',
                lineHeight: '0.95',
                marginBottom: '32px',
                fontFamily: 'Georgia, serif',
                fontWeight: '700',
              }}
            >
              Curadoria Raiz
            </h1>

            <p
              style={{
                color: '#fff',
                fontSize: 'clamp(28px, 4vw, 46px)',
                lineHeight: '1.08',
                marginBottom: '32px',
                maxWidth: '780px',
                fontWeight: '300',
              }}
            >
              Alimento com história, entregue por quem escolhe.
            </p>

            <p
              style={{
                color: 'rgba(255,255,255,0.86)',
                fontSize: '20px',
                lineHeight: '1.8',
                maxWidth: '650px',
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
                background: '#C65A38',
                color: '#fff',
                padding: '18px 34px',
                borderRadius: '999px',
                textDecoration: 'none',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                transition: '0.3s',
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
          padding: '120px 32px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '80px',
          }}
        >
          <div>
            <p
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#8B867E',
                fontSize: '12px',
                marginBottom: '24px',
              }}
            >
              Manifesto
            </p>

            <h2
              style={{
                fontSize: '56px',
                lineHeight: '1.05',
                fontFamily: 'Georgia, serif',
              }}
            >
              Menos pressa, mais repertório.
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: '22px',
                lineHeight: '1.9',
                color: '#3D3A36',
              }}
            >
              A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade. Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente — não apenas pelo sabor, mas pela história, origem e modo de produção.
            </p>

            <p
              style={{
                marginTop: '32px',
                fontSize: '18px',
                lineHeight: '1.9',
                color: '#6B655E',
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
          padding: '40px 32px 120px',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            marginBottom: '70px',
          }}
        >
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#8B867E',
              fontSize: '12px',
              marginBottom: '24px',
            }}
          >
            Drop #01
          </p>

          <h2
            style={{
              fontSize: '64px',
              lineHeight: '1',
              fontFamily: 'Georgia, serif',
              marginBottom: '22px',
            }}
          >
            O Trio da Vez
          </h2>

          <p
            style={{
              maxWidth: '700px',
              fontSize: '20px',
              lineHeight: '1.8',
              color: '#5E5A55',
            }}
          >
            Uma combinação pensada para acompanhar o fim da tarde entre Santa Cecília, Higienópolis, Barra Funda, Vila Buarque e Campos Elíseos.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {/* vinho */}
          <div>
            <img
              src='/images/apagao-packshot.webp'
              alt='Vinho Apagão'
              style={{
                width: '100%',
                height: '520px',
                objectFit: 'cover',
                borderRadius: '24px',
                marginBottom: '24px',
              }}
            />

            <h3
              style={{
                fontSize: '32px',
                marginBottom: '12px',
                fontFamily: 'Georgia, serif',
              }}
            >
              Apagão Rosé Natural
            </h3>

            <p
              style={{
                lineHeight: '1.8',
                color: '#5E5A55',
                fontSize: '17px',
              }}
            >
              Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.
            </p>
          </div>

          {/* pão */}
          <div>
            <img
              src='/images/pao-sourdough.webp'
              alt='Pão sourdough'
              style={{
                width: '100%',
                height: '520px',
                objectFit: 'cover',
                borderRadius: '24px',
                marginBottom: '24px',
              }}
            />

            <h3
              style={{
                fontSize: '32px',
                marginBottom: '12px',
                fontFamily: 'Georgia, serif',
              }}
            >
              Sourdough Natural
            </h3>

            <p
              style={{
                lineHeight: '1.8',
                color: '#5E5A55',
                fontSize: '17px',
              }}
            >
              Casca crocante, fermentação lenta e miolo vivo. Assado poucas horas antes da entrega.
            </p>
          </div>

          {/* antepasto */}
          <div>
            <img
              src='/images/antepasto.webp'
              alt='Antepasto'
              style={{
                width: '100%',
                height: '520px',
                objectFit: 'cover',
                borderRadius: '24px',
                marginBottom: '24px',
              }}
            />

            <h3
              style={{
                fontSize: '32px',
                marginBottom: '12px',
                fontFamily: 'Georgia, serif',
              }}
            >
              Antepasto de Berinjela
            </h3>

            <p
              style={{
                lineHeight: '1.8',
                color: '#5E5A55',
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
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '120px',
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
              background: 'rgba(0,0,0,0.35)',
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 32px',
            width: '100%',
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
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.75)',
                fontSize: '12px',
                marginBottom: '22px',
              }}
            >
              Pequenos produtores
            </p>

            <h2
              style={{
                color: '#fff',
                fontSize: '64px',
                lineHeight: '1',
                marginBottom: '30px',
                fontFamily: 'Georgia, serif',
              }}
            >
              Curadoria feita perto de quem produz.
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,0.86)',
                lineHeight: '1.9',
                fontSize: '20px',
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
          padding: '0 32px 140px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#8B867E',
            fontSize: '12px',
            marginBottom: '24px',
          }}
        >
          Como funciona
        </p>

        <h2
          style={{
            fontSize: '64px',
            lineHeight: '1',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
          }}
        >
          O Ritual do Drop
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px',
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
                padding: '42px',
                background: '#EFE9DE',
                borderRadius: '28px',
              }}
            >
              <h3
                style={{
                  fontSize: '28px',
                  marginBottom: '18px',
                  fontFamily: 'Georgia, serif',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  lineHeight: '1.8',
                  color: '#5E5A55',
                  fontSize: '17px',
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          padding: '0 32px 140px',
        }}
      >
        <div
          style={{
            background: '#1E1E1B',
            color: '#fff',
            borderRadius: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '90px 50px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '12px',
              marginBottom: '24px',
            }}
          >
            Próxima edição
          </p>

          <h2
            style={{
              fontSize: '64px',
              lineHeight: '1',
              marginBottom: '30px',
              fontFamily: 'Georgia, serif',
            }}
          >
            Reservas abertas para o Drop #01
          </h2>

          <p
            style={{
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: '1.8',
              color: 'rgba(255,255,255,0.78)',
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
              background: '#C65A38',
              color: '#fff',
              padding: '18px 34px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Reservar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '0 32px 60px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <p
            style={{
              color: '#7C766E',
              fontSize: '14px',
            }}
          >
            Curadoria Raiz · São Paulo
          </p>

          <p
            style={{
              color: '#7C766E',
              fontSize: '14px',
            }}
          >
            Curadoria por André Tomazela
          </p>
        </div>
      </footer>
    </main>
  )
}
