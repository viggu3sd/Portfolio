
import Link from 'next/link';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <span className="font-bold text-xl">YourName</span>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#interests" className="hover:text-blue-500">Interests</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#experiences" className="hover:text-blue-500">Experience</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
