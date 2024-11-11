// components/MyComponent.tsx
import { useEffect } from "react";

export default function MyComponent() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.location.href);
    }
  }, []);

  return <div>My Component</div>;
}
