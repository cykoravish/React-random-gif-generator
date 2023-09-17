import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Tag = () => {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <>
      <div className="w-1/2 bg-amber-300 text-center mx-auto mt-10 rounded-md">
        <h1 className="text-center font-bold underline m-3">
          A RANDOM GIF( {tag})
        </h1>

        {loading ? (
          <Spinner />
        ) : (
          <img src={gif} alt="gif" className="mx-auto w-1/2 h-60" />
        )}

        <div>
          <input
            type="text"
            onChange={(e) => setTag(e.target.value)}
            placeholder="enter gif name"
            value={tag}
            className="border-gray-950 p-1 mt-3 w-1/2"
          />
        </div>
        <button
          className="w-4/5 mt-3 mb-3 bg-slate-400 rounded-md p-1 font-bold "
          onClick={() => fetchData(tag)}
        >
          GENERATE
        </button>
      </div>
    </>
  );
};

export default Tag;
