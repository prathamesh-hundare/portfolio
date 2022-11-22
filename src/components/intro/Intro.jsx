import "./intro.css";
import Me from '../../img/me.png'
import Down from '../../img/down.png'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name">Prathaemsh Hundare</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front-End Web Developer</div>
              <div className="i-title-item">Problem Solver</div>
              <div className="i-title-item">Good Logical Thinker</div>
              <div className="i-title-item">Interactive</div>
              <div className="i-title-item">And Much More...</div>
            </div>
          </div>
          <p className="i-desc">
                I am a goal-oriented person. Sarcastic and interactive in nature.
                Like to keep myself and others around me happy and energetic.
            </p>
            <img src={Down} alt="" className="down"/>
        </div>
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
