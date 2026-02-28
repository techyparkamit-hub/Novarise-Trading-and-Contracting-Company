import { motion } from 'motion/react';
import { Building2, Calendar, ArrowRight } from 'lucide-react';

const allProjects = [
  {
    title: "Jizan Economic City Consolidated Contractors",
    client: "Consolidated Contractors",
    start: "13/06/2021",
    end: "Running..",
    image: "https://images.unsplash.com/photo-1541888087425-ce81dcfa4892?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "The Red Sea Development Company (The Red Sea Project)",
    client: "Red Sea Global",
    start: "01/02/2019",
    end: "Running..",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "The Red Sea Development Company (The Amaala Project)",
    client: "Red Sea Global",
    start: "26/09/2018",
    end: "Running..",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Jubail Desalination Project",
    client: "SWCC",
    start: "06/05/2018",
    end: "06/08/2018",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Yamama Cement Riyadh",
    client: "Yamama Cement",
    start: "09/04/2015",
    end: "09/09/2015",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Al Mojama Electricity",
    client: "SEC",
    start: "03/10/2018",
    end: "03/09/2019",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Eastern Electricity Company Auction",
    client: "SEC",
    start: "24/12/2019",
    end: "24/01/2020",
    image: "https://images.unsplash.com/photo-1558383331-f520f2888351?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Aramco Ju’aymah and Abqaiq auctions",
    client: "Saudi Aramco",
    start: "13/06/2021",
    end: "21/07/2021",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Allegiance to King Abdulaziz Port, Dammam",
    client: "MAWANI",
    start: "31/01/2021",
    end: "04/05/2021",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Rabigh 4 Independent Water Project",
    client: "WEC",
    start: "14/07/2023",
    end: "Running..",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-novarise-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              A track record of excellence in implementing important and large projects for the public and private sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-novarise-blue/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-novarise-blue mb-6 group-hover:text-novarise-orange transition-colors">
                    {project.title}
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 text-zinc-600">
                      <Building2 className="w-5 h-5 text-novarise-orange flex-shrink-0 mt-0.5" />
                      <span><span className="font-bold text-novarise-blue">Client:</span> {project.client}</span>
                    </div>
                    <div className="flex items-start gap-3 text-zinc-600">
                      <Calendar className="w-5 h-5 text-novarise-orange flex-shrink-0 mt-0.5" />
                      <span>{project.start} — {project.end}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-novarise-orange font-bold text-sm group-hover:gap-3 transition-all">
                    View Project Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
