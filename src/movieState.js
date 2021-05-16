export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: `${process.env.PUBLIC_URL}/work/assets/athlete-small.png`,
      secondaryImg: `${process.env.PUBLIC_URL}/work/assets/athlete2.png`,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Thrilling!",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: `${process.env.PUBLIC_URL}/work/assets/goodtimes-small.png`,
      url: "/work/good-times",
      secondaryImg: `${process.env.PUBLIC_URL}/work/assets/good-times2.jpg`,
      awards: [
        {
          title: "Heartwarming",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Truly inspiring.",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          title: "More than expected",
          description:
            "Lorem Ipsum Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: `${process.env.PUBLIC_URL}/work/assets/theracer-small.png`,
      url: "/work/the-racer",
      secondaryImg: `${process.env.PUBLIC_URL}/work/assets/the-racer2.jpg`,
      awards: [
        {
          title: "Magnificient",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Fast & Furious for the Intellectual",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Pure Adrenaline Rush!",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ],
    },
  ];
};
