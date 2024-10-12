import { Tree, Collapse, Steps } from 'antd';
import {
  DownOutlined,
  FrownFilled,
  FrownOutlined,
  MehOutlined,
  SmileOutlined
} from '@ant-design/icons';


const skillSet = [
  'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Angular', 'React Native', 'Node.js', 'AWS', 'Figma', 'Adobe XD'
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="skill-header">
        <h2>Experience & Skills</h2>
        <p>My professional experience and the the diverse skill set I've honed over the years.</p>
      </div>
      <div className="container">
        <div className="experience">
          <h4>EXPERIENCE</h4>
          <Steps
            direction="vertical"
            progressDot
            items={[
              {
                title: 'Software Engineering Senior Analyst',
                subTitle: '(Sept 2022 - Present)',
                description: 'Accenture Inc.',
              },
              {
                title: 'Software Engineering Analyst',
                subTitle: '(March 2021 - August 2021)',
                description: 'Accenture Inc.',
              },
              {
                title: 'Web Developer',
                subTitle: '(July 2018 - August 2020)',
                description: 'PRIME Philippines.',
              },
              {
                title: 'Web Developer - Internship',
                subTitle: '(June 2017 - September 2017)',
                description: 'Bluebell Commodities Inc.',
              }
            ]}
          />
        </div>
        <div className="skills">
          <h4>SKILLS</h4>
          {
            skillSet.map((skill) => (
              <div key={skill} className='skill-item'>{skill}</div>
            ))
          }
        </div>
      </div>
    </section>
  )
};
export default Skills;