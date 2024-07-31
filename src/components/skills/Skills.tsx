import { Progress, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

interface Skill {
    name: string;
    percentage: number;
}

interface Props {
    skills: Skill[];
}

const SkillList = ({ skills }: Props) => {
    const [percentages, setPercentages] = useState(Object.fromEntries(skills.map((member) => [member.name, 0])))
    
    const fillPercentage = () => {
        for (const member of skills) {
            console.log(member)
            if (percentages[member.name] >= 1) {
                percentages[member.name] = 1;
            } else {
                percentages[member.name] += 0.005;
            }
        }
        setPercentages({...percentages})
        setTimeout(() => fillPercentage(), 30)
    }

    useEffect(() => {
        fillPercentage()
    }, [])

    return (
        <>
            {skills.map((member) => (
                <div className="w-full" key={member.name}>
                    <div className="mb-2 mt-2 flex items-center justify-between gap-4">
                        <Typography color="white" variant="h6">
                            {member.name}
                        </Typography>
                        <Typography color="white" variant="h6">
                            {Math.ceil(member.percentage * percentages[member.name])}%
                        </Typography>
                    </div>
                    <Progress value={member.percentage * percentages[member.name]} size="lg" color={member.percentage * percentages[member.name] > 70 ? "green" : (member.percentage * percentages[member.name] > 40 ? "amber" : "pink")} />
                </div>
            ))}
        </>
    );
};

export default SkillList;
