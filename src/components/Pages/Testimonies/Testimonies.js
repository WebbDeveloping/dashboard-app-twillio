import React, { Component } from 'react';
import './Testimonies.css';
import '../../../index.css';
import Attribution from './Attribution';
import Main from '../../Main/Main';
import secB from '../../Main/Sections/secB';

export default class Testimonies extends Component {
  render() {
    return (
      <header id='showcase' className='grid testimonials'>
        {/* <div className='bg-image'></div> */}
        <div className='content-wrap'>
          <h1>Customer Testimonials</h1>
          <span className='wrap'>
            <section id='section-b' className='grid '>
              <ul>
                <li className='testimony-li'>
                  <div className='card testimonial'>
                    <div className='card-content'>
                      <div className='testimonail__image--wrapper'>
                        <img
                          className='testimonial__image--right-side'
                          src='https://www.hubspot.com/hubfs/caylin-white.jpeg'
                          alt=''
                        />
                      </div>
                      <p align='left'>
                        “I have been in sales and marketing for over 12 years
                        and literally have NEVER liked one of the sales CRMs
                        that I have used...and then HubSpot came along and
                        waived their magic sales wand and made a CRM that is
                        actually sales-minded and makes SENSE. We chose HubSpot
                        because we felt that their CRM could handle our leads
                        coming in seamlessly without overwhelming us. Today, we
                        truly feel organized and on top of each lead that comes
                        through. As a result, we have watched our revenue
                        reports grow and it is simply because sales are not
                        slipping through any cracks.”
                      </p>
                    </div>
                    <Attribution />
                  </div>
                </li>
              </ul>
            </section>
            <section id='section-b' className='grid'>
              <ul>
                <li className='testimony-li'>
                  <div className='card'>
                    <div className='card-content'>
                      <div className='testimonail__image--wrapper'>
                        <img
                          className='testimonial__image--left-side'
                          src='https://www.hubspot.com/hubfs/doug-dotts.jpeg'
                          alt=''
                        />
                      </div>
                      <p align='left'>
                        "Now that we have Service Hub in addition to sales and
                        marketing we’re just operating at a higher level. We’re
                        constantly sharing new metrics with leadership and all
                        our teams have a better view of the customer. With
                        Service Hub there are no more fires, lost tickets, and
                        our sales and service teams are better prepared before
                        they get on the phones with customers."
                      </p>
                    </div>
                    <Attribution />
                  </div>
                </li>
              </ul>
            </section>
            <section id='section-b' className='grid'>
              <ul>
                <li className='testimony-li'>
                  <div className='card'>
                    <div className='card-content'>
                      <div className='testimonail__image--wrapper'>
                        <img
                          className='testimonial__image--right-side'
                          src='https://www.hubspot.com/hubfs/Case_Studies/Customer_Testimonials/Tim_Nichols-168922-edited.jpg'
                          alt=''
                        />
                      </div>
                      <p align='left'>
                        "Our inbound leads have grown so dramatically from our
                        website and search optimization that we have hired a
                        dedicated sales team that now only works on inbound
                        leads. That was never the case before hosting and
                        running our website with HubSpot."
                      </p>
                    </div>
                    <Attribution />
                  </div>
                </li>
              </ul>
            </section>
            <section id='section-b' className='grid'>
              <ul>
                <li className='testimony-li'>
                  <div className='card'>
                    <div className='card-content'>
                      <div className='testimonail__image--wrapper'>
                        <img
                          className='testimonial__image--left-side'
                          src='https://www.hubspot.com/hubfs/bobby-stemper.jpg'
                          alt=''
                        />
                      </div>
                      <p align='left'>
                        "HubSpot helped us to automate our lead generation,
                        qualification, and nurturing process so that we're
                        constantly pushing leads down our funnel even when we're
                        not looking. This allows us to focus on funnel
                        optimization, content production, new initiatives, and
                        customer relationships, rather than manual daily tasks
                        and touchpoints. As a result, our marketing and sales
                        teams are more intertwined and focused on common goals
                        than ever before and we now have insight into every step
                        along a customer's journey from website visitor to
                        lifelong customer. "
                      </p>
                    </div>
                    <Attribution />
                  </div>
                </li>
              </ul>
            </section>
          </span>
          {/* <Main hideit={'anything'} /> */}
          <secB />
        </div>
      </header>
    );
  }
}
