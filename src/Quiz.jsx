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
    "question": "Quel est le rôle principal des globules rouges?",
    "options": [
        "Transporter l'oxygène",
        "Combattre les infections",
        "Réguler la glycémie",
        "Filtrer les déchets"
    ],
    "answer": "Transporter l'oxygène"
},
{
    "id": 3,
    "question": "Qu'est-ce que l'hémoglobine?",
    "options": [
        "Une protéine qui transporte l'oxygène dans le sang",
        "Un type de globule blanc",
        "Un anticorps",
        "Un enzyme digestif"
    ],
    "answer": "Une protéine qui transporte l'oxygène dans le sang"
},
{
    "id": 4,
    "question": "Quel est le rôle des plaquettes dans le sang?",
    "options": [
        "Participer à la coagulation",
        "Transporter le dioxyde de carbone",
        "Combattre les infections",
        "Réguler la température corporelle"
    ],
    "answer": "Participer à la coagulation"
},
{
    "id": 5,
    "question": "Où se fait l'échange gazeux dans le corps?",
    "options": [
        "Dans les poumons",
        "Dans les reins",
        "Dans le cœur",
        "Dans le foie"
    ],
    "answer": "Dans les poumons"
},
{
    "id": 6,
    "question": "Quelle est la fonction principale des veines?",
    "options": [
        "Ramener le sang vers le cœur",
        "Pomper le sang vers les organes",
        "Produire des globules blancs",
        "Éliminer les toxines du sang"
    ],
    "answer": "Ramener le sang vers le cœur"
},
{
    "id": 7,
    "question": "Qu'est-ce que la volémie?",
    "options": [
        "Le volume total de sang dans le corps",
        "La pression artérielle",
        "La vitesse du flux sanguin",
        "La quantité de globules rouges"
    ],
    "answer": "Le volume total de sang dans le corps"
},
{
    "id": 8,
    "question": "Quelle est la principale artère du corps?",
    "options": [
        "L'aorte",
        "La veine cave",
        "L'artère pulmonaire",
        "L'artère coronaire"
    ],
    "answer": "L'aorte"
},
{
    "id": 9,
    "question": "Quelle est la fonction principale des capillaires?",
    "options": [
        "Permettre les échanges entre le sang et les tissus",
        "Transporter le sang vers les poumons",
        "Filtrer le sang",
        "Stocker le glucose"
    ],
    "answer": "Permettre les échanges entre le sang et les tissus"
},
{
    "id": 10,
    "question": "Quelle hormone est responsable de la régulation du glucose dans le sang?",
    "options": [
        "Insuline",
        "Thyroxine",
        "Cortisol",
        "Adrénaline"
    ],
    "answer": "Insuline"
},
{
  "id": 11,
  "question": "Quelle est la principale cause des œdèmes chez les femmes enceintes?",
  "options": [
      "Diminution de la pression artérielle",
      "Augmentation du volume sanguin",
      "Diminution du débit cardiaque",
      "Augmentation de la consommation d'oxygène"
  ],
  "answer": "Augmentation du volume sanguin"
},
{
  "id": 12,
  "question": "Quelle est la cause principale de la thrombopénie pendant la grossesse?",
  "options": [
      "Augmentation de la pression veineuse",
      "Diminution du nombre de plaquettes",
      "Hypertension artérielle",
      "Compression de la veine cave"
  ],
  "answer": "Diminution du nombre de plaquettes"
},
{
  "id": 13,
  "question": "Pourquoi le cœur s'hypertrophie-t-il pendant la grossesse?",
  "options": [
      "Pour compenser une hypertension",
      "Pour augmenter la capacité de pompage",
      "Pour réduire le volume sanguin",
      "Pour diminuer le débit cardiaque"
  ],
  "answer": "Pour augmenter la capacité de pompage"
},
{
  "id": 14,
  "question": "Quel est le symptôme principal du syndrome aorto-cave?",
  "options": [
      "Hypertension artérielle",
      "Hypotension maternelle",
      "Augmentation du débit cardiaque",
      "Réduction de la fréquence cardiaque"
  ],
  "answer": "Hypotension maternelle"
},
{
  "id": 15,
  "question": "Quel est le rôle principal du ventricule gauche?",
  "options": [
      "Filtrer les déchets",
      "Recueillir le sang des poumons",
      "Expulser le sang vers le corps",
      "Produire des globules rouges"
  ],
  "answer": "Expulser le sang vers le corps"
},
{
  "id": 16,
  "question": "Quel phénomène explique l'hypertrophie ventriculaire gauche pendant la grossesse?",
  "options": [
      "Réduction du volume plasmatique",
      "Diminution de la fréquence cardiaque",
      "Augmentation du débit cardiaque",
      "Augmentation de la pression veineuse"
  ],
  "answer": "Augmentation du débit cardiaque"
},
{
  "id": 17,
  "question": "Pourquoi les femmes enceintes sont-elles plus sujettes aux varices?",
  "options": [
      "Hyperglycémie",
      "Hypotension",
      "Hyperpression veineuse",
      "Diminution du volume sanguin"
  ],
  "answer": "Hyperpression veineuse"
},
{
  "id": 18,
  "question": "Quelle est la conséquence principale de la compression de la veine cave inférieure?",
  "options": [
      "Augmentation du débit sanguin",
      "Augmentation du volume sanguin",
      "Diminution du débit cardiaque",
      "Réduction du retour veineux"
  ],
  "answer": "Réduction du retour veineux"
},
{
  "id": 19,
  "question": "Quel est l'effet principal de l'hémodilution pendant la grossesse?",
  "options": [
      "Hyperglycémie",
      "Anémie physiologique",
      "Hypertension",
      "Hypoxie"
  ],
  "answer": "Anémie physiologique"
},
{
  "id": 20,
  "question": "Quelle est la cause principale de la diminution de la tension artérielle au cours de la grossesse?",
  "options": [
      "Hyperglycémie",
      "Hypoglycémie",
      "Vasodilatation",
      "Augmentation du débit cardiaque"
  ],
  "answer": "Vasodilatation"
},     
{

  "id": 20,
  "question": "Quelle est la cause principale de la diminution de la tension artérielle au cours de la grossesse?",
  "options": [
      "Vasodilatation",
      "Hypoglycémie",
      "Hyperglycémie",
      "Augmentation du débit cardiaque"
  ],
  "answer": "Vasodilatation"
},
{
  "id": 21,
  "question": "Comment se manifeste le syndrome aorto-cave?",
  "options": [
      "Hypotension maternelle",
      "Hyperglycémie",
      "Anémie",
      "Tachycardie"
  ],
  "answer": "Hypotension maternelle"
},
{
  "id": 22,
  "question": "Quelle est la fonction principale du volume d'éjection systolique (VES)?",
  "options": [
      "Volume de sang éjecté par contraction",
      "Transporter l'oxygène",
      "Réguler la glycémie",
      "Volume de sang éjecté par contraction"
  ],
  "answer": "Éliminer les toxines"
},
{
  "id": 23,
  "question": "Quel est le risque associé à une thrombopénie sévère?",
  "options": [
      "Hyperglycémie",
      "Risque hémorragique",
      "Hypotension",
      "Insuffisance cardiaque"
  ],
  "answer": "Risque hémorragique"
},
{
  "id": 24,
  "question": "Qu'est-ce qui caractérise une hyperleucocytose physiologique pendant la grossesse?",
  "options": [
      "Hypotension",
      "Diminution des globules rouges",
      "Anémie",
      "Augmentation des globules blancs"
  ],
  "answer": "Augmentation des globules blancs"
},
{
  "id": 25,
  "question": "Quel est le principal facteur contribuant à l'augmentation du volume sanguin pendant la grossesse?",
  "options": [
      "Hyperglycémie",
      "Augmentation du plasma",
      "Diminution des globules rouges",
      "Diminution de la tension artérielle"
  ],
  "answer": "Augmentation du plasma"
},
{
  "id": 26,
  "question": "Qu'est-ce qui caractérise l'hypervolémie pendant la grossesse?",
  "options": [
      "Augmentation de la fréquence cardiaque",
      "Réduction du débit cardiaque",
      "Augmentation du volume plasmatique",
      "Réduction du volume plasmatique"
  ],
  "answer": "Augmentation du volume plasmatique"
},
{
  "id": 27,
  "question": "Quelle est la principale cause de la diminution de la résistance vasculaire pendant la grossesse?",
  "options": [
      "Réduction du retour veineux",
      "Hypotension",
      "Augmentation du volume sanguin",
      "Vasodilatation"
  ],
  "answer": "Vasodilatation"
},
{
  "id": 28,
  "question": "Quel est l'effet principal de l'augmentation du débit cardiaque pendant la grossesse?",
  "options": [
      "Hypertrophie du cœur",
      "Réduction du volume plasmatique",
      "Augmentation de la résistance vasculaire",
      "Hypotension"
  ],
  "answer": "Hypertrophie du cœur"
},
{
  "id": 29,
  "question": "Pourquoi l'anémie est-elle fréquente pendant la grossesse?",
  "options": [
      "Hémodilution",
      "Hyperglycémie",
      "Réduction du débit cardiaque",
      "Augmentation du volume sanguin"
  ],
  "answer": "Hémodilution"
},
{
  "id": 30,
  "question": "Quelle est la conséquence principale de l'augmentation de la masse erythrocytaire pendant la grossesse?",
  "options": [
      "Réduction du retour veineux",
      "Augmentation du transport d'oxygène",
      "Hyperglycémie",
      "Hypotension"
  ],
  "answer": "Augmentation du transport d'oxygène"
},
{
  "id": 31,
  "question": "Quelle est la principale cause de la réduction du retour veineux pendant la grossesse?",
  "options": [
      "Compression de la veine cave",
      "Hyperglycémie",
      "Réduction du débit cardiaque",
      "Augmentation du volume sanguin"
  ],
  "answer": "Compression de la veine cave"
},
{
  "id": 32,
  "question": "Quel est le principal facteur responsable de l'hypertrophie cardiaque pendant la grossesse?",
  "options": [
      "Augmentation du débit cardiaque",
      "Réduction de la résistance vasculaire",
      "Compression de la veine cave",
      "Hyperglycémie"
  ],
  "answer": "Augmentation du débit cardiaque"
},
{
  "id": 33,
  "question": "Qu'est-ce qui caractérise une hypotension artérielle pendant la grossesse?",
  "options": [
      "Augmentation du débit cardiaque",
      "Augmentation du volume sanguin",
      "Hyperglycémie",
      "Réduction de la pression artérielle"
  ],
  "answer": "Réduction de la pression artérielle"
},
{
  "id": 34,
  "question": "Quel est le risque principal associé à une thrombopénie sévère?",
  "options": [
      "Hyperglycémie",
      "Risque d'hémorragie",
      "Réduction du débit cardiaque",
      "Anémie"
  ],
  "answer": "Risque d'hémorragie"
},
{
  "id": 35,
  "question": "Pourquoi les femmes enceintes peuvent-elles souffrir d'œdèmes?",
  "options": [
      "Augmentation du volume plasmatique",
      "Réduction du retour veineux",
      "Réduction du débit cardiaque",
      "Hyperglycémie"
  ],
  "answer": "Augmentation du volume plasmatique"
},
{
  "id": 36,
  "question": "Quelle est la conséquence principale de l'hémodilution chez les femmes enceintes?",
  "options": [
      "Anémie physiologique",
      "Hyperglycémie",
      "Hypotension",
      "Réduction du débit cardiaque"
  ],
  "answer": "Anémie physiologique"
},
{
  "id": 37,
  "question": "Qu'est-ce qui caractérise l'hyperleucocytose pendant la grossesse?",
  "options": [
      "Augmentation des globules blancs",
      "Réduction du retour veineux",
      "Réduction du débit cardiaque",
      "Hyperglycémie"
  ],
  "answer": "Augmentation des globules blancs"
},
{
  "id": 38,
  "question": "Quel est l'effet principal de la vasodilatation pendant la grossesse?",
  "options": [
      "Réduction de la résistance vasculaire",
      "Augmentation du débit cardiaque",
      "Augmentation du volume sanguin",
      "Hyperglycémie"
  ],
  "answer": "Réduction de la résistance vasculaire"
},
{
  "id": 39,
  "question": "Quelle est la principale cause de l'anémie pendant la grossesse?",
  "options": [
      "Hémodilution",
      "Hyperglycémie",
      "Augmentation du débit cardiaque",
      "Hypotension"
  ],
  "answer": "Hémodilution"
},
{
  "id": 40,
  "question": "Quel est l'effet de la compression de la veine cave sur le retour veineux?",
  "options": [
      "Réduction du retour veineux",
      "Hyperglycémie",
      "Réduction du débit cardiaque",
      "Augmentation du volume sanguin"
  ],
  "answer": "Réduction du retour veineux"
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
