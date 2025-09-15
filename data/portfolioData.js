export const filterButtons = [
  {
    id: 1,

    text: "All",
  },
  {
    id: 2,
    text: "Web",
  },
  {
    id: 3,
    text: "Mobile",
  },
];

export const portfolioData = [
  {
    id: 1,
    class: "isotop-item web mobile",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/shaplaOss.png",
    subtitle: "Civic Engagement , Flutter | Firebase",
    title: "Shapla OSS – Digital One Stop Service",
    target: "#portfolio-2",
    category: ["Web", "Mobile"],
    project: "web/mobile app",
    languages: ["Dart", "Flutter", "Firebase", "REST APIs"],
    client: "Chittagong City Council",
    previewLink: "https://www.ossccc.gov.bd/",
    previewName: "Shapla OSS - Web",
    desc: [
      `Description:`,
      `Shapla OSS is a full-featured civic engagement platform developed for Chittagong City Council, bringing 60+ essential public services under a single digital umbrella. As the sole Flutter developer, I designed, developed, and deployed both the web and mobile apps (iOS & Android) within 6 weeks, ensuring feature parity, performance, and scalability across platforms. The app serves over 8 million citizens with fast access to government services including permit applications, utility bill payments, and issue tracking.`,

      `Key Features:`,
      `- Multi-Platform Support: Developed fully responsive apps using Flutter for Web, iOS, and Android.`,
      `- Service Modules (33+ Active): Built modules for permit requests (construction, event, business), certificate requests (birth, marriage, death, income), utility payments, and service complaint tracking.`,
      `- Real-Time Notifications: Integrated Firebase Cloud Messaging (FCM) to deliver instant alerts for emergencies, announcements, and status updates.`,
      `- Digital Payment System: Enabled secure, real-time payments for electricity, water, and waste services through payment gateway integration.`,
      `- UX/UI Implementation: Converted Figma designs into pixel-perfect interfaces and collaborated with city council for iterative improvements.`,
      `- API Integrations: Integrated REST APIs using Dio with token-based authentication for secure data handling.`,
      `- File Handling: Integrated file picker and PDF viewer for document submission and display.`,
      `- Localization: Implemented multi-language support using Flutter’s internationalization framework.`,
      `- Analytics & Monitoring: Integrated Firebase Analytics and performance monitoring with robust error reporting and offline fallback support.`,

      `Technical Implementation:`,
      `- Architecture: Applied hybrid MVVM architecture adhering to clean architecture principles, separating data, domain, and presentation layers.`,
      `- State Management: Combined GetX reactive variables and Provider change notifier pattern for scalable state management.`,
      `- Security: Implemented secure local storage and JWT-based authentication for data protection.`,
      `- Performance Optimization: Used Consumer widgets and scoped rebuilds to ensure smooth UI and fast response times.`,

      `Project Highlights:`,
      `- Delivered production-ready web and mobile apps in just 6 weeks.`,
      `- Reduced application processing time by 30% via digital workflows.`,
      `- Achieved 99.9% uptime with robust error handling and monitoring.`,
      `- Currently scaling to support all 60+ planned public services with ongoing UX enhancements.`,
    ],
  },
  {
    id: 2,
    class: "isotop-item mobile web",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/teamAtm.png",
    subtitle: "Corporate Wellness , BuddyBoss | WordPress",
    title: "Team ATM",
    target: "#portfolio-2",
    category: ["Mobile", "Web"],
    project: "mobile/web app",
    languages: ["BuddyBoss", "WordPress"],
    client: "Al Tayer Motors",
    previewLink:
      "https://play.google.com/store/apps/details?id=com.teamatm.android&pcampaignid=web_share",
    previewName: "TeamATM - PlayStore",
    desc: [
      `Description:`,
      `Team ATM is a corporate wellness and employee engagement app built for Al Tayer Motors. The platform integrates employee recognition, learning, wellness, and event tracking in a single solution. I customized the BuddyBoss platform to create tailored user journeys and deployed the final app to both the Google Play Store and Apple App Store for enterprise-wide usage.`,

      `Key Features:`,
      `- Modular Pages: Includes dedicated pages for Wellness, Recognition, Engagement, Programs, and Events.`,
      `- Platform Customization: Customized BuddyBoss theme and features to align with Al Tayer Motors' corporate branding and employee experience needs.`,
      `- Mobile App Delivery: Built and deployed production-ready apps on both the App Store and Play Store, providing a unified and seamless enterprise experience.`,

      `Project Highlights:`,
      `- Delivered a tailored, enterprise-ready employee engagement solution aligned with Al Tayer Motors’ corporate culture.`,
      `- Enhanced workforce engagement by integrating recognition, learning, and wellness features in one platform.`,
      `- Successfully handled end-to-end deployment of the mobile app across major app distribution platforms.`,
    ],
  },
  {
    id: 3,
    class: "isotop-item mobile",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/truLens.png",
    subtitle: "Media Verification , Flutter",
    title: "TruLens",
    target: "#portfolio-2",
    category: ["Mobile"],
    project: "mobile app",
    languages: ["Flutter"],
    client: "Jionex IT Services Co. L.L.C",
    previewLink:
      "https://drive.google.com/file/d/1zpMRTJDAUMLCZ-CfWMpWsHo2-OV8_l-H/view?usp=sharing",
    previewName: "TruLens apk",
    desc: [
      `Description:`,
      `TruLens, developed by Jionex IT Services Co. L.L.C, is a C2PA-approved platform providing advanced solutions for verifying the authenticity, source, and context of digital media. It ensures tamper-proof content security and promotes transparency in digital media interactions. As a Flutter Developer, I built the iOS mobile app for TruLens, focusing on a clean and reusable MVVM architecture.`,

      `Key Features:`,
      `- UI/UX Design: Designed the Splash Screen, Dashboard, and core dashboard pages, including navigation elements like Bottom Navigation and Sidebar Menu.`,
      `- Authentication & Profile Management: Developed secure authentication pages and comprehensive profile pages for user registration and management.`,
      `- Media Capture & Explore Pages: Built capture/record pages for media uploads and verification, securely storing captured media in Flutter Secure Storage, and fetching/posting verified digital content. Designed Explore pages for browsing verified digital media.`,
      `- API Integration: Integrated backend APIs seamlessly following MVVM architecture to maintain scalable and maintainable code.`,
      `- Clean, Modular Code: Developed reusable widgets and implemented optimized code practices for a robust user experience.`,

      `Project Highlights:`,
      `- Delivered a responsive and intuitive iOS app with a clean Flutter-based architecture.`,
      `- Ensured secure API integration for media verification and user management.`,
      `- Designed user-friendly interfaces for core functionalities like capture, explore, and navigation.`,
    ],
  },
  {
    id: 4,
    class: "isotop-item web mobile",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/eWallet.png",
    subtitle: "Payment Gateway , RoR | React",
    title: "Payorio",
    target: "#portfolio-2",
    category: ["Web", "Mobile"],
    project: "web/mobile app",
    languages: ["RoR", "React"],
    client: "Payorio",
    previewLink: "#",
    // previewName: "www.envato.com",
    desc: [
      `Description:`,
      `This project involved the backend development of a web and mobile application using Ruby on Rails for global payment solutions. The application allows users to pay via their local e-wallet for any global payment transaction, providing a seamless and secure payment experience for both merchants and customers.`,

      `Key Features:`,
      `- Multi-Currency Support: Handles transactions in various currencies, converting them as needed for global payments.`,
      `- Secure Payment Gateway: Integrates with multiple e-wallets and payment gateways to ensure secure transactions.`,
      `- Merchant Management: Merchants can manage their accounts, track transactions, and view detailed reports.`,
      `- Customer Management: Customers can securely store their payment information, view transaction history, and manage their accounts.`,
      `- Role-Based Access Control (RBAC): Implements different roles for admins, merchants, and customers, each with specific permissions and access levels.`,
      `- Advanced Analytics: Provides detailed analytics and reporting for merchants to track their sales and payment trends.`,
      `- Mobile-Friendly: Ensures a seamless experience on both mobile and desktop platforms.`,
      `- Easy Integration: Offers APIs for easy integration with other systems and platforms.`,
      `- Fraud Detection: Includes advanced fraud detection mechanisms to ensure secure transactions.`,
      `- Notification System: Sends real-time notifications for transaction status, account updates, and more.`,
      `- User-Friendly Interface: Designed with a focus on usability, providing a smooth and intuitive experience for users.`,

      `Project Highlights:`,
      `- Enables global transactions through local e-wallets, expanding merchants' reach.`,
      `- Provides a secure and efficient payment solution for both web and mobile users.`,
      `- Enhances user engagement with real-time notifications and detailed analytics.`,
      `- Facilitates easy integration with other systems through APIs.`,
      `- Developed a robust backend system using Ruby on Rails, ensuring scalability and performance.`,
      `- Managed the project from design to deployment, ensuring a high-quality product.`,
    ],
  },
  {
    id: 5,
    class: "isotop-item web mobile",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/book.png",
    subtitle: "Sports , LAMP Stack",
    title: "Sporting Global Booking System",
    target: "#portfolio-2",
    category: ["Web", "Mobile"],
    project: "web/mobile app",
    languages: ["PHP", "Laravel"],
    client: "Sporting Global",
    previewLink: "#",
    // previewName: "www.envato.com",
    desc: [
      `Description:`,
      `This project involved the development of a full-stack web application using the LAMP stack (Linux, Apache, MySQL, and PHP Laravel framework with Blade templating) for Bookings. The application streamlines the booking of various sports venues, equipment, and coaches. Venues are also displayed on map view and offer easy payment through Stripe (card payment), Sporting Global Wallet, and cash payment. For easy signup, it includes Google OAuth.`,

      `Key Features:`,
      `- Role-Based Access Control (RBAC): We have 3 roles, super admin for user administration, venue admin for management of venues, equipment, and coaches, and users to use the app to book.`,
      `- Highly responsive: On mobile and tablet view, it looks like a mobile app, and on desktop/laptop, it looks like a web app.`,
      `- Comprehensive Booking System: Users can easily book sports venues, equipment, and coaches.`,
      `- Interactive Map View: Venues are displayed on an interactive map for easy location and selection.`,
      `- Secure Payments: Integrated with Stripe for card payments, Sporting Global Wallet, and cash payment options.`,
      `- Google OAuth: Simplified signup process using Google OAuth for quick and secure user registration.`,
      `- User-Friendly Interface: Intuitive and easy-to-navigate interface for a seamless user experience.`,
      `- Venue Management: Venue admins can manage bookings, availability, and details of venues, equipment, and coaches.`,
      `- Notification System: Users receive notifications for booking confirmations, reminders, and updates.`,
      `- Review and Rating System: Users can leave reviews and ratings for venues and coaches, helping others make informed decisions.`,
      `- Analytics and Reporting: Admins have access to detailed reports and analytics to monitor usage and performance.`,

      `Project Highlights:`,
      `- Streamlines the booking process for sports venues, equipment, and coaches.`,
      `- Provides a comprehensive and user-friendly booking solution.`,
      `- Ensures secure and convenient payment options.`,
      `- Enhances user engagement with reviews and ratings.`,
      `- Offers detailed analytics and reporting for administrators.`,
      `- Designed and developed from start to finish, including UI/UX design, backend development, and deployment.`,
    ],
  },
  {
    id: 6,
    class: "isotop-item mobile",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/tailorApp.png",
    subtitle: "E-commerce , React Native",
    title: "Tailoring Solutions",
    target: "#portfolio-2",
    category: ["Mobile"],
    project: "mobile app",
    languages: ["React Native"],
    client: "Costura Creativa",
    previewLink: "#",
    // previewName: "www.envato.com",
    desc: [
      ` Description:`,
      ` Tailoring Solutions is an ongoing mobile e-commerce application being built with React Native, targeting
      women who seek customized and tailored dressmaking services. The app caters to a variety of needs.`,

      ` Key Features:`,
      `- Browse & Order Pre-designed Dresses: Users can explore and purchase a curated selection of ready-made 
      designs offered by Costura Creativa.`,
      `- Custom Design Uploads:
      Unleash creativity! Users can upload sketches or photos of their dream dress for a truly personalized 
      experience.`,
      `- Fabric Selection & Management: The app facilitates fabric selection from Costura Creativa's offerings or 
      allows users to send their own fabric for tailoring.`,
      `- Convenient Delivery & Pickup: Leverage location services for seamless fabric pick-up and delivery of 
      the finished, tailored dress.`,
      `- Size Management: Maintain accurate size profiles for a perfect fit, simplifying future orders.`,
      `- Occasion-Based Shopping: Easily filter and browse dress options for specific occasions.`,
      `- Gifting Functionality: Surprise loved ones with the gift of a custom-designed dress!`,

      ` Project Highlights:`,
      `- Empowers women to express their unique style through custom and tailored dresses.`,
      `- Streamlines the dressmaking process with a user-friendly mobile e-commerce platform.`,
      `- Offers a blend of pre-designed options and complete design customization.`,
      `- Provides a convenient and personalized shopping experience.`,
    ],
  },
  {
    id: 7,
    class: "isotop-item web",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/sportingGlobal.png",
    subtitle: "ERP , LAMP Stack",
    title: "Sports Club Management",
    target: "#portfolio-2",
    category: ["Web"],
    project: "web app",
    languages: ["PHP", "Laravel"],
    client: "Sporting Global",
    previewLink: "#",
    // previewName: "www.envato.com",
    desc: [
      ` Description:`,
      ` This project involved the development of a full-stack web application ERP system using the 
      LAMP stack (Linux, Apache, MySQL, and PHP Laravel framework with Blade templating) for Sporting 
      Global. The application streamlines the management of various sports clubs, teams, and their personnel.`,

      ` Key Features:`,
      `- Role-Based Access Control (RBAC): Defines user permissions based on roles within the organization 
      (e.g., administrators, club managers, coaches, referees, players, medics, ).`,
      `- Comprehensive Sports Management: Handles diverse sporting activities including rugby, football, 
      cricket, badminton, and more.`,
      `- Detailed Player Management: Creates and maintains extensive player profiles from school level to national 
      and club level, tracking statistics such as: Goals/Points Scored, Red/Yellow Cards, Fitness Record,
      Fines Imposed, Match History`,
      `- Team Management: Allows club and team managers to easily manage team composition and assign player 
      reserves.`,
      `- Live Match Monitoring and Recording: Enables live monitoring and recording of matches, providing 
      valuable data for analysis.`,
      `- Player Transfers: Facilitates player transfers between schools, clubs, or national teams.`,
      `- Audience Engagement: Allows spectators to follow live sporting events through the application.`,

      ` Project Highlights:`,
      `- Developed a robust and scalable ERP system using the LAMP stack for comprehensive sports club management.`,
      `- Streamlined management processes for athletes, teams, and various sporting activities within Sporting Global.`,
      `- Enhanced data collection and analysis capabilities for informed decision-making.`,
      `- Increased fan engagement through live event tracking features.`,
    ],
  },
  {
    id: 8,
    class: "isotop-item web",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/bartawi.png",
    subtitle: "ERP , LAMP Stack",
    title: "Labor Hostel Management",
    target: "#portfolio-2",
    category: ["Web"],
    project: "web app",
    languages: ["PHP", "Yii"],
    client: "StayLinked | Bartawi",
    previewLink: "#",
    // previewName: "www.envato.com",
    desc: [
      ` Description:`,
      ` This project involved the development of a full-stack web application ERP system using 
      the LAMP stack (Linux, Apache, MySQL, and PHP Yii framework) to manage Bartawi's labor 
      hostel operations. The application caters to diverse rental needs, including:`,

      `- Employee Accommodation Management`,
      `- Individual Rental Agreements`,
      `- Corporate Rental Agreements`,

      ` Key Features:`,
      `- Role-Based Access Control (RBAC): Defines user permissions based on their role within 
      the organization.`,
      `- Flexible Rental Management:
      Streamlines the process of managing diverse rental contracts for employees, individual 
      tenants, and corporate clients.`,
      `- Automated Invoice Generation: Generates invoices automatically based on pre-defined rental 
      agreements.`,
      `- Transaction Tracking: Enables recording and tracking of financial transactions associated 
      with each rental contract.`,
      `- Comprehensive Management Tools: Visitor Management, Room Evaluation Management, Inspection 
      Tour Management, Smart Tenant Access Scanning, Ambulance Calling and Prevention Features, Meal 
      Distribution Management, Maintenance Request Management and Asset Management`,
      `- Admin Dashboard and Reporting:
      Provides a centralized platform for administrators to monitor key metrics and generate reports 
      for informed decision-making.`,

      ` Project Highlights:`,
      `- Developed a comprehensive and scalable ERP system within a LAMP stack environment.`,
      `- Streamlined diverse rental management processes for Bartawi.`,
      `- Enhanced operational efficiency and transparency through automated features and reporting tools.`,
    ],
  },
  {
    id: 9,
    class: "isotop-item web",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/scapnc.png",
    subtitle: "ERP, Full-Stack",
    title: "HR Recruitment Management",
    target: "#portfolio-2",
    category: ["Web"],
    project: "web app",
    languages: ["Java", "React"],
    client: "SCAPNC",
    previewLink: "#",
    // previewName: "http://217.160.150.199/hrdev/#/login",
    desc: [
      ` Description:`,
      `This project involved the development of a full-stack web application 
      ERP system for SCAPNC to streamline their recruitment management process. 
      The application is designed using Java Spring Boot and MariaDB for the backend 
      infrastructure and React for the user interface.`,

      ` Key Features:`,

      `- Role-Based Access Control (RBAC): Ensures secure access to functionalities based 
      on user roles within the organization.`,
      `- Job Posting and Approval Workflow: Streamlines the process for creating and approving 
      job openings within the company.`,
      `- Comprehensive Applicant Tracking System (ATS): Manages the entire candidate lifecycle 
      from application submission through shortlisting, interviews, selection, offer letters, 
      and acceptance.`,
      `- Advanced Reporting: Provides extensive reports for administrators and management to 
      gain insights into recruitment activities.`,
      `- Intuitive User Interface: Utilizes Bootstrap for a responsive design and integrates 
      React components such as data tables, date pickers, signature canvas, drag-and-drop 
      functionality, and more to provide a user-friendly experience.`,

      ` Project Highlights:`,
      `- Achieved a comprehensive recruitment management solution within a 6-month timeframe.`,
      `- Improved efficiency and transparency in the hiring process for SCAPNC.`,
      `- Enhanced data-driven decision making through detailed reporting.`,
    ],
  },
];
