import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { MainLayout } from './components/Layout/MainLayout';
import { SuperAdminDashboard } from './pages/SuperAdmin/Dashboard';
import { AdminDashboard } from './pages/Admin/Dashboard';
import { EmployeeDashboard } from './pages/Employee/Dashboard';

const AppContent: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">OC</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">OneClarity</h1>
          <p className="text-gray-400 mb-8">Next-generation CRM platform</p>
          <div className="space-y-4">
            <div className="text-sm text-gray-500">Demo Mode - Select a role to continue:</div>
            <div className="flex space-x-4">
              <button
                onClick={() => useAuth().switchRole('super_admin')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
              >
                Super Admin
              </button>
              <button
                onClick={() => useAuth().switchRole('admin')}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200"
              >
                Admin
              </button>
              <button
                onClick={() => useAuth().switchRole('employee')}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200"
              >
                Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getDashboardComponent = () => {
    switch (user.role) {
      case 'super_admin':
        return <SuperAdminDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'employee':
        return <EmployeeDashboard />;
      default:
        return <Navigate to="/dashboard" />;
    }
  };

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={getDashboardComponent()} />
          {/* Add more routes as needed */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;