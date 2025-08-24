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
import { Separator } from "./ui/separator";
import { useAuth } from "../contexts/AuthContext";
import {
  CreditCard,
  Calendar,
  Clock,
  MapPin,
  User,
  Mail,
  Phone,
  Shield,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

interface BookingItem {
  id: string;
  title: string;
  instructor?: string;
  date?: string;
  time?: string;
  duration?: string;
  location?: string;
  price: number;
  type: "course" | "event";
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: BookingItem | null;
}

export function BookingModal({ isOpen, onClose, item }: BookingModalProps) {
  const { user } = useAuth();
  const [step, setStep] = useState<"details" | "payment" | "success">(
    "details",
  );
  const [isProcessing, setIsProcessing] = useState(false);

  const [bookingDetails, setBookingDetails] = useState({
    email: user?.email || "",
    phone: "",
    specialRequests: "",
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: user?.name || "",
    billingAddress: "",
    city: "",
    zipCode: "",
  });

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDetails.email) {
      toast.error("Email is required");
      return;
    }
    setStep("payment");
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock payment success
      setStep("success");
      toast.success(`Successfully booked: ${item?.title}!`);

      // Reset form after success
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    setStep("details");
    setBookingDetails({
      email: user?.email || "",
      phone: "",
      specialRequests: "",
    });
    setPaymentDetails({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      nameOnCard: user?.name || "",
      billingAddress: "",
      city: "",
      zipCode: "",
    });
    onClose();
  };

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-graphite-800 border-graphite-700 max-w-lg max-h-[90vh] overflow-y-auto">
        {step === "details" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-gold-400">
                Booking Details
              </DialogTitle>
              <DialogDescription>
                Complete your booking for {item.title}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Item Summary */}
              <div className="bg-graphite-700/50 p-4 rounded-lg space-y-2">
                <h3 className="font-semibold text-gold-400">{item.title}</h3>
                {item.instructor && (
                  <p className="text-sm text-muted-foreground">
                    with {item.instructor}
                  </p>
                )}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {item.date && (
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-gold-400" />
                      {item.date}
                    </div>
                  )}
                  {item.time && (
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-gold-400" />
                      {item.time}
                    </div>
                  )}
                  {item.location && (
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-gold-400" />
                      {item.location}
                    </div>
                  )}
                  <div className="flex items-center text-gold-400 font-semibold">
                    <span>${item.price}</span>
                  </div>
                </div>
              </div>

              {/* Contact Details Form */}
              <form onSubmit={handleDetailsSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={bookingDetails.email}
                      onChange={(e) =>
                        setBookingDetails({
                          ...bookingDetails,
                          email: e.target.value,
                        })
                      }
                      className="pl-10 bg-graphite-700 border-graphite-600 focus:border-gold-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingDetails.phone}
                      onChange={(e) =>
                        setBookingDetails({
                          ...bookingDetails,
                          phone: e.target.value,
                        })
                      }
                      className="pl-10 bg-graphite-700 border-graphite-600 focus:border-gold-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="special-requests">
                    Special Requests (Optional)
                  </Label>
                  <textarea
                    id="special-requests"
                    value={bookingDetails.specialRequests}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        specialRequests: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-md bg-graphite-700 border border-graphite-600 focus:border-gold-500 focus:outline-none resize-none text-foreground"
                    placeholder="Any special requirements or questions..."
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-graphite-900 font-semibold"
                >
                  Continue to Payment
                </Button>
              </form>
            </div>
          </>
        )}

        {step === "payment" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-gold-400">
                Payment Information
              </DialogTitle>
              <DialogDescription>
                Secure payment for {item.title}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-graphite-700/50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span>{item.title}</span>
                  <span className="text-gold-400 font-semibold">
                    ${item.price}
                  </span>
                </div>
                <Separator className="my-2 bg-graphite-600" />
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-gold-400">${item.price}</span>
                </div>
              </div>

              {/* Payment Form */}
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="card-number"
                      type="text"
                      value={paymentDetails.cardNumber}
                      onChange={(e) =>
                        setPaymentDetails({
                          ...paymentDetails,
                          cardNumber: e.target.value,
                        })
                      }
                      className="pl-10 bg-graphite-700 border-graphite-600 focus:border-gold-500"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      type="text"
                      value={paymentDetails.expiryDate}
                      onChange={(e) =>
                        setPaymentDetails({
                          ...paymentDetails,
                          expiryDate: e.target.value,
                        })
                      }
                      className="bg-graphite-700 border-graphite-600 focus:border-gold-500"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      type="text"
                      value={paymentDetails.cvv}
                      onChange={(e) =>
                        setPaymentDetails({
                          ...paymentDetails,
                          cvv: e.target.value,
                        })
                      }
                      className="bg-graphite-700 border-graphite-600 focus:border-gold-500"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name-on-card">Name on Card</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name-on-card"
                      type="text"
                      value={paymentDetails.nameOnCard}
                      onChange={(e) =>
                        setPaymentDetails({
                          ...paymentDetails,
                          nameOnCard: e.target.value,
                        })
                      }
                      className="pl-10 bg-graphite-700 border-graphite-600 focus:border-gold-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>
                    Your payment is secured with 256-bit SSL encryption
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep("details")}
                    className="border-gold-600 text-gold-400 hover:bg-gold-400/10"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-graphite-900 font-semibold"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      `Pay $${item.price}`
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}

        {step === "success" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-green-400 text-center">
                Booking Confirmed!
              </DialogTitle>
            </DialogHeader>

            <div className="text-center space-y-6 py-8">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gold-400">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  Confirmation details have been sent to {bookingDetails.email}
                </p>
              </div>

              <div className="bg-graphite-700/50 p-4 rounded-lg text-left space-y-2">
                <h4 className="font-semibold text-gold-400">What's Next?</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check your email for detailed instructions</li>
                  <li>• Add the event to your calendar</li>
                  <li>• Join our community Discord for updates</li>
                  <li>�� Contact us if you have any questions</li>
                </ul>
              </div>

              <p className="text-xs text-muted-foreground">
                This window will close automatically in a few seconds...
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
