import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedEqualizer } from "@/components/AnimatedEqualizer";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Music,
  Calendar,
  Users,
  PlayCircle,
  Star,
  Award,
  Headphones,
  Mic,
  Volume2,
  ArrowRight,
  CheckCircle,
  Clock,
  Trophy,
  Building2,
  Zap,
  Camera,
  Video,
  Download,
  Heart,
  MapPin,
  FileText,
  GraduationCap,
  Briefcase,
  Sparkles,
  Target,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  CreditCard,
  Mail,
  Phone,
  User,
  Ticket,
  Info,
  DollarSign,
} from "lucide-react";

export default function Index() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [eventInfoModalOpen, setEventInfoModalOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [introAnimationPhase, setIntroAnimationPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setIntroAnimationPhase(1), 500);
    const timer2 = setTimeout(() => setIntroAnimationPhase(2), 1500);
    const timer3 = setTimeout(() => setIntroAnimationPhase(3), 2500);
    const timer4 = setTimeout(() => setShowIntro(false), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);
  const features = [
    {
      icon: Headphones,
      title: "Professional DJ Courses",
      description:
        "Learn from industry experts with hands-on training and real-world techniques.",
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description:
        "Book premium DJ events, workshops, and live performances in your area.",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Train with accomplished DJs who perform at top venues worldwide.",
    },
    {
      icon: PlayCircle,
      title: "Curated Playlists",
      description:
        "Access professionally crafted playlists across all genres and styles.",
    },
  ];

  const stats = [
    { number: "500+", label: "Students Trained", icon: Users },
    { number: "50+", label: "Events Monthly", icon: Calendar },
    { number: "15+", label: "Expert DJs", icon: Award },
    { number: "98%", label: "Success Rate", icon: Trophy },
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Professional DJ",
      content:
        "RANDOBA transformed my mixing skills. The courses are incredibly detailed and practical.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Event Organizer",
      content:
        "The events are always top-notch. Perfect for networking and learning new techniques.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Music Producer",
      content:
        "The instructor quality is unmatched. I learned techniques I never found anywhere else.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Intro Animation */}
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
          {/* Background particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Animated background circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Main animation content */}
          <div className="relative z-10 text-center">
            {/* Logo Animation */}
            <div className={`transition-all duration-1000 ${introAnimationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                RANDOBA
              </h1>
            </div>

            {/* Subtitle Animation */}
            <div className={`mt-8 transition-all duration-1000 delay-500 ${introAnimationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-2xl md:text-3xl text-white font-light tracking-widest">
                WHERE MUSIC MEETS MASTERY
              </p>
            </div>

            {/* Loading bar */}
            <div className={`mt-12 transition-all duration-1000 delay-1000 ${introAnimationPhase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-[slideIn_1s_ease-out_forwards]"></div>
              </div>
              <p className="text-white/60 text-sm mt-4 tracking-wider">LOADING EXPERIENCE...</p>
            </div>

            {/* Sound waves animation */}
            <div className={`mt-8 flex justify-center space-x-2 transition-all duration-1000 delay-1500 ${introAnimationPhase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-cyan-400 to-purple-500 rounded-full animate-pulse"
                  style={{
                    height: `${20 + Math.random() * 40}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${0.5 + Math.random() * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-400/50"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-400/50"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-pink-400/50"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-400/50"></div>
        </div>
      )}

      {/* Main Content - only visible after intro */}
      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-black -mt-16 pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F1bb0735706c241e9b62c93ae763e081d%2Fbecda4fd2e9546078cad8598fc155301?format=webp&width=800"
            alt="DJ Performance"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div className="space-y-6 lg:space-y-8 text-white text-center lg:text-left">
              <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20 inline-flex">
                <Mic className="w-3 h-3 mr-1" />
                Professional DJ Training
              </Badge>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  Master the{" "}
                  <span className="text-white underline decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">
                    Art of DJing
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 max-w-lg mx-auto lg:mx-0">
                  Join RANDOBA and learn from industry professionals. Book
                  exclusive events, master mixing techniques, and elevate your
                  music career.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 font-semibold w-full sm:w-auto"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Start Learning Today
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black bg-white hover:bg-gray-100 w-full sm:w-auto"
                  asChild
                >
                  <Link to="/events">
                    <Calendar className="w-5 h-5 mr-2" />
                    View Events
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <Volume2 className="w-8 h-8 text-white mb-2" />
                    <div className="text-sm font-medium text-white">
                      Live Mixing
                    </div>
                    <div className="text-xs text-gray-300">
                      Real-time training
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <Headphones className="w-8 h-8 text-white mb-2" />
                    <div className="text-sm font-medium text-white">
                      Pro Equipment
                    </div>
                    <div className="text-xs text-gray-300">
                      Industry standard
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <Users className="w-8 h-8 text-white mb-2" />
                    <div className="text-sm font-medium text-white">
                      Expert Mentors
                    </div>
                    <div className="text-xs text-gray-300">1-on-1 guidance</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <Award className="w-8 h-8 text-white mb-2" />
                    <div className="text-sm font-medium text-white">
                      Certification
                    </div>
                    <div className="text-xs text-gray-300">
                      Industry recognized
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Equalizer positioned below the feature box */}
              <div className="relative mt-6 flex justify-center">
                <div className="flex items-end space-x-1 opacity-60">
                  <AnimatedEqualizer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        {/* Background DJ Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F1bb0735706c241e9b62c93ae763e081d%2F5162040532814e68be8c052691aa2f68?format=webp&width=800"
            alt="DJ at work"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="underline decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">
                RANDOBA
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive DJ education and exclusive events to help
              you master your craft and connect with the music community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-black transition-colors group shadow-lg"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black relative">
        {/* Background DJ Image */}
        <div className="absolute left-0 top-0 w-1/2 h-full opacity-20">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F1bb0735706c241e9b62c93ae763e081d%2F636132c7ab484d34b5a879da76cb37da?format=webp&width=800"
            alt="DJ with colorful lighting"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              What Our{" "}
              <span className="underline decoration-4 underline-offset-8">
                Students Say
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of successful DJs who started their journey with
              RANDOBA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20"
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-200">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-300">
                    {testimonial.role}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RANDOBA Key Aspects Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Discover{" "}
              <span className="underline decoration-4 underline-offset-8">
                RANDOBA
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your complete destination for DJ education, professional services,
              unforgettable events, and cutting-edge production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <Card className="h-full bg-white border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">
                    DJ School
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    Professional DJ courses with industry experts. Master
                    mixing, scratching, and performance techniques.
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-black group-hover:text-white transition-colors"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="h-full bg-white border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">Agency</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    Full-service talent agency connecting top DJs with premier
                    venues and exclusive events worldwide.
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-black group-hover:text-white transition-colors"
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="h-full bg-white border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">Events</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    Curated experiences from intimate workshops to massive
                    festivals. Every event is a masterpiece.
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-black group-hover:text-white transition-colors"
                  >
                    View Events
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="h-full bg-white border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">
                    Production
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    State-of-the-art music production services. From concept to
                    release, we bring your vision to life.
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-black group-hover:text-white transition-colors"
                  >
                    Discover
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Events Carousel Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our{" "}
              <span className="underline decoration-4 underline-offset-8">
                Events
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Immerse yourself in unforgettable experiences. From intimate
              sessions to grand celebrations.
            </p>
          </div>

          <div className="relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentEventIndex * 100}%)` }}
            >
              {[
                {
                  id: 1,
                  title: "Underground Sessions",
                  description:
                    "Intimate underground events featuring emerging and established DJs in unique venues.",
                  image:
                    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
                  date: "Every Friday",
                  location: "Various Locations",
                  time: "10:00 PM - 4:00 AM",
                  price: 25,
                  vipPrice: 50,
                  capacity: 200,
                  genre: "Deep House / Techno",
                  ageLimit: "21+",
                  fullDescription: "Experience the underground scene with carefully curated lineups featuring both emerging talent and established artists. Each session takes place in unique venues across the city, creating an intimate atmosphere where music lovers can connect with the raw energy of electronic music.",
                },
                {
                  id: 2,
                  title: "RANDOBA Festival",
                  description:
                    "Our flagship annual festival bringing together the best DJs from around the globe.",
                  image:
                    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
                  date: "Summer 2024",
                  location: "Main Arena",
                  time: "2:00 PM - 2:00 AM",
                  price: 150,
                  vipPrice: 300,
                  capacity: 10000,
                  genre: "Multi-Genre",
                  ageLimit: "18+",
                  fullDescription: "The biggest electronic music event of the year featuring 3 stages, 50+ international DJs, and 12 hours of non-stop music. From techno to house, trance to drum & bass, experience the full spectrum of electronic music culture.",
                },
                {
                  id: 3,
                  title: "Masterclass Workshops",
                  description:
                    "Exclusive workshops with industry legends sharing their secrets and techniques.",
                  image:
                    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
                  date: "Monthly",
                  location: "RANDOBA Studio",
                  time: "7:00 PM - 10:00 PM",
                  price: 75,
                  vipPrice: 125,
                  capacity: 50,
                  genre: "Educational",
                  ageLimit: "16+",
                  fullDescription: "Learn from industry legends in intimate workshop settings. Each session covers specific techniques, equipment mastery, and career insights. Limited to 50 participants for maximum interaction and personalized feedback.",
                },
                {
                  id: 4,
                  title: "Rooftop Sessions",
                  description:
                    "Sunset performances with breathtaking city views and curated musical journeys.",
                  image:
                    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
                  date: "Weekends",
                  location: "Sky Terrace",
                  time: "6:00 PM - 12:00 AM",
                  price: 40,
                  vipPrice: 80,
                  capacity: 300,
                  genre: "Melodic House / Progressive",
                  ageLimit: "21+",
                  fullDescription: "Watch the sunset while enjoying carefully curated sets from talented DJs. Our rooftop venue offers 360-degree city views, premium cocktails, and an unmatched atmosphere for music lovers seeking a sophisticated party experience.",
                },
              ].map((event, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-4 left-4 flex space-x-2">
                        <Badge className="bg-white/20 text-white border-white/30">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30">
                          <Calendar className="w-3 h-3 mr-1" />
                          {event.date}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-6 text-white">
                      <h3 className="text-3xl font-bold">{event.title}</h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex space-x-4">
                        <Button
                          className="bg-white text-black hover:bg-gray-200"
                          onClick={() => {
                            setSelectedEvent(event);
                            setTicketModalOpen(true);
                          }}
                        >
                          <Ticket className="w-4 h-4 mr-2" />
                          Book Now
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white text-black bg-white hover:bg-gray-100"
                          onClick={() => {
                            setSelectedEvent(event);
                            setEventInfoModalOpen(true);
                          }}
                        >
                          <Info className="w-4 h-4 mr-2" />
                          View Event
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentEventIndex((prev) => (prev > 0 ? prev - 1 : 3))
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() =>
                setCurrentEventIndex((prev) => (prev < 3 ? prev + 1 : 0))
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEventIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentEventIndex === index ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our{" "}
              <span className="underline decoration-4 underline-offset-8">
                Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our latest work: stunning aftermovies, captivating
              photography, and fresh releases from our talented artists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center">Aftermovies</h3>
              <div className="grid gap-4">
                {[
                  {
                    title: "Festival 2024 Highlights",
                    thumbnail:
                      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                    duration: "3:45",
                  },
                  {
                    title: "Underground Sessions Vol. 5",
                    thumbnail:
                      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
                    duration: "2:30",
                  },
                ].map((video, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      <Video className="w-3 h-3 mr-1 inline" />
                      Video
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center">Photography</h3>
              <div className="grid gap-4">
                {[
                  {
                    title: "Neon Nights Collection",
                    image:
                      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
                  },
                  {
                    title: "Behind the Decks",
                    image:
                      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                  },
                  {
                    title: "Crowd Energy",
                    image:
                      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
                  },
                ].map((photo, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      <Camera className="w-3 h-3 mr-1 inline" />
                      Photo
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center">New Releases</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Midnight Groove",
                    artist: "DJ Nova",
                    cover:
                      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
                    type: "Single",
                  },
                  {
                    title: "Electric Dreams EP",
                    artist: "Pulse Collective",
                    cover:
                      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&h=200&fit=crop",
                    type: "EP",
                  },
                  {
                    title: "Underground Anthem",
                    artist: "Bass Foundation",
                    cover:
                      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
                    type: "Single",
                  },
                ].map((release, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={release.cover}
                      alt={release.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{release.title}</h4>
                      <p className="text-sm text-gray-600">{release.artist}</p>
                      <Badge variant="outline" className="text-xs">
                        {release.type}
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              About{" "}
              <span className="underline decoration-4 underline-offset-8">
                RANDOBA
              </span>
            </h2>
          </div>

          {/* Philosophy and Mission */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-white">
                <h3 className="text-3xl font-bold">Our Philosophy & Mission</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At RANDOBA, we believe music is the universal language that
                  connects souls and transcends boundaries. Our mission is to
                  nurture the next generation of DJs and music creators while
                  pushing the boundaries of what's possible in electronic music.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We're committed to providing world-class education, creating
                  unforgettable experiences, and building a community where
                  passion meets profession. Every beat, every mix, every moment
                  is crafted with purpose and precision.
                </p>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <Target className="w-8 h-8 text-white mb-2 mx-auto" />
                    <div className="text-sm">Excellence</div>
                  </div>
                  <div className="text-center">
                    <Heart className="w-8 h-8 text-white mb-2 mx-auto" />
                    <div className="text-sm">Passion</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-white mb-2 mx-auto" />
                    <div className="text-sm">Community</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop"
                  alt="RANDOBA Philosophy"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
                  alt="Anton Bodnar - Founder"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
                    <h4 className="text-xl font-bold text-white">
                      Anton Bodnar
                    </h4>
                    <p className="text-gray-300">Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-white">
                <h3 className="text-3xl font-bold">Meet Our Founder</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Anton Bodnar founded RANDOBA with a vision to revolutionize DJ
                  education and event experiences. With over 15 years in the
                  music industry, Anton has performed at some of the world's
                  most prestigious venues and festivals.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  His passion for sharing knowledge and creating meaningful
                  connections through music led to the creation of RANDOBA - a
                  platform where aspiring DJs can learn from the best and
                  experienced professionals can showcase their talents.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  "Music has the power to change lives. At RANDOBA, we're not
                  just teaching techniques - we're building dreams and creating
                  the future of electronic music." - Anton Bodnar
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Our Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  role: "DJs",
                  icon: Headphones,
                  description: "World-class DJs and performers",
                  image:
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
                },
                {
                  role: "SMM Specialists",
                  icon: Sparkles,
                  description: "Digital marketing experts",
                  image:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
                },
                {
                  role: "Stylists",
                  icon: Star,
                  description: "Creative visual designers",
                  image:
                    "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop",
                },
                {
                  role: "Producers",
                  icon: Music,
                  description: "Audio production specialists",
                  image:
                    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
                },
              ].map((team, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white/20 text-center"
                >
                  <CardHeader>
                    <div className="relative mx-auto mb-4">
                      <img
                        src={team.image}
                        alt={team.role}
                        className="w-20 h-20 object-cover rounded-full mx-auto"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <team.icon className="w-4 h-4 text-black" />
                      </div>
                    </div>
                    <CardTitle className="text-white">{team.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {team.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our{" "}
              <span className="underline decoration-4 underline-offset-8">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive courses designed by industry professionals to take
              your DJ skills to the next level.
            </p>
          </div>

          {/* Courses Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Our Courses
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "Beginner DJ Fundamentals",
                  banner:
                    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=250&fit=crop",
                  price: "$299",
                  duration: "8 weeks",
                  level: "Beginner",
                  description:
                    "Master the basics of DJing, from beatmatching to reading crowds.",
                  fullDescription:
                    "This comprehensive course covers everything you need to start your DJ journey. Learn beatmatching, mixing techniques, equipment basics, and crowd psychology.",
                  teachers: [
                    {
                      name: "DJ Sarah Mix",
                      image:
                        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
                      bio: "10+ years experience, resident at top clubs worldwide",
                    },
                    {
                      name: "MC Flow",
                      image:
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
                      bio: "Expert in crowd engagement and live performance",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Advanced Mixing Techniques",
                  banner:
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
                  price: "$499",
                  duration: "12 weeks",
                  level: "Advanced",
                  description:
                    "Take your mixing to the next level with advanced techniques and effects.",
                  fullDescription:
                    "Dive deep into advanced mixing, harmonic mixing, creative transitions, and professional effects usage. Perfect for DJs ready to elevate their craft.",
                  teachers: [
                    {
                      name: "DJ Tech Master",
                      image:
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
                      bio: "Pioneer in digital DJing, multiple award winner",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "Music Production Basics",
                  banner:
                    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
                  price: "$399",
                  duration: "10 weeks",
                  level: "Intermediate",
                  description:
                    "Learn to create your own tracks and remixes from scratch.",
                  fullDescription:
                    "Comprehensive production course covering DAW basics, sound design, arrangement, and mixing. Create professional-quality tracks.",
                  teachers: [
                    {
                      name: "Producer X",
                      image:
                        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop",
                      bio: "Chart-topping producer with 50+ releases",
                    },
                  ],
                },
              ].map((course) => (
                <Card
                  key={course.id}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={course.banner}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black text-white">
                        {course.level}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/90 text-black">
                        {course.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <span className="text-2xl font-bold text-black">
                        {course.price}
                      </span>
                    </div>
                    <CardDescription className="text-gray-600">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-2">
                      <Button
                        className="flex-1 bg-black text-white hover:bg-gray-800"
                        onClick={() => setSelectedCourse(course)}
                      >
                        Learn More
                      </Button>
                      <Button className="flex-1" variant="outline">
                        Buy Course
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Student Success Stories */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">
              History of Success
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Elena Rodriguez",
                  image:
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop",
                  achievement: "Headlining Major Festivals",
                  story:
                    "From our beginner course to headlining Tomorrowland in just 2 years.",
                },
                {
                  name: "Marcus Chen",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
                  achievement: "Record Label Owner",
                  story:
                    "Started his own label after completing our production course.",
                },
                {
                  name: "Sofia Andersson",
                  image:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
                  achievement: "Ibiza Residency",
                  story: "Secured a summer residency at a top Ibiza club.",
                },
              ].map((student, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                    />
                    <CardTitle className="text-xl">{student.name}</CardTitle>
                    <Badge className="mx-auto">{student.achievement}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {student.story}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      <Dialog
        open={!!selectedCourse}
        onOpenChange={() => setSelectedCourse(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCourse && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedCourse.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedCourse.banner}
                  alt={selectedCourse.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-semibold">Duration</div>
                    <div className="text-gray-600">
                      {selectedCourse.duration}
                    </div>
                  </div>
                  <div className="text-center">
                    <Award className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-semibold">Level</div>
                    <div className="text-gray-600">{selectedCourse.level}</div>
                  </div>
                  <div className="text-center">
                    <Trophy className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-semibold">Price</div>
                    <div className="text-gray-600">{selectedCourse.price}</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Course Description</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedCourse.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Instructors</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedCourse.teachers.map((teacher, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-16 h-16 object-cover rounded-full"
                        />
                        <div>
                          <h5 className="font-semibold">{teacher.name}</h5>
                          <p className="text-sm text-gray-600">{teacher.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button className="flex-1 bg-black text-white hover:bg-gray-800">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Enroll Now - {selectedCourse.price}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    Download Syllabus
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Ticket Booking Modal */}
      <Dialog open={ticketModalOpen} onOpenChange={setTicketModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center">
                  <Ticket className="w-6 h-6 mr-2" />
                  Book Tickets - {selectedEvent.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Music className="w-4 h-4 text-gray-500" />
                      <span>{selectedEvent.genre}</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-4">
                  <h4 className="font-bold text-lg">Select Ticket Type</h4>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div>
                        <h5 className="font-semibold">General Admission</h5>
                        <p className="text-sm text-gray-600">Standard entry to the event</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">${selectedEvent.price}</div>
                        <Button size="sm" className="mt-2">Select</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div>
                        <h5 className="font-semibold">VIP Access</h5>
                        <p className="text-sm text-gray-600">Premium experience with exclusive perks</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">${selectedEvent.vipPrice}</div>
                        <Button size="sm" className="mt-2">Select</Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-4">
                  <h4 className="font-bold text-lg">Contact Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                          type="tel"
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Quantity</label>
                      <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                        <option value="1">1 Ticket</option>
                        <option value="2">2 Tickets</option>
                        <option value="3">3 Tickets</option>
                        <option value="4">4 Tickets</option>
                        <option value="5">5+ Tickets</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setTicketModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button className="flex-1 bg-black text-white hover:bg-gray-800">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Purchase Tickets
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Event Info Modal */}
      <Dialog open={eventInfoModalOpen} onOpenChange={setEventInfoModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center">
                  <Info className="w-6 h-6 mr-2" />
                  {selectedEvent.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold">Event Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <div>
                          <div className="font-medium">Date</div>
                          <div className="text-gray-600">{selectedEvent.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-500" />
                        <div>
                          <div className="font-medium">Time</div>
                          <div className="text-gray-600">{selectedEvent.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-gray-500" />
                        <div>
                          <div className="font-medium">Location</div>
                          <div className="text-gray-600">{selectedEvent.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Music className="w-5 h-5 text-gray-500" />
                        <div>
                          <div className="font-medium">Genre</div>
                          <div className="text-gray-600">{selectedEvent.genre}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-gray-500" />
                        <div>
                          <div className="font-medium">Capacity</div>
                          <div className="text-gray-600">{selectedEvent.capacity} people</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-bold">Ticket Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">General Admission</div>
                          <div className="text-sm text-gray-600">Standard entry</div>
                        </div>
                        <div className="text-xl font-bold">${selectedEvent.price}</div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">VIP Access</div>
                          <div className="text-sm text-gray-600">Premium experience</div>
                        </div>
                        <div className="text-xl font-bold">${selectedEvent.vipPrice}</div>
                      </div>
                      <div className="text-sm text-gray-600 mt-2">
                        Age Requirement: {selectedEvent.ageLimit}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-3">About This Event</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedEvent.fullDescription}
                  </p>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setEventInfoModalOpen(false)}
                  >
                    Close
                  </Button>
                  <Button
                    className="flex-1 bg-black text-white hover:bg-gray-800"
                    onClick={() => {
                      setEventInfoModalOpen(false);
                      setTicketModalOpen(true);
                    }}
                  >
                    <Ticket className="w-4 h-4 mr-2" />
                    Buy Tickets
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-white relative">
        {/* Background DJ Turntables Image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F1bb0735706c241e9b62c93ae763e081d%2F0621012368ea4f3387f4daba7a12b868?format=webp&width=800"
            alt="DJ Turntables"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-black">
              Ready to{" "}
              <span className="underline decoration-4 underline-offset-8">
                Start Your DJ Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Join RANDOBA today and get access to professional courses,
              exclusive events, and a community of passionate DJs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 font-semibold"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Enroll in Course
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black/10"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book an Event
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-black" />
                <span className="text-gray-600">
                  30-day money-back guarantee
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-6 h-6 text-black" />
                <span className="text-gray-600">
                  Lifetime access to courses
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Award className="w-6 h-6 text-black" />
                <span className="text-gray-600">Industry certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
