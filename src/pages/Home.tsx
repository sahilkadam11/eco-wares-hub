import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Leaf, ShoppingBag, Truck, Shield } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories, blogPosts } from '@/data/products';
import heroImage from '@/assets/hero-nature.jpg';

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shop Sustainably,
              <span className="block text-eco-sky">Live Responsibly</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Discover eco-friendly products that make a difference. Every purchase helps protect our planet.
            </p>
            <div className="flex gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-eco-green hover:bg-eco-green-dark text-white">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-eco-green/10 rounded-full">
                <Truck className="h-8 w-8 text-eco-green" />
              </div>
              <div>
                <h3 className="font-semibold">Carbon-Neutral Shipping</h3>
                <p className="text-muted-foreground">Free on orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-eco-green/10 rounded-full">
                <Shield className="h-8 w-8 text-eco-green" />
              </div>
              <div>
                <h3 className="font-semibold">Certified Eco-Friendly</h3>
                <p className="text-muted-foreground">All products verified</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-eco-green/10 rounded-full">
                <Leaf className="h-8 w-8 text-eco-green" />
              </div>
              <div>
                <h3 className="font-semibold">1% for the Planet</h3>
                <p className="text-muted-foreground">Supporting environmental causes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.id} to={`/category/${category.slug}`}>
                <Card className="hover:shadow-eco transition-all cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Sustainability Tips</h2>
            <Link to="/blog">
              <Button variant="outline">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-eco transition-all">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-eco text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Eco-Revolution</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter and get 10% off your first order plus exclusive eco-tips
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register">
              <Button size="lg" variant="secondary">
                Create Account
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;