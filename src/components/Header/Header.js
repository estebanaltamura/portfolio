import { AiOutlineLinkedin } from "react-icons/ai";

import { FiMail, FiGithub } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";


import "./Header.css"

export const Header = ()=>{

    const [isCopyingEmailHeader, setIsCopyinggEmailHeader] = useState(false)

    const copyEmailAddressHeaderClickHandler = ()=>{
        
        setIsCopyinggEmailHeader(true)
        
        const interval = setInterval(()=>{
            setIsCopyinggEmailHeader(false)
            clearIntervalFunction(interval)
        },1500)

        const clearIntervalFunction = (intervalToClear)=>{
            clearInterval(intervalToClear)
        }
        
    }
   

    return(
        <div className="headerContainer">  
             
            
                
                   
                        <CopyToClipboard text="esteban.altamura@gmail.com">
                            <button className="iconosHeader iconoMailHeader" onClick={copyEmailAddressHeaderClickHandler}>
                                <FiMail className="iconosHeader iconoMailHeader" />
                            </button>
                        </CopyToClipboard>


                        <a className="iconosHeader iconoGitHeader" href="https://github.com/estebanaltamura?tab=repositories" target="_blank">
                            <FiGithub className="iconoGitHeader" />
                        </a>

                        <a className="iconosHeader iconoLinkedinHeader" href="https://www.linkedin.com/in/andr%C3%A9s-altamura-51a55721b/" target="_blank">
                            <AiOutlineLinkedin className="iconosHeader iconoLinkedinHeader" />
                        </a>

                        <FiFileText className="iconosHeader iconoCVHeader"  />
                   
                        {
                            isCopyingEmailHeader && <span className="copiedHeaderMessage">Copied!</span>
                        }
                   
                               
        </div>
    )
}