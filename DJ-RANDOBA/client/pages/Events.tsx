import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "../contexts/AuthContext";
import { BookingModal } from "../components/BookingModal";
import { eventsService, type CMSEvent } from "../services/eventsService";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Star,
  Music,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Volume2,
  Mic,
  Play,
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

export default function Events() {
  const { user } = useAuth();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState<CalendarEvent | null>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingEvent, setSelectedBookingEvent] =
    useState<CalendarEvent | null>(null);
  const [cmsEvents, setCmsEvents] = useState<CMSEvent[]>([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(true);

  // Fetch events from CMS on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoadingEvents(true);
        const events = await eventsService.fetchEvents();
        setCmsEvents(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoadingEvents(false);
      }
    };

    fetchEvents();
  }, []);

  const events: CalendarEvent[] = [
    // January 2024 events (existing)
    {
      id: "1",
      title: "DJ Mixing Workshop",
      instructor: "Marcus Rodriguez",
      date: new Date(2024, 0, 15), // January 15, 2024
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
      date: new Date(2024, 0, 18), // January 18, 2024
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
      date: new Date(2024, 0, 20), // January 20, 2024
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
    {
      id: "4",
      title: "Live Performance Night",
      instructor: "Various Artists",
      date: new Date(2024, 0, 22), // January 22, 2024
      time: "21:00",
      duration: "5 hours",
      location: "Club Vertex",
      price: 35,
      spotsLeft: 25,
      totalSpots: 100,
      level: "Beginner",
      category: "Live Event",
      description: "Experience live DJ performances and network.",
      rating: 4.6,
    },
    {
      id: "5",
      title: "Business Workshop",
      instructor: "Sarah Martinez",
      date: new Date(2024, 0, 25), // January 25, 2024
      time: "10:00",
      duration: "8 hours",
      location: "Conference Room B",
      price: 299,
      spotsLeft: 7,
      totalSpots: 15,
      level: "Intermediate",
      category: "Workshop",
      description: "Learn to start and grow your mobile DJ business.",
      rating: 4.8,
    },
    {
      id: "6",
      title: "Hip-Hop Masterclass",
      instructor: "DJ Rhythm",
      date: new Date(2024, 0, 28), // January 28, 2024
      time: "18:00",
      duration: "3 hours",
      location: "Studio C",
      price: 119,
      spotsLeft: 2,
      totalSpots: 12,
      level: "Advanced",
      category: "Masterclass",
      description: "Master hip-hop DJing and scratching techniques.",
      rating: 4.9,
    },

    // July 2025 events
    {
      id: "7",
      title: "Summer DJ Bootcamp",
      instructor: "DJ Phoenix",
      date: new Date(2025, 6, 2), // July 2, 2025
      time: "10:00",
      duration: "8 hours",
      location: "Main Academy",
      price: 349,
      spotsLeft: 8,
      totalSpots: 20,
      level: "Beginner",
      category: "Course",
      description:
        "Intensive summer bootcamp covering all DJ fundamentals in one day.",
      rating: 4.8,
    },
    {
      id: "8",
      title: "Vinyl Revival Workshop",
      instructor: "Classic Carl",
      date: new Date(2025, 6, 5), // July 5, 2025
      time: "15:00",
      duration: "4 hours",
      location: "Vintage Studio",
      price: 129,
      spotsLeft: 6,
      totalSpots: 12,
      level: "Intermediate",
      category: "Workshop",
      description:
        "Rediscover the art of vinyl DJing with classic techniques and rare records.",
      rating: 4.7,
    },
    {
      id: "9",
      title: "EDM Festival Prep",
      instructor: "Electro Max",
      date: new Date(2025, 6, 8), // July 8, 2025
      time: "20:00",
      duration: "3 hours",
      location: "Festival Ground",
      price: 89,
      spotsLeft: 15,
      totalSpots: 50,
      level: "Advanced",
      category: "Masterclass",
      description:
        "Prepare for festival season with advanced crowd control and set planning.",
      rating: 4.9,
    },
    {
      id: "10",
      title: "Rooftop Summer Jam",
      instructor: "Various DJs",
      date: new Date(2025, 6, 12), // July 12, 2025
      time: "18:00",
      duration: "6 hours",
      location: "Skyline Rooftop",
      price: 45,
      spotsLeft: 35,
      totalSpots: 120,
      level: "Beginner",
      category: "Live Event",
      description:
        "Sunset performances with amazing city views and networking opportunities.",
      rating: 4.6,
    },
    {
      id: "11",
      title: "Mixing Techniques Lab",
      instructor: "Tech Nina",
      date: new Date(2025, 6, 15), // July 15, 2025
      time: "19:00",
      duration: "2.5 hours",
      location: "Tech Lab",
      price: 75,
      spotsLeft: 4,
      totalSpots: 8,
      level: "Intermediate",
      category: "Workshop",
      description:
        "Hands-on lab focusing on advanced mixing techniques and equipment.",
      rating: 4.8,
    },
    {
      id: "12",
      title: "Producer to DJ Transition",
      instructor: "Hybrid Steve",
      date: new Date(2025, 6, 18), // July 18, 2025
      time: "16:00",
      duration: "5 hours",
      location: "Studio Complex",
      price: 199,
      spotsLeft: 7,
      totalSpots: 15,
      level: "Advanced",
      category: "Course",
      description:
        "Bridge the gap from music production to live DJing performance.",
      rating: 4.7,
    },
    {
      id: "13",
      title: "Beginner Friendly Friday",
      instructor: "DJ Mentor Mike",
      date: new Date(2025, 6, 20), // July 20, 2025
      time: "17:00",
      duration: "2 hours",
      location: "Community Center",
      price: 35,
      spotsLeft: 12,
      totalSpots: 25,
      level: "Beginner",
      category: "Workshop",
      description:
        "Perfect introduction for complete beginners with basic equipment overview.",
      rating: 4.5,
    },
    {
      id: "14",
      title: "Scratch Battle Night",
      instructor: "Battle Master DJ X",
      date: new Date(2025, 6, 23), // July 23, 2025
      time: "21:00",
      duration: "4 hours",
      location: "Underground Venue",
      price: 25,
      spotsLeft: 45,
      totalSpots: 80,
      level: "Advanced",
      category: "Live Event",
      description:
        "Competitive scratching battles with prizes and recognition.",
      rating: 4.8,
    },
    {
      id: "15",
      title: "Controller vs CDJs",
      instructor: "Gear Guru Tom",
      date: new Date(2025, 6, 26), // July 26, 2025
      time: "14:00",
      duration: "3 hours",
      location: "Equipment Center",
      price: 95,
      spotsLeft: 9,
      totalSpots: 16,
      level: "Intermediate",
      category: "Workshop",
      description:
        "Compare and master both controller and CDJ setups for versatile DJing.",
      rating: 4.6,
    },
    {
      id: "16",
      title: "Master DJ Showcase",
      instructor: "Legendary DJ Apex",
      date: new Date(2025, 6, 30), // July 30, 2025
      time: "19:30",
      duration: "3.5 hours",
      location: "Grand Auditorium",
      price: 299,
      spotsLeft: 18,
      totalSpots: 200,
      level: "Advanced",
      category: "Masterclass",
      description:
        "Exclusive masterclass with world-renowned DJ covering career insights and advanced techniques.",
      rating: 5.0,
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
    }, 200); // 200ms delay before hiding
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
      // If user is not signed in, you could trigger the auth modal here
      // For now, just show a toast
      return;
    }

    setSelectedBookingEvent(event);
    setBookingModalOpen(true);
    setHoveredEvent(null); // Hide the tooltip
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
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .group:hover .event-image {
            transform: scale(1.1) rotate(1deg);
          }

          .group:hover .event-content {
            transform: translateY(-2px);
          }
        `}
      </style>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] overflow-hidden bg-black -mt-16 pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
            alt="DJ Events Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32 min-h-[50vh] sm:min-h-[60vh] flex items-center">
          <div className="text-center w-full">
            <div className="space-y-6 lg:space-y-8 text-white">
              <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20 mx-auto inline-flex">
                <CalendarIcon className="w-3 h-3 mr-1" />
                Live Events & Workshops
              </Badge>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Events{" "}
                  <span className="text-white underline decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">
                    Calendar
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
                  Discover and book upcoming DJ events, workshops, and
                  masterclasses. Connect with fellow DJs and elevate your
                  skills.
                </p>
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 font-semibold w-full sm:w-auto"
                >
                  <Play className="w-5 h-5 mr-2" />
                  View Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events List Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black">
              Featured{" "}
              <span className="underline decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">
                Events
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our upcoming flagship events, masterclasses, and
              exclusive experiences
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {[
              {
                id: "featured-1",
                title: "RANDOBA Festival 2025",
                description:
                  "Our biggest annual celebration featuring 50+ international DJs across 5 stages. Experience the ultimate electronic music festival.",
                image:
                  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
                date: "August 15-17, 2025",
                location: "Festival Grounds",
                price: 299,
                category: "Live Event",
                level: "All Levels",
                spotsLeft: 2847,
                totalSpots: 5000,
                rating: 4.9,
                instructor: "Various Artists",
                duration: "3 Days",
                featured: true,
              },
              {
                id: "featured-2",
                title: "Legendary Masters Workshop",
                description:
                  "Exclusive masterclass with world-renowned DJ legends. Learn advanced techniques and industry secrets from the best in the business.",
                image:
                  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
                date: "July 22, 2025",
                location: "Grand Studio",
                price: 499,
                category: "Masterclass",
                level: "Advanced",
                spotsLeft: 3,
                totalSpots: 15,
                rating: 5.0,
                instructor: "DJ Apex & DJ Luna",
                duration: "6 hours",
                featured: true,
              },
              {
                id: "featured-3",
                title: "Underground Collective",
                description:
                  "Intimate underground sessions featuring emerging talents and experimental sounds. Connect with the underground scene.",
                image:
                  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
                date: "Every Friday",
                location: "Secret Venues",
                price: 45,
                category: "Live Event",
                level: "All Levels",
                spotsLeft: 25,
                totalSpots: 80,
                rating: 4.7,
                instructor: "Collective Artists",
                duration: "4 hours",
                featured: true,
              },
              {
                id: "featured-4",
                title: "Production Bootcamp",
                description:
                  "Intensive 3-day bootcamp covering everything from beat making to mixing and mastering. All equipment included.",
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
                date: "September 5-7, 2025",
                location: "Production Lab",
                price: 899,
                category: "Course",
                level: "Intermediate",
                spotsLeft: 12,
                totalSpots: 20,
                rating: 4.8,
                instructor: "Alex Waves",
                duration: "3 Days",
                featured: true,
              },
              {
                id: "featured-5",
                title: "Vinyl Revival Experience",
                description:
                  "Discover the art of vinyl DJing with rare records and classic techniques. Hands-on experience with professional turntables.",
                image:
                  "https://images.unsplash.com/photo-1556388406-9c8faa2c4a86?w=600&h=400&fit=crop",
                date: "August 10, 2025",
                location: "Vintage Studio",
                price: 199,
                category: "Workshop",
                level: "Beginner",
                spotsLeft: 8,
                totalSpots: 16,
                rating: 4.6,
                instructor: "Classic Carl",
                duration: "5 hours",
                featured: true,
              },
              {
                id: "featured-6",
                title: "Rooftop Sunset Sessions",
                description:
                  "Magical sunset performances with breathtaking city views. Network with fellow music lovers while enjoying amazing sets.",
                image:
                  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
                date: "Every Weekend",
                location: "Sky Terrace",
                price: 75,
                category: "Live Event",
                level: "All Levels",
                spotsLeft: 45,
                totalSpots: 120,
                rating: 4.8,
                instructor: "Various DJs",
                duration: "3 hours",
                featured: true,
              },
            ].map((event, index) => (
              <div
                key={event.id}
                className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                <Card className="h-full bg-white border-2 border-gray-100 hover:border-black transition-all duration-300 hover:shadow-2xl overflow-hidden">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <Badge
                        className={`${getCategoryColor(event.category)} text-white border-0`}
                      >
                        {getCategoryIcon(event.category)}
                        <span className="ml-1">{event.category}</span>
                      </Badge>
                      {event.featured && (
                        <Badge className="bg-gold-500 text-black border-0 font-bold">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <CalendarIcon className="w-4 h-4 mr-1" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold">{event.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-black/80 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Mic className="w-4 h-4 mr-2 text-black" />
                          <span className="text-sm">
                            with {event.instructor}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-black" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2 text-black" />
                          <span className="text-sm">{event.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2 text-black" />
                          <span className="text-sm">
                            {event.spotsLeft} spots left of {event.totalSpots}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <Badge
                            className={`${
                              event.level === "Beginner"
                                ? "bg-green-50 text-green-600 border-green-200"
                                : event.level === "Intermediate"
                                  ? "bg-yellow-50 text-yellow-600 border-yellow-200"
                                  : event.level === "Advanced"
                                    ? "bg-red-50 text-red-600 border-red-200"
                                    : "bg-blue-50 text-blue-600 border-blue-200"
                            }`}
                          >
                            {event.level}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-black">
                            ${event.price}
                          </span>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-black text-white hover:bg-gray-800 font-semibold group-hover:bg-black/90 transition-all duration-300"
                        onClick={() => {
                          const calendarEvent: CalendarEvent = {
                            id: event.id,
                            title: event.title,
                            instructor: event.instructor,
                            date: new Date(
                              event.date.includes("Every")
                                ? Date.now() + 7 * 24 * 60 * 60 * 1000
                                : event.date,
                            ),
                            time: "19:00",
                            duration: event.duration,
                            location: event.location,
                            price: event.price,
                            spotsLeft: event.spotsLeft,
                            totalSpots: event.totalSpots,
                            level: event.level as
                              | "Beginner"
                              | "Intermediate"
                              | "Advanced",
                            category: event.category as
                              | "Workshop"
                              | "Masterclass"
                              | "Live Event"
                              | "Course",
                            description: event.description,
                            rating: event.rating,
                          };
                          handleBookEvent(calendarEvent);
                        }}
                      >
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                date: selectedBookingEvent.date.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
                time: selectedBookingEvent.time,
                duration: selectedBookingEvent.duration,
                location: selectedBookingEvent.location,
                price: selectedBookingEvent.price,
                type: "event",
              }
            : null
        }
      />
    </div>
  );
}
