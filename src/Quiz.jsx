import React, { useState, useEffect } from 'react';

const questionsData = [
   
        { id: 1, question: "Quel est le principal muscle qui active le processus de respiration?", options: ["Les pectoraux", "Les abdominaux", "Le diaphragme", "Le muscle sternocléidomastoïdien"], answer: "Le diaphragme" },
        { id: 2, question: "Pendant l'inspiration, que fait le diaphragme?", options: ["Il se contracte et s'élève vers le haut", "Il se relâche et descend vers l'abdomen", "Il se contracte et s'abaisse vers l'abdomen", "Il se relâche et s'élève vers le bas"], answer: "Il se contracte et s'abaisse vers l'abdomen" },
        { id: 3, question: "Quels organes font partie des voies respiratoires?", options: ["Le cœur et les reins", "Les poumons et le diaphragme", "Le pharynx et le larynx", "L'estomac et l'intestin grêle"], answer: "Le pharynx et le larynx" },
        { id: 4, question: "Combien de lobes possède le poumon droit?", options: ["2 lobes", "3 lobes", "4 lobes", "5 lobes"], answer: "3 lobes" },
        { id: 5, question: "Quel est le rôle principal de la respiration?", options: ["Débarrasser l'organisme de l'oxygène", "Apporter du CO2 aux cellules de l'organisme", "Maintenir les paramètres sanguins à un niveau normal", "Favoriser la digestion"], answer: "Maintenir les paramètres sanguins à un niveau normal" },
        { id: 6, question: "Qu'est-ce que le volume de réserve expiratoire?", options: ["La quantité d'air qui peut être expulsée par une expiration forcée après une expiration normale", "Le volume maximum d'air qu'un individu peut inspirer après une inspiration normale", "La quantité d'air qui reste dans les poumons après une expiration complète", "La quantité d'air expirée pendant une respiration normale"], answer: "La quantité d'air qui peut être expulsée par une expiration forcée après une expiration normale" },
        { id: 7, question: "Quelle est la fréquence respiratoire normale?", options: ["5 à 10 cycles/min", "12 à 20 cycles/min", "25 à 30 cycles/min", "35 à 40 cycles/min"], answer: "12 à 20 cycles/min" },
        { id: 8, question: "Qu'est-ce qui cause l'élévation du diaphragme pendant la grossesse?", options: ["Une hypertrophie musculaire", "Une hypervascularisation des muqueuses", "La présence de l'utérus gravide", "Une prise de poids importante"], answer: "La présence de l'utérus gravide" },
        { id: 9, question: "Quelle modification se produit au niveau du thorax pendant la grossesse?", options: ["Diminution de la circonférence du thorax", "Horizontalisation des côtes", "Diminution du volume pulmonaire", "Augmentation de la pression thoracique"], answer: "Horizontalisation des côtes" },
        { id: 10, question: "Pendant la grossesse, comment change la consommation d'oxygène?", options: ["Elle diminue de 20 à 40%", "Elle reste stable", "Elle augmente de 20 à 40%", "Elle augmente de 5 à 10%"], answer: "Elle augmente de 20 à 40%" },
        { id: 11, question: "Qu'est-ce qui augmente pour compenser la demande accrue en oxygène pendant la grossesse?", options: ["Le rythme cardiaque", "La température corporelle", "Le volume respiratoire", "La pression sanguine"], answer: "Le volume respiratoire" },
        { id: 12, question: "Quelle hormone influence la respiration pendant la grossesse?", options: ["L'adrénaline", "La progestérone", "L'insuline", "L'ocytocine"], answer: "La progestérone" },
        { id: 13, question: "Comment la ventilation minute change-t-elle pendant la grossesse?", options: ["Elle diminue de 20%", "Elle reste inchangée", "Elle augmente de 40%", "Elle augmente de 60%"], answer: "Elle augmente de 40%" },
        { id: 14, question: "Quel est le risque associé à l'augmentation de la consommation d'oxygène pendant la grossesse?", options: ["Hypercapnie", "Hypoxémie", "Hypocapnie", "Hyperoxie"], answer: "Hypoxémie" },
        { id: 15, question: "Quel est l'effet de la progestérone sur le centre respiratoire du cerveau pendant la grossesse?", options: ["Augmente les niveaux de CO2 dans le sang", "Diminue les niveaux de CO2 dans le sang", "Diminue le volume courant", "Réduit la ventilation alvéolaire"], answer: "Diminue les niveaux de CO2 dans le sang" },
        { id: 16, question: "Quel est le résultat de l'hyperventilation causée par la progestérone pendant la grossesse?", options: ["Une acidose respiratoire", "Une hypocapnie", "Une hypercapnie", "Une hyperoxie"], answer: "Une hypocapnie" },
        { id: 17, question: "Quel trouble de l'équilibre acido-basique peut survenir pendant la grossesse?", options: ["Une acidose métabolique", "Une alcalose respiratoire", "Une acidose respiratoire", "Une alcalose métabolique"], answer: "Une alcalose respiratoire" },
        { id: 18, question: "Quelle est la cause de l'essoufflement fréquent chez les femmes enceintes?", options: ["Hypercapnie", "Hypoxémie", "Augmentation de la consommation d'oxygène", "Accumulation de dioxyde de carbone"], answer: "Augmentation de la consommation d'oxygène" },
        { id: 19, question: "Quels sont les volumes respiratoires non mobilisables?", options: ["Le volume de réserve expiratoire", "Le volume de réserve inspiratoire", "Le volume résiduel", "Le volume courant"], answer: "Le volume résiduel" },
        { id: 20, question: "Comment les voies aériennes sont-elles affectées par la grossesse?", options: ["Diminution de la vascularisation des muqueuses", "Hypertrophie des muqueuses", "Réduction de la taille des fosses nasales", "Augmentation de la rigidité des bronches"], answer: "Hypertrophie des muqueuses" },
        { id: 21, question: "Quelles sont les modifications du système respiratoire observées au début de la grossesse?", options: ["La femme respire plus fréquemment mais moins profondément", "La femme respire plus profondément mais pas plus fréquemment", "La femme respire moins fréquemment et moins profondément", "La femme ne subit pas de changement respiratoire"], answer: "La femme respire plus profondément mais pas plus fréquemment" },
        { id: 22, question: "Quelle est la conséquence de l'augmentation du volume courant pendant la grossesse?", options: ["Diminution de la ventilation minute", "Augmentation du volume de réserve expiratoire", "Diminution du volume de réserve expiratoire", "Stabilisation du volume courant"], answer: "Diminution du volume de réserve expiratoire" },
        { id: 23, question: "Quelle est la conséquence de l'action de la progestérone sur la respiration pendant la grossesse?", options: ["Accumulation de CO2", "Hypercapnie", "Légère alcalose respiratoire", "Légère acidose respiratoire"], answer: "Légère alcalose respiratoire" },
        { id: 24, question: "Comment la ventilation alvéolaire change-t-elle sous l'effet de la progestérone?", options: ["Elle diminue", "Elle augmente", "Elle reste stable", "Elle fluctue fortement"], answer: "Elle augmente" },
        { id: 25, question: "Quelles sont les adaptations physiologiques observées dans les voies aériennes pendant la grossesse?", options: ["Hypervascularisation des muqueuses", "Réduction de la surface des fosses nasales", "Diminution du volume des bronches", "Augmentation de la rigidité des voies respiratoires"], answer: "Hypervascularisation des muqueuses" },
        { id: 26, question: "Qu'est-ce qui explique l'essoufflement fréquent des femmes enceintes?", options: ["Augmentation de l'acidose sanguine", "Diminution du pH sanguin", "Augmentation de la consommation d'oxygène et diminution des réserves en O2", "Diminution de la consommation d'oxygène"], answer: "Augmentation de la consommation d'oxygène et diminution des réserves en O2" },
       
      
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
