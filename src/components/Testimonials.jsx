import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 px-4 sm:px-8 tracking-wide">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-8 sm:my-12 lg:my-16">
        What People are Saying
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4 flex"
          >
            <div className="bg-neutral-900 rounded-lg p-6 text-base sm:text-lg border border-neutral-800 font-light w-full">
              <p className="leading-relaxed">{testimonial.text}</p>

              <div className="flex mt-6 items-center">
                <img
                  className="w-14 h-14 mr-4 rounded-full border border-neutral-300 object-cover"
                  src={testimonial.image}
                  alt="User profile"
                />
                <div>
                  <h6 className="font-semibold text-white">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-500">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
