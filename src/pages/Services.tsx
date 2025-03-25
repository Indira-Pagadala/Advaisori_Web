
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BrainCircuit, Cog, Database, BarChart4, PieChart, FileCode, ArrowRight, Filter, Search } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  {
    id: 'strategy',
    category: 'Strategy',
    title: 'AI Strategy & Implementation',
    icon: <BrainCircuit size={40} className="text-secondary" />,
    description: 'Develop a comprehensive AI roadmap tailored to your business goals, industry, and current technological capabilities.',
    features: [
      'AI Readiness Assessment',
      'Technology Selection & Roadmapping',
      'Integration Planning',
      'ROI Projection & Measurement',
      'Change Management Support'
    ],
    useCases: [
      'Digital Transformation Initiatives',
      'Legacy System Modernization',
      'Market Expansion Planning',
      'Competitive Advantage Development'
    ]
  },
  {
    id: 'automation',
    category: 'Automation',
    title: 'Business Process Automation',
    icon: <Cog size={40} className="text-secondary" />,
    description: 'Identify and automate repetitive tasks and workflows to increase operational efficiency and reduce human error.',
    features: [
      'Process Mapping & Analysis',
      'Custom Automation Development',
      'Integration with Existing Systems',
      'Performance Monitoring',
      'Continuous Optimization'
    ],
    useCases: [
      'Document Processing & Management',
      'Customer Service Automation',
      'Supply Chain Optimization',
      'Human Resources Workflows'
    ]
  },
  {
    id: 'analytics',
    category: 'Analytics',
    title: 'Data Analytics & Insights',
    icon: <Database size={40} className="text-secondary" />,
    description: 'Transform your raw data into actionable insights that drive strategic decision-making and business growth.',
    features: [
      'Data Collection & Integration',
      'Custom Dashboard Development',
      'Pattern Recognition',
      'Insight Generation',
      'Recommendation Engines'
    ],
    useCases: [
      'Customer Behavior Analysis',
      'Market Trend Identification',
      'Operational Efficiency Measurement',
      'Performance Benchmarking'
    ]
  },
  {
    id: 'predictive',
    category: 'Analytics',
    title: 'Predictive Analytics',
    icon: <PieChart size={40} className="text-secondary" />,
    description: 'Leverage historical data and AI to forecast future trends, outcomes, and behaviors with remarkable accuracy.',
    features: [
      'Predictive Model Development',
      'Risk Assessment',
      'Scenario Planning',
      'Anomaly Detection',
      'Forecasting Systems'
    ],
    useCases: [
      'Demand Forecasting',
      'Preventive Maintenance',
      'Fraud Detection',
      'Customer Churn Prediction'
    ]
  },
  {
    id: 'custom',
    category: 'Development',
    title: 'Custom AI Solutions',
    icon: <FileCode size={40} className="text-secondary" />,
    description: 'Bespoke AI applications designed and developed specifically for your unique business challenges and opportunities.',
    features: [
      'Custom Algorithm Development',
      'Proprietary Solution Design',
      'Specialized Integration',
      'Unique Use Case Implementation',
      'Intellectual Property Development'
    ],
    useCases: [
      'Specialized Industry Applications',
      'Competitive Differentiation',
      'Complex Problem Solving',
      'Innovation Initiatives'
    ]
  },
  {
    id: 'performance',
    category: 'Analytics',
    title: 'Performance Analytics',
    icon: <BarChart4 size={40} className="text-secondary" />,
    description: 'Comprehensive measurement and analysis of your business performance, with AI-powered recommendations for improvement.',
    features: [
      'KPI Development & Tracking',
      'Performance Dashboard Creation',
      'Benchmarking',
      'Improvement Recommendations',
      'Continuous Monitoring'
    ],
    useCases: [
      'Executive Decision Support',
      'Team Performance Optimization',
      'Project Outcome Measurement',
      'Business Health Assessment'
    ]
  }
];

