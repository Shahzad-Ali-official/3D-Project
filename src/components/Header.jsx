import { motion , AnimatePresence} from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX  } from "react-icons/fi";
import { useState } from "react";

const Header = ({ openContactForm, contactForm, closeContactForm }) => {
//Toggle menu
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
  setIsOpen(!isOpen);
};

// Form state
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(form)).toString(),
  })
    .then(() => closeContactForm())
    .catch((error) => alert(error));
};



  return (
    <header className="absolute w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20" >
          {/* Logo Section */}
          <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,


          }}
          className="flex items-center">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-2xl mr-3 " >
                S
                </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                    Shahzad Ali
                  </span>


          </motion.div>
          {/* Desktop Nav */}
          <nav  className="lg:flex hidden space-x-8 ">
            {["Home","About","Projects","Experience"].map((item, index) => (
              <motion.a key={item} 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type:"spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
                //duration: 1.2,
              }}
               className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                href={`#${item.toLowerCase()}`}>
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300">

                  </span>
                </motion.a>
            ))}
            <motion.a key="Contact"
              onClick={openContactForm}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type:"spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + 4 * 0.2,
              }}
              className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group cursor-pointer"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>

          </nav>

          {/* Social Icons deskstop */}
             <div className="md:flex hidden items-center space-x-4">
               <motion.a
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.8}}
               className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="https://github.com/Shahzad-Ali-official" target="_blank" rel="noopener noreferrer">
                <FiGithub className=" w-5 h-5 "/>

               </motion.a>
               <motion.a
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.8}}
               className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="https://www.linkedin.com/in/shahzadali3395/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className=" w-5 h-5 "/>

               </motion.a>
               <motion.a
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.8}}
               className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="#" target="_blank" rel="noopener noreferrer">
                <FiTwitter className=" w-5 h-5 "/>

               </motion.a>

          {/* hire Me Button */}
          <motion.button
          onClick={openContactForm}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
          className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500">
                Hire Me
          </motion.button>
         </div>
          {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <motion.button 
              whileTap={{ scale: 0.7}}
              onClick={toggleMenu} className="text-gray-300">
                {isOpen ? <FiX className="w-6 h-6"/> : <FiMenu className="w-6 h-6"/>}
              </motion.button>
            </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0,
             height: isOpen ? "auto" : 0 }}
          
          transition={{ duration: 0.5 }}
          className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-4"
        >
          <nav className="flex flex-col items-center space-y-3 py-6">
            {["Home", "About", "Projects", "Experience"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={toggleMenu} className="text-gray-300 hover:text-violet-400 text-lg font-medium py-1.5">
                {item}
              </a>
            ))}
            <a
              key="Contact"
              onClick={() => {
                toggleMenu();
                openContactForm();
              }}
              className="text-gray-300 hover:text-violet-400 text-lg font-medium py-1.5 cursor-pointer">
              Contact
            </a>
            </nav>
            {/* Social Icons Mobile */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col items-center">
              <div className="flex space-x-6">

              <a className="text-gray-300 hover:text-violet-400" href="https://github.com/Shahzad-Ali-official" target="_blank" rel="noopener noreferrer">
                <FiGithub className="w-6 h-6" />
              </a>
              <a className="text-gray-300 hover:text-violet-400" href="https://www.linkedin.com/in/shahzadali3395/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a className="text-gray-300 hover:text-violet-400" href="#" target="_blank" rel="noopener noreferrer">
                <FiTwitter className="w-6 h-6" />
              </a>
            </div>
            {/* Hire Me Button Mobile */}
            <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-5 px-6 py-2 rounded-lg text-lg bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500">
              Hire Me
            </button>
          </div>
        </motion.div>
      )}
    <AnimatePresence>

     { contactForm && (
       <motion.div
       initial={{ opacity:0}}
       animate={{ opacity:1}}
       exit={{opacity:0}}
       transition={{ duration: 0.5 }}
       className="fixed inset-0 bg-black/50 background-blur-sm flex items-center justify-center z-50 p-4"
       
       > 
      <motion.div 
      initial={{ scale: 0.8, opacity: 0, y:30}}
      animate={{ scale: 1, opacity: 1, y:0}}
      exit={{ scale: 0.8, opacity: 0, y:30}}
      transition={{
        type: "spring",
        damping:30,
        stiffness:200,
          duration: 0.8
      }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-300 ">
              Get In Touch
            </h1>
            <button onClick={closeContactForm}>
              <FiX className="w-5 h-5 font-extrabold text-gray-300"/>

            </button>

          </div>
          {/* Form */}
          <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4 ">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 ">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700" required/>

              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 ">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700" required/>

              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 ">Message</label>
                <textarea rows={4} id="message" name="message" value={formData.message} onChange={handleChange} placeholder="How can i help you?" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700" required/>

              </div>
              <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              
              className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg  hover: shadow-violet-600/50 ">
                 Send Message
              </motion.button>

          </form>


         </motion.div>
        </motion.div>
    
        )}
    </AnimatePresence>


    </header>
  )
}

export default Header