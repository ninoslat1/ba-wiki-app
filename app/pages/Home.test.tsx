import { act, render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryHistory } from "@tanstack/react-router";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { vi } from "vitest";

// ✅ Mock the server function
vi.mock("@/functions/server", () => ({
  getCharacterData: vi.fn(() => Promise.resolve([])),
}))

const homeRouter = createRouter({
  routeTree,
  history: createMemoryHistory(),
});

describe("Home Page", async () => {
  it("Home page renders correctly with label", async () => {
    await act(() => render(<RouterProvider router={homeRouter} />))

    expect(screen.getByText("Welcome to Blue Archive Wiki App")).toBeInTheDocument();
    expect(screen.getByText("Character List")).toBeInTheDocument();
  });
});