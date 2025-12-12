import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { createBlog } from '../reducers/blogReducer'
import { Form } from 'react-bootstrap'
import './blogForm.css'

const BlogForm = () => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const dispatch = useDispatch()

  const addBlog = async (event) => {
    event.preventDefault()
    try {
      await dispatch(createBlog({
        title: newTitle,
        author: newAuthor,
        url: newUrl,
      }))

      dispatch(setNotification(`blog ${newTitle} created`, 'success', 5))

      setNewTitle('')
      setNewAuthor('')
      setNewUrl('')
    } catch (error) {
      dispatch(setNotification(error.response?.data?.error || 'Error al agregar blog', 'error', 5))
    }
  }

  return (
    <div className="blogform-card">
      <h2 className="blogform-title">Create a New Blog</h2>

      <Form onSubmit={addBlog}>
        <Form.Group className="mb-3">
          <Form.Label className="blogform-label">Title</Form.Label>
          <Form.Control
            className="blogform-input"
            type="text"
            placeholder="Enter blog title"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="blogform-label">Author</Form.Label>
          <Form.Control
            className="blogform-input"
            type="text"
            placeholder="Enter author name"
            value={newAuthor}
            onChange={(event) => setNewAuthor(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="blogform-label">URL</Form.Label>
          <Form.Control
            className="blogform-input"
            type="text"
            placeholder="Enter blog URL"
            value={newUrl}
            onChange={(event) => setNewUrl(event.target.value)}
          />
        </Form.Group>

        <button className="blogform-button" type="submit">
          Save
        </button>
      </Form>
    </div>
  )
}

export default BlogForm
