// components/Home.jsx
import './home.css'

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="floating-bg"></div>

      <div className="home-card">
        <h1 className="home-title">Welcome to the Blog App</h1>

        <p className="home-subtitle">
          Share your ideas. Discover new voices.  
          Interact with a growing community.
        </p>

        <div className="home-divider"></div>

        <p className="home-small">
          Navigate through blogs, comment, explore users and more.
        </p>
      </div>
    </div>
  )
}

export default Home
