let verb = {
  infinitive: 'watch',
  present: ['watch', 'watches'],
  past: ['watched', 'watched'],
  gerund: 'watching',
}

function create(verb) {
  return {
    positive: [
      `I ${modal} ${verb.infinitive}`,
      `he ${modal} ${verb.infinitive}`,
      `she ${modal} ${verb.infinitive}`,
      `it ${modal} ${verb.infinitive}`,
      `we ${modal} ${verb.infinitive}`,
      `you ${modal} ${verb.infinitive}`,
      `they ${modal} ${verb.infinitive}`,
    ],
    negative: [
      `I ${modal} not ${verb.infinitive}`,
      `he ${modal} not ${verb.infinitive}`,
      `she ${modal} not ${verb.infinitive}`,
      `it ${modal} not ${verb.infinitive}`,
      `we ${modal} not ${verb.infinitive}`,
      `you ${modal} not ${verb.infinitive}`,
      `they ${modal} not ${verb.infinitive}`,
    ],
    interrogative: [
      `${modal} I ${verb.infinitive}?`,
      `${modal} he ${verb.infinitive}?`,
      `${modal} she ${verb.infinitive}?`,
      `${modal} it ${verb.infinitive}?`,
      `${modal} we ${verb.infinitive}?`,
      `${modal} you ${verb.infinitive}?`,
      `${modal} they ${verb.infinitive}?`,
    ],
  }
}

function createPresentSimple(verb) {
  return {
    positive: [
      `I ${verb.present[0]}`,
      `he ${verb.present[1]}`,
      `she ${verb.present[1]}`,
      `it ${verb.present[1]}`,
      `we ${verb.present[0]}`,
      `you ${verb.present[0]}`,
      `they ${verb.present[0]}`,
    ],
    negative: [
      `I don't ${verb.present[0]}`,
      `he doesn't ${verb.present[0]}`,
      `she doesn't ${verb.present[0]}`,
      `it doesn't ${verb.present[0]}`,
      `we don't ${verb.present[0]}`,
      `you don't ${verb.present[0]}`,
      `they don't ${verb.present[0]}`,
    ],
    interrogative: [
      `Do I ${verb.present[0]}?`,
      `Does he ${verb.present[0]}?`,
      `Does she ${verb.present[0]}?`,
      `Does it ${verb.present[0]}?`,
      `Do we ${verb.present[0]}?`,
      `Do you ${verb.present[0]}?`,
      `Do they ${verb.present[0]}?`,
    ],
  }
}

function createPastSimple(verb) {
  return {
    positive: [
      `I ${verb.past[0]}`,
      `he ${verb.past[0]}`,
      `she ${verb.past[0]}`,
      `it ${verb.past[0]}`,
      `we ${verb.past[0]}`,
      `you ${verb.past[0]}`,
      `they ${verb.past[0]}`,
    ],
    negative: [
      `I didn't ${verb.infinitive}`,
      `he didn't ${verb.infinitive}`,
      `she didn't ${verb.infinitive}`,
      `it didn't ${verb.infinitive}`,
      `we didn't ${verb.infinitive}`,
      `you didn't ${verb.infinitive}`,
      `they didn't ${verb.infinitive}`,
    ],
    interrogative: [
      `Did I ${verb.infinitive}?`,
      `Did he ${verb.infinitive}?`,
      `Did she ${verb.infinitive}?`,
      `Did it ${verb.infinitive}?`,
      `Did we ${verb.infinitive}?`,
      `Did you ${verb.infinitive}?`,
      `Did they ${verb.infinitive}?`,
    ],
  }
}

function createFutureSimple(verb) {
  return {
    positive: [
      `I will ${verb.infinitive}`,
      `he will ${verb.infinitive}`,
      `she will ${verb.infinitive}`,
      `it will ${verb.infinitive}`,
      `we will ${verb.infinitive}`,
      `you will ${verb.infinitive}`,
      `they will ${verb.infinitive}`,
    ],
    negative: [
      `I won’t ${verb.infinitive}`,
      `he won’t ${verb.infinitive}`,
      `she won’t ${verb.infinitive}`,
      `it won’t ${verb.infinitive}`,
      `we won’t ${verb.infinitive}`,
      `you won’t ${verb.infinitive}`,
      `they won’t ${verb.infinitive}`,
    ],
    interrogative: [
      `Will I ${verb.infinitive}?`,
      `Will he ${verb.infinitive}?`,
      `Will she ${verb.infinitive}?`,
      `Will it ${verb.infinitive}?`,
      `Will we ${verb.infinitive}?`,
      `Will you ${verb.infinitive}?`,
      `Will they ${verb.infinitive}?`,
    ],
  }
}

module.exports = {
  verb,
  createPresentSimple,
  createPastSimple,
  createFutureSimple,
}


// switch (modal) {
//   case '':
//     break;
// }


// function createPositive(subject, modal, verb) {
//   return [subject, modal, verb].filter((el) => el).join(' ')
// }

// function createNegative(subject, modal, verb) {
//   return [subject, modal, verb].filter((el) => el).join(' ')
// }

// function createInterrogative(subject, modal, verb) {
//   return [modal, subject, verb].filter((el) => el).join(' ')
// }
