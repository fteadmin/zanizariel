import React from 'react';
import { Mic, Users, Heart, Dumbbell, Briefcase, Wine } from 'lucide-react';

const Gigs: React.FC = () => {
  const gigs = [
    {
      id: 1,
      title: "Two Female Hosts for Para Ti",
      icon: <Users className="h-8 w-8" />,
      description: "At the heart of Para Ti are two engaging female hosts who bring warmth, insight, and authenticity to every conversation. Together, they guide listeners through stories of women's journeys — from personal growth to professional achievement — creating a space that is equal parts inspiring and relatable. The ideal hosts share a genuine curiosity about people and a passion for uplifting women's voices. They are articulate, empathetic, and confident communicators who can balance lighthearted banter with meaningful dialogue. Their chemistry should feel natural — the kind that makes listeners feel like they're part of the conversation.",
      qualities: [
        "Strong communicators with a natural storytelling ability",
        "Relatable and authentic personalities",
        "Curious, open-minded, and empathetic listeners",
        "Comfortable discussing a wide range of topics — from ambition and creativity to resilience and identity",
        "A shared commitment to celebrating women's experiences and achievements"
      ],
      energy: "They bring a balance of energy and depth — one may lead with bold ideas and curiosity, while the other grounds the discussion with empathy and reflection. Their synergy creates a welcoming, inspiring atmosphere that celebrates the power of women's voices and the beauty of diverse journeys.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "One Male Host for Gentlemen's Corner",
      icon: <Mic className="h-8 w-8" />,
      description: "At the center of Gentlemen's Corner is a single, authentic male host who brings warmth, insight, and emotional depth to every conversation. He is the guiding voice of the show — strong yet vulnerable, confident yet curious — creating a space where men can open up, connect, and be seen. This host represents a new kind of masculinity: one that values growth, reflection, and authenticity. Through candid conversations, he explores the full spectrum of the male experience — from success and ambition to fear, identity, and emotional well-being.",
      qualities: [
        "Genuine and emotionally intelligent communicator",
        "Comfortable discussing vulnerability, growth, and personal challenges",
        "Relatable presence with natural storytelling ability",
        "Able to balance humor and depth with ease",
        "Inspires trust, openness, and connection"
      ],
      energy: "He's the kind of host who makes listeners feel safe to be honest, inspired to grow, and proud to be themselves. His voice is steady and thoughtful — the anchor for a show that celebrates achievement without ego, and emotion without shame. Each episode feels like a real conversation between men who are learning, leading, and evolving — together.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Three Female Hosts for S.I.S. (She Is Sacred)",
      icon: <Heart className="h-8 w-8" />,
      description: "At the heart of S.I.S. (She Is Sacred) are three vibrant female hosts who embody the essence of modern feminine energy — confident, intuitive, and deeply connected. Set against the backdrop of a lush brunch setting, their conversations flow as naturally as laughter over mimosas. Together, they celebrate womanhood in all its forms — from ambition and creativity to softness, self-care, and sisterhood. This trio brings balance and diversity to the table. Each woman carries her own voice and perspective, yet together they create harmony — a reflection of the collective power of women coming together in honesty, joy, and growth.",
      qualities: [
        "Radiate authenticity, warmth, and confidence",
        "Naturally engaging conversationalists with chemistry and presence",
        "Comfortable exploring topics like identity, balance, sensuality, ambition, and community",
        "Embody both the strength and softness of feminine energy"
      ],
      energy: "Together, they create an atmosphere that's lush, elegant, and soulful — a celebration of womanhood that feels like brunch with your closest friends and mentors. The tone is intimate but elevated; laughter meets reflection, and every episode feels like nourishment for the spirit.",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Health & Wellness Influencer",
      icon: <Dumbbell className="h-8 w-8" />,
      description: "We're seeking passionate health and wellness influencers to join our community and inspire others on their journey to better living.",
      image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5, 
      title: "Promotional Model",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Looking for charismatic promotional models to represent our brand at events and campaigns.",
      image: "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Hosts, Bartenders, & Servers for Events",
      icon: <Wine className="h-8 w-8" />,
      description: "Join our team of professional hosts, bartenders, and servers to create unforgettable experiences at our exclusive events.",
      image: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="gigs" className="py-20" style={{ backgroundColor: '#6A7B92' }}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Gigs</h2>
          <p className="text-lg" style={{ color: '#FFFFFF' }}>
            Join our creative community and be part of groundbreaking projects that celebrate authentic voices and meaningful conversations.
          </p>
        </div>

        <div className="space-y-12">
          {gigs.map((gig) => (
            <div 
              key={gig.id}
              className="rounded-xl overflow-hidden border"
              style={{ backgroundColor: '#5A6B82', borderColor: '#A7D129' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="h-64 lg:h-auto">
                  <img 
                    src={gig.image} 
                    alt={gig.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#A7D129] rounded-full flex items-center justify-center mr-4">
                      <div style={{ color: '#FFFFFF' }}>
                        {gig.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>{gig.title}</h3>
                  </div>

                  <p className="mb-6" style={{ color: '#FFFFFF' }}>
                    {gig.description}
                  </p>

                  {gig.qualities && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3" style={{ color: '#A7D129' }}>Host Qualities:</h4>
                      <ul className="space-y-2">
                        {gig.qualities.map((quality, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2" style={{ color: '#A7D129' }}>•</span>
                            <span style={{ color: '#FFFFFF' }}>{quality}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {gig.energy && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2" style={{ color: '#A7D129' }}>
                        {gig.id === 1 ? 'Together:' : 'The Energy:'}
                      </h4>
                      <p style={{ color: '#FFFFFF' }}>
                        {gig.energy}
                      </p>
                    </div>
                  )}

                  <div className="mt-6">
                    <a
                      href={`mailto:info@zaniyazariel.com?subject=Application for ${gig.title}&body=Hi, I'm interested in applying for the ${gig.title} position.`}
                      className="inline-block px-6 py-3 rounded-full font-semibold transition-colors"
                      style={{
                        backgroundColor: '#FFFFFF',
                        color: '#6A7B92'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = '#A7D129';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.color = '#6A7B92';
                      }}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gigs;