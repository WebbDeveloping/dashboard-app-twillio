import React from 'react';
import '../../index.css';

export default function Main(props) {
  // Hiding section-a from the Main component
  var hide;
  props.hideit ? (hide = { display: 'none' }) : (hide = {});

  return (
    <main id='main'>
      {/* <!-- Section A --> */}
      <section id='section-a' className='grid' style={hide}>
        <div className='content-wrap'>
          <h2 className='content-title'>Digital Marketing Campeigns </h2>
          <div className='content-text'>
            <p>
              Social media advertising has 100% higher lead-to-close ratio that
              outbound marketing.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Section B --> */}
      <section id='section-b' className='grid'>
        <ul>
          <li>
            <div className='card'>
              <img
                src='https://static.pexels.com/photos/574077/pexels-photo-574077.jpeg'
                alt=''
              />
              <div className='card-content'>
                <h3 className='card-title'>Social Media Marketing</h3>
                <p>
                  With Facebook having over 2 billion active users & social
                  media advertising having one of the highest rutern rates in
                  marketing history, its time to jump on board.'(ill think of
                  something better)'
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className='card'>
              <img
                src='https://static.pexels.com/photos/261628/pexels-photo-261628.jpeg'
                alt=''
              />
              <div className='card-content'>
                <h3 className='card-title'>Mobile Applications</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum culpa neque quo eum et quasi velit voluptatum cum
                  maiores exercitationem.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className='card'>
              <img
                src='https://static.pexels.com/photos/265087/pexels-photo-265087.jpeg'
                alt=''
              />
              <div className='card-content'>
                <h3 className='card-title'>Tech Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum culpa neque quo eum et quasi velit voluptatum cum
                  maiores exercitationem.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* <!-- Section C --> */}
      <section id='section-c' className='grid'>
        <div className='content-wrap'>
          <h2 className='content-title'>We handle all of your digital needs</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nam
            rerum vel earum error fugiat cupiditate, dolore eius! Minus,
            explicabo.
          </p>
        </div>
      </section>

      {/* <!-- Section D --> */}
      <section id='section-d' className='grid'>
        <div className='box'>
          <h2 className='content-title'>Contact Us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
            suscipit. Rerum ducimus a quod, ut et voluptas obcaecati unde fuga.
          </p>
          <p>contact@WebbDevloping.com</p>
        </div>
        <div className='box'>
          <h2 className='content-title'>About Our Company</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            earum porro deserunt, deleniti, quae facere repudiandae, officiis
            est exercitationem nobis iusto doloremque! Soluta excepturi in aut
            suscipit amet temporibus quo?
          </p>
        </div>
      </section>
    </main>
  );
}
