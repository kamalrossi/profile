import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const {photo,name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {photo && (
       <img height="70px" alt="Rossi Kamal" src={photo} />
      )}
     
      <p className='about__desc'>Experienced Software Engineer with interest for React/React-Native based
      Web and Mobile Apps </p>

      <div className='about__contact center'>
     
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}
        
         {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          
          </>
        )}
      </div>
    </div>
  )
}

export default About
