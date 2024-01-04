import './footer.css';
function Footer(){
    return (
        <div>
            <footer className="footer">
            <img src='logo5.png' alt='logo'/> 
                <p>&copy; {new Date().getFullYear()} PneumoXpert. All rights reserved.</p>
            </footer>
        </div>
    )
}
export default Footer;