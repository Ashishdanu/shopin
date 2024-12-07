import "../styles/main.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
const Main = () => {
  return (
    <>
      <section className="Container">
        <div id="main">
          <h1>Google</h1>

          <div id="input">
            
            <MagnifyingGlassIcon id="input-icon" />

            <input type="search" />
          </div>

          <div id="mid-area">
            <strong>Google Search</strong>
            <strong>I'm Feeling Lucky</strong>
          </div>

          <div id="languages">
            <div id="left">
              <p>Google offered in :</p>
            </div>
            <div id="right">
              <p>lang1</p>
              <p>lang2</p>
              <p>lang3</p>
              <p>lang4</p>
              <p>lang5</p>
              <p>lang6</p>
              <p>lang7</p>
              <p>lang8</p>
              <p>lang9</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
