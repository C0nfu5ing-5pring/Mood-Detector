import { useState } from "react";
import { Pause, Play } from "lucide-react";

const MoodSongs = () => {
  const [songs, setSongs] = useState([
    {
      title: "test_title",
      artist: "test_artist",
      url: "test_url",
    },
    {
      title: "test_title",
      artist: "test_artist",
      url: "test_url",
    },
    {
      title: "test_title",
      artist: "test_artist",
      url: "test_url",
    },
    {
      title: "test_title",
      artist: "test_artist",
      url: "test_url",
    },
  ]);

  return (
    <>
      <div className="flex flex-col gap-3 w-[80%] p-5 border-2 rounded-xl">
        <h1 className="text-5xl mb-10">Recommended Songs based on your mood</h1>
        {songs.map((song, index) => {
          return (
            <div
              key={index}
              className="flex justify-between w-[80%] border-2 px-8 py-2 rounded-xl hover:scale-101 transition-all hover:bg-[#02cac1] hover:text-[#003234] cursor-pointer"
            >
              <div>
                <div className="text-xl font-light">{song.title}</div>
                <div className="text-xl font-light">{song.artist}</div>
                <div className="text-xl font-light">{song.url}</div>
              </div>
              <div className="flex items-center gap-3">
                <Pause className="cursor-pointer active:scale-95 transition-all " />
                <Play className="cursor-pointer active:scale-95 transition-all " />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MoodSongs;
