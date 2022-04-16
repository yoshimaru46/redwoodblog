import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <p>Home</p>
      <Link to={routes.about()}>About Page</Link>
    </>
  )
}

export default HomePage
