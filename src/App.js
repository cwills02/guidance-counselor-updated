import { useState } from 'react'
import { jobsData } from './JobsData'
import './App.css';
import JobList from './JobList';

function App() {
  const [jobs, setJobs] = useState(jobsData)
  const [searchInput, setSearchInput] = useState('')

  const searchInputChangeHandler = (e) => {
    setSearchInput(e.target.value)
  }

  let showJobs = (searchInput === '') ? jobs : jobs.filter(j => j.jobTitle.toLowerCase().includes(searchInput))

  return (
    <div className="App">
      <h1>Fastest Growing Occupations</h1>
      <p>(according to BLS)</p>
      <input 
        placeholder='Search jobs' 
        value={searchInput}
        onChange={searchInputChangeHandler}
      />
      <ol style={{listStyle: 'none', paddingLeft: '0px'}}>
        {
          showJobs.map(job => {
            return (
              <li key={job.jobRank}>
                <h3>{job.jobRank}. {job.jobTitle}</h3>
                <img className='thumbnail' src={job.jobImage} alt={job.jobTitle} />
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
