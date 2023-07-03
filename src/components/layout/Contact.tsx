import React from "react";
import {
  Card,
  Label,
  TextInput,
  Textarea,
  Checkbox,
  Button,
} from "flowbite-react";

const Contact = () => {
  return (
    <section className="mb-32">
      <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]">
        <h2 className="text-3xl mt-32 uppercase text-white text-center font-bold">
          Contact
        </h2>
      </div>
      <div className="container mx-auto px-6 md:px-12">
        <Card className="rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
          <div className="flex justify-center">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:px-6">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextInput
                    type="text"
                    id="exampleInput90"
                    placeholder="Name"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextInput
                    type="email"
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <Textarea
                    id="exampleFormControlTextarea1"
                    placeholder="Your message"
                    rows={3}
                  />
                </div>
                <div className="mb-6 flex items-center gap-2 md:flex">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">
                    Send me a copy of this message
                  </Label>
                </div>
                <Button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mb-6 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
