import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const options = [
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
  { value: "system", icon: Monitor },
];

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="flex items-center gap-1 bg-surface border border-border rounded-full p-1">
      {options.map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={`${value} mode`}
          className={`p-1.5 rounded-full transition-colors ${
            theme === value ? "bg-accent text-bg" : "text-muted hover:text-text"
          }`}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
}