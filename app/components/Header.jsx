import Link from 'next/link'
// note that this is react server component
//  not React client components
const Header = () => {
  return (
    <div>
      <header className='header'>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>Traversy media</Link>
          </div>
          <div className='links'>
            <Link href='/about'>About</Link>
            <Link href='/about/team'>Our Team</Link>
            <Link href='/code/repos'>Code</Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
