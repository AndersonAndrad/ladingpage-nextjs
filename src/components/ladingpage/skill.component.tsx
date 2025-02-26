import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export interface Skill {
    id: string;
    name: string;
    subName?: string;
    complement?: string;
    experience?: string;
    image: string;
    size?: number;
}

interface SkillProps {
    skill: Skill;
}

export function SkillComponent({skill}: SkillProps) {

    const getDateDifference = (): string => {
        const dateStr: string = skill?.experience ?? '';

        if(!dateStr.length) return 'Unknown';

        const [day, month, year] = dateStr.split('/').map(Number);
        const inputDate = new Date(year, month - 1, day);

        const today = new Date();

        let years = today.getFullYear() - inputDate.getFullYear();
        let months = today.getMonth() - inputDate.getMonth();
        let days = today.getDate() - inputDate.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return `${years} Anos e ${months} meses`;
    }

    return (
        <div className="flex items-center gap-3">
            <div>
                <SkillImage skill={skill} />
            </div>
            <div className="flex flex-col items-start">
                <span className="text-lg font-bold">{skill?.name ?? ''}</span>
                <span className="text-sm">{skill?.complement}</span>
                <span className="text-sm font-light">{getDateDifference()}</span>
            </div>
        </div>
    )
}

export function SkillImage({ skill }: SkillProps) {
    const size: number = skill?.size ?? 57;

    return (
        <Avatar style={{ width: size, height: size, maxWidth: size, maxHeight: size }}>
            <AvatarImage src={skill?.image} className="aspect-auto" />
            <AvatarFallback>{skill?.subName ?? ''}</AvatarFallback>
        </Avatar>
    );
}