import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import ExplosiveIcon from "./icons/attack/ExplosiveIcon"
import MysticIcon from "./icons/attack/MysticIcon"
import PiercingIcon from "./icons/attack/PiercingIcon"
import SonicIcon from "./icons/attack/SonicIcon"
import { ReactElement, useState } from "react"
import { TFilterOption } from "@/util/type"
import { cn } from "@/lib/utils"
import { observable } from "@legendapp/state"
import { use$ } from "@legendapp/state/react"
import { attackFilter$, defenseFilter$, nameFilter$, starFilter$ } from "@/stores/filter"
import { Input } from "./ui/input"
import { NameFilterInput } from "./NameFilter"
import LightIcon from "./icons/defense/LightIcon"
import ElasticIcon from "./icons/defense/ElasticIcon"
import HeavyIcon from "./icons/defense/HeavyIcon"
import SpecialIcon from "./icons/defense/SpecialIcon"
import StarRarity from "./templates/StarRarity"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"

const attackOptions:TFilterOption[] = [
    { key: 'Explosive', icon: <ExplosiveIcon /> },
    { key: 'Mystic', icon: <MysticIcon />},
    { key: 'Piercing', icon: <PiercingIcon />},
    { key: 'Sonic', icon: <SonicIcon />},
];

const defenseOptions: TFilterOption[] = [
  {key: 'Light', icon: <LightIcon/> },
  {key: 'Elastic', icon: <ElasticIcon/>},
  {key: 'Heavy', icon: <HeavyIcon/>},
  {key: 'Special', icon: <SpecialIcon/>}
]

const starOptions: TFilterOption[] = [
  {key: '3', icon: <StarRarity baseStar={3}/>},
  {key: '2', icon: <StarRarity baseStar={2}/>},
  {key: '1', icon: <StarRarity baseStar={1}/>}
]

export function AppSidebar() {
  const [isDefOpen, setIsDefOpen] = useState(false)
  const attackFilter = use$(attackFilter$)
  const defenseFilter = use$(defenseFilter$)
  const starFilter = use$(starFilter$)
    
  return (
    <Sidebar>
      <SidebarContent>
      <SidebarGroup>
          <SidebarGroupLabel className="font-fira">Name</SidebarGroupLabel>
          <SidebarGroupContent className="w-full">
          <NameFilterInput/>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="font-fira">Students</SidebarGroupLabel>
          <SidebarGroupContent>
              <SidebarGroup>
                  <SidebarGroupLabel className="font-fira">Attack</SidebarGroupLabel>
                      <SidebarGroupContent>
                          <SidebarMenu className="grid grid-cols-2">
                              {attackOptions.map(({ key, icon }) => (
                              <SidebarMenuItem key={key} className={cn(" bg-blue-300/50 rounded-md", attackFilter === key ? "bg-blue-500 text-white" : '')} onClick={() => attackFilter$.set(attackFilter === key ? null : key as typeof attackFilter)}>
                                  <SidebarMenuButton className="hover:cursor-pointer">
                                  {icon}
                                  <span>{key}</span>
                                  </SidebarMenuButton>
                              </SidebarMenuItem>
                              ))}
                          </SidebarMenu>
                      </SidebarGroupContent>
             </SidebarGroup>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
              <SidebarGroup>
                  <Collapsible open={isDefOpen} onOpenChange={setIsDefOpen}>
                    <CollapsibleTrigger asChild className="hover:cursor-pointer">
                      <SidebarGroupLabel className="font-fira">Defense</SidebarGroupLabel>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarGroupContent>
                            <SidebarMenu className="grid grid-cols-2">
                                {defenseOptions.map(({ key, icon }) => (
                                <SidebarMenuItem key={key} className={cn(" bg-blue-300/50 rounded-md", defenseFilter === key ? "bg-blue-500 text-white" : '')} onClick={() => defenseFilter$.set(defenseFilter === key ? null : key as typeof defenseFilter)}>
                                    <SidebarMenuButton className="hover:cursor-pointer">
                                    {icon}
                                    <span>{key}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </CollapsibleContent>
                  </Collapsible>
             </SidebarGroup>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
              <SidebarGroup>
                  <SidebarGroupLabel className="font-fira">Rarity</SidebarGroupLabel>
                      <SidebarGroupContent>
                          <SidebarMenu className="grid grid-cols-2">
                              {starOptions.map(({ key, icon }) => (
                                <SidebarMenuItem key={key} className={cn(" bg-blue-300/50 rounded-md", String(starFilter) === key ? "bg-blue-500 text-white" : '')} onClick={() => starFilter$.set(starFilter === Number(key) ? null : Number(key) as 1 | 2 | 3)}>
                                    <SidebarMenuButton className="flex justify-center items-center hover:cursor-pointer">
                                      {icon}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                )
                              )}
                          </SidebarMenu>
                      </SidebarGroupContent>
             </SidebarGroup>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

    </Sidebar>
  )
}
