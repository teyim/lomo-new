import { cn } from '@workspace/ui/lib/utils';
import { Button } from '@workspace/ui/components/ui/button';
export default function Home() {
  console.log(cn('bg-green-400'));
  return (
    <div className="bg-green-400">
      <h1>Welcome to the Lomo App</h1>
      <p>This is the home page of the Lomo application.</p>
      <p>Explore the features and functionalities we offer!</p>
      <Button>Click Me</Button>
    </div>
  );
}
