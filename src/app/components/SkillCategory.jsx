const SkillCategory = ({ title, icon, skills }) => (
    <div className="bg-gray-800 rounded-lg p-6 border-2 border-blue-700 shadow-lg transform hover:scale-105 transition-transform duration-300">
        
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="mr-2">{icon}</span>
            {title}
        </h3>
        <div className="flex flex-wrap gap-2 ">
            {skills.map((skill) => (
                <span key={skill} className="px-3 py-2 bg-gray-200  text-gray-900  rounded-full text-sm font-medium hover:bg-gray-300 transition-colors cursor-default">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export default SkillCategory