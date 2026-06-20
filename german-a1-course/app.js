// German A1 Interactive Course - Application Logic

// --- User State Management ---
let userState = {
  xp: 0,
  streak: 1,
  streakDate: new Date().toDateString(),
  lessonsRead: [],
  quizzesPassed: [],
  vocabStates: {}, // word -> boolean (true = mastered, false = needs review)
  examHistory: []
};

// Load state from LocalStorage on load
function loadState() {
  const savedState = localStorage.getItem('german_a1_course_state');
  if (savedState) {
    try {
      userState = JSON.parse(savedState);
      // Validate streak
      checkStreak();
    } catch (e) {
      console.error("Failed to load saved state, using default.", e);
    }
  } else {
    // Initial save
    saveState();
  }
}

function saveState() {
  localStorage.setItem('german_a1_course_state', JSON.stringify(userState));
  updateProgressUI();
}

function checkStreak() {
  const today = new Date().toDateString();
  const lastStudyDate = userState.streakDate;
  
  if (lastStudyDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastStudyDate === yesterday.toDateString()) {
      // Streak continues!
      // But we only increment when they complete a task, not on initial load
    } else {
      // Streak broken, reset to 1
      userState.streak = 1;
      userState.streakDate = today;
    }
  }
}

function addXP(amount) {
  userState.xp += amount;
  
  // Trigger active streak update
  const today = new Date().toDateString();
  if (userState.streakDate !== today) {
    userState.streak += 1;
    userState.streakDate = today;
  }
  
  saveState();
  
  // XP Toast visual effect could go here
  console.log(`XP added: ${amount}, current total: ${userState.xp}`);
}

// --- Navigation & Routing ---
const viewPanes = ['dashboard', 'lessons', 'vocab', 'game', 'exam'];

function switchView(viewName) {
  viewPanes.forEach(pane => {
    const element = document.getElementById(`view-${pane}`);
    const navLink = document.getElementById(`nav-${pane}`);
    
    if (pane === viewName) {
      element.classList.add('active');
      navLink.classList.add('active');
    } else {
      element.classList.remove('active');
      navLink.classList.remove('active');
    }
  });

  // Action hook on navigation
  if (viewName === 'dashboard') {
    renderDashboard();
  } else if (viewName === 'lessons') {
    initLessonsView();
  } else if (viewName === 'vocab') {
    initVocabView();
  } else if (viewName === 'game') {
    initGameView();
  } else if (viewName === 'exam') {
    initExamView();
  }
}

// --- UI Updaters ---
function updateProgressUI() {
  // Update XP & Streak text
  document.getElementById('total-xp').innerText = userState.xp;
  document.getElementById('stats-xp').innerText = userState.xp;
  document.getElementById('streak-count').innerText = userState.streak;
  document.getElementById('stats-streak').innerText = userState.streak;
  
  // Calculate total vocab mastered
  const masteredCount = Object.values(userState.vocabStates).filter(v => v === true).length;
  document.getElementById('stats-vocab-mastered').innerText = `${masteredCount} / ${GERMAN_A1_DATA.vocabulary.length}`;

  // Calculate lesson completion progress
  let totalLessonsCount = 0;
  GERMAN_A1_DATA.modules.forEach(m => totalLessonsCount += m.lessons.length);
  const lessonsCompleted = userState.lessonsRead.length;
  
  // Calculate module quiz progress
  const quizzesCompleted = userState.quizzesPassed.length;
  
  // Total progress percentage (lessons = 60%, quizzes = 20%, vocab mastered = 20%)
  const lessonsWeight = totalLessonsCount > 0 ? (lessonsCompleted / totalLessonsCount) * 60 : 0;
  const quizzesWeight = GERMAN_A1_DATA.modules.length > 0 ? (quizzesCompleted / GERMAN_A1_DATA.modules.length) * 20 : 0;
  const vocabWeight = GERMAN_A1_DATA.vocabulary.length > 0 ? (Math.min(masteredCount, 30) / 30) * 20 : 0; // capped at 30 words for progress weighting
  
  const totalPercentage = Math.round(lessonsWeight + quizzesWeight + vocabWeight);
  
  document.getElementById('overall-progress-text').innerText = `${totalPercentage}%`;
  document.getElementById('overall-progress-fill').style.width = `${totalPercentage}%`;
  
  // Handle Achievements/Badges
  updateAchievements(masteredCount);
}

