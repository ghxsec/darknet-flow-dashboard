
import React from 'react';
import { 
  Shield, 
  Globe, 
  Settings, 
  Activity, 
  Users, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const navItems = [
    { name: 'Dashboard', icon: Shield, active: true },
    { name: 'Servers', icon: Globe, active: false },
    { name: 'Activity', icon: Activity, active: false },
    { name: 'Settings', icon: Settings, active: false },
    { name: 'Account', icon: Users, active: false },
  ];

  return (
    <aside 
      className={`fixed z-10 h-screen bg-vpn-darker border-r border-white/5 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/5">
          <div className={`flex items-center ${isOpen ? '' : 'justify-center w-full'}`}>
            {isOpen ? (
              <h1 className="text-xl font-bold text-gradient">NexusVPN</h1>
            ) : (
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-vpn-accent to-vpn-accent-purple flex items-center justify-center text-white font-bold">
                N
              </div>
            )}
          </div>
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-full bg-vpn-muted/50 hover:bg-vpn-muted text-white/70 hover:text-white"
          >
            {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>

        <nav className="flex-1 px-3 py-6">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className={`flex items-center px-3 py-3 rounded-lg transition-all ${
                    item.active
                      ? 'bg-vpn-accent/10 text-vpn-accent'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon size={20} className={`${isOpen ? 'mr-3' : 'mx-auto'}`} />
                  {isOpen && <span className="text-sm font-medium">{item.name}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4">
          {isOpen ? (
            <div className="glass-card p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-vpn-accent-purple to-vpn-accent flex items-center justify-center">
                  <Shield size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Premium Plan</h3>
                  <p className="text-xs text-white/60">Valid until June 2025</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-vpn-accent-purple to-vpn-accent flex items-center justify-center">
                <Shield size={18} className="text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
