
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BrainCircuit, Cog, Database, PieChart, BarChart4 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { toast } from '../components/ui/use-toast';

const Index = () => {
  useEffect(() => {
    toast({
      title: "Welcome to Advaisori",
      description: "Transform your business with AI-powered solutions.",
      variant: "default",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 dot-pattern opacity-10 rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 dot-pattern opacity-10 rotate-12"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-6">
                  AI Consultation Services
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Transform Your Business With <span className="text-secondary">AI</span> Solutions
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  Advaisori helps small and medium-sized businesses leverage artificial intelligence 
                  to improve operational efficiency and strategic decision-making.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/book" className="btn-primary flex items-center justify-center gap-2">
                    Book Free Consultation
                    <ChevronRight size={18} />
                  </Link>
                  <Link to="/services" className="btn-secondary flex items-center justify-center gap-2">
                    Explore Our Services
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="relative">
              <ScrollReveal delay={300}>
                <div className="relative">
                  <div className="absolute -left-6 -top-6 w-full h-full border-2 border-secondary/30 rounded-2xl"></div>
                  <div className="glassmorphism rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute -right-16 -bottom-16 w-32 h-32 dot-pattern opacity-10 rotate-12"></div>
                    
                    <div className="flex items-center mb-6">
                      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-secondary/20 mr-4">
                        <BrainCircuit size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">AI-Driven Insights</h3>
                        <p className="text-muted-foreground text-sm">Data-backed decisions</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="w-full h-2 bg-muted rounded-full mb-1">
                        <div className="w-3/4 h-full bg-secondary rounded-full animate-pulse-slow"></div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Current Performance</span>
                        <span className="text-secondary">75%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 rounded-lg bg-primary mb-6">
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Efficiency Increase</p>
                        <p className="text-xl font-semibold">+47%</p>
                      </div>
                      <BarChart4 size={40} className="text-secondary/60" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-primary">
                        <p className="text-muted-foreground text-xs mb-1">Cost Reduction</p>
                        <p className="text-lg font-semibold">-32%</p>
                      </div>
                      <div className="p-3 rounded-lg bg-primary">
                        <p className="text-muted-foreground text-xs mb-1">Accuracy</p>
                        <p className="text-lg font-semibold">99.2%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="section bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-background" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Transform Your Business</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We deliver tailored AI solutions that address your specific business challenges and maximize your operational potential.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BrainCircuit size={40} className="text-secondary" />,
                title: "AI Strategy",
                description: "Develop a roadmap for AI integration that aligns with your business goals and resources."
              },
              {
                icon: <Cog size={40} className="text-secondary" />,
                title: "Process Automation",
                description: "Streamline repetitive tasks and workflows with intelligent automation solutions."
              },
              {
                icon: <Database size={40} className="text-secondary" />,
                title: "Data Analytics",
                description: "Transform raw data into actionable insights that drive strategic decision-making."
              },
              {
                icon: <PieChart size={40} className="text-secondary" />,
                title: "Predictive Modeling",
                description: "Forecast trends and outcomes to stay ahead of market changes and customer needs."
              },
              {
                icon: <BrainCircuit size={40} className="text-secondary" />,
                title: "Custom AI Solutions",
                description: "Bespoke AI applications designed specifically for your unique business challenges."
              },
              {
                icon: <BarChart4 size={40} className="text-secondary" />,
                title: "Performance Analytics",
                description: "Measure and optimize the impact of AI implementation on your business metrics."
              }
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="service-card h-full flex flex-col">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                  <Link to="/services" className="text-secondary inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn more <ChevronRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="diagonal-section relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Why Choose Advaisori
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach Makes The Difference</h2>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <p className="text-muted-foreground mb-8">
                  We're not just consultants, we're partners in your business transformation journey. Our unique approach combines technical expertise with business acumen.
                </p>
              </ScrollReveal>
              
              <div className="space-y-4">
                {[
                  { title: "Free Initial Consultation", description: "We start by understanding your business challenges, no cost or obligation." },
                  { title: "Tailored Solutions", description: "Every business is unique, and our solutions are custom-designed for your specific needs." },
                  { title: "Results-Driven Strategy", description: "We focus on delivering measurable outcomes and ROI for your business." }
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={400 + index * 100}>
                    <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <ChevronRight size={20} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            
            <ScrollReveal delay={300}>
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-full h-full border-2 border-secondary/30 rounded-2xl"></div>
                <div className="bg-card rounded-2xl p-8 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Client Results</h3>
                    <span className="text-secondary text-sm font-medium">Average Impact</span>
                  </div>
                  
                  {[
                    { label: "Operational Efficiency", value: 45, prefix: "+" },
                    { label: "Cost Reduction", value: 32, prefix: "-" },
                    { label: "Revenue Growth", value: 28, prefix: "+" }
                  ].map((stat, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">{stat.label}</span>
                        <span className="text-secondary font-medium">{stat.prefix}{stat.value}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full">
                        <div 
                          className="h-full bg-secondary rounded-full animate-pulse-slow"
                          style={{ width: `${stat.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-8 p-4 bg-primary rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Implementation Timeline</h4>
                      <span className="text-secondary text-sm">8-12 weeks</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { phase: "Assessment", weeks: "1-2" },
                        { phase: "Strategy Development", weeks: "2-3" },
                        { phase: "Implementation", weeks: "4-6" },
                        { phase: "Training & Integration", weeks: "7-12" }
                      ].map((phase, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{phase.phase}</span>
                          <span>{phase.weeks} weeks</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-primary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Start Your AI Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-muted-foreground mb-8">
                Book your free consultation today and discover how our AI solutions can help your business thrive in the digital age.
              </p>
              <Link to="/book" className="btn-primary inline-flex items-center gap-2">
                Book Free Consultation
                <ChevronRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
