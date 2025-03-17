import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Save, Upload, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Trash2 } from "lucide-react";

const categoryOptions = [
  'Augmentations',
  'Electronics',
  'Security',
  'Computing',
  'Medical',
  'Wearables',
  'Software',
  'Vehicles',
  'Weapons',
  'Other'
];

const tagOptions = [
  { id: 'neural', label: 'Neural' },
  { id: 'implant', label: 'Implant' },
  { id: 'cyber', label: 'Cyber' },
  { id: 'ai', label: 'AI' },
  { id: 'virtual', label: 'Virtual' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'security', label: 'Security' },
  { id: 'medical', label: 'Medical' },
  { id: 'wearable', label: 'Wearable' },
  { id: 'military', label: 'Military' },
  { id: 'consumer', label: 'Consumer' },
  { id: 'premium', label: 'Premium' }
];

const AddProduct = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [images, setImages] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      // In a real app, you would upload these to a server
      // For now, we'll just keep track of the file objects
      setImages(prev => [...prev, ...files]);
      
      toast({
        title: "Images selected",
        description: `${files.length} image(s) ready to upload.`,
      });
    }
  };
  
  const handleTagChange = (tagId) => {
    setSelectedTags(prev => 
      prev.includes(tagId)
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically handle form submission to API
    // For now, we'll just show a success message and redirect
    toast({
      title: "Product created successfully",
      description: "The product has been added to the inventory.",
    });
    
    navigate('/products');
  };
  
  return (
    <Layout>
      <div className="space-y-6 p-2 md:p-6">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/products')}
            className="hover:bg-cyber-blue/10 hover:text-cyber-blue"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-cyber-blue">Add New Product</h2>
          <p className="text-muted-foreground">
            Create a new product in the inventory system.
          </p>
        </div>
        
        <Card className="border-cyber-magenta/20 shadow-lg shadow-cyber-magenta/10 backdrop-blur-sm bg-background/30">
          <CardHeader className="border-b border-cyber-blue/20 bg-cyber-blue/5">
            <CardTitle className="text-xl font-semibold text-cyber-blue">Product Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter product name" 
                    required 
                    className="hover:border-cyber-blue focus:border-cyber-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger className="hover:border-cyber-blue focus:border-cyber-blue">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-background/80 backdrop-blur-md">
                      {categoryOptions.map(category => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Enter product description" 
                    rows={4}
                    className="hover:border-cyber-blue focus:border-cyber-blue resize-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input 
                    id="price" 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    placeholder="0.00" 
                    required 
                    className="hover:border-cyber-blue focus:border-cyber-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Status</Label>
                  <RadioGroup defaultValue="active" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="active" id="active" />
                      <Label htmlFor="active" className="cursor-pointer">Active</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="inactive" id="inactive" />
                      <Label htmlFor="inactive" className="cursor-pointer">Inactive</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label>Tags</Label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {tagOptions.map(tag => (
                      <div key={tag.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`tag-${tag.id}`} 
                          checked={selectedTags.includes(tag.id)} 
                          onCheckedChange={() => handleTagChange(tag.id)}
                        />
                        <Label htmlFor={`tag-${tag.id}`} className="cursor-pointer">{tag.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label>Product Images</Label>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-center border-2 border-dashed border-cyber-blue/30 rounded-md p-6 transition-colors hover:border-cyber-blue/60">
                      <label htmlFor="image-upload" className="flex flex-col items-center space-y-2 cursor-pointer">
                        <div className="rounded-full bg-cyber-blue/10 p-2">
                          <Upload className="h-6 w-6 text-cyber-blue" />
                        </div>
                        <span className="text-sm font-medium">Click to upload images</span>
                        <span className="text-xs text-muted-foreground">PNG, JPG or WEBP (max. 10MB)</span>
                        <Input 
                          id="image-upload" 
                          type="file" 
                          accept="image/*" 
                          multiple 
                          className="hidden" 
                          onChange={handleImageUpload}
                        />
                      </label>
                    </div>
                    
                    {images.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                        {images.map((file, index) => (
                          <div 
                            key={index} 
                            className="relative aspect-square rounded-md border border-cyber-blue/30 overflow-hidden group"
                          >
                            <div className="flex h-full w-full items-center justify-center bg-muted">
                              <ImageIcon className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1 text-xs text-white truncate">
                              {file.name}
                            </div>
                            <Button 
                              variant="destructive" 
                              size="sm" 
                              className="absolute right-1 top-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100"
                              onClick={() => setImages(prev => prev.filter((_, i) => i !== index))}
                            >
                              <span className="sr-only">Remove</span>
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <CardFooter className="flex justify-end space-x-4 px-0">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate('/products')}
                  className="border-cyber-blue/50 hover:bg-cyber-blue/10"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-cyber-blue hover:bg-cyber-blue/80"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Product
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AddProduct;
