/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },colors: {
        'custom-html': '#e34c26',
        'custom-css': '#264de4',
        'custom-javascript': '#f7df1e',
        'custom-typescript': '#007acc',
        'custom-react': '#61dafb',
        'custom-nextjs': '#000000',
        'custom-nodejs': '#68a063',
        'custom-git': '#f34f29',
        'custom-github': '#181717',
        'custom-tailwind': '#38b2ac',
        'custom-prisma': '#2d3748',
        'custom-mongodb': '#47a248',
        'custom-docker': '#0db7ed',
        'custom-gitlab': '#fca121',
        'custom-redux': '#764abc',
        'custom-sass': '#cc6699',
        'custom-sanityio': '#f03e2f',
        'custom-express': '#828282',
        'custom-firebase': '#ffca28',
        'custom-socketio': '#010101',
        'custom-webrtc': '#34a853',
        'custom-angular': '#dd0330',
        'custom-bootstrap': '#563d7c',
        'custom-materialui': '#0081cb',
        'custom-csharp': '#68217a',
        'custom-dotnet': '#512bd4',
        'custom-framermotion': '#e10098',
        'custom-python': '#306998', // Use the base color as gradient may not be supported
        'custom-fastapi': '#05998b',
        'custom-sqlite': '#003b57',
      },
    },
  },
  plugins: [],
}
