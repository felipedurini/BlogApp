import './bloglist.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import { useRef } from 'react'

const BlogList = () => {
    const blogsToShow = useSelector(state => state.blogs)
    const blogFormRef = useRef()

    const blogForm = () => (
        <Togglable buttonLabel="New Blog" ref={blogFormRef}>
            <BlogForm />
        </Togglable>
    )

    return (
        <div className="bloglist-page">
            <div className="bloglist-wrapper">
                <h2 className="bloglist-title">Blogs</h2>

                <div className="bloglist-newblog-container">
                    {blogForm()}
                </div>

                <div>
                    {blogsToShow.map(blog => (
                        <div key={blog.id} className="bloglist-item">
                            <Link to={`/blogs/${blog.id}`} className="bloglist-link">
                                {blog.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogList
