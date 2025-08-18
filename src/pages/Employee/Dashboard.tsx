import React from 'react';
import { MetricCard } from '../../components/UI/MetricCard';
import { Card, CardHeader, CardContent } from '../../components/UI/Card';
import { AreaChart } from '../../components/Charts/AreaChart';
import { Zap, Target, BookOpen, Award, Bot, Calendar } from 'lucide-react';

const skillProgressData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 68 },
  { name: 'Mar', value: 72 },
  { name: 'Apr', value: 76 },
  { name: 'May', value: 79 },
  { name: 'Jun', value: 83 },
];

export const EmployeeDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome back, John! 👋</h1>
          <p className="text-gray-400 mt-2">Here's your personal development overview</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
            View Learning Path
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            Update Skills
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Skill Score"
          value="83%"
          change={{ value: "+7% this month", type: "increase" }}
          icon={Zap}
          color="blue"
        />
        <MetricCard
          title="Targets Met"
          value="12/15"
          change={{ value: "80% complete", type: "increase" }}
          icon={Target}
          color="green"
        />
        <MetricCard
          title="Learning Hours"
          value="24h"
          change={{ value: "+5h this week", type: "increase" }}
          icon={BookOpen}
          color="purple"
        />
        <MetricCard
          title="Achievements"
          value="8"
          change={{ value: "2 new badges", type: "increase" }}
          icon={Award}
          color="orange"
        />
      </div>

      {/* Progress Chart and AI Mentor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Skill Progress" subtitle="Your skill development over time" />
          <CardContent>
            <AreaChart data={skillProgressData} dataKey="value" color="#8B5CF6" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader 
            title="AI Mentor" 
            subtitle="Your personal development assistant"
            action={<Bot className="w-5 h-5 text-purple-400" />}
          />
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-800/50">
              <h4 className="text-white font-medium mb-2">🎯 Today's Focus</h4>
              <p className="text-gray-300 text-sm mb-3">
                Complete your React Advanced Patterns course. You're 80% through!
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
              <h4 className="text-white font-medium mb-2">💡 Smart Suggestion</h4>
              <p className="text-gray-300 text-sm">
                Based on your progress, consider taking the TypeScript certification next.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
              <h4 className="text-white font-medium mb-2">🚀 Motivation</h4>
              <p className="text-gray-300 text-sm">
                You're in the top 20% of learners this month. Keep it up!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Skills and Upcoming Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Current Skills" subtitle="Your validated competencies" />
          <CardContent className="space-y-4">
            {[
              { skill: 'React.js', level: 85, status: 'validated', color: 'blue' },
              { skill: 'TypeScript', level: 78, status: 'pending', color: 'orange' },
              { skill: 'Node.js', level: 92, status: 'validated', color: 'green' },
              { skill: 'GraphQL', level: 65, status: 'learning', color: 'purple' },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{skill.skill}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      skill.status === 'validated' ? 'bg-green-900/30 text-green-400' :
                      skill.status === 'pending' ? 'bg-orange-900/30 text-orange-400' :
                      'bg-purple-900/30 text-purple-400'
                    }`}>
                      {skill.status}
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      skill.color === 'blue' ? 'bg-blue-500' :
                      skill.color === 'orange' ? 'bg-orange-500' :
                      skill.color === 'green' ? 'bg-green-500' :
                      'bg-purple-500'
                    }`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Upcoming Tasks & Deadlines" subtitle="Your schedule for this week" />
          <CardContent className="space-y-4">
            {[
              { task: 'Complete React Certification', due: 'Tomorrow', priority: 'high', type: 'learning' },
              { task: 'Submit TypeScript project', due: 'In 3 days', priority: 'medium', type: 'project' },
              { task: 'Team code review session', due: 'Friday', priority: 'low', type: 'meeting' },
              { task: 'Update skill portfolio', due: 'Next week', priority: 'medium', type: 'admin' },
            ].map((task, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800 border border-gray-700">
                <div className={`w-3 h-3 rounded-full ${
                  task.type === 'learning' ? 'bg-purple-500' :
                  task.type === 'project' ? 'bg-blue-500' :
                  task.type === 'meeting' ? 'bg-green-500' :
                  'bg-orange-500'
                }`} />
                <div className="flex-1">
                  <p className="text-white font-medium">{task.task}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{task.due}</span>
                    <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      task.priority === 'high' ? 'bg-red-900/30 text-red-400' :
                      task.priority === 'medium' ? 'bg-orange-900/30 text-orange-400' :
                      'bg-green-900/30 text-green-400'
                    }`}>
                      {task.priority}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};