import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExpandIcon, MapPinIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Modal } from '../ui/Modal';
import { projects } from '../../data/projects';
import { useQuote } from '../../contexts/QuoteContext';
import { buttonClasses, container, easeOut } from '../../utils/button';
import type { Project, ProjectCategory } from '../../types/content';

const filters: ('All' | ProjectCategory)[] = ['All', 'Residential', 'Commercial', 'Institutional'];

const categoryService: Record<ProjectCategory, string> = {
  Residential: 'Residential Solar Solutions',
  Commercial: 'Commercial & Industrial Solar',
  Institutional: 'Solar System Installation'
};

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const { requestQuote } = useQuote();
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-white py-20 lg:py-28">
      <div className={container}>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="projects-heading"
            title="Our Solar Installations"
            intro="Solar systems across homes, businesses and institutions — each designed around the site and how it uses energy." />
          
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {filters.map((f) =>
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`h-10 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              filter === f ? 'bg-ink text-white' : 'bg-surface text-ink-600 hover:bg-brand-50 hover:text-brand-800'}`
              }>
              
                {f}
              </button>
            )}
          </div>
        </div>

        <motion.ul layout className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) =>
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: easeOut }}>
              
                <button
                type="button"
                onClick={() => setSelected(project)}
                className="group block w-full rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4">
                
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
                    <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105" />
                  
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-800">
                      {project.category}
                    </span>
                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <ExpandIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink transition-colors duration-150 group-hover:text-brand-700">
                    {project.title}
                  </h3>
                  {project.location &&
                <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-500">
                      <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                      {project.location}
                    </p>
                }
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{project.description}</p>
                </button>
              </motion.li>
            )}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-12 text-sm text-ink-500">
          Images shown are representative. Synowatt project photos and locations will be added here.
        </p>
      </div>

      <Modal open={selected !== null} onClose={() => setSelected(null)} labelledBy="project-modal-title">
        {selected &&
        <div>
            <img src={selected.image} alt={selected.title} className="aspect-[16/10] w-full object-cover" />
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold text-brand-700">{selected.category} installation</p>
              <h3 id="project-modal-title" className="mt-1 text-2xl font-extrabold tracking-tight text-ink">
                {selected.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{selected.description}</p>
              <button
              type="button"
              onClick={() => {
                const service = categoryService[selected.category];
                setSelected(null);
                requestQuote(service, `I'd like a system similar to your "${selected.title}" project.`);
              }}
              className={`${buttonClasses('primary', 'md')} mt-6`}>
              
                Request a similar system
              </button>
            </div>
          </div>
        }
      </Modal>
    </section>);

}