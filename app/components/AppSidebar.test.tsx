// AppSidebar.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { SidebarProvider } from "@/components/ui/sidebar"; // pastikan path sesuai
import { AppSidebar } from "./AppSIdebar";
import { vi } from "vitest";
import { attackFilter$ } from "@/stores/filter";

describe("AppSidebar", () => {
    beforeAll(() => {
        window.matchMedia = vi.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        }));
      });
      
  it("renders sidebar inside context", () => {
    render(
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
    );

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("name")).toBeInTheDocument();
    expect(screen.getByTestId("students")).toBeInTheDocument();
    expect(screen.getByTestId("attack")).toBeInTheDocument();
    expect(screen.getByTestId("defense")).toBeInTheDocument();
    expect(screen.getByTestId("rarity")).toBeInTheDocument();
  });

  it('allows clicking on attack filter and updates style', () => {
    render(
        <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
    )

    const explosiveButton = screen.getByText('Explosive')
    expect(explosiveButton).toBeInTheDocument()

    fireEvent.click(explosiveButton)

    expect(attackFilter$.get()).toBe('Explosive')
  })
});
