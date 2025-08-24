import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  CreditCard,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  Mail,
  Phone,
  Shield,
  CheckCircle,
  Loader2,
  Music,
  Users,
  DollarSign,
  Sparkles,
  Star,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Building,
  Globe,
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { cn } from "../lib/utils";

interface Artist {
  id: number;
  name: string;
  realName: string;
  genre: string;
  followers: string;
  image: string;
  description: string;
  achievements: string[];
  social: {
    instagram: string;
    tiktok: string;
    youtube: string;
  };
}

interface ArtistBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  artist: Artist | null;
  preSelectedDate?: Date | null;
}

export function ArtistBookingModal({ isOpen, onClose, artist, preSelectedDate }: ArtistBookingModalProps) {
  const [step, setStep] = useState<"details" | "event" | "payment" | "success">("details");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  // Set the date when modal opens with a pre-selected date
  React.useEffect(() => {
    if (isOpen && preSelectedDate) {
      setSelectedDate(preSelectedDate);
    }
  }, [isOpen, preSelectedDate]);

  const [bookingDetails, setBookingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    eventType: "",
    venue: "",
    city: "",
    country: "",
    expectedAttendees: "",
    budget: "",
    eventDescription: "",
    specialRequests: "",
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    billingAddress: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const eventTypes = [
    "Private Event",
    "Corporate Event", 
    "Wedding",
    "Club Night",
    "Festival",
    "Concert",
    "Product Launch",
    "Birthday Party",
    "Other"
  ];

  const budgetRanges = [
    "$1,000 - $5,000",
    "$5,000 - $10,000", 
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+"
  ];

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDetails.firstName || !bookingDetails.lastName || !bookingDetails.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    setStep("event");
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDetails.eventType || !bookingDetails.venue || !selectedDate) {
      toast.error("Please fill in all event details");
      return;
    }
    setStep("payment");
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 3000));
      
      setStep("success");
      toast.success(`Successfully booked ${artist?.name} for your event!`);

      setTimeout(() => {
        handleClose();
      }, 5000);
    } catch (error) {
      toast.error("Booking failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    setStep("details");
    setSelectedDate(undefined);
    setBookingDetails({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      eventType: "",
      venue: "",
      city: "",
      country: "",
      expectedAttendees: "",
      budget: "",
      eventDescription: "",
      specialRequests: "",
    });
    setPaymentDetails({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      nameOnCard: "",
      billingAddress: "",
      city: "",
      zipCode: "",
      country: "",
    });
    onClose();
  };

  if (!artist) return null;

  const estimatedPrice = budgetRanges.indexOf(bookingDetails.budget) >= 0 
    ? budgetRanges.indexOf(bookingDetails.budget) * 15000 + 5000 
    : 25000;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border-white/10 max-w-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Step 1: Contact Details */}
        {step === "details" && (
          <>
            <DialogHeader className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                />
                <div>
                  <DialogTitle className="text-2xl text-white">
                    Book {artist.name}
                  </DialogTitle>
                  <DialogDescription className="text-cyan-400">
                    {artist.genre} • {artist.followers} followers
                  </DialogDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30">
                  <Users className="w-3 h-3 mr-1" />
                  Step 1 of 3
                </Badge>
                <span className="text-gray-300 text-sm">Contact Information</span>
              </div>
            </DialogHeader>

            <form onSubmit={handleDetailsSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">First Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="firstName"
                      value={bookingDetails.firstName}
                      onChange={(e) => setBookingDetails({...bookingDetails, firstName: e.target.value})}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="lastName"
                      value={bookingDetails.lastName}
                      onChange={(e) => setBookingDetails({...bookingDetails, lastName: e.target.value})}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={bookingDetails.email}
                      onChange={(e) => setBookingDetails({...bookingDetails, email: e.target.value})}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingDetails.phone}
                      onChange={(e) => setBookingDetails({...bookingDetails, phone: e.target.value})}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Company/Organization</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="company"
                      value={bookingDetails.company}
                      onChange={(e) => setBookingDetails({...bookingDetails, company: e.target.value})}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-white">Website</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="website"
                      type="url"
                      value={bookingDetails.website}
                      onChange={(e) => setBookingDetails({...bookingDetails, website: e.target.value})}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </>
        )}

        {/* Step 2: Event Details */}
        {step === "event" && (
          <>
            <DialogHeader className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                />
                <div>
                  <DialogTitle className="text-2xl text-white">
                    Event Details
                  </DialogTitle>
                  <DialogDescription className="text-cyan-400">
                    Tell us about your event for {artist.name}
                  </DialogDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                  <CalendarDays className="w-3 h-3 mr-1" />
                  Step 2 of 3
                </Badge>
                <span className="text-gray-300 text-sm">Event Information</span>
              </div>
            </DialogHeader>

            <form onSubmit={handleEventSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">Event Type *</Label>
                  <Select
                    value={bookingDetails.eventType}
                    onValueChange={(value) => setBookingDetails({...bookingDetails, eventType: value})}
                  >
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/20">
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type} className="text-white hover:bg-white/10">
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Event Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white/5 border-white/20 text-white",
                          !selectedDate && "text-gray-400"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-gray-900 border-white/20">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        className="text-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="venue" className="text-white">Venue Name *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="venue"
                      value={bookingDetails.venue}
                      onChange={(e) => setBookingDetails({...bookingDetails, venue: e.target.value})}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="The Grand Ballroom"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-white">City</Label>
                  <Input
                    id="city"
                    value={bookingDetails.city}
                    onChange={(e) => setBookingDetails({...bookingDetails, city: e.target.value})}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                    placeholder="New York"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expectedAttendees" className="text-white">Expected Attendees</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="expectedAttendees"
                      value={bookingDetails.expectedAttendees}
                      onChange={(e) => setBookingDetails({...bookingDetails, expectedAttendees: e.target.value})}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Budget Range</Label>
                  <Select
                    value={bookingDetails.budget}
                    onValueChange={(value) => setBookingDetails({...bookingDetails, budget: value})}
                  >
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/20">
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range} className="text-white hover:bg-white/10">
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventDescription" className="text-white">Event Description</Label>
                <Textarea
                  id="eventDescription"
                  value={bookingDetails.eventDescription}
                  onChange={(e) => setBookingDetails({...bookingDetails, eventDescription: e.target.value})}
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                  placeholder="Tell us about your event, theme, special requirements..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialRequests" className="text-white">Special Requests</Label>
                <Textarea
                  id="specialRequests"
                  value={bookingDetails.specialRequests}
                  onChange={(e) => setBookingDetails({...bookingDetails, specialRequests: e.target.value})}
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                  placeholder="Any specific songs, technical requirements, or other requests..."
                  rows={3}
                />
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep("details")}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700"
                >
                  Continue to Payment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </>
        )}

        {/* Step 3: Payment */}
        {step === "payment" && (
          <>
            <DialogHeader className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                />
                <div>
                  <DialogTitle className="text-2xl text-white">
                    Secure Payment
                  </DialogTitle>
                  <DialogDescription className="text-cyan-400">
                    Complete your booking for {artist.name}
                  </DialogDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                  <DollarSign className="w-3 h-3 mr-1" />
                  Step 3 of 3
                </Badge>
                <span className="text-gray-300 text-sm">Payment Information</span>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {/* Booking Summary */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Booking Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Artist:</span>
                    <span className="text-white font-medium">{artist.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Event Type:</span>
                    <span className="text-white">{bookingDetails.eventType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Date:</span>
                    <span className="text-white">
                      {selectedDate ? format(selectedDate, "PPP") : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Venue:</span>
                    <span className="text-white">{bookingDetails.venue}</span>
                  </div>
                  <Separator className="bg-white/20" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-300">Booking Fee:</span>
                    <span className="text-cyan-400">${estimatedPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    * Final price will be confirmed based on event details and negotiations
                  </p>
                </div>
              </div>

              {/* Payment Form */}
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nameOnCard" className="text-white">Name on Card *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="nameOnCard"
                      value={paymentDetails.nameOnCard}
                      onChange={(e) => setPaymentDetails({...paymentDetails, nameOnCard: e.target.value})}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-white">Card Number *</Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="cardNumber"
                      value={paymentDetails.cardNumber}
                      onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate" className="text-white">Expiry Date *</Label>
                    <Input
                      id="expiryDate"
                      value={paymentDetails.expiryDate}
                      onChange={(e) => setPaymentDetails({...paymentDetails, expiryDate: e.target.value})}
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv" className="text-white">CVV *</Label>
                    <Input
                      id="cvv"
                      value={paymentDetails.cvv}
                      onChange={(e) => setPaymentDetails({...paymentDetails, cvv: e.target.value})}
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-300 bg-white/5 p-3 rounded-lg">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Your payment is secured with 256-bit SSL encryption</span>
                </div>

                <div className="flex justify-between pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep("event")}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <DollarSign className="w-4 h-4 mr-2" />
                        Complete Booking
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}

        {/* Step 4: Success */}
        {step === "success" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-green-400 text-2xl">
                Booking Request Submitted!
              </DialogTitle>
            </DialogHeader>

            <div className="text-center space-y-6 py-8">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  {artist.name} Booking Request
                </h3>
                <p className="text-gray-300">
                  Your booking request has been submitted successfully!
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-left space-y-4">
                <h4 className="font-semibold text-cyan-400 text-center">What Happens Next?</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start space-x-2">
                    <Star className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Our team will review your booking request within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>We'll send you a detailed quote and contract via email</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Once confirmed, you'll receive event coordination details</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Your event manager will contact you to finalize arrangements</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-400">
                  Confirmation sent to: {bookingDetails.email}
                </p>
                <p className="text-xs text-gray-500">
                  This window will close automatically...
                </p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
