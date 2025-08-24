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
import { useAuth } from "../contexts/AuthContext";
import { BookingModal } from "../components/BookingModal";
import { ArtistBookingModal } from "../components/ArtistBookingModal";
import { ArtistSelectionModal } from "../components/ArtistSelectionModal";
import {
  Users,
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
  Instagram,
  Video,
  Youtube,
  ExternalLink,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Volume2,
  Mic,
} from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  instructor: string;
  date: Date;
  time: string;
  duration: string;
  location: string;
  price: number;
  spotsLeft: number;
  totalSpots: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "Workshop" | "Masterclass" | "Live Event" | "Course";
  description: string;
  rating: number;
}

export default function Agency() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    artistName: "",
    genre: "",
    message: "",
  });

  // CRM Integration State for Bitrix24
  const [isLoadingArtists, setIsLoadingArtists] = useState(false);
  const [artistsPage, setArtistsPage] = useState(1);
  const [totalArtists, setTotalArtists] = useState(50);

  // Utility function for Bitrix24 API integration
  // This would connect to your Bitrix24 CRM to fetch artist data
  const fetchArtistsFromCRM = async (page = 1, limit = 12) => {
    try {
      setIsLoadingArtists(true);

      // Example API call to Bitrix24
      // const response = await fetch(`/api/bitrix24/artists?page=${page}&limit=${limit}`, {
      //   headers: {
      //     'Authorization': `Bearer ${process.env.BITRIX24_TOKEN}`,
      //     'Content-Type': 'application/json'
      //   }
      // });
      // const data = await response.json();
      // return data.artists;

      // For now, return mock data
      return artists;
    } catch (error) {
      console.error('Error fetching artists from Bitrix24:', error);
      return [];
    } finally {
      setIsLoadingArtists(false);
    }
  };

  // Calendar state
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState<CalendarEvent | null>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingEvent, setSelectedBookingEvent] =
    useState<CalendarEvent | null>(null);
  const [artistBookingModalOpen, setArtistBookingModalOpen] = useState(false);
  const [artistSelectionModalOpen, setArtistSelectionModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Partnership request:", formData);
  };

  /*
   * BITRIX24 CRM INTEGRATION GUIDE
   * ===============================
   *
   * To connect this component with Bitrix24 CRM:
   *
   * 1. API Setup:
   *    - Create API endpoint: /api/bitrix24/artists
   *    - Use Bitrix24 REST API with your webhook URL
   *    - Map Bitrix24 fields to our artist interface
   *
   * 2. Bitrix24 Fields Mapping:
   *    - ID → Deal/Contact ID
   *    - name → Artist Stage Name
   *    - realName → Contact Full Name
   *    - genre → Custom Field "Genre"
   *    - followers → Custom Field "Social Following"
   *    - bookingRate → Deal Amount
   *    - status → Deal Stage
   *    - tier → Custom Field "Artist Tier"
   *
   * 3. Real-time Updates:
   *    - Use Bitrix24 webhooks for real-time updates
   *    - Implement WebSocket connection for live data
   *
   * 4. Mobile Performance:
   *    - Implement pagination (12 artists per page)
   *    - Add image lazy loading
   *    - Cache frequently accessed artists
   */

  // Artist data structure optimized for CRM integration (Bitrix24)
  // This would typically be fetched from an API endpoint connected to Bitrix24
  const artists = [
    {
      id: "ARTIST_001", // CRM-friendly ID format
      name: "DJ Aurora",
      realName: "Elena Starlight",
      genre: "Progressive House",
      followers: "2.5M",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      description: "Chart-topping progressive house sensation with residencies at world's top clubs.",
      achievements: [
        "#1 Beatport Progressive",
        "Tomorrowland Mainstage",
        "Ultra Music Festival",
        "Residency at Pacha Ibiza",
        "Grammy Nominated"
      ],
      // CRM fields for Bitrix24 integration
      status: "active", // active, inactive, pending
      tier: "premium", // premium, standard, emerging
      bookingRate: 15000, // EUR per performance
      availability: "worldwide",
      languages: ["EN", "ES", "DE"],
      specialties: ["Festivals", "Clubs", "Private Events"],
      lastUpdated: "2024-01-15T10:30:00Z",
      social: {
        instagram: "@dj_aurora",
        tiktok: "@djaurora",
        youtube: "DJAuroraOfficial",
      },
    },
    {
      id: 2,
      name: "Bass Phantom",
      realName: "Marcus Chen",
      genre: "Bass / Dubstep",
      followers: "1.8M",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description:
        "Underground bass legend pushing boundaries with innovative sound design.",
      achievements: [
        "EDC Las Vegas Headliner",
        "Lost Lands Festival",
        "Monstercat Label",
      ],
      social: {
        instagram: "@bassphantom",
        tiktok: "@bassphantom_",
        youtube: "BassPhantomMusic",
      },
    },
    {
      id: 3,
      name: "Neon Dreams",
      realName: "Sofia Martinez",
      genre: "Synthwave / Retrowave",
      followers: "3.2M",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      description:
        "Retro-futuristic pioneer bringing 80s nostalgia to modern dance floors.",
      achievements: [
        "Synthwave Grammy Nominee",
        "Coachella Performer",
        "Netflix Soundtrack",
      ],
      social: {
        instagram: "@neondreams",
        tiktok: "@neondreamsmusic",
        youtube: "NeonDreamsOfficial",
      },
    },
    {
      id: 4,
      name: "Techno Sage",
      realName: "Alexander Volkov",
      genre: "Techno / Minimal",
      followers: "1.5M",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      description:
        "Berlin-based techno virtuoso crafting hypnotic journeys through sound.",
      achievements: [
        "Berghain Resident",
        "Awakenings Festival",
        "Drumcode Records",
      ],
      social: {
        instagram: "@technosage",
        tiktok: "@techno_sage",
        youtube: "TechnoSageOfficial",
      },
    },
    {
      id: 5,
      name: "Luna Bass",
      realName: "Isabella Rodriguez",
      genre: "Future Bass",
      followers: "2.1M",
      image:
        "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=400&h=400&fit=crop",
      description:
        "Melodic future bass artist creating emotional landscapes through music.",
      achievements: [
        "Monstercat Artist",
        "Electric Forest",
        "OWSLA Collaboration",
      ],
      social: {
        instagram: "@luna_bass",
        tiktok: "@lunabassmusic",
        youtube: "LunaBassOfficial",
      },
    },
    {
      id: "ARTIST_006",
      name: "Cyber Pulse",
      realName: "David Kim",
      genre: "Cyberpunk / Industrial",
      followers: "900K",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
      description: "Cyberpunk visionary merging industrial beats with futuristic aesthetics.",
      achievements: [
        "Cyberpunk 2077 Soundtrack",
        "DEF CON Performer",
        "Industrial Label",
        "Tech Conference Regular",
        "VR Concert Pioneer"
      ],
      status: "active",
      tier: "emerging",
      bookingRate: 8000,
      availability: "worldwide",
      languages: ["EN", "KR", "JP"],
      specialties: ["Tech Events", "Gaming Conventions", "Virtual Reality"],
      lastUpdated: "2024-01-15T10:30:00Z",
      social: {
        instagram: "@cyberpulse",
        tiktok: "@cyber_pulse",
        youtube: "CyberPulseMusic",
      },
    },
  ];

  const cooperationTerms = [
    {
      title: "Your Art is Our Priority",
      description:
        "We create conditions that help artists grow, expand their reach, and achieve career goals faster.",
      icon: TrendingUp,
    },
    {
      title: "Open Partnership",
      description:
        "Clear terms and honest agreements so you always know where you stand.",
      icon: Globe,
    },
    {
      title: "Creative Collaborations",
      description:
        "Work with top musicians and labels to create unique content and unforgettable performances.",
      icon: Heart,
    },
    {
      title: "Your Music, Your Vision",
      description:
        "You keep full control over your musical style while we handle the organization and promotion.",
      icon: Target,
    },
    {
      title: "Personal Career Strategy",
      description:
        "A tailored strategy focused on your unique goals, guiding your professional and creative development to the next level.",
      icon: Zap,
    },
    {
      title: "Reliable Support",
      description:
        "We're with you at every step - from negotiations to stepping on stage.",
      icon: Award,
    },
  ];

  // Calendar data and functions
  const events: CalendarEvent[] = [
    {
      id: "1",
      title: "DJ Mixing Workshop",
      instructor: "Marcus Rodriguez",
      date: new Date(2024, 0, 15),
      time: "19:00",
      duration: "3 hours",
      location: "Studio A",
      price: 89,
      spotsLeft: 3,
      totalSpots: 12,
      level: "Beginner",
      category: "Workshop",
      description:
        "Learn the basics of DJ mixing including beatmatching and transitions.",
      rating: 4.8,
    },
    {
      id: "2",
      title: "Turntablism Masterclass",
      instructor: "DJ Luna",
      date: new Date(2024, 0, 18),
      time: "20:00",
      duration: "4 hours",
      location: "Main Studio",
      price: 149,
      spotsLeft: 1,
      totalSpots: 8,
      level: "Advanced",
      category: "Masterclass",
      description: "Master advanced turntable techniques and scratching.",
      rating: 4.9,
    },
    {
      id: "3",
      title: "Electronic Production",
      instructor: "Alex Waves",
      date: new Date(2024, 0, 20),
      time: "14:00",
      duration: "6 hours",
      location: "Production Lab",
      price: 199,
      spotsLeft: 5,
      totalSpots: 10,
      level: "Intermediate",
      category: "Course",
      description: "Create professional electronic tracks with industry tools.",
      rating: 4.7,
    },
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    );
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Workshop":
        return "bg-blue-500";
      case "Masterclass":
        return "bg-purple-500";
      case "Live Event":
        return "bg-pink-500";
      case "Course":
        return "bg-green-500";
      default:
        return "bg-gold-500";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Workshop":
        return <Headphones className="w-3 h-3" />;
      case "Masterclass":
        return <Star className="w-3 h-3" />;
      case "Live Event":
        return <Music className="w-3 h-3" />;
      case "Course":
        return <Volume2 className="w-3 h-3" />;
      default:
        return <CalendarIcon className="w-3 h-3" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "border-l-green-400";
      case "Intermediate":
        return "border-l-yellow-400";
      case "Advanced":
        return "border-l-red-400";
      default:
        return "border-l-gray-400";
    }
  };

  const handleEventHover = (
    event: CalendarEvent,
    mouseEvent: React.MouseEvent,
  ) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setHoveredEvent(event);
    setHoverPosition({ x: mouseEvent.clientX, y: mouseEvent.clientY });
  };

  const handleEventLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredEvent(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  const handleTooltipEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleTooltipLeave = () => {
    setHoveredEvent(null);
  };

  const handleBookEvent = (event: CalendarEvent) => {
    if (!user) {
      return;
    }
    setSelectedBookingEvent(event);
    setBookingModalOpen(true);
    setHoveredEvent(null);
  };

  const handleBookArtist = (artist: any) => {
    setSelectedArtist(artist);
    setArtistBookingModalOpen(true);
  };

  const handleDateClick = (clickedDate: Date) => {
    setSelectedDate(clickedDate);
    setArtistSelectionModalOpen(true);
  };

  const handleArtistSelection = (artist: any) => {
    setSelectedArtist(artist);
    setArtistSelectionModalOpen(false);
    setArtistBookingModalOpen(true);
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] sm:min-h-screen overflow-hidden bg-black -mt-16 pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F04a79369a30d4d69bd5ac30aac5e71b7%2F7084a2b22444446fac728e208308d1a5?format=webp&width=800"
            alt="Agency Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        </div>

        {/* Floating Elements - Hidden on mobile for better performance */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full animate-bounce opacity-40"></div>
          <div className="absolute bottom-40 left-20 w-8 h-8 bg-pink-400 rounded-full animate-ping opacity-30"></div>
          <div className="absolute top-60 right-40 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-50"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32 min-h-[80vh] sm:min-h-screen flex items-center z-10">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-white">
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 hover:bg-cyan-500/30 backdrop-blur-sm">
                  <Users className="w-3 h-3 mr-1" />
                  Elite Artist Representation
                </Badge>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                      RANDOBA
                    </span>
                    <br />
                    <span className="text-white">Artist Agency</span>
                  </h1>
                  <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
                    Your talent is flawless - now it's time to turn it
                    into a powerful brand. <br />
                    We take DJs beyond their usual stages and fees,
                    giving them strategy, stages, industry
                    connections, full-scale artist management, and
                    24/7 support. <br />
                    We open the doors to festivals, clubs, and premium
                    events. You make the music - we create the
                    opportunities that grow your career.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Join Our Roster
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-black bg-white hover:bg-gray-100 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300"
                    onClick={() => {
                      const artistSection =
                        document.getElementById("artist-roster");
                      if (artistSection) {
                        artistSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <Music className="w-5 h-5 mr-2" />
                    View Artists
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8">
                  {[
                    { number: "50+", label: "Elite Artists", icon: Users },
                    { number: "1000+", label: "Global Events", icon: Music },
                    { number: "25M+", label: "Total Reach", icon: Globe },
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="relative">
                        <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full group-hover:bg-cyan-400/40 transition-all duration-300"></div>
                      </div>
                      <div className="text-3xl font-bold text-white">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl"></div>
                  <div className="relative space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">
                        Agency Highlights
                      </h3>
                      <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                        <Star className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      {[
                        { label: <em>Stages without borders</em>, value: "100%" },
                        { label: <em>Strong event network</em>, value: "1200+" },
                        { label: <em>Booking & Streaming growth</em>, value: "400%" },
                        { label: <em>Artist management</em>, value: <em>360°</em> },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <span className="text-gray-300">{item.label}</span>
                          <span className="text-cyan-400 font-bold">
                            {item.value}
                          </span>
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

      {/* Agency Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-48 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-30"></div>
          <div className="absolute top-64 right-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Philosophy: a reliable support at every stage of your growth
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stop being just a good DJ - it's time to become an
              in-demand artist. In a highly competitive industry, we
              give you an advantage: strategy, connections, and media
              support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Artist Development
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      From your first original tracks to a unique
                      image - we help you stand out and secure your
                      spot at the top. We build a personalized path to
                      the stages you dream of.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Access to New Stages
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      We connect you with prestigious festivals,
                      clubs, and premium events that thousands of DJs
                      aspire to play.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/25">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Ongoing Growth
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Your focus is the music. Our focus is your
                      progress, new contracts, and growing performance
                      fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
                alt="Agency Philosophy"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-lg font-bold">Creating Legends</h4>
                <p className="text-sm opacity-90">Where music meets destiny</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Roster Section */}
      <section
        id="artist-roster"
        className="py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-900/20 to-purple-900/20"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Our Elite{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Roster
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Meet the extraordinary artists who define the future of electronic
              music.
            </p>
          </div>

          {/* Artist Grid - Optimized for CRM Management */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {artists.map((artist, index) => (
              <Card
                key={artist.id}
                className="bg-black/90 backdrop-blur-xl border-white/10 overflow-hidden group hover:bg-black/95 hover:border-cyan-400/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Compact Image Section */}
                <div className="relative h-48 sm:h-52 lg:h-48 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Floating Badges */}
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 text-xs backdrop-blur-sm">
                      <Users className="w-3 h-3 mr-1" />
                      {artist.followers}
                    </Badge>
                  </div>

                  <div className="absolute top-3 left-3">
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 text-xs backdrop-blur-sm">
                      {artist.genre}
                    </Badge>
                  </div>

                  {/* Artist Name Overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white truncate">
                      {artist.name}
                    </h3>
                    <p className="text-sm text-gray-300 truncate">
                      {artist.realName}
                    </p>
                  </div>
                </div>

                {/* Compact Content Section */}
                <CardContent className="p-4 space-y-3">
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {artist.description}
                  </p>

                  {/* Key Achievements - Compact List */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      Key Achievements
                    </h4>
                    <div className="space-y-1">
                      {artist.achievements.slice(0, 2).map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white text-xs leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                      {artist.achievements.length > 2 && (
                        <div className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400 text-xs">
                            +{artist.achievements.length - 2} more achievements
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Performance Locations - Compact */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      Available Worldwide
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {["EU", "UK", "USA", "ASIA"].map((region, idx) => (
                        <Badge
                          key={idx}
                          className="bg-white/10 text-white border-white/20 text-xs px-2 py-0.5"
                        >
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-3 border-t border-white/10 space-y-3">
                    <div className="flex justify-center space-x-4">
                      <Instagram className="w-4 h-4 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
                      <Video className="w-4 h-4 text-gray-400 hover:text-pink-600 cursor-pointer transition-colors" />
                      <Youtube className="w-4 h-4 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
                    </div>

                    {/* Mobile-Adaptive Button Layout */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleBookArtist(artist)}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 text-xs font-semibold"
                      >
                        <CalendarIcon className="w-3 h-3 mr-1" />
                        Book Artist
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => {
                          // Scroll to partnership form
                          const partnershipSection = document.querySelector('form');
                          if (partnershipSection) {
                            partnershipSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 text-xs font-semibold"
                      >
                        <Users className="w-3 h-3 mr-1" />
                        Join Roster
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Artists - CRM Integration Ready */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              <span className="text-gray-300 text-sm">
                Showing {artists.length} of {totalArtists}+ artists
              </span>
              <Button
                size="sm"
                variant="outline"
                className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 text-xs disabled:opacity-50"
                onClick={() => {
                  setArtistsPage(prev => prev + 1);
                  fetchArtistsFromCRM(artistsPage + 1);
                }}
                disabled={isLoadingArtists}
              >
                {isLoadingArtists ? "Loading..." : "Load More Artists"}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              🔗 Powered by Bitrix24 CRM Integration
            </p>
          </div>

        </div>
      </section>

      {/* Terms of Cooperation Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-radial from-purple-500/10 to-transparent rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
        </div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-32 left-16 w-8 h-8 border border-cyan-400 rotate-45"></div>
          <div className="absolute top-48 right-24 w-6 h-6 border border-purple-400 rotate-12"></div>
          <div className="absolute bottom-32 left-32 w-10 h-10 border border-pink-400 rotate-45"></div>
          <div className="absolute bottom-48 right-16 w-4 h-4 border border-yellow-400 rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Partnership{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Terms
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Partnership with RANDOBA isn't just a formality - it's
              your personal career launchpad. We turn your ambitions
              into real results, opening doors to a world where your
              growth is inevitable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cooperationTerms.map((term, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl shadow-black/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                    <term.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {term.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {term.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Request Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 p-8 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 via-purple-600/90 to-pink-600/90"></div>
                <div className="relative">
                  <h3 className="text-3xl font-bold mb-4">
                    Join the RANDOBA Family
                  </h3>
                  <p className="text-xl opacity-90">
                    Ready to take your career to the next level? Let's create
                    something extraordinary together.
                  </p>
                </div>
              </div>

              <CardContent className="p-8 bg-gray-900/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        Artist/DJ Name *
                      </label>
                      <Input
                        required
                        value={formData.artistName}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            artistName: e.target.value,
                          }))
                        }
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
                        placeholder="Your artist name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        Primary Genre *
                      </label>
                      <Input
                        required
                        value={formData.genre}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            genre: e.target.value,
                          }))
                        }
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
                        placeholder="e.g. Progressive House, Techno"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Tell Us About Yourself *
                    </label>
                    <Textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
                      placeholder="Share your story, achievements, goals, and why you'd like to work with RANDOBA..."
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 font-semibold px-12 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/25"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Submit Partnership Request
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Book Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent underline decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">
                Next Event
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
              Click on any date to book an artist for your event. Tap existing events to see workshop details.
            </p>
          </div>

          {/* Calendar */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl overflow-hidden">
              <CardHeader className="p-4 lg:p-6">
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateMonth("prev")}
                    className="border-white/20 text-white hover:bg-white/10 p-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-white">
                    {monthNames[currentDate.getMonth()]}{" "}
                    {currentDate.getFullYear()}
                  </CardTitle>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateMonth("next")}
                    className="border-white/20 text-white hover:bg-white/10 p-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-0 overflow-x-auto">
                {/* Day Headers */}
                <div className="grid grid-cols-7 border-b border-white/20 min-w-full">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="p-2 sm:p-4 text-center font-semibold text-white border-r border-white/20 last:border-r-0 text-xs sm:text-sm"
                    >
                      <span className="hidden sm:inline">{day}</span>
                      <span className="sm:hidden">{day.substring(0, 1)}</span>
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 min-w-full">
                  {/* Empty cells for days before month starts */}
                  {Array.from({ length: firstDay }, (_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="h-16 sm:h-20 lg:h-24 border-r border-b border-white/20 last:border-r-0"
                    ></div>
                  ))}

                  {/* Days of the month */}
                  {Array.from({ length: daysInMonth }, (_, index) => {
                    const day = index + 1;
                    const cellDate = new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      day,
                    );
                    const dayEvents = getEventsForDate(cellDate);
                    const isToday =
                      cellDate.toDateString() === new Date().toDateString();

                    return (
                      <div
                        key={day}
                        className={`h-16 sm:h-20 lg:h-24 border-r border-b border-white/20 last:border-r-0 p-1 sm:p-2 relative overflow-hidden hover:bg-white/10 transition-colors cursor-pointer ${
                          isToday ? "bg-cyan-500/20" : ""
                        }`}
                        onClick={() => handleDateClick(cellDate)}
                      >
                        <div
                          className={`text-xs sm:text-sm font-medium mb-1 ${isToday ? "text-cyan-400 font-bold" : "text-white"}`}
                        >
                          {day}
                        </div>

                        <div className="space-y-1">
                          {dayEvents
                            .slice(0, window.innerWidth < 640 ? 1 : 3)
                            .map((event, eventIndex) => (
                              <div
                                key={event.id}
                                className={`text-xs p-1 rounded cursor-pointer transition-all hover:scale-105 border-l-2 ${getCategoryColor(event.category)} ${getLevelColor(event.level)} bg-black/80 text-white truncate`}
                                onMouseEnter={(e) => handleEventHover(event, e)}
                                onMouseLeave={handleEventLeave}
                                onMouseMove={(e) =>
                                  setHoverPosition({
                                    x: e.clientX,
                                    y: e.clientY,
                                  })
                                }
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEventHover(event, e);
                                }}
                              >
                                <div className="flex items-center space-x-1">
                                  <span className="hidden sm:inline">
                                    {getCategoryIcon(event.category)}
                                  </span>
                                  <span className="truncate text-xs">
                                    {event.title}
                                  </span>
                                </div>
                              </div>
                            ))}

                          {dayEvents.length >
                            (window.innerWidth < 640 ? 1 : 3) && (
                            <div className="text-xs text-cyan-400 font-medium">
                              +
                              {dayEvents.length -
                                (window.innerWidth < 640 ? 1 : 3)}{" "}
                              more
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Workshop", "Masterclass", "Live Event", "Course"].map(
                (category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <div
                      className={`w-4 h-4 rounded ${getCategoryColor(category)}`}
                    ></div>
                    <span className="text-sm text-gray-300">{category}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Hover Tooltip */}
          {hoveredEvent && (
            <div
              className="fixed z-50 bg-gray-900/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-2xl max-w-xs"
              style={{
                left: `${hoverPosition.x + 10}px`,
                top: `${hoverPosition.y - 100}px`,
                transform:
                  hoverPosition.x > window.innerWidth - 300
                    ? "translateX(-100%)"
                    : "none",
              }}
              onMouseEnter={handleTooltipEnter}
              onMouseLeave={handleTooltipLeave}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge className="bg-white/10 text-cyan-300 border-cyan-400/30">
                    {getCategoryIcon(hoveredEvent.category)}
                    <span className="ml-1">{hoveredEvent.category}</span>
                  </Badge>
                  <Badge
                    className={`${
                      hoveredEvent.level === "Beginner"
                        ? "bg-green-50 text-green-600 border-green-200"
                        : hoveredEvent.level === "Intermediate"
                          ? "bg-yellow-50 text-yellow-600 border-yellow-200"
                          : "bg-red-50 text-red-600 border-red-200"
                    }`}
                  >
                    {hoveredEvent.level}
                  </Badge>
                </div>

                <h3 className="font-bold text-white">{hoveredEvent.title}</h3>
                <p className="text-sm text-gray-300">
                  with {hoveredEvent.instructor}
                </p>

                <div className="space-y-1 text-xs">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-3 h-3 mr-2 text-cyan-400" />
                    {hoveredEvent.time} • {hoveredEvent.duration}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-3 h-3 mr-2 text-cyan-400" />
                    {hoveredEvent.location}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-3 h-3 mr-2 text-cyan-400" />
                    {hoveredEvent.spotsLeft} spots left
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-white">
                        {hoveredEvent.rating}
                      </span>
                    </div>
                    <span className="font-bold text-cyan-400">
                      ${hoveredEvent.price}
                    </span>
                  </div>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 font-semibold text-xs"
                  onClick={() => handleBookEvent(hoveredEvent)}
                >
                  Book Now
                </Button>
              </div>
            </div>
          )}

          {/* Booking Modal */}
          <BookingModal
            isOpen={bookingModalOpen}
            onClose={() => setBookingModalOpen(false)}
            item={
              selectedBookingEvent
                ? {
                    id: selectedBookingEvent.id,
                    title: selectedBookingEvent.title,
                    instructor: selectedBookingEvent.instructor,
                    date: selectedBookingEvent.date.toLocaleDateString(
                      "en-US",
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    ),
                    time: selectedBookingEvent.time,
                    duration: selectedBookingEvent.duration,
                    location: selectedBookingEvent.location,
                    price: selectedBookingEvent.price,
                    type: "event",
                  }
                : null
            }
          />

          {/* Artist Selection Modal */}
          <ArtistSelectionModal
            isOpen={artistSelectionModalOpen}
            onClose={() => {
              setArtistSelectionModalOpen(false);
              setSelectedDate(null);
            }}
            onSelectArtist={handleArtistSelection}
            selectedDate={selectedDate}
            artists={artists}
          />

          {/* Artist Booking Modal */}
          <ArtistBookingModal
            isOpen={artistBookingModalOpen}
            onClose={() => {
              setArtistBookingModalOpen(false);
              setSelectedDate(null);
            }}
            artist={selectedArtist}
            preSelectedDate={selectedDate}
          />
        </div>
      </section>
    </div>
  );
}
