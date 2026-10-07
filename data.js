const day = n => { const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate()+n); return d; };

// Dates are relative to today so the demo data always looks current.
const EVENTS = [
  {id:1,title:"Hack4Campus 24-Hour Hackathon",cat:"Tech",off:3,time:"9:00 AM",venue:"Innovation Lab, Block C",club:"Coding Club",seats:80,taken:61,desc:"Build a solution for a real campus problem in teams of 3–4. Mentors from industry, free meals, and prizes for the top three teams."},
  {id:2,title:"Intro to Machine Learning Workshop",cat:"Workshop",off:5,time:"2:00 PM",venue:"Seminar Hall 2",club:"AI Society",seats:60,taken:34,desc:"A hands-on session covering regression, classification and a first model in Python. Bring a laptop with Python installed."},
  {id:3,title:"Spandan Annual Cultural Fest",cat:"Cultural",off:12,time:"4:00 PM",venue:"Main Auditorium",club:"Cultural Committee",seats:400,taken:312,desc:"Dance, music, drama and stand-up from every department. Doors open at 3:30 PM."},
  {id:4,title:"Inter-Department Cricket League",cat:"Sports",off:2,time:"8:00 AM",venue:"Central Ground",club:"Sports Council",seats:150,taken:150,desc:"Knockout T10 matches across all departments. Spectator registration is open; teams register through the sports office."},
  {id:5,title:"Career Talk: Cracking Product Roles",cat:"Career",off:6,time:"11:00 AM",venue:"Seminar Hall 1",club:"Placement Cell",seats:120,taken:47,desc:"Two alumni product managers share how they prepared, what interviews look like, and answer your questions."},
  {id:6,title:"Photography Walk & Editing Basics",cat:"Workshop",off:9,time:"6:30 AM",venue:"Meet at Main Gate",club:"Lens Club",seats:30,taken:22,desc:"Shoot the campus at sunrise, then learn quick editing techniques. Phone cameras are welcome."},
  {id:7,title:"Open Mic Night",cat:"Cultural",off:1,time:"6:00 PM",venue:"Amphitheatre",club:"Literary Society",seats:100,taken:58,desc:"Poetry, music, comedy or just listening. Sign up to perform on the spot."},
  {id:8,title:"Web Development Bootcamp",cat:"Tech",off:15,time:"10:00 AM",venue:"Computer Lab 3",club:"Coding Club",seats:40,taken:12,desc:"A full-day build session: HTML, CSS and JavaScript. You leave with a deployed portfolio page."},
  {id:9,title:"Blood Donation Camp",cat:"Social",off:7,time:"9:30 AM",venue:"Health Centre",club:"NSS Unit",seats:200,taken:96,desc:"Donate and save lives. Free health check-up for every donor, refreshments included."},
  {id:10,title:"Inter-College Quiz Championship",cat:"Career",off:20,time:"1:00 PM",venue:"Seminar Hall 2",club:"Quiz Club",seats:64,taken:20,desc:"Teams of two compete across general knowledge, tech, sports and pop culture."},
  {id:11,title:"Robotics: Build Your First Line Follower",cat:"Tech",off:25,time:"10:00 AM",venue:"Electronics Lab",club:"Robotics Club",seats:25,taken:25,desc:"Assemble and program a line-following robot. Kits are provided."},
  {id:12,title:"Morning Yoga & Mindfulness",cat:"Social",off:4,time:"6:30 AM",venue:"Sports Complex Lawn",club:"Wellness Cell",seats:50,taken:18,desc:"A beginner-friendly session to help you de-stress before the semester gets busy."}
].map(e => ({...e, date: day(e.off)}));
