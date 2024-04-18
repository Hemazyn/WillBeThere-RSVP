const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div>
      <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="ENTER USERNAME" required />
        <input type="email" name="email" placeholder="ENTER EMAIL" required />
        <input type="password" name="password" placeholder="ENTER PASSWORD" required />
        <input type="submit" name="submit" value="CONTINUE"/>
      </form>
      </div>
      <div>
      </div>
    </div>
  );
};


export default SignUp;
