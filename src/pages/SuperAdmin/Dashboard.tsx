import React from 'react';
import { MetricCard } from '../../components/UI/MetricCard';
import { Card, CardHeader, CardContent } from '../../components/UI/Card';
import { AreaChart } from '../../components/Charts/AreaChart';
import { BarChart } from '../../components/Charts/BarChart';
import { Building2, Users, FolderOpen, TrendingUp, Bot, Calendar } from 'lucide-react';

const performanceData = [
  { name: 'Jan', value: 85 },
  { name: 'Feb', value: 88 },
  { name: 'Mar', value: 92 },
  { name: 'Apr', value: 89 },
  { name: 'May', value: 95 },
  { name: 'Jun', value: 97 },
];

const departmentData = [
  { name: 'Engineering', value: 95 },
  { name: 'Sales', value: 88 },
  { name: 'Marketing', value: 92 },
  { name: 'HR', value: 85 },
  { name: 'Operations', value: 90 },
];

export const SuperAdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Company Overview</h1>
          <p className="text-gray-400 mt-2">Monitor performance across all departments and branches</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
            Export Report
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            Generate Insights
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Organizations"
          value="24"
          change={{ value: "+12%", type: "increase" }}
          icon={Building2}
          color="blue"
        />
        <MetricCard
          title="Active Employees"
          value="1,247"
          change={{ value: "+8%", type: "increase" }}
          icon={Users}
          color="green"
        />
        <MetricCard
          title="Projects Completed"
          value="89"
          change={{ value: "+23%", type: "increase" }}
          icon={FolderOpen}
          color="purple"
        />
        <MetricCard
          title="Compliance Rate"
          value="94.2%"
          change={{ value: "+2.1%", type: "increase" }}
          icon={TrendingUp}
          color="orange"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Performance Trends" subtitle="Monthly performance across all departments" />
          <CardContent>
            <AreaChart data={performanceData} dataKey="value" color="#3B82F6" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Department Performance" subtitle="Current performance by department" />
          <CardContent>
            <BarChart data={departmentData} dataKey="value" color="#10B981" />
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Recent Activities" subtitle="Latest system activities" />
          <CardContent className="space-y-4">
            {[
              { action: 'New organization onboarded', time: '2 hours ago', type: 'success' },
              { action: 'Manager assigned to Tech team', time: '4 hours ago', type: 'info' },
              { action: 'Compliance report generated', time: '6 hours ago', type: 'warning' },
              { action: 'AI model training completed', time: '8 hours ago', type: 'success' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-400' :
                  activity.type === 'warning' ? 'bg-orange-400' :
                  'bg-blue-400'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-white">{activity.action}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader 
            title="AI Assistant Insights" 
            subtitle="Smart recommendations for your platform"
            action={<Bot className="w-5 h-5 text-blue-400" />}
          />
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50">
              <h4 className="text-white font-medium mb-2">🎯 Top Recommendation</h4>
              <p className="text-gray-300 text-sm">
                Engineering team showing 15% skill improvement this month. Consider promoting 3 senior developers.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
              <h4 className="text-white font-medium mb-2">📊 Performance Alert</h4>
              <p className="text-gray-300 text-sm">
                Sales department compliance dropped to 82%. Schedule training session for next week.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
              <h4 className="text-white font-medium mb-2">🚀 Growth Opportunity</h4>
              <p className="text-gray-300 text-sm">
                New AI features ready for deployment. Expected 20% productivity increase.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};