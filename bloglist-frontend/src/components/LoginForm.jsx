import './LoginForm.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../reducers/userReducer'
import loginService from '../services/login'
import blogService from '../services/blogs'
import { setNotification } from '../reducers/notificationReducer'
import { Form } from 'react-bootstrap'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password,
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      dispatch(setUser(user))
      blogService.setToken(user.token)
      setUsername('')
      setPassword('')
      navigate('/')
    } catch (exception) {
      dispatch(setNotification('Wrong credentials', 'error', 5))
    }
  }

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-title">Login</div>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label className="login-label">Username</Form.Label>
            <Form.Control
              className="login-input"
              type="text"
              placeholder="Enter username"
              value={username}
              data-testid="username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="login-label">Password</Form.Label>
            <Form.Control
              className="login-input"
              type="password"
              placeholder="Enter password"
              value={password}
              data-testid="password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </Form.Group>

          <button className="login-button" type="submit">
            Login
          </button>

          <button
            type="button"
            className="login-cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </Form>
      </div>
    </div>
  )
}

export default LoginForm
