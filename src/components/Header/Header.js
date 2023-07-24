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
          className="iconosHeader iconoMailHeader"
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
        href="https://www.linkedin.com/in/andr%C3%A9s-altamura-51a55721b/"
        target="_blank"
      >
        <AiOutlineLinkedin className="iconosHeader iconoLinkedinHeader" />
      </a>

      <a
        className="iconosHeader iconoCVHeader"
        href="https://drive.google.com/file/d/1mqALxOX5sEzCZvFaSaormUEwuzu_eV3z/view?usp=share_link"
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
