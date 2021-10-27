import { displayName } from './'
import { H1, Time } from 'typography'

export default [
  {
    group: displayName,
    name: '<section>: Обложка',
    code: `
      <${displayName}
        image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg"
        color="white"
      >
        <${H1.displayName}>Центрированный заголовок</${H1.displayName}>
      </${displayName}>
    `,
  },
  {
    group: displayName,
    name: '<section>: Обложка с датой',
    code: `
      <${displayName}
        image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg"
        color="white"
      >
        <${Time.displayName}>04.12.1995</${Time.displayName}>
        <${H1.displayName}>Центрированный заголовок</${H1.displayName}>
      </${displayName}>
    `,
  },
]