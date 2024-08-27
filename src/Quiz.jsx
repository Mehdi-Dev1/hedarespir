import React, { useState, useEffect } from 'react';

const questionsData = [
  {
    "id": 1,
    "question": "Quelle est la principale fonction des reins?",
    "options": [
      "Filtrer le sang",
      "Combattre les infections",
      "Produire des globules rouges",
      "Éliminer les déchets liquides du corps"
    ],
    "answer": "Filtrer le sang"
  },
  {
    "id": 2,
    "question": "Qu'est-ce que la thrombopénie?",
    "options": [
      "Augmentation du nombre de globules blancs",
      "Diminution du nombre de plaquettes",
      "Diminution du volume sanguin",
      "Épaississement du sang"
    ],
    "answer": "Diminution du nombre de plaquettes"
  },
  {
    "id": 3,
    "question": "Quels sont les risques associés à une thrombopénie sévère pendant la grossesse?",
    "options": [
      "Insuffisance rénale",
      "Augmentation de la pression artérielle",
      "Risque hémorragique",
      "Diabète gestationnel"
    ],
    "answer": "Risque hémorragique"
  },
  {
    "id": 4,
    "question": "Quel est le rôle des plaquettes dans la coagulation?",
    "options": [
      "Transport de l'oxygène",
      "Formation du clou plaquettaire",
      "Production d'anticorps",
      "Filtration des déchets"
    ],
    "answer": "Formation du clou plaquettaire"
  },
  {
    "id": 5,
    "question": "Qu'est-ce que l'hémostase primaire?",
    "options": [
      "La formation du clou plaquettaire",
      "La filtration des reins",
      "La production de globules rouges",
      "La respiration cellulaire"
    ],
    "answer": "La formation du clou plaquettaire"
  },
  {
    "id": 6,
    "question": "Quelle protéine est responsable de la formation du caillot de fibrine?",
    "options": [
      "La myoglobine",
      "L'albumine",
      "La fibrinogène",
      "L'hémoglobine"
    ],
    "answer": "La fibrinogène"
  },
  {
    "id": 7,
    "question": "Quand survient généralement la thrombopénie physiologique pendant la grossesse?",
    "options": [
      "Au troisième trimestre",
      "Après l'accouchement",
      "Au premier trimestre",
      "Au deuxième trimestre"
    ],
    "answer": "Au troisième trimestre"
  },
  {
    "id": 8,
    "question": "Quels facteurs augmentent pendant la grossesse pour préparer l'accouchement?",
    "options": [
      "Les niveaux de glucose",
      "Les globules blancs",
      "Les facteurs de coagulation",
      "Les niveaux de calcium"
    ],
    "answer": "Les facteurs de coagulation"
  },
  {
    "id": 9,
    "question": "Quelle est la conséquence principale de l'activation des plaquettes?",
    "options": [
      "Formation du clou plaquettaire",
      "Destruction des globules rouges",
      "Filtration des déchets par les reins",
      "Production d'anticorps"
    ],
    "answer": "Formation du clou plaquettaire"
  },
  {
    "id": 10,
    "question": "Quel est le principal risque associé à une hypofibrinolyse pendant la grossesse?",
    "options": [
      "Thrombose",
      "Diabète",
      "Anémie",
      "Hypertension"
    ],
    "answer": "Thrombose"
  },
  {
    "id": 11,
    "question": "Quelle est la principale cause de l'hypercoagulabilité physiologique pendant la grossesse?",
    "options": [
      "Changements hormonaux",
      "Augmentation des facteurs de coagulation",
      "Élévation de la température corporelle",
      "Diminution des plaquettes"
    ],
    "answer": "Augmentation des facteurs de coagulation"
  },
  {
    "id": 12,
    "question": "Quel est le rôle des D-dimères dans la coagulation?",
    "options": [
      "Indicateur de formation d'un caillot",
      "Réduction des niveaux de glucose",
      "Régulation de la température",
      "Transport de l'oxygène"
    ],
    "answer": "Indicateur de formation d'un caillot"
  },
  {
    "id": 13,
    "question": "Quels changements hormonaux influencent l'hyperlaxité articulaire pendant la grossesse?",
    "options": [
      "L'adrénaline et la noradrénaline",
      "La relaxine et les oestrogènes",
      "L'insuline et le glucagon",
      "La thyroxine et la calcitonine"
    ],
    "answer": "La relaxine et les oestrogènes"
  },
  {
    "id": 14,
    "question": "Quels sont les principaux risques de la coagulation excessive pendant la grossesse?",
    "options": [
      "Thrombose et embolie pulmonaire",
      "Diabète et hypertension",
      "Anémie et malnutrition",
      "Insuffisance rénale"
    ],
    "answer": "Thrombose et embolie pulmonaire"
  },
  {
    "id": 15,
    "question": "Quelle est la cause principale de l'hypercoagulabilité pendant la grossesse?",
    "options": [
      "Augmentation de la pression sanguine",
      "Augmentation des facteurs de coagulation",
      "Changements dans le métabolisme du glucose",
      "Diminution des globules rouges"
    ],
    "answer": "Augmentation des facteurs de coagulation"
  },
  {
    "id": 16,
    "question": "Quel est l'effet de la fibrinolyse sur un caillot de fibrine?",
    "options": [
      "Dissolution du caillot",
      "Renforcement du caillot",
      "Création d'un nouveau caillot",
      "Augmentation du volume sanguin"
    ],
    "answer": "Dissolution du caillot"
  },
  {
    "id": 17,
    "question": "Quels sont les symptômes courants du syndrome du canal carpien pendant la grossesse?",
    "options": [
      "Engourdissement et fourmillements dans les doigts",
      "Essoufflement",
      "Douleur au dos",
      "Crampes dans les jambes"
    ],
    "answer": "Engourdissement et fourmillements dans les doigts"
  },
  {
    "id": 18,
    "question": "Quels sont les facteurs de risque de l'hypercoagulabilité pendant la grossesse?",
    "options": [
      "BMI > 30, tabagisme, antécédents de TVP",
      "Hypertension, diabète, varices",
      "Diminution de l'activité physique, stress, sédentarité",
      "Anémie, manque de sommeil, carence en vitamine D"
    ],
    "answer": "BMI > 30, tabagisme, antécédents de TVP"
  },
  {
    "id": 19,
    "question": "Quelles sont les conséquences mécaniques des modifications du système locomoteur pendant la grossesse?",
    "options": [
      "Lombalgies, pubalgies, crampes des mollets",
      "Perte d'appétit, nausées, vomissements",
      "Hypertension, diabète, thrombose",
      "Insomnie, somnolence, fatigue"
    ],
    "answer": "Lombalgies, pubalgies, crampes des mollets"
  },
  {
    "id": 20,
    "question": "Quelles sont les recommandations pour prévenir les complications liées à la thrombopénie pendant la grossesse?",
    "options": [
      "Prise de vitamines",
      "Surveillance régulière des plaquettes",
      "Augmentation de la consommation de fer",
      "Repos au lit"
    ],
    "answer": "Surveillance régulière des plaquettes"
  },
  {
    "id": 21,
    "question": "Quelles sont les modifications des glandes sudoripares pendant la grossesse?",
    "options": [
      "Augmentation de la transpiration",
      "Réduction de la production de sueur",
      "Aucun changement",
      "Changement de la composition de la sueur"
    ],
    "answer": "Augmentation de la transpiration"
  },
  {
    "id": 22,
    "question": "Quel est l'effet des vomissements fréquents sur les dents pendant la grossesse?",
    "options": [
      "Érosion dentaire due à l'acidité",
      "Augmentation de la production de salive",
      "Raffermissement des dents",
      "Réduction de l'acidité buccale"
    ],
    "answer": "Érosion dentaire due à l'acidité"
  },
  {
    "id": 23,
    "question": "Quel est le principal symptôme d'une mycose vaginale pendant la grossesse?",
    "options": [
      "Douleur abdominale",
      "Saignements vaginaux",
      "Pertes vaginales blanches et épaisses",
      "Fièvre"
    ],
    "answer": "Pertes vaginales blanches et épaisses"
  },
  {
    "id": 24,
    "question": "Quels sont les principaux symptômes de la sciatique pendant la grossesse?",
    "options": [
      "Douleur irradiant dans la jambe, faiblesse musculaire",
      "Douleur thoracique, essoufflement",
      "Migraines, nausées",
      "Crampes abdominales, constipation"
    ],
    "answer": "Douleur irradiant dans la jambe, faiblesse musculaire"
  },
  {
    "id": 25,
    "question": "Quels sont les symptômes de l'ischémie placentaire?",
    "options": [
      "Diminution des mouvements fœtaux, retard de croissance intra-utérin",
      "Vomissements, diarrhée",
      "Fatigue, insomnie",
      "Hypertension artérielle, protéines dans les urines"
    ],
    "answer": "Diminution des mouvements fœtaux, retard de croissance intra-utérin"
  },
  {
    "id": 26,
    "question": "Qu'est-ce qui explique l'essoufflement fréquent des femmes enceintes?",
    "options": [
      "Diminution de la consommation d'oxygène",
      "Augmentation de la consommation d'oxygène et diminution des réserves en O2",
      "Augmentation de l'acidose sanguine",
      "Diminution du pH sanguin"
    ],
    "answer": "Augmentation de la consommation d'oxygène et diminution des réserves en O2"
  },
  {
    "id": 27,
    "question": "Quels sont les symptômes de la pré-éclampsie?",
    "options": [
      "Hypertension, œdèmes, protéinurie",
      "Anémie, fatigue, vertiges",
      "Nausées, vomissements, perte de poids",
      "Essoufflement, palpitations, douleur thoracique"
    ],
    "answer": "Hypertension, œdèmes, protéinurie"
  },
  {
    "id": 28,
    "question": "Quels sont les facteurs de risque de la pré-éclampsie?",
    "options": [
      "BMI > 30, antécédents familiaux, grossesse multiple",
      "Insuffisance rénale, diabète, lupus",
      "Diabète, hypertension, tabagisme",
      "Antécédents de fausse couche, âge avancé, anémie"
    ],
    "answer": "BMI > 30, antécédents familiaux, grossesse multiple"
  },
  {
    "id": 29,
    "question": "Quels sont les symptômes courants d'une carence en fer pendant la grossesse?",
    "options": [
      "Fatigue, pâleur, essoufflement",
      "Hypertension, rétention d'eau, maux de tête",
      "Crampes musculaires, douleurs articulaires, insomnie",
      "Fièvre, nausées, vomissements"
    ],
    "answer": "Fatigue, pâleur, essoufflement"
  },
  {
    "id": 30,
    "question": "Quels sont les risques de l'hyperémèse gravidique?",
    "options": [
      "Hypertension, diabète, thrombose",
      "Hypoglycémie, insuffisance cardiaque, anémie",
      "Douleur abdominale, diarrhée, vomissements",
      "Déshydratation, déséquilibre électrolytique, malnutrition"
    ],
    "answer": "Déshydratation, déséquilibre électrolytique, malnutrition"
  },
  {
    "id": 31,
    "question": "Quel est l'effet d'une alimentation riche en fibres pendant la grossesse?",
    "options": [
      "Augmentation des niveaux de glucose",
      "Augmentation de la pression sanguine",
      "Perte de poids",
      "Réduction de la constipation"
    ],
    "answer": "Réduction de la constipation"
  },
  {
    "id": 32,
    "question": "Quels sont les symptômes d'une infection urinaire pendant la grossesse?",
    "options": [
      "Constipation, diarrhée, douleurs abdominales",
      "Fatigue, nausées, vomissements",
      "Douleur abdominale basse, brûlures à la miction, fièvre",
      "Pertes vaginales, démangeaisons, douleur"
    ],
    "answer": "Douleur abdominale basse, brûlures à la miction, fièvre"
  },
  {
    "id": 33,
    "question": "Quels sont les risques associés à une césarienne?",
    "options": [
      "Diabète, hypertension, œdème",
      "Infection, hémorragie, thromboembolie",
      "Perte de poids, anémie, fatigue",
      "Dépression, insomnie, douleurs articulaires"
    ],
    "answer": "Infection, hémorragie, thromboembolie"
  },
  {
    "id": 34,
    "question": "Quels sont les avantages de l'accouchement vaginal?",
    "options": [
      "Récupération plus rapide, moins de risques d'infection",
      "Diminution des douleurs pendant le travail",
      "Moins de risque de dépression post-partum",
      "Moins de stress pour le bébé"
    ],
    "answer": "Récupération plus rapide, moins de risques d'infection"
  },
  {
    "id": 35,
    "question": "Quels sont les signes d'une rupture prématurée des membranes?",
    "options": [
      "Essoufflement, fatigue, douleur thoracique",
      "Écoulement de liquide amniotique, contractions, douleur abdominale",
      "Hypertension, œdèmes, maux de tête",
      "Saignements vaginaux, nausées, vomissements"
    ],
    "answer": "Écoulement de liquide amniotique, contractions, douleur abdominale"
  },
  {
    "id": 36,
    "question": "Quels sont les principaux symptômes de la chorioamnionite?",
    "options": [
      "Douleur lombaire, contractions prématurées, nausées",
      "Fatigue, insomnie, céphalées",
      "Fièvre, tachycardie maternelle, douleur utérine",
      "Œdème, protéinurie, hyperréflexie"
    ],
    "answer": "Fièvre, tachycardie maternelle, douleur utérine"
  },
  {
    "id": 37,
    "question": "Quel est le rôle de la vitamine D pendant la grossesse?",
    "options": [
      "Régulation de la pression sanguine",
      "Prévention de l'anémie",
      "Amélioration de la digestion",
      "Régulation du calcium et développement osseux"
    ],
    "answer": "Régulation du calcium et développement osseux"
  },      
      
];

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(new Set());
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    const shuffledQuestions = [...questionsData].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const currentQuestion = questions[currentQuestionIndex];
    const correct = selectedOption === currentQuestion.answer;
    setIsCorrect(correct);

    if (correct) {
      setCorrectAnswers(new Set(correctAnswers).add(currentQuestion.id));
      if (incorrectAnswers.includes(currentQuestion.id)) {
        setIncorrectAnswers(incorrectAnswers.filter(id => id !== currentQuestion.id));
      }
    } else {
      if (!incorrectAnswers.includes(currentQuestion.id)) {
        setIncorrectAnswers([...incorrectAnswers, currentQuestion.id]);
      }
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      moveToNextQuestion();
    }, 1000); // Attendre 3 secondes avant de passer à la question suivante
  };

  const moveToNextQuestion = () => {
    let nextIndex = currentQuestionIndex + 1;
    if (nextIndex >= questions.length) {
      nextIndex = 0;
    }
    setCurrentQuestionIndex(nextIndex);
  };

  useEffect(() => {
    if (incorrectAnswers.length > 0 && currentQuestionIndex >= questions.length - 1) {
      const nextQuestions = questions.filter(q => incorrectAnswers.includes(q.id));
      setQuestions([...questions, ...nextQuestions]);
    }
  }, [currentQuestionIndex]);

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">{currentQuestion.question}</h2>
        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const buttonColor = isSelected
              ? isCorrect
                ? 'bg-green-500'
                : 'bg-red-500'
              : 'bg-blue-500';

            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null} // Désactiver les boutons après une sélection
                className={`block w-full p-2 text-white rounded-lg ${buttonColor} ${
                  selectedAnswer === null ? 'hover:bg-blue-600' : ''
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
