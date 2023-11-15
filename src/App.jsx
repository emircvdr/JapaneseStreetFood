import MainPage from "./assets/pages/MainPage";
import İntroPage from "./assets/pages/İntroPage";
import Lenis from "@studio-freight/lenis";
import NewPage from "./assets/pages/ContentPage";

function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <MainPage />
      <İntroPage />
      <NewPage />
    </>
  );
}

export default App;
