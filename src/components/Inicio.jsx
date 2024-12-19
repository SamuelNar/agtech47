
import { Link } from 'react-router-dom'
import '../assets/style/inicio.css'
function Inicio() {
    return (
        <div style={{marginTop:"100px"}} className="inicio">
            <div className="inicio-texto">
                <h4>
                    Sistema de Iluminación y Energía Inteligente para el Agro
                </h4>
            </div>
            <div className="inicio-texto2">
                <p>
                    L47 , es un sistema pensado en la agricultura moderna, la cual debe afrontar desafios importantes,  sobre como implementan de manera inteligente los recursos factor  determinante en el rendimiento de los cultivos.
                    L47 es inteligencia , energia sustentable y  rendimientos optimos.
                </p>
            </div>
            <div>
                <button>
                    <Link style={{textDecoration:"none", color:"white"}} to="/Contactos">Contactanos</Link>                             
                </button>
            </div>
        </div>
    )
}

export default Inicio