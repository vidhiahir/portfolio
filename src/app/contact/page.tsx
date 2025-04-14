"use client";

import {
  Button,
  Column,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@/once-ui/components";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const toast = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    if (!name || name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (!email || email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const formData = new FormData(e.currentTarget);

    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL!, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const data = await response.json();

      if (response.ok) {
        toast.addToast({
          variant: "success",
          message: "Message sent successfully! 🚀",
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.addToast({
        variant: "danger",
        message: "Oops! Something went wrong. Please try again. 😕",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Flex
        as="section"
        direction="column"
        align="center"
        padding="s"
        style={{
          minHeight: "calc(100vh - var(--header-height))",
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <Column
          maxWidth="xl"
          gap="m"
          style={{
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <Heading variant="display-strong-m">Let's Connect !</Heading>

          <form onSubmit={handleSubmit} style={{ width: "100%" }} noValidate>
            <Column gap="l">
              <div style={{ position: "relative", width: "100%" }}>
                <Input
                  id="name"
                  name="name"
                  label="Name"
                  labelAsPlaceholder
                  required
                  style={{ width: "100%" }}
                  autoComplete="name"
                />
                {errors.name && (
                  <Text
                    variant="body-default-xs"
                    color="danger"
                    style={{ marginTop: "4px" }}
                  >
                    {errors.name}
                  </Text>
                )}
              </div>

              <div style={{ position: "relative", width: "100%" }}>
                <Input
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  labelAsPlaceholder
                  required
                  style={{ width: "100%" }}
                  autoComplete="email"
                />
                {errors.email && (
                  <Text
                    variant="body-default-xs"
                    color="danger"
                    style={{ marginTop: "4px" }}
                  >
                    {errors.email}
                  </Text>
                )}
              </div>

              <div style={{ position: "relative", width: "100%" }}>
                <Textarea
                  id="message"
                  name="message"
                  label="Message"
                  labelAsPlaceholder
                  required
                  style={{ width: "100%", minHeight: "150px" }}
                />
              </div>

              <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                style={{ width: "100%" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </Column>
          </form>
        </Column>
      </Flex>
    </main>
  );
}
