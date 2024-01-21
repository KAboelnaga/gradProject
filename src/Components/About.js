import '../Styles/about.css';
function About() {
    return (
        <div>
      <h1 className='title' id='aboutTitle'>Welcome to PneumoXpert</h1>
      <p className='aboutText'>
        At PneumoXpert, we leverage cutting-edge technology to provide a seamless and efficient way for doctors and patients to upload X-ray images and detect pneumonia disease with precision.
      </p>
      <h2 className='header'>Our Mission</h2>
      <p className='aboutText'>
        We're dedicated to revolutionizing healthcare by making early detection of pneumonia accessible to everyone, bridging the gap between medical expertise and technological advancements.
      </p>

      <div className='info'>
      <div>
            <h2 className='aboutTitle'>Why Choose Us?</h2>
            <h3 className='aboutSubtitle'>Swift Results:</h3> 
            <h5 className='aboutText'>Receive AI-analyzed reports in no time, eliminating the wait for traditional diagnostics.</h5>
            <h3 className='aboutSubtitle'>Accuracy Matters:</h3>
            <h5 className='aboutText'> Our advanced model ensures precise detection, enhancing the reliability of your results.</h5>
            <h3 className='aboutSubtitle'>User-Friendly Interface:</h3> 
            <h5 className='aboutText'>Navigate effortlessly through our user-friendly website, making health assessments hassle-free.</h5>
            <h3 className='aboutSubtitle'>Secure & Confidential:</h3> 
            <h5 className='aboutText'>Your health data is treated with the utmost confidentiality and security.</h5>
        </div>
        <div>
            <h2 className='aboutTitle'>How It Works?</h2>
            <h3 className='aboutSubtitle'>Upload X-ray Images:</h3>
            <h5 className='aboutText'>Simply upload your chest X-ray images using our intuitive interface.</h5>
            <h3 className='aboutSubtitle'>AI Analysis:</h3> 
            <h5 className='aboutText'>Our powerful AI model scrutinizes the images, identifying potential signs of pneumonia.</h5>
            <h3 className='aboutSubtitle'>Instant Results:</h3>
            <h5 className='aboutText'>Get instant access to a detailed report, aiding in prompt medical decision-making.</h5>
        </div>
        </div>
      </div>
    )
}

export default About;