'use client';
import {Button} from "@/components/ui/button";
import {Languages} from "lucide-react";
import {useState} from "react";

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

        <main>

        </main>

        <footer>

        </footer>
      </div>
  )
}
