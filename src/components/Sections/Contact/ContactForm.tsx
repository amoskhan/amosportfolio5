import { FC, memo, useCallback, useState, ChangeEvent, FormEvent } from 'react';

const ContactForm: FC = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xykeaaqj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Error sending message. Please try again later.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-green-500/10 rounded-xl border border-green-500/20">
        <h3 className="text-2xl font-bold text-green-500 mb-2">Message Sent!</h3>
        <p className="text-neutral-300">Thank you for reaching out. I'll get back to you shortly.</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sm font-medium text-green-400 hover:text-green-300 underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClasses =
    'bg-neutral-200 dark:bg-neutral-700 border-0 rounded-md p-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400';

  return (
    <form className="flex flex-col w-full" onSubmit={onSubmit}>
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
        value={formData.name}
      />
      <input
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={formData.email}
      />
      <textarea
        className={inputClasses}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={formData.message}
      />
      <button
        aria-label="Submit Contact Form"
        className="w-full rounded-md bg-blue-500 px-6 py-2 text-white font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-stone-800 disabled:bg-blue-300"
        disabled={isSubmitting}
        type="submit">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
});

export default ContactForm;
