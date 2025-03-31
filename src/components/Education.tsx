import React from 'react';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan. 2023 - Jun. 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Master's in Software Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Blekinge Institute of Technology
            </h4>
            <h6 className="vertical-timeline-element-subtitle">
              Karlskrona, Sweden
            </h6>
            <p>
              <b>Achievements:</b> Awarded BTH Scholarship for academic
              excellence.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug. 2019 - Jan. 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor's in Computer Science & Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              JNTUH College of Engineering Hyderabad
            </h4>
            <h6 className="vertical-timeline-element-subtitle">
              Hyderabad, India
            </h6>
            {/* <p>
              Python, Numpy, Pandas, Data Analysis, MySQL, Jenkins, Gerrit,
              Grafana
            </p> */}
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan. 2024 - Jun. 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Master Thesis Student
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Scania CV AB</h4>
            <h6 className="vertical-timeline-element-subtitle">
              Södertälje, Sweden
            </h6>
            <p>
              Playwright, Tricentis Tosca, RoboCorp, UFT One, Python, JavaScript
            </p>
          </VerticalTimelineElement> */}
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug. 2022 - Jan. 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Centella Scientific Solutions Pvt. Ltd.
            </h4>
            <h6 className="vertical-timeline-element-subtitle">
              Hyderabad, India
            </h6>
            <p>
              Reactjs, TypeScript, Tailwind CSS, Nodejs, Express, MongoDB, AWS,
              Ansible, GitHub
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
