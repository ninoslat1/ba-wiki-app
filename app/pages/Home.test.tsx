import { act, render, screen, waitFor } from "@testing-library/react";
import { RouterProvider, createMemoryHistory } from "@tanstack/react-router";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { vi } from "vitest";

// ✅ Mock the server function
vi.mock("@/functions/server", () => ({
  getCharacterData: vi.fn(() => Promise.resolve([])),
  getCharacterDetailDataFn: vi.fn(() =>
    Promise.resolve({ name: "Minori" })
  ),
}))

const router = createRouter({
  routeTree,
  history: createMemoryHistory(),
});

describe("Home Page", async () => {
  it("Home page renders correctly with label", async () => {
    await act(() => render(<RouterProvider router={router} />))

    expect(screen.getByText("Welcome to Blue Archive Wiki App")).toBeInTheDocument();
    expect(screen.getByText("Character List")).toBeInTheDocument();
  });
});