import { AlertColor } from "@mui/material";

export interface StartProps {
    handleClick: () => void;
};

export interface QuizzProps {
    openSnackbar: (message: string, severity: AlertColor) => void;
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

export interface Answers {
    index: number;
    answers: string[];
}

export interface SelectedAnswer {
    arrIndex: number;
    answer: string;
};

export interface AnswersProps {
    answers: Answers;
    correctAnswer: string;
    setSelectedAnswers: React.Dispatch<React.SetStateAction<SelectedAnswer[] | undefined>>
    check: boolean;
};