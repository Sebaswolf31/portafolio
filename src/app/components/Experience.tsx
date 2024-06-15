const Experience = () => {
    return (
        <div className="-my-6">
            {/* Item #1 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Growth and Milestones</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jun, 2024</time>
                    <div className="text-xl font-bold text-slate-900">Achieved €30,000 in Transactions</div>
                </div>
                <div className="text-slate-500">Successfully processed over €30,000 in transactions through Wippass. The platform has garnered 20,000 registered users and has been utilized in major cities such as Bilbao, Barcelona, and Madrid. This milestone reflects the platform's growing popularity and reliability in managing event ticket sales.</div>
            </div>

            {/* Item #2 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Professional Experience</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Oct, 2023</time>
                    <div className="text-xl font-bold text-slate-900">Internship at Nomada Omnimotion and Vicomtech</div>
                </div>
                <div className="text-slate-500">Served as an intern at Nomada Technologies, contributing to the development of a virtual reality game. Worked with omnidirectional treadmills and tracking technologies, leveraging AI and programming skills to enhance immersive gaming experiences. Proficient in Python, sensor integration, and VR technologies.</div>
            </div>

            {/* Item #3 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Freelance and Self-Employment</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jun, 2023</time>
                    <div className="text-xl font-bold text-slate-900">Self-Employed and Freelancing</div>
                </div>
                <div className="text-slate-500">Since June 2023, I have been working as a freelancer, managing various projects that span database management, software development, and cloud architecture. My experience as a self-employed professional has honed my skills in project management, client communication, and technical execution, allowing me to deliver high-quality solutions.</div>
            </div>

            {/* Item #4 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The Origin</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Mar, 2023</time>
                    <div className="text-xl font-bold text-slate-900">Founded Wippass</div>
                </div>
                <div className="text-slate-500">Started Wippass, an online ticket sales platform, during my university studies. Developed the platform from scratch using Python, Flask, and MySQL. Deployed on AWS with EC2, S3, and RDS. Managed all aspects of the platform including backend development, database management, and cloud architecture.</div>
            </div>
        </div>
    );
};

export default Experience;
