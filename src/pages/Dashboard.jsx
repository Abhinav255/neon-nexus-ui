
import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, UsersIcon, DollarSignIcon, BoxIcon, TrendingUpIcon } from 'lucide-react';
import Card from '@/components/Card';
import CyberButton from '@/components/CyberButton';

// Stats card component
const StatCard = ({ title, value, change, icon: Icon, trend, color }) => {
  const isPositive = trend === 'up';
  
  return (
    <Card className="p-4" glowColor={color}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-white/60 text-xs font-cyber uppercase tracking-wider">{title}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
          
          <div className="flex items-center mt-2">
            <span className={`text-xs ${isPositive ? 'text-cyber-green' : 'text-cyber-red'} flex items-center`}>
              {isPositive ? <ArrowUpIcon className="h-3 w-3 mr-1" /> : <ArrowDownIcon className="h-3 w-3 mr-1" />}
              {change}
            </span>
            <span className="text-xs text-white/40 ml-1">vs last month</span>
          </div>
        </div>
        
        <div className={`p-3 rounded-full bg-${color === 'blue' ? 'cyber-blue' : color === 'magenta' ? 'cyber-magenta' : color === 'cyan' ? 'cyber-cyan' : 'cyber-purple'}/10`}>
          <Icon className={`h-5 w-5 text-${color === 'blue' ? 'cyber-blue' : color === 'magenta' ? 'cyber-magenta' : color === 'cyan' ? 'cyber-cyan' : 'cyber-purple'}`} />
        </div>
      </div>
    </Card>
  );
};

// Chart card component - we would use a real chart library in production
const ChartCard = ({ title, children }) => (
  <Card className="p-4 md:col-span-2">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-white font-cyber">{title}</h3>
      <div className="flex gap-2">
        <CyberButton variant="ghost" size="sm">Daily</CyberButton>
        <CyberButton variant="ghost" size="sm">Weekly</CyberButton>
        <CyberButton variant="ghost" size="sm" className="bg-white/5">Monthly</CyberButton>
      </div>
    </div>
    {children}
  </Card>
);

// Activity component
const ActivityItem = ({ title, time, description, icon }) => (
  <div className="flex items-start mb-4">
    <div className="mr-3 mt-1 bg-cyber-blue/10 p-2 rounded-md">
      {icon}
    </div>
    <div>
      <p className="text-white text-sm font-medium">{title}</p>
      <p className="text-white/50 text-xs">{time}</p>
      <p className="text-white/70 text-sm mt-1">{description}</p>
    </div>
  </div>
);

const Dashboard = () => {
  // Sample data for the chart - in a real app, we'd use a chart library
  const generateChartData = (height = 150) => {
    const width = 600;
    const points = 24;
    
    let pathData = `M0,${height} `;
    
    for (let i = 0; i < points; i++) {
      const x = (width / points) * i;
      const randomY = Math.random() * (height * 0.6) + height * 0.2;
      pathData += `L${x},${height - randomY} `;
    }
    
    pathData += `L${width},${height} L0,${height}`;
    
    return pathData;
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="cyber-heading text-2xl md:text-3xl">Dashboard</h1>
        <p className="text-white/60 mt-1">Welcome back, Administrator</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Users" 
          value="2,845" 
          change="12.5%" 
          icon={UsersIcon} 
          trend="up"
          color="blue"
        />
        <StatCard 
          title="Revenue" 
          value="$12,875" 
          change="8.2%" 
          icon={DollarSignIcon} 
          trend="up"
          color="cyan"
        />
        <StatCard 
          title="Products" 
          value="385" 
          change="2.1%" 
          icon={BoxIcon} 
          trend="down"
          color="magenta"
        />
        <StatCard 
          title="Growth" 
          value="15.3%" 
          change="5.7%" 
          icon={TrendingUpIcon} 
          trend="up"
          color="purple"
        />
      </div>
      
      {/* Charts and Activity */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Chart */}
        <ChartCard title="Performance Analytics">
          <div className="relative h-[240px] w-full">
            <svg className="w-full h-full">
              {/* Horizontal grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line 
                  key={i}
                  x1="0" 
                  y1={i * 60} 
                  x2="100%" 
                  y2={i * 60} 
                  stroke="rgba(255, 255, 255, 0.1)" 
                  strokeDasharray="4 4"
                />
              ))}
              
              {/* Main chart line - gradient fill */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0, 114, 255, 0.5)" />
                  <stop offset="100%" stopColor="rgba(0, 114, 255, 0)" />
                </linearGradient>
              </defs>
              
              <path
                d={generateChartData()}
                fill="url(#gradient)"
                stroke="rgba(0, 114, 255, 0.8)"
                strokeWidth="2"
              />
              
              {/* Secondary line */}
              <path
                d={generateChartData()}
                fill="none"
                stroke="rgba(255, 0, 255, 0.6)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
            
            {/* Labels */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between px-4 text-xs text-white/40">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>24:00</span>
            </div>
            
            <div className="absolute top-0 left-0 h-full flex flex-col justify-between py-2 text-xs text-white/40">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>
          </div>
        </ChartCard>
        
        {/* Activity Feed */}
        <Card className="p-4 overflow-hidden">
          <h3 className="text-white font-cyber mb-4">Recent Activity</h3>
          
          <div className="space-y-4 cyber-scrollbar overflow-y-auto pr-2" style={{ maxHeight: "240px" }}>
            <ActivityItem 
              title="User Registration"
              time="2 minutes ago"
              description="New user Alex Chen registered."
              icon={<UsersIcon className="h-4 w-4 text-cyber-blue" />}
            />
            <ActivityItem 
              title="Product Updated"
              time="25 minutes ago"
              description="Quantum X-700 stock updated to 24 units."
              icon={<BoxIcon className="h-4 w-4 text-cyber-magenta" />}
            />
            <ActivityItem 
              title="New Order"
              time="1 hour ago"
              description="Order #2589 placed for $1,299."
              icon={<DollarSignIcon className="h-4 w-4 text-cyber-green" />}
            />
            <ActivityItem 
              title="System Update"
              time="3 hours ago"
              description="System updated to version 2.4.0."
              icon={<TrendingUpIcon className="h-4 w-4 text-cyber-yellow" />}
            />
            <ActivityItem 
              title="New Features"
              time="5 hours ago"
              description="Added holographic projections to dashboard."
              icon={<TrendingUpIcon className="h-4 w-4 text-cyber-cyan" />}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
