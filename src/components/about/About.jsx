import './about.css';
import aboutimg from '../../img/about.jpg'
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={aboutimg} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Hello, I am currently pursuing Bachelor's degree in Computer Science.
                    I am self-motivated, passionate and eager learning about new and upcoming technologies in market.
                    I have a good understanding of C programming, Java, Python, ReactJs,etc.
                    Along with these technical skills, I have good communication skills.
                    My hobbies are swimming, football, watching movies, socializing, outings.
                </p>
            </div>
        </div>
    )
}

export default About