function updateAchievements(masteredCount) {
  // Badge 1: Welcome Anfänger (Always unlocked initially)
  const welcomeBadge = document.getElementById('badge-welcome');
  welcomeBadge.classList.add('unlocked');

  // Badge 2: Wortmeister (10 vocab words mastered)
  const vocabBadge = document.getElementById('badge-vocab-10');
  if (masteredCount >= 10) {
    vocabBadge.classList.add('unlocked');
  } else {
    vocabBadge.classList.remove('unlocked');
  }

  // Badge 3: Goethe Bereit (Exam score >= 60%)
  const examBadge = document.getElementById('badge-exam-ready');
  const hasPassedExam = userState.examHistory.some(attempt => attempt.score >= 60);
  if (hasPassedExam) {
    examBadge.classList.add('unlocked');
  } else {
    examBadge.classList.remove('unlocked');
  }
}

// --- Dashboard Renderer ---
function renderDashboard() {
  const modulesList = document.getElementById('modules-list');
  modulesList.innerHTML = '';
  
  GERMAN_A1_DATA.modules.forEach((mod, idx) => {
    // Count lessons completed in this module
    const moduleLessonIds = mod.lessons.map(l => l.id);
    const completedInModule = moduleLessonIds.filter(id => userState.lessonsRead.includes(id)).length;
    const isModuleFinished = completedInModule === mod.lessons.length;
    const isQuizPassed = userState.quizzesPassed.includes(mod.id);
    
    let statusText = `${completedInModule} / ${mod.lessons.length} lessons read`;
    if (isQuizPassed) {
      statusText = "🏆 Module Completed & Quiz Passed!";
    } else if (isModuleFinished) {
      statusText = "⭐ Lessons read. Ready for Module Quiz!";
    }
    
    const row = document.createElement('div');
    row.className = 'module-row';
    row.onclick = () => {
      currentModuleIdx = idx;
      currentLessonIdx = 0;
      switchView('lessons');
    };
    
    row.innerHTML = `
      <div class="module-info">
        <span class="module-title">${mod.title}</span>
        <span class="module-subtitle">${statusText}</span>
      </div>
      <div class="module-action">
        <button class="btn-start">${isQuizPassed ? 'Review' : (isModuleFinished ? 'Take Quiz' : 'Study')}</button>
      </div>
    `;
    
    modulesList.appendChild(row);
  });
}

// --- Lessons Engine ---
let currentModuleIdx = 0;
let currentLessonIdx = 0;
let isQuizMode = false;
let quizQuestions = [];
let quizCurrentQuestionIdx = 0;
let quizAnswersCorrect = 0;

function initLessonsView() {
  isQuizMode = false;
  document.getElementById('btn-module-quiz').style.display = 'none';
  
  // Highlight active module title
  const activeMod = GERMAN_A1_DATA.modules[currentModuleIdx];
  document.getElementById('active-module-title').innerText = activeMod.title;
  
  // Render sidebar links
  const linksList = document.getElementById('lesson-links-list');
  linksList.innerHTML = '';
  
  activeMod.lessons.forEach((les, idx) => {
    const li = document.createElement('li');
    const isCompleted = userState.lessonsRead.includes(les.id);
    li.className = `lesson-nav-item ${idx === currentLessonIdx ? 'active' : ''}`;
    li.innerHTML = `
      <span>${les.title}</span>
      <span>${isCompleted ? '✔' : ''}</span>
    `;
    li.onclick = () => {
      currentLessonIdx = idx;
      isQuizMode = false;
      loadLesson();
    };
    linksList.appendChild(li);
  });
  
  loadLesson();
}

