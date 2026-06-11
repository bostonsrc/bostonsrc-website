const LEVELS = [
  {
    value: 6,
    label: "Create",
    cue: "Design something new",
    body: "Create means the learner makes something new: a plan, tool, script, workflow, or teaching product.",
    prompt: "Ask: does the learner have to build something, not just choose or explain something?",
    example: "Example: design a counseling plan or create an OSCE station.",
  },
  {
    value: 5,
    label: "Evaluate",
    cue: "Judge using criteria",
    body: "Evaluate means the learner makes a judgement and explains why that judgement is fair.",
    prompt: "Ask: does the learner need to choose what is better, safer, stronger, or more appropriate?",
    example: "Example: choose the safer handover note and justify why.",
  },
  {
    value: 4,
    label: "Analyze",
    cue: "Break apart and compare",
    body: "Analyze means the learner breaks information apart and looks for patterns, clues, or causes.",
    prompt: "Ask: does the learner need to compare parts or find what matters most?",
    example: "Example: identify which clue in a case points to deterioration.",
  },
  {
    value: 3,
    label: "Apply",
    cue: "Use knowledge in a case",
    body: "Apply means the learner uses knowledge in a real task, case, calculation, or procedure.",
    prompt: "Ask: does the learner need to use the knowledge, not only talk about it?",
    example: "Example: calculate a dose or use a scoring tool on a patient.",
  },
  {
    value: 2,
    label: "Understand",
    cue: "Explain meaning",
    body: "Understand means the learner can explain the meaning in their own words.",
    prompt: "Ask: is the learner mainly explaining an idea, reason, or mechanism?",
    example: "Example: explain why fluid restriction is used in hyponatremia.",
  },
  {
    value: 1,
    label: "Remember",
    cue: "Recall facts",
    body: "Remember is simple recall: facts, labels, definitions, lists, or names.",
    prompt: "Ask: can the learner answer by simply recalling information?",
    example: "Example: list the five rights of medication administration.",
  },
];

const LEVEL_MAP = new Map(LEVELS.map((level) => [level.value, level]));

const LEVEL_OBJECTS = {
  1: "PIN card",
  2: "Chat card",
  3: "Tool card",
  4: "Lens card",
  5: "Scale card",
  6: "Spark card",
};

const LEVEL_SUPPORT = {
  1: {
    teacherSignal: "The learner can answer from memory without changing or using the information.",
    everyday: "Remember is like recalling a phone number, naming the cranial nerves, or listing the steps you already memorized.",
    misconception: "Even if the topic feels advanced, a straight factual retrieval task still stays at Remember.",
    stems: [
      "Which statement best defines {topic}?",
      "List the main features of {topic}.",
      "Name the key components of {topic}.",
    ],
    rewrite: "recall key facts about {topic}",
  },
  2: {
    teacherSignal: "The learner is explaining meaning, mechanism, or rationale in their own words.",
    everyday: "Understand is like explaining to a friend why a traffic jam happens or why a fever causes sweating.",
    misconception: "If the learner only explains an idea, do not jump to Apply just because the topic is clinical.",
    stems: [
      "Explain why {topic} matters in this setting.",
      "Summarize what {topic} means in your own words.",
      "Interpret the significance of {topic}.",
    ],
    rewrite: "explain {topic} clearly in context",
  },
  3: {
    teacherSignal: "The learner must use knowledge in a case, procedure, calculation, or real task.",
    everyday: "Apply is like using a recipe to cook dinner, not just describing the recipe back to someone.",
    misconception: "A verb like explain can still hide an Apply task if the learner must calculate, perform, or choose an action.",
    stems: [
      "How would you use {topic} in this case?",
      "What would you do with {topic} for this patient?",
      "Apply {topic} to decide the next step here.",
    ],
    rewrite: "apply {topic} in a relevant clinical situation",
  },
  4: {
    teacherSignal: "The learner is separating clues, comparing parts, sorting causes, or spotting patterns.",
    everyday: "Analyze is like looking at a messy room and working out what caused the mess and which clue matters most.",
    misconception: "Analyze is more than using a rule once; it needs comparison, structure, or pattern finding.",
    stems: [
      "Which clue in {topic} matters most, and why?",
      "Compare the parts of {topic} and identify the important difference.",
      "Analyze the factors contributing to {topic}.",
    ],
    rewrite: "analyze information related to {topic} to identify patterns and causes",
  },
  5: {
    teacherSignal: "The learner is judging between options using criteria such as safety, quality, evidence, or suitability.",
    everyday: "Evaluate is like comparing two phones or two plans and defending which one is the better choice.",
    misconception: "If the learner must choose and justify, you have moved beyond Analyze into Evaluate.",
    stems: [
      "Which option for {topic} is stronger, safer, or more appropriate?",
      "Judge the quality of {topic} using explicit criteria.",
      "Defend the best decision related to {topic}.",
    ],
    rewrite: "judge options related to {topic} using clear criteria",
  },
  6: {
    teacherSignal: "The learner must generate a new plan, product, tool, workflow, or teaching resource.",
    everyday: "Create is like planning a trip, designing a checklist, or inventing a better way to solve a problem.",
    misconception: "Create is not just giving an opinion. The learner has to build something new.",
    stems: [
      "Design a plan for {topic}.",
      "Create a tool, script, or workflow that addresses {topic}.",
      "Propose a new solution related to {topic}.",
    ],
    rewrite: "design a new plan or product related to {topic}",
  },
};

const TOOL_TABS = {
  guide: "Level guide",
  verbs: "Verb library",
  questions: "Question stems",
  studio: "Objective studio",
};

const VERB_LIBRARY = {
  1: {
    core: [
      "Define",
      "Identify",
      "Recognize",
      "List",
      "Name",
      "Recall",
      "State",
      "Label",
      "Select",
      "Locate",
      "Match",
      "Repeat",
      "Record",
      "Retrieve",
      "Recite",
      "Quote",
      "Memorize",
      "Outline",
    ],
    digital: [
      "Bookmark",
      "Bullet-point",
      "Find",
      "Google",
      "Highlight",
      "Search",
      "Tabulate",
      "Copy",
    ],
    warning:
      "Good for factual recall tasks. If the learner must do more than retrieve information, the level is probably higher.",
  },
  2: {
    core: [
      "Explain",
      "Describe",
      "Summarize",
      "Interpret",
      "Classify",
      "Compare",
      "Contrast",
      "Infer",
      "Relate",
      "Paraphrase",
      "Discuss",
      "Predict",
      "Convert",
      "Estimate",
      "Express",
      "Cite",
      "Comment",
    ],
    digital: [
      "Annotate",
      "Associate",
      "Categorize",
      "Commenting",
      "Grouping",
      "Journaling",
      "Relating",
      "Tagging",
      "Tweeting",
    ],
    warning:
      "These verbs often signal explanation of meaning. But if the learner must use knowledge in a real case, it shifts toward Apply.",
  },
  3: {
    core: [
      "Apply",
      "Use",
      "Demonstrate",
      "Solve",
      "Calculate",
      "Determine",
      "Modify",
      "Construct",
      "Build",
      "Show",
      "Complete",
      "Carry out",
      "Implement",
      "Execute",
      "Transfer",
      "Produce",
      "Sketch",
    ],
    digital: [
      "Acting out",
      "Charting",
      "Displaying",
      "Executing",
      "Experimenting",
      "Hacking",
      "Implementing",
      "Interviewing",
      "Loading",
      "Presenting",
    ],
    warning:
      "These verbs help when the learner must use knowledge in action. Watch out for objectives that say “understand” but really require performance or calculation.",
  },
  4: {
    core: [
      "Analyze",
      "Sort",
      "Categorize",
      "Compare",
      "Differentiate",
      "Examine",
      "Investigate",
      "Distinguish",
      "Question",
      "Debate",
      "Break down",
      "Correlate",
      "Organize",
      "Attribute",
      "Integrate",
      "Structure",
      "Infer",
    ],
    digital: [
      "Correlating",
      "Deconstructing",
      "Distinguishing",
      "Illustrating",
      "Linking",
      "Mind-mapping",
      "Questioning",
      "Structuring",
    ],
    warning:
      "Use these when learners must separate clues, patterns, causes, or relationships. If they must choose the best option and defend it, that is Evaluate.",
  },
  5: {
    core: [
      "Evaluate",
      "Judge",
      "Justify",
      "Defend",
      "Assess",
      "Appraise",
      "Critique",
      "Criticize",
      "Conclude",
      "Recommend",
      "Prioritize",
      "Validate",
      "Test",
      "Score",
      "Review",
      "Reflect",
      "Rate",
    ],
    digital: [
      "Arguing",
      "Assessing",
      "Commenting",
      "Debating",
      "Defending",
      "Grading",
      "Measuring",
      "Moderating",
      "Posting",
      "Reviewing",
    ],
    warning:
      "These verbs fit when the learner is making a judgment using criteria. If they are building something new, move up to Create.",
  },
  6: {
    core: [
      "Create",
      "Design",
      "Develop",
      "Generate",
      "Invent",
      "Originate",
      "Formulate",
      "Plan",
      "Devise",
      "Compose",
      "Construct",
      "Hypothesize",
      "Adapt",
      "Rewrite",
      "Collaborate",
      "Write",
    ],
    digital: [
      "Animating",
      "Blogging",
      "Building",
      "Directing",
      "Filming",
      "Leading",
      "Mixing",
      "Podcasting",
      "Programming",
      "Wiki building",
    ],
    warning:
      "Create means producing a new plan, product, workflow, or solution. It is more than choosing between existing options.",
  },
};

