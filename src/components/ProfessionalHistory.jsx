import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Bounce, Zoom } from 'react-awesome-reveal';

const ProfessionalHistory = () => {
  return (
    <>
    <Bounce>
        <div className="text-center mt-5">
          <h2 className="fw-bold display-6 beforeSubHeader">Professional History</h2>
          <p className="font-monospace fs-4">View the full details on <a href="https://www.linkedin.com/in/ktlauer/">LinkedIn</a>.</p>
        </div>
        </Bounce>
        <Zoom>
        <VerticalTimeline className="mt-3 mb-5" layout={'2-columns'} lineColor={"lightgrey"}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#a300cc', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #a300cc' }}
              date="August 2024 - Present"
              dateClassName={ "dateColor" }
              iconStyle={{ background: '#a300cc', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title"><strong>Freelance Software Developer</strong></h3>
              <h5 className="vertical-timeline-element-subtitle mt-2 font-monospace"><strong>Kevin Lauer Digital</strong> | Chicago, IL</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#8c8c8c', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #8c8c8c' }}
              date="January 2023 - August 2024"
              dateClassName={ "dateColor" }
              iconStyle={{ background: '#8c8c8c', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title"><strong>Tech Consultant - Supply Chain</strong></h3>
              <h5 className="vertical-timeline-element-subtitle mt-2 font-monospace"><strong>Ernst & Young (EY)</strong> | Chicago, IL</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#404040', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #404040' }}
              date="August 2019 - December 2022"
              dateClassName={ "dateColor" }
              iconStyle={{ background: '#404040', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title"><strong>College Graduation - Industrial Engineering</strong></h3>
              <h5 className="vertical-timeline-element-subtitle mt-2 font-monospace"><strong>Bradley University</strong> | Peoria, IL</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#a300cc', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #a300cc' }}
              date="May 2022 - August 2022"
              dateClassName={ "dateColor" }
              iconStyle={{ background: '#a300cc', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title"><strong>Software Development Intern</strong></h3>
              <h5 className="vertical-timeline-element-subtitle mt-2 font-monospace"><strong>Uline</strong> | Pleasant Prairie, WI</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#7a0099', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #7a0099' }}
              date="December 2020 - May 2022"
              dateClassName={ "dateColor" }
              iconStyle={{ background: '#7a0099', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title"><strong>Software Development Intern</strong></h3>
              <h5 className="vertical-timeline-element-subtitle mt-2 font-monospace"><strong>Caterpillar</strong> | East Peoria, IL</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#8c8c8c', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #8c8c8c' }}
              date="October 2020 - December 2020"
              dateClassName={ "dateColor" }
              iconStyle={{ background: '#8c8c8c', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title"><strong>Data Analytics Intern</strong></h3>
              <h5 className="vertical-timeline-element-subtitle mt-2 font-monospace"><strong>Caterpillar</strong> | Morton, IL</h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#404040', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #404040' }}
              date="March 2020 - October 2020"
              dateClassName={ "dateColor" }
              iconStyle={{ background: '#404040', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title"><strong>Industrial Engineering Intern</strong></h3>
              <h5 className="vertical-timeline-element-subtitle mt-2 font-monospace"><strong>Synergetic Industries</strong> | Morton, IL</h5>
            </VerticalTimelineElement>
          </VerticalTimeline></Zoom>
    </>
  );
};

export default ProfessionalHistory;
