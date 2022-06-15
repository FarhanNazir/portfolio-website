import Header from "./component/Header";

function App() {
  return (
    <div>
      <Header />
      <section
        className="min-h-screen bg-blue-400 font-bold flex items-center justify-center"
        id="home"
      >
        <h1 className="text-5xl">Home</h1>
      </section>
      <section
        className="min-h-screen  bg-red-400 font-bold flex items-center justify-center"
        id="work"
      >
        <h1 className="text-5xl">Work</h1>
      </section>
      <section
        className="min-h-screen bg-yellow-300 font-bold flex items-center justify-center"
        id="about"
      >
        <h1 className="text-5xl">About</h1>
      </section>
    </div>
  );
}

export default App;
