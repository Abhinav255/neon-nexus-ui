
import React from 'react';
import Layout from '../components/Layout';
import UserTable from '../components/UserTable';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for users
const mockUsers = [
  { 
    id: 1, 
    name: 'Rei Ayanami', 
    email: 'rei@nerv.jp', 
    phone: '(555) 123-4567', 
    address: 'Tokyo-3, Block C-22',
    dob: '2001-03-30',
    status: 'active' 
  },
  { 
    id: 2, 
    name: 'Shinji Ikari', 
    email: 'shinji@nerv.jp', 
    phone: '(555) 765-4321', 
    address: 'Tokyo-3, Katsuragi Residence',
    dob: '2001-06-06',
    status: 'inactive' 
  },
  { 
    id: 3, 
    name: 'Asuka Langley', 
    email: 'asuka@nerv.jp', 
    phone: '(555) 987-6543', 
    address: 'Tokyo-3, Elite Quarter',
    dob: '2001-12-04',
    status: 'active' 
  },
  { 
    id: 4, 
    name: 'Misato Katsuragi', 
    email: 'misato@nerv.jp', 
    phone: '(555) 456-7890', 
    address: 'Tokyo-3, Katsuragi Residence',
    dob: '1986-12-08',
    status: 'active' 
  },
  { 
    id: 5, 
    name: 'Gendo Ikari', 
    email: 'gendo@nerv.jp', 
    phone: '(555) 321-0987', 
    address: 'NERV HQ, Commander Office',
    dob: '1967-04-29',
    status: 'active' 
  },
  { 
    id: 6, 
    name: 'Ritsuko Akagi', 
    email: 'ritsuko@nerv.jp', 
    phone: '(555) 654-3210', 
    address: 'NERV HQ, Science Division',
    dob: '1985-11-21',
    status: 'active' 
  },
  { 
    id: 7, 
    name: 'Kaworu Nagisa', 
    email: 'kaworu@seele.org', 
    phone: '(555) 789-0123', 
    address: 'Unknown',
    dob: '2000-09-13',
    status: 'inactive' 
  }
];

const Users = () => {
  return (
    <Layout>
      <div className="space-y-6 p-2 md:p-6">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-cyber-blue">User Management</h2>
          <p className="text-muted-foreground">
            Manage your system users from this central dashboard.
          </p>
        </div>
        
        <Card className="border-cyber-magenta/20 shadow-lg shadow-cyber-magenta/10 backdrop-blur-sm bg-background/30">
          <CardHeader className="border-b border-cyber-blue/20 bg-cyber-blue/5">
            <CardTitle className="text-xl font-semibold text-cyber-blue">Users</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <UserTable initialUsers={mockUsers} />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Users;