const categories = ['All', 'Strategy', 'Automation', 'Analytics', 'Development'];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(services);
  
  useEffect(() => {
    let filtered = services;
    
    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(service => service.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(term) || 
        service.description.toLowerCase().includes(term) ||
        service.features.some(feature => feature.toLowerCase().includes(term)) ||
        service.useCases.some(useCase => useCase.toLowerCase().includes(term))
      );
    }
    
    setFilteredServices(filtered);
  }, [activeCategory, searchTerm]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-gradient py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full dot-pattern opacity-10 rotate-45"></div>
        
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Businesses with <span className="text-secondary">AI Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover our comprehensive suite of AI consulting services designed to enhance your business operations and strategic decision-making.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Services Filtering Section */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 mb-2 md:mb-0">
                <Filter size={18} className="text-muted-foreground" />
                <span className="text-muted-foreground">Filter by:</span>
              </div>
              
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeCategory === category 
                      ? 'bg-secondary text-white' 
                      : 'bg-card text-muted-foreground hover:bg-card/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative flex items-center">
              <Search size={18} className="absolute left-3 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-card text-foreground pl-10 pr-4 py-2 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
            </div>
          </div>
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">No services found matching your criteria.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setSearchTerm(''); }}
                className="btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredServices.map((service, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="glassmorphism rounded-xl overflow-hidden h-full">
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-6 flex justify-between items-start">
                        <div>
                          <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium mb-3">
                            {service.category}
                          </span>
                          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        </div>
                        <div className="flex-shrink-0">
                          {service.icon}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <ChevronRight size={18} className="text-secondary flex-shrink-0 mt-1" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Common Use Cases</h4>
                          <ul className="space-y-2">
                            {service.useCases.map((useCase, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <ChevronRight size={18} className="text-secondary flex-shrink-0 mt-1" />
                                <span className="text-muted-foreground">{useCase}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Link to="/book" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors">
                          Discuss Your Needs
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="diagonal-section relative overflow-hidden">
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Deliver Results</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our proven methodology ensures that we deliver effective AI solutions that align with your business goals.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-muted hidden md:block"></div>
            
            {[
              { 
                title: "Discovery", 
                description: "We begin by understanding your business, challenges, goals, and current technological landscape through in-depth consultations.",
                position: "left"
              },
              { 
                title: "Assessment", 
                description: "Our experts analyze your data infrastructure, processes, and AI readiness to identify the most impactful opportunities.",
                position: "right"
              },
              { 
                title: "Strategy", 
                description: "We develop a comprehensive implementation plan tailored to your specific needs, resources, and desired outcomes.",
                position: "left"
              },
              { 
                title: "Implementation", 
                description: "Our technical team brings the strategy to life, building and integrating AI solutions into your existing business operations.",
                position: "right"
              },
              { 
                title: "Training", 
                description: "We ensure your team has the knowledge and skills needed to effectively use and manage the new AI capabilities.",
                position: "left"
              },
              { 
                title: "Optimization", 
                description: "We continuously monitor performance, gather feedback, and refine the solution to maximize its impact and ROI.",
                position: "right"
              }
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className={`relative mb-12 md:mb-24 flex ${step.position === 'right' ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className="md:w-5/12 bg-card glassmorphism rounded-xl p-6 relative">
                    {/* Circle node on timeline */}
                    <div className="absolute top-1/2 -translate-y-1/2 hidden md:block
                      ${step.position === 'right' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}
                    ">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    </div>
                    
                    <span className="text-secondary text-sm font-medium mb-2 block">Step {index + 1}</span>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-primary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Ready to Get Started?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Free Consultation Today</h2>
              <p className="text-muted-foreground mb-8">
                Schedule a no-obligation consultation with our AI specialists to discuss your business needs and explore how our services can help you achieve your goals.
              </p>
              <Link to="/book" className="btn-primary inline-flex items-center gap-2">
                Book Consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
