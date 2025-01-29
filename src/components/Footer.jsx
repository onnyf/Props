import { Link } from "react-router-dom"


const Footer = () => {
  return (
<footer className="bg-blue-950 flex items-center justify-around p-20 text-white ">
<div>
    <h3 className="font-bold text-md mb-3">Solutions</h3>
    <ul className="space-y-2">
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'/blogss'}>Blogss</Link>
        </li>
        <li>
            <Link to={'/create'}>Add Blog</Link>
        </li>
        <li>
            <Link to ={'/register'}>Register</Link>
        </li>
        <li>Insights</li>
    </ul>
</div>
<div>
    <h3 className="font-bold text-md mb-3">Support</h3>
    <ul className="space-y-2">
        <li>Submit ticket</li>
        <li>Documentation</li>
        <li>Guides</li>
    </ul>
</div>
<div>
    <h3 className="font-bold text-md mb-3">Company</h3>
    <ul className="space-y-2">
        <li>About</li>
        <li>Blogs</li>
        <li>Jobs</li>
        <li>Press</li>
        
    </ul>
</div>
<div>
    <h3 className="font-bold text-md mb-3">Legal</h3>
    <ul className="space-y-2">
<li>Terms of service</li>
<li>Privacy policy</li>
<li>License</li>
    </ul>
</div>
</footer>
  )
}

export default Footer