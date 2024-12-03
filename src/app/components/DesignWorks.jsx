import React from "react";

function DesignWorks() {
    const designWorks = [
        { image: "designworks/p.jpg", title: "Design 1" },
        { image: "designworks/4.jpg", title: "Design 2" },
        { image: "designworks/2.jpg", title: "Design 3" },
        { image: "designworks/6.jpg", title: "Design 6" },
        { image: "designworks/3.jpg", title: "Design 6" },
      ];
      
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        My Design Works
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
        {designWorks.map((design, index) => (
          <div
            key={index}
            className="group relative p-4 overflow-hidden rounded-lg shadow-lg border-2 border-blue-500"
          >
            <img
              src={design.image}
              alt={`Design ${index + 1}`}
              className="w-full h-full  object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {design.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignWorks;
