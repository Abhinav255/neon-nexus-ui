
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import CyberButton from '../components/CyberButton';
import { BarChart4, Users, Package, TrendingUp, Activity, Zap } from 'lucide-react';

const statCards = [
  { title: 'Total Users', value: '2,846', icon: Users, color: 'blue', trend: '+12%', link: '/users' },
  { title: 'Active Products', value: '1,245', icon: Package, color: 'magenta', trend: '+5%', link: '/products' },
  { title: 'Revenue', value: '$42.5k', icon: TrendingUp, color: 'cyan', trend: '+8%' },
  { title: 'System Status', value: 'Optimal', icon: Activity, color: 'purple', trend: '99.8%' }
];

const Index = () => {
  return (
    <Layout>
      <div className="grid gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="cyber-text text-2xl font-bold tracking-wider text-white md:text-3xl">DASHBOARD</h1>
          <p className="text-cyber-blue">System overview and analytics</p>
          
          <div className="absolute right-6 top-20">
            <div className="font-mono text-xs text-cyber-blue opacity-70">
              <div>SYS.UPTIME: 42D:18H:39M</div>
              <div>SECURITY.LEVEL: MAXIMUM</div>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Link key={index} to={stat.link || '#'} className="block">
                <Card className="p-4 hover:shadow-lg hover:shadow-cyber-blue/20 transition-all" glowColor={stat.color}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-400">{stat.title}</div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                    </div>
                    <div className={`rounded-full p-2 bg-cyber-${stat.color}/10`}>
                      <Icon className={`h-6 w-6 text-cyber-${stat.color}`} />
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs font-medium text-green-400">{stat.trend}</span>
                    <span className="ml-1 text-xs text-gray-400">from last month</span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Activity Feed */}
          <Card className="col-span-1 p-5" glowColor="blue">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
              <Zap className="h-5 w-5 text-cyber-blue" />
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex items-start gap-3 border-b border-cyber-blue/10 pb-3 last:border-0">
                  <div className="h-9 w-9 rounded-full bg-cyber-blue/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-white">New user registered</div>
                    <div className="text-xs text-gray-400">3 minutes ago</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <Link to="/users">
                <CyberButton variant="ghost" size="sm" className="w-full">
                  View All Activity
                </CyberButton>
              </Link>
            </div>
          </Card>
          
          {/* Analytics Panel */}
          <Card className="col-span-1 lg:col-span-2 p-5" glowColor="multi">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Performance Analytics</h2>
              <BarChart4 className="h-5 w-5 text-cyber-magenta" />
            </div>
            
            <div className="h-64 w-full">
              <div className="cyber-panel h-full bg-cyber-panel/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-cyber-blue mb-2">Analytics Visualization</div>
                  <div className="text-sm text-gray-400">Interactive charts would appear here</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded bg-cyber-blue/10 p-2 text-center">
                <div className="text-xs text-gray-400">Visitors</div>
                <div className="text-sm font-medium text-white">12.5k</div>
              </div>
              <div className="rounded bg-cyber-magenta/10 p-2 text-center">
                <div className="text-xs text-gray-400">Conversions</div>
                <div className="text-sm font-medium text-white">3.8k</div>
              </div>
              <div className="rounded bg-purple-500/10 p-2 text-center">
                <div className="text-xs text-gray-400">Retention</div>
                <div className="text-sm font-medium text-white">87%</div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-2">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <CyberButton>Generate Report</CyberButton>
            <Link to="/products/add">
              <CyberButton variant="secondary" className="w-full">Add Product</CyberButton>
            </Link>
            <CyberButton variant="outline">System Scan</CyberButton>
            <Link to="/users/add">
              <CyberButton variant="ghost" className="w-full">Add User</CyberButton>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
