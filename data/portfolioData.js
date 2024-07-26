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
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
];
