import hqImg from "../assets/hqmage.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-r from-gray-950 to-black font-mono">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-cyan-300 drop-shadow-[2px_2px_0px_#0f172a]">
            Boost Your Dev Speed with{" "}
            <span className="text-blue-400">VirtualHQ's Pixel Tools</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-none border-4 border-blue-500 shadow-[8px_8px_0px_#1e3a8a]">
              <img
                src={hqImg}
                alt="VirtualHQ Workspace"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-8">
            {checklistItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-none border-2 border-blue-500 bg-neutral-900 cursor-pointer shadow-[4px_4px_0px_#1e40af] hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg">
                  ✓
                </div>

                <div className="flex-1">
                  <h5 className="text-xl font-bold text-cyan-300 drop-shadow-[2px_2px_0px_#0f172a] mb-2">
                    {item.title}
                  </h5>
                  <p className="text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
