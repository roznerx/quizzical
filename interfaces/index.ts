export interface StartProps {
    handleClick: () => void;
};

export interface Info {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

export interface QuestionProps {
    question: string;
};

export interface AnswersProps {
    answers: string[];
    correctAnswer: string;
};