const GUIDED_PRIMER = [
  {
    id: "primer-apply",
    type: "objective",
    text: "Explain how to calculate a pediatric paracetamol dose from the child’s weight.",
    level: 3,
    why: "The verb says explain, but the learner must actually use a dosing rule to work out an answer, so the real task is Apply.",
    trap_verb: "Explain",
    teachingHint: "Look beyond the opening verb. Is the learner only explaining, or must they use knowledge in a real task?",
    contrast: "Common mix-up: Understand vs Apply. If the learner must perform the calculation, it is Apply.",
  },
  {
    id: "primer-analyze",
    type: "question",
    text: "From this progress note, which clue most strongly suggests the patient is becoming septic rather than simply febrile?",
    level: 4,
    why: "The learner must inspect several clues and decide which one matters most, so the task is Analyze.",
    teachingHint: "Here the learner must separate the useful clue from the background information.",
    contrast: "Common mix-up: Apply vs Analyze. Using one rule is Apply; sorting and interpreting several clues is Analyze.",
  },
  {
    id: "primer-evaluate",
    type: "question",
    text: "Two discharge plans are proposed. Which one is safer for a patient who lives alone and why?",
    level: 5,
    why: "The learner is judging between options using safety criteria and defending the decision, which is Evaluate.",
    teachingHint: "Notice that the task is not just finding clues. It is making a reasoned judgment between alternatives.",
    contrast: "Common mix-up: Analyze vs Evaluate. Analyze breaks apart information; Evaluate chooses and justifies.",
  },
  {
    id: "primer-create",
    type: "objective",
    text: "Design a short bedside checklist that helps interns avoid omitted medication doses on night shift.",
    level: 6,
    why: "The learner must make a new tool for a real problem, so the thinking task is Create.",
    teachingHint: "When the learner has to make a new product, plan, or tool, you are usually in Create.",
    contrast: "Common mix-up: Evaluate vs Create. Judging a plan is Evaluate; designing the plan itself is Create.",
  },
];

const FALLBACK_ITEMS = [
  {
    id: "fallback-r1",
    type: "objective",
    text: "List three common causes of fever in an adult patient.",
    level: 1,
    why: "The learner is recalling stored facts, so this is Remember.",
  },
  {
    id: "fallback-r2",
    type: "question",
    text: "What is the normal adult respiratory rate range?",
    level: 1,
    why: "This asks for a memorized fact, so the thinking task is Remember.",
  },
  {
    id: "fallback-r3",
    type: "objective",
    text: "Name the six levels of revised Bloom's taxonomy.",
    level: 1,
    why: "Naming a known list is direct recall, so it belongs in Remember.",
  },
  {
    id: "fallback-r4",
    type: "question",
    text: "Which vitamin deficiency is classically associated with scurvy?",
    level: 1,
    why: "The learner only retrieves a factual association, so this is Remember.",
  },
  {
    id: "fallback-r5",
    type: "objective",
    text: "Identify the parts of a stethoscope.",
    level: 1,
    why: "Recognizing labeled parts is a Remember task.",
  },
  {
    id: "fallback-u1",
    type: "objective",
    text: "Explain why hand hygiene reduces infection risk.",
    level: 2,
    why: "The learner explains meaning and rationale, so this is Understand.",
  },
  {
    id: "fallback-u2",
    type: "question",
    text: "In your own words, why can dehydration increase heart rate?",
    level: 2,
    why: "The learner explains a mechanism, which fits Understand.",
  },
  {
    id: "fallback-u3",
    type: "objective",
    text: "Summarize how insulin helps control blood glucose.",
    level: 2,
    why: "Summarizing a process shows comprehension, so this is Understand.",
  },
  {
    id: "fallback-u4",
    type: "question",
    text: "What does it mean when a patient is described as clinically stable?",
    level: 2,
    why: "Interpreting meaning belongs in Understand.",
  },
  {
    id: "fallback-u5",
    type: "objective",
    text: "Describe the difference between screening and diagnosis.",
    level: 2,
    why: "Describing a distinction in meaning is an Understand task.",
  },
  {
    id: "fallback-a1",
    type: "objective",
    text: "Use a patient's weight to calculate the correct medication dose.",
    level: 3,
    why: "The learner applies a rule in a concrete case, so this is Apply.",
  },
  {
    id: "fallback-a2",
    type: "question",
    text: "Given a 70 kg patient and a 1 mg/kg dose, how many milligrams are needed?",
    level: 3,
    why: "Carrying out a calculation in a case is Apply.",
  },
  {
    id: "fallback-a3",
    type: "objective",
    text: "Demonstrate safe donning of sterile gloves.",
    level: 3,
    why: "Performing a procedure means using knowledge in action, so this is Apply.",
  },
  {
    id: "fallback-a4",
    type: "question",
    text: "Using the pain ladder, choose the next analgesic step for this patient.",
    level: 3,
    why: "The learner uses a known framework in a real case, so this is Apply.",
  },
  {
    id: "fallback-a5",
    type: "objective",
    text: "Apply a risk score to decide the patient's risk category.",
    level: 3,
    why: "Using a scoring tool in context is Apply.",
  },
  {
    id: "fallback-an1",
    type: "objective",
    text: "Differentiate left-sided from right-sided heart failure using a case summary.",
    level: 4,
    why: "The learner separates and compares clinical features, so this is Analyze.",
  },
  {
    id: "fallback-an2",
    type: "question",
    text: "Which clue in this history most strongly suggests dehydration rather than infection?",
    level: 4,
    why: "The learner must inspect clues and identify the important pattern, so this is Analyze.",
  },
  {
    id: "fallback-an3",
    type: "objective",
    text: "Compare two patient handovers and identify missing safety information.",
    level: 4,
    why: "Comparing parts and spotting gaps is Analyze.",
  },
  {
    id: "fallback-an4",
    type: "question",
    text: "Break down the causes of this patient's fall into patient, environment, and medication factors.",
    level: 4,
    why: "Breaking information into meaningful categories is Analyze.",
  },
  {
    id: "fallback-an5",
    type: "objective",
    text: "Analyze a chart trend to identify the earliest sign of deterioration.",
    level: 4,
    why: "Finding a pattern across data points is Analyze.",
  },
  {
    id: "fallback-e1",
    type: "objective",
    text: "Judge which discharge plan is safest and defend your choice.",
    level: 5,
    why: "The learner makes a judgment using safety criteria, so this is Evaluate.",
  },
  {
    id: "fallback-e2",
    type: "question",
    text: "Which of two teaching plans is stronger for novice learners, and why?",
    level: 5,
    why: "Choosing and justifying the better option is Evaluate.",
  },
  {
    id: "fallback-e3",
    type: "objective",
    text: "Critique a care plan using evidence-based criteria.",
    level: 5,
    why: "Critiquing quality against criteria is Evaluate.",
  },
  {
    id: "fallback-e4",
    type: "question",
    text: "Prioritize the best intervention and justify your decision.",
    level: 5,
    why: "Prioritizing and defending a decision belongs in Evaluate.",
  },
  {
    id: "fallback-e5",
    type: "objective",
    text: "Assess whether a student's answer is complete using a rubric.",
    level: 5,
    why: "Scoring against criteria is an Evaluate task.",
  },
  {
    id: "fallback-c1",
    type: "objective",
    text: "Design a checklist to reduce medication omissions during night shift.",
    level: 6,
    why: "The learner creates a new tool, so this is Create.",
  },
  {
    id: "fallback-c2",
    type: "question",
    text: "Create a short patient education script for inhaler technique.",
    level: 6,
    why: "Producing a new teaching product is Create.",
  },
  {
    id: "fallback-c3",
    type: "objective",
    text: "Develop an OSCE station to assess safe patient handover.",
    level: 6,
    why: "Designing a new assessment station is Create.",
  },
  {
    id: "fallback-c4",
    type: "question",
    text: "Propose a new workflow for faster escalation of deteriorating patients.",
    level: 6,
    why: "Generating a new workflow or solution is Create.",
  },
  {
    id: "fallback-c5",
    type: "objective",
    text: "Write a new rubric for evaluating clinical reasoning in case discussion.",
    level: 6,
    why: "Making a new evaluation tool is Create.",
  },
];

