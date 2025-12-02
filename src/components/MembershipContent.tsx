import React from 'react';
import { Users, TrendingUp, Award, Zap, Star, Crown, CheckCircle } from 'lucide-react';

const MembershipContent: React.FC = () => {
  const tiers = [
    {
      id: 1,
      name: "Creator Membership",
      level: "Tier 1",
      price: "$500",
      target: "Early-career creators, freelancers, and collaborators looking to grow, learn, and network.",
      tagline: "Growth, skill-building, and initial earning potential",
      icon: <Users className="h-8 w-8" />,
      benefits: [
        "Grow social media outreach to 5,000 followers on TikTok",
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
      price: "$5,000",
      target: "More advanced creators, project leads, and entrepreneurial members looking for maximum return, influence, and resources.",
      tagline: "Leadership, influence, and higher earnings potential",
      icon: <Crown className="h-8 w-8" />,
      benefits: [
        "Everything in Creator tier",
        "Profit share (based on contributions)",
        "Grow social media outreach to 2,500 followers (Instagram & TikTok)",
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
    },
    {
      id: 3,
      name: "Visionary Partners",
      level: "Tier 3",
      price: "$25,000",
      target: "Brand partnerships for those who have their own media company. Fully developed media companies ready to scale and partner on projects.",
      tagline: "Strategic partnerships, capital access, and large-scale opportunities",
      icon: <Star className="h-8 w-8" />,
      benefits: [
        "Everything in Innovator tier",
        "Access to investors for projects — FTE commits to fund one project per year",
        "Priority brand partnership matchmaking",
        "Dedicated partnership manager",
        "Co-marketing and distribution support"
      ],
      featured: false
    }
  ];

  return (
    <section id="membership" className="py-20" style={{ backgroundColor: '#6A7B92' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Membership Tiers
          </h2>
          <p className="text-lg" style={{ color: '#FFFFFF' }}>
            Choose the membership that fits your creative journey. Whether you're just starting out or ready to lead, 
            we have a tier designed to support your growth and maximize your potential.
          </p>
        </div>

        {/* Membership Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                tier.featured
                  ? 'shadow-2xl scale-105'
                  : 'border-2 hover:shadow-xl'
              }`}
              style={{
                backgroundColor: tier.featured ? '#5A6B82' : '#FFFFFF',
                borderColor: tier.featured ? 'transparent' : '#FFFFFF'
              }}
            >
              {tier.price && (
                <div className="absolute top-4 right-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-bold"
                    style={{
                      backgroundColor: tier.featured ? '#A7D129' : '#6A7B92',
                      color: tier.featured ? '#6A7B92' : '#FFFFFF'
                    }}
                  >
                    {tier.price}
                  </span>
                </div>
              )}
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
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: '#A7D129' }}
                >
                  <div style={{ color: tier.featured ? '#6A7B92' : '#FFFFFF' }}>
                    {tier.icon}
                  </div>
                </div>
                <p className="text-sm font-semibold mb-2" style={{ color: '#A7D129' }}>
                  {tier.level}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: tier.featured ? '#FFFFFF' : '#6A7B92' }}>
                  {tier.name}
                </h3>
                {/* Price moved to top-right badge */}
                <p className="text-sm italic mb-4" style={{ color: tier.featured ? '#E5E7EB' : '#6A7B92' }}>
                  "{tier.tagline}"
                </p>
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2 flex items-center" style={{ color: '#A7D129' }}>
                  <Award className="h-5 w-5 mr-2" />
                  Who It's For:
                </h4>
                <p className="text-sm" style={{ color: tier.featured ? '#E5E7EB' : '#6A7B92' }}>
                  {tier.target}
                </p>
              </div>

              {/* Benefits List */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 flex items-center" style={{ color: '#A7D129' }}>
                  <Zap className="h-5 w-5 mr-2" />
                  Benefits:
                </h4>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle
                        className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5"
                        style={{ color: '#A7D129' }}
                      />
                      <span className="text-sm" style={{ color: tier.featured ? '#E5E7EB' : '#6A7B92' }}>
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
                  className="inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: tier.featured ? '#A7D129' : '#6A7B92',
                    color: tier.featured ? '#6A7B92' : '#FFFFFF'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#6A7B92';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = tier.featured ? '#A7D129' : '#6A7B92';
                    e.currentTarget.style.color = tier.featured ? '#6A7B92' : '#FFFFFF';
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <p className="text-lg mb-6" style={{ color: '#FFFFFF' }}>
            Not sure which tier is right for you?
          </p>
          <a
            href="#quiz"
            className="inline-flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-300"
            style={{ backgroundColor: '#FFFFFF', color: '#6A7B92' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#A7D129';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#6A7B92';
            }}
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