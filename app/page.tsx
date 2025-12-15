import { DirectionAwareHoverDemo } from "./homepage/components/DirectionAwareHoverDemo";
import { FounderSection } from "./homepage/components/FounderSection";

export default function Home() {
  return (
    <main className="p-0 m-0 overflow-hidden">
      <DirectionAwareHoverDemo />
      <FounderSection />
    </main>
  );
}

