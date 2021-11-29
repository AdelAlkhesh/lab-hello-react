function NavBar() {
  return (
    <div class="nav">
      <img src="./images/logo.png" alt="logo" />
      <img src="./images/hamburger.png" alt="hamburer" />
    </div>
  );
}

function Header() {
  return (
    <div class="header">
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library and become a
        super Ninja developer.
      </p>
      <button>Awsome!</button>
    </div>
  );
}

function Content() {
  return (
    <div class="contentContainer">
      <div class="content">
        <img src="./images/1.png" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </div>
      <div class="content">
        <img src="./images/2.png" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div class="content">
        <img src="./images/3.png" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's</p>
      </div>
      <div class="content">
        <img src="./images/4.png" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

function MyApp() {
  return (
    <div>
      <div class="background">
        <NavBar />
        <Header />
      </div>
      <div class="megaContainer">
        <Content />
      </div>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.querySelector("#app"));
