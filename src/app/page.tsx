import { Metadata } from "next"

// app/page.tsx ou pages/index.tsx
import { Carrossel } from "./components/carousel/carousel";
import { SpriteAnimIfmt }  from "./components/anime_ifmt/page";


export const metadata: Metadata = {
// 1. Tags Essenciais para o Google SEO
  title: 'IFMT - Polo de Campo Verde MT',
  description: ' A jornada de aprendizado do Developer Natanael Figueiredo: projetos de programação e conhecimentos adquiridos na faculdade IFMT – Campus Campo Verde. Descubra aulas, projetos e tutoriais. ',

  // 4. Ícones
  icons: {
    icon: '/ifmt_logo.svg',
  },

}
//Importando as fonts nativas do next
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // normal, semi-bold, bold
});

export default function Home(){
  return (
    <div> {/* ATENÇÃO - NÃO DEIXAR ULTIMA LINHA DA SPRITE INCOMPLETA */}
      <div className="ao_lado">
      <div className="col-texto">
      <main className={poppins.className}>
        <h1 style={{ fontSize: '4rem', fontWeight: 700 }}>Pesquisa e inovação em TI</h1>
        <p style={{ fontSize: '1.25rem', fontWeight: 400 }}>
          Contribuímos para o bem das pessoas com tecnologia e inovação.
        </p>
      </main>
      </div>
    <div className="col-image">
      <SpriteAnimIfmt
        src="/sprites/ifmt.png"
        frameWidth={300}
        frameHeight={300}
        totalFrames={216}
        fps={18}
      />
      </div>
      </div>


      {/* <Carrossel />  Só aparece aqui */}
    </div>
  )
}