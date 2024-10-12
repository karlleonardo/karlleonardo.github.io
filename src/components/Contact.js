import github from '../assets/github.png'
import gmail from '../assets/gmail.png'
import linkedin from '../assets/linkedin.png'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out via email or connect with me on LinkedIn.</p>
      <ul>
        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=karlleonardo27@gmail.com" target="_blank"><img src={gmail} width={25} height={25} style={{marginRight: "10px"}}/>Gmail</a></li>
        <li><a href="https://linkedin.com/in/karl-christian-leonardo-a2b935279" target="_blank" rel="noopener noreferrer"><img src={linkedin} width={25} height={25} style={{marginRight: "10px"}}/>LinkedIn</a></li>
        <li><a href="https://github.com/karlleonardo" target="_blank" rel="noopener noreferrer"><img src={github} width={25} height={25} style={{marginRight: "10px"}}/>GitHub</a></li>
      </ul>
    </section>
  )
};
export default Contact;