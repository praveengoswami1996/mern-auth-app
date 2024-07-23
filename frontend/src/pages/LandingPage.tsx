const LandingPage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mt-20">
          <h1 className="text-4xl font-black text-center">
            Welcome to My MERN Authentication App!
          </h1>
        </div>
        <div className="mt-6 font-light">
          <p>
            This application is designed to provide a simple and secure way to
            manage user authentication, leveraging the powerful MERN stack. MERN
            stands for MongoDB, Express.js, React, and Node.js, a combination of
            technologies that ensures a full-stack JavaScript development
            experience, from frontend to backend.
          </p>
          <br />
          <p>
            Whether you're signing up, logging in, or managing your account,
            this app ensures your data is protected with secure password storage
            and token-based authentication. MongoDB offers a robust database
            solution, Express.js and Node.js provide a reliable backend
            infrastructure, and React delivers a dynamic and responsive user
            interface.
          </p>
          <br />
          <p>
            For enhanced security, this application uses JSON Web Token (JWT)
            for authentication and authorization. JWTs are stored in cookies,
            ensuring that your session remains secure and tamper-proof. This
            method prevents common security threats such as cross-site scripting
            (XSS) and cross-site request forgery (CSRF). Additionally,
            role-based access control (RBAC) is implemented to manage
            permissions and ensure that users only have access to the features
            and data they are authorized to use.
          </p>
          <br />
          <p>
            Experience a seamless and reliable user journey, from registration
            to secure access, all crafted with modern web technologies. Thank
            you for visiting and exploring my MERN authentication app. Your
            feedback is invaluable as I continue to improve and enhance its
            features. Enjoy the peace of mind that comes with a secure and
            efficient authentication system!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
