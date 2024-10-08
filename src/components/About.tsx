import React from "react";

const About: React.FC = () => {
    return (
        <div id="about" className="flex flex-col items-start overflow-hidden justify-center h-full w-full bg-[#0F172A] p-0  ">
            {/* Text starting from the top left corner */}




                <div className="bg-[#0F172A] shadow-lg rounded-lg p-6 h-3/4 w-3/4 mx-auto flex flex  border-white border-color: rgb(255 255 255) ">
                    <img
                        src="src/assets/farouk.jpg"
                        alt="Your Namethr"
                        className="w-60 h-90 rounded-lg object-cover "
                    />

                    <div className="pl-5">
                    <h3 className="text-white mb-4 pt-2 ">Software Engineer</h3>
                          <p className="text-gray-400 mt-2">
                        Passionate about developing innovative programs that expedite the efficiency and effectiveness
                        of organizational success.
                    </p>
                    </div>
                </div>

        </div>
    );
};

export default About;
