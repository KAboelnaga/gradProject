import './Home.css';

function Home() {
    return (
        <div>
            <div className="horizontal-line"></div>
            <div className="intro">
            
            <img id="animatedXray" src="xray.png" alt="Description of the"></img>
            <div>
            <h1 className='title1'>Welcome to our advanced Pneumonia Chest X-ray AI Scan platform! </h1>
            <h3 className='text1'>
                Discover peace of mind with our cutting-edge technology designed to 
                analyze chest X-rays swiftly and accurately. Our AI model is trained to
                detect signs of pneumonia, providing you with rapid insights into your health.
            </h3>
            </div>
            </div>
            <h2 className='header'>How It Works</h2>
      <div className='flexx'>
      <div>
      <img className="logo" src="upload.png" alt="Description of the"></img>
        <p>Upload Your X-ray</p>
        </div>
        <div>
        <img className="logo" src="ai2.png" alt="Description of the"></img>
        <p>AI Analysis</p>
        </div>
        <div>
        <img className="logo" src="result.png" alt="Description of the"></img>
        <p>Instant Results</p>
        </div>
      </div>
      <h2 className='header'>Our Website Perks</h2>
      <div className='flexx'>
      <div>
      <img src="ai.png" alt="Description of the"></img>
        <p>Advanced AI Technology</p>
        </div>
        <div>
        <img className="logo" src="user.png" alt="Description of the"></img>
        <p>User-Friendly Interface</p>
        </div>
        <div>
        <img className="logo" src="fast.png" alt="Description of the"></img>
        <p>Fast and Efficient Results</p>
        </div>
        <div>
        <img className="logo" src="secure.png" alt="Description of the"></img>
        <p>Secure and Confidential</p>
        </div>
      </div>
      
      <h2 className='header'>Join Us in the Healthcare Revolution</h2>
      <p className='text1' id='end'>
        Whether you're a healthcare provider or an individual taking charge of your health, PneumoXpert is here to support you. Sign up today and experience the seamless integration of medical expertise and artificial intelligence.
      </p>
        </div>
    )
}

export default Home