
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductTable from '../components/ProductTable';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, ArrowLeft } from 'lucide-react';

// Mock data for products
const mockProducts = [
  { 
    id: 1, 
    name: 'Cybernetic Implant XJ-401', 
    category: 'Augmentations',
    description: 'Neural interface implant with enhanced processing capabilities.',
    price: 1299.99,
    image: '/placeholder.svg',
    tags: ['Neural', 'Processing', 'Interface'],
    status: 'active' 
  },
  { 
    id: 2, 
    name: 'Holographic Display Module', 
    category: 'Electronics',
    description: 'Full-color interactive holographic display with gesture recognition.',
    price: 899.50,
    image: '/placeholder.svg',
    tags: ['Hologram', 'Display', 'Interactive'],
    status: 'active' 
  },
  { 
    id: 3, 
    name: 'Quantum Encryption Device', 
    category: 'Security',
    description: 'Military-grade encryption using quantum entanglement technology.',
    price: 1499.99,
    image: '/placeholder.svg',
    tags: ['Encryption', 'Security', 'Quantum'],
    status: 'active' 
  },
  { 
    id: 4, 
    name: 'Neural Network Processor', 
    category: 'Computing',
    description: 'Advanced AI processing unit with self-learning capabilities.',
    price: 2599.99,
    image: '/placeholder.svg',
    tags: ['AI', 'Computing', 'Neural'],
    status: 'inactive' 
  },
  { 
    id: 5, 
    name: 'Synthetic Organ Replacement', 
    category: 'Medical',
    description: 'Lab-grown organic replacement organs with cybernetic enhancements.',
    price: 4999.99,
    image: '/placeholder.svg',
    tags: ['Medical', 'Organ', 'Synthetic'],
    status: 'active' 
  },
  { 
    id: 6, 
    name: 'Gravity Manipulation Boots', 
    category: 'Wearables',
    description: 'Personal gravity control for enhanced mobility and jumping.',
    price: 3499.99,
    image: '/placeholder.svg',
    tags: ['Gravity', 'Mobility', 'Wearable'],
    status: 'active' 
  },
  { 
    id: 7, 
    name: 'Memory Enhancement Module', 
    category: 'Augmentations',
    description: 'Cerebral implant for improved recall and data storage.',
    price: 1799.99,
    image: '/placeholder.svg',
    tags: ['Memory', 'Cerebral', 'Storage'],
    status: 'inactive' 
  }
];

const Products = () => {
  return (
    <Layout>
      <div className="space-y-6 p-2 md:p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-cyber-blue">Product Management</h2>
            <div className="space-x-2">
              <Link to="/">
                <Button variant="outline" size="sm" className="border-cyber-blue/20 text-cyber-blue">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Link to="/products/add">
                <Button className="bg-cyber-blue hover:bg-cyber-blue/90 text-white">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </Link>
            </div>
          </div>
          <p className="text-muted-foreground">
            Manage your products from this central dashboard.
          </p>
        </div>
        
        <Card className="border-cyber-magenta/20 shadow-lg shadow-cyber-magenta/10 backdrop-blur-sm bg-background/30">
          <CardHeader className="border-b border-cyber-blue/20 bg-cyber-blue/5">
            <CardTitle className="text-xl font-semibold text-cyber-blue">Products</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ProductTable initialProducts={mockProducts} />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Products;
