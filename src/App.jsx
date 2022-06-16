import Header from "./component/Header";

function App() {
  return (
    <div>
      <Header />
      <div className=" transition-colors duration-700 dark:bg-cyan-700 ">
        <section
          className="min-h-[calc(100vh-64px)]  font-bold flex items-center justify-center"
          id="home"
        >
          <h1 className="text-5xl">Home</h1>
        </section>
        <section
          className="min-h-[calc(100vh-64px)]  font-bold flex items-center justify-center"
          id="work"
        >
          <h1 className="text-5xl">Work</h1>
        </section>
        <section
          className="min-h-[calc(100vh-64px)]   font-bold flex items-center justify-center"
          id="about"
        >
          <h1 className="text-5xl">About</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
