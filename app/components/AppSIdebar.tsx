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
import { attackFilter$ } from "@/stores/filter"

const filterOptions:TFilterOption[] = [
    { key: 'Explosive', icon: <ExplosiveIcon />, label: 'Explosive' },
    { key: 'Mystic', icon: <MysticIcon />, label: 'Mystic' },
    { key: 'Piercing', icon: <PiercingIcon />, label: 'Piercing' },
    { key: 'Sonic', icon: <SonicIcon />, label: 'Sonic' },
  ];

export function AppSidebar() {
  const selectedFilter = use$(attackFilter$)
    
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-fira">Students Filter</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarGroupLabel className="font-fira">Attack</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu className="grid grid-cols-2">
                        {filterOptions.map(({ key, icon, label }) => (
                        <SidebarMenuItem key={key} className={cn(" bg-blue-300/50 rounded-md", selectedFilter === key ? "bg-blue-500 text-white" : '')} onClick={() => attackFilter$.set(key as unknown as typeof attackFilter$)}>
                            <SidebarMenuButton className="hover:cursor-pointer">
                            {icon}
                            <span>{label}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
      </SidebarGroup>
      </SidebarContent>

    </Sidebar>
  )
}
