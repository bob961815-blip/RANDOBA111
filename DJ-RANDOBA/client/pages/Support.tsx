import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Headphones,
  Star,
  Music,
  Award,
  PlayCircle,
  CheckCircle,
  Send,
  Globe,
  TrendingUp,
  Heart,
  Zap,
  Target,
  ArrowRight,
  ShoppingCart,
  Clock,
  Shield,
  Cpu,
  Volume2,
  Mic,
  Radio,
  Settings,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  DollarSign,
  Package,
  Wrench,
  HelpCircle,
} from "lucide-react";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);
  const [selectedPack, setSelectedPack] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support request:", formData);
  };

  const equipment = [
    {
      id: "cdj-3000",
      name: "Pioneer CDJ-3000",
      category: "DJ Players",
      price: 150,
      period: "per day",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "Professional DJ media player with advanced features and pristine sound quality.",
      features: ["9-inch Touch Screen", "Master Quality Audio", "Wi-Fi Connectivity", "Cloud Library Access"],
      specs: { power: "37W", dimensions: "31.9 × 41.0 × 10.5 cm", weight: "4.6 kg" }
    },
    {
      id: "djm-900",
      name: "Pioneer DJM-900NXS2",
      category: "DJ Mixers",
      price: 120,
      period: "per day",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Industry-standard 4-channel DJ mixer with superior sound and professional effects.",
      features: ["4-Channel Mixer", "Sound Color FX", "Beat FX", "USB Recording"],
      specs: { power: "41W", dimensions: "42.6 × 45.9 × 10.8 cm", weight: "5.7 kg" }
    },
    {
      id: "technics-1200",
      name: "Technics SL-1200MK7",
      category: "Turntables",
      price: 80,
      period: "per day",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
      description: "Legendary direct-drive turntable reimagined for the digital age.",
      features: ["Direct Drive Motor", "High Torque", "Reverse Play", "LED Needle Light"],
      specs: { power: "16W", dimensions: "45.0 × 36.2 × 17.1 cm", weight: "9.6 kg" }
    },
    {
      id: "rcf-hdl20",
      name: "RCF HDL 20-A",
      category: "PA Systems",
      price: 200,
      period: "per day",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
      description: "Professional line array speaker system for high-quality sound reinforcement.",
      features: ["Active Line Array", "1400W Peak Power", "DSP Processing", "Weather Resistant"],
      specs: { power: "1400W", dimensions: "69.5 × 28.0 × 45.6 cm", weight: "32 kg" }
    },
    {
      id: "shure-sm58",
      name: "Shure SM58",
      category: "Microphones",
      price: 25,
      period: "per day",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "World's most popular vocal microphone, legendary for its durability and sound.",
      features: ["Cardioid Pattern", "Shock Mount", "Built-in Filter", "Rugged Construction"],
      specs: { frequency: "50-15,000 Hz", dimensions: "16.2 × 5.4 cm", weight: "298 g" }
    },
    {
      id: "lighting-pack",
      name: "LED Par Light Set",
      category: "Lighting",
      price: 100,
      period: "per day",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
      description: "Professional LED par lights with RGB color mixing and DMX control.",
      features: ["RGB Color Mixing", "DMX Control", "Sound Activation", "Remote Control"],
      specs: { power: "60W each", leds: "36 × 3W LEDs", beam: "25°", weight: "2.1 kg each" }
    },
    {
      id: "dj-controller",
      name: "Native Instruments S4 MK3",
      category: "Controllers",
      price: 90,
      period: "per day",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "Professional 4-deck DJ controller with premium build quality and Traktor integration.",
      features: ["4-Deck Control", "Traktor Pro 3", "RGB Performance Pads", "Premium Jog Wheels"],
      specs: { power: "USB Bus Power", dimensions: "48.5 × 32.0 × 6.0 cm", weight: "3.9 kg" }
    },
    {
      id: "monitoring",
      name: "KRK Rokit 8 G4",
      category: "Monitors",
      price: 60,
      period: "per day",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
      description: "Professional studio monitors with exceptional clarity and powerful low-end.",
      features: ["8-inch Woofer", "DSP-driven EQ", "Room Tuning", "Multiple Inputs"],
      specs: { power: "203W", frequency: "35Hz-40kHz", dimensions: "42.9 × 28.4 × 34.7 cm" }
    }
  ];

  const equipmentPacks = [
    {
      id: "starter-dj",
      name: "Turnkey DJ Setup Rental",
      price: 280,
      period: "per day",
      originalPrice: 340,
      description: "Flagship Pioneer rig with rock-solid sound and balanced lighting. We handle delivery and on-site setup. You play - we'll make sure it sounds flawless.",
      equipment: ["Pioneer DJ (CDJ-3000, XDJ-AZ, DJM V10, A9)", "Sound & lighting", "Technician available on request", "Flexible rentals: by the day, night, or hour"],
      features: ["Setup Included", "Basic Lighting", "Technical Support", "Insurance Covered"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      popular: false
    },
    {
      id: "professional-setup",
      name: "Sound & Lighting for Events",
      price: 450,
      period: "per day",
      originalPrice: 580,
      description: "A balanced mix of clean sound and expressive lighting tailored to your format and run-of-show. Any scale - from intimate house parties to full festivals.",
      equipment: ["Lighting design", "PA for 20 to 500+ guests", "Delivery, installation, teardown", "Lighting/sound engineer (optional)"],
      features: ["Professional Setup", "Advanced Lighting", "Full Technical Support", "Backup Equipment"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      popular: true
    },
    {
      id: "festival-grade",
      name: "Dedicated DJ Package",
      price: 800,
      period: "per day",
      originalPrice: 1100,
      description: "Everything you need for a confident, seamless set: a reliable DJ system, accurate monitor speakers, and fast setup. Demo before booking, plus delivery and hookup.",
      equipment: ["DJ system (CDJ-3000 + DJM V10, A9, Opus, AZ)", "Monitor speakers", "Pre-booking demo available", "Delivery & setup"],
      features: ["Festival Setup Team", "24/7 Technical Support", "Backup Systems", "Insurance & Security"],
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
      popular: false
    },
    {
      id: "mobile-dj",
      name: "Club / Bar / Late-Night Party",
      price: 320,
      period: "per day",
      originalPrice: 420,
      description: "Club package for bars and late-night parties: punchy dance-floor sound, dynamic lighting, and a ready-to-play DJ setup. Professional level, fully rider-compliant.",
      equipment: ["DJ setup: Pioneer CDJ-3000 + DJM-A9 / V10", "Professional subwoofers and tops", "Lighting, DJ monitor speakers", "Microphones", "Installation and sound/lighting check"],
      features: ["Portable Setup", "Quick Assembly", "Transport Cases", "Mobile Support"],
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
      popular: false
    },
    {
      id: "corporate-event",
      name: "Open-Air / Beach / Rooftop",
      price: 380,
      period: "per day",
      originalPrice: 480,
      description: "Powerful long-throw sound and professional execution with rider compliance and permits handled. A scalable sound and lighting solution for the outdoors.",
      equipment: ["Line array or high-output active speakers", "Weather-resistant equipment", "Generator (if there's no on-site power)", "Club-grade DJ setup", "Lighting on request (open-air lighting design)"],
      features: ["Corporate Setup", "Presentation Audio", "Wireless Systems", "Professional Support"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
      popular: false
    },
    {
      id: "wedding-premium",
      name: "Retreat / Wellness / Tantra / Yoga",
      price: 520,
      period: "per day",
      originalPrice: 680,
      description: "Delicate sound for ambient, deep, and ceremonial music. Calm audio, soft lighting, and warm vocals to create a therapeutic space without technical stress.",
      equipment: ["PA system", "Ambient lighting: candles, soft warm light", "Host microphone", "Off-grid option available", "From €450"],
      features: ["Wedding Ceremony Setup", "Reception Audio", "Romantic Lighting", "Dedicated Coordinator"],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      popular: false
    }
  ];

  const supportServices = [
    {
      title: "Audit",
      description: "Site assessment. Briefing - goals, format, schedule, budget. Technical concept development.",
      icon: Settings,
    },
    {
      title: "Design & Calculations",
      description: "Sound system modeling for your specific space. Lighting design, brand integration. Power infrastructure planning and load calculations.",
      icon: HelpCircle,
    },
    {
      title: "Service",
      description: "Logistics, delivery, setup, soundcheck, on-site coordination, teardown. Firm timelines and transparent quoting.",
      icon: Phone,
    },
    {
      title: "Safety",
      description: "Backups for critical components, weather protection, certified equipment, standalone power and generators.",
      icon: Wrench,
    },
    {
      title: "Turnkey events",
      description: "Concept, venue sourcing, technical production, scheduling, catering, logistics, coordination.",
      icon: Zap,
    },
    {
      title: "Fast booking",
      description: "Submit a request on the website - we'll propose custom options tailored to your run-of-show and budget.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-black -mt-16 pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F04a79369a30d4d69bd5ac30aac5e71b7%2F3290132036ff4009b9e0220b3eede625?format=webp&width=800"
            alt="Technical Support Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/50"></div>
        </div>

        {/* Disco Ball Animated Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <style>
            {`
              @keyframes disco-1 {
                0% { background: #ff0080; transform: scale(1) rotate(0deg); }
                25% { background: #00d4ff; transform: scale(1.2) rotate(90deg); }
                50% { background: #ff4000; transform: scale(0.8) rotate(180deg); }
                75% { background: #8000ff; transform: scale(1.1) rotate(270deg); }
                100% { background: #ff0080; transform: scale(1) rotate(360deg); }
              }
              @keyframes disco-2 {
                0% { background: #00ff80; transform: scale(0.8) rotate(0deg); }
                25% { background: #ff8000; transform: scale(1.3) rotate(120deg); }
                50% { background: #0080ff; transform: scale(1) rotate(240deg); }
                75% { background: #ff0040; transform: scale(1.2) rotate(300deg); }
                100% { background: #00ff80; transform: scale(0.8) rotate(360deg); }
              }
              @keyframes disco-3 {
                0% { background: #ff4080; transform: scale(1.1) rotate(45deg); }
                30% { background: #40ff80; transform: scale(0.9) rotate(135deg); }
                60% { background: #8040ff; transform: scale(1.4) rotate(225deg); }
                100% { background: #ff4080; transform: scale(1.1) rotate(405deg); }
              }
              @keyframes disco-float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
              }
              @keyframes disco-glow {
                0%, 100% { box-shadow: 0 0 20px rgba(255, 0, 128, 0.5); }
                25% { box-shadow: 0 0 30px rgba(0, 212, 255, 0.7); }
                50% { box-shadow: 0 0 25px rgba(255, 64, 0, 0.6); }
                75% { box-shadow: 0 0 35px rgba(128, 0, 255, 0.8); }
              }
            `}
          </style>

          {/* Large disco circles */}
          <div
            className="absolute top-20 left-10 w-8 h-8 rounded-full opacity-70"
            style={{
              animation: 'disco-1 3s infinite, disco-float 6s infinite, disco-glow 3s infinite'
            }}
          ></div>
          <div
            className="absolute top-40 right-20 w-12 h-12 rounded-full opacity-60"
            style={{
              animation: 'disco-2 4s infinite reverse, disco-float 8s infinite, disco-glow 4s infinite'
            }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-16 h-16 rounded-full opacity-50"
            style={{
              animation: 'disco-3 5s infinite, disco-float 7s infinite reverse, disco-glow 5s infinite'
            }}
          ></div>
          <div
            className="absolute top-60 right-40 w-6 h-6 rounded-full opacity-80"
            style={{
              animation: 'disco-1 2.5s infinite reverse, disco-float 5s infinite, disco-glow 2.5s infinite'
            }}
          ></div>
          <div
            className="absolute bottom-60 right-60 w-10 h-10 rounded-full opacity-65"
            style={{
              animation: 'disco-2 3.5s infinite, disco-float 9s infinite, disco-glow 3.5s infinite'
            }}
          ></div>

          {/* Medium disco circles */}
          <div
            className="absolute top-32 left-32 w-4 h-4 rounded-full opacity-75"
            style={{
              animation: 'disco-3 2s infinite, disco-float 4s infinite reverse, disco-glow 2s infinite'
            }}
          ></div>
          <div
            className="absolute top-80 right-32 w-6 h-6 rounded-full opacity-55"
            style={{
              animation: 'disco-1 4.5s infinite reverse, disco-float 6s infinite, disco-glow 4.5s infinite'
            }}
          ></div>
          <div
            className="absolute bottom-32 left-40 w-8 h-8 rounded-full opacity-70"
            style={{
              animation: 'disco-2 3s infinite reverse, disco-float 5s infinite reverse, disco-glow 3s infinite'
            }}
          ></div>

          {/* Small disco circles */}
          <div
            className="absolute top-96 left-60 w-3 h-3 rounded-full opacity-85"
            style={{
              animation: 'disco-1 1.5s infinite, disco-float 3s infinite, disco-glow 1.5s infinite'
            }}
          ></div>
          <div
            className="absolute top-24 right-60 w-5 h-5 rounded-full opacity-60"
            style={{
              animation: 'disco-3 3.8s infinite reverse, disco-float 7s infinite reverse, disco-glow 3.8s infinite'
            }}
          ></div>
          <div
            className="absolute bottom-80 right-80 w-4 h-4 rounded-full opacity-75"
            style={{
              animation: 'disco-2 2.2s infinite, disco-float 4.5s infinite, disco-glow 2.2s infinite'
            }}
          ></div>
          <div
            className="absolute top-52 left-80 w-7 h-7 rounded-full opacity-50"
            style={{
              animation: 'disco-1 5.5s infinite reverse, disco-float 8s infinite reverse, disco-glow 5.5s infinite'
            }}
          ></div>

          {/* Extra sparkle circles */}
          <div
            className="absolute top-72 right-12 w-2 h-2 rounded-full opacity-90"
            style={{
              animation: 'disco-3 1s infinite, disco-float 2s infinite, disco-glow 1s infinite'
            }}
          ></div>
          <div
            className="absolute bottom-96 left-12 w-3 h-3 rounded-full opacity-80"
            style={{
              animation: 'disco-2 1.8s infinite reverse, disco-float 3.5s infinite reverse, disco-glow 1.8s infinite'
            }}
          ></div>
          <div
            className="absolute top-16 left-96 w-4 h-4 rounded-full opacity-65"
            style={{
              animation: 'disco-1 2.8s infinite, disco-float 5.5s infinite, disco-glow 2.8s infinite'
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32 min-h-screen flex items-center z-10">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-white">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30 backdrop-blur-sm">
                  <Headphones className="w-3 h-3 mr-1" />
                  Professional Equipment Rental & Support
                </Badge>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                      Technical
                    </span>
                    <br />
                    <span className="text-white">Support Hub</span>
                  </h1>
                  <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
                    Premium DJ equipment rental and expert technical support services. 
                    Everything you need for flawless performances and unforgettable events.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Browse Equipment
                  </Button>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 border-0 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8">
                  {[
                    { number: "500+", label: "Equipment Items", icon: Package },
                    { number: "24/7", label: "Support Available", icon: Clock },
                    { number: "99%", label: "Uptime Guarantee", icon: Shield },
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="relative">
                        <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full group-hover:bg-blue-400/40 transition-all duration-300"></div>
                      </div>
                      <div className="text-3xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                  <div className="relative space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">Service Highlights</h3>
                      <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                        <Star className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { label: "Best Equipment", value: "100%" },
                        { label: "Special Equipment Packs", value: "6+" },
                        { label: "Custom Solutions", value: "∞" },
                        { label: "Any Scale", value: "from 20 to 1,000+ guests" },
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-300">{item.label}</span>
                          <span className="text-blue-400 font-bold">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Rental Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Equipment Rental -{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Everything For a Flawless Event
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose your equipment - we'll handle delivery, installation, and setup anywhere in Spain. Not sure what to pick? Send us a request and we'll recommend the best options for your venue, budget, and tech rider.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <Card 
                key={item.id} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                      Available
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Key Features</h4>
                    <div className="space-y-1">
                      {item.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">${item.price}</div>
                      <div className="text-xs text-gray-500">{item.period}</div>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => setSelectedEquipment(item.id)}
                    >
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Rent Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Packs Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              DJ • Concert • Event |{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pro Equipment Packages for Any Format
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Need a big impact without the coordination headache? Choose our ready-to-go packages - sound, lighting, and special effects - tailored to your format and guest count. We scale and fine-tune everything to your venue, concept, and timeline. We follow your brief and tech rider, and we handle logistics, installation, and on-site engineering support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentPacks.map((pack, index) => (
              <Card 
                key={pack.id} 
                className={`bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 ${pack.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pack.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="relative">
                  <img
                    src={pack.image}
                    alt={pack.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{pack.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-2xl font-bold text-blue-400">${pack.price}</span>
                      {pack.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${pack.originalPrice}</span>
                      )}
                      <span className="text-sm text-gray-300">/ {pack.period}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {pack.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Included In The Pack</h4>
                    <div className="space-y-1">
                      {pack.equipment.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span className="text-xs text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full font-semibold transform hover:scale-105 transition-all duration-300 ${
                      pack.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                    }`}
                    onClick={() => setSelectedPack(pack.id)}
                  >
                    <Package className="w-4 h-4 mr-2" />
                    Rent This Pack
                    {pack.originalPrice && (
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-green-400/30">
                        Save ${pack.originalPrice - pack.price}
                      </Badge>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support Services Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Custom solutions at any scale -{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                one plan, zero stress
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Didn't find the right package? We'll build a bespoke setup around your run-of-show. We work across Spain: cities, beaches, rooftops, mountains, wineries, private villas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {supportServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-white shadow-xl border-0 group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Support Request Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-2xl border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Need Technical Support?</h3>
                <p className="text-xl opacity-90">
                  Our expert technicians are standing by to help. Get in touch and we'll respond within minutes.
                </p>
              </div>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <Input
                        required
                        value={formData.serviceType}
                        onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value }))}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="e.g. Equipment Rental, Technical Support"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Describe your technical support needs, event details, or equipment requirements..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-semibold px-12 transform hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Submit Support Request
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-12 transform hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: +1 (555) 123-4567
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
