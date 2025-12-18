import { Metadata } from "next";

import Image from "next/image";

// app/page.tsx ou pages/index.tsx
import { Carrossel } from "./components/carousel/carousel";
import { SpriteAnimIfmt } from "./components/anime_ifmt/page";
import { YouTubePlayer } from "./components/YouTubePlayer/page";
import { SocialButton } from "./components/SocialButton/page";

export const metadata: Metadata = {
  // 1. Tags Essenciais para o Google SEO
  title: "IFMT - Polo de Campo Verde MT",
  description:
    " A jornada de aprendizado do Developer Natanael Figueiredo: projetos de programação e conhecimentos adquiridos na faculdade IFMT – Campus Campo Verde. Descubra aulas, projetos e tutoriais. ",

  // 4. Ícones
  icons: {
    icon: "/ifmt_logo.svg",
  },
};
//Importando as fonts nativas do next
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // normal, semi-bold, bold
});

export default function Home() {
  return (
    <div>
      <div className="ao_lado">
        <div className="col-texto">
          <main className={poppins.className}>
            <h1 style={{ fontSize: "4rem", fontWeight: 700 }}>
              Pesquisa e inovação em TI
            </h1>
            <p style={{ fontSize: "1.25rem", fontWeight: 400 }}>
              Contribuímos para o bem das pessoas com tecnologia e inovação.
            </p>
          </main>
        </div>
        <div className="col-image">
          {/* ATENÇÃO - NÃO DEIXAR ULTIMA LINHA DA SPRITE INCOMPLETA */}
          <SpriteAnimIfmt
            src="/sprites/tads.png"
            frameWidth={450}
            frameHeight={450}
            totalFrames={20}
            fps={15}
          />
          <a>Análise e desenvolvimento de Sistemas</a>
        </div>
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <main className={poppins.className}>
            <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>
              Faculdade IFMT - Polo de Campo Verde
            </h1>
          </main>
          <div className="col-image">
            <SpriteAnimIfmt
              src="/sprites/ifmt.png"
              frameHeight={300}
              frameWidth={300}
              totalFrames={216}
              fps={18}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <main className={poppins.className}>
              <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>
                Um pouco sobre nós
              </h1>
            </main>
            <a>
              O Instituto Federal de Mato Grosso (IFMT) é uma instituição
              pública comprometida com a educação, a ciência e a tecnologia.
              Atuamos na formação de profissionais qualificados, promovendo
              ensino, pesquisa e extensão de forma integrada. Com presença em
              diversas regiões do estado, o IFMT contribui para o
              desenvolvimento social e regional. Nossa missão é transformar
              vidas por meio de uma educação pública, gratuita e de qualidade.{" "}
              <br />
              <br />
              Quer nos conhecer melhor? É só dar play no vídeo 👇
            </a>
          </div>
        </div>
      </div>

      <YouTubePlayer videoId="ID_DO_VIDEO" />

      <div className="ao_lado" style={{ marginTop: "2rem" }}>
        <div className="col-button">
          <SocialButton
            href="https://instagram.com"
            label="Instagram"
            iconSrc="/icons/instagram.png"
          />
          <SocialButton
            href="https://facebook.com"
            label="Facebook"
            iconSrc="/icons/facebook.png"
          />

          <SocialButton
            href="https://linkedin.com"
            label="LinkedIn"
            iconSrc="/icons/linkedin.png"
          />

          <SocialButton
            href="https://github.com"
            label="Github"
            iconSrc="/icons/github.png"
          />
        </div>
      </div>

      <div className="ao_lado" style={{ marginTop: "2rem" }}>
        <div className="col-texto">
          <main className={poppins.className}>
            <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>Nossos Cursos</h1>
            <p style={{ fontSize: "1rem", fontWeight: 400 }}>
              O IFMT – Campus Campo Verde oferece cursos voltados à formação
              técnica e tecnológica, alinhados às demandas do mercado e da
              sociedade. As formações abrangem áreas estratégicas como
              tecnologia, gestão e desenvolvimento profissional. Com ensino
              público e de qualidade, o campus promove pesquisa, inovação e
              inclusão social. Os cursos preparam os estudantes para atuar de
              forma crítica, ética e competente no mundo do trabalho.
            </p>
          </main>
          <button className="btn-produtos">Conheça nossos Cursos</button>
        </div>

        <div className="col-image">
          <Image
            src="/image/cursos/cursos.jpg"
            alt="IFMT - Campus Campo Verde"
            width={400}
            height={300}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      {/* <Carrossel />  Só aparece aqui */}
    </div>
  );
}
