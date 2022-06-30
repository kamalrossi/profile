import aboutpic from "./components/Access/rossi.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://kamalrossi.github.io/profile',
  title: 'Rossi Kamal',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Rossi Kamal',
  role: 'Full stack Software Engineer',
  description:'Interested in coding',

  social: {

  },
}

const projects = [
  {
    name: 'CityRide',
    description:'CityRide is a ride-sharing app with dashboard having  modules namely rider, driver, ride, cancellation and analytics.',
    stack: ['ReactJS', 'Bootstrap', 'ChartJS','D3', 'RideSharing'],
    sourceCode: 'https://kamalrossi.github.io/cityride',

  },
  
  {
    name: 'EuroSquare',
    description: 'EuroSquare is a food delivery app with  landing page and Dashboard having  modules namely menu, customer,order, review, reporting, inventory.',
       stack: ['ReactJS', 'Bootstrap', 'ChartJS','D3', 'FoodTech'],
       sourceCode: 'https://kamalrossi.github.io/eurosquare',
     
  },
  {
    name: 'MedLytics',
    description:'Medlytics is a responsive web app for analytics based Healthcare managemet. Major modules include  homescreen, services,technology, testimonial, etc.',
    stack: ['ReactJS', 'Bootstrap', 'HTML5','CSS','Medtech'],
    sourceCode: 'https://kamalrossi.github.io/medlytics',


  },
  {
    name: 'Deepon',
    description:'Deepon is an online EdTech platform with landing page, admin dashboard. Major modules include attendance, tuition, grade, teacher, student, course.',
    stack: ['ReactJS', 'Bootstrap', 'HTML5','CSS','Edtech'],
    sourceCode: 'https://kamalrossi.github.io/deepon',
  

  },
  {
    name: 'Letshopit',
    description: 'LetsShopIt is an online e-commerce platform having landing page and admin dashboard  APIs having major modules namely product, customer, analytics,order, deals, testimonials, review, rating.',
    stack: ['ReactJS', 'Bootstrap', 'HTML5','CSS','E-Commerce'],
    sourceCode: 'https://kamalrossi.github.io/letshopit',
  

  },

  {
    name: 'digiHealth',
    description: 'digiHealth is responsive web-app for  online health facilitator platform having services such as doctor appointment.  Major modules include service, department, testimonial, doctors and contact.',
    stack: ['ReactJS', 'HTML5','CSS', 'MedTech'],
    sourceCode: 'https://kamalrossi.github.io/digihealth',
    

  },

  
  
  {
    name: 'HealthVolt',
    description: 'HealthVolt is a data science platform for healthcare domains.The interactive visual graphics help manager to see most popular doctor/department, oatient admission rate, activities of different doctors/departments and order tickets. Major modules also include billing, reportnig and inventory required  in in-house clinical environment.',
    stack: ['ReactJS', 'Bootstrap', 'ChartJS','D3','MedTech'],
    sourceCode: 'https://kamalrossi.github.io/healthvolt',
    

  },
  
  
  {
    name: 'PlayMart',
    description: ' Playmart is a responsive landing page for e-commerce apps  with modules namely product, feature, recommended-deal an contacts. ',
    stack: ['ReactJS', 'HTML5','CSS', 'E-Commerce'],
    sourceCode: 'https://kamalrossi.github.io/playmart',
    

  },

 
  {
    name: 'LearnViz',
    description: '  LearnViz is a data science dashboard for student performance management/ assessment in academic school/college. Student course, grade, attendance and progress evolution is viewable with interactive visual grapichs.',
    stack: ['ReactJS', 'ChartJS','D3', 'EdTech'],
    sourceCode: 'https://kamalrossi.github.io/learnviz',
   
  },



  {
    name: 'eHealth',
    description: 'e -health is a responsive web app for online MedTech services such as doctor researvation. Major modules include about us, feature, service, frequently asked question and healthcare-schemes',
    stack: ['ReactJS', 'CSS','HTML', 'MedTech'],
    sourceCode: 'https://kamalrossi.github.io/ehealth',
    
  },

  
  {
    name: 'iKare',
    description: 'iKare is a landing page for medical service in digital platform. Responsive website contains simple modules namely homespage, service, contact,etc',
    stack: ['ReactJS', 'CSS','HTML', 'MedTech'],
    sourceCode: 'https://kamalrossi.github.io/ikare',
   
  },
  

  {
    name: '2RLY',
    description: ' 2RLY is a landing page for responsive e-commerce apps with simple banner and product recommendations. Major modules include product, product-detail, deal, cart, contact. ',
    stack: ['ReactJS', 'CSS','HTML', 'E-Commerce'],
    sourceCode: 'https://kamalrossi.github.io/toorly',
   
  },

  {
    name: 'iHealth',
    description: ' i-health is a responsive web app for analytics based healthcare services. The software includes major modules such as about us, service, technology, plans.',
    stack: ['ReactJS', 'CSS','HTML', 'MedTech'],
    sourceCode: 'https://kamalrossi.github.io/ihealth',
 
  },


  {
    name: 'eKare',
    description: ' eKare is a landing page for hospital management in digital platform.The modules include homespage, service, feature, about us, hosipital plan and testimonial',
    stack: ['ReactJS', 'CSS','HTML', 'MedTech'],
    sourceCode: 'https://kamalrossi.github.io/ekare',
 
  },
  {
    name: 'EduPlanet',
    description: '   EduPlanet is a responsive admin dashboard to manage regular academic activiies in a school/college environment. Major modules include student, teacher, attendance, tuition, courses, reporting etc.',
    stack: ['ReactJS', 'Bootstrap','ChartJS', 'EdTech'],
    sourceCode: 'https://kamalrossi.github.io/eduplanet',
    
  },
  {
    name: 'HealthAnalytics',
    description: '  HealthAnalytics is  responsive dashboard which helps clinicians to visualize an manage hospital acitivies. Major modules involve doctor, patient, appointment, department, billing, inventory, etc. Doctors are able to visualize patient admission, revenue earning, department activites and event appointment notifications through interactive visual graphics.',
    stack: ['ReactJS', 'Bootstrap','ChartJS', 'D3JS','MedTech'],
    sourceCode: 'https://kamalrossi.github.io/healthanalytics',
    
  },

 



 




 
]

const skills = [
  'HTML5',
  'CSS',
  'JavaScript',
  'Bootstrap',
  'Express',
  'React',
  'React-Native',
  'Git',
  'MERN',
  'MySQL',
  'Mongo',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rossikamal@gmail.com.com',
}
export { header, about, projects, skills, contact }
