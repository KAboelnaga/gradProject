import '../Styles/footer.css';
function Footer(){
    return (
        <div>
            <footer className="footer">
            <img src={`${process.env.PUBLIC_URL}/assets/logo5.png`} alt='logo'/> 
                <p>&copy; {new Date().getFullYear()} PneumoXpert. All rights reserved.</p>
            </footer>
        </div>
    )
}
export default Footer;