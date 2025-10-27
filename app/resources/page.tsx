export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold font-montserrat text-light-text dark:text-dark-text mb-6">
            Resources
          </h1>
          <p className="text-xl text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-light leading-relaxed">
            Tools, frameworks, and insights from my journey across veterinary medicine, zoo leadership, and AI risk management.
          </p>
        </div>

        {/* AI & Risk Management Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-8">
            AI & Risk Management Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
              <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-3">
                Risk Assessment Frameworks
              </h3>
              <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed mb-4">
                Systematic approaches to identifying, analyzing, and mitigating risks in AI implementations.
              </p>
              <ul className="text-sm text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary space-y-2">
                <li>• Failure Mode Analysis</li>
                <li>• Impact vs Probability Matrix</li>
                <li>• Scenario Planning</li>
              </ul>
            </div>

            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
              <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-3">
                AI Ethics Guidelines
              </h3>
              <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed mb-4">
                Ethical frameworks for AI development and deployment, drawing from medical ethics principles.
              </p>
              <ul className="text-sm text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary space-y-2">
                <li>• Beneficence & Non-maleficence</li>
                <li>• Transparency Requirements</li>
                <li>• Accountability Frameworks</li>
              </ul>
            </div>

            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
              <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-3">
                Monitoring & Evaluation
              </h3>
              <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed mb-4">
                Continuous monitoring systems for AI model performance and risk indicators.
              </p>
              <ul className="text-sm text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary space-y-2">
                <li>• Performance Metrics</li>
                <li>• Bias Detection</li>
                <li>• Drift Monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-8">
            Leadership & Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-note-orange dark:bg-note-orange-dark p-8 rounded-lg text-black dark:text-white">
              <h3 className="text-2xl font-bold font-montserrat mb-4">
                Zoo Leadership Lessons
              </h3>
              <p className="font-open-sans leading-relaxed mb-4">
                Ten years of managing complex operations, diverse teams, and competing priorities in a high-stakes environment.
              </p>
              <ul className="text-sm space-y-2">
                <li>• Crisis Management Protocols</li>
                <li>• Stakeholder Communication</li>
                <li>• Resource Optimization</li>
                <li>• Team Motivation Strategies</li>
              </ul>
            </div>

            <div className="bg-note-pink dark:bg-note-pink-dark p-8 rounded-lg text-black dark:text-white">
              <h3 className="text-2xl font-bold font-montserrat mb-4">
                Veterinary Medicine Insights
              </h3>
              <p className="font-open-sans leading-relaxed mb-4">
                Evidence-based decision making, systematic thinking, and ethical frameworks applied to business contexts.
              </p>
              <ul className="text-sm space-y-2">
                <li>• Diagnostic Methodology</li>
                <li>• Treatment Protocols</li>
                <li>• Patient Care Principles</li>
                <li>• Research & Development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-8">
            Learning & Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
              <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-3">
                Career Transition
              </h3>
              <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed">
                Resources for transitioning from veterinary medicine to business and technology roles.
              </p>
            </div>

            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
              <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-3">
                AI & Technology
              </h3>
              <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed">
                Learning paths for understanding AI, machine learning, and their business applications.
              </p>
            </div>

            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
              <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-3">
                Risk Management
              </h3>
              <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed">
                Frameworks and methodologies for identifying, assessing, and managing business risks.
              </p>
            </div>
          </div>
        </section>

        {/* Tools & Templates */}
        <section>
          <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-8">
            Tools & Templates
          </h2>
          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-4">
                  Risk Assessment Templates
                </h3>
                <ul className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary space-y-2">
                  <li>• AI Risk Evaluation Checklist</li>
                  <li>• Impact Assessment Framework</li>
                  <li>• Mitigation Strategy Templates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-4">
                  Leadership Tools
                </h3>
                <ul className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary space-y-2">
                  <li>• Team Communication Protocols</li>
                  <li>• Crisis Response Procedures</li>
                  <li>• Performance Evaluation Methods</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


