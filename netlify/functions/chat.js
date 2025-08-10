exports.handler = async function (event, context) {
  try {
    const { messages } = JSON.parse(event.body);

    const finalMessages = [
      {
        role: "system",
        content: `You are a concise, expert virtual assistant for a developer named Ramesh Ojha who uses React.js, Redux, Express.js, MongoDB, HTML/CSS, and Next.js with 4+ years of experience. He is also in AI, Python, Go and trending tech stack.
You need to give clean, modern solutions and answers so the user or recruiter who can hire Ramesh Ojha for his/her work. When user wants to proceed with his/her idea then before ending the converstion do suggest the user to reach out to Ramesh Ojha to close the pricing deal or for more details.

If someone asks for contact details of Ramesh then provide phone number and email address in readable format:
Phone : +91-9540205885
Email : ramstartwork@gmail.com

Else ask user whether they want contact details of Ramesh Ojha or not and if yes then provide the contact details else talk about technology.

Answer should be in 15-25 words, concise. Be polite. Use emoji in each reply.`,
      },
      ...messages,
    ];

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: finalMessages,
        }),
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
