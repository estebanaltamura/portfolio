import "./Welcome.css";

export const Welcome = () => {
  return (
    <div className="welcomeContainer">
      <h2 className="welcomeTitle">Welcome.</h2>
      <div className="paragraphsContainer">
        <p className="welcomeParagraphs">
          My name is Ian Dunkerley, I'm a front-end developer based in Torquay,
          Devon, UK. I have developed many types of front-ends from well know DJ
          applications to Ecommerce booking platforms.
        </p>
        <p className="welcomeParagraphs2">
          I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces
          and intuitively implemented UX.
        </p>
      </div>
    </div>
  );
};
