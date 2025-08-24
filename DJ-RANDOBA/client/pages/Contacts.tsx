import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageCircle,
  Globe,
  Instagram,
  Youtube,
  Video,
  Building,
  Headphones,
  Calendar,
} from "lucide-react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "text-green-400",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@randoba.es", "booking@randoba.com"],
      color: "text-blue-400",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Music Street", "Los Angeles, CA 90210"],
      color: "text-purple-400",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 8:00 PM", "Sat - Sun: 10:00 AM - 6:00 PM"],
      color: "text-orange-400",
    },
  ];

  const departments = [
    {
      title: "General Inquiries",
      email: "info@randoba.com",
      icon: MessageCircle,
      description: "General questions and information",
    },
    {
      title: "Artist Booking",
      email: "booking@randoba.com",
      icon: Calendar,
      description: "Book our artists for your events",
    },
    {
      title: "DJ Courses",
      email: "courses@randoba.com",
      icon: Headphones,
      description: "Information about our DJ courses",
    },
    {
      title: "Technical Support",
      email: "support@randoba.com",
      icon: Building,
      description: "Technical assistance and support",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 mb-6">
              <Phone className="w-3 h-3 mr-1" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              Contact{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                RANDOBA
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to elevate your music journey? Get in touch with our team for bookings, 
              courses, or any questions about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <CardTitle className="text-white text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-white mb-2">
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-300">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-200 mb-2">
                          Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-200 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
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
                            className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        Subject *
                      </label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            subject: e.target.value,
                          }))
                        }
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        Message *
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
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                        placeholder="Tell us more about how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 font-semibold py-3"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Google Map and Departments */}
            <div className="space-y-8">
              {/* Google Maps Embed */}
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                    Find Us Here
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733773791557!2d-118.2473438!3d34.0522265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1706123456789!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-b-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Department Contacts */}
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Department Contacts
                  </CardTitle>
                  <p className="text-gray-300">
                    Reach out to the right department for faster assistance.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          <dept.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">
                            {dept.title}
                          </h4>
                          <p className="text-sm text-gray-400 mb-2">
                            {dept.description}
                          </p>
                          <a
                            href={`mailto:${dept.email}`}
                            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            {dept.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Connect with Us
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Follow us on social media for the latest updates, behind-the-scenes content, 
              and exclusive announcements.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com/randoba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-lg text-pink-300 hover:text-pink-200 hover:bg-pink-500/30 transition-all"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://youtube.com/@randoba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-lg text-red-300 hover:text-red-200 hover:bg-red-500/30 transition-all"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-lg text-pink-300 hover:text-pink-200 hover:bg-pink-500/30 transition-all"
              >
                <Video className="w-5 h-5" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
