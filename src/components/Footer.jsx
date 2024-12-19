import '../assets/style/footer.css'
function Footer() {
    const currentYear = new Date().getFullYear(); // Obtiene el año actual

    return (
        <div className="footer">
            <span>&copy; {currentYear}</span>
            <a href="https://l47.com.ar/" target="_blank" rel="noopener noreferrer">l47.com.ar</a>
        </div>
    );
}

export default Footer;
