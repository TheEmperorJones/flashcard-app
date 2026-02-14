# Project summary
- **Concept:** I began with the simplest project on the assignment's suggested list, mostly out of a fearful devotion to practicality; I felt I couldn’t pull off any of the other projects.  Secondly, I enjoy foreign language study and flashcard-based approaches to learning, so this was a practice I’m already familiar with, and the parameters jumped out to me logically as I began to build out the `deck.js` that formed my dataset.  Even so, as I moved forward with the project and began to enhance functionality of the app, I learned the hard way how a failure to plan sufficiently for all future enhancements created a low-level version of technical debt.

- **Progression:** In my case, this meant that as I added images to the file and decided to credit them to the users on Unsplash (to conform to an easily achievable standard for attribution), I had to go back and do more labor.  I learned how to use Visual Code Studio’s snippet tool to automation that data build-out, but this was well after I brute-forced my way through numerous card entries; but, fortunately, this will serve as a great lesson for future work.  On a related note, I began with one language in mind but realized how trivial it would be to add additional languages by creating additional buttons.  (I did have to consult documentation to see how to handle irregularly sized decks, and how to reinitialize the starting point properly). The buttons themselves were easy enough to create and felt immediately rewarding, and that provided enough momentum to keep going.

# Key features and functionality
- useState
- Boolean logic
- Use of numerous “Handlers” inline
- Data object extensibility:
    - Adapted original layout to allow for ease of adding new language packs
    - Tried to make the flashcards pedagogically correct, including usage sentences
    - Tried to make the app reasonably accessible (but did not check using accessibility checker tools)


# Technologies used
- JavaScript
- Node.js
- Vite/React
- GitHub
- GitHub Pages
- Visual Studio Code (some extensions listed below)
    - ESLint
    - ES6 Code Snippets
    - Live Server


# Instructions for use
- Navigate to https://theemperorjones.github.io/flashcard-app/

- **Note** that the default language is **Filipino** but there are additional languages accessed via buttons at the bottom, including:
    - Arabic
    - French
    - Spanish

- In general, tap (on mobile) or click the card itself to flip its state (i.e. which language the card is displaying), and use the Next and Back buttons to navigate directionally through each deck.

- The sets are numbered so you can tell where you are in the list and avoid needlessly looping through the same list absent-mindedly.

- Future improvements may include: spaced repetition buttons that allow more difficult words to be marked as such, and returned to more frequently, and mastered words to be seen less often.  Additionally, a shuffle button could be added to increase the chance element and avoid a rote memorization deriving too much from the leveraged context of a repeated sequence.