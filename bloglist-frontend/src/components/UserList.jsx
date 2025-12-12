import './userlist.css'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const UserList = () => {
    const users = useSelector(state => state.users)
    const { id } = useParams()

    if (!users) return null

    if (id) {
        const user = users.find(u => u.id === id)
        if (!user) return <div>Usuario no encontrado</div>

        return (
            <div className="users-page">
                <div className="users-wrapper">
                    <div className="user-card">
                        <div className="user-name">{user.name}</div>

                        <div className="user-subtitle">Blogs creados</div>

                        {user.blogs.map(blog => (
                            <div key={blog.id} className="user-blog-item">
                                {blog.title}
                            </div>
                        ))}

                        <Link to="/users">
                            <button className="user-back-btn">
                                Volver a Users
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="users-page">
            <div className="users-wrapper">
                <h2 className="users-title">Users</h2>

                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Blogs Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <Link
                                        to={`/users/${user.id}`}
                                        className="users-link"
                                    >
                                        {user.name}
                                    </Link>
                                </td>
                                <td>{user.blogs.length}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList
