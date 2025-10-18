import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi"

const FooterSection = () => {
  return (
   <footer className="bg-black text-white py-16 px-6 mt-40">
    <div className="max-w-6xl mx-auto ">
        <div className="flex justify-between items-center ">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                Shahzad Ali
            </h2>
                {/* Social Icons */}
                <div className="">
                    <h3 className="text-xl font-semibold mb-4 text-purple-200 ">
                       Connect
                    </h3>
                    <div className="flex space-x-4">
                        <a className="text-gray-700 hover:text-violet-400 trasition-colors "href="#">
                            <FiGithub className="w-6 h-6"/>
                        </a>
                        <a className="text-gray-700 hover:text-violet-400 trasition-colors "href="#">
                            <FiTwitter className="w-6 h-6"/>
                        </a>
                        <a className="text-gray-700 hover:text-violet-400 trasition-colors " href="#">
                            <FiLinkedin className="w-6 h-6"/>
                        </a>
                     </div>   

                </div>
        </div>
                    <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center  ">
                       <p className="text-gray-500 text-sm "> 
                        © 2025 - Shahzad Ali - All rights reserved.
                        </p> 
                      <div className="felx space-x-6 mt-4 md:mt-0 ">
                         <a className="text-gray-500 hover:text-white text-sm trasition-colors " href="#">
                            Privacy Policy
                         
                         </a>

                      </div>
                    </div>
    </div>

   </footer>
    
  )
}

export default FooterSection