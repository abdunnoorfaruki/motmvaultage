/**
 * Reviews scaffold.
 *
 * IMPORTANT: Only Ashley D.'s quote is verbatim from Angela's existing
 * preview site. The other five are placeholders that mirror the format,
 * length, and tone of typical Google reviews. Before launch, replace
 * the `text` and `name`/`initials` of each entry with the corresponding
 * real Google review. Layout and styling are final — this is a
 * content-only swap.
 */
export type Review = {
  profile:string;
  initials: string;
  name: string;
  text: string;
};

export const reviews: Review[] = [
  {
    initials: "AD",
    name: "Ashley D.",
    text: `I have been a member of the M.O.T.M. Vaultage family for 5 years. There are not enough words in the human language to capture the transformation my life has experienced and the impact it has made on my outlook on life. While this journey with M.O.T.M Vaultage started with me, the impact has been felt through my family and friends who have received the overflow of knowledge, seen my transformation and connected with "Dr." Harper on their own. This has ALWAYS been the best decision I ever made. No matter how challenging or rewarding the journey, I know I can overcome and endure with "Dr." Harper empowering me to lead in my own power, strength and faith!`,
    profile:"/reviews/DonDiva"
  },
  {
    initials: "AD",
    name: "Ashley D.",
    text: `I have been a member of the M.O.T.M. Vaultage family for 5 years. There are not enough words in the human language to capture the transformation my life has experienced and the impact it has made on my outlook on life. While this journey with M.O.T.M Vaultage started with me, the impact has been felt through my family and friends who have received the overflow of knowledge, seen my transformation and connected with "Dr." Harper on their own. This has ALWAYS been the best decision I ever made. No matter how challenging or rewarding the journey, I know I can overcome and endure with "Dr." Harper empowering me to lead in my own power, strength and faith!`,
    profile:"/reviews/DonDiva"
  },
  {
    initials: "AD",
    name: "Ashley D.",
    text: `I have been a member of the M.O.T.M. Vaultage family for 5 years. There are not enough words in the human language to capture the transformation my life has experienced and the impact it has made on my outlook on life. While this journey with M.O.T.M Vaultage started with me, the impact has been felt through my family and friends who have received the overflow of knowledge, seen my transformation and connected with "Dr." Harper on their own. This has ALWAYS been the best decision I ever made. No matter how challenging or rewarding the journey, I know I can overcome and endure with "Dr." Harper empowering me to lead in my own power, strength and faith!`,
    profile:"/reviews/DonDiva.png"
  },
  {
    initials: "AD",
    name: "Brittney London",
    text: `Highly recommend M.O.T.M. Vaultage. I've been seeing Angela for several years and she's helped me through some incredibly difficult life changes. Her approach to problem solving is unmatched and I've learned a lot about myself during my journey with her. She leads with compassion, understanding but is also very real and uplifting in her delivery. Super grateful for this practice!`,
    profile:"/reviews/Brittney.png"
  },
  
];
