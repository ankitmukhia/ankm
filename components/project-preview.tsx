'use client'

import { useState } from 'react';
import { Title, Text, Meta, Icon } from '@/components/UIComponents';
import { SiGithub, SiX, SiGmail } from '@icons-pack/react-simple-icons';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import type { Project } from '@/lib/constants';

type Technology = "Node.js" | "React" | "Express" | "MongoDB" | "JavaScript" | "HTML" | "CSS";

const techColors: Record<Technology, string> = {
	"Node.js": "hover:text-green-200",
	"React": "hover:text-blue-300",
	"Express": "hover:text-green-400",
	"MongoDB": "hover:text-green-600",
	"JavaScript": "hover:text-yellow-400",
	"HTML": "hover:text-orange-500",
	"CSS": "hover:text-blue-500",
};

export const ProjectPreview = (project: Project) => {
	const [currentIndex, setCurrentIndex] = useState<number | null>(null);
	const isHovered = currentIndex === project.id;

	return (
		<div
			className="block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium"
			onMouseEnter={() => setCurrentIndex(project.id)}
			onMouseLeave={() => setCurrentIndex(null)}
		>
			<RoughNotationGroup show={isHovered}>
				<div className="relative">
					<div className="inline-block">
						<RoughNotation
							type="highlight"
							color="#581c87"
							strokeWidth={60}
						>
							<Title>{project.title}</Title>
						</RoughNotation>

						<div className="inline-block">
							<RoughNotation
								type="highlight"
								color="#581c87"
								strokeWidth={60}
							>
								<Meta>{project.date}</Meta>
							</RoughNotation>
						</div>
					</div>
					<div className="inline-block mt-4">
						<RoughNotation
							type="highlight"
							color="#581c87"
							strokeWidth={60}
						>
							<Text>{project.description}</Text>
						</RoughNotation>
					</div>
					<div className="flex flex-row gap-2 mt-4">
						{project.technologies.map((tech) => (
							<Meta key={tech} className={techColors[tech as Technology] ?? ""}>{tech}</Meta>
						))}
					</div>

					<div className="absolute inline-block top-0 right-0">
						<div className="flex flex-row gap-x-2">
							<RoughNotation
								type="circle"
								color="orange"
								padding={6}
							>
								<SiGithub size={20} />
							</RoughNotation>

							<RoughNotation
								type="circle"
								color="orange"
								padding={6}
							>
								<SiGithub size={20} />
							</RoughNotation>
						</div>
					</div>
				</div>
			</RoughNotationGroup >
		</div >
	)
}
