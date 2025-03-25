
import { Users, Award, Lightbulb, Target, GraduationCap, BrainCircuit } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-gradient py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full dot-pattern opacity-10 rotate-45"></div>
        
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-6">
                About Advaisori
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Businesses Through <span className="text-secondary">AI Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're on a mission to make advanced AI solutions accessible to businesses of all sizes, empowering them to thrive in the digital age.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section bg-primary relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Bridging the AI Gap for Growing Businesses</h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 2020, Advaisori emerged from a vision to democratize access to AI technology. We recognized that while large enterprises were rapidly adopting AI solutions, small and medium-sized businesses were being left behind due to perceived complexity and cost barriers.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our team of AI specialists, business strategists, and industry experts came together with a shared mission: to create practical, affordable, and impactful AI solutions specifically designed for the unique challenges faced by SMBs.
                </p>
                <p className="text-muted-foreground">
                  Today, we've helped hundreds of businesses across various industries implement AI strategies that drive real business outcomes—from increased operational efficiency to enhanced customer experiences and accelerated growth.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-full h-full border-2 border-secondary/30 rounded-2xl"></div>
                <div className="glassmorphism rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-background/50 rounded-xl">
                      <h3 className="text-3xl font-bold text-secondary mb-2">200+</h3>
                      <p className="text-muted-foreground">Clients Served</p>
                    </div>
                    <div className="text-center p-6 bg-background/50 rounded-xl">
                      <h3 className="text-3xl font-bold text-secondary mb-2">95%</h3>
                      <p className="text-muted-foreground">Client Retention</p>
                    </div>
                    <div className="text-center p-6 bg-background/50 rounded-xl">
                      <h3 className="text-3xl font-bold text-secondary mb-2">40+</h3>
                      <p className="text-muted-foreground">AI Specialists</p>
                    </div>
                    <div className="text-center p-6 bg-background/50 rounded-xl">
                      <h3 className="text-3xl font-bold text-secondary mb-2">12</h3>
                      <p className="text-muted-foreground">Industries Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="diagonal-section relative overflow-hidden">
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Purpose
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission & Vision</h2>
              <p className="text-muted-foreground">
                We're driven by a clear mission and ambitious vision to reshape how businesses leverage AI technology.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="glassmorphism rounded-2xl p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Target size={28} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                </div>
                <p className="text-muted-foreground flex-grow">
                  To democratize access to artificial intelligence by providing affordable, practical, and effective AI solutions 
                  that empower small and medium-sized businesses to enhance their operations, make data-driven decisions, 
                  and achieve sustainable growth in an increasingly digital world.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="glassmorphism rounded-2xl p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Lightbulb size={28} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                </div>
                <p className="text-muted-foreground flex-grow">
                  To build a future where businesses of all sizes can harness the transformative power of AI to solve 
                  complex challenges, unlock new opportunities, and create exceptional value for their customers and stakeholders, 
                  ultimately contributing to a more innovative and equitable business ecosystem.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="section bg-primary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                These principles guide our work and define our company culture, ensuring we deliver exceptional value to our clients.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BrainCircuit size={32} className="text-secondary" />,
                title: "Innovation Excellence",
                description: "We continuously explore and adopt cutting-edge AI technologies to deliver the most effective solutions."
              },
              {
                icon: <Users size={32} className="text-secondary" />,
                title: "Client Partnership",
                description: "We view ourselves as an extension of our clients' teams, committed to their long-term success."
              },
              {
                icon: <Award size={32} className="text-secondary" />,
                title: "Results-Driven Approach",
                description: "We measure our success by the tangible business outcomes we help our clients achieve."
              },
              {
                icon: <GraduationCap size={32} className="text-secondary" />,
                title: "Continuous Learning",
                description: "We invest in ongoing education to stay at the forefront of AI advancements and business trends."
              },
              {
                icon: <Target size={32} className="text-secondary" />,
                title: "Ethical Integrity",
                description: "We develop and implement AI solutions with a strong commitment to ethics, transparency, and responsibility."
              },
              {
                icon: <Lightbulb size={32} className="text-secondary" />,
                title: "Simplicity",
                description: "We transform complex AI concepts into accessible, user-friendly solutions that deliver real value."
              }
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-card rounded-xl p-6 h-full service-card">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="diagonal-section relative overflow-hidden">
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Leadership Team</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our diverse team of AI specialists, business strategists, and industry experts are dedicated to your success.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alexandra Chen",
                role: "CEO & Founder",
                bio: "Former AI Research Lead at Tech Giant with 15+ years experience in machine learning and business strategy."
              },
              {
                name: "Marcus Johnson",
                role: "CTO",
                bio: "AI architect and engineer with expertise in developing scalable AI solutions for enterprise environments."
              },
              {
                name: "Sarah Williams",
                role: "Chief Strategy Officer",
                bio: "Business transformation specialist with background in helping SMBs adopt emerging technologies."
              },
              {
                name: "David Park",
                role: "Head of AI Implementation",
                bio: "Expert in translating complex AI systems into practical business applications with measurable results."
              },
              {
                name: "Olivia Martinez",
                role: "Data Science Director",
                bio: "Leader in predictive analytics and data-driven insights with 12+ years in diverse industry applications."
              },
              {
                name: "James Wilson",
                role: "Client Success Lead",
                bio: "Dedicated to ensuring seamless integration of AI solutions and maximizing client ROI and satisfaction."
              }
            ].map((member, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="glassmorphism rounded-xl p-6 h-full card-hover">
                  <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-secondary">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
