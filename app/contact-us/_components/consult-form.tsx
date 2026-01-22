"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import NestedCheckbox from "@/components/form/checkbox";
import NestedInput from "@/components/form/input";
import NestedMultiSelectInput from "@/components/form/multi-select-input";
import NestedPhoneInput from "@/components/form/phone-input";
import { Button } from "@/components/ui/button";
import Dialog from "@/components/ui/dialog";
import { TextLink } from "@/components/ui/link";
import { postFetch } from "@/lib/fetcher";

const useSceneOptions = [
  {
    id: "1",
    key: "High accuracy AI analysis",
    value: "High accuracy AI analysis",
  },
  {
    id: "2",
    key: "Real-time online analysis",
    value: "Real-time online analysis",
  },
  {
    id: "3",
    key: "Batch processing",
    value: "Batch processing",
  },
  {
    id: "4",
    key: "Vector storage and search",
    value: "Vector storage and search",
  },
  {
    id: "5",
    key: "Hybrid search and analysis of structured and unstructured data",
    value: "Hybrid search and analysis of structured and unstructured data",
  },
  {
    id: "6",
    key: "High-concurrency stability",
    value: "High-concurrency stability",
  },
  {
    id: "7",
    key: "Reduce storage costs for analytics systems",
    value: "Reduce storage costs for analytics systems",
  },
  {
    id: "8",
    key: "Zero-ETL",
    value: "Zero-ETL",
  },
  {
    id: "9",
    key: "Data security",
    value: "Data security",
  },
  {
    id: "10",
    key: "Data analytics ecosystem",
    value: "Data analytics ecosystem",
  },
  {
    id: "11",
    key: "Adaptive Query Scaling",
    value: "Adaptive Query Scaling",
  },
  {
    id: "12",
    key: "Reduce Ops complexity and costs ",
    value: "Reduce Ops complexity and costs ",
  },
];

const learnFromOptions = [
  {
    id: "1",
    key: "Search Engine",
    value: "Search Engine",
  },
  {
    id: "2",
    key: "LinkedIn",
    value: "LinkedIn",
  },
  {
    id: "3",
    key: "X.com",
    value: "X.com",
  },
  {
    id: "4",
    key: "Third-party Cloud Marketplace",
    value: "Third-party Cloud Marketplace",
  },
  {
    id: "5",
    key: "Personal Recommendation",
    value: "Personal Recommendation",
  },
  {
    id: "6",
    key: "Media",
    value: "Media",
  },
  {
    id: "7",
    key: "Conferences and Events",
    value: "Conferences and Events",
  },
];

export default function ConsultForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [wrong, setWrong] = useState<string | null>(null);
  const formSchema = z.object({
    name: z.string().optional(),
    intlDialCode: z
      .string()
      .regex(/^\d{1,4}$/, { message: "Area code must be 1 to 4 digits" })
      .or(z.literal(""))
      .optional(),
    phone: z.string().optional(),
    companyName: z.string().min(2, {
      message: "This field cannot be empty.",
    }),
    jobRole: z.string().optional(),
    email: z.string().email({
      message: "Please enter a valid Email address.",
    }),
    useScene: z
      .array(z.string())
      .min(1, {
        message: "Select at least one option.",
      })
      .max(3, {
        message: "Select at least one option.",
      }),
    requirement: z.string().trim().min(2, {
      message: "Please describe your use case.",
    }),
    isSignedPrivacyNotice: z.boolean(),
    source: z
      .array(z.string())
      .min(1, {
        message: "Select at least one option.",
      })
      .max(1, {
        message: "Select at least one option.",
      }),
  });

  type FormValues = z.infer<typeof formSchema>;

  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      intlDialCode: "",
      phone: "",
      companyName: "",
      jobRole: "",
      email: "",
      useScene: [],
      requirement: "",
      isSignedPrivacyNotice: false,
      source: [],
    },
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = async (values: FormValues) => {
    if (btnDisabled) {
      return;
    }
    setBtnDisabled(true);
    setWrong(null);
    const { useScene, source, ...rest } = values;

    try {
      const res = await postFetch("consult", {
        ...rest,
        useScene: useScene.join(","),
        source: source.join(""),
        isRequestDemo: false,
      });

      if (res.data) {
        setIsOpen(true);
      } else {
        setWrong(res.msg);
      }
      setBtnDisabled(false);
    } catch {
      setWrong("Please try again later.");
      setBtnDisabled(false);
    }
  };

  const handleConfirm = () => {
    setIsOpen(false);
    reset();
  };

  const onSubmitWrapper = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    handleSubmit(onSubmit)(e);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4 text-white"
          onSubmit={onSubmitWrapper}
        >
          <NestedInput label="Full name" name="name" />
          <NestedPhoneInput label="Phone number" />
          <NestedInput label="Company *" name="companyName" />
          <NestedInput label="Job title" name="jobRole" />
          <NestedInput label="Email *" name="email" />
          <NestedMultiSelectInput
            label={
              <>
                You&apos;re interested in *{" "}
                <span className="text-text-tertiary">
                  (Select 1 to 3 options)
                </span>
              </>
            }
            max={3}
            name="useScene"
            options={useSceneOptions}
          />
          <NestedInput label="Your use case *" name="requirement" rows={3} />
          <NestedMultiSelectInput
            label="Where did you learn about us?*"
            max={1}
            name="source"
            options={learnFromOptions}
            showCheckbox={false}
          />

          <NestedCheckbox
            label={
              <span className={"ml-2 text-contrast-secondary text-input-label"}>
                I have read and agree to the{" "}
                <TextLink className="text-white" id="/legal/privacy-notice">
                  Privacy Notice
                </TextLink>
              </span>
            }
            name={"isSignedPrivacyNotice"}
            onChange={(checked: boolean) => {
              setBtnDisabled(!checked);
            }}
          />
          <Button
            className="bg-linear-to-r from-[#51A4F6] to-[#3867FF]"
            disabled={btnDisabled}
            size="sm"
            type="submit"
          >
            Contact Us
          </Button>
          <div className="wrong-msg">{wrong}</div>
        </form>
      </FormProvider>
      <Dialog
        confirm="OK"
        desc="Thanks for your submission, and our team will reach out within one business day."
        isOpen={isOpen}
        onConfirm={() => handleConfirm()}
        title="Submission Successful"
      />
    </>
  );
}
