'use client'
import { useState } from 'react'
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react'

export default function LegalityQuiz({ quiz, stateName }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const questions = quiz

  const handleAnswer = (val) => {
    const newAnswers = { ...answers, [questions[step].id]: val }
    setAnswers(newAnswers)
    setStep(step + 1)
  }

  const resetQuiz = () => {
    setStep(0)
    setAnswers({})
  }

  if (step < questions.length) {
    return (
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border-t-4 border-amber-500">
        <div className="flex justify-between items-center mb-6">
          <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Legality Checker</span>
          <span className="text-slate-500 text-xs font-bold">Step {step + 1} of {questions.length}</span>
        </div>
        <h3 className="text-xl font-bold mb-4 leading-tight">{questions[step].question}</h3>
        <p className="text-slate-400 text-sm mb-8 italic">{questions[step].info}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleAnswer(true)}
            className="flex-1 py-4 bg-amber-500 text-slate-900 font-black rounded-xl hover:bg-amber-400 transition-colors uppercase tracking-tight"
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="flex-1 py-4 bg-slate-800 text-white font-black rounded-xl hover:bg-slate-700 transition-colors uppercase tracking-tight border border-slate-700"
          >
            No
          </button>
        </div>
      </div>
    )
  }

  const isLegal = Object.values(answers).every(Boolean)

  return (
    <div className={`p-6 sm:p-8 rounded-3xl shadow-xl border-t-4 ${isLegal ? 'bg-emerald-50 border-emerald-500' : 'bg-red-50 border-red-500'}`}>
      <div className="text-center">
        {isLegal ? (
          <>
            <CheckCircle2 className="text-emerald-500 mx-auto mb-4" size={64} />
            <h3 className="text-3xl font-black text-emerald-900 uppercase tracking-tighter mb-2">Likely Compliant</h3>
            <p className="text-emerald-800 font-medium mb-6">Your bike meets the primary {stateName} road standards for 2026.</p>
          </>
        ) : (
          <>
            <XCircle className="text-red-500 mx-auto mb-4" size={64} />
            <h3 className="text-2xl sm:text-3xl font-black text-red-900 uppercase tracking-tighter mb-2 leading-none">ILLEGAL FOR ROAD USE</h3>
            <p className="text-red-800 font-medium mb-6 mt-2">Based on your answers, this device may be classified as a <strong>Motorcycle</strong> and is subject to penalties.</p>
          </>
        )}
        <button
          onClick={resetQuiz}
          className="flex items-center gap-2 mx-auto text-slate-500 hover:text-slate-800 font-bold text-sm transition-colors"
        >
          <RotateCcw size={16} /> Start Over
        </button>
      </div>
    </div>
  )
}
