
import '../assets/style/contacto.css'
function Contacto() {
    return (
        <div style={{ marginTop: "95px" }} className="contacto-container">
        <div className="contact-info">
          <h3>Información de contacto</h3>
          <p><strong>Teléfonos:</strong></p>
          <ul>
            <li>3584386992</li>
            <li>3585605941</li>
            <li>3586012923</li>
          </ul>
      
          <p><strong>Ubicación:</strong></p>
          <p>Carnerillo, Córdoba</p>
          <p>Argentina</p>
      
          <p><strong>Correos electrónicos:</strong></p>
          <ul>
            <li><a href="mailto:info@l47.com.ar">info@l47.com.ar</a></li>
            <li><a href="mailto:administracion@l47.com.ar">administracion@l47.com.ar</a></li>
          </ul>
        </div>
      
        <div className="contact-form">
          <h3>Contacto</h3>
          <form action="#" method="POST">
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
      
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
      
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
            </div>
      
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      
      )
}

export default Contacto