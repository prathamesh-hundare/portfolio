import React from 'react';
import './work.scss';
import i3 from '../../img/web3.png'
import i4 from '../../img/web4.png'

export default function Work() {
  return <div className='work' id='work'>
    <div className="wktexts">
      <h1 className="wktitle">
        Create & Inspire. It's Us..!
      </h1>
      <p className='wkdesc'>
        This is a creative portfolio that your work has been waiting for.
        Beautiful designs, stunning portfolio styles & a whole lot more awaits
        inside. 
      </p>
      <p className='eg'><i>Some of my designs :</i></p>
    </div>
    <div className="wklist">
    

  <div className='p'>
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <p>Adidas Shop</p>
        </div>
        <img src={i3} alt="" className='p-img'/>
  </div>

  <div className='p'>
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <p>Waggers</p>
        </div>
        <img src={i4} alt="" className='p-img'/>
  </div>
    </div>
  </div>;
}