const DAILY_ROUNDS = 2;
const ROUND_SIZE = 5;
const QUICK_SCENARIO_TOTAL = 6;
const DAILY_TOTAL = DAILY_ROUNDS * ROUND_SIZE;
const STORAGE_KEY = "bloomrang-progress-v1";

const state = {
  items: [],
  mode: "home",
  dailyDateKey: getUtcDateKey(new Date()),
  progress: loadProgress(),
  session: null,
  selectedCardId: null,
  dragging: null,
  selectedLevel: 3,
  selectedVerbLevel: 3,
  practiceFocus: "mixed",
  homeMode: "gaming",
  activeToolTab: "studio",
  studioInput: "",
  studioTargetLevel: "auto",
  studioResult: null,
  suppressClick: {
    cardId: null,
    until: 0,
  },
};

const elements = {
  modeLabel: document.querySelector("#mode-label"),
  heroTitle: document.querySelector("#hero-title"),
  heroCopy: document.querySelector("#hero-copy"),
  heroCard: document.querySelector("#hero-card"),
  homeButton: document.querySelector("#home-button"),
  homeScreen: document.querySelector("#home-screen"),
  homeIntro: document.querySelector("#home-intro"),
  homeIntroTitle: document.querySelector("#home-intro-title"),
  homeIntroCopy: document.querySelector("#home-intro-copy"),
  homeModeSwitch: document.querySelector("#home-mode-switch"),
  startLearnButton: document.querySelector("#start-learn-button"),
  startPracticeButton: document.querySelector("#start-practice-button"),
  startChallengeButton: document.querySelector("#start-challenge-button"),
  startToolkitButton: document.querySelector("#start-toolkit-button"),
  startFocusedPracticeButton: document.querySelector("#start-focused-practice-button"),
  practiceLevelPicker: document.querySelector("#practice-level-picker"),
  learnHub: document.querySelector("#learn-hub"),
  practiceHub: document.querySelector("#practice-hub"),
  toolkitHub: document.querySelector("#toolkit-hub"),
  teachPanel: document.querySelector("#teach-panel"),
  coachCard: document.querySelector("#coach-card"),
  insightGrid: document.querySelector("#insight-grid"),
  cardsHelper: document.querySelector("#cards-helper"),
  trayCards: document.querySelector("#tray-cards"),
  ladder: document.querySelector("#ladder"),
  checkButton: document.querySelector("#check-button"),
  nextButton: document.querySelector("#next-button"),
  controls: document.querySelector("#controls"),
  resultScreen: document.querySelector("#result-screen"),
  gameScreen: document.querySelector("#game-screen"),
  selectionPill: document.querySelector("#selection-pill"),
  resultModeLabel: document.querySelector("#result-mode-label"),
  resultTitle: document.querySelector("#result-title"),
  resultSummary: document.querySelector("#result-summary"),
  resultGrid: document.querySelector("#result-grid"),
  shareText: document.querySelector("#share-text"),
  copyButton: document.querySelector("#copy-button"),
  practiceButton: document.querySelector("#practice-button"),
  dailyButton: document.querySelector("#daily-button"),
  dragGhost: document.querySelector("#drag-ghost"),
  cardTemplate: document.querySelector("#card-template"),
  rungTemplate: document.querySelector("#rung-template"),
  teachLevels: document.querySelector("#teach-levels"),
  teachDetailLabel: document.querySelector("#teach-detail-label"),
  teachDetailTitle: document.querySelector("#teach-detail-title"),
  teachDetailBody: document.querySelector("#teach-detail-body"),
  teachDetailPrompt: document.querySelector("#teach-detail-prompt"),
  teachDetailExample: document.querySelector("#teach-detail-example"),
  coachLabel: document.querySelector("#coach-label"),
  coachTitle: document.querySelector("#coach-title"),
  coachBody: document.querySelector("#coach-body"),
  coachPrompt: document.querySelector("#coach-prompt"),
  primerButton: document.querySelector("#primer-button"),
  jumpDailyButton: document.querySelector("#jump-daily-button"),
  dailyLensLabel: document.querySelector("#daily-lens-label"),
  dailyLensTitle: document.querySelector("#daily-lens-title"),
  dailyLensBadge: document.querySelector("#daily-lens-badge"),
  dailyLensBody: document.querySelector("#daily-lens-body"),
  dailyLensAnalogy: document.querySelector("#daily-lens-analogy"),
  dailyLensPrompt: document.querySelector("#daily-lens-prompt"),
  toolTabs: document.querySelector("#tool-tabs"),
  toolPanel: document.querySelector("#tool-panel"),
};

async function bootstrap() {
  setupButtons();
  renderTeachPanel();
  renderPracticeLevelPicker();
  openHome();

  try {
    const response = await fetch("./items.json");
    state.items = await response.json();
  } catch (error) {
    console.warn("Using the internal fallback item bank.", error);
    state.items = FALLBACK_ITEMS;
  }
}

bootstrap();

function setupButtons() {
  elements.checkButton.addEventListener("click", () => checkRound(false));
  elements.nextButton.addEventListener("click", nextRound);
  elements.copyButton.addEventListener("click", copyResult);
  elements.practiceButton.addEventListener("click", handlePrimaryResultAction);
  elements.dailyButton.addEventListener("click", handleSecondaryResultAction);
  elements.primerButton.addEventListener("click", startLearnSession);
  elements.jumpDailyButton.addEventListener("click", startChallengeSession);
  elements.homeButton.addEventListener("click", openHome);
  elements.homeModeSwitch.addEventListener("click", handleHomeModeSwitchClick);
  elements.startLearnButton.addEventListener("click", openLearnHub);
  elements.startPracticeButton.addEventListener("click", openPracticeHub);
  elements.startChallengeButton.addEventListener("click", startChallengeSession);
  elements.startToolkitButton.addEventListener("click", openToolkitHub);
  elements.startFocusedPracticeButton.addEventListener("click", () => startPracticeSession(state.practiceFocus));
  elements.practiceLevelPicker.addEventListener("click", handlePracticeLevelPickerClick);
  elements.toolTabs.addEventListener("click", handleToolTabsClick);
  elements.toolPanel.addEventListener("click", handleToolPanelClick);
  elements.toolPanel.addEventListener("input", handleToolPanelInput);
  elements.toolPanel.addEventListener("change", handleToolPanelInput);
}

function openHome() {
  state.mode = "home";
  state.session = null;
  state.selectedCardId = null;
  render();
}

function openLearnHub() {
  state.mode = "learnHub";
  state.session = null;
  state.selectedCardId = null;
  render();
}

function openPracticeHub() {
  state.mode = "practiceHub";
  state.session = null;
  state.selectedCardId = null;
  render();
}

function openToolkitHub() {
  state.mode = "toolkitHub";
  state.session = null;
  state.selectedCardId = null;
  render();
}

function startLearnSession() {
  state.mode = "learn";
  state.session = buildSession(GUIDED_PRIMER, "learn", { roundSize: 1, autoCheck: true });
  resetInteractionState();
  showGameScreen();
  render();
}

function startChallengeSession() {
  state.mode = "challenge";
  const cards = selectChallengeItems(getPlayableItems(), QUICK_SCENARIO_TOTAL);
  state.session = buildSession(cards, "challenge", { roundSize: 1 });
  resetInteractionState();
  showGameScreen();
  render();
}

function startPracticeSession(focus = state.practiceFocus) {
  state.mode = "practice";
  state.practiceFocus = focus;
  state.session = buildSession(selectPracticeItems(getPlayableItems(), ROUND_SIZE, focus), "practice");
  resetInteractionState();
  showGameScreen();
  render();
}

