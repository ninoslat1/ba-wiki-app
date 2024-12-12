import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div>
      <p>The page you are looking for does not exist.</p>
      <p>
        <button type="button" onClick={() => window.history.back()}>
          Go back
        </button>
        <button>
          <Link to="/">Home</Link>
        </button>
      </p>
    </div>
  );
}