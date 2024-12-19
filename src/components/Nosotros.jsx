import "../assets/style/nosotros.css";
function Nosotros() {
  return (
    <div style={{ marginTop: "95px" }} className="sobrenosotros">
      <h2>Sobre nosotros</h2>
      <p>
        Realizamos estudios en cultivos bajo luz complementaria artificial, logrando un aumento significativo 
        en biomasa y rendimiento. Los resultados mostraron mejoras del 20% en rendimiento general y hasta 
        un 50% más en producción de grano en zonas tratadas comparadas con áreas sin iluminar.
        Imágenes satelitales y mapas de rendimiento confirmaron la mayor eficiencia fotosintética y el 
        potencial de esta tecnología para extender el ciclo del cultivo y mejorar la producción.
      </p>
      <ul style={{ listStyleType: "number" }}>
        <li>La luz artificial aumenta biomasa y producción de grano.</li>
        <li>Se logró un incremento del 50% en el rendimiento de grano.</li>
        <li>Resultados prometedores para cultivos como la soja de segunda.</li>
        <li>Se continuará validando esta tecnología en otros cultivos.</li>
      </ul>
    </div>
  );
}

export default Nosotros;
