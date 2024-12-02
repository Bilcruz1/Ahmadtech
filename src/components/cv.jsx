import React from 'react';

export default function CV() {
	// Array of work experiences
	const experiences = [
		{
			title: 'Product Designer at Shifl, NY USA',
			date: '2022 - Present | Remote',
			description: `At Shifl, I designed B2B2C logistics, supply chain OS, and fintech 
				products in collaboration with team members. I worked with Figma, 
				adhering to design systems and style guides. Through daily huddles 
				and brainstorming, I ensured seamless UI/UX implementation. I also 
				conducted usability testing and research to meet user needs.`,
		},
		{
			title: 'Sr. UI/UX Designer at Pioneering Programmers, Texas USA.',
			date: '2021 - 2022 | Remote',
			description: `For my first project, I collaborated on a SaaS B2B audit product, enhancing the existing experience by following the company’s UI/UX design process. I created style guides and a design system for new products while working closely with developers for seamless implementation. Attending standups and collaborating with the team were integral to the process. Additionally, I conducted usability testing and applied research methodologies to ensure the design met user needs.`,
		},
		{
			title: 'Freelance Product Designer at Andela',
			date: '2021 - 2022 | Remote',
			description: `As a talent at Andela community, I worked on real-world projects for global clients, honing my design skills in building software solutions for real-world challenges. This experience allowed me to tackle complex problems, collaborate with diverse teams, and deliver impactful results in a contract terms.`,
		},
		{
			title: 'UI/UX Designer & Jr. Front-End Developer at Stetis FCT, Nigeria.',
			date: '2018 - 2020 | Onsite',
			description: `I began as an intern and was later hired to work on a SaaS payroll system for government and business use. I communicated directly with end users, collaborated with the team to gather and evaluate user needs, and conducted user research. Using user-centered design techniques, I presented UX designs for feedback from users and stakeholders. Additionally, I redesigned UIs for improved device responsiveness and created prototypes to enhance interaction and usability testing.`,
		},
	];

	// Education and Skills data
	const education = {
		title: 'Bachelor of Computer Science',
		date: '2021 | Ahmadu Bello University Zaria',
	};

	const skills = {
		interpersonal: [
			'Effective communication and active listening',
			'Team collaboration and teamwork',
			'Adaptability and problem-solving',
			'Emotional intelligence and empathy',
			'Conflict resolution and negotiation',
			'Leadership and mentoring',
			'Time management and organization',
			'Creativity and critical thinking',
		],
		career: [
			'UX/UI design and prototyping',
			'Design systems and style guide creation',
			'Wireframing and user journey mapping',
			'Usability testing and user research',
			'Knowledge of responsive and accessible design principles',
			'Strong presentation and stakeholder engagement skills',
			'Collaboration with developers for design implementation',
			'Agile methodologies and participation in stand-ups',
			'Tools: Figma, Adobe XD, Sketch, and other industry-leading tools',
			'Frontend development (HTML, CSS, JavaScript basics)',
		],
	};

	return (
		<div className="flex lg:flex-row flex-col gap-[10%] bg-[#ffff] lg:px-[177px] px-[24px]">
			{/* Work Experience Section */}
			<div className="lg:w-1/2 w-full pb-[32px]">
				<h1 className="text-[32px] mb-[24px]">💼 Work Experience</h1>
				{experiences.map((experience, index) => (
					<div
						key={index}
						className={`border-l-[2px] border-[#253041] border-dashed relative pl-[18px] ${
							index === experiences.length - 1 ? '' : 'pb-[24px]'
						} lg:ml-3`}
					>
						<div className="h-[14px] w-[14px] rounded-full bg-[#253041] absolute top-[0px] left-[-8px]"></div>
						<h2 className="text-[16px] text-[#253041] font-extrabold">
							{experience.title}
						</h2>
						<h3 className="pt-[8px] text-[13px] text-[#101010] font-extrabold">
							{experience.date}
						</h3>
						<p className="pt-[16px] text-[12px] text-[#253041] font-medium">
							{experience.description}
						</p>
					</div>
				))}
			</div>

			{/* Education and Skills Section */}
			<div className="lg:w-1/2 w-full lg:mt-0 mt-[48px]">
				{/* Education */}
				<h1 className="text-[32px] mb-[24px]">🧑‍🏫 Education</h1>
				<div className="pl-[18px] pb-[32px] relative ml-3">
					<div className="h-[14px] w-[14px] rounded-full absolute top-[0px] left-[-8px] bg-[#253041]"></div>
					<h2 className="text-[16px] text-[#253041] font-extrabold  leading-[1]">
						{education.title}
					</h2>
					<h3 className="pt-[8px] text-[13px] text-[#101010] font-extrabold">
						{education.date}
					</h3>
				</div>

				{/* Skills */}
				<h1 className="text-[32px] lg:mt-[54px] mt-[32px] mb-[24px]">
					🍳 Skills
				</h1>

				{/* Interpersonal Skills */}
				<div className="pl-[18px] relative ml-3">
					<div className="h-[14px] w-[14px] rounded-full absolute top-[0px] left-[-8px] bg-[#253041]"></div>
					<h2 className="text-[16px] text-[#253041] font-extrabold mb-[16px] leading-[1]">
						Interpersonal Skills
					</h2>
					<ul className="list-disc list-outside ml-[16px] mb-[32px] text-[12px] text-[#253041] font-medium">
						{skills.interpersonal.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</div>

				{/* Career Skills */}
				<div className="pl-[18px] relative ml-3 mb-[32px]">
					<div className="h-[14px] w-[14px] rounded-full absolute top-[0px] left-[-8px] bg-[#253041]"></div>
					<h2 className="text-[16px] text-[#253041] font-extrabold  leading-[1]">
						Career Skills
					</h2>
					<ul className="list-disc list-outside ml-[16px] text-[12px] text-[#253041] font-medium">
						{skills.career.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
