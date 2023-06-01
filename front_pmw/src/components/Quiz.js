import { useState } from 'react'
import '../assets/css/quiz.css'
import {
    Row,
    Container,
} from 'react-bootstrap';

export const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })

    const { questions } = {
        topic: 'Javascript',
        level: 'Beginner',
        totalQuestions: 4,
        perQuestionScore: 5,
        questions: [
            {
                question: "¿Qué función se usa para serializar un objeto en una cadena JSON en Javascript?",
                choices: ["stringify()", "parse()", "convert()", "Ninguna de las anteriores"],
                type: "MCQs",
                correctAnswer: "stringify()",
            },
            {
                question: "¿Qué palabra clave se usa para definir una variable en Javascript?",
                choices: ["var", "let", "var y let", "Ninguna de las anteriores"],
                type: "MCQs",
                correctAnswer: "var y let",
            },
            {
                question:
                    "¿Qué método se puede usar para mostrar datos en alguna forma usando Javascript?",
                choices: [
                    "document.write()",
                    "console.log()",
                    "window.alert",
                    "Todos los anteriores",
                ],
                type: "MCQs",
                correctAnswer: "Todos los anteriores",
            },
            {
                question: "¿Cómo se puede declarar un tipo de dato como constante?",
                choices: ["const", "var", "let", "constant"],
                type: "MCQs",
                correctAnswer: "const",
            },
            {
                question: "¿Qué operador se usa para comparar dos valores con el mismo tipo y valor en Javascript?",
                choices: ["==", "===", "!=", "!=="],
                type: "MCQs",
                correctAnswer: "===",
            },
            {
                question: "¿Qué estructura se usa para repetir un bloque de código mientras se cumpla una condición en Javascript?",
                choices: ["if", "for", "while", "switch"],
                type: "MCQs",
                correctAnswer: "while",
            },
            {
                question: "¿Qué función se usa para crear un elemento HTML con Javascript?",
                choices: ["document.createElement()", "document.createNode()", "document.appendElement()", "document.insertElement()"],
                type: "MCQs",
                correctAnswer: "document.createElement()",
            },
            {
                question: "¿Qué método se usa para agregar un evento a un elemento HTML con Javascript?",
                choices: ["addEventListener()", "attachEvent()", "bindEvent()", "Ninguno de los anteriores"],
                type: "MCQs",
                correctAnswer: "addEventListener()",
            },
            {
                question: "¿Qué objeto se usa para comunicarse con un servidor y enviar o recibir datos con Javascript?",
                choices: ["XMLHttpRequest", "Fetch", "Ajax", "Todos los anteriores"],
                type: "MCQs",
                correctAnswer: "Todos los anteriores",
            },
            {
                question: "¿Qué función se usa para convertir una cadena JSON en un objeto Javascript?",
                choices: ["stringify()", "parse()", "convert()", "Ninguna de las anteriores"],
                type: "MCQs",
                correctAnswer: "parse()",
            },
        ],
    }
    const { question, choices, correctAnswer } = questions[activeQuestion]

    const onClickNext = () => {
        setSelectedAnswerIndex(null)
        setResult((prev) =>
            selectedAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setActiveQuestion(0)
            setShowResult(true)
        }
    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if (answer === correctAnswer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

    return (

        <div style={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)" }}>
            <Container style={{ padding: "160px 0 160px 0" }}>
                <Row className='justify-content-center'>
                    <h3>Evaluación de JavaScript</h3>
                    <div className="quiz-container">
                        {!showResult ? (
                            <div>
                                <div>
                                    <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                                    <span className="total-question">/{addLeadingZero(questions.length)}</span>
                                </div>
                                <h2>{question}</h2>
                                <ul>
                                    {choices.map((answer, index) => (
                                        <li
                                            onClick={() => onAnswerSelected(answer, index)}
                                            key={answer}
                                            className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                                            {answer}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex-right">
                                    <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                                        {activeQuestion === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="result">
                                <h3>Resultados</h3>
                                <p>
                                    Total de preguntas: <span>{questions.length}</span>
                                </p>
                                <p>
                                    Total Score:<span> {result.score}</span>
                                </p>
                                <p>
                                    Puntaje total:<span> {result.correctAnswers}</span>
                                </p>
                                <p>
                                    Respuestas incorrectas:<span> {result.wrongAnswers}</span>
                                </p>
                            </div>
                        )}
                    </div>
                </Row>
            </Container>
        </div>
    )
}