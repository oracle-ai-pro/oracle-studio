// models.js — Единая база моделей Studio
const ORACLE_MODELS = [
  {
    id: "oracle-main-2.5",
    name: "Oracle Main 2.5",
    badge: "Основные",
    category: "main",
    description: "Профессиональная и основная модель.",
    isBeta: false
  },
  {
    id: "oracle-main-2.5.4",
    name: "Oracle Main 2.5.4",
    badge: "Основные",
    category: "main",
    description: "Про модель.",
    isBeta: false
  },
  {
    id: "oracle-agent-notepad-2.5.3",
    name: "Oracle Main Agent Notepad 2.5.3",
    badge: "Основные",
    category: "main",
    description: "Общение с ИИ агентом через Notepad Helper 2.",
    isBeta: false
  },
  {
    id: "intify-2.6-flash",
    name: "Intify 2.6 Flash",
    badge: "Бета",
    category: "beta",
    description: "Думающая, профессиональная модель для Core Node 2.6 и Notepad Helper 2.",
    isBeta: true
  },
  {
    id: "fast-agent-3.1",
    name: "Fast Agent 3.1",
    badge: "Агенты",
    category: "agents",
    description: "Быстрый агент-помощник, имеющий пакет агентов: AI Reader, Worldpack AI, Core Node 2.4 Mini, Builder, Ask Events.",
    isBeta: false
  }
];

// Получить текущую выбранную модель (по умолчанию Oracle Main 2.5)
function getSelectedModel() {
  const savedId = localStorage.getItem('selected_oracle_model') || 'oracle-main-2.5';
  return ORACLE_MODELS.find(m => m.id === savedId) || ORACLE_MODELS[0];
}

// Установить выбранную модель
function setSelectedModel(modelId) {
  localStorage.setItem('selected_oracle_model', modelId);
}
