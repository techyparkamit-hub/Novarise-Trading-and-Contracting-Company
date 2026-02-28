import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    client: 'The Red Sea Development Company',
    date: 'Started 01/02/2019 - Currently running',
    title: 'The Red Sea Project',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    client: 'Consolidated Contractors',
    date: 'Running since 13/06/2021',
    title: 'Jizan Economic City',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    client: 'Independent Water Project',
    date: 'Running successfully since 14/07/2023',
    title: 'Rabigh 4',
    image: 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 4,
    client: 'Saudi Aramco',
    date: 'Completed June - July 2021',
    title: 'Ju\'aymah and Abqaiq Auctions',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-novarise-orange/10 text-novarise-orange font-bold text-sm uppercase tracking-wider mb-6">
              Our Work
            </div>
            <h2 className="text-4xl font-bold text-novarise-blue mb-4">Recent Projects</h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              A showcase of our successful engagements across the public and private sectors.
            </p>
          </div>
          <Link to="/projects" className="hidden md:flex items-center gap-2 text-novarise-orange font-bold hover:text-novarise-orange/80 transition-colors group">
            View all projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to="/projects"
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row border border-zinc-100"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col sm:flex-row w-full"
              >
                <div className="relative h-64 sm:h-auto sm:w-2/5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-novarise-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                    <div className="bg-novarise-orange text-white px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2 shadow-xl shadow-novarise-orange/20">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-novarise-blue/10 group-hover:bg-transparent transition-colors z-10" />
                </div>
                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-novarise-blue group-hover:text-novarise-orange transition-colors mb-4">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-zinc-600 text-sm">
                      <Building2 className="w-5 h-5 text-novarise-orange flex-shrink-0" />
                      <span><span className="font-semibold text-novarise-blue">Client:</span> {project.client}</span>
                    </div>
                    <div className="flex items-start gap-3 text-zinc-600 text-sm">
                      <Calendar className="w-5 h-5 text-novarise-orange flex-shrink-0" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-novarise-orange font-bold text-sm group-hover:gap-3 transition-all mt-auto">
                    Project details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link to="/projects" className="inline-flex items-center gap-2 text-novarise-orange font-bold hover:text-novarise-orange/80 transition-colors group">
            View all projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
