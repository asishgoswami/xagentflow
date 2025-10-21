import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$300-$500",
      period: "/month",
      description:
        "Perfect for small businesses getting started with automation + call handling",
      features: [
        "Up to 500 automated calls/month",
        "Basic workflow automation",
        "Email support",
        "Standard integrations",
        "1 user account",
      ],
      buttonText: "Get Started",
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Growth",
      price: "$800-$1,500",
      period: "/month",
      description: "For growing businesses that want automation + call handling scale",
      features: [
        "Up to 500-2,000 automated calls/month",
        "Advanced workflow automation",
        "Advanced analytics & reporting",
        "Multi-channel integrations (CRM, Slack,Whatsapp,Sheets)"
      ],
      buttonText: "Get Started",
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Pro",
      price: "$2,500-$5,000",
      period: "/month",
      description: "Tailored solutions for large organizations",
      features: [
        "2,000-5,000 automated calls/month",
        "Unlimited automation workflows",
        "Advanced analytics & reporting",
        "Custom integrations"
      ],
      buttonText: "Get Started",
      popular: false,
      gradient: "from-green-500 to-emerald-500",
    },
     {
      name: "Enterprise Custom",
      price: "Starting at $2,500",
      period: "/month",
      description: "Tailored solutions for large organizations",
      features: [
      "For businesses needing unique workflow automations",
      "Price scales with workflow complexity and integration requirements",
      "Full design and implementation of custom workflows",
      "Multi-system/integration support (CRM, email, chat, etc.)",
      "Advanced reporting, notifications, and logic",
      ],
      buttonText: "Get Started",
      popular: false,
      gradient: "from-green-500 to-emerald-500",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include
            our core automation features with no hidden fees or long-term
            contracts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: plan.popular ? 1.02 : 1.05,
                transition: { duration: 0.3 },
              }}
              className={`relative group ${plan.popular ? "md:-mt-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div
                className={`bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 ${
                  plan.popular
                    ? "border-purple-500 dark:border-purple-400"
                    : "border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"
                } relative overflow-hidden`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-full transform translate-x-16 -translate-y-16`}
                ></div>

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-200">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span
                      className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-500 dark:text-slate-400 ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      className="flex items-start"
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mr-3 mt-0.5`}
                      >
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-400">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 hover:from-blue-50 hover:to-blue-100 dark:hover:from-slate-700 dark:hover:to-slate-600 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information */}
        {/* FAQ Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default Pricing;