function resetInteractionState() {
  state.selectedCardId = null;
  state.suppressClick = { cardId: null, until: 0 };
}

function buildSession(items, mode, options = {}) {
  const roundSize = options.roundSize ?? ROUND_SIZE;
  const rounds = chunk(
    items.map((item, index) => ({
      ...item,
      sessionIndex: index,
      assignedLevel: null,
      revealed: false,
      isCorrect: false,
    })),
    roundSize
  );

  return {
    mode,
    rounds,
    currentRoundIndex: 0,
    totalCorrect: 0,
    totalAttempts: items.length,
    roundSize,
    revealReady: false,
    completed: false,
    results: [],
    autoCheck: Boolean(options.autoCheck),
  };
}

function render() {
  renderVisibility();
  renderHomeMode();
  renderTeachPanel();
  renderPracticeLevelPicker();
  renderHeader();
  renderCoach();
  renderDailyLens();
  renderToolPanel();
  if (state.session) {
    renderRound();
  }
  renderResultIfNeeded();
}

function renderTeachPanel() {
  elements.teachLevels.innerHTML = "";

  LEVELS.forEach((level) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "teach-level-button";
    button.dataset.level = String(level.value);
    button.classList.toggle("is-active", state.selectedLevel === level.value);
    button.innerHTML = `
      <span class="rung-number">Level ${level.value}</span>
      <span class="teach-level-title">${level.label}</span>
      <span class="teach-level-cue">${level.cue}</span>
    `;
    button.addEventListener("click", () => {
      state.selectedLevel = level.value;
      renderTeachPanel();
    });
    elements.teachLevels.append(button);
  });

  const detail = LEVEL_MAP.get(state.selectedLevel);
  elements.teachDetailLabel.textContent = "Thinking move";
  elements.teachDetailTitle.textContent = detail.label;
  elements.teachDetailBody.textContent = detail.body;
  elements.teachDetailPrompt.textContent = detail.prompt;
  elements.teachDetailExample.textContent = detail.example;
  elements.primerButton.textContent = state.progress.primerDone ? "Replay the Guided Game" : "Try the Guided Game";
}

function renderVisibility() {
  const mode = state.mode;
  const isHome = mode === "home";
  const isLearn = mode === "learn";
  const isLearnHub = mode === "learnHub";
  const isPracticeHub = mode === "practiceHub";
  const isToolkitHub = mode === "toolkitHub";
  const isPlayMode = mode === "practice" || mode === "challenge" || mode === "learn";

  elements.homeScreen.hidden = !isHome;
  elements.homeButton.hidden = isHome;
  elements.learnHub.hidden = !isLearnHub;
  elements.practiceHub.hidden = !isPracticeHub;
  elements.toolkitHub.hidden = !isToolkitHub;
  elements.teachPanel.hidden = !isLearnHub;
  elements.insightGrid.hidden = !isLearnHub;
  elements.coachCard.hidden = !(isLearn || mode === "practice" || mode === "challenge");
  elements.gameScreen.hidden = !isPlayMode || Boolean(state.session?.completed);
  elements.controls.hidden = !isPlayMode || Boolean(state.session?.completed);
  elements.resultScreen.hidden = !Boolean(state.session?.completed);
}

