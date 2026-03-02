import FacialExpression from "./components/FacialExpression.jsx";
import MoodSongs from "./components/MoodSongs.jsx";

const App = () => {
  return (
    <div className="flex gap-15 p-15 h-screen bg-[#0E0E11] text-[#8ffff1]">
      <FacialExpression />
      <MoodSongs />
    </div>
  );
};

export default App;
