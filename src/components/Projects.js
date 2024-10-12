import privateImage from '../assets/private-project.jpg'

const Projects = () => {

  let projectList = [
    {
      key: '1',
      name: 'DataMesh Fabric',
      photo: '../assets/main-bg.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      key: '2',
      name: 'DataLake Fabric',
      photo: 'assets/pexels-harold-vasquez-853421-2653362.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      key: '3',
      name: 'Credit Memo Application',
      photo: 'assets/pexels-harold-vasquez-853421-2653362.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      key: '4',
      name: 'PRIMECore',
      photo: 'assets/pexels-harold-vasquez-853421-2653362.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      key: '5',
      name: 'PRIMECore Mobile',
      photo: 'assets/pexels-harold-vasquez-853421-2653362.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      key: '6',
      name: 'Norde Intranet',
      photo: 'assets/pexels-harold-vasquez-853421-2653362.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ]

  return (
    <section id="projects">
      <h2>Projects</h2>
      <p className='description'>These are the projects I have had the privilege of contributing to, showcasing my skills and expertise in various areas of software development.</p>
      <div className="projects-container">
        {projectList.map((details) => (
          <div className="project-card" key={details.key}>
            <img src={privateImage} alt={details.name} width="100%" height={180}/>
            <h3>{details.name}</h3>
            <p>{details.description}</p>
          </div>
        ))}
      </div>
      {/* Add more projects */}
    </section>
  )
};
export default Projects;