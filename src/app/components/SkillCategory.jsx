const SkillCategory = ({ title, icon, skills }) => (
  <div className="relative group rounded-xl p-[1px] bg-gradient-to-r from-blue-500/40 to-purple-500/40 hover:from-blue-500 hover:to-purple-500 transition-all duration-500">
    
    <div className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-6 h-full shadow-lg">
      
      <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-white">
        <span className="text-blue-400 text-2xl">{icon}</span>
        <span className="tracking-wide">{title}</span>
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-1.5 text-sm font-medium rounded-full
                       bg-white/10 text-gray-200 backdrop-blur-md
                       border border-white/10
                       hover:bg-white/20 hover:text-white
                       transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  </div>
);

export default SkillCategory;
