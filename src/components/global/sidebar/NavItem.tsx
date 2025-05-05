import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from 'framer-motion'


interface NavItemProps {
  icon: React.ReactNode
  label: string
  href: string
  active?: boolean
  page: string
  id: string
}
  
  const NavItem = ({ icon, label, href, active,page,id}: NavItemProps) => {
    return (
      <Link href={href} className="w-full">
        <Button 
          variant="ghost" 
          type="button"
          className={cn(
            "w-full justify-start gap-3 font-normal", 
            active ? 
            "bg-gradient-to-r from-purple-900/40 to-blue-900/40 text-white border-l-2 border-purple-500" : 
            "text-zinc-400 hover:text-white hover:bg-zinc-900/40"
          )}
        >
          {icon}
          <span>{label}</span>
          {active && (
            <motion.div
              layoutId="sidebar-active-indicator"
              className="absolute right-0 w-1 h-6 bg-gradient-to-b from-purple-400 to-blue-600 rounded-l-full"
            />
          )}
        </Button>
      </Link>
    )
  }
  
  export default NavItem