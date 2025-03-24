// react
import { useState } from "react";

// Components

// Images
import bugImageUrl from '../../assets/Bug.svg';
import ideiaImageUrl from '../../assets/Idea.svg';
import thoughtImage from '../../assets/Thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            source: ideiaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImage,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep feedbackType={feedbackType} />
            )
            }

            <footer className="text-xs text-dark-text-secondary">Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a></footer>
        </div>
    )
}