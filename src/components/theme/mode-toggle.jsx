import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  return (
    <div
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="border cursor-pointer rounded w-8 h-8 flex items-center justify-center">
      {theme === 'dark' && <div><Sun className="h-4 w-4" /></div>}
      {theme === 'light' && <div><Moon className="h-4 w-4" /></div>}
    </div>
  )
}
