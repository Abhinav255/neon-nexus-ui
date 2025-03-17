
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddProduct = () => {
  return (
    <Layout>
      <div className="space-y-6 p-2 md:p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-cyber-blue">Add New Product</h2>
            <Link to="/products">
              <Button variant="outline" size="sm" className="border-cyber-blue/20 text-cyber-blue">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
          <p className="text-muted-foreground">
            Create a new product in the catalog.
          </p>
        </div>
        
        <Card className="border-cyber-magenta/20 shadow-lg shadow-cyber-magenta/10 backdrop-blur-sm bg-background/30">
          <CardHeader className="border-b border-cyber-blue/20 bg-cyber-blue/5">
            <CardTitle className="text-xl font-semibold text-cyber-blue">Product Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center text-muted-foreground py-10">
              <p>Product form would go here</p>
              <p className="mt-2 text-sm">This is a placeholder for the product creation form</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AddProduct;
