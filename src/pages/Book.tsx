
import { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { toast } from '../components/ui/use-toast';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Request Received",
        description: "We'll contact you shortly to confirm your consultation details.",
      });
      setIsSubmitting(false);
      setFormStep(3);
    }, 1500);
  };
  
  const nextStep = () => setFormStep(formStep + 1);
  const prevStep = () => setFormStep(formStep - 1);
  
  const isFormValid = () => {
    if (formStep === 1) {
      return formData.name && formData.email && formData.phone && formData.company && formData.employees;
    }
    return formData.message && formData.preferredDate && formData.preferredTime;
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-gradient py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full dot-pattern opacity-10 rotate-45"></div>
        
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-6">
                Book a Consultation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Start Your <span className="text-secondary">AI Journey</span> Today
              </h1>
              <p className="text-xl text-muted-foreground">
                Schedule a free, no-obligation consultation with our AI specialists to discuss your business needs and potential solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Consultation Info Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                  What to Expect
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Path to AI Transformation</h2>
                <p className="text-muted-foreground mb-8">
                  Our free consultation is designed to help you understand how AI can address your specific business challenges. Here's what you can expect:
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <MessageSquare size={24} className="text-secondary" />,
                      title: "Needs Assessment",
                      description: "We'll discuss your business goals, challenges, and current processes to identify areas where AI can make the biggest impact."
                    },
                    {
                      icon: <CheckCircle2 size={24} className="text-secondary" />,
                      title: "Solution Exploration",
                      description: "Our specialists will outline potential AI solutions tailored to your specific needs and industry context."
                    },
                    {
                      icon: <Users size={24} className="text-secondary" />,
                      title: "Expert Recommendations",
                      description: "You'll receive preliminary recommendations and insights from our experienced AI consultants."
                    },
                    {
                      icon: <ArrowRight size={24} className="text-secondary" />,
                      title: "Clear Next Steps",
                      description: "We'll provide a roadmap for moving forward, with absolutely no pressure or obligation to proceed."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="glassmorphism rounded-xl overflow-hidden">
                <div className="p-8">
                  {formStep === 3 ? (
                    <div className="text-center py-8">
                      <div className="h-20 w-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} className="text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Consultation Request Received</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out! One of our AI specialists will contact you within 24 hours to confirm your consultation details.
                      </p>
                      <p className="text-secondary font-medium">
                        We look forward to helping you transform your business with AI.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold mb-6">
                        {formStep === 1 ? "Your Information" : "Consultation Details"}
                      </h3>
                      
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Step {formStep} of 2</span>
                          <span className="text-sm text-secondary">{formStep === 1 ? "50%" : "100%"}</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full">
                          <div 
                            className="h-full bg-secondary rounded-full transition-all duration-300"
                            style={{ width: formStep === 1 ? "50%" : "100%" }}
                          ></div>
                        </div>
                      </div>
                      
                      <form onSubmit={handleSubmit}>
                        {formStep === 1 && (
                          <div className="space-y-4">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name*</label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-card border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address*</label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-card border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number*</label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full bg-card border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name*</label>
                              <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full bg-card border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="employees" className="block text-sm font-medium mb-2">Company Size*</label>
                              <select
                                id="employees"
                                name="employees"
                                value={formData.employees}
                                onChange={handleChange}
                                required
                                className="w-full bg-card border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
                              >
                                <option value="">Select company size</option>
                                <option value="1-10">1-10 employees</option>
                                <option value="11-50">11-50 employees</option>
                                <option value="51-200">51-200 employees</option>
                                <option value="201-500">201-500 employees</option>
                                <option value="501+">501+ employees</option>
                              </select>
                            </div>
                          </div>
                        )}
                        
                        {formStep === 2 && (
                          <div className="space-y-4">
                            <div>
                              <label htmlFor="message" className="block text-sm font-medium mb-2">What challenges are you looking to address?*</label>
                              <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-card border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
                              ></textarea>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                                  <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>Preferred Date*</span>
                                  </div>
                                </label>
                                <input
                                  type="date"
                                  id="preferredDate"
                                  name="preferredDate"
                                  value={formData.preferredDate}
                                  onChange={handleChange}
                                  required
                                  className="w-full bg-card border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                                  <div className="flex items-center gap-2">
                                    <Clock size={16} />
                                    <span>Preferred Time*</span>
                                  </div>
                                </label>
                                <select
                                  id="preferredTime"
                                  name="preferredTime"
                                  value={formData.preferredTime}
                                  onChange={handleChange}
                                  required
                                  className="w-full bg-card border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
                                >
                                  <option value="">Select time</option>
                                  <option value="Morning (9AM-12PM)">Morning (9AM-12PM)</option>
                                  <option value="Afternoon (12PM-3PM)">Afternoon (12PM-3PM)</option>
                                  <option value="Evening (3PM-6PM)">Evening (3PM-6PM)</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="mt-8 flex justify-between">
                          {formStep > 1 && (
                            <button
                              type="button"
                              onClick={prevStep}
                              className="btn-secondary"
                              disabled={isSubmitting}
                            >
                              Back
                            </button>
                          )}
                          
                          {formStep < 2 ? (
                            <button
                              type="button"
                              onClick={nextStep}
                              className="btn-primary ml-auto"
                              disabled={!isFormValid()}
                            >
                              Next
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="btn-primary ml-auto flex items-center gap-2"
                              disabled={!isFormValid() || isSubmitting}
                            >
                              {isSubmitting ? "Submitting..." : "Book Consultation"}
                              {!isSubmitting && <ArrowRight size={16} />}
                            </button>
                          )}
                        </div>
                      </form>
                    </>
                  )}
                </div>
                
                <div className="bg-card p-6 border-t border-border">
                  <div className="flex flex-col md:flex-row md:justify-around gap-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Phone size={20} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Call us directly</p>
                        <p className="font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email us</p>
                        <p className="font-medium">contact@advaisori.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="diagonal-section relative overflow-hidden">
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Common Questions About Our Consultations</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Is the consultation really free?",
                answer: "Yes, your initial consultation is completely free with no obligations. We believe in first understanding your needs and demonstrating our value before you make any commitments."
              },
              {
                question: "How long does the consultation last?",
                answer: "Initial consultations typically last 45-60 minutes, depending on the complexity of your business needs and questions."
              },
              {
                question: "Who will I be speaking with?",
                answer: "You'll meet with one of our senior AI consultants who specializes in your industry or the challenges you're looking to address."
              },
              {
                question: "What should I prepare for the consultation?",
                answer: "Consider your key business challenges, goals, and any questions about AI implementation. The more we understand your situation, the more valuable the consultation will be."
              },
              {
                question: "How soon can I book a consultation?",
                answer: "We typically schedule consultations within 2-3 business days of your request, depending on availability."
              },
              {
                question: "What happens after the consultation?",
                answer: "We'll provide a summary of recommendations and, if appropriate, a proposal outlining potential solutions, timelines, and investment required. You're under no obligation to proceed."
              }
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-card glassmorphism rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
