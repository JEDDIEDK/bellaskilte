import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: Props) {
  return <div className={cn("rounded-2xl border border-slate-200 bg-white/95 shadow-soft", className)} {...props} />;
}
