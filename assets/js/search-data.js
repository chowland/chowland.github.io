// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Here you can find all my peer-reviewed publications, preprints, theses and other reports. If there are any documents here that you cannot access, please get in touch and I would be happy to send you a copy.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of projects I&#39;m interested in. These are split into two broad categories, but interesting overlaps between these categories often arise.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "An overview of the software I work on. I try to keep as much open-source as possible, but some very preliminary work may be kept private until it&#39;s ready.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "An overview of the courses I am currently teaching at UCD",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of my research group will appear here, stay tuned!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-the-website-has-finally-been-updated",
          title: 'The website has finally been updated!',
          description: "",
          section: "News",},{id: "projects-ice-turbulence-interactions",
          title: 'ice-turbulence interactions',
          description: "Modelling the complexities of ice-ocean boundary layers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ice-turbulence/";
            },},{id: "projects-internal-waves-and-ocean-mixing",
          title: 'internal waves and ocean mixing',
          description: "What are the key breakdown mechanisms of internal waves driving mixing in the ocean?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mixing/";
            },},{id: "projects-moist-atmospheric-convection",
          title: 'moist atmospheric convection',
          description: "Capturing the fundamentals of condensation-driven convection in simple models (preprint coming soon)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/moist_convection/";
            },},{id: "projects-numerical-methods-for-melting-objects",
          title: 'numerical methods for melting objects',
          description: "Developing and analysing phase-field and immersed boundary methods",
          section: "Projects",handler: () => {
              window.location.href = "/projects/numerics_melting/";
            },},{id: "projects-pore-scale-dynamics-of-convection",
          title: 'pore-scale dynamics of convection',
          description: "Applying immersed boundary methods to simulate dispersion in porous media",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pore-scale/";
            },},{id: "projects-nonlinear-effects-in-shear-instabilities",
          title: 'nonlinear effects in shear instabilities',
          description: "Linear stability theory tells us about the initial growth of small perturbations. But what happens afterwards?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shear_instabilities/";
            },},{id: "projects-stratified-turbulence",
          title: 'stratified turbulence',
          description: "Investigating (non-)universal properties of turbulence in stratified environments, and how this may be affected by factors such as differential diffusion and helicity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stratified_turbulence/";
            },},{id: "projects-turbulent-convection",
          title: 'turbulent convection',
          description: "Revealing how external shear and double diffusion can modify heat and salt transport at convective boundary layers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/turbulent_convection/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("chowlandgfd.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%72%69%73.%68%6F%77%6C%61%6E%64@%75%63%64.%69%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/chowland", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chowland", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3686-9253", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Chris-Howland-3/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=pf4KNaQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
