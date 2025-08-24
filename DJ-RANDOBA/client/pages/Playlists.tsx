import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ModernEqualizer } from "@/components/ModernEqualizer";
import { 
  PlayCircle, 
  Music, 
  Headphones, 
  Volume2, 
  Heart,
  Share2,
  Download,
  Clock,
  Star,
  TrendingUp,
  Users
} from "lucide-react";

export default function Playlists() {
  useEffect(() => {
    // Load Elfsight script if not already loaded
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const playlistStats = [
    { icon: Music, label: "Total Tracks", value: "2,450+", color: "text-blue-500" },
    { icon: Clock, label: "Hours of Music", value: "180+", color: "text-purple-500" },
    { icon: Users, label: "Active Listeners", value: "12K+", color: "text-green-500" },
    { icon: TrendingUp, label: "Monthly Updates", value: "50+", color: "text-orange-500" }
  ];

  const featuredPlaylists = [
    {
      title: "House Vibes",
      description: "Deep house tracks for late-night sessions",
      duration: "2h 45m",
      tracks: 42,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      genre: "House",
      mood: "Energetic"
    },
    {
      title: "Chill Beats",
      description: "Relaxing electronic beats for studying",
      duration: "1h 30m",
      tracks: 28,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      genre: "Ambient",
      mood: "Relaxed"
    },
    {
      title: "Festival Anthems",
      description: "High-energy tracks from top festivals",
      duration: "3h 15m",
      tracks: 65,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
      genre: "EDM",
      mood: "Festival"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden bg-black -mt-16 pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop"
            alt="Music Playlists Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50"></div>
        </div>

        {/* Disco Ball Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <style>
            {`
              @keyframes music-pulse {
                0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
                50% { transform: scale(1.1) rotate(180deg); opacity: 0.9; }
              }
              @keyframes music-float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
              }
            `}
          </style>
          
          {/* Floating musical elements */}
          <div className="absolute top-20 left-10 w-6 h-6 text-purple-400 opacity-70" style={{ animation: 'music-pulse 3s infinite, music-float 4s infinite' }}>
            <Music className="w-full h-full" />
          </div>
          <div className="absolute top-40 right-20 w-8 h-8 text-blue-400 opacity-60" style={{ animation: 'music-pulse 4s infinite reverse, music-float 5s infinite' }}>
            <Headphones className="w-full h-full" />
          </div>
          <div className="absolute bottom-40 left-20 w-10 h-10 text-pink-400 opacity-50" style={{ animation: 'music-pulse 5s infinite, music-float 6s infinite reverse' }}>
            <Volume2 className="w-full h-full" />
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32 min-h-[70vh] flex items-center z-10">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-white">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30 backdrop-blur-sm">
                  <PlayCircle className="w-3 h-3 mr-1" />
                  Curated Music Collections
                </Badge>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                      Curated
                    </span>
                    <br />
                    <span className="text-white">Playlists</span>
                  </h1>
                  <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
                    Discover expertly crafted playlists spanning every genre and mood. 
                    From underground beats to mainstream hits, find your perfect soundtrack.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700 font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Start Listening
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Save Favorites
                  </Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                  {playlistStats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="relative mb-2">
                        <stat.icon className={`w-6 h-6 ${stat.color} mx-auto group-hover:scale-110 transition-transform duration-300`} />
                        <div className={`absolute inset-0 ${stat.color.replace('text-', 'bg-')}/20 blur-xl rounded-full group-hover:opacity-60 transition-all duration-300`}></div>
                      </div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="scale-125">
                    <ModernEqualizer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Playlists Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Collections
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hand-picked playlists by our expert DJs and music curators for every occasion and mood.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredPlaylists.map((playlist, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={playlist.image}
                    alt={playlist.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                      {playlist.genre}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                      {playlist.mood}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Music className="w-3 h-3" />
                        <span>{playlist.tracks} tracks</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{playlist.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                    {playlist.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {playlist.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Button 
                      size="sm" 
                      className="bg-purple-600 hover:bg-purple-700 text-white flex-1 mr-2"
                    >
                      <PlayCircle className="w-3 h-3 mr-1" />
                      Play Now
                    </Button>
                    <Button size="sm" variant="outline" className="px-3">
                      <Heart className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="px-3">
                      <Share2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Elfsight Audio Player Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Live{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Audio Player
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stream our exclusive mixes and playlists directly from RANDOBA's collection. 
              Enjoy high-quality audio streaming with our integrated player.
            </p>
          </div>

          {/* Elfsight Audio Player Container */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden shadow-2xl">
              <CardHeader className="text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                <CardTitle className="text-2xl text-white flex items-center justify-center space-x-2">
                  <Volume2 className="w-6 h-6 text-purple-400" />
                  <span>RANDOBA Audio Collection</span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  High-quality streaming • Professional DJ mixes • Updated weekly
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8">
                {/* Elfsight Audio Player Widget */}
                <div 
                  className="elfsight-app-13a51074-5f49-4ef3-a0d5-13957756da12" 
                  data-elfsight-app-lazy
                  style={{ minHeight: '400px' }}
                ></div>
                
                {/* Player Controls Info */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-gray-300">
                    <PlayCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">Instant Playback</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-300">
                    <Download className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">Download Available</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-300">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm">Premium Quality</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Player Features */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Music, title: "HD Audio", description: "Crystal clear sound quality" },
              { icon: PlayCircle, title: "Seamless Playback", description: "Uninterrupted streaming" },
              { icon: Heart, title: "Favorites", description: "Save your preferred tracks" },
              { icon: Share2, title: "Social Sharing", description: "Share with friends easily" }
            ].map((feature, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <feature.icon className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
