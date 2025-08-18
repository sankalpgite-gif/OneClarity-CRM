import React from 'react';
import { Bell, Search, Menu, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const { user, logout, switchRole } = useAuth();

  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search everything..."
              className="pl-10 pr-4 py-2 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Role Switcher - Demo purposes */}
          <select
            value={user?.role}
            onChange={(e) => switchRole(e.target.value as any)}
            className="px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="super_admin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>

          <button className="relative p-2 text-gray-400 hover:text-white transition-colors duration-200">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="relative group">
            <button className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white transition-colors duration-200">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-8 h-8 rounded-full"
              />
            </button>
            
            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
              <div className="p-3 border-b border-gray-700">
                <p className="text-sm font-medium text-white">{user?.name}</p>
                <p className="text-xs text-gray-400">{user?.email}</p>
              </div>
              <div className="p-2">
                <button className="flex items-center space-x-2 w-full px-3 py-2 text-left text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 w-full px-3 py-2 text-left text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};