import { Metadata } from "next"

// app/page.tsx ou pages/index.tsx
import { Carrossel } from "./components/carousel/carousel";


export const metadata: Metadata = {
// 1. Tags Essenciais para o Google SEO
  title: 'IFMT - Polo de Campo Verde MT',
  description: ' A jornada de aprendizado do Developer Natanael Figueiredo: projetos de programação e conhecimentos adquiridos na faculdade IFMT – Campus Campo Verde. Descubra aulas, projetos e tutoriais. ',

  // 4. Ícones
  icons: {
    icon: '/ifmt_logo.svg',
  },

}

export default function Home(){
  return (
    <div>
      <h3>Home Page - IFMT</h3>
      {/* <Carrossel />  Só aparece aqui */}
    </div>
  )
}