import {
  FieldError,
  Form,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <TextField name="name" validation={{ required: true }} />
        <FieldError name="name" className="error" />

        <label htmlFor="email">Email</label>
        <TextField name="email" validation={{ required: true }} />
        <FieldError name="email" className="error" />

        <label htmlFor="message">Message</label>
        <TextAreaField name="message" validation={{ required: true }} />
        <FieldError name="message" className="error" />

        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
