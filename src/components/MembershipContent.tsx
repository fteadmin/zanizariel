import React from 'react';
import { Users, TrendingUp, Award, Zap, Star, Crown, CheckCircle } from 'lucide-react';

const MembershipContent: React.FC = () => {
  const tiers = [
    {
      id: 1,
      name: "Creator Membership",
      level: "Tier 1",
      target: "Early-career creators, freelancers, and collaborators looking to grow, learn, and network.",
      tagline: "Growth, skill-building, and initial earning potential",
      icon: <Users className="h-8 w-8" />,
      benefits: [
        "Starter pack of Z&Z digital coins",
        "Discounted access to studio time, equipment, and software",
        "Networking opportunities (events, workshops, masterclasses)",
        "Collaboration opportunities with other members",
        "Performance-based bonuses"
      ],
      featured: false
    },
    {
      id: 2,
      name: "Innovator Membership",
      level: "Tier 2",
      target: "More advanced creators, project leads, and entrepreneurial members looking for maximum return, influence, and resources.",
      tagline: "Leadership, influence, and higher earnings potential",
      icon: <Crown className="h-8 w-8" />,
      benefits: [
        "Everything in Creator tier",
        "Profit share (based on contributions)",
        "Expanded + bonus Z&Z digital coins annually",
        "Priority access to resources (studio time, equipment, tools)",
        "Advanced project management tools",
        "One-on-one mentorship with industry veterans",
        "Executive-level networking (investors, execs, influencers)",
        "Ability to pitch, greenlight, & cast projects (choose teams & collaborators)",
        "Early access to investment opportunities in Z&Z projects",
        "VIP member support",
        "Relocation assistance when joining projects",
        "2-year Incubation Program (Business Development and Wealth Management)"
      ],
      featured: true
    }
  ];

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6A7B92]">
            Membership Tiers
          </h2>
          <p className="text-lg text-[#6A7B92]">
            Choose the membership that fits your creative journey. Whether you're just starting out or ready to lead, 
            we have a tier designed to support your growth and maximize your potential.
          </p>
        </div>

        {/* Membership Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                tier.featured
                  ? 'bg-gradient-to-br from-[#6A7B92] to-[#5A6B82] text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-[#6A7B92] hover:shadow-xl'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#A7D129] text-[#6A7B92] px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    tier.featured ? 'bg-[#A7D129]' : 'bg-[#A7D129]'
                  }`}
                >
                  <div className={tier.featured ? 'text-[#6A7B92]' : 'text-white'}>
                    {tier.icon}
                  </div>
                </div>
                <p className={`text-sm font-semibold mb-2 ${tier.featured ? 'text-[#A7D129]' : 'text-[#6A7B92]'}`}>
                  {tier.level}
                </p>
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${tier.featured ? 'text-white' : 'text-[#6A7B92]'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm italic mb-4 ${tier.featured ? 'text-gray-200' : 'text-[#6A7B92]'}`}>
                  "{tier.tagline}"
                </p>
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <h4 className={`font-semibold mb-2 flex items-center ${tier.featured ? 'text-[#A7D129]' : 'text-[#6A7B92]'}`}>
                  <Award className="h-5 w-5 mr-2" />
                  Who It's For:
                </h4>
                <p className={`text-sm ${tier.featured ? 'text-gray-200' : 'text-[#6A7B92]'}`}>
                  {tier.target}
                </p>
              </div>

              {/* Benefits List */}
              <div className="mb-8">
                <h4 className={`font-semibold mb-4 flex items-center ${tier.featured ? 'text-[#A7D129]' : 'text-[#6A7B92]'}`}>
                  <Zap className="h-5 w-5 mr-2" />
                  Benefits:
                </h4>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle
                        className={`h-5 w-5 mr-3 flex-shrink-0 mt-0.5 ${
                          tier.featured ? 'text-[#A7D129]' : 'text-[#A7D129]'
                        }`}
                      />
                      <span className={`text-sm ${tier.featured ? 'text-gray-100' : 'text-[#6A7B92]'}`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="#contact"
                  className={`inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    tier.featured
                      ? 'bg-[#A7D129] text-[#6A7B92] hover:bg-white hover:text-[#6A7B92]'
                      : 'bg-[#6A7B92] text-white hover:bg-[#A7D129] hover:text-[#6A7B92]'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <p className="text-lg text-[#6A7B92] mb-6">
            Not sure which tier is right for you?
          </p>
          <a
            href="#quiz"
            className="inline-flex items-center px-8 py-3 rounded-full font-semibold bg-[#6A7B92] text-white hover:bg-[#A7D129] hover:text-[#6A7B92] transition-all duration-300"
          >
            Take Our 2-Minute Quiz
            <TrendingUp className="ml-2 h-5 w-5" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default MembershipContent;