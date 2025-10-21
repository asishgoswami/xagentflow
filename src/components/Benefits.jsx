import { motion } from "framer-motion";
import { Clock, DollarSign, Heart, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Time Saving",
      description:
        "Automate repetitive tasks and free up your team to focus on strategic initiatives that drive growth.",
      stat: "80%",
      statLabel: "Time Reduction",
      color: "blue",
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description:
        "Significantly reduce operational costs while maintaining high-quality service delivery.",
      stat: "60%",
      statLabel: "Cost Savings",
      color: "green",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description:
        "Provide consistent, 24/7 service that delights customers and builds lasting relationships.",
      stat: "95%",
      statLabel: "Satisfaction Rate",
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description:
        "Scale your operations effortlessly without proportional increases in overhead costs.",
      stat: "10x",
      statLabel: "Growth Potential",
      color: "orange",
    },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        gradient: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
      },
      green: {
        gradient: "from-green-500 to-emerald-500",
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600 dark:text-green-400",
      },
      purple: {
        gradient: "from-purple-500 to-pink-500",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        text: "text-purple-600 dark:text-purple-400",
      },
      orange: {
        gradient: "from-orange-500 to-red-500",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        text: "text-orange-600 dark:text-orange-400",
      },
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
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
              Why Choose AutoFlow?
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Experience measurable improvements across all aspects of your
            business operations with our proven automation solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => {
            const colorClasses = getColorClasses(benefit.color);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="text-center h-full">
                  {/* Icon with animated background */}
                  <motion.div
                    className={`inline-flex p-6 rounded-3xl ${colorClasses.bg} mb-6 group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${colorClasses.gradient}`}
                    >
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Stat */}
                  <motion.div
                    className={`text-4xl font-bold mb-2 ${colorClasses.text}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {benefit.stat}
                  </motion.div>

                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    {benefit.statLabel}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Benefits Grid */}
      </div>
    </section>
  );
};

export default Benefits;
