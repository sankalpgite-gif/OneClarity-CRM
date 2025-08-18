import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  Building2, 
  GraduationCap,
  UserCheck,
  Target,
  BookOpen,
  Award,
  Bot,
  FolderOpen,
  Briefcase,
  Code,
  Calendar,
  ChevronRight,
  Zap
} from 'lucide-react';
import { useAuth, UserRole } from '../../contexts/AuthContext';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  roles: UserRole[];
  badge?: string;
}

const navigation: NavItem[] = [
  { name: 'Company Overview', href: '/dashboard', icon: LayoutDashboard, roles: ['super_admin'] },
  { name: 'Managers', href: '/managers', icon: Users, roles: ['super_admin'] },
  { name: 'Reports & Insights', href: '/reports', icon: BarChart3, roles: ['super_admin'] },
  { name: 'Platform Controls', href: '/platform', icon: Settings, roles: ['super_admin'] },
  { name: 'Organizations', href: '/organizations', icon: Building2, roles: ['super_admin'] },
  { name: 'Placement Tracking', href: '/placements', icon: GraduationCap, roles: ['super_admin'] },
  { name: 'Recruiter Portal', href: '/recruiters', icon: Briefcase, roles: ['super_admin'] },
  { name: 'AI/ML Projects', href: '/ai-projects', icon: Code, roles: ['super_admin'] },
  { name: 'Team Assignments', href: '/assignments', icon: Calendar, roles: ['super_admin'] },
  
  // Admin routes
  { name: 'Team Overview', href: '/dashboard', icon: LayoutDashboard, roles: ['admin'] },
  { name: 'Skill Validation', href: '/skill-validation', icon: UserCheck, roles: ['admin'], badge: '3' },
  { name: 'Set Skill Targets', href: '/skill-targets', icon: Target, roles: ['admin'] },
  { name: 'Team Reports', href: '/team-reports', icon: BarChart3, roles: ['admin'] },
  { name: 'AI Assistant', href: '/ai-assistant', icon: Bot, roles: ['admin'] },
  { name: 'Projects & Tasks', href: '/projects', icon: FolderOpen, roles: ['admin'] },
  
  // Employee routes
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, roles: ['employee'] },
  { name: 'My Skills', href: '/my-skills', icon: Zap, roles: ['employee'] },
  { name: 'Learning Path', href: '/learning-path', icon: BookOpen, roles: ['employee'] },
  { name: 'Projects & Achievements', href: '/achievements', icon: Award, roles: ['employee'] },
  { name: 'AI Mentor', href: '/ai-mentor', icon: Bot, roles: ['employee'] },
];

export const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  const filteredNavigation = navigation.filter(item => 
    user && item.roles.includes(user.role)
  );

  return (
    <div className="flex flex-col h-full bg-gray-900 border-r border-gray-800">
      {/* Logo */}
      <div className="flex items-center px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">OneClarity</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {filteredNavigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={`flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                <span>{item.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full">
                    {item.badge}
                  </span>
                )}
                {isActive && <ChevronRight className="w-4 h-4 text-white" />}
              </div>
            </NavLink>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{user?.name}</p>
            <p className="text-xs text-gray-400 capitalize">{user?.role.replace('_', ' ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};