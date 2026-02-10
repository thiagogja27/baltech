'use server'

import { z } from 'zod'
import { Resend } from 'resend';
import ContactFormEmail from '../components/ContactFormEmail';

// Inicializa o Resend com a chave de API
const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' })
})

export async function submitMessage(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('fullName'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: null
    }
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Baltech LandingPage <onboarding@resend.dev>',
      to: 'thiago.viaembratelgja@gmail.com', // IMPORTANTE: Substitua pelo seu email
      subject: 'Nova Mensagem da sua Landing Page!',
      react: ContactFormEmail({ 
        senderName: name, 
        senderEmail: email, 
        message: message 
      })
    });

    if (error) {
      console.error("Erro ao enviar email:", error);
      return {
        message: "Ocorreu um erro ao tentar enviar a mensagem. Por favor, tente novamente mais tarde.",
        errors: null
      }
    }

    console.log("Email enviado com sucesso:", data);
    return {
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      errors: null
    }

  } catch (exception) {
    console.error("Exceção ao enviar email:", exception);
    return {
      message: "Um erro inesperado aconteceu. Por favor, entre em contato por outro meio.",
      errors: null
    }
  }
}
