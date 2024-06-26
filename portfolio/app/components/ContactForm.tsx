'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Section } from "./Section"
import { Input } from "@/components/ui/input"
import { Spacing } from './Spacing';

export const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_oukx0l5', 'template_fyg3wdq', form.current, {
          publicKey: 'C2fCmxe_QJ_MIDic7',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setSuccessMessage(true);
            form.current?.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <Section className="flex-1 flex-col items-start gap-4">
      <h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary mb-5'>
        Contact
      </h2>
      {successMessage && <h4>Votre message a été envoyé avec succès !</h4>}
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid w-full gap-2">
          <label>Name</label>
          <Input type="text" name="name" />
          <label>Email</label>
          <Input type="email" name="email" />
          <label>Message</label>
          <Textarea name="message" />
          <Button className=' bg-orange-500'>Envoyer</Button>
        </div>
      </form>
    </Section>
  );
};