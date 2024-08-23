import emailjs from 'emailjs-com';

export default async function sendMail(
  user_email: string,
  user_name: string,
  user_country: string,
) {
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      'ngoInfoPackage',
      { user_email, user_name, user_country },
      import.meta.env.VITE_EMAILJS_USER_ID,
    );

    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}
