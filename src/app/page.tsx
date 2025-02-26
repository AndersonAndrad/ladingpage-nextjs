'use client';
import {Button} from "@/components/ui/button";
import {Languages} from "lucide-react";
import {useState} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Skill, SkillComponent} from "@/components/ladingpage/skill.component";
import {jobs, JobsDetail, skills} from "@/core/mocked-data/ladingpage/ladingpage.mocked";
import {JobDetailComponent} from "@/components/ladingpage/job-detail.component";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    if(language === "en"){
      setLanguage("pt");
    } else {
      setLanguage("en");
    }
  }

  const currentLanguageLabel = (): string => {
    return language === "en" ? "English" : "Português";
  }

  return(
      <div className="grid grid-cols-12">
        <header className="bg-dark-muted-purple text-light-pastel-purple col-span-full py-2 grid grid-cols-12 items-center ">
          <span className="col-start-2 text-nowrap font-semibold text-lg">Anderson Andrade</span>
          <div className="col-start-9 col-end-12 flex items-center justify-between  w-full">
            {/* Language button */}
            <div className="flex items-center gap-3">
              <Button variant={'secondary'} onClick={toggleLanguage}><Languages/></Button>
              <span>{currentLanguageLabel()}</span>
            </div>

            {/* Links options */}
            <ul className="flex items-center gap-1 ml-auto  w-fit">
              <li className="w-fit text-nowrap cursor-pointer">Linkedin /</li>
              <li className="w-fit text-nowrap cursor-pointer">Github /</li>
              <li className="w-fit cursor-pointer">Whatsapp</li>
            </ul>

          </div>
        </header>

        <main className="col-start-2 col-end-12 py-4 w-full h-dvh flex flex-col gap-16">
          {/* First module  */}
          <div className="flex w-full justify-between items-center">
            {/* text presentation */}
            <div className="flex flex-col gap-3 w-[60%]">
              <h1 className="text-4xl font-semibold">Anderson Andrade <br/> Portifolio</h1>

              <span>I’m Anderson Andrade, a Software Engineer with a journey that began in game development.
                Over time, I transitioned to building web systems designed to automate workflows and enhance efficiency.
                My professional experience spans diverse industries, including banking, e-commerce, gaming, and others.
                This varied background has allowed me to develop a strong foundation in problem-solving, adaptability,
                and delivering solutions that create real value.</span>
            </div>

            {/* image */}
            <div>
              <Avatar className="max-w-[250px] max-h-[250px] w-full h-full">
                <AvatarImage src='https://avatars.githubusercontent.com/u/31743641?v=4'/>
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Skills module */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">Skills</h1>
            <div className="grid grid-cols-5 gap-4">
              {skills.map((skill: Skill) => (<SkillComponent key={skill.id} skill={skill} />))}
            </div>
          </div>

          {/* Experiences */}
          <div className="w-full">
            <div className="flex justify-center items-center">
              <span className="text-4xl font-semibold">Experiences</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-3xl">Contratos</span>
              <div className="grid grid-cols-5 gap-4">
                {jobs.map((skill: Skill) => (<SkillComponent key={skill.id} skill={skill} />))}
              </div>
            </div>
          </div>

          {/* Each experience */}
          <ul className="max-w-[60%] flex flex-col gap-6">
            {
              JobsDetail.map(jobDetail => (
                <li key={jobDetail.skill.id} className="py-5">
                  <JobDetailComponent skill={jobDetail.skill} description={jobDetail.description} technologies={jobDetail.technologies}/>
                </li>
              ))
            }
          </ul>
        </main>

        <footer>

        </footer>
      </div>
  )
}
