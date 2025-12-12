import './user.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom'

const User = (props) => {
    const { id } = useParams()
    const users = useSelector(state => state.users)
    const navigate = useNavigate()

    let user = props.user
    if (!user && id) {
        user = users.find(u => u.id === id)
    }

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user, navigate])

    if (!user) return null

    return (
        <div className="user-page">
            <div className="user-wrapper">
                <div className="user-card">
                    <div className="user-name">{user.name}</div>

                    <div className="user-subtitle">Blogs creados</div>

                    {user.blogs.map(blog => (
                        <div key={blog.id} className="user-blog-item">
                            <Link
                                to={`/blogs/${blog.id}`}
                                className="user-blog-link"
                            >
                                {blog.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default User
