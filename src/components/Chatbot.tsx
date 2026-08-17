import { FormEvent, useState } from 'react'
import { siteData, projects } from '../data'

const quickQuestions = ['What is your stack?', 'Are you available for work?', 'Tell me about your latest project', 'How can I contact you?']
const answerFor = (question: string) => {
  const lower = question.toLowerCase()
  if (lower.includes('stack')) return 'I work across React, TypeScript, Laravel, PHP, ASP.NET Core, MySQL, Tailwind CSS, and Kotlin.'
  if (lower.includes('available')) return `${siteData.status}. I am open to freelance, internships, and collaborations.`
  if (lower.includes('latest') || lower.includes('project')) return `${projects[0].title}: ${projects[0].description}`
  if (lower.includes('contact')) return `The fastest route is email at ${siteData.email}, or connect through GitHub and LinkedIn.`
  return 'I do not have that information in my profile context. I can answer about Rio\'s stack, projects, availability, location, or contact details.'
}

export default function Chatbot({ bare = false }: { bare?: boolean }) {
  const [messages, setMessages] = useState([{ from: 'system', text: 'connected to rio.dev — ask anything.' }])
  const [input, setInput] = useState('')
  const send = (value = input, event?: FormEvent) => {
    event?.preventDefault()
    const question = value.trim()
    if (!question) return
    setMessages((current) => [...current, { from: 'you', text: question }, { from: 'rio', text: answerFor(question) }])
    setInput('')
  }

  const panel = (
    <div id="ask" className={`terminal-panel flex w-full flex-col p-5 sm:p-7 ${bare ? 'min-h-[460px]' : 'min-h-[430px]'}`}>
      <div className="flex items-center justify-between border-b border-dashed border-white/10 pb-4 font-mono text-xs text-[#777]">
        <span className="flex gap-2"><i className="terminal-light" /><i className="terminal-light" /><i className="terminal-light active" /></span>
        <span>~/ask-me.sh</span><span className="text-[#00ff88]">● ready</span>
      </div>
      <div className="flex flex-1 flex-col justify-between py-6">
        <div className="space-y-4 font-mono text-sm">{messages.map((message, index) => <p data-spotlight key={`${message.text}-${index}`} className={message.from === 'system' ? 'text-[#eee]' : message.from === 'you' ? 'text-[#00ff88]' : 'text-[#aaa]'}><span className="mr-3 text-[#555]">{message.from === 'system' ? '//' : message.from === 'you' ? '$' : '→'}</span>{message.text}</p>)}</div>
        <div>
          <div className="mb-4 flex flex-wrap gap-2">{quickQuestions.map((question) => <button data-cursor data-spotlight key={question} onClick={() => { setInput(question); send(question) }} className="border border-white/10 px-3 py-2 font-mono text-[11px] text-[#888] hover:border-[#00ff88] hover:text-[#00ff88]">{question}</button>)}</div>
          <form onSubmit={(event) => send(input, event)} className="flex gap-2 border-t border-dashed border-white/10 pt-4">
            <input aria-label="Ask Rio a question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="ask a question..." className="min-w-0 flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-[#555]" />
            <button data-cursor className="bg-[#00ff88] px-4 py-2 font-mono text-xs font-bold text-[#050505]">send ↵</button>
          </form>
        </div>
      </div>
    </div>
  )

  return bare ? panel : <section className="mx-auto max-w-6xl px-6 py-20">{panel}</section>
}