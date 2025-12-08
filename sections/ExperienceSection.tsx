import ImageWithFallback from "@/components/ImageWithFallback";

interface Experience {
  company: string;
  title: string;
  duration: string;
  logo: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "Symbotic",
    title: "Lead Solutions Engineer",
    duration: "Dec 2024 - Present",
    logo: "/symbotic.svg",
    responsibilities: [
      "Initiated and led the design of software specifications to enhance usability, streamline error resolution, and reduce support tickets by 70%",
      "Orchestrated the end-to-end customer journey for our telehealth robotics customers, fostering strong relationships and driving product expansion",
      "Leaded the implementation of telehealth robotics at customer facilities, ensuring seamless platform adoption and operational efficiency",
      "Developed detailed product roadmaps using Agile methodologies to streamline development processes, resulting in increased team efficiency",
    ],
  },
  {
    company: "OhmniLabs",
    title: "Senior Solutions Engineer",
    duration: "Sep 2022 - Dec 2024",
    logo: "/ohmniLabs.svg",
    responsibilities: [
      "Led all implementation projects and delivered compelling product demos to prospective stakeholders, resulting in revenue generation exceeding $1,000,000",
      "Managed the customer journey through onboarding, product adoption, and expansion which resulted in over $300,000 in expansion revenue",
      "Delivered exceptional customer support, nurturing long-term customer engagement and achieving a 100% customer retention rate over 2 years",
      "Designed and implemented new features using Figma and UI/UX principles, enhancing user experience and reducing support tickets by 30%",
      "Created comprehensive support and training content, including documentation, photos, and videos",
    ],
  },
  {
    company: "Freelance",
    title: "Product Designer",
    duration: "Dec 2023 - Feb 2024",
    logo: "/briefcase.svg",
    responsibilities: [
      "Led comprehensive efforts encompassing research, user story development, wireframing, prototyping, and design for the mobile view of an Event Registration app",
      "Partnered with developers to validate workflows to promote alignment across the project",
    ],
  },
  {
    company: "SimplyAsk.AI",
    title: "Software Developer",
    duration: "Nov 2021 - Sep 2022",
    logo: "/simplyAsk.svg",
    responsibilities: [
      "Integrated AI chatbot APIs to streamline customer service requests, enhancing efficiency and ensuring timely responses to client inquiries",
      "Engineered frontend solutions using React.js to introduce software features, thereby amplifying runtime efficiency and elevating the user experience",
      "Executed code reviews and conducted comprehensive functionality tests for software features, ensuring seamless and successful deployments",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left md:text-center text-slate-100 mb-12 sm:mb-16">
          Experience
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-2xl shadow-lg shadow-black/20 p-6 sm:p-8 hover:shadow-xl hover:shadow-cyan-500/10 transition-shadow duration-300 border border-slate-700/50 hover:border-cyan-400/30"
            >
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                {/* Company Logo */}
                <div className="flex-shrink-0 mb-4 md:mb-0 flex justify-start">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-slate-700/50 flex items-center justify-center overflow-hidden border-2 border-slate-600/50">
                    <ImageWithFallback
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={96}
                      height={96}
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                {/* Company Details */}
                <div className="flex-1">
                  <div className="mb-4 text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">
                      {exp.title}
                    </p>
                    <p className="text-base sm:text-lg text-slate-400 font-medium">
                      {exp.duration}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mt-6">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 sm:space-x-3 text-sm sm:text-base text-slate-300"
                      >
                        <span className="text-cyan-400 font-bold mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
