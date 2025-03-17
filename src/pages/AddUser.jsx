
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AddUser = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically handle form submission to API
    // For now, we'll just show a success message and redirect
    toast({
      title: "User created successfully",
      description: "The user has been added to the system.",
    });
    
    navigate('/users');
  };
  
  return (
    <Layout>
      <div className="space-y-6 p-2 md:p-6">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/users')}
            className="hover:bg-cyber-blue/10 hover:text-cyber-blue"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Users
          </Button>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-cyber-blue">Add New User</h2>
          <p className="text-muted-foreground">
            Create a new user account in the system.
          </p>
        </div>
        
        <Card className="border-cyber-magenta/20 shadow-lg shadow-cyber-magenta/10 backdrop-blur-sm bg-background/30">
          <CardHeader className="border-b border-cyber-blue/20 bg-cyber-blue/5">
            <CardTitle className="text-xl font-semibold text-cyber-blue">User Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter full name" 
                    required 
                    className="hover:border-cyber-blue focus:border-cyber-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter email address" 
                    required 
                    className="hover:border-cyber-blue focus:border-cyber-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    placeholder="Enter phone number" 
                    className="hover:border-cyber-blue focus:border-cyber-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="active">
                    <SelectTrigger className="hover:border-cyber-blue focus:border-cyber-blue">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="bg-background/80 backdrop-blur-md">
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input 
                    id="address" 
                    placeholder="Enter address" 
                    className="hover:border-cyber-blue focus:border-cyber-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input 
                    id="dob" 
                    type="date" 
                    className="hover:border-cyber-blue focus:border-cyber-blue"
                  />
                </div>
              </div>
              
              <CardFooter className="flex justify-end space-x-4 px-0">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate('/users')}
                  className="border-cyber-blue/50 hover:bg-cyber-blue/10"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-cyber-blue hover:bg-cyber-blue/80"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save User
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AddUser;
