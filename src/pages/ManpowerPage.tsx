import { motion } from 'motion/react';
import { Users, Search } from 'lucide-react';
import { useState } from 'react';

const jobCategories = [
  "QC Engineer", "Electrical Engineer", "I&C Engineer", "Mechanical Engineer", "Piping Engineer",
  "Civil Engineer", "I & P Engineer", "Testing Engineer", "Commercial Engineer", "Safety Engineer",
  "HVAC Engineer", "Fire Fighting Engineer", "Structural Engineer", "Junior Engineer", "GRP Pipe Engineer",
  "HVAC Technician", "Instrument Technician", "Generator Technician", "Mechanical Technician", "HR /Admin. Officer",
  "Pipe Installation Technician", "Lab Technician", "Electrical Technician", "Mill wright Technician", "Fire Fighting Technician",
  "General Technician", "Vehicle Technician", "Technician", "Safety Officer", "QC Inspector",
  "Scaffolder Inspector", "Structural QC", "Mechanical Equipment Inspector", "Document Controller", "QA/QC Document Controller",
  "Finance Accountant", "Designer", "Auto CAD Operator", "Permit Receiver", "Security",
  "Purchaser", "Surveyor", "Storekeeper", "Material Keeper", "Structural Supervisor",
  "Safety Supervisor", "Scaffold Supervisor", "Civil Supervisor", "Electrical Supervisor", "I&C Supervisor",
  "Pipe Supervisor", "Mechanical Equipment installation supervisor", "Mechanical Equipment installation foreman", "Structural Foreman", "Civil Foreman",
  "Electrical Foreman", "I&C Foreman", "Pipe Foreman", "General Foreman", "Cook",
  "Foreman", "Scaffolder Foreman", "Fire Fighting Foreman", "Rigger Level 1", "Rigger Level 2",
  "Rigger Level 3", "Boom Truck Operator", "Forklift Operator", "Manlift Operator", "Overhead Crane Operator",
  "Tower Crane Operator", "Mobile Crane Operator", "Gantry Crane Operator", "Loader Operator", "Roller Operator",
  "Excavator Operator", "CCR Operator", "Crawler Crane Operator (≥150t)", "Flagman", "Cook Helper",
  "Structural Welder", "TIG&ARC Welder", "Welder Multi", "Welder 6G/5G/4G", "Alloy Welder",
  "Mechanical Fitter", "Electrical Fitter", "Instrument Fitter", "Pipe Fitter", "Laminator",
  "HDPE piping installer", "Cable termination", "Electrical erector", "Pedestrian junction box installer", "Duct installation",
  "Steel Fitter/Steel Erector", "Fitter", "Erector", "Sandblaster", "Tea boy",
  "Spray Painter", "Painter", "Insulator", "Iron Worker", "Carpenter",
  "Mason", "Scaffolder", "Electrician", "Plumber", "Fire Fighter",
  "Maintenance Worker", "Fabricator", "Pipe Fabricator", "Gas Cutter", "Grinder",
  "Helper", "Labor", "H. Driver", "L. Driver", "Cleaner"
];

export default function ManpowerPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = jobCategories.filter(cat => 
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-novarise-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">Manpower Supply</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Providing skilled and experienced workforce across 120+ categories to drive your projects forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-novarise-blue mb-2">Job Categories</h2>
              <p className="text-zinc-600">Browse our extensive list of available professional categories.</p>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-novarise-orange transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 20) * 0.02 }}
                className="p-4 rounded-xl border border-zinc-100 bg-zinc-50 hover:bg-novarise-blue hover:text-white transition-all group flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-novarise-orange/10 text-novarise-orange flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <Users className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm">{category}</span>
              </motion.div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-400 text-lg">No categories found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-novarise-blue mb-2">120+</div>
              <div className="text-novarise-orange font-bold uppercase tracking-widest text-sm">Professional Categories</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-novarise-blue mb-2">50+</div>
              <div className="text-novarise-orange font-bold uppercase tracking-widest text-sm">Specialists</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-novarise-blue mb-2">100%</div>
              <div className="text-novarise-orange font-bold uppercase tracking-widest text-sm">Reliability</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
