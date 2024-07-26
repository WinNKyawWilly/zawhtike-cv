"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import Modal from "./Modal";
import { motion, useInView } from "framer-motion";
import projectsData from "./projectsData";

const ShowcaseSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedItem, setSelectedItem] = useState(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredItems = projectsData.filter((item) =>
    item.tags.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience">
      <h2 className="text-center text-4xl font-bold text-white-800 mt-4 mb-8 md:mb-12">
        Experiences
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Art"
          isSelected={tag === "Interviews"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Promo"
          isSelected={tag === "Articles"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Milestones"
          isSelected={tag === "Articles"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredItems.map((item, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              imgUrl={item.image.src}
              onClick={() => setSelectedItem(item)}
            />
          </motion.li>
        ))}
      </ul>
      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title}
        content={selectedItem?.content}
        image={selectedItem?.image}
        labels={selectedItem?.labels}
        buttons={selectedItem?.buttons}
        projectLinks={selectedItem?.projectLinks}
      />
    </section>
  );
};

export default ShowcaseSection;