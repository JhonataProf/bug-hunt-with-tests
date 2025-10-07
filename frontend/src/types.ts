// BUG B8: tipos fracos para provocar erros de validação
export type Task = { id: any; title: any; done: any };