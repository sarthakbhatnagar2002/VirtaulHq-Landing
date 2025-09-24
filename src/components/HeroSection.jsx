import { useState } from "react";
import demo from '../assets/trial.mp4'
import demo2 from '../assets/trial-2.mp4'

const HeroSection = () => {
  const [currentDemo, setCurrentDemo] = useState(0);

  const demoVideos = [
    {
      title: "Virtual Office Tour",
      video: demo
    },
    {
      title: "Team Collaboration",
      video: demo2
    }
  ];


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900/20 to-cyan-900/20 text-white overflow-hidden font-mono">
      <div className="relative z-10 container mx-auto px-4 py-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 px-4 py-2 mb-8 border border-blue-500/30 rounded-none">
            <div className="w-2 h-2 bg-green-400 animate-pulse" />
            <span className="text-sm text-neutral-300">VirtualHQ</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
            Your Interactive Virtual Workspace
          </h1>
        </div>

        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Connect. Collaborate. Create. Step into immersive pixel-style virtual spaces where your team works and plays together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            {demoVideos.map((video, index) => (
              <button
                key={index}
                onClick={() => setCurrentDemo(index)}
                className={`px-6 py-3 border transition-all duration-300 ${currentDemo === index
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-blue-400"
                    : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border-neutral-700"
                  } rounded-none`}
              >
                {video.title}
              </button>
            ))}
          </div>

          {/* Video */}
          <div className="relative overflow-hidden bg-neutral-950 border border-blue-500 rounded-none">
            <div className="aspect-video relative">
              <video
                key={currentDemo}
                className="w-full h-full object-cover"
                controls
                muted
                style={{ imageRendering: "pixelated" }}
              >
                <source src={demoVideos[currentDemo].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay info */}
              <div
                className="absolute bottom-4 left-4 right-4 bg-black/70 px-4 py-2 border-t border-blue-500/30 rounded-none"
              >
                <h3 className="text-xl font-bold">{demoVideos[currentDemo].title}</h3>
                <p className="text-neutral-400 text-sm">
                  Experience the retro-futuristic way of working
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
