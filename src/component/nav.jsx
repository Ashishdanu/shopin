import "../styles/nav.css"

const Nav = () => {
  return (
    <>
      <section className="Container">
        <nav id="nav-bar">
          <div id="nav-left">
            <a href="#">About </a>
            <a href="#">Store</a>
          </div>
          <div id="nav-right">
            <a href="#">Gmail</a>
            <a href="#">Images</a>
            <a href="#">icon</a>
            <a href="#">icon</a>
            <img src="" alt="" />{" "}
          </div>
        </nav>
      </section>
    </>
  );
};

export default Nav;
