import {Skill, SkillImage} from "@/components/ladingpage/skill.component";

export interface JobDetailProps {
    skill: Skill
    description: string;
    technologies: Skill[];
}

export function JobDetailComponent(props: JobDetailProps) {
    const {skill, description, technologies} = props;

    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
                <span className="text-3xl font-medium" >{skill.name}</span>
                {skill?.complement && <span className="text-sm">({skill.complement})</span>}
            </div>
            <div className="flex items-center gap-3">
                <SkillImage skill={skill} />
                <span className="w-full">{description}</span>
            </div>
            <ul className="flex gap-3 items-center">
                {technologies.map(technology => (
                    <li key={technology.id}>
                        <SkillImage skill={technology} />
                    </li>
                ))}
            </ul>
        </div>
    )
}