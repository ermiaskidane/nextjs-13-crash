// note that we could put this at any page
// does not have to be at layout
export const metadata = {
  title: 'About Traversy',
}

const AboutLayout = ({ children }) => {
  return (
    <div>
      <h1>THIS IS THE ABOUT LAYOUT</h1>
      {children}
    </div>
  )
}

export default AboutLayout
