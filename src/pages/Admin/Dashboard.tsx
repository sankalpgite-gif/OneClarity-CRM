import React from 'react';
import { MetricCard } from '../../components/UI/MetricCard';
import { Card, CardHeader, CardContent } from '../../components/UI/Card';
import { AreaChart } from '../../components/Charts/AreaChart';
import { Users, Target, TrendingUp, AlertTriangle, Bot, CheckCircle } from 'lucide-react';

const skillTrendData = [
  { name: 'Jan', value: 75 },
  { name: 'Feb', value: 78 },
  { name: 'Mar', value: 82 },
  { name: 'Apr', value: 85 },
  { name: 'May', value: 87 },
  { name: 'Jun', value: 90 },
];

export const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Team Overview</h1>
          <p className="text-gray-400 mt-2">Manage your team's skills and track their progress</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
            Export Team Report
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            Set New Targets
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Team Members"
          value="24"
          change={{ value: "+2 this month", type: "increase" }}
          icon={Users}
          color="blue"
        />
        <MetricCard
          title="Skill Compliance"
          value="87%"
          change={{ value: "+5%", type: "increase" }}
          icon={Target}
          color="green"
        />
        <MetricCard
          title="Growth Rate"
          value="12.5%"
          change={{ value: "+2.3%", type: "increase" }}
          icon={TrendingUp}
          color="purple"
        />
        <MetricCard
          title="Pending Validations"
          value="8"
          change={{ value: "3 urgent", type: "neutral" }}
          icon={AlertTriangle}
          color="orange"
        />
      </div>

      {/* Charts and AI Assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Team Skill Progress" subtitle="Average skill level trends over time" />
          <CardContent>
            <AreaChart data={skillTrendData} dataKey="value" color="#10B981" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader 
            title="AI Assistant Recommendations" 
            subtitle="Smart insights for your team"
            action={<Bot className="w-5 h-5 text-purple-400" />}
          />
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-800/50">
              <h4 className="text-white font-medium mb-2">🎯 Focus Area</h4>
              <p className="text-gray-300 text-sm">
                React development skills need attention in your team. Schedule training for 6 members.
              </p>
              <button className="mt-2 px-3 py-1 text-xs bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200">
                Create Training Plan
              </button>
            </div>
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
              <h4 className="text-white font-medium mb-2">📈 Performance Insight</h4>
              <p className="text-gray-300 text-sm">
                Sarah and Mike are ready for senior roles. Consider promotion.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
              <h4 className="text-white font-medium mb-2">⚡ Quick Win</h4>
              <p className="text-gray-300 text-sm">
                Complete 3 pending skill validations to boost team compliance to 92%.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Members and Pending Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Team Members" subtitle="Current skill levels and status" />
          <CardContent className="space-y-4">
            {[
              { name: 'Sarah Johnson', role: 'Frontend Developer', compliance: 95, status: 'excellent' },
              { name: 'Mike Chen', role: 'Full Stack Developer', compliance: 88, status: 'good' },
              { name: 'Emma Davis', role: 'UI/UX Designer', compliance: 78, status: 'needs_improvement' },
              { name: 'James Wilson', role: 'Backend Developer', compliance: 92, status: 'excellent' },
            ].map((member, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">{member.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{member.name}</p>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    member.status === 'excellent' ? 'bg-green-900/30 text-green-400' :
                    member.status === 'good' ? 'bg-blue-900/30 text-blue-400' :
                    'bg-orange-900/30 text-orange-400'
                  }`}>
                    {member.compliance}%
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Pending Skill Validations" subtitle="Requires your attention" />
          <CardContent className="space-y-4">
            {[
              { employee: 'Emma Davis', skill: 'Advanced Figma', submitted: '2 hours ago', urgency: 'high' },
              { employee: 'Tom Brown', skill: 'Node.js Architecture', submitted: '1 day ago', urgency: 'medium' },
              { employee: 'Lisa Park', skill: 'React Hooks', submitted: '2 days ago', urgency: 'low' },
              { employee: 'Alex Kim', skill: 'TypeScript', submitted: '3 days ago', urgency: 'medium' },
            ].map((validation, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-800 border-l-4 border-l-blue-500">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-medium">{validation.employee}</p>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      validation.urgency === 'high' ? 'bg-red-900/30 text-red-400' :
                      validation.urgency === 'medium' ? 'bg-orange-900/30 text-orange-400' :
                      'bg-green-900/30 text-green-400'
                    }`}>
                      {validation.urgency}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">{validation.skill}</p>
                  <p className="text-xs text-gray-400 mt-1">{validation.submitted}</p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                    <CheckCircle className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
                    <AlertTriangle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};