'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// Sample team data - you should replace this with your actual team data
const teamData = {
  "2024/2025": [
    {
      name: 'Ruvarashe Sadya',
      role: 'Lead Organiser',
      department: 'Leadership',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Bartels Atindana',
      role: 'Co-organizer',
      department: 'Leadership',
      image: '/team/placeholder.jpg',
    },
    // Curation Department
    {
      name: 'Ewuradwoa Ayesu',
      role: 'Team Lead',
      department: 'Curation',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Shifa Amankwa-Gabbey',
      role: 'Member',
      department: 'Curation',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Gilchrist Sedem',
      role: 'Member',
      department: 'Curation',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Jessica Vanderpuije',
      role: 'Member',
      department: 'Curation',
      image: '/team/placeholder.jpg',
    },
    // Design Department
    {
      name: 'Nana Kwaku Amoako',
      role: 'Team Lead',
      department: 'Design',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Nadine Ayeh',
      role: 'Co-lead',
      department: 'Design',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Nana Daasebre Kwaku Adu-Gyamfi',
      role: 'Member',
      department: 'Design',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Jescaps Nyarko',
      role: 'Member',
      department: 'Design',
      image: '/team/placeholder.jpg',
    },
    // Finance Department
    {
      name: 'Daniel Oppong-Amponsah',
      role: 'Team Lead',
      department: 'Finance',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Bryan Achel',
      role: 'Member',
      department: 'Finance',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Joshua Chiefo-Ejiofobiri',
      role: 'Member',
      department: 'Finance',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Hubert Andoh Morrison',
      role: 'Member',
      department: 'Finance',
      image: '/team/placeholder.jpg',
    },
    // Event Management Department
    {
      name: 'Melanie Chitehwe',
      role: 'Team Lead',
      department: 'Event Management',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Nyleli Amoah',
      role: 'Member',
      department: 'Event Management',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Amy-Anne Ashitey',
      role: 'Member',
      department: 'Event Management',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Nyameye Awurama Ampomaa',
      role: 'Member',
      department: 'Event Management',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Annie Addison',
      role: 'Member',
      department: 'Event Management',
      image: '/team/placeholder.jpg',
    },
    // Public Relations Department
    {
      name: 'Tehilla Ogochukwu-Nweke',
      role: 'Team Lead',
      department: 'Public Relations',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Rachael',
      role: 'Co-lead (Social media handler)',
      department: 'Public Relations',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Benetta Avaga',
      role: 'Member',
      department: 'Public Relations',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Austine Awiah',
      role: 'Member',
      department: 'Public Relations',
      image: '/team/placeholder.jpg',
    },
  ],
  "2022/2023": [
    // Leadership
    {
      name: 'Catherine Delight',
      role: 'Licensee & Lead Organizer',
      department: 'Leadership',
      image: '/team/kate.b32d8726da514677f675.jpg',
    },
    {
      name: 'Justin Adomakoh',
      role: 'Co-Organizer',
      department: 'Leadership',
      image: '/team/Justin Adomakoh.a4f6086b04eca2d6ffbf.jpg',
    },
    // Curation Team
    {
      name: 'Wepea Buntugu',
      role: 'Member',
      department: 'Curation',
      image: '/team/Wepea_Buntugu.371ac8bb66e01ace8d3f.jpg',
    },
    {
      name: 'Maxine Brenya',
      role: 'Member',
      department: 'Curation',
      image: '/team/Maxine_Brenya.f85075cbaaf8c97d8bde.jpg',
    },
    {
      name: 'Nana Yaa Owusu',
      role: 'Member',
      department: 'Curation',
      image: '/team/Nana_Yaa_Owusu.039b948b3e3f3829579d.jpg',
    },
    {
      name: 'Rachael Mudendi',
      role: 'Member',
      department: 'Curation',
      image: '/team/Rachael Mugendi.79f90f2255e41a4dcddd.jpg',
    },
    // Design Team
    {
      name: 'Ewura Abena Asmah',
      role: 'Team Lead',
      department: 'Design',
      image: '/team/ewurabena.f93bab8e9d169053f8ce.jpg',
    },
    {
      name: 'Faddal Ibrahim',
      role: 'Design and Website Team',
      department: 'Design',
      image: '/team/Faddal Ibrahim.51de6b060fd5bf550a25.jpg',
    },
    {
      name: 'Divine Ishmiwe',
      role: 'Member',
      department: 'Design',
      image: '/team/Divine Ishimwe.7530fd6b0e74a7d6b945.jpg',
    },
    {
      name: 'Clifford Yeboah',
      role: 'Member',
      department: 'Design',
      image: '/team/Clifford.5a5bc874892728ce8dd1.jpg',
    },
    // Event Management
    {
      name: 'Kezia Asare',
      role: 'Team Lead',
      department: 'Event Management',
      image: '/team/Kezia Asare.668099b44b54093aa0be.jpg',
    },
    {
      name: 'Noah Adasi',
      role: 'Member',
      department: 'Event Management',
      image: '/team/noah.aa3ad93f06cdcc1eb8fb.jpg',
    },
    {
      name: 'Bright Antwi',
      role: 'Member',
      department: 'Event Management',
      image: '/team/Bright Anim Antwi.d6fae2d3baf1443688fe.jpg',
    },
    {
      name: 'Nice Caillie',
      role: 'Member',
      department: 'Event Management',
      image: '/team/Nice Cailie Ineza.e063fee0db113eaa0e1c.jpg',
    },
    // Finance
    {
      name: 'Eric Gadzi',
      role: 'Finance Lead',
      department: 'Finance',
      image: '/team/Eric_Gadzi.faef17bd94fd2ce17617.jpeg',
    },
    {
      name: 'Tinashe Kanukai',
      role: 'Finance Co-Lead',
      department: 'Finance',
      image: '/team/Tinashe_Kanukai.9e0995e07f3c158c8ce2.jpg',
    },
    // Marketing
    {
      name: 'Ayeyi Ohene-Adu',
      role: 'Team Lead',
      department: 'Marketing',
      image: '/team/Ayeyi_Ohene-Adu.4ef2d6e3cfad67e5119a.jpg',
    },
    {
      name: 'Selasie Azumah',
      role: 'Co-Lead',
      department: 'Marketing',
      image: '/team/selasie.e62155e3d5a54751545c.jpg',
    },
    {
      name: 'Hortense Umubyei',
      role: 'Member',
      department: 'Marketing',
      image: '/team/hortense.bd30fe35245b9af7ba2b.jpg',
    },
    {
      name: 'Tsatsu Agbettor',
      role: 'Member',
      department: 'Marketing',
      image: '/team/Tsatsu_Agbettor.d140aef1b8b068da68c8.jpg',
    },
    {
      name: 'Samantha Reindorf',
      role: 'Member',
      department: 'Marketing',
      image: '/team/samantha.8b05235d7e0da51cb3dc.jpg',
    },
    // Media Team
    {
      name: 'Alosius Akonteh',
      role: 'Photography Team Lead',
      department: 'Media',
      image: '/team/Alosius Akonteh.e4a6fce4c33e6af79a5c.jpg',
    },
    {
      name: 'Russell Okine',
      role: 'Videography Team Lead',
      department: 'Media',
      image: '/team/russel.d2639cac13fae621f1b2.jpeg',
    },
    {
      name: 'Emmanuella Turkson',
      role: 'Videography Team',
      department: 'Media',
      image: '/team/Emmanuella_Abledu-Turkson.539dac9a5744d44bd3bd.jpg',
    },
    {
      name: 'Enoch Aho',
      role: 'Videography Team',
      department: 'Media',
      image: '/team/Enoch.f9d8154688053e2088db.jpg',
    },
  ]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

// Group members by department
const groupByDepartment = (members) => {
  return members.reduce((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = [];
    }
    acc[member.department].push(member);
    return acc;
  }, {});
};

export default function TeamPage() {
  const [selectedYear, setSelectedYear] = useState("2024/2025")
  const years = Object.keys(teamData).sort((a, b) => {
    const yearA = parseInt(a.split('/')[0])
    const yearB = parseInt(b.split('/')[0])
    return yearB - yearA
  })

  const groupedMembers = groupByDepartment(teamData[selectedYear]);
  const departments = Object.keys(groupedMembers);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
            Our Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet the passionate individuals who make TEDxAshesiUniversity possible.
          </p>
        </motion.div>

        {/* Year selector */}
        <motion.div 
          className="flex justify-center space-x-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {years.map((year) => (
            <motion.button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedYear === year
                  ? 'bg-red-600 text-white shadow-lg hover:bg-red-700'
                  : 'bg-white hover:bg-gray-100 shadow-md'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {year}
            </motion.button>
          ))}
        </motion.div>

        {/* Team grid by department */}
        {departments.map((department) => (
          <motion.div
            key={department}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800">{department}</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {groupedMembers[department].map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <motion.div 
                    className="p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-red-600 font-medium">{member.role}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 