import React from "react";
import Navigation from "@/components/v4/Navigation";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for small businesses",
      features: [
        "Up to 500 photos/month",
        "Basic editing",
        "24h turnaround",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "$999",
      description: "For growing businesses",
      features: [
        "Up to 2000 photos/month",
        "Advanced editing",
        "12h turnaround",
        "Priority support",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large scale operations",
      features: [
        "Unlimited photos",
        "Custom editing",
        "6h turnaround",
        "Dedicated support",
        "Custom integration",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1c18]">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-mono text-white mb-6">
              Simple <span className="text-[#e5e926]">Pricing /</span>
            </h1>
            <p className="text-white/70 text-lg font-mono mb-12">
              Transparent pricing for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm border ${plan.popular ? "border-[#e5e926]" : "border-[#e5e926]/10"} p-6 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#e5e926] text-[#1a1c18] text-xs font-mono px-3 py-1">
                      POPULAR
                    </span>
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-[#e5e926] font-mono text-xl mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-white font-mono text-4xl mb-4">
                    {plan.price}
                  </div>
                  <p className="text-white/70 font-mono text-sm">
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-white/70 font-mono text-sm"
                    >
                      <Check size={16} className="text-[#e5e926] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 font-mono text-sm ${plan.popular ? "bg-[#e5e926] text-[#1a1c18]" : "border border-[#e5e926] text-[#e5e926]"} hover:bg-[#e5e926] hover:text-[#1a1c18] transition-colors`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