function renderHomeMode() {
  const isLearning = state.homeMode === "learning";
  const isGaming = state.homeMode === "gaming";
  const isToolkit = state.homeMode === "toolkit";

  document.querySelectorAll(".home-mode-option").forEach((button) => {
    const isActive = button.dataset.homeMode === state.homeMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  document.querySelectorAll("[data-home-group]").forEach((card) => {
    card.hidden = card.dataset.homeGroup !== state.homeMode;
  });

  elements.heroCard.classList.toggle("is-learning-mode", isLearning);
  elements.heroCard.classList.toggle("is-gaming-mode", isGaming);
  elements.heroCard.classList.toggle("is-toolkit-mode", isToolkit);
  elements.homeIntro.classList.toggle("is-learning-mode", isLearning);
  elements.homeIntro.classList.toggle("is-gaming-mode", isGaming);
  elements.homeIntro.classList.toggle("is-toolkit-mode", isToolkit);

  if (isLearning) {
    elements.homeIntroTitle.textContent = "Learn before you play";
    elements.homeIntroCopy.textContent =
      "See the six Bloom's Taxonomy levels, then try a guided card.";
    return;
  }

  if (isGaming) {
    elements.homeIntroTitle.textContent = "Start with one quick scenario";
    elements.homeIntroCopy.textContent =
      "One teaching card. One Bloom's level. Then a clear reason.";
    return;
  }

  elements.homeIntroTitle.textContent = "Planning a class or assessment?";
  elements.homeIntroCopy.textContent =
    "Paste an objective, improve it, and get question ideas.";
}

function renderPracticeLevelPicker() {
  const options = [
    { key: "mixed", label: "Mixed" },
    ...LEVELS.slice().reverse().map((level) => ({
      key: String(level.value),
      label: `${level.value}`,
      hint: level.label,
    })),
  ];

  elements.practiceLevelPicker.innerHTML = options
    .map(
      (option) => `
        <button
          type="button"
          class="practice-level-chip${String(option.key) === String(state.practiceFocus) ? " is-active" : ""}"
          data-practice-focus="${option.key}"
        >
          <span class="practice-level-chip-label">${option.label}</span>
          ${option.hint ? `<span class="practice-level-chip-hint">${option.hint}</span>` : ""}
        </button>
      `
    )
    .join("");
}

function renderDailyLens() {
  const focusLevel = getDailyFocusLevel(state.dailyDateKey);
  const level = LEVEL_MAP.get(focusLevel);
  const support = LEVEL_SUPPORT[focusLevel];

  elements.dailyLensLabel.textContent = "Bloom Lens";
  elements.dailyLensTitle.textContent = `${level.label}: a simple way to see it`;
  elements.dailyLensBadge.textContent = `Level ${level.value}`;
  elements.dailyLensBody.textContent = support.teacherSignal;
  elements.dailyLensAnalogy.textContent = support.everyday;
  elements.dailyLensPrompt.textContent = support.misconception;
}

function renderToolPanel() {
  document.querySelectorAll(".tool-tab").forEach((tab) => {
    const isActive = tab.dataset.tab === state.activeToolTab;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  if (state.activeToolTab === "guide") {
    elements.toolPanel.innerHTML = renderLevelGuideMarkup();
    return;
  }

  if (state.activeToolTab === "verbs") {
    elements.toolPanel.innerHTML = renderVerbLibraryMarkup();
    return;
  }

  if (state.activeToolTab === "questions") {
    elements.toolPanel.innerHTML = renderQuestionStemMarkup();
    return;
  }

  elements.toolPanel.innerHTML = renderStudioMarkup();
}

function renderLevelGuideMarkup() {
  return `
    <div class="tool-guide-grid">
      ${LEVELS.map((level) => {
        const support = LEVEL_SUPPORT[level.value];
        return `
          <article class="tool-guide-card">
            <div class="tool-guide-head">
              <div>
                <p class="hero-kicker">Thinking move</p>
                <h4>${level.label}</h4>
              </div>
              <span class="tool-level-badge" data-level="${level.value}">Level ${level.value}</span>
            </div>
            <p class="tool-guide-copy">${level.body}</p>
            <div class="tool-guide-ask"><strong>Ask this:</strong> ${level.prompt}</div>
            <div class="tool-guide-signal"><strong>Teacher clue:</strong> ${support.teacherSignal}</div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderQuestionStemMarkup() {
  return `
    <div class="tool-question-grid">
      ${LEVELS.map((level) => {
        const support = LEVEL_SUPPORT[level.value];
        return `
          <article class="tool-question-card">
            <div class="tool-question-head">
              <div>
                <p class="hero-kicker">Question style</p>
                <h4>${level.label}</h4>
              </div>
              <span class="tool-level-badge" data-level="${level.value}">Level ${level.value}</span>
            </div>
            <p class="tool-question-copy">${support.teacherSignal}</p>
            <ul class="tool-question-stems">
              ${support.stems.map((stem) => `<li>${fillStem(stem, "the topic")}</li>`).join("")}
            </ul>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderVerbLibraryMarkup() {
  const level = LEVEL_MAP.get(state.selectedVerbLevel);
  const library = VERB_LIBRARY[state.selectedVerbLevel];

  return `
    <section class="verb-library">
      <div class="verb-library-head">
        <div>
          <p class="hero-kicker">Verb explorer</p>
          <h4>${level.label} verbs</h4>
        </div>
        <p class="verb-library-note">Verbs help, but they do not decide everything. The real task decides the level.</p>
      </div>

      <div class="verb-level-switcher" role="tablist" aria-label="Verb levels">
        ${LEVELS.map(
          (entry) => `
            <button
              class="verb-level-button${entry.value === state.selectedVerbLevel ? " is-active" : ""}"
              data-verb-level="${entry.value}"
              role="tab"
              aria-selected="${entry.value === state.selectedVerbLevel}"
            >
              <span class="rung-number">Level ${entry.value}</span>
              <span class="verb-level-label">${entry.label}</span>
            </button>
          `
        ).join("")}
      </div>

      <div class="verb-sections">
        <article class="verb-card">
          <div class="tool-question-head">
            <div>
              <p class="hero-kicker">Core verbs</p>
              <h4>Common teaching verbs</h4>
            </div>
            <span class="tool-level-badge" data-level="${level.value}">Level ${level.value}</span>
          </div>
          <div class="verb-chip-grid">
            ${library.core.map((verb) => `<span class="verb-chip" data-level="${level.value}">${verb}</span>`).join("")}
          </div>
        </article>

        <article class="verb-card">
          <div class="tool-question-head">
            <div>
              <p class="hero-kicker">Activity verbs</p>
              <h4>Useful words for digital or active learning</h4>
            </div>
          </div>
          <div class="verb-chip-grid">
            ${library.digital.map((verb) => `<span class="verb-chip verb-chip-soft" data-level="${level.value}">${verb}</span>`).join("")}
          </div>
        </article>
      </div>

      <div class="verb-warning">
        <strong>Careful:</strong> ${library.warning}
      </div>
    </section>
  `;
}

function renderStudioMarkup() {
  const options = [
    `<option value="auto"${state.studioTargetLevel === "auto" ? " selected" : ""}>Let BloomRang suggest a level</option>`,
    ...LEVELS.map(
      (level) =>
        `<option value="${level.value}"${String(level.value) === String(state.studioTargetLevel) ? " selected" : ""}>Level ${level.value} - ${level.label}</option>`
    ),
  ].join("");

  return `
    <div class="studio-form">
      <div class="studio-field">
        <label class="studio-label" for="studio-input">Paste your learning objective</label>
        <textarea id="studio-input" class="studio-input" placeholder="Example: Students will understand safe discharge planning.">${escapeHtml(
          state.studioInput
        )}</textarea>
        <p class="studio-help">Paste a rough objective. BloomRang will make it clearer and suggest question ideas.</p>
      </div>
      <div class="studio-field">
        <label class="studio-label" for="studio-target-level">Level you want</label>
        <select id="studio-target-level" class="studio-select">${options}</select>
      </div>
      <button id="studio-generate" class="primary-button" type="button">Improve My Objective</button>
    </div>
    <div class="studio-output">${renderStudioOutputMarkup()}</div>
  `;
}

function renderStudioOutputMarkup() {
  if (!state.studioResult) {
    return `<div class="studio-empty">Paste an objective here. I will help make it clearer and more aligned with Bloom's Taxonomy.</div>`;
  }

  const result = state.studioResult;
  return `
    <article class="studio-output-card">
      <div class="studio-result-head">
        <div>
          <p class="hero-kicker">Looks like</p>
          <h4>${result.probable.label}</h4>
        </div>
        <span class="tool-level-badge" data-level="${result.probable.value}">Level ${result.probable.value}</span>
      </div>
      <p class="studio-meta">${result.issue}</p>
    </article>
    <article class="studio-output-card">
      <div class="studio-result-head">
        <div>
          <p class="hero-kicker">Cleaner version</p>
          <h4>${result.target.label}</h4>
        </div>
        <span class="tool-level-badge" data-level="${result.target.value}">Level ${result.target.value}</span>
      </div>
      <div class="studio-rewrite">${result.rewrite}</div>
      <p class="studio-note">${result.why}</p>
    </article>
    <article class="studio-output-card">
      <div class="studio-result-head">
        <div>
          <p class="hero-kicker">Question ideas</p>
          <h4>Try these for ${result.topicLabel}</h4>
        </div>
      </div>
      <ul class="studio-list">
        ${result.questionStems.map((stem) => `<li>${stem}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderHeader() {
  if (!state.session) {
    const homeCopy = getHeaderCopy(state.mode);
    elements.modeLabel.textContent = homeCopy.modeLabel;
    elements.heroTitle.textContent = homeCopy.title;
    elements.heroCopy.textContent = homeCopy.copy;
    elements.cardsHelper.textContent = "";
    return;
  }

  const headerCopy = getHeaderCopy(state.session.mode);

  elements.modeLabel.textContent = headerCopy.modeLabel;
  elements.heroTitle.textContent = headerCopy.title;
  elements.heroCopy.textContent = headerCopy.copy;
  elements.cardsHelper.textContent = getCardsHelperText();
}

function getHeaderCopy(mode) {
  if (mode === "home") {
    const isLearning = state.homeMode === "learning";
    const isGaming = state.homeMode === "gaming";
    return {
      modeLabel: isLearning ? "Learn" : isGaming ? "Quick scenario" : "Faculty toolkit",
      title: isLearning
        ? "Learn the 6 thinking levels"
        : isGaming
          ? "Try one Bloom's Taxonomy scenario"
          : "Make teaching material sharper",
      copy: isLearning
        ? "Tap each level, see a simple example, then play a guided card."
        : isGaming
          ? "Read a real teaching task. Choose the Bloom's Taxonomy level. BloomRang explains why."
          : "Use the toolkit when you are writing objectives, verbs, or assessment questions.",
    };
  }

  if (mode === "learnHub") {
    return {
      modeLabel: "Learn",
      title: "See what each Bloom's Taxonomy level asks learners to do",
      copy:
        "Tap a level. Read the simple example. Then play the guided game when it starts to click.",
    };
  }

  if (mode === "practiceHub") {
    return {
      modeLabel: "Practice",
      title: "Train one level, or mix all six",
      copy:
        "Choose a focus. This is where your eye starts noticing the difference between levels.",
    };
  }

  if (mode === "toolkitHub") {
    return {
      modeLabel: "Faculty toolkit",
      title: "Improve one objective first",
      copy:
        "Paste a rough objective. BloomRang suggests cleaner wording and question ideas.",
    };
  }

  if (mode === "learn") {
    return {
      modeLabel: "Guided primer",
      title: "Learn Bloom's Taxonomy by feeling the difference",
      copy:
        "Each card teaches one common confusion. Match it, see the answer, then notice why another level was tempting.",
    };
  }

  if (mode === "practice") {
    const practiceTitle =
      state.practiceFocus === "mixed"
        ? "Build judgment through mixed mastery"
        : `Practise ${getLevelLabel(Number(state.practiceFocus))} until it feels familiar`;
    return {
      modeLabel: "Practice mode",
      title: practiceTitle,
      copy:
        state.practiceFocus === "mixed"
          ? "Mix all six levels and train your judgement."
          : `Stay with one level and look for this pattern: ${LEVEL_MAP.get(Number(state.practiceFocus)).cue.toLowerCase()}.`,
    };
  }

  return {
    modeLabel: "Challenge mode",
    title: "Match one card at a time",
    copy:
      "Read the task, choose the Bloom's Taxonomy level, then learn from the reason.",
  };
}

function getCardsHelperText() {
  if (!state.session) return "";
  const session = state.session;
  const round = session.rounds[session.currentRoundIndex];
  const count = round.length;

  if (session.revealReady) {
    return session.mode === "learn"
      ? "Read why it belongs there, then continue."
      : "Read the reasons. That is where the learning happens.";
  }

  if (session.mode === "learn") {
    return "Tap the card, then tap the level you think fits. BloomRang will check it right away.";
  }

  if (count === 1) {
    return "Match this card, then read the reason.";
  }

  return session.mode === "challenge"
    ? `Match all ${count} cards, then check your round.`
    : `Match all ${count} cards, then check your practice.`;
}

function renderCoach() {
  const coach = getCoachCopy();
  elements.coachLabel.textContent = coach.label;
  elements.coachTitle.textContent = coach.title;
  elements.coachBody.textContent = coach.body;
  elements.coachPrompt.textContent = coach.prompt;
}

function handleToolTabsClick(event) {
  const button = event.target.closest(".tool-tab");
  if (!button) return;
  state.activeToolTab = button.dataset.tab;
  renderToolPanel();
}

function handlePracticeLevelPickerClick(event) {
  const button = event.target.closest("[data-practice-focus]");
  if (!button) return;
  state.practiceFocus = button.dataset.practiceFocus;
  renderPracticeLevelPicker();
}

function handleHomeModeSwitchClick(event) {
  const button = event.target.closest("[data-home-mode]");
  if (!button) return;
  state.homeMode = button.dataset.homeMode;
  render();
}

function handleToolPanelClick(event) {
  const verbLevelButton = event.target.closest("[data-verb-level]");
  if (verbLevelButton) {
    state.selectedVerbLevel = Number(verbLevelButton.dataset.verbLevel);
    renderToolPanel();
    return;
  }

  const button = event.target.closest("#studio-generate");
  if (!button) return;
  generateStudioResult();
}

function handleToolPanelInput(event) {
  if (event.target.id === "studio-input") {
    state.studioInput = event.target.value;
    return;
  }

  if (event.target.id === "studio-target-level") {
    state.studioTargetLevel = event.target.value;
  }
}

function getCoachCopy() {
  if (!state.session) {
    return {
      label: "Small advice",
      title: "Choose the path that matches your mood",
      body: "Learn if you want support. Practise if you want repetition. Play/Test if you want to check yourself.",
      prompt: "There is no wrong entry point. BloomRang should meet you where you are.",
    };
  }

  const session = state.session;
  const round = session.rounds[session.currentRoundIndex];
  const selectedCard = findCurrentSelectedCard(round);
  const currentCard = selectedCard || round.find((card) => !card.revealed) || round[0];

  if (session.mode === "learn") {
    if (session.revealReady && currentCard) {
      return {
        label: "Takeaway",
        title: `This is really ${getLevelLabel(currentCard.level)}`,
        body: currentCard.why,
        prompt: currentCard.contrast || "Ask what the learner must actually do, not just what the sentence sounds like.",
      };
    }

    return {
      label: "Hint",
      title: "Look for the thinking move",
      body:
        currentCard?.teachingHint ||
        "Ask whether the learner is recalling, explaining, using, analyzing, judging, or designing.",
      prompt: currentCard?.trap_verb
        ? `Watch the trap verb: "${currentCard.trap_verb}".`
        : "The best clue is what the learner must do, not the nicest verb.",
    };
  }

  if (session.revealReady) {
    return {
      label: "After checking",
      title: "Do not skip the reasons",
      body: "The score is useful, but the reasons teach you. Compare your first choice with the correct level.",
      prompt: "Ask: was the learner recalling, explaining, using, comparing, judging, or designing?",
    };
  }

  if (selectedCard) {
    const levelHint = selectedCard.trap_verb
      ? `Possible trap verb: "${selectedCard.trap_verb}".`
      : "Scan the sentence for the real task, not the nicest academic wording.";
    return {
      label: "Current card",
      title: "Say the thinking move first",
      body: levelHint,
      prompt: "Quick ladder: recall, explain, use, compare, judge, design.",
    };
  }

  return {
    label: "Thinking coach",
    title: "Look past the verb",
    body:
      "Bloom’s taxonomy is not a verb-matching game. Ask what the learner must really do with the knowledge.",
    prompt: "Quick test: recall, explain, use, compare, judge, or design?",
  };
}

function findCurrentSelectedCard(round) {
  return round.find((card) => card.id === state.selectedCardId) || null;
}

function renderRound() {
  const round = state.session.rounds[state.session.currentRoundIndex];
  const unplaced = round.filter((card) => card.assignedLevel === null);
  const allPlaced = round.every((card) => card.assignedLevel !== null);

  elements.checkButton.hidden = state.session.revealReady || state.session.autoCheck;
  elements.checkButton.disabled = !allPlaced;
  elements.nextButton.hidden = !state.session.revealReady;
  elements.selectionPill.hidden = !state.selectedCardId;
  elements.nextButton.textContent = getNextButtonText();
  elements.gameScreen.classList.toggle("is-reviewing", state.session.revealReady);
  elements.gameScreen.classList.toggle("has-card-selected", Boolean(state.selectedCardId));

  renderTray(unplaced, round.length);
  renderLadder(round);
}

function getNextButtonText() {
  const session = state.session;
  const isLastRound = session.currentRoundIndex === session.rounds.length - 1;

  if (session.mode === "learn") {
    return isLastRound ? "Finish Learning" : "Next Lesson";
  }

  return isLastRound ? "See My Result" : "Next Round";
}

function renderTray(cards, totalCards) {
  elements.trayCards.innerHTML = "";
  elements.trayCards.classList.toggle("has-selection", Boolean(state.selectedCardId));
  if (cards.length === 0) {
    const done = document.createElement("p");
    done.className = "cards-helper";
    done.textContent = `All ${totalCards} cards are placed. Ready to check.`;
    elements.trayCards.append(done);
    return;
  }

  cards.forEach((card) => {
    const node = createCardElement(card);
    elements.trayCards.append(node);
  });
}

function renderLadder(round) {
  elements.ladder.innerHTML = "";
  LEVELS.forEach((level) => {
    const fragment = elements.rungTemplate.content.firstElementChild.cloneNode(true);
    fragment.dataset.level = String(level.value);
    fragment.querySelector(".rung-number").textContent = `Level ${level.value}`;
    fragment.querySelector(".rung-title").textContent = level.label;
    fragment.querySelector(".rung-object").textContent = LEVEL_OBJECTS[level.value];
    fragment.querySelector(".rung-hint").textContent = state.selectedCardId && !state.session.revealReady
      ? "Tap to match"
      : level.cue;

    fragment.addEventListener("click", () => {
      if (!state.selectedCardId || state.session.revealReady) return;
      assignCardToLevel(state.selectedCardId, level.value);
    });

    fragment.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && state.selectedCardId && !state.session.revealReady) {
        event.preventDefault();
        assignCardToLevel(state.selectedCardId, level.value);
      }
    });

    const slot = fragment.querySelector(".rung-cards");
    round
      .filter((card) => card.assignedLevel === level.value)
      .forEach((card) => {
        const node = createCardElement(card);
        slot.append(node);
      });

    elements.ladder.append(fragment);
  });
}

function createCardElement(card) {
  const element = elements.cardTemplate.content.firstElementChild.cloneNode(true);
  element.dataset.cardId = card.id;
  element.dataset.cardKind = card.type;
  const rank = card.type === "objective" ? "O" : "Q";
  const suit = card.type === "objective" ? "TASK" : "ASK";
  element.querySelectorAll(".card-rank").forEach((node) => {
    node.textContent = rank;
  });
  element.querySelectorAll(".card-suit").forEach((node) => {
    node.textContent = suit;
  });
  element.querySelector(".card-type").textContent =
    card.type === "objective" ? "Objective" : "Question";
  element.querySelector(".card-index").textContent = `Bloom card ${card.sessionIndex + 1}`;
  element.querySelector(".card-text").textContent = card.text;

  if (card.revealed) {
    const reason = element.querySelector(".card-reason");
    reason.hidden = false;
    reason.textContent = card.why;
    element.classList.add(card.isCorrect ? "is-correct" : "is-wrong", "is-locked");
  }

  if (state.selectedCardId === card.id) {
    element.classList.add("is-selected");
  }

  element.addEventListener("click", () => {
    if (state.session.revealReady) return;
    if (state.suppressClick.cardId === card.id && Date.now() < state.suppressClick.until) {
      return;
    }
    state.selectedCardId = state.selectedCardId === card.id ? null : card.id;
    render();
  });

  element.addEventListener("keydown", (event) => {
    if (state.session.revealReady) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      state.selectedCardId = state.selectedCardId === card.id ? null : card.id;
      render();
    }
  });

  attachPointerDrag(element, card.id);
  return element;
}

function attachPointerDrag(element, cardId) {
  element.addEventListener("pointerdown", (event) => {
    if (state.session.revealReady) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (event.pointerType !== "mouse") return;

    const wasSelected = state.selectedCardId === cardId;
    const sourceRect = element.getBoundingClientRect();
    const ghost = buildGhost(element);

    state.dragging = {
      cardId,
      pointerId: event.pointerId,
      offsetX: event.clientX - sourceRect.left,
      offsetY: event.clientY - sourceRect.top,
      started: false,
    };

    state.selectedCardId = cardId;
    element.setPointerCapture(event.pointerId);
    element.classList.add("is-dragging");

    const onMove = (moveEvent) => {
      if (!state.dragging || moveEvent.pointerId !== state.dragging.pointerId) return;
      const dx = Math.abs(moveEvent.clientX - event.clientX);
      const dy = Math.abs(moveEvent.clientY - event.clientY);

      if (!state.dragging.started && dx + dy > 8) {
        state.dragging.started = true;
        elements.dragGhost.hidden = false;
      }

      if (!state.dragging.started) return;
      positionGhost(moveEvent.clientX - state.dragging.offsetX, moveEvent.clientY - state.dragging.offsetY);
      updateHoveredRung(moveEvent.clientX, moveEvent.clientY);
    };

    const onEnd = (endEvent) => {
      if (!state.dragging || endEvent.pointerId !== state.dragging.pointerId) return;

      const targetLevel = state.dragging.started
        ? getLevelAtPoint(endEvent.clientX, endEvent.clientY)
        : null;

      cleanupDrag();

      if (targetLevel !== null) {
        state.suppressClick = {
          cardId,
          until: Date.now() + 250,
        };
        assignCardToLevel(cardId, targetLevel);
      } else {
        if (!state.dragging?.started) {
          state.selectedCardId = wasSelected ? null : cardId;
        }
        state.suppressClick = {
          cardId,
          until: Date.now() + 250,
        };
        render();
      }

      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerup", onEnd);
      element.removeEventListener("pointercancel", onEnd);
    };

    element.addEventListener("pointermove", onMove);
    element.addEventListener("pointerup", onEnd);
    element.addEventListener("pointercancel", onEnd);
  });
}

function buildGhost(source) {
  elements.dragGhost.innerHTML = "";
  const clone = source.cloneNode(true);
  clone.classList.remove("is-dragging");
  clone.classList.add("is-selected");
  elements.dragGhost.append(clone);
  return clone;
}

function positionGhost(x, y) {
  elements.dragGhost.style.transform = `translate(${x}px, ${y}px)`;
}

function cleanupDrag() {
  document.querySelectorAll(".rung.is-hover").forEach((rung) => rung.classList.remove("is-hover"));
  document.querySelectorAll(".card.is-dragging").forEach((card) => card.classList.remove("is-dragging"));
  elements.dragGhost.hidden = true;
  elements.dragGhost.style.transform = "translate(-9999px, -9999px)";
  state.dragging = null;
}

function updateHoveredRung(x, y) {
  const level = getLevelAtPoint(x, y);
  document.querySelectorAll(".rung").forEach((rung) => {
    rung.classList.toggle("is-hover", rung.dataset.level === String(level));
  });
}

function getLevelAtPoint(x, y) {
  const hit = document.elementFromPoint(x, y);
  const rung = hit?.closest?.(".rung");
  return rung ? Number(rung.dataset.level) : null;
}

function assignCardToLevel(cardId, level) {
  const round = state.session.rounds[state.session.currentRoundIndex];
  const card = round.find((entry) => entry.id === cardId);
  if (!card) return;
  card.assignedLevel = level;
  state.selectedCardId = null;

  if (state.session.autoCheck && round.every((entry) => entry.assignedLevel !== null)) {
    checkRound(true);
    return;
  }

  render();
}

function checkRound() {
  const round = state.session.rounds[state.session.currentRoundIndex];

  round.forEach((card) => {
    card.isCorrect = card.assignedLevel === card.level;
  });

  const roundResults = round.map((card) => ({
    id: card.id,
    isCorrect: card.isCorrect,
  }));

  state.session.results.push(...roundResults);
  state.session.totalCorrect += round.filter((card) => card.isCorrect).length;
  state.session.revealReady = true;

  round.forEach((card) => {
    if (!card.isCorrect) {
      card.assignedLevel = card.level;
    }
    card.revealed = true;
  });

  render();
}

function nextRound() {
  const session = state.session;
  const isLastRound = session.currentRoundIndex === session.rounds.length - 1;

  if (isLastRound) {
    finishSession();
    return;
  }

  session.currentRoundIndex += 1;
  session.revealReady = false;
  state.selectedCardId = null;
  render();
}

function finishSession() {
  state.session.completed = true;

  if (state.session.mode === "challenge") {
    updateBestScore();
  }

  if (state.session.mode === "learn" && !state.progress.primerDone) {
    state.progress.primerDone = true;
    saveProgress(state.progress);
  }

  renderResultIfNeeded();
}

function updateBestScore() {
  const progress = state.progress;
  progress.bestScore = Math.max(progress.bestScore, state.session.totalCorrect);
  saveProgress(progress);
}

function renderResultIfNeeded() {
  if (!state.session) {
    elements.resultScreen.hidden = true;
    return;
  }

  if (!state.session.completed) {
    elements.resultScreen.hidden = true;
    elements.gameScreen.hidden = false;
    return;
  }

  elements.resultScreen.hidden = false;
  elements.gameScreen.hidden = true;
  elements.checkButton.hidden = true;
  elements.nextButton.hidden = true;

  const total = state.session.totalAttempts;
  const correct = state.session.totalCorrect;
  const rank = getRank(correct, total);
  const grid = formatEmojiGrid(state.session.results, state.session.roundSize || ROUND_SIZE);
  const shareText = buildShareText({
    mode: state.session.mode,
    dateKey: state.dailyDateKey,
    correct,
    total,
    rank,
    grid,
  });

  if (state.session.mode === "learn") {
    elements.resultModeLabel.textContent = "Guided primer complete";
    elements.resultTitle.textContent = "Good. Now the ladder should feel less abstract.";
    elements.resultSummary.textContent =
      "You have seen how Apply, Analyze, Evaluate, and Create can look close but ask for different thinking. Now practise a level or test yourself.";
    elements.resultGrid.textContent = "Recall\nExplain\nUse\nCompare\nJudge\nDesign";
    elements.shareText.hidden = true;
    elements.copyButton.hidden = true;
    elements.practiceButton.textContent = "Practise Next";
    elements.dailyButton.textContent = "Back to Start";
    return;
  }

  elements.resultModeLabel.textContent =
    state.session.mode === "challenge" ? "Challenge result" : "Practice result";
  elements.resultTitle.textContent = `${rank.label}`;
  elements.resultSummary.textContent = `${correct} of ${total} correct. ${rank.copy}`;
  elements.resultGrid.textContent = grid;
  elements.shareText.value = shareText;
  const isChallenge = state.session.mode === "challenge";
  elements.shareText.hidden = !isChallenge;
  elements.copyButton.hidden = !isChallenge;
  elements.dailyButton.textContent = "Back to Start";
  elements.practiceButton.textContent = isChallenge ? "Practise the Gaps" : "Try Another Round";
}

function handlePrimaryResultAction() {
  if (state.session?.mode === "learn" && state.session.completed) {
    startPracticeSession("mixed");
    return;
  }

  if (state.session?.mode === "practice" && state.session.completed) {
    startPracticeSession(state.practiceFocus);
    return;
  }

  if (state.session?.mode === "challenge" && state.session.completed) {
    startPracticeSession("mixed");
    return;
  }

  startPracticeSession();
}

function handleSecondaryResultAction() {
  if (state.session?.mode === "learn" && state.session.completed) {
    openHome();
    return;
  }

  openHome();
}

async function copyResult() {
  try {
    await navigator.clipboard.writeText(elements.shareText.value);
    elements.copyButton.textContent = "Copied";
    window.setTimeout(() => {
      elements.copyButton.textContent = "Copy Result";
    }, 1400);
  } catch (error) {
    console.error(error);
    elements.copyButton.textContent = "Could not copy";
    window.setTimeout(() => {
      elements.copyButton.textContent = "Copy Result";
    }, 1400);
  }
}

function showGameScreen() {
  state.session.completed = false;
  state.session.revealReady = false;
  elements.resultScreen.hidden = true;
  elements.gameScreen.hidden = false;
  elements.checkButton.hidden = state.session.autoCheck;
  elements.nextButton.hidden = true;
}

function getPlayableItems() {
  return state.items.length > 0 ? state.items : FALLBACK_ITEMS;
}

function selectChallengeItems(items, count) {
  const oneFromEachLevel = LEVELS.slice()
    .reverse()
    .map((level) => selectPracticeItems(items, 1, String(level.value))[0])
    .filter(Boolean);
  const usedIds = new Set(oneFromEachLevel.map((item) => item.id));
  const remaining = selectPracticeItems(
    items.filter((item) => !usedIds.has(item.id)),
    Math.max(0, count - oneFromEachLevel.length),
    "mixed"
  );
  return [...oneFromEachLevel, ...remaining].slice(0, count);
}

function selectPracticeItems(items, count, focus = "mixed") {
  const source =
    focus === "mixed" ? items : items.filter((item) => item.level === Number(focus));
  const pool = [...source];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
}

function getRank(correct, total) {
  const ratio = correct / total;
  if (ratio === 1) {
    return {
      label: "Clean Sweep",
      copy: "You saw the real thinking demand every time.",
    };
  }
  if (ratio >= 0.8) {
    return {
      label: "Sharp Eye",
      copy: "Your Bloom's Taxonomy judgement is becoming precise.",
    };
  }
  if (ratio >= 0.6) {
    return {
      label: "Getting There",
      copy: "You are starting to separate the verb from what the learner must actually do.",
    };
  }
  return {
    label: "Good Start",
    copy: "Read the reasons slowly. The pattern will start to click.",
  };
}

function formatEmojiGrid(results, width) {
  return chunk(
    results.map((result) => (result.isCorrect ? "🟩" : "🟥")),
    width
  )
    .map((row) => row.join(""))
    .join("\n");
}

function buildShareText({ mode, dateKey, correct, total, rank, grid }) {
  const title = mode === "challenge" ? `BloomRang Challenge ${dateKey}` : "BloomRang Practice";
  return `${title}\n${correct}/${total} ${rank.label}\n${grid}\nMatch the real thinking task, not just the verb.`;
}

function getLevelLabel(level) {
  return LEVEL_MAP.get(level)?.label || "Unknown";
}

function getDailyFocusLevel(dateKey) {
  return seededShuffle(LEVELS, hashString(`focus-${dateKey}`))[0].value;
}

function generateStudioResult() {
  const raw = normalizeWhitespace(state.studioInput);
  if (!raw) {
    state.studioResult = null;
    renderToolPanel();
    return;
  }

  const probableLevelValue = inferBloomLevel(raw);
  const targetLevelValue = state.studioTargetLevel === "auto" ? probableLevelValue : Number(state.studioTargetLevel);
  const probable = LEVEL_MAP.get(probableLevelValue);
  const target = LEVEL_MAP.get(targetLevelValue);
  const topicLabel = extractObjectiveTopic(raw);
  const rewrite = buildBloomRewrite(topicLabel, targetLevelValue);
  const why = buildStudioWhy(raw, probableLevelValue, targetLevelValue);
  const issue = describeObjectiveIssue(raw, probableLevelValue, targetLevelValue);
  const questionStems = LEVEL_SUPPORT[targetLevelValue].stems.map((stem) => fillStem(stem, topicLabel));

  state.studioResult = {
    probable,
    target,
    rewrite,
    why,
    issue,
    questionStems,
    topicLabel,
  };

  renderToolPanel();
}

function inferBloomLevel(text) {
  const lower = text.toLowerCase();

  if (/(design|develop|create|construct|build|propose|plan)\b/.test(lower)) return 6;
  if (/(judge|justify|defend|critique|appraise|assess|evaluate|prioriti[sz]e|recommend the best|which is better)\b/.test(lower)) return 5;
  if (/(analy[sz]e|compare|differentiat|distinguish|sort|examine|break down|identify the cause|which clue)\b/.test(lower)) return 4;
  if (/(calculate|perform|demonstrate|apply|use|score|carry out|choose the next step|determine)\b/.test(lower)) return 3;
  if (/(explain|describe|summari[sz]e|interpret|discuss|clarify)\b/.test(lower)) return 2;
  if (/(list|name|define|identify|recall|state|label)\b/.test(lower)) return 1;
  if (/(understand|know|learn about|be aware of|familiari[sz]e)\b/.test(lower)) return 2;
  return 2;
}

function extractObjectiveTopic(text) {
  const stripped = normalizeWhitespace(
    text
      .replace(/^(students?|learners?|participants?)\s+will\s+/i, "")
      .replace(/^by the end of (this|the) session,?\s+(students?|learners?|participants?)\s+will\s+/i, "")
      .replace(/^(students?|learners?|participants?)\s+should\s+be\s+able\s+to\s+/i, "")
      .replace(/^(students?|learners?|participants?)\s+should\s+/i, "")
      .replace(/^(be able to)\s+/i, "")
  );

  const withoutLeadVerb = stripped.replace(
    /^(understand|know|learn about|be aware of|explain|describe|summari[sz]e|interpret|discuss|list|name|define|identify|recall|state|calculate|perform|demonstrate|apply|use|score|carry out|determine|analy[sz]e|compare|differentiate|distinguish|sort|examine|judge|justify|defend|critique|assess|evaluate|design|develop|create|construct|build|propose|plan)\s+/i,
    ""
  );

  return normalizeWhitespace(withoutLeadVerb.replace(/^how to\s+/i, "").replace(/[.]+$/g, "")) || "the topic";
}

function buildBloomRewrite(topicLabel, levelValue) {
  const topic = topicLabel.replace(/^[Tt]he /, "");
  const lowerTopic = topic.toLowerCase();

  if (levelValue === 3 && /^(calculate|perform|demonstrate|interpret|score|use|apply)\b/.test(lowerTopic)) {
    return `By the end of this session, learners will ${topic}.`;
  }

  if (levelValue === 4 && /^(analy[sz]e|compare|differentiate|distinguish|sort|examine)\b/.test(lowerTopic)) {
    return `By the end of this session, learners will ${topic}.`;
  }

  if (levelValue === 5 && /^(judge|justify|defend|critique|assess|evaluate)\b/.test(lowerTopic)) {
    return `By the end of this session, learners will ${topic}.`;
  }

  if (levelValue === 6 && /^(design|develop|create|construct|build|propose|plan)\b/.test(lowerTopic)) {
    return `By the end of this session, learners will ${topic}.`;
  }

  return `By the end of this session, learners will ${LEVEL_SUPPORT[levelValue].rewrite.replace("{topic}", topic)}.`;
}

function buildStudioWhy(raw, probableLevelValue, targetLevelValue) {
  const vagueVerb = findVagueVerb(raw);
  const probable = getLevelLabel(probableLevelValue);
  const target = getLevelLabel(targetLevelValue);

  if (targetLevelValue === probableLevelValue) {
    return vagueVerb
      ? `The original wording uses the vague verb "${vagueVerb}". This rewrite makes the ${target} task clearer and easier to assess.`
      : `This wording keeps the task at ${target} but makes the learner's task clearer and easier to assess.`;
  }

  return vagueVerb
    ? `The original wording leans toward ${probable} and includes the vague verb "${vagueVerb}". The rewrite intentionally moves it to ${target}.`
    : `The original wording sounds like ${probable}. This rewrite intentionally shifts it toward ${target}.`;
}

function describeObjectiveIssue(raw, probableLevelValue, targetLevelValue) {
  const probable = getLevelLabel(probableLevelValue);
  if (targetLevelValue === probableLevelValue) {
    return `Likely current fit: ${probable}. The main goal here is to make the level more explicit and measurable.`;
  }
  return `Likely current fit: ${probable}. Your chosen target changes the objective to ${getLevelLabel(targetLevelValue)} so the task demand becomes clearer.`;
}

function findVagueVerb(text) {
  const match = text.toLowerCase().match(/\b(understand|know|learn about|be aware of|familiarise|familiarize)\b/);
  return match ? match[0] : null;
}

function fillStem(template, topicLabel) {
  const topic = topicLabel === "the topic" ? "this topic" : topicLabel;
  return template.replace("{topic}", topic);
}

function normalizeWhitespace(text) {
  return text.replace(/\s+/g, " ").trim();
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { bestScore: 0, primerDone: false };
    }
    const saved = JSON.parse(raw);
    return {
      bestScore: saved.bestScore ?? 0,
      primerDone: saved.primerDone ?? false,
    };
  } catch {
    return { bestScore: 0, primerDone: false };
  }
}

function saveProgress(progress) {
  state.progress = progress;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Local storage can fail in private browsing or restricted contexts.
  }
}

function getUtcDateKey(date) {
  return date.toISOString().slice(0, 10);
}

function chunk(list, size) {
  const parts = [];
  for (let index = 0; index < list.length; index += size) {
    parts.push(list.slice(index, index + size));
  }
  return parts;
}

function seededShuffle(list, seed) {
  const copy = [...list];
  const random = mulberry32(seed);
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seed) {
  return function random() {
    let next = (seed += 0x6d2b79f5);
    next = Math.imul(next ^ (next >>> 15), next | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}
