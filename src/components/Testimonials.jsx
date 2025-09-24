import { testimonials } from "../constants";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-r from-gray-950 to-black text-white font-mono">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              What People are Saying
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Hear from teams who've transformed their collaboration with VirtualHQ
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative cursor-pointer">
              <div className="relative h-full p-6 bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 hover:border-blue-500/30 transition-all duration-500 group-hover:scale-105 rounded-none">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-none flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 mb-6 mt-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 fill-blue-400 text-blue-400"
                    />
                  ))}
                </div>

                <p className="text-neutral-200 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      className="w-14 h-14 rounded-none border-2 border-blue-500/30 object-cover"
                      src={testimonial.image}
                      alt={testimonial.user}
                    />
                    <div className="absolute inset-0 rounded-none bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-md"></div>
                  </div>
                  <div>
                    <h6 className="font-semibold text-white text-lg">{testimonial.user}</h6>
                    <span className="text-blue-400 text-sm font-medium">{testimonial.company}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-none pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
