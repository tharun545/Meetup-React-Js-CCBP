import {Link} from 'react-router-dom'

import RegisterContext from '../../context/RegisterContext'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        inputName,
        meetingMsg,
        onClickMeetingName,
        onClickChangeName,
        onChangeEmpty,
        isEmpty,
      } = value

      const getInputName = e => {
        onClickChangeName(e)
      }

      const getMeetingName = e => {
        onClickMeetingName(e)
      }

      const onClickGotoHome = event => {
        event.preventDefault()
        const {history} = props
        history.replace('/')
        onChangeEmpty(event)
      }

      const onBlurName = e => {
        onChangeEmpty(e)
      }

      return (
        <div className="register-container">
          <nav className="nav-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </nav>
          <div className="register-body-card">
            <div className="register-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="register-image"
              />
              <div>
                <h1>Let us join</h1>
                <form className="form-control" onSubmit={onClickGotoHome}>
                  <label htmlFor="name">NAME</label>
                  <input
                    type="text"
                    id="name"
                    value={inputName}
                    onChange={getInputName}
                    placeholder="Your name"
                    onBlur={onBlurName}
                  />
                  <label htmlFor="topic">TOPIC</label>
                  <select
                    id="topic"
                    value={meetingMsg}
                    onChange={getMeetingName}
                  >
                    {topicsList.map(each => (
                      <option key={each.id} value={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                  <Link to="/">
                    <button type="submit" className="register-btn">
                      Register Now
                    </button>
                    {isEmpty ? <p>Please enter your name </p> : null}
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)
export default Register
