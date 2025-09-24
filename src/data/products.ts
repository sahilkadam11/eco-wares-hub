import { Product, Category, BlogPost } from '@/types/product';

export const categories: Category[] = [
  { id: 1, name: "Home & Living", slug: "home-living", description: "Sustainable home essentials", icon: "🏠" },
  { id: 2, name: "Personal Care", slug: "personal-care", description: "Natural beauty & hygiene", icon: "🧴" },
  { id: 3, name: "Fashion", slug: "fashion", description: "Eco-friendly clothing", icon: "👕" },
  { id: 4, name: "Food & Drinks", slug: "food-drinks", description: "Organic consumables", icon: "🥗" },
  { id: 5, name: "Tech & Gadgets", slug: "tech-gadgets", description: "Energy-efficient devices", icon: "📱" },
  { id: 6, name: "Garden", slug: "garden", description: "Sustainable gardening", icon: "🌱" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Bamboo Reusable Water Bottle",
    description: "Stay hydrated sustainably with our premium bamboo water bottle. BPA-free, leak-proof, and keeps drinks cold for 24 hours.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    category: "Home & Living",
    stock: 50,
    rating: 4.8,
    reviews: 234,
    eco_badges: ["100% Bamboo", "Plastic-Free", "Carbon Neutral"]
  },
  {
    id: 2,
    name: "Organic Cotton Tote Bag Set",
    description: "Set of 3 reusable organic cotton bags perfect for grocery shopping. Machine washable and incredibly durable.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400",
    category: "Fashion",
    stock: 120,
    rating: 4.9,
    reviews: 567,
    eco_badges: ["Organic Cotton", "Fair Trade", "Biodegradable"]
  },
  {
    id: 3,
    name: "Natural Shampoo Bar",
    description: "Zero-waste shampoo bar made from organic ingredients. Lasts up to 80 washes, perfect for all hair types.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400",
    category: "Personal Care",
    stock: 200,
    rating: 4.7,
    reviews: 892,
    eco_badges: ["Zero Waste", "Vegan", "Cruelty-Free"]
  },
  {
    id: 4,
    name: "Solar Power Bank",
    description: "20,000mAh solar-powered portable charger. Charge your devices using clean solar energy anywhere.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=400",
    category: "Tech & Gadgets",
    stock: 75,
    rating: 4.6,
    reviews: 445,
    eco_badges: ["Solar Powered", "Energy Efficient"]
  },
  {
    id: 5,
    name: "Compostable Phone Case",
    description: "Protect your phone and the planet with our 100% compostable phone case made from plant-based materials.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
    category: "Tech & Gadgets",
    stock: 150,
    rating: 4.5,
    reviews: 334,
    eco_badges: ["Compostable", "Plant-Based"]
  },
  {
    id: 6,
    name: "Organic Herbal Tea Collection",
    description: "Premium collection of 6 organic herbal teas sourced from sustainable farms. 60 biodegradable tea bags.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400",
    category: "Food & Drinks",
    stock: 90,
    rating: 4.9,
    reviews: 678,
    eco_badges: ["Organic", "Fair Trade", "Biodegradable Packaging"]
  },
  {
    id: 7,
    name: "Recycled Yoga Mat",
    description: "Premium yoga mat made from recycled rubber. Non-slip surface, extra cushioning for comfort.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400",
    category: "Home & Living",
    stock: 60,
    rating: 4.7,
    reviews: 223,
    eco_badges: ["Recycled Materials", "Non-Toxic"]
  },
  {
    id: 8,
    name: "Seed Starter Kit",
    description: "Complete organic gardening kit with heirloom seeds, biodegradable pots, and organic soil.",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
    category: "Garden",
    stock: 85,
    rating: 4.8,
    reviews: 156,
    eco_badges: ["Organic Seeds", "Biodegradable", "Non-GMO"]
  },
  {
    id: 9,
    name: "Beeswax Food Wraps",
    description: "Set of 5 reusable beeswax wraps. Perfect alternative to plastic wrap, keeps food fresh naturally.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400",
    category: "Home & Living",
    stock: 140,
    rating: 4.9,
    reviews: 789,
    eco_badges: ["Plastic-Free", "Reusable", "Natural"]
  },
  {
    id: 10,
    name: "Bamboo Cutlery Set",
    description: "Portable bamboo cutlery set with carrying case. Perfect for zero-waste dining on the go.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1550534791-2677c51460b5?w=400",
    category: "Home & Living",
    stock: 110,
    rating: 4.6,
    reviews: 445,
    eco_badges: ["Bamboo", "Zero Waste", "Portable"]
  },
  {
    id: 11,
    name: "Organic Face Cream",
    description: "Nourishing face cream with organic aloe vera and essential oils. Suitable for all skin types.",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
    category: "Personal Care",
    stock: 95,
    rating: 4.8,
    reviews: 567,
    eco_badges: ["Organic", "Cruelty-Free", "Glass Packaging"]
  },
  {
    id: 12,
    name: "Hemp Backpack",
    description: "Durable and stylish backpack made from hemp fiber. Water-resistant with multiple compartments.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    category: "Fashion",
    stock: 45,
    rating: 4.7,
    reviews: 234,
    eco_badges: ["Hemp Fiber", "Durable", "Ethical Production"]
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Simple Ways to Reduce Your Carbon Footprint",
    excerpt: "Discover practical everyday changes that can make a significant impact on the environment.",
    content: "Full content here...",
    author: "Emma Green",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    readTime: "5 min read",
    tags: ["Sustainability", "Tips", "Lifestyle"]
  },
  {
    id: 2,
    title: "The Complete Guide to Zero-Waste Living",
    excerpt: "Learn how to minimize waste in your daily life with our comprehensive zero-waste guide.",
    content: "Full content here...",
    author: "Michael Rivers",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800",
    readTime: "8 min read",
    tags: ["Zero Waste", "Guide", "Environment"]
  },
  {
    id: 3,
    title: "Understanding Sustainable Fashion",
    excerpt: "Explore the world of eco-friendly fashion and how to build a sustainable wardrobe.",
    content: "Full content here...",
    author: "Sarah Chen",
    date: "2024-01-05",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
    readTime: "6 min read",
    tags: ["Fashion", "Sustainability", "Ethics"]
  },
];