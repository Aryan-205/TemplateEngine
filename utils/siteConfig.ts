// export const pageTemplates = {
//   // TEMPLATE 1: Executive Dashboard
//   user1: {
//     navbar:{
//       nav1:"",
//       nav2:"",
//       nav3:""
//     },
//     hero:{
//       image:"",
//       text:""
//     },
//     middle:{
//       color:"",
//       text:""
//     },
//     end:{
//       image:"",
//       text:""
//     },
//     footer:{
//       mywebsite:"",
//       mynumber:""
//     }
//   },
// };

export const weddingTemplates = {
  // Template 1: The "Aryan & Maniya" (From your image)
  classicOrange: {
    navLinks: ["Home", "Photos", "Blog", "Guests", "Contact"],
    names: "Aryan & Maniya",
    heroImg: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
    date: "8th April, 2026",
    location: "Jaipur, Purulia",
    themeColor: "#ff7d45",
    story:
      "We're very happy to share this special occasion with you. After 5 beautiful years together, we're ready to begin this new chapter. Your presence would make our special day complete.",
    detailImg: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",

    // Photo Gallery
    photos: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552",
        caption: "Our First Date",
      },
      {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
        caption: "The Proposal",
      },
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
        caption: "Engagement Day",
      },
      {
        url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
        caption: "Pre-Wedding Shoot",
      },
      {
        url: "https://images.unsplash.com/photo-1510076857177-7470076d4098",
        caption: "Family Together",
      },
      {
        url: "https://images.unsplash.com/photo-1529636798458-92182e662485",
        caption: "Love in Paris",
      },
    ],

    // Blog Posts
    blogPosts: [
      {
        title: "How We Met",
        date: "January 15, 2021",
        content:
          "It was a rainy evening in Mumbai when our paths first crossed. Aryan was running late for a meeting, and I was trying to find shelter from the sudden downpour. We ended up sharing an umbrella, and the rest, as they say, is history. That 10-minute walk turned into a 3-hour coffee conversation.",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
      },
      {
        title: "The Proposal Story",
        date: "December 25, 2025",
        content:
          "Under the stars at our favorite beach in Goa, with fairy lights and our song playing softly in the background, Aryan got down on one knee. I couldn't stop crying happy tears! It was the most magical moment of our lives, surrounded by close friends who had secretly flown in for the surprise.",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
      },
      {
        title: "Wedding Preparations Begin",
        date: "February 1, 2026",
        content:
          "The chaos has officially begun! From venue hunting to cake tasting, every moment has been an adventure. We've laughed, we've stressed, and we've grown even closer through it all. Can't wait to share all the behind-the-scenes moments with you!",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
      },
    ],

    // Guest List
    guests: [
      { name: "Rahul Sharma", relation: "Best Man", status: "confirmed" },
      { name: "Priya Patel", relation: "Maid of Honor", status: "confirmed" },
      { name: "Vikram Singh", relation: "Groomsman", status: "confirmed" },
      { name: "Anjali Gupta", relation: "Bridesmaid", status: "confirmed" },
      { name: "Raj & Meera Kapoor", relation: "Family", status: "confirmed" },
      { name: "Dr. Arun Mehta", relation: "Family Friend", status: "pending" },
      {
        name: "Neha & Karan Joshi",
        relation: "College Friends",
        status: "confirmed",
      },
      { name: "The Malhotra Family", relation: "Neighbors", status: "pending" },
      { name: "Simran Kaur", relation: "Cousin", status: "confirmed" },
      {
        name: "Arjun & Tara Reddy",
        relation: "Work Colleagues",
        status: "declined",
      },
    ],

    // Contact Info
    contact: {
      bride: {
        name: "Maniya",
        phone: "+91 98765 43210",
        email: "maniya@wedding.com",
      },
      groom: {
        name: "Aryan",
        phone: "+91 98765 43211",
        email: "aryan@wedding.com",
      },
      venue: "Royal Palace Gardens, Jaipur",
      venueAddress: "123 Palace Road, Jaipur, Rajasthan 302001",
      venueMapUrl: "https://maps.google.com/?q=Jaipur+Palace",
      weddingPlanner: {
        name: "Celebrations by Ritu",
        phone: "+91 98765 00000",
      },
    },
  },

  // Template 2: Modern Minimal (Sage Green)
  modernMinimal: {
    navLinks: ["Home", "Photos", "Blog", "Guests", "Contact"],
    names: "Bravo & Arsalan",
    heroImg: "https://images.unsplash.com/photo-1519741497674-611481863552",
    date: "June 12, 2026",
    location: "Napa Valley, CA",
    themeColor: "#7d8f69",
    story:
      "Join us under the vines as we say I do. Our journey began with a shared love for travel and adventure, and now we're ready for our greatest adventure yet.",
    detailImg: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552",
        caption: "Vineyard Magic",
      },
      {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
        caption: "Sunset Walk",
      },
      {
        url: "https://images.unsplash.com/photo-1529636798458-92182e662485",
        caption: "City Lights",
      },
    ],
    blogPosts: [
      {
        title: "Our Love Story",
        date: "March 2026",
        content: "From strangers to soulmates - our beautiful journey.",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
      },
    ],
    guests: [
      { name: "Alex Thompson", relation: "Best Man", status: "confirmed" },
      {
        name: "Sarah Mitchell",
        relation: "Maid of Honor",
        status: "confirmed",
      },
    ],
    contact: {
      bride: {
        name: "Arsalan",
        phone: "+1 555-0101",
        email: "arsalan@wedding.com",
      },
      groom: {
        name: "Bravo",
        phone: "+1 555-0102",
        email: "bravo@wedding.com",
      },
      venue: "Vineyard Estate, Napa Valley",
      venueAddress: "456 Wine Country Rd, Napa, CA 94558",
      venueMapUrl: "https://maps.google.com/?q=Napa+Valley",
    },
  },

  // Template 3: Royal Midnight (Dark Blue/Gold)
  royalMidnight: {
    navLinks: ["Home", "Photos", "Blog", "Guests", "Contact"],
    names: "Tarun & Kushal",
    heroImg:
      "https://plus.unsplash.com/premium_photo-1711189389479-922a74f2263a?q=80&w=1740&auto=format&fit=crop",
    date: "December 20, 2026",
    location: "Umaid Bhawan Palace",
    themeColor: "#1a2a44",
    story:
      "A celebration of tradition and modern love. Two hearts, one destiny.",
    detailImg: "https://images.unsplash.com/photo-1510076857177-7470076d4098",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1510076857177-7470076d4098",
        caption: "Palace Dreams",
      },
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
        caption: "Royal Affair",
      },
    ],
    blogPosts: [
      {
        title: "A Royal Beginning",
        date: "October 2026",
        content: "How we decided on the palace of our dreams.",
        image: "https://images.unsplash.com/photo-1510076857177-7470076d4098",
      },
    ],
    guests: [
      { name: "Royal Family", relation: "Honored Guests", status: "confirmed" },
    ],
    contact: {
      bride: {
        name: "Kushal",
        phone: "+91 98000 00001",
        email: "kushal@wedding.com",
      },
      groom: {
        name: "Tarun",
        phone: "+91 98000 00002",
        email: "tarun@wedding.com",
      },
      venue: "Umaid Bhawan Palace",
      venueAddress: "Circuit House Rd, Jodhpur, Rajasthan 342006",
      venueMapUrl: "https://maps.google.com/?q=Umaid+Bhawan+Palace",
    },
  },
};
