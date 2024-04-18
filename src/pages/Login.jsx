const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="flex w-full">
      <div className="flex-col w-1/2 justify-center items-center">
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="ENTER USERNAME" required />
        <input type="email" name="email" placeholder="ENTER EMAIL" required />
        <input type="password" name="password" placeholder="ENTER PASSWORD" required />
        <input type="submit" name="submit" value="CONTINUE"/>
      </form>
      </div>
      <div className="w-1/2">
        <img src="https://s3-alpha-sig.figma.com/img/699d/1183/8d9716e61a45f9e95043b56334473c19?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZ4xRYD3OvMQM-9CYNL9jNLYbACRF-T7yDNBW904td9Y3hw6WnzRARE8iebdaW0X930VG0s~eD2FQ1h4DCy2Oyly9ajQBeGkpdN1XR2zXRCaVt~n7NxYtdEORMyqYq18Q6q1a6jEUGdnxBtA2Z22UaPKHK4BxrifO3PYCqr6MTLMnmggWE3VnSVBu751JDB2WwyUKbV~vLOmFdoeeWENxxirrIP-3d6agV5darB9BgxV31VawN6DNPJ8YKYSg4vURbetFmbTJCxmHkkbq8TnfKgUwxs3x0aLmo8Op1BtBLNcz7rPc8fgZGQZFBkQS~6U8hZ1n3E1w66OIELE4Mn7kA__" alt="background.png"  className="w-full h-full object-cover"/>
      </div>
    </div>
  );
};


export default Login;
