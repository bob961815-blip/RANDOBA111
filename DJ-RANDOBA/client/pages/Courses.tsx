import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModernEqualizer } from "@/components/ModernEqualizer";
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
import {
  Users,
  ArrowRight,
  GraduationCap,
  Award,
  PlayCircle,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  whoItsFor: string;
  whatYoullLearn: string[];
  outcome: string;
  price: number;
  currency: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "Mixing" | "Production" | "Business" | "Equipment" | "Performance";
  image: string;
}

export default function Courses() {
  const { user } = useAuth();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      id: "1",
      title: "DJ Mixing Fundamentals",
      whoItsFor: "Complete beginners who want to start their DJ journey and learn the essential skills",
      whatYoullLearn: [
        "Beatmatching and tempo control",
        "EQ techniques and frequency mixing",
        "Seamless transitions between tracks",
        "Reading the crowd and song selection"
      ],
      outcome: "Master foundational DJ skills and perform confident 30-minute sets at parties and small venues",
      price: 299,
      currency: "USD",
      level: "Beginner",
      category: "Mixing",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    },
    {
      id: "2",
      title: "Advanced Turntablism Mastery",
      whoItsFor: "Experienced DJs ready to master advanced scratch techniques and turntable skills",
      whatYoullLearn: [
        "Professional scratch techniques",
        "Beat juggling and live remixing",
        "Turntable tricks and showmanship",
        "Competition-level performance skills"
      ],
      outcome: "Develop advanced turntablist skills for professional performances and DJ battles",
      price: 599,
      currency: "USD",
      level: "Advanced",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    },
    {
      id: "3",
      title: "Electronic Music Production",
      whoItsFor: "DJs and musicians who want to create original electronic tracks and remixes",
      whatYoullLearn: [
        "Digital audio workstation mastery",
        "Sound synthesis and design",
        "Track arrangement and structure",
        "Professional mixing and mastering"
      ],
      outcome: "Produce and release professional-quality electronic tracks ready for clubs and streaming",
      price: 449,
      currency: "USD",
      level: "Intermediate",
      category: "Production",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
    }
  ];


  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-50 text-green-600 border-green-200";
      case "Intermediate":
        return "bg-yellow-50 text-yellow-600 border-yellow-200";
      case "Advanced":
        return "bg-red-50 text-red-600 border-red-200";
      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };


  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] overflow-hidden bg-black -mt-16 pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F04a79369a30d4d69bd5ac30aac5e71b7%2Fae1b6f21497a432c9114d09caf330e17?format=webp&width=800"
            alt="DJ Course Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Modern Equalizer Background */}
        <div className="absolute inset-0 flex items-end justify-center opacity-30 pb-32">
          <div className="scale-150">
            <ModernEqualizer />
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32 min-h-[60vh] flex items-center z-10">
          <div className="text-center w-full">
            <div className="space-y-8 text-white">
              <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20 mx-auto backdrop-blur-sm">
                <GraduationCap className="w-3 h-3 mr-1" />
                Professional DJ Education
              </Badge>

              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg max-w-4xl mx-auto">
                  <span className="block text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 tracking-wide">
                    Custom solutions at any scale
                  </span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                    one plan, zero stress
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60"></div>
                  </span>
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                  Learn from industry professionals with our comprehensive courses.
                  From beginner basics to advanced techniques, we have everything you need to succeed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 font-semibold shadow-xl backdrop-blur-sm"
                >
                  <PlayCircle className="w-5 h-5 mr-2 text-black" />
                  Browse Courses
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white/10 backdrop-blur-sm shadow-lg"
                >
                  <Users className="w-5 h-5 mr-2 text-black" />
                  Meet Instructors
                </Button>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Courses Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Learning Paths for Every{" "}
            <span className="underline decoration-4 underline-offset-8">
              Level & Goal
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Select from our range of specialized courses designed for every skill level
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course) => (
            <Card
              key={course.id}
              className="bg-white border-gray-200 hover:border-black transition-all duration-300 group shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="text-2xl font-bold text-white bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    ${course.price}
                  </div>
                </div>
              </div>

              <CardHeader className="space-y-3">
                <CardTitle className="text-xl text-black group-hover:text-gray-700 transition-colors">
                  {course.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-1 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      Who it's for
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {course.whoItsFor}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-black mb-1 flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2 text-green-600" />
                      What you'll learn
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {course.whatYoullLearn.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-black mb-1 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-600" />
                      Outcome
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {course.outcome}
                    </p>
                  </div>
                </div>

                <Button
                  className="w-full bg-black text-white hover:bg-gray-800 font-semibold mt-6"
                  onClick={() => {
                    setSelectedCourse(course);
                    setBookingModalOpen(true);
                  }}
                >
                  Enroll Now - ${course.price}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Start Here / Level Up Section */}
        <div className="mt-20">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[60vh]">
            {/* Start Here - Beginners */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-12 lg:p-16 flex items-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-16 h-16 bg-emerald-400 rounded-full"></div>
                <div className="absolute top-1/2 right-10 w-12 h-12 bg-green-300 rounded-full"></div>
              </div>

              <div className="relative z-10 w-full">
                <div className="mb-8">
                  <div className="inline-flex items-center bg-green-500/20 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Users className="w-4 h-4 mr-2" />
                    For Beginners
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Start Here
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    You love music and big nights, but the stage still feels far. Gear, no contacts, and self-doubt can make you think "Maybe it's not for me?" What you really want is self-expression and a real place in the scene, not just button skills.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "With caring mentors and a safe space, you'll use technique as a tool: feel the music, read the room, guide its energy.",
                    "We help you beat imposter syndrome, build confidence, and find your voice.",
                    "With real support, a real community, and a first stage to start your artist journey.",
                    "You'll leave with tight mixes, release-ready music, and real stage time. Join START and take a real step toward your dream."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Level Up - Experienced */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-12 lg:p-16 flex items-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-20 h-20 bg-purple-500 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-16 h-16 bg-indigo-400 rounded-full"></div>
                <div className="absolute top-1/2 left-10 w-12 h-12 bg-purple-300 rounded-full"></div>
              </div>

              <div className="relative z-10 w-full">
                <div className="mb-8">
                  <div className="inline-flex items-center bg-purple-500/20 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Award className="w-4 h-4 mr-2" />
                    For Experienced DJs
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Level Up
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Ready to take your skills to the next level? Master advanced techniques,
                    learn production, and become a professional DJ.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Advanced mixing and turntablism",
                    "Music production and remixing",
                    "Professional performance skills",
                    "Build your DJ career and brand"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Advance Skills
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold"
                  >
                    <Award className="w-5 h-5 mr-2" />
                    View Advanced Courses
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          item={
            selectedCourse
              ? {
                  id: selectedCourse.id,
                  title: selectedCourse.title,
                  instructor: "Professional Instructor",
                  duration: "Comprehensive Course",
                  location: "Online Learning Platform",
                  price: selectedCourse.price,
                  type: "course",
                }
              : null
          }
        />
        </div>
      </section>
    </div>
  );
}
