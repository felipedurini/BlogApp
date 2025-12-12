import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import blogService from './services/blogs'
import userService from './services/users'

import Home from './components/Home'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogList from './components/BlogList'
import UserList from './components/UserList'
import Blog from './components/Blog'
import User from './components/User'
import NavigationBar from './components/NavigationBar'   

import { initializeBlogs } from './reducers/blogReducer'
import { initializeUsers } from './reducers/usersReducer'
import { setUser } from './reducers/userReducer'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  
  useEffect(() => {
    blogService.getAll().then(blogs => {
      dispatch(initializeBlogs(blogs))
    })
  }, [dispatch])
  
  useEffect(() => {
    userService.getAll().then(users => {
      dispatch(initializeUsers(users))
    })
  }, [dispatch])
  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
      blogService.setToken(user.token)
    }
  }, [dispatch])
  
  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    blogService.setToken(null)
    dispatch(setUser(null))
  }
  return (
    <>
    <NavigationBar user={user} handleLogout={handleLogout} />
    
    <Notification />
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/blogs" element={user ? <BlogList /> : <LoginForm />} />
    <Route path="/blogs/:id" element={user ? <Blog /> : <LoginForm />} />
    <Route path="/users" element={user ? <UserList /> : <LoginForm />} />
    <Route path="/users/:id" element={user ? <User /> : <LoginForm />} />
    </Routes>
    
    </>
  )
  
}

export default App
