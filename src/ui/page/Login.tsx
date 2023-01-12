import React, { FC } from "react";
import { Button, IconButton } from "../../components/Button";
import { ArrowLeftIcon } from "../../components/Icons";
import { TextField } from "../../components/TextField";
import { Logo } from "../../layouts/Logo";

const TextError: FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (prop) => {
  return (
    <small className="text-[12px] mb-2 font-light text-rose-400 dark:font-normal dark:text-red-300 italic">
      {prop.children}
    </small>
  );
};

const LoginPage: FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  const { className } = props;
  let _className = "";
  if (className) _className = _className + " " + className;

  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState();
  const [step, setStep] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(step === 1) {
        alert("submited")
        return
    }
    setStep((e) => e + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-skin dark:bg-primary-darkness top-0 right-0 left-0 bottom-0 ">
      <div className="flex items-center ">
        <Logo className="h-[138px] w-[223px] 
        text-primary dark:text-gray-300 
        fill-primary dark:fill-gray-300 " />
      </div>

      <form
        className="flex flex-col justify-between bg-white dark:bg-black-30  p-7 min-w-[400px]  drop-shadow-2xl "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center py-2">
            <h1 className="dark:text-accent">Sign in</h1>
            {/* <div>Log in to continue</div> */}
          </div>
          {step === 0 && (
            <div className="flex flex-col mb-2  animate-slide-left">
              <TextField
                type="email"
                shape="flat"
                value={formValue.email}
                onChange={handleInputChange}
                placeholder="Email address"
                name="email"
                required
              />
              {error && <TextError>email address not valid</TextError>}
            </div>
          )}
          {step === 1 && (
            <div className="flex flex-col mb-2 animate-slide-left">
              <div className="flex items-center py-3 ">
                <IconButton
                  type="button"
                  className="h-6 w-6 p-1 text-black dark:text-gray-400 hover:bg-black/10  dark:hover:bg-white-20"
                  onClick={() => setStep((e) => e - 1)}
                >
                  <ArrowLeftIcon />
                </IconButton>
                <span className="ml-2">{formValue.email}</span>
              </div>
              <TextField
                type="password"
                shape="flat"
                placeholder="Password"
                name="password"
                value={formValue.password}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          {/* <div className="flex flex-col mb-2">
            <TextField type="text" shape="flat" placeholder="Email address" name="email" />
            {error && <TextError>email address not valid</TextError>}
          </div>
          <div className="flex flex-col mb-2 animate-slide-left">
            <TextField type="password" shape="flat" placeholder="Password" name="password" />
          </div> */}

          <div className="flex justify-between text-gray-500 dark:text-gray-300 text-sm py-2">
            <div>
              No account?{" "}
              <a
                href="/#register"
                className="text-primary dark:text-accent hover:underline"
              >
                Create on!
              </a>
            </div>
            <div>
              <a
                href="#forgotpass"
                className="text-primary dark:text-accent hover:underline"
              >
                Can't log in?
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-5">
          <Button
            size="none"
            shape="flated"
            className=" py-3 w-full"
            type="submit"
          >
            Войти
          </Button>
        </div>
      </form>

      <div className="flex items-center text-primary dark:text-accent justify-center text-xs py-3">
        <a href="#forgotpass" className="hover:underline">
          Privacy Policy
        </a>
        <span className=" text-2xl mx-4">&#183;</span>
        <a href="#forgotpass" className="hover:underline">
          User guide
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
