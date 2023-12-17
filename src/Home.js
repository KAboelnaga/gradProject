import './Home.css';

function Home() {
    return (
        <div>
            <div className="horizontal-line"></div>
            <div className="intro">
            
            <img className="logo" src="xray.png" alt="Description of the"></img>
            <div>
            <h1 className='maintitle'>Welcome to our advanced Pneumonia Chest X-ray AI Scan platform! </h1>
            <h3 className='maintext'>
                Discover peace of mind with our cutting-edge technology designed to 
                analyze chest X-rays swiftly and accurately. Our AI model is trained to
                detect signs of pneumonia, providing you with rapid insights into your health.
            </h3>
            </div>
            </div>
            <div className='info'>
            <div>
            <h2 className='subtitle'>Why Choose Us?</h2>
            <h3 className='maintext'>Swift Results:</h3> 
                <h5 className='subtext'>Receive AI-analyzed reports in no time, eliminating the wait for traditional diagnostics.</h5>
            <h3 className='maintext'>Accuracy Matters:</h3>
                <h5 className='subtext'> Our advanced model ensures precise detection, enhancing the reliability of your results.</h5>
            <h3 className='maintext'>User-Friendly Interface:</h3> 
                <h5 className='subtext'>Navigate effortlessly through our user-friendly website, making health assessments hassle-free.</h5>
            <h3 className='maintext'>Secure & Confidential:</h3> 
                <h5 className='subtext'>Your health data is treated with the utmost confidentiality and security.</h5>
            </div>
            <div>
            <h2 className='subtitle'>How It Works?</h2>
            <h3 className='maintext'>Upload X-ray Images:</h3>
                <h5 className='subtext'>Simply upload your chest X-ray images using our intuitive interface.</h5>
            <h3 className='maintext'>AI Analysis:</h3> 
                <h5 className='subtext'>Our powerful AI model scrutinizes the images, identifying potential signs of pneumonia.</h5>
            <h3 className='maintext'>Instant Results:</h3>
                <h5 className='subtext'>Get instant access to a detailed report, aiding in prompt medical decision-making.</h5>
                </div>
            </div>
        <div className='end1'>
        <h2 className='subtitle'>Empowering Your Health Journey</h2>
            <h5 className='subtext'>
                Whether you're a medical professional seeking efficient diagnostics or an individual
                curious about your health, our platform is designed for you. Empower yourself with 
                knowledge and take control of your well-being.Join us on this journey towards a healthier
                 future. Your health, our priority.
            </h5>
            </div>
        </div>
    )
}

export default Home