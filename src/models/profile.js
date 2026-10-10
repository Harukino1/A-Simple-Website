const profile = {
  name: 'Jethro Salindato',
  title: 'Information Technology Student & Software Developer',
  about:
    "Hello! I'm a Information Technology student passionate about game development and game architecture. My current academic focus centers on mastering the intricacies of game design, programming, and the underlying systems that drive immersive experiences. I am eager to apply my skills in real-world projects and contribute to innovative gaming solutions.",
}

export const profileModel = {
  getAll() {
    return { ...profile }
  },

  getHeader() {
    return {
      name: profile.name,
      title: profile.title,
    }
  },

  getAbout() {
    return profile.about
  },
}
