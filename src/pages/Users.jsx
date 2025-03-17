
import React, { useState } from 'react';
import { SearchIcon, FilterIcon, PlusIcon, EditIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Card from '@/components/Card';
import CyberButton from '@/components/CyberButton';

// Sample user data
const sampleUsers = [
  { id: 1, name: 'Alex Chen', email: 'alex@neocity.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
  { id: 2, name: 'Sophia Rodriguez', email: 'sophia@neocity.com', role: 'User', status: 'Active', lastLogin: '5 hours ago' },
  { id: 3, name: 'Marcus Johnson', email: 'marcus@neocity.com', role: 'Editor', status: 'Inactive', lastLogin: '2 days ago' },
  { id: 4, name: 'Lena Kim', email: 'lena@neocity.com', role: 'User', status: 'Active', lastLogin: '1 day ago' },
  { id: 5, name: 'Kai Zhang', email: 'kai@neocity.com', role: 'User', status: 'Active', lastLogin: 'Just now' },
  { id: 6, name: 'Jordan Smith', email: 'jordan@neocity.com', role: 'Editor', status: 'Active', lastLogin: '3 days ago' },
  { id: 7, name: 'Elara Patel', email: 'elara@neocity.com', role: 'Admin', status: 'Active', lastLogin: '4 hours ago' },
  { id: 8, name: 'Victor Nguyen', email: 'victor@neocity.com', role: 'User', status: 'Inactive', lastLogin: '1 week ago' },
];

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  
  // Handle search
  const filteredUsers = sampleUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.status.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handle sorting
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const aValue = a[sortField].toString().toLowerCase();
    const bValue = b[sortField].toString().toLowerCase();
    
    if (sortDirection === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });
  
  // Handle pagination
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const currentUsers = sortedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  // Handle sorting click
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="cyber-heading text-2xl md:text-3xl">Users</h1>
          <p className="text-white/60 mt-1">Manage system users</p>
        </div>
        
        <CyberButton>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add New User
        </CyberButton>
      </div>
      
      <Card className="overflow-hidden">
        {/* Search and filters */}
        <div className="p-4 border-b border-white/10 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative grow">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="text"
              placeholder="Search users..."
              className="cyber-input w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <CyberButton variant="outline" size="sm">
              <FilterIcon className="h-4 w-4 mr-2" />
              Filter
            </CyberButton>
            <select className="cyber-input min-w-[120px]">
              <option value="all">All Users</option>
              <option value="admin">Admins</option>
              <option value="editor">Editors</option>
              <option value="user">Users</option>
            </select>
          </div>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th 
                  className="px-4 py-3 text-left text-xs font-cyber uppercase tracking-wider text-white/70 cursor-pointer hover:text-white"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center">
                    Name
                    {sortField === 'name' && (
                      <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-cyber uppercase tracking-wider text-white/70 cursor-pointer hover:text-white"
                  onClick={() => handleSort('email')}
                >
                  <div className="flex items-center">
                    Email
                    {sortField === 'email' && (
                      <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-cyber uppercase tracking-wider text-white/70 cursor-pointer hover:text-white"
                  onClick={() => handleSort('role')}
                >
                  <div className="flex items-center">
                    Role
                    {sortField === 'role' && (
                      <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-cyber uppercase tracking-wider text-white/70 cursor-pointer hover:text-white"
                  onClick={() => handleSort('status')}
                >
                  <div className="flex items-center">
                    Status
                    {sortField === 'status' && (
                      <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-cyber uppercase tracking-wider text-white/70 cursor-pointer hover:text-white"
                  onClick={() => handleSort('lastLogin')}
                >
                  <div className="flex items-center">
                    Last Login
                    {sortField === 'lastLogin' && (
                      <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-cyber uppercase tracking-wider text-white/70">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {currentUsers.map((user) => (
                <tr 
                  key={user.id} 
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                    {user.name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-white/80">
                    {user.email}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.role === 'Admin' 
                        ? 'bg-cyber-blue/20 text-cyber-blue' 
                        : user.role === 'Editor' 
                          ? 'bg-cyber-cyan/20 text-cyber-cyan' 
                          : 'bg-cyber-magenta/20 text-cyber-magenta'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-cyber-green/20 text-cyber-green' 
                        : 'bg-cyber-red/20 text-cyber-red'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">
                    {user.lastLogin}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-white flex items-center gap-2">
                    <button className="p-1 rounded hover:bg-white/10 transition-colors text-cyber-blue">
                      <EditIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1 rounded hover:bg-white/10 transition-colors text-cyber-red">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-white/10">
          <div className="text-sm text-white/70">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredUsers.length)} of {filteredUsers.length} users
          </div>
          
          <div className="flex items-center space-x-2">
            <CyberButton 
              variant="outline" 
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </CyberButton>
            
            <div className="text-sm text-white">
              Page {currentPage} of {totalPages}
            </div>
            
            <CyberButton 
              variant="outline" 
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </CyberButton>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Users;
