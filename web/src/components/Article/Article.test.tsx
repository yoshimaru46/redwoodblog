import { render, screen, waitFor } from '@redwoodjs/testing/web'

import Article from './Article'
import { standard } from 'src/components/CommentsCell/CommentsCell.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components
const ARTICLE = {
  id: 1,
  title: 'First post',
  body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
  createdAt: new Date().toISOString(),
}

describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Article article={ARTICLE} />)
    }).not.toThrow()

    expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
    expect(screen.getByText(ARTICLE.body)).toBeInTheDocument()
  })

  it('renders comments when displaying a full blog post', async () => {
    const comment = standard().comments[0]
    render(<Article article={ARTICLE} />)

    await waitFor(() =>
      expect(screen.getByText(comment.body)).toBeInTheDocument()
    )
  })

  it('renders a summary of a blog post', () => {
    render(<Article article={ARTICLE} summary={true} />)

    expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
    expect(
      screen.getByText(
        'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Str...'
      )
    ).toBeInTheDocument()
  })
})
