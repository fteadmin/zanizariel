import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#6A7B92' }}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Get in Touch</h2>
          <p className="text-lg" style={{ color: '#FFFFFF' }}>
            Ready to collaborate or have questions? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-xl p-8 border" style={{ backgroundColor: '#5A6B82', borderColor: '#A7D129' }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="w-16 h-16 bg-[#A7D129] rounded-full flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>Message Sent!</h3>
                <p className="text-center max-w-md" style={{ color: '#FFFFFF' }}>
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: '#FFFFFF' }}>Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#A7D129] focus:border-transparent"
                      style={{ 
                        backgroundColor: '#4A5568',
                        borderColor: '#FFFFFF',
                        color: '#FFFFFF'
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: '#FFFFFF' }}>Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#A7D129] focus:border-transparent"
                      style={{ 
                        backgroundColor: '#4A5568',
                        borderColor: '#FFFFFF',
                        color: '#FFFFFF'
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1" style={{ color: '#FFFFFF' }}>Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#A7D129] focus:border-transparent"
                    style={{ 
                      backgroundColor: '#4A5568',
                      borderColor: '#FFFFFF',
                      color: '#FFFFFF'
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#4A5568', color: '#FFFFFF' }}>Select a subject</option>
                    <option value="collaboration" style={{ backgroundColor: '#4A5568', color: '#FFFFFF' }}>Collaboration Opportunity</option>
                    <option value="services" style={{ backgroundColor: '#4A5568', color: '#FFFFFF' }}>Services Inquiry</option>
                    <option value="membership" style={{ backgroundColor: '#4A5568', color: '#FFFFFF' }}>Membership Information</option>
                    <option value="press" style={{ backgroundColor: '#4A5568', color: '#FFFFFF' }}>Press/Media Inquiry</option>
                    <option value="other" style={{ backgroundColor: '#4A5568', color: '#FFFFFF' }}>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: '#FFFFFF' }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#A7D129] focus:border-transparent resize-none"
                    style={{ 
                      backgroundColor: '#4A5568',
                      borderColor: '#FFFFFF',
                      color: '#FFFFFF'
                    }}
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#6A7B92'
                    }}
                    onMouseEnter={e => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = '#A7D129';
                        e.currentTarget.style.color = '#FFFFFF';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.color = '#6A7B92';
                      }
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" style={{ color: '#A7D129' }} />
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="space-y-8">
            <div className="rounded-xl p-8 border" style={{ backgroundColor: '#5A6B82', borderColor: '#A7D129' }}>
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#A7D129] rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#FFFFFF' }}>Our Location</h3>
                  <p style={{ color: '#FFFFFF' }}>
                    1401 21st St Ste R<br />
                    Sacramento County, CA 95811
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl p-8 border" style={{ backgroundColor: '#5A6B82', borderColor: '#A7D129' }}>
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#A7D129] rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#FFFFFF' }}>Email Us</h3>
                  <a 
                    href="mailto:info@zaniyazariel.com" 
                    className="transition-colors duration-300 underline-offset-2 hover:underline"
                    style={{ 
                      color: '#FFFFFF',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
                  >
                    info@zaniyazariel.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl p-8 border" style={{ backgroundColor: '#5A6B82', borderColor: '#A7D129' }}>
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#A7D129] rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#FFFFFF' }}>Call Us</h3>
                  <p style={{ color: '#FFFFFF' }}>
                    +1 (424) 491-5669<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;