import '../Styles/contact.css';
import * as Components from './Components.js';
import { Parallax,ParallaxLayer } from '@react-spring/parallax';
const EmailButton = ({ recipientEmail,name}) => {
    const handleSendEmail = () => {
      const subject = 'Feedback';
      
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}`;
  
      // Open Gmail in a new tab
      window.open(gmailLink, '_blank');
    };

    return (
        <div>

          <Components.Button className='button' style={{borderRadius: '5px'}} onClick={handleSendEmail}>
            Contact {name}
          </Components.Button>
        </div>
      );
    };
    
function Contact() {
    
    return (
        <div>
            
            <h1 className='mainheader'>Contact Us</h1>
            <h3 className='subheader'>Get in touch with the creators</h3>
            <h2 className='type'>Meet Our Web-Developers</h2>
            <div className='cards'>
                <div>
                    <img src='kareem2.png' alt='phot' className='personimage'></img>
                    <h4 className='name'>Kareem Aboelnaga</h4>
                    <EmailButton recipientEmail='kaaboelnaga@gmail.com' name='Kareem'> </EmailButton>
                </div>
                <div>
                    <img src='youssef2.png' alt='phot' className='personimage'></img>
                    <h4 className='name'>Youssef Anan</h4>
                    <EmailButton recipientEmail='youssefanan@gmail.com' name='Youssef'> </EmailButton>
                </div>
                
            </div>
            <h2 className='type'>Meet Our AI-Developers</h2>
            <div className='cards'>
                <div>
                    <img src='ahmed2.png' alt='phot' className='personimage'></img>
                    <h4 className='name'>Ahmed Youssry</h4>
                    <EmailButton recipientEmail='ahmedyoussry@gmail.com' name='Ahmed'> </EmailButton>
                </div>
                <div>
                    <img src='mohamed2.png' alt='phot' className='personimage'></img>
                    <h4 className='name'>Mohamed Kamal</h4>
                    <EmailButton recipientEmail='mohamedkamal@gmail.com' name='Mohamed'> </EmailButton>
                </div>
            </div>
            <div style={{ height: `2000px` }}></div>

        </div>
    )
}

export default Contact;