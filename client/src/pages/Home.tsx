/**
 * Home Page
 * Dark Luxury Design: Hero section with DJ branding, mix showcase, and merch catalog
 * Features smooth scrolling, elegant typography, and gold accents throughout
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, ShoppingCart, Music, Award } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedMix, setSelectedMix] = useState<number | null>(null);

  // DJ Mixes Data
  const mixes = [
    {
      id: 1,
      title: "Midnight Vibes",
      duration: "45:32",
      date: "Dec 2024",
      description: "Deep house and techno blend perfect for late-night sessions",
      plays: "12.5K",
    },
    {
      id: 2,
      title: "Summer Energy",
      duration: "38:15",
      date: "Nov 2024",
      description: "High-energy EDM and progressive house for festival vibes",
      plays: "18.3K",
    },
    {
      id: 3,
      title: "Chill Sessions",
      duration: "52:44",
      date: "Oct 2024",
      description: "Ambient electronic and downtempo beats for relaxation",
      plays: "9.8K",
    },
    {
      id: 4,
      title: "Club Bangers",
      duration: "41:20",
      date: "Sep 2024",
      description: "Hard-hitting techno and industrial sounds for the dance floor",
      plays: "15.7K",
    },
  ];

  // Merch Products Data
  const merchProducts = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: "$24.99",
      basePrice: "$7.50",
      image: "/images/merch-showcase.png",
      description: "Premium cotton tee with DJ PapiCakez branding",
    },
    {
      id: 2,
      name: "Hoodie",
      price: "$49.99",
      basePrice: "$19.80",
      image: "/images/merch-showcase.png",
      description: "Comfortable hoodie perfect for any DJ fan",
    },
    {
      id: 3,
      name: "Ceramic Mug",
      price: "$14.99",
      basePrice: "$4.25",
      image: "/images/merch-showcase.png",
      description: "Quality ceramic mug with custom design",
    },
    {
      id: 4,
      name: "Sticker Pack",
      price: "$9.99",
      basePrice: "$2.00",
      image: "/images/merch-showcase.png",
      description: "Set of 5 premium vinyl stickers",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8 animate-fade-in">
            <img
              src="/images/dj-logo.png"
              alt="DJ PapiCakez"
              className="h-32 md:h-48 mx-auto mb-6 drop-shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-accent mb-4 drop-shadow-lg">
            DJ PapiCakez
          </h1>

          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto font-light">
            Experience premium DJ mixes and exclusive merchandise from one of the most exciting names in electronic music
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/40 hover:scale-105 transition-all duration-300"
              onClick={() => {
                document.getElementById("mixes")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Music className="mr-2" size={20} />
              Explore Mixes
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
              onClick={() => {
                document.getElementById("merch")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <ShoppingCart className="mr-2" size={20} />
              Shop Merch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            {[
              { label: "Mixes", value: "50+" },
              { label: "Followers", value: "25K+" },
              { label: "Years Active", value: "8+" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-card/50 backdrop-blur rounded-lg border border-border/30">
                <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Mixes Section */}
      <section id="mixes" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Featured Mixes</h2>
            <p className="text-foreground/70 text-lg">
              Curated collections of the finest electronic music experiences
            </p>
          </div>

          {/* Mixes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {mixes.map((mix) => (
              <Card
                key={mix.id}
                className="bg-card border-border/30 hover:border-accent/50 transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedMix(selectedMix === mix.id ? null : mix.id)}
              >
                <div className="relative h-48 bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{
                      backgroundImage: "url('/images/mix-section-bg.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Play Button */}
                  <button className="relative z-10 w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-accent/50 transform group-hover:scale-110 transition-all duration-300">
                    <Play size={24} fill="currentColor" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{mix.title}</h3>
                      <p className="text-sm text-muted-foreground">{mix.date}</p>
                    </div>
                    <span className="text-accent font-semibold text-sm">{mix.duration}</span>
                  </div>

                  <p className="text-foreground/70 text-sm mb-4">{mix.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Music size={14} />
                      {mix.plays} plays
                    </span>
                    <Button
                      size="sm"
                      className="bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30"
                    >
                      Listen
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Mixes Button */}
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              View All Mixes
            </Button>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Official Merch</h2>
            <p className="text-foreground/70 text-lg">
              Premium made-to-order merchandise featuring DJ PapiCakez branding
            </p>
          </div>

          {/* Merch Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {merchProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-background border-border/30 hover:border-accent/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-accent">{product.price}</p>
                      <p className="text-xs text-muted-foreground">
                        Base: {product.basePrice}
                      </p>
                    </div>
                  </div>

                  <Button className="w-full bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30">
                    <ShoppingCart size={16} className="mr-2" />
                    Order Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Merch Info */}
          <div className="bg-background border border-border/30 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: "Premium Quality",
                  description: "High-quality materials and printing for lasting durability",
                },
                {
                  icon: ShoppingCart,
                  title: "Made-to-Order",
                  description: "Affordable production through trusted partners like Printify",
                },
                {
                  icon: Music,
                  title: "Exclusive Designs",
                  description: "Limited edition designs featuring DJ PapiCakez branding",
                },
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <feature.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Affordable Partner Info */}
          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-accent mb-3">Affordable & Accessible</h3>
            <p className="text-foreground/80 max-w-2xl mx-auto mb-4">
              All merchandise is produced through Printify, one of the most affordable print-on-demand partners available. This ensures competitive pricing while maintaining premium quality. No inventory risk, no upfront costs.
            </p>
            <p className="text-sm text-muted-foreground">
              Base prices start from $4.25 for mugs, $6.39 for t-shirts, and $19.49 for hoodies
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background border-t border-border/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            Ready to Experience the Beat?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Explore our latest mixes and grab exclusive merchandise today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/40"
            >
              <Music className="mr-2" size={20} />
              Listen Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              <ShoppingCart className="mr-2" size={20} />
              Shop Merch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