function loadLesson() {
  const activeMod = GERMAN_A1_DATA.modules[currentModuleIdx];
  const activeLes = activeMod.lessons[currentLessonIdx];
  
  // Highlight sidebar links
  const navItems = document.querySelectorAll('.lesson-nav-item');
  navItems.forEach((item, idx) => {
    if (idx === currentLessonIdx) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const viewport = document.getElementById('lesson-viewport');
  viewport.innerHTML = `
    <h2>${activeLes.title}</h2>
    <div style="margin-top: 1.5rem;">
      ${activeLes.content}
    </div>
  `;
  
  // Mark lesson as completed
  if (!userState.lessonsRead.includes(activeLes.id)) {
    userState.lessonsRead.push(activeLes.id);
    addXP(10); // +10 XP for reading a lesson
  }
  
  // Render controls
  document.getElementById('btn-prev-lesson').disabled = currentLessonIdx === 0;
  
  const isLastLesson = currentLessonIdx === activeMod.lessons.length - 1;
  if (isLastLesson) {
    document.getElementById('btn-next-lesson').style.display = 'none';
    document.getElementById('btn-module-quiz').style.display = 'block';
    
    const isQuizPassed = userState.quizzesPassed.includes(activeMod.id);
    document.getElementById('btn-module-quiz').innerText = isQuizPassed ? 'Retake Quiz' : 'Unlock Module Quiz';
  } else {
    document.getElementById('btn-next-lesson').style.display = 'block';
    document.getElementById('btn-module-quiz').style.display = 'none';
  }
}

function navigateLesson(dir) {
  currentLessonIdx += dir;
  loadLesson();
}

// Module Quiz Mode
function startModuleQuiz() {
  isQuizMode = true;
  const activeMod = GERMAN_A1_DATA.modules[currentModuleIdx];
  quizQuestions = activeMod.quizzes;
  quizCurrentQuestionIdx = 0;
  quizAnswersCorrect = 0;
  
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const activeMod = GERMAN_A1_DATA.modules[currentModuleIdx];
  const viewport = document.getElementById('lesson-viewport');
  const question = quizQuestions[quizCurrentQuestionIdx];
  
  viewport.innerHTML = `
    <div class="quiz-container">
      <h3>${activeMod.title} - Quiz Question ${quizCurrentQuestionIdx + 1} of ${quizQuestions.length}</h3>
      <div class="quiz-card">
        <p class="quiz-question">${question.question}</p>
        <div class="quiz-options">
          ${question.options.map((opt, oIdx) => `
            <div class="quiz-option" id="quiz-opt-${oIdx}" onclick="selectQuizOption(${oIdx})">
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
        
        <div class="quiz-feedback-box" id="quiz-feedback"></div>
        
        <button class="btn-primary mt-4" id="btn-quiz-next" style="display: none;" onclick="navigateQuiz()">Next Question</button>
      </div>
    </div>
  `;
}

function selectQuizOption(oIdx) {
  // Disable option clicks after choice
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => opt.removeAttribute('onclick'));
  
  const question = quizQuestions[quizCurrentQuestionIdx];
  const isCorrect = oIdx === question.answer;
  
  const selectedOpt = document.getElementById(`quiz-opt-${oIdx}`);
  const feedback = document.getElementById('quiz-feedback');
  
  if (isCorrect) {
    selectedOpt.classList.add('correct');
    feedback.className = 'quiz-feedback-box correct visible';
    feedback.innerHTML = `<strong>Richtig! (Correct)</strong><br>${question.explanation}`;
    quizAnswersCorrect++;
    addXP(15); // +15 XP for correct quiz answer
  } else {
    selectedOpt.classList.add('incorrect');
    const correctOpt = document.getElementById(`quiz-opt-${question.answer}`);
    correctOpt.classList.add('correct');
    feedback.className = 'quiz-feedback-box incorrect visible';
    feedback.innerHTML = `<strong>Falsch. (Incorrect)</strong><br>${question.explanation}`;
  }
  
  document.getElementById('btn-quiz-next').style.display = 'block';
}

function navigateQuiz() {
  quizCurrentQuestionIdx++;
  if (quizCurrentQuestionIdx < quizQuestions.length) {
    renderQuizQuestion();
  } else {
    renderQuizResults();
  }
}

function renderQuizResults() {
  const activeMod = GERMAN_A1_DATA.modules[currentModuleIdx];
  const viewport = document.getElementById('lesson-viewport');
  
  const passThreshold = Math.ceil(quizQuestions.length * 0.7);
  const isPassed = quizAnswersCorrect >= passThreshold;
  
  if (isPassed && !userState.quizzesPassed.includes(activeMod.id)) {
    userState.quizzesPassed.push(activeMod.id);
    addXP(50); // bonus XP for passing a quiz
  }
  
  viewport.innerHTML = `
    <div class="quiz-container" style="text-align: center;">
      <h3>Quiz Completed!</h3>
      <div class="quiz-card" style="padding: 3rem;">
        <span style="font-size: 4rem; display: block; margin-bottom: 1rem;">${isPassed ? '🎉' : '📚'}</span>
        <h2>You scored: ${quizAnswersCorrect} / ${quizQuestions.length}</h2>
        <p class="mt-4" style="font-size: 1.1rem; color: var(--text-muted);">
          ${isPassed 
            ? 'Excellent work! You have successfully mastered the basics of this module.' 
            : 'Not quite enough to pass. We recommend reviewing the lesson material and trying again! (70% required to pass)'}
        </p>
        
        <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
          <button class="btn-secondary" onclick="startModuleQuiz()">Retake Quiz</button>
          <button class="btn-primary" onclick="initLessonsView()">Back to Lessons</button>
        </div>
      </div>
    </div>
  `;
  
  saveState();
}

// --- Vocab Hub (Flashcard Trainer) ---
let vocabList = [];
let activeVocabIndex = 0;
let currentVocabFilter = 'all';

function initVocabView() {
  filterVocab(currentVocabFilter, document.querySelector(`.btn-filter`));
}

function filterVocab(filter, btnElement) {
  currentVocabFilter = filter;
  
  // Highlight active filter button
  const filters = document.querySelectorAll('.btn-filter');
  filters.forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }

  // Apply filters
  if (filter === 'all') {
    vocabList = GERMAN_A1_DATA.vocabulary;
  } else if (filter === 'review') {
    vocabList = GERMAN_A1_DATA.vocabulary.filter(v => userState.vocabStates[v.word] === false);
  } else if (filter === 'mastered') {
    vocabList = GERMAN_A1_DATA.vocabulary.filter(v => userState.vocabStates[v.word] === true);
  } else {
    // Filter by module category
    vocabList = GERMAN_A1_DATA.vocabulary.filter(v => v.category === filter);
  }
  
  activeVocabIndex = 0;
  loadVocabWord();
}

function loadVocabWord() {
  const card = document.getElementById('vocab-card');
  card.classList.remove('flipped');
  
  const trainerBody = document.querySelector('.vocab-trainer-body');
  
  if (vocabList.length === 0) {
    trainerBody.innerHTML = `
      <div class="glass-card" style="width: 100%; max-width: 480px; text-align: center; padding: 3rem;">
        <span style="font-size: 3rem; display: block; margin-bottom: 1rem;">📭</span>
        <h3>No words in this deck</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">
          Try changing your category filters or start rating flashcards to populate this box!
        </p>
      </div>
    `;
    return;
  }
  
  // Re-write standard structure if it was wiped by empty state
  if (!document.getElementById('vocab-card')) {
    trainerBody.innerHTML = `
      <div class="flashcard-wrapper">
        <div class="flashcard" id="vocab-card" onclick="flipFlashcard()">
          <div class="card-face card-front">
            <span class="card-category" id="card-front-cat"></span>
            <div class="card-word" id="card-front-word"></div>
            <div class="card-plural" id="card-front-plural"></div>
            <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 1rem;">(Click Card to Flip)</p>
          </div>
          <div class="card-face card-back">
            <button class="speaker-btn" id="vocab-speak-btn" onclick="speakVocabWord(event)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 24px; height: 24px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            </button>
            <span class="card-meaning" id="card-back-meaning"></span>
            <div class="card-example-box">
              <div class="card-ex-de" id="card-back-ex-de"></div>
              <div class="card-ex-en" id="card-back-ex-en"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="vocab-trainer-controls">
        <button class="btn-vocab-rate review" onclick="rateVocabWord(false)">❌ Review Needed</button>
        <button class="btn-vocab-rate master" onclick="rateVocabWord(true)">✔ Mastered!</button>
      </div>
    `;
  }
  
  const wordObj = vocabList[activeVocabIndex];
  
  // Set UI elements
  document.getElementById('card-front-cat').innerText = wordObj.category;
  
  // Include article if it is a noun
  if (wordObj.type === 'noun' && wordObj.article) {
    const coloredArticle = `<span class="gender-${wordObj.article}">${wordObj.article}</span>`;
    document.getElementById('card-front-word').innerHTML = `${coloredArticle} ${wordObj.word}`;
    document.getElementById('card-front-plural').innerText = wordObj.plural ? `Plural: die ${wordObj.plural}` : 'Plural: -';
    document.getElementById('card-front-plural').style.display = 'block';
  } else {
    document.getElementById('card-front-word').innerText = wordObj.word;
    document.getElementById('card-front-plural').style.display = 'none';
  }
  
  document.getElementById('card-back-meaning').innerText = `${wordObj.translation} (${wordObj.type})`;
  document.getElementById('card-back-ex-de').innerText = wordObj.example;
  document.getElementById('card-back-ex-en').innerText = wordObj.exampleTranslation;
}

function flipFlashcard() {
  const card = document.getElementById('vocab-card');
  if (card) {
    card.classList.toggle('flipped');
  }
}

function speakVocabWord(event) {
  event.stopPropagation(); // prevent flipping card when clicking speaker
  const wordObj = vocabList[activeVocabIndex];
  if (!wordObj) return;
  
  let speechText = wordObj.word;
  if (wordObj.type === 'noun' && wordObj.article) {
    speechText = `${wordObj.article} ${wordObj.word}`;
  }
  
  playGermanAudio(speechText);
}

function rateVocabWord(isMastered) {
  const wordObj = vocabList[activeVocabIndex];
  if (!wordObj) return;
  
  const prevVal = userState.vocabStates[wordObj.word];
  userState.vocabStates[wordObj.word] = isMastered;
  
  // Grant XP if newly mastered
  if (isMastered && prevVal !== true) {
    addXP(10); // +10 XP for mastering a word
  }
  
  saveState();
  
  // Slide animation trigger
  const card = document.getElementById('vocab-card');
  card.style.transform = `translateX(${isMastered ? '200px' : '-200px'}) rotateY(${card.classList.contains('flipped') ? '180deg' : '0deg'})`;
  card.style.opacity = '0';
  
  setTimeout(() => {
    activeVocabIndex++;
    if (activeVocabIndex >= vocabList.length) {
      activeVocabIndex = 0; // cycle back
    }
    loadVocabWord();
    
    // reset anim styles
    const newCard = document.getElementById('vocab-card');
    if (newCard) {
      newCard.style.transform = '';
      newCard.style.opacity = '';
    }
  }, 300);
}

// --- Der - Die - Das Game (Noun Articles Matcher) ---
let gameCurrentWord = null;
let gameScore = 0;
let gameStreak = 0;
let gameBestStreak = 0;
let gameNounsList = [];

function initGameView() {
  gameNounsList = GERMAN_A1_DATA.vocabulary.filter(v => v.type === 'noun' && v.article);
  loadNextGameWord();
}

function loadNextGameWord() {
  const card = document.getElementById('game-card');
  card.className = 'game-board'; // remove feedback animations
  
  if (gameNounsList.length === 0) return;
  
  const randIdx = Math.floor(Math.random() * gameNounsList.length);
  gameCurrentWord = gameNounsList[randIdx];
  
  document.getElementById('game-current-word').innerText = gameCurrentWord.word;
  document.getElementById('game-current-plural').innerText = gameCurrentWord.plural ? `Plural: die ${gameCurrentWord.plural}` : 'Plural: -';
}

function submitGender(selectedGender) {
  const card = document.getElementById('game-card');
  const isCorrect = selectedGender.toLowerCase() === gameCurrentWord.article.toLowerCase();
  
  // Disable option clicks temporarily during animation
  const buttons = document.querySelectorAll('.btn-gender');
  buttons.forEach(btn => btn.disabled = true);
  
  if (isCorrect) {
    card.classList.add('correct');
    // green flash trigger
    gameScore += 10;
    gameStreak++;
    if (gameStreak > gameBestStreak) {
      gameBestStreak = gameStreak;
    }
    addXP(5); // +5 XP for article correctness
    playGermanAudio(gameCurrentWord.article + " " + gameCurrentWord.word);
  } else {
    card.classList.add('incorrect');
    // shake trigger
    gameStreak = 0;
    
    // Display error prompt overlay
    const errorTooltip = document.createElement('div');
    errorTooltip.style.color = 'var(--color-danger)';
    errorTooltip.style.marginTop = '1rem';
    errorTooltip.style.fontWeight = '700';
    errorTooltip.id = 'game-error-hint';
    errorTooltip.innerText = `Falsch! It is: ${gameCurrentWord.article.toUpperCase()} ${gameCurrentWord.word}`;
    card.appendChild(errorTooltip);
  }
  
  // Update score board
  document.getElementById('game-score').innerText = gameScore;
  document.getElementById('game-streak').innerText = gameStreak;
  document.getElementById('game-best-streak').innerText = gameBestStreak;
  
  setTimeout(() => {
    // Remove hints & reset
    const hint = document.getElementById('game-error-hint');
    if (hint) hint.remove();
    
    buttons.forEach(btn => btn.disabled = false);
    loadNextGameWord();
  }, 1800);
}

function skipGameWord() {
  loadNextGameWord();
}

// --- Mock Goethe A1 Exam Engine ---
let examTimer = null;
let examSecondsRemaining = 65 * 60;
let examUserAnswers = {}; // questionId -> selectedIndex
let examActiveSection = 'hoeren';

function initExamView() {
  document.getElementById('exam-start-panel').style.display = 'block';
  document.getElementById('exam-layout-panel').style.display = 'none';
  document.getElementById('exam-result-panel').style.display = 'none';
  
  if (examTimer) {
    clearInterval(examTimer);
    examTimer = null;
  }
}

function startMockExam() {
  document.getElementById('exam-start-panel').style.display = 'none';
  document.getElementById('exam-layout-panel').style.display = 'grid';
  
  examSecondsRemaining = 65 * 60;
  examUserAnswers = {};
  examActiveSection = 'hoeren';
  
  updateExamTimerUI();
  
  // Start interval
  examTimer = setInterval(() => {
    examSecondsRemaining--;
    updateExamTimerUI();
    
    if (examSecondsRemaining <= 0) {
      clearInterval(examTimer);
      submitMockExam();
    }
  }, 1000);
  
  switchExamSection('hoeren');
}

function updateExamTimerUI() {
  const mins = Math.floor(examSecondsRemaining / 60);
  const secs = examSecondsRemaining % 60;
  const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  
  const display = document.getElementById('exam-timer-display');
  display.innerText = timeStr;
  
  // Color timer red when critical
  if (examSecondsRemaining < 5 * 60) {
    display.style.background = 'rgba(239, 68, 68, 0.2)';
    display.style.borderColor = 'rgba(239, 68, 68, 0.4)';
  } else {
    display.style.background = '';
    display.style.borderColor = '';
  }
}

function switchExamSection(sectionId) {
  examActiveSection = sectionId;
  
  // Toggle nav links active styles
  const sections = ['hoeren', 'lesen', 'schreiben', 'sprechen'];
  sections.forEach(s => {
    const item = document.getElementById(`exam-nav-${s}`);
    if (s === sectionId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  renderExamQuestions();
}

function renderExamQuestions() {
  const container = document.getElementById('exam-questions-container');
  container.innerHTML = '';
  
  const sectionData = GERMAN_A1_DATA.mockExam.sections.find(s => s.id === examActiveSection);
  if (!sectionData) return;
  
  // Set heading & description
  const header = document.createElement('div');
  header.innerHTML = `
    <h2>${sectionData.title}</h2>
    <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.5rem; margin-bottom: 1.5rem;">
      ${sectionData.description}
    </p>
  `;
  container.appendChild(header);
  
  // Handle Sprechen Info layout
  if (sectionData.isInfoOnly && sectionData.cards) {
    sectionData.cards.forEach(card => {
      const div = document.createElement('div');
      div.className = 'glass-card mb-4';
      div.style.marginBottom = '1.25rem';
      div.innerHTML = `
        <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">${card.part}</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); font-weight: 500;">${card.guide}</p>
        <div class="accent-box" style="margin-top: 0.75rem;">
          ${card.example}
        </div>
      `;
      container.appendChild(div);
    });
    return;
  }
  
  // Render questions
  sectionData.questions.forEach((q) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'exam-question-item';
    
    // Listening TTS synthesis block helper
    let ttsBlock = '';
    if (examActiveSection === 'hoeren') {
      ttsBlock = `
        <div class="exam-audio-box">
          <button class="speaker-btn" onclick="playGermanAudio('${q.audioSnippet.replace(/'/g, "\\'")}')" style="margin-bottom: 0;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          </button>
          <span style="font-size: 0.9rem; font-weight: 500;">Click to play audio sample (Hören)</span>
        </div>
      `;
    }
    
    // Comprehension text if exists (Lesen)
    let passageBlock = '';
    if (q.text) {
      passageBlock = `
        <div class="accent-box" style="margin-bottom: 1.25rem;">
          ${q.text}
        </div>
      `;
    }
    
    qDiv.innerHTML = `
      ${passageBlock}
      ${ttsBlock}
      <p class="exam-question-text">${q.question}</p>
      <div class="exam-options-grid">
        ${q.options.map((opt, oIdx) => {
          const isSelected = examUserAnswers[q.id] === oIdx;
          return `
            <div class="exam-option-card ${isSelected ? 'selected' : ''}" id="exam-opt-${q.id}-${oIdx}" onclick="selectExamOption('${q.id}', ${oIdx})">
              <span>${opt}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
    
    container.appendChild(qDiv);
  });
}

function selectExamOption(qId, oIdx) {
  examUserAnswers[qId] = oIdx;
  
  // Redraw selected state for options of this question
  const sectionData = GERMAN_A1_DATA.mockExam.sections.find(s => s.id === examActiveSection);
  const question = sectionData.questions.find(q => q.id === qId);
  
  question.options.forEach((opt, idx) => {
    const el = document.getElementById(`exam-opt-${qId}-${idx}`);
    if (idx === oIdx) {
      el.classList.add('selected');
    } else {
      el.classList.remove('selected');
    }
  });
}

function submitMockExam() {
  if (examTimer) {
    clearInterval(examTimer);
    examTimer = null;
  }
  
  let scoreTotal = 0;
  let correctCount = 0;
  let totalQuestionsCount = 0;
  
  // Calculate score values
  // Hören has 3 qs = 30 points (10 pts each)
  // Lesen has 2 qs = 30 points (15 pts each)
  // Schreiben has 2 qs = 40 points (20 pts each)
  
  const allSections = GERMAN_A1_DATA.mockExam.sections.filter(s => !s.isInfoOnly);
  
  allSections.forEach(sec => {
    sec.questions.forEach(q => {
      totalQuestionsCount++;
      const userChoice = examUserAnswers[q.id];
      const isCorrect = userChoice === q.answer;
      
      if (isCorrect) {
        correctCount++;
        if (sec.id === 'hoeren') scoreTotal += 10;
        else if (sec.id === 'lesen') scoreTotal += 15;
        else if (sec.id === 'schreiben') scoreTotal += 20;
      }
    });
  });
  
  const isPassed = scoreTotal >= GERMAN_A1_DATA.mockExam.passingScore;
  
  // Update state and history
  const attempt = {
    score: scoreTotal,
    date: new Date().toLocaleDateString(),
    passed: isPassed
  };
  userState.examHistory.push(attempt);
  
  if (isPassed) {
    addXP(100); // Pass exam completion reward
  } else {
    addXP(20); // Participation points
  }
  
  saveState();
  
  // Hide layout, show results
  document.getElementById('exam-layout-panel').style.display = 'none';
  const resultPanel = document.getElementById('exam-result-panel');
  resultPanel.style.display = 'block';
  
  resultPanel.innerHTML = `
    <div class="exam-result-panel">
      <h2>Exam Summary</h2>
      
      <div class="result-ring">
        <div class="result-ring-fill ${isPassed ? 'pass' : 'fail'}" style="transform: rotate(${(scoreTotal / 100) * 360}deg);"></div>
        <div class="result-score">${scoreTotal}%</div>
      </div>
      
      <div class="result-verdict ${isPassed ? 'pass' : 'fail'}">
        ${isPassed ? 'PASSED (Bestanden)' : 'FAILED (Nicht bestanden)'}
      </div>
      
      <p style="color: var(--text-muted); font-size: 0.95rem;">
        You answered <strong>${correctCount} out of ${totalQuestionsCount}</strong> questions correctly. 
        Goethe-Zertifikat A1 passing mark is 60%.
      </p>
      
      <div class="accent-box" style="width: 100%; text-align: left; font-size: 0.9rem;">
        <strong>Section Scores:</strong><br>
        - Hören: ${calculateSectionCorrect('hoeren') * 10} / 30 pts<br>
        - Lesen: ${calculateSectionCorrect('lesen') * 15} / 30 pts<br>
        - Schreiben: ${calculateSectionCorrect('schreiben') * 20} / 40 pts
      </div>
      
      <div style="display: flex; gap: 1rem; margin-top: 1rem;">
        <button class="btn-secondary" onclick="startMockExam()">Retry Exam</button>
        <button class="btn-primary" onclick="switchView('dashboard')">Go to Dashboard</button>
      </div>
    </div>
  `;
}

function calculateSectionCorrect(secId) {
  const sec = GERMAN_A1_DATA.mockExam.sections.find(s => s.id === secId);
  if (!sec) return 0;
  
  let correct = 0;
  sec.questions.forEach(q => {
    if (examUserAnswers[q.id] === q.answer) correct++;
  });
  return correct;
}

// --- Text-to-Speech Helpers ---
function playGermanAudio(text) {
  if ('speechSynthesis' in window) {
    // Cancel any active synthesis to avoid overlapping speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    
    // Retrieve a suitable German voice if possible
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(voice => voice.lang.includes('de-DE') || voice.lang.includes('de_DE'));
    if (deVoice) {
      utterance.voice = deVoice;
    }
    
    // Set parameters
    utterance.pitch = 1.0;
    utterance.rate = 0.85; // slightly slower for better learning clarity
    
    // Play
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Speech Synthesis is not supported in this browser. Sound text: " + text);
  }
}

// --- App Load Trigger ---
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderDashboard();
  updateProgressUI();
  
  // Ensure voices are loaded for SpeechSynthesis (some browsers require this voice change trigger)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
  }
});
