
import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Container,
  Text,
  Section,
  Preview
} from '@react-email/components';

type ContactFormEmailProps = {
  senderName: string;
  senderEmail: string;
  message: string;
};

export default function ContactFormEmail({ senderName, senderEmail, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nova mensagem do seu site BalTech</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Heading style={heading}>Nova Mensagem Recebida</Heading>
            <Text style={paragraph}>Você recebeu a seguinte mensagem do formulário de contato do seu site:</Text>
            <Section style={detailsSection}>
              <Text style={detailLabel}>De:</Text>
              <Text style={detailText}>{senderName}</Text>
            </Section>
            <Section style={detailsSection}>
              <Text style={detailLabel}>Email:</Text>
              <Text style={detailText}>{senderEmail}</Text>
            </Section>
            <Section style={messageSection}>
              <Text style={detailLabel}>Mensagem:</Text>
              <Text style={messageText}>{message}</Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Estilos
const main = {
  backgroundColor: '#f4f4f4',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const box = {
  backgroundColor: '#ffffff',
  border: '1px solid #e0e0e0',
  borderRadius: '5px',
  padding: '24px',
};

const heading = {
  fontSize: '24px',
  lineHeight: '1.3',
  fontWeight: '600',
  color: '#333',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.4',
  color: '#555',
};

const detailsSection = {
  padding: '10px 0',
  borderBottom: '1px solid #eee',
};

const detailLabel = {
  fontSize: '14px',
  color: '#888',
  fontWeight: '500',
};

const detailText = {
  fontSize: '16px',
  color: '#333',
  paddingLeft: '10px',
};

const messageSection = {
  padding: '20px 0',
};

const messageText = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#333',
  whiteSpace: 'pre-wrap' as const,
};
