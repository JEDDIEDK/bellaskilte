import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: Props) {
  return <span className={cn("inline-flex items-center rounded-full bg-coral px-3 py-1 text-xs font-bold text-white", className)} {...props} />;
}
