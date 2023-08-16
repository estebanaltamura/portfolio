import { useState } from "react";
import { FiMail, FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Header.css";

export const Header = () => {
  const [isCopyingEmailHeader, setIsCopyingEmailHeader] = useState(false);

  const copyEmailAddressHeaderClickHandler = () => {
    setIsCopyingEmailHeader(true);

    const interval = setInterval(() => {
      setIsCopyingEmailHeader(false);
      clearIntervalFunction(interval);
    }, 1500);

    const clearIntervalFunction = (intervalToClear) => {
      clearInterval(intervalToClear);
    };
  };

  return (
    <div className="headerContainer">
      <CopyToClipboard text="esteban.altamura@gmail.com">
        <button
          className="iconoMailHeader iconosHeader"
          onClick={copyEmailAddressHeaderClickHandler}
        >
          <FiMail className="iconosHeader iconoMailHeader" />
        </button>
      </CopyToClipboard>

      <a
        className="iconosHeader iconoGitHeader"
        href="https://github.com/estebanaltamura?tab=repositories"
        target="_blank"
      >
        <FiGithub className="iconoGitHeader" />
      </a>

      <a
        className="iconosHeader iconoLinkedinHeader"
        href="https://www.linkedin.com/in/andr%C3%A9s-altamura/"
        target="_blank"
      >
        <AiOutlineLinkedin className="iconosHeader iconoLinkedinHeader" />
      </a>

      <a
        className="iconosHeader iconoCVHeader"
        href="https://drive.google.com/file/d/1mtmtr9O5xsUEh-rHeL2pf0NyAr5msYuc/view?usp=sharing"
        target="_blank"
      >
        CV
      </a>
      {isCopyingEmailHeader && (
        <span className="copiedHeaderMessage">Copied!</span>
      )}
    </div>
  );
};
