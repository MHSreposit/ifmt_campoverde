import "./footer.css"; // ou use módulos: import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="footer-item">
            <img
              src="/icons/local.png"
              alt="Localização"
              title="Localização da faculdade"
            />
            <span>
              Av. Isidoro Luiz Gentilin, 585 <br />
              Belvedere – Campo Verde/MT
            </span>
          </div>
          <div className="footer-item">
            <img
              src="/icons/telefone.png"
              alt="Contato Telefone"
              title="Cantato (Telefone)"
            />
            <span>Telefone: (65) 3341-2170</span>
          </div>

          <div className="footer-item">
            <img src="/icons/envelope.png" alt="E-mail" title="E-mail" />
            <span>gabinete.cvd@ifmt.edu.br</span>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-item">
            <img
              src="/icons/school.png"
              alt="Faculdade"
              title="Faculdade IFTM - Campo Verde"
            />
            <span>
              Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso
            </span>
          </div>
          <div className="footer-item">
            <img
              src="/icons/atendimento.png"
              alt="Atendimento"
              title="Atendimento"
            />
            <span>
              Segunda a Sexta - 07h às 17h <br />
              Reitoria IFMT – Cuiabá
            </span>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-image">
            <img
              src="/icons/aspas.png"
              alt="Trabalhar"
              />
              <img
              src="/icons/github.png"
              alt="Github"
              />
              <img
              src="/icons/linkedin.png"
              alt="Github"
              />
              <img
              src="/icons/instagran.png"
              alt="Github"
              /> 
              <img
              src="/icons/facebook.png"
              alt="Github"
              />                           
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} IFMT – Campus Campo Verde
      </div>
    </footer>
  );
}
