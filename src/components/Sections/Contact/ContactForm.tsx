import {CheckCircleIcon, PaperAirplaneIcon} from '@heroicons/react/24/outline';
import {ChangeEvent, FC, FormEvent, memo, useCallback, useState} from 'react';

import {contact, ContactType} from '../../../data/data';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const emptyForm = {name: '', email: '', message: ''};

const emailItem = contact.items.find(({type}) => type === ContactType.Email);

const ContactForm: FC = memo(() => {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<Status>('idle');

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setFormData(prev => ({...prev, [name]: value}));
  }, []);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus('submitting');

      try {
        const response = await fetch('https://formspree.io/f/xykeaaqj', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setFormData(emptyForm);
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    },
    [formData],
  );

  const resetForm = useCallback(() => setStatus('idle'), []);

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-y-3 py-10 text-center" role="status">
        <CheckCircleIcon aria-hidden="true" className="h-12 w-12 text-emerald-500" />
        <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">Message sent!</h3>
        <p className="text-neutral-600 dark:text-neutral-300">Thanks for reaching out. I'll get back to you shortly.</p>
        <button
          className="mt-2 rounded-md text-sm font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-400"
          onClick={resetForm}
          type="button">
          Send another message
        </button>
      </div>
    );
  }

  const labelClasses = 'text-sm font-semibold text-neutral-800 dark:text-neutral-200';
  const inputClasses =
    'w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-neutral-900 placeholder-neutral-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:placeholder-neutral-500';

  return (
    <form className="flex flex-col gap-y-5" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-y-1.5">
          <label className={labelClasses} htmlFor="contact-name">
            Name
          </label>
          <input
            autoComplete="name"
            className={inputClasses}
            id="contact-name"
            name="name"
            onChange={onChange}
            placeholder="Your name"
            required
            type="text"
            value={formData.name}
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <label className={labelClasses} htmlFor="contact-email">
            Email
          </label>
          <input
            autoComplete="email"
            className={inputClasses}
            id="contact-email"
            name="email"
            onChange={onChange}
            placeholder="you@example.com"
            required
            type="email"
            value={formData.email}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-1.5">
        <label className={labelClasses} htmlFor="contact-message">
          Message
        </label>
        <textarea
          className={inputClasses}
          id="contact-message"
          name="message"
          onChange={onChange}
          placeholder="How can I help?"
          required
          rows={6}
          value={formData.message}
        />
      </div>
      {status === 'error' && (
        <p
          className="rounded-lg border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-700 dark:text-red-300"
          role="alert">
          Something went wrong and your message wasn't sent. Please try again
          {emailItem && (
            <>
              , or email me directly at{' '}
              <a className="font-semibold underline" href={emailItem.href}>
                {emailItem.text}
              </a>
            </>
          )}
          .
        </p>
      )}
      <button
        className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus-visible:ring-offset-neutral-900 sm:w-fit"
        disabled={status === 'submitting'}
        type="submit">
        {status === 'submitting' ? 'Sending…' : 'Send message'}
        <PaperAirplaneIcon aria-hidden="true" className="h-5 w-5" />
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
