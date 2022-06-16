import Header from "./component/Header";

function App() {
  return (
    <div>
      <Header />
      <section
        className="min-h-[calc(100vh-64px)] bg-blue-400 font-bold flex items-center justify-center"
        id="home"
      >
        <h1 className="text-5xl">Home</h1>
      </section>
      <section
        className="min-h-[calc(100vh-64px)]  bg-red-400 font-bold flex items-center justify-center"
        id="work"
      >
        <h1 className="text-5xl">Work</h1>
      </section>
      <section
        className="min-h-[calc(100vh-64px)]  bg-yellow-300 transition-colors duration-700 dark:bg-purple-400 font-bold flex items-center justify-center"
        id="about"
      >
        <h1 className="text-5xl">About</h1>
      </section>
    </div>
  );
}

export default App;
