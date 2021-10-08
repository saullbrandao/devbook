import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      window.document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  return (
    <div className="flex justify-center gap-4 justify-self-end">
      <span className="dark:text-white">Dark Mode</span>
      <Switch
        checked={darkMode}
        onChange={setDarkMode}
        className={`${
          darkMode ? 'bg-primary' : 'bg-secondary'
        } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none`}
      >
        <span className="sr-only">Dark Mode</span>
        <span
          className={`${
            darkMode ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
    </div>
  )
}
