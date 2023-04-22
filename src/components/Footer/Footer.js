import { chosenProjectContext } from "../contexts/ChosenProject"
import { useContext } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillCopy } from "react-icons/ai";
import { FiMail, FiGithub } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";





import { useState } from "react";




import "./Footer.css"

export const Footer = ()=>{

    const {currentProject} = useContext(chosenProjectContext)

    const [isCopying, setIsCopying] = useState(false)

    const copyEmailAddressClickHandler = ()=>{
        
        setIsCopying(true)
        
        const interval = setInterval(()=>{
            setIsCopying(false)
            clearIntervalFunction(interval)
        },1500)

        const clearIntervalFunction = (intervalToClear)=>{
            clearInterval(intervalToClear)
        }
        
    }
    

    return(
        <div className={currentProject.name == "" ? "footerContainerWelcome" : "footerContainerProjects"}>
            <div className="line"></div>
            <div className="contactFooterGrid">
                {
                    isCopying == false ?
                        <CopyToClipboard text="esteban.altamura@gmail.com">
                            <button className="footerContact footerMail" onClick={copyEmailAddressClickHandler}>
                                esteban.altamura@gmail.com
                                <AiFillCopy className="footerMailCopyIcon" />
                            </button>
                        </CopyToClipboard>
                                        :
                        <p className="copiedMessage">Copied!</p>
                }
                

                <span className="footerDivider">|</span>

                <a className="footerContact  footerGit" href="https://github.com/estebanaltamura?tab=repositories" target="_blank">
                    <FiGithub className="footerGitIcon" />
                    GitHub
                </a>

                <span className="footerDivider">|</span>

                <a className="footerContact  footerLinkedin" href="https://www.linkedin.com/in/andr%C3%A9s-altamura-51a55721b/" target="_blank">
                    <AiOutlineLinkedin className="footerLinkedinIcon"  />
                    Linkedin
                </a>
                
                <span className="footerDivider">|</span>

                <a className="footerContact  footerCV" href="https://drive.google.com/file/d/1mqALxOX5sEzCZvFaSaormUEwuzu_eV3z/view?usp=share_link" target="_blank">
                    <FiFileText className="footerCVIcon"  />
                    Curriculum Vitae
                </a>

            </div>
        </div>
    )
}