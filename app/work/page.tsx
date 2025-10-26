export default function WorkPage() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold font-montserrat text-light-text dark:text-dark-text mb-6">
            Work & Portfolio
          </h1>
          <p className="text-xl text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-light leading-relaxed">
            From veterinary medicine to zoo leadership to AI risk management—a journey of applying systematic thinking across diverse domains.
          </p>
        </div>

        {/* Current Role */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-8">
            Current Role: AI & Risk Management
          </h2>
          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold font-montserrat text-light-text dark:text-dark-text mb-4">
              Managing AI and Risk at Local Company
            </h3>
            <p className="text-lg text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed mb-6">
              Applying systematic thinking from veterinary medicine and leadership skills from zoo management 
              to navigate the complexities of artificial intelligence and risk assessment in a business context.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold font-montserrat text-light-text dark:text-dark-text mb-3">
                  Key Responsibilities
                </h4>
                <ul className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary space-y-2">
                  <li>• AI Risk Assessment & Mitigation</li>
                  <li>• Ethical AI Framework Development</li>
                  <li>• Cross-functional Team Leadership</li>
                  <li>• Stakeholder Risk Communication</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold font-montserrat text-light-text dark:text-dark-text mb-3">
                  Key Achievements
                </h4>
                <ul className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary space-y-2">
                  <li>• Developed AI Risk Framework</li>
                  <li>• Reduced Risk Exposure by 40%</li>
                  <li>• Led Ethical AI Initiative</li>
                  <li>• Trained 50+ Team Members</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Zoo Leadership Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-8">
            Zoo Leadership (10 Years)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-note-green p-8 rounded-lg text-black">
              <h3 className="text-2xl font-bold font-montserrat mb-4">
                Operations Management
              </h3>
              <p className="font-open-sans leading-relaxed mb-4">
                Led daily operations for a major zoo, managing animal welfare, visitor experience, 
                staff coordination, and conservation efforts across diverse ecosystems.
              </p>
              <ul className="text-sm space-y-2">
                <li>• Managed 200+ Staff Members</li>
                <li>• Oversaw 500+ Animal Species</li>
                <li>• Coordinated Conservation Programs</li>
                <li>• Handled Crisis Situations</li>
              </ul>
            </div>

            <div className="bg-note-blue p-8 rounded-lg text-black">
              <h3 className="text-2xl font-bold font-montserrat mb-4">
                Strategic Leadership
              </h3>
              <p className="font-open-sans leading-relaxed mb-4">
                Developed long-term strategies for conservation, education, and visitor engagement 
                while balancing competing priorities and stakeholder needs.
              </p>
              <ul className="text-sm space-y-2">
                <li>• Strategic Planning & Execution</li>
                <li>• Stakeholder Management</li>
                <li>• Budget & Resource Allocation</li>
                <li>• Public Relations & Communication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Veterinary Medicine Foundation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-8">
            Veterinary Medicine Foundation
          </h2>
          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-4">
                  Education & Research
                </h3>
                <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed mb-4">
                  PhD in Veterinary Medicine provided the foundation for evidence-based decision making, 
                  systematic thinking, and ethical frameworks that now guide my approach to AI and risk management.
                </p>
                <ul className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary space-y-2">
                  <li>• Evidence-Based Decision Making</li>
                  <li>• Systematic Problem Solving</li>
                  <li>• Ethical Framework Development</li>
                  <li>• Research & Analysis Skills</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-4">
                  Applied to Business
                </h3>
                <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed mb-4">
                  The diagnostic methodology and treatment protocols from veterinary medicine translate 
                  directly to risk assessment and mitigation strategies in business contexts.
                </p>
                <ul className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary space-y-2">
                  <li>• Diagnostic Approach to Risk</li>
                  <li>• Treatment Protocols for Issues</li>
                  <li>• Patient Care = Stakeholder Care</li>
                  <li>• Continuous Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-8">
            Key Projects & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
              <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-3">
                AI Risk Framework
              </h3>
              <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed mb-4">
                Developed comprehensive risk assessment framework for AI implementations, 
                drawing from medical diagnostic protocols.
              </p>
              <span className="text-sm text-light-accent dark:text-dark-accent font-semibold">Current Project</span>
            </div>

            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
              <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-3">
                Zoo Conservation Program
              </h3>
              <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed mb-4">
                Led conservation initiatives that increased endangered species breeding success 
                by 60% over 5 years.
              </p>
              <span className="text-sm text-highlight-green font-semibold">Completed</span>
            </div>

            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
              <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-3">
                Ethical AI Guidelines
              </h3>
              <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed mb-4">
                Created ethical guidelines for AI development, applying medical ethics 
                principles to technology contexts.
              </p>
              <span className="text-sm text-highlight-yellow font-semibold">Ongoing</span>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section>
          <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-8">
            My Approach
          </h2>
          <div className="bg-note-yellow p-8 rounded-lg text-black">
            <blockquote className="text-2xl font-light italic leading-relaxed mb-6">
              "The best leaders are those who can see the forest and the trees—understanding both 
              the big picture and the intricate details that make systems work."
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold font-montserrat mb-4">
                  Systematic Thinking
                </h3>
                <p className="font-open-sans leading-relaxed">
                  Applying diagnostic methodology from veterinary medicine to identify, 
                  analyze, and solve complex business problems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold font-montserrat mb-4">
                  Leadership Philosophy
                </h3>
                <p className="font-open-sans leading-relaxed">
                  Leading with empathy, evidence, and ethics—principles that work across 
                  veterinary medicine, zoo management, and AI risk management.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


