import { useState } from 'react'
import './App.css';
import JobList from './JobList';

const jobList = [
  {
    jobRank: 1,
    jobTitle: 'Nurse practitioners',
    growthRate: 46,
    medianSalary: '$120,680',
    jobImage: 'https://www.stkate.edu/sites/default/files/2022-07/nurse_practitioner_pediatric.jpg'
  },
  {
    jobRank: 2,
    jobTitle: 'Wind turbine service technicians',
    growthRate: 44,
    medianSalary: '$56,260',
    jobImage: 'https://skillpointe.com/sites/default/files/styles/1200_x_530_banner/public/2020-08/Wind%20turbine%20technician.jpg?itok=OGmQ-t3y'
  },
  {
    jobRank: 3,
    jobTitle: 'Ushers, lobby attendants, and ticket takers',
    growthRate: 41,
    medianSalary: '$24,440',
    jobImage: 'https://images.forbes.com/media/2007/06/04/worstpaid_10.jpg'
  },
  {
    jobRank: 4,
    jobTitle: 'Motion picture projectionists',
    growthRate: 40,
    medianSalary: '$29,350',
    jobImage: 'https://www.owlguru.com/wp-content/uploads/wpallimport/files/motion-picture-projectionists/__(1).jpg'
  },
  {
    jobRank: 5,
    jobTitle: 'Cooks, restaurant',
    growthRate: 37,
    medianSalary: '$30,010',
    jobImage: 'https://blog.chefworks.com/uniforms/wp-content/uploads/2015/12/image001.jpg'
  }
]

function App() {
  const [jobs, setJobs] = useState(jobList)
  const [searchInput, setSearchInput] = useState('')

  const searchInputChangeHandler = (e) => {
    setSearchInput(e.target.value)
  }

  let showJobs = (searchInput === '') ? jobs : jobs.filter(j => j.jobTitle.toLowerCase().includes(searchInput))

  return (
    <div className="App">
      <h1>Fastest Growing Occupations</h1>
      <input 
        placeholder='Search jobs' 
        value={searchInput}
        onChange={searchInputChangeHandler}
      />
      <p>(according to BLS)</p>
      <ol style={{listStyle: 'none', paddingLeft: '0px'}}>
        {
          showJobs.map(job => {
            return (
              <li key={job.jobRank}>
                <h3>{job.jobRank}. {job.jobTitle}</h3>
                <img className='thumbnail' src={job.jobImage} />
                <h5>Growth Rate: {job.growthRate}%</h5>
                <h6>Median Salary {job.medianSalary}</h6>
              </li>
            )
        })}
      </ol>
    </div>
  );
}

export default App;
