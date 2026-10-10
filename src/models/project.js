const projects = [
  {
    name: 'WorkForce Portal',
    description:
      'A robust, scalable, and secure centralized platform designed to streamline workforce management and authentication. It serves as a mission-critical gateway that bridges the gap between employee resource access and administrative oversight.',
  },
  {
    name: 'Library Management System',
    description:
      'A scalable and modular Library Management System built with Django, designed to handle book cataloging, inventory control, borrowing workflows, reservations, and financial tracking.',
  },
  {
    name: 'Dungeon Escape',
    description:
      'A text-based adventure game where players navigate through a mysterious dungeon, fighting monsters and avoiding powerful foes to climb up the dungeon.',
  },
]

export const projectModel = {
  getAll() {
    return [...projects]
  },

  getByName(name) {
    return projects.find((project) => project.name === name)
  },
}
