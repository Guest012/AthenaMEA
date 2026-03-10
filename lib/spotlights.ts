export interface Spotlight {
  slug: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  summary: string;
  narrative?: string;
  themes: string[];
  advice?: string[];
  winddown?: string;
  quote: string;
}

export const spotlights: Spotlight[] = [
  {
    slug: 'sudeep-luthra',
    name: 'Sudeep Luthra',
    title: 'Sr. HR Leader (ex-Head HR - Orange Business India)',
    company: 'Orange Business India',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHkvefK75n7lw/profile-displayphoto-shrink_800_800/B56ZPS',
    summary:
      'People-first HR leader focused on org design, agile change, and building resilient teams across fast-scaling environments. Values appreciation of HR\'s role in business transformations and aligning people aspirations with customer value.',
    narrative:
      'Having worked across industries, Sudeep credits diverse environments, people aspirations, business dynamics, and technology interventions for enriching his HR experience.',
    themes: [
      'Designing agile org structures for scale',
      'Driving engagement through transparent communication',
      'Balancing governance with speed in high-growth teams',
      'Building trust and transparent relationships across the org',
    ],
    advice: [
      'Be open-minded and adaptable—explore diverse HR domains and invest ~10% time in self-development.',
      'Establish trust in human relations—policies and decks matter less than credibility and follow-through.',
      'Communicate openly and transparently—avoid ambiguity; clarity builds confidence.',
      'Balance empathy with organizational needs—represent employees while conveying leadership expectations.',
      'Embrace automation without losing the human touch—easy access and quick responses still need empathy.',
      'Keep building on the 5 Cs: Competence, Commitment, Collaboration, Communication, Connections.',
    ],
    winddown:
      'Unwinds by reflecting on learnings, walking, meditating, reading history/politics/religion, and discussing ideas with close friends and colleagues.',
    quote:
      'We put people at the center of every transformation—growth follows when teams feel trusted, informed, and empowered.',
  },
  {
    slug: 'prashant-srivastava',
    name: 'Prashant Srivastava',
    title: 'VP Human Resources',
    company: 'MEA Assist',
    avatar: 'https://mediassist.in/assets/images/team/prashant-shrivastava.png',
    summary:
      'HR has evolved over 20–25 years from labor/industrial relations to a strategic, tech-driven function focused on talent development and retention.',
    narrative:
      'Tech is core to that evolution—automating processes and improving employee experience—while people challenges stay consistent: attracting, retaining, developing talent with clear career paths, fair compensation, and long-term value.',
    themes: [
      'Strategic, technology-enabled HR with personalized learning',
      'Consistent people challenges: attract, retain, develop talent',
      'Effective people practices, nurturing environments, clear paths',
      'Balancing org needs with individual growth; avoiding bias to one side',
      'Managing ambiguity and chaos through adaptability and continuous learning',
    ],
    advice: [
      'Develop technological proficiency—stay current and leverage HR tech.',
      'Foster holistic learning—build foundations, not just career ladder climbing.',
      'Explore business roles—apply HR expertise to broader org goals.',
      'Understand human behavior—study psychology to apply insights at work.',
    ],
    quote:
      'Our edge is a ready-now pipeline. When demand spikes, talent moves quickly because readiness was planned months earlier.',
  },
  {
    slug: 'sudhir-mishra',
    name: 'Sudhir Mishra',
    title: 'VP & Head HR - India',
    company: 'IDEMA',
    avatar: 'https://media.licdn.com/dms/image/v2/C5103AQESvLtJzJBbAg/profile-displayphoto-shrink_800_800/profil',
    summary:
      'Purpose-led HR leader focused on making work impactful, showing the big picture, and building resilient teams across fast-scaling environments.',
    narrative:
      'Views M&A as a people-first challenge: aligning cultures, managing change, retaining talent, and harmonizing everything beyond the buildings.',
    themes: [
      'Purposeful work and inspiring impact',
      'Culture alignment and talent retention in M&A',
      'Change management and harmonizing diverse teams',
      'Continuous innovation and new initiatives',
      'Preparing talent for the future; pushing beyond comfort zones',
    ],
    advice: [
      'Prioritize learning and growth over money early in your career.',
      'Choose roles that prepare you for the future and push you beyond comfort zones.',
      'Acquire valuable skills and competencies; financial rewards will follow.',
      'Be patient—exceptional skills and commitment get rewarded over time.',
    ],
    quote:
      'I enjoy making a difference and creating positive changes. The opportunity to implement new ideas and see them come to life fills me with pride. A fulfilling job is one that allows me to make a meaningful impact and drive improvement.',
  },
  {
    slug: 'monika-srivastava',
    name: 'Monika Srivastava',
    title: 'Head - Leadership & Sales Hiring',
    company: 'Quest Global',
    avatar: 'https://media.licdn.com/dms/image/v2/C5603AQHDBP_Sb8ZwfQ/profile-displayphoto-shrink_800_800/profil',
    summary:
      'Ambition-led HR leader focused on proactive talent mapping, strategic HR-business partnership, and impact-driven hiring and enablement.',
    narrative:
      'Sees HR today as pivotal in hiring, training, and enablement—tightly linked to business strategy. Stresses robust talent mapping to find the right skills, and a collaborative, strategic partnership with the business beyond traditional HR.',
    themes: [
      'Relentless aspiration and avoiding complacency after success',
      'Proactive talent mapping to align skills with organizational needs',
      'Strategic HR-business partnership in hiring, training, enablement',
      'AI as an enabler—supporting compliance/assistance while keeping the human touch',
      'Forward-looking impact focus and continuous evolution',
    ],
    advice: [
      'Embrace challenges early; stay forward-looking.',
      'Aspire to create impact and contribute to growth.',
      'Continuously learn and evolve your mindset within the organization.',
    ],
    quote:
      'Ambition and impact go together—stay aspirational, map talent proactively, and keep the human touch even as technology enables you.',
  },
  {
    slug: 'rajat-bhatia',
    name: 'Rajat Bhatia',
    title: 'SVP & Head – People & Culture',
    company: 'Fareportal',
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQE76zG9_lVqhw/profile-displayphoto-shrink_800_800/profil',
    summary:
      'HR leader focused on breaking monotony of conventional processes and building transformative function aligned cohesively with business outcomes through ground-level understanding and effective collaboration.',
    narrative:
      'Enjoys continuous experimentation and innovation in HR, working with flexibility and talented teams that support and challenge growth. Believes in understanding ground-level realities of people to effectively collaborate and work with teams.',
    themes: [
      'Breaking monotony of conventional HR processes',
      'Building transformative HR aligned with business outcomes',
      'Understanding ground-level realities of people',
      'Effective collaboration and team work',
      'Continuous experimentation and innovation',
    ],
    advice: [
      'Spend time understanding the business well.',
      'Get deep knowledge of the domain and product you are part of.',
      'Always invest in learning and absorbing information.',
    ],
    quote:
      'Always stay in touch with the ground-level realities.',
  },
  {
    slug: 'anil-gaur',
    name: 'Anil Gaur',
    title: 'Group Chief People Officer',
    company: 'Akums Drugs & Pharmaceuticals Ltd.',
    avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQHI9eN74mJVeg/profile-displayphoto-shrink_800_800/profil',
    summary:
      'Group Chief People Officer focused on HHRD (Heart to Heart Relationship Development), achieving solidarity between business and employee goals, and creating true engagement through enjoyment and purpose alignment.',
    narrative:
      'Believes managing talent is tough but also his favorite aspect of the job. Emphasizes that people need to enjoy what they do to bring motivation and zeal, which creates true engagement and alignment with business values and purpose.',
    themes: [
      'HHRD (Heart to Heart Relationship Development) over conventional HR',
      'Achieving solidarity between business goals and employee goals',
      'True engagement through enjoyment and purpose alignment',
      'Resilience, humbleness, and effective communication',
      'Learning mindset and patience for career growth',
    ],
    advice: [
      'Be patient and have a learning mindset—there is no gain without pain.',
      'Develop resilience, humbleness, and effective communication as essential attributes.',
      'Focus on achieving solidarity between business goals and employee goals.',
      'Emphasize HHRD (Heart to Heart Relationship Development) in building human resource capabilities.',
    ],
    quote:
      'People need to enjoy what they do, that will bring the motivation and zeal to do their work, that\'s what brings true engagement and alignment with the business\' value and purpose.',
  },
  {
    slug: 'priyanka-shetty',
    name: 'Priyanka Shetty',
    title: 'Senior Director – People Solutions',
    company: 'Indegene',
    avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQHuVHvsSTsRtw/profile-displayphoto-shrink_800_800/profil',
    summary:
      'Senior Director focused on empowering women in corporate settings, creating space for themselves, believing in their worth, and overcoming imposter syndrome through visibility and mentorship.',
    narrative:
      'Believes that for women in the corporate world, it\'s essential to create space for themselves and believe in their worth and achievements. Notes that women often deal with imposter syndrome, and for a successful career, it\'s imperative to make yourself more visible and have a mentor who pushes you to realize your potential. At work, most enjoys the feeling of empowerment, freedom, and community due to her wonderful team, with high-trust relationships that ensure delivery together.',
    themes: [
      'Creating space for women in corporate settings',
      'Believing in your worth and achievements',
      'Overcoming imposter syndrome through visibility',
      'The importance of mentorship for career growth',
      'High-trust team relationships and empowerment',
    ],
    advice: [
      'Reflect on what you want your career trajectory to look like. Have a plan but keep your mind open to different possibilities.',
      'Ask for opportunities—if you don\'t ask, you most likely won\'t get. Whether it\'s feedback, support, or incentives, always ask.',
      'Don\'t fear saying \'I don\'t know\' but always be curious to learn what you don\'t know. Keep learning as your motto.',
      'Find a good mentor who supports you and understands your journey and potential. They may help you see things from unique perspectives and discover new capabilities.',
    ],
    quote:
      'We have a high-trust relationship and I know that whatever tasks and outcomes we are set to do, we will deliver together.',
  },
  {
    slug: 'arun-paul',
    name: 'Arun Paul',
    title: 'Head of Human Resources – Asia Pacific',
    company: 'Orion Innovation',
    avatar: 'https://media.licdn.com/dms/image/v2/C5103AQFFEi6jSYPtpQ/profile-displayphoto-shrink_800_800/profil',
    summary:
      'Head of HR - APAC focused on cultivating a culture that values data and insights, encouraging employees to make data-backed decisions with necessary tools and training. Derives great motivation from coaching and mentoring, finding satisfaction in seeing team members grow and succeed.',
    narrative:
      'Believes it is essential to cultivate a culture that values data and insights. Emphasizes the importance of encouraging employees to make data-backed decisions and providing them with the necessary tools and training. Derives great motivation and work satisfaction from providing coaching and mentoring support to his team, with the greatest reward being seeing team members grow and succeed, knowing he has played a meaningful role in their professional development.',
    themes: [
      'Cultivating a culture that values data and insights',
      'Encouraging data-backed decision making',
      'Providing tools and training for data-driven work',
      'Coaching and mentoring for team growth',
      'Continuous learning and agility in evolving industries',
    ],
    advice: [
      'Understand that putting in the hard work is critical to success—there is no substitute for hard work. Success involves going the extra mile and making a conscious effort to continuously improve and strive for excellence.',
      'There is always something new to learn. Be agile and responsive to the evolving needs of your industry and continuously update yourself accordingly.',
    ],
    quote:
      'It is essential to cultivate a culture that values data and insights.',
  },
  {
    slug: 'manish-kotwani',
    name: 'Manish Kotwani',
    title: 'Head of HR & Admin',
    company: 'Course5i',
    avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQHoqSKG7hlmDQ/profile-displayphoto-shrink_800_800/profil',
    summary:
      'Head of HR & Admin who loves building organizations while nurturing careers; invested in human capital and purpose-led, learning-focused, collaborative teams.',
    narrative:
      'Enjoys diverse roles across geographies, aligning workforces to build successful organizations. Navigates volatile markets, hires and retains niche skills, and manages generational diversity. Uses creativity to drive a purpose-led workforce whose aspirations align with the organization, builds a learning organization, operates collaboratively, and enjoys the journey.',
    themes: [
      'Building organizations while nurturing careers',
      'Purpose-led workforce aligned with organizational aspirations',
      'Learning organization and continuous upskilling',
      'Collaboration and enjoying the journey',
      'Navigating volatile markets, niche skills, and generational diversity',
    ],
    advice: [
      'Prioritize effectively—give purposeful time and effort to your organization and career.',
      'Embrace challenging times; keep upgrading and strengthening your skill set.',
      'Develop soft skills and maintain a human touch; have fun while working.',
    ],
    quote:
      'The chance to build organizations while nurturing careers is something I love—Human Capital is the career I have invested in!',
  },
  {
    slug: 'sanjay-mathur',
    name: 'Sanjay Mathur',
    title: 'HR Development Director',
    company: 'SYSTRA',
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQG-Nq-4DRNLcg/profile-displayphoto-shrink_800_800/B4DZeZ',
    summary:
      'HR Development Director who believes in standing by employees with empathy and support, seeing them reciprocate. Has witnessed HR evolution from Industrial Relations to People and Culture, emphasizing the need to keep pace with change.',
    narrative:
      'Over his career, has seen the evolution and growth of the HR function by leaps and bounds—from \'Industrial Relations\' to \'Personnel Management\' to \'Human Resources\' and now \'People and Culture\'. A lot has changed in how the workforce is driven and encouraged. With experience across industries and witnessing this shift over the years, believes the key for success for HR professionals is to \'keep pace with the change\'.',
    themes: [
      'Standing by employees with empathy and support',
      'Reciprocation through employee loyalty and engagement',
      'Keeping pace with HR evolution and change',
      'Continuous learning and knowledge upgrading',
      'Building strong foundations and domain expertise',
    ],
    advice: [
      'Be open to learn—reading is particularly helpful, whether offline or online.',
      'Always seek help, guidance, and feedback from peers, juniors, and senior management.',
      'Keep child-like curiosity to know more and understand better.',
      'Constantly upgrade your knowledge—don\'t wait for people to nudge you, you would risk getting left behind.',
      'Have trust and faith in your organization—don\'t resort to quick fixes, look for quality and sustainability.',
      'Fundamentals are important, so keep your foundations on any subject in your industry strong.',
      'Becoming an expert is more lucrative rather than being a generalist these days, so develop deeper domain knowledge.',
    ],
    quote:
      'When you stand-by your employees, when you empathize and support them, they reciprocate.',
  },
  {
    slug: 'tejinderpal-miglani',
    name: 'TejinderPal Miglani',
    title: 'Advisor & Mentor · Co-founder, Incedo (ex-Founding CTO, Indiabulls)',
    company: 'Incedo Inc.',
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQHHiyYXYzG1MA/profile-displayphoto-shrink_800_800/profil',
    summary:
      'Problem-first entrepreneur and tech leader who believes every founder must be a salesperson—focused on understanding problems, conveying tech uniqueness, and building customer empathy to drive product-market fit.',
    narrative:
      'Advocates selling as understanding problems and offering solutions. As CTO, stresses conveying the uniqueness of technology to investors and hires, requiring big-picture and detailed grasp. Hands-on customer engagement builds empathy and honesty in product development. As CEO, selling the vision and aligning product with market needs remains vital. Passionate about climate tech and angel investing with a belief that businesses shouldn\'t treat nature as free.',
    themes: [
      'Problem-first selling and solution focus',
      'Conveying tech uniqueness to investors and hires',
      'Customer empathy through direct engagement',
      'Product-market fit: find, deliver, retain customers',
      'Frugal mindset and prudent financial management',
      'Climate-tech and responsible business building',
    ],
    advice: [
      'Adopt a frugal mindset—funds are a luxury, not a license to spend.',
      'Work quickly toward product-market fit: repeatedly sell, deliver, and retain customers.',
      'Start from the customer problem, not a fixed product idea—adjust the solution as needed.',
      'Engage directly with customers to build empathy and honest product development.',
    ],
    quote:
      'Entrepreneurs should prioritize understanding and solving customer problems over developing and selling a specific product.',
  },
  {
    slug: 'rishi-mehta',
    name: 'Rishi Mehta',
    title: 'President & CEO',
    company: 'WAISL Limited',
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQGRTTCOpqVgRA/profile-displayphoto-shrink_800_800/profil',
    summary:
      'CXO spotlight on resilience, entrepreneurship, and continuous learning across telecom, hospitality, education, and aviation—leading WAISL with a growth mindset.',
    narrative:
      'Highlights India\'s rising entrepreneurial spirit, urging youth to pursue passion-led, less-explored paths. Sees adversity as a catalyst for resilience and fast learning in complex corporate environments.',
    themes: [
      'Stepping out of comfort zones to drive growth',
      'Resourceful, problem-solving entrepreneurial mindset',
      'Resilience and adaptability through adversity',
      'Continuous learning to navigate ambiguity',
      'Leading with passion and purpose',
    ],
    advice: [
      'Embrace challenges and failures—they are the best teachers.',
      'Pursue passion-driven paths; entrepreneurial spirit is about resourcefulness.',
      'Lead with purpose to stay motivated through roadblocks.',
      'Continuously learn and act fast to thrive in complex environments.',
    ],
    winddown:
      'Stays energized with daily physical activity—running, squash, swimming, yoga, gym—and avid reading to fuel curiosity.',
    quote:
      'The real growth happens when we step out of our comfort zones. What doesn\'t break us, eventually builds us.',
  },
];
