
import React, { useState } from 'react';
import { SearchIcon, FilterIcon, PlusIcon, EditIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon, EyeIcon } from 'lucide-react';
import Card from '@/components/Card';
import CyberButton from '@/components/CyberButton';

// Sample product data
const sampleProducts = [
  { 
    id: 1, 
    name: 'Quantum Processor X-7', 
    category: 'Electronics', 
    price: 1299.99, 
    stock: 24, 
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1374&auto=format&fit=crop'
  },
  { 
    id: 2, 
    name: 'Neural Interface Headset', 
    category: 'Gadgets', 
    price: 899.99, 
    stock: 7, 
    status: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1374&auto=format&fit=crop'
  },
  { 
    id: 3, 
    name: 'Holographic Display Unit', 
    category: 'Electronics', 
    price: 2499.99, 
    stock: 0, 
    status: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1548628281-320aeb533b3a?q=80&w=1374&auto=format&fit=crop'
  },
  { 
    id: 4, 
    name: 'Biometric Security Scanner', 
    category: 'Security', 
    price: 699.99, 
    stock: 42, 
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1585314062604-1a357de8b000?q=80&w=1471&auto=format&fit=crop'
  },
  { 
    id: 5, 
    name: 'Autonomous Drone MK-III', 
    category: 'Drones', 
    price: 1899.99, 
    stock: 13, 
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1470&auto=format&fit=crop'
  },
  { 
    id: 6, 
    name: 'Synthetic Artificial Intelligence Core', 
    category: 'AI Systems', 
    price: 4999.99, 
    stock: 3, 
    status: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1365&auto=format&fit=crop'
  },
  { 
    id: 7, 
    name: 'Quantum Encryption Module', 
    category: 'Security', 
    price: 1299.99, 
    stock: 19, 
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1480&auto=format&fit=crop'
  },
  { 
    id: 8, 
    name: 'Neuro-Haptic Gloves', 
    category: 'Gadgets', 
    price: 799.99, 
    stock: 0, 
    status: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1625591339971-4c9a87a66871?q=80&w=1372&auto=format&fit=crop'
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  
  // Handle search
  const filteredProducts = sampleProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.status.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handle sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];
    
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
  
  // Handle pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const currentProducts = sortedProducts.slice(
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
  
  // Grid view component
  const GridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {currentProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden" glowColor="blue">
          <div className="relative h-40 overflow-hidden">
            <img 
              src={product.image || "https://via.placeholder.com/300x150"} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-3">
                <div className="flex justify-between items-center w-full">
                  <span className={`text-xs rounded-full px-2 py-0.5 ${
                    product.status === 'In Stock' 
                      ? 'bg-cyber-green/30 text-cyber-green' 
                      : product.status === 'Low Stock' 
                        ? 'bg-cyber-yellow/30 text-cyber-yellow' 
                        : 'bg-cyber-red/30 text-cyber-red'
                  }`}>
                    {product.status}
                  </span>
                  <span className="text-white/80 text-sm">${product.price}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-white font-medium">{product.name}</h3>
            <div className="flex justify-between items-center mt-2 mb-3">
              <span className="text-white/60 text-sm">{product.category}</span>
              <span className="text-white/60 text-sm">Stock: {product.stock}</span>
            </div>
            
            <div className="flex justify-between gap-2">
              <CyberButton variant="outline" size="sm" className="flex-1">
                <EyeIcon className="h-4 w-4 mr-1" />
                View
              </CyberButton>
              <CyberButton variant="outline" size="sm" className="flex-1">
                <EditIcon className="h-4 w-4 mr-1" />
                Edit
              </CyberButton>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="cyber-heading text-2xl md:text-3xl">Products</h1>
          <p className="text-white/60 mt-1">Manage your product inventory</p>
        </div>
        
        <CyberButton>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add New Product
        </CyberButton>
      </div>
      
      <Card className="overflow-hidden">
        {/* Search and filters */}
        <div className="p-4 border-b border-white/10 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative grow">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="text"
              placeholder="Search products..."
              className="cyber-input w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <CyberButton 
              variant={viewMode === 'list' ? 'primary' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('list')}
            >
              List
            </CyberButton>
            <CyberButton 
              variant={viewMode === 'grid' ? 'primary' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              Grid
            </CyberButton>
            
            <select className="cyber-input min-w-[150px]">
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="gadgets">Gadgets</option>
              <option value="security">Security</option>
              <option value="drones">Drones</option>
              <option value="ai">AI Systems</option>
            </select>
            
            <CyberButton variant="outline" size="sm">
              <FilterIcon className="h-4 w-4 mr-2" />
              Filter
            </CyberButton>
          </div>
        </div>
        
        {/* Content */}
        {viewMode === 'grid' ? (
          <GridView />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th 
                    className="px-4 py-3 text-left text-xs font-cyber uppercase tracking-wider text-white/70 cursor-pointer hover:text-white"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center">
                      Product
                      {sortField === 'name' && (
                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-xs font-cyber uppercase tracking-wider text-white/70 cursor-pointer hover:text-white"
                    onClick={() => handleSort('category')}
                  >
                    <div className="flex items-center">
                      Category
                      {sortField === 'category' && (
                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-xs font-cyber uppercase tracking-wider text-white/70 cursor-pointer hover:text-white"
                    onClick={() => handleSort('price')}
                  >
                    <div className="flex items-center">
                      Price
                      {sortField === 'price' && (
                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-xs font-cyber uppercase tracking-wider text-white/70 cursor-pointer hover:text-white"
                    onClick={() => handleSort('stock')}
                  >
                    <div className="flex items-center">
                      Stock
                      {sortField === 'stock' && (
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
                  <th className="px-4 py-3 text-left text-xs font-cyber uppercase tracking-wider text-white/70">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {currentProducts.map((product) => (
                  <tr 
                    key={product.id} 
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden bg-white/5">
                          <img 
                            src={product.image || "https://via.placeholder.com/40"} 
                            alt={product.name}
                            className="h-10 w-10 object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{product.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white/80">
                      {product.category}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white/80">
                      ${product.price}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white/80">
                      {product.stock}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.status === 'In Stock' 
                          ? 'bg-cyber-green/20 text-cyber-green' 
                          : product.status === 'Low Stock' 
                            ? 'bg-cyber-yellow/20 text-cyber-yellow' 
                            : 'bg-cyber-red/20 text-cyber-red'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white flex items-center gap-2">
                      <button className="p-1 rounded hover:bg-white/10 transition-colors text-cyber-blue">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button className="p-1 rounded hover:bg-white/10 transition-colors text-cyber-cyan">
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
        )}
        
        {/* Pagination */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-white/10">
          <div className="text-sm text-white/70">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
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

export default Products;
