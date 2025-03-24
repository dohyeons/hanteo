import { Pause, Play } from "lucide-react";

type AutoPlayControlProps = {
  isPlaying: boolean;
  toggleAutoplay: () => void;
};
export default function AutoPlayControl({ toggleAutoplay, isPlaying }: AutoPlayControlProps) {
  return (
    <div className="flex justify-center mt-2">
      <button
        onClick={toggleAutoplay}
        className="hover:cursor-pointer text-gray-300  hover:text-pink-400"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
    </div>
  );
}
