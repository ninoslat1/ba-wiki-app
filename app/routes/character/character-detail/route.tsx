import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AppSidebar } from '@/components/AppSIdebar'

export const Route = createFileRoute('/character/character-detail')({
  component: CharacterLayout,
})

export function CharacterLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger className="hover:cursor-pointer" />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
