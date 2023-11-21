import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div style={{marginTop:'130px'}}>
      <header id='head'>
    <h1>Welcome to the World of Technical Training</h1>
  </header>

  <section class="job-description">
    <h2>Job Description</h2>
    <p>
      Technical trainers play a crucial role in educating individuals or teams on various technical topics.
      They are responsible for delivering training sessions, creating instructional materials, and ensuring
      that participants grasp complex technical concepts.
    </p>
    <p>
      As a technical trainer, you will have the opportunity to impart knowledge on programming languages,
      software development methodologies, IT infrastructure, and other relevant technologies.
    </p>
  </section>

  <section class="responsibilities">
    <h2>Key Responsibilities</h2>
    <ul>
      <li>Conducting training sessions on technical subjects.</li>
      <li>Creating and updating training materials, including presentations and documentation.</li>
      <li>Adapting training content to meet the needs of diverse audiences.</li>
      <li>Assessing the effectiveness of training programs and making improvements as needed.</li>
      <li>Staying current with industry trends and updates to ensure the relevance of training content.</li>
    </ul>
  </section>

  <section class="requirements">
    <h2>Requirements</h2>
    <p>
      To excel in this role, you should possess the following:
    </p>
    <ul>
      <li>A deep understanding of the technical subject matter.</li>
      <li>Excellent communication and presentation skills.</li>
      <li>Experience in designing and delivering technical training programs.</li>
      <li>Patience and the ability to adapt teaching methods to different learning styles.</li>
      <li>A passion for continuous learning and professional development.</li>
    </ul>
  </section>
  <hr></hr>

  <footer>
    <p>Apply today and become a part of the exciting field of technical training!</p>
  </footer>
    </div>
  )
}

export default Home