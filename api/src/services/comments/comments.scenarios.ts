import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        name: 'String',
        body: 'String',
        post: { create: { title: 'String', body: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        body: 'String',
        post: { create: { title: 'String', body: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
