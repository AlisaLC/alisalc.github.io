import { Progress, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react";
import React from "react";
import { useEffect, useState } from "react";

interface Skill {
    name: string;
    percentage: number;
}

interface SkillTab {
    name: string;
    content: Skill[];
}

interface Props {
    skills: SkillTab[];
}

const SkillList = ({ skills }: Props) => {
    const [activeTab, setActiveTab] = React.useState(skills[0].name);
    const [percentages, setPercentages] = useState(Object.fromEntries(skills.map((tab) => (tab.content.map((member) => [member.name, 0]))).flat()))

    const fillPercentage = () => {
        var done = true;
        for (const tab of skills) {
            if (tab.name != activeTab) {
                continue;
            }
            for (const member of tab.content) {
                if (percentages[member.name] >= 1) {
                    percentages[member.name] = 1;
                } else {
                    done = false;
                    percentages[member.name] += 0.01;
                }
            }
        }
        setPercentages({ ...percentages })
        if (!done) {
            setTimeout(() => fillPercentage(), 20)
        }
    }

    useEffect(() => {
        fillPercentage()
    }, [activeTab])

    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-white shadow-none rounded-none",
                }}
            >
                {skills.map((tab) => (
                    <Tab
                    key={"tab-" + tab.name}
                    value={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={activeTab === tab.name ? "text-white" : "text-gray-300"}
                    >
                        {tab.name}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {skills.map((tab) => (
                    <TabPanel key={"tab-" + tab.name} value={tab.name}>
                        {tab.content.map((member) => (
                            <div className="w-full" key={"skill-" + member.name}>
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
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
};

export default SkillList;
