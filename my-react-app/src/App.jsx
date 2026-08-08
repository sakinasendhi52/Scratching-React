// Import the main CSS file
import './App.css'

// Import all components
import Header from './components/Header'
import Footer from './components/Footer'
import WelcomeSection from './components/WelcomeSection'
import RestAndSpreadOperator from './components/RestAndSpreadOperator'
import StudentCard from './components/StudentCard'

// Import State components
import StringState from './components/StringState'
import NumberState from './components/NumberState'
import BoolState from './components/BoolState'
import ArrayState from './components/ArrayState'
import ObjectState from './components/ObjectState'

// Import Student Information component
import StudentInformation from './components/StudentInformation'


// Main App Component
function App() {

  return (
    <>

      {/* Header Component */}
      <Header/>


      {/* Task 1 & Task 2 - JSX and Components */}
      <WelcomeSection/>


      {/* Task 3 - Rest and Spread Operator */}
      <RestAndSpreadOperator/>


      {/* =================================
          TASK 4 - PROPS
      ================================= */}

      <div className='center-align'>

        {/* Task heading */}
        <h2 className="task">
          Task : Props
        </h2>

        {/* Container for all Student Cards */}
        <div className=' studentCards'>

          {/* Student Card 1 */}
          <StudentCard
            id="101"
            name="Robert Davis"
            city="Toronto"
            state="Ontario"
            country="Canada"
            course="Full Stack Development"
          />

          {/* Student Card 2 */}
          <StudentCard
            id="102"
            name="Emma Johnson"
            city="Los Angeles"
            state="California"
            country="USA"
            course="Database Management System"
          />

          {/* Student Card 3 */}
          <StudentCard
            id="103"
            name="Hannah Lewis"
            city="London"
            state="England"
            country="United Kingdom"
            course="Cloud Computing"
          />

          {/* Student Card 4 */}
          <StudentCard
            id="104"
            name="David Johnson"
            city="Vancouver"
            state="British Columbia"
            country="Canada"
            course="Machine Learning"
          />

          {/* Student Card 5 */}
          <StudentCard
            id="105"
            name="Joseph Anderson"
            city="Melbourne"
            state="Victoria"
            country="Australia"
            course="Cyber Security"
          />

        </div>
      </div>


      {/* =================================
          TASK 5 - useState
      ================================= */}

      <div className="center-align">

        {/* Task heading */}
        <h2 className="task">
          Task : State (useState)
        </h2>


        {/* Table displaying different types of State */}
        <table className="stateTable">

          {/* Table Header */}
          <thead>
            <tr>
              <th>State</th>
              <th>Value</th>
              <th>Action</th>
            </tr>
          </thead>


          {/* Table Body */}
          <tbody>

            {/* String State */}
            <StringState />

            {/* Number State */}
            <NumberState />

            {/* Boolean State */}
            <BoolState />

            {/* Array State */}
            <ArrayState />

            {/* Object State */}
            <ObjectState />

          </tbody>

        </table>

      </div>


      {/* =================================
          TASK 6 - useEffect & Local Storage
      ================================= */}

      <div className="center-align">

        {/* Task heading */}
        <h2 className="task">
          Task : useEffect & Local Storage
        </h2>

        {/* Student Information Manager */}
        <StudentInformation/>

      </div>


      {/* Footer Component */}
      <Footer/>

    </>
  )
}


// Export App component
export default App