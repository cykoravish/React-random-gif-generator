import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="background w-screen h-auto flex flex-col items-center">
      <h1 className="bg-white w-4/5 rounded-md p-2 text-center font-bold tracking-widest mt-6 mb-6 h-auto">
        RANDOM GIFS
      </h1>
      <Random />
      <Tag />
    </div>
  );
}
