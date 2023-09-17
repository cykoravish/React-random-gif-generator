import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <>
      <div className="w-1/2 bg-lime-500 text-center mx-auto rounded-md">
        <h1 className="text-center font-bold underline m-3">A RANDOM GIF</h1>

        {loading ? (
          <Spinner />
        ) : (
          <img src={gif} alt="gif" className="mx-auto w-1/2 h-60" />
        )}

        <button
          className="w-4/5 mt-3 mb-3 bg-slate-400 rounded-md p-1 font-bold"
          onClick={fetchData}
        >
          GENERATE
        </button>
      </div>
    </>
  );
};

export default Random;
