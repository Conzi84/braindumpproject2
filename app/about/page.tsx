export default function AboutPage() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold font-montserrat text-light-text dark:text-dark-text mb-6">
            About Constanze
          </h1>
          <p className="text-xl text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-light leading-relaxed">
            From veterinary medicine to AI and risk management—a journey of continuous learning and adaptation.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Education & Background */}
          <section>
            <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-6">
              Education & Early Career
            </h2>
            <div className="space-y-4 text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed">
              <p>
                I studied <span className="text-highlight-green font-semibold">veterinary medicine</span>, 
                driven by a passion for animal welfare, scientific discovery and applied logic. This foundation in 
                evidence-based medicine and systematic thinking became the cornerstone of my approach to problem-solving.
              </p>
              <p>
                After completing my <span className="text-highlight-green font-semibold">PhD</span>, 
                I learned that research isn't just about finding answers—it's about asking the right questions 
                and being comfortable with uncertainty.
              </p>
            </div>
          </section>

          {/* Zoo Leadership */}
          <section>
            <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-6">
              Zoo Leadership (10 Years)
            </h2>
            <div className="space-y-4 text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed">
              <p>
                Leading a zoo for a decade taught me that <span className="text-highlight-yellow font-semibold">management is about people, not just processes</span>. 
                Every day brought new challenges: staff coordination, animal welfare, visitor experience and every day was a new problem to solve around the corner.
              </p>
              <p>
                I learned to balance competing priorities, make decisions with incomplete information, 
                and lead teams through both routine operations and unexpected crises. The zoo became my teacher
                for understanding complex systems and human behavior.
              </p>
            </div>
          </section>

          {/* Current Role */}
          <section>
            <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-6">
              AI & Risk Management
            </h2>
            <div className="space-y-4 text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed">
              <p>
                Today, I manage <span className="text-highlight-red font-semibold">AI and Risk</span> at a local company, 
                where I apply the systematic thinking from veterinary medicine and the leadership and finding solutions skills from zoo management 
                to navigate the complexities of artificial intelligence and risk management.
              </p>
              <p>
                The transition from animal welfare to AI ethics isn't as different as it might seem—both require 
                understanding complex systems, considering unintended consequences, and making decisions that affect 
                many stakeholders.
              </p>
            </div>
          </section>

          {/* Personal Philosophy */}
          <section>
            <h2 className="text-3xl font-bold font-montserrat text-light-text dark:text-dark-text mb-6">
              Building in Public
            </h2>
            <div className="space-y-4 text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans leading-relaxed">
              <p>
                I tend to gather <span className="text-highlight-yellow font-semibold">shiny objects</span>—the next interesting thing 
                that catches my attention. This curiosity has led me from veterinary medicine to zoo management to AI and risk.
              </p>
              <p>
                Here, I'm <span className="text-highlight-green font-semibold">building and writing in public</span>, 
                documenting my journey of continuous learning and adaptation. Every new challenge is an opportunity 
                to apply lessons from previous experiences and discover new ways of thinking.
              </p>
            </div>
          </section>

          {/* Quote */}
          <section className="bg-light-surface dark:bg-dark-surface p-8 rounded-lg">
            <blockquote className="text-2xl font-light text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary italic leading-relaxed">
              "The best leaders are those who can see the forest and the trees—understanding both the big picture 
              and the intricate details that make systems work."
            </blockquote>
            <cite className="text-sm text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary mt-4 block">
              — Constanze, reflecting on leadership across different domains
            </cite>
          </section>
        </div>
      </div>
    </div>
  );
}


