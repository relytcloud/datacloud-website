"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
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

export default function ConsultForm() {
  const t = useTranslations("contactUs");
  const tForm = useTranslations("form");
  const tTips = useTranslations("tips");

  const useSceneOptions = [
    {
      id: "1",
      key: t("useSceneOptions.option1"),
      value: t("useSceneOptions.option1"),
    },
    {
      id: "2",
      key: t("useSceneOptions.option2"),
      value: t("useSceneOptions.option2"),
    },
    {
      id: "3",
      key: t("useSceneOptions.option3"),
      value: t("useSceneOptions.option3"),
    },
    {
      id: "4",
      key: t("useSceneOptions.option4"),
      value: t("useSceneOptions.option4"),
    },
    {
      id: "5",
      key: t("useSceneOptions.option5"),
      value: t("useSceneOptions.option5"),
    },
    {
      id: "6",
      key: t("useSceneOptions.option6"),
      value: t("useSceneOptions.option6"),
    },
    {
      id: "7",
      key: t("useSceneOptions.option7"),
      value: t("useSceneOptions.option7"),
    },
    {
      id: "8",
      key: t("useSceneOptions.option8"),
      value: t("useSceneOptions.option8"),
    },
    {
      id: "9",
      key: t("useSceneOptions.option9"),
      value: t("useSceneOptions.option9"),
    },
    {
      id: "10",
      key: t("useSceneOptions.option10"),
      value: t("useSceneOptions.option10"),
    },
    {
      id: "11",
      key: t("useSceneOptions.option11"),
      value: t("useSceneOptions.option11"),
    },
    {
      id: "12",
      key: t("useSceneOptions.option12"),
      value: t("useSceneOptions.option12"),
    },
  ];

  const learnFromOptions = [
    {
      id: "1",
      key: t("learnFromOptions.option1"),
      value: t("learnFromOptions.option1"),
    },
    {
      id: "2",
      key: t("learnFromOptions.option2"),
      value: t("learnFromOptions.option2"),
    },
    {
      id: "3",
      key: t("learnFromOptions.option3"),
      value: t("learnFromOptions.option3"),
    },
    {
      id: "4",
      key: t("learnFromOptions.option4"),
      value: t("learnFromOptions.option4"),
    },
    {
      id: "5",
      key: t("learnFromOptions.option5"),
      value: t("learnFromOptions.option5"),
    },
    {
      id: "6",
      key: t("learnFromOptions.option6"),
      value: t("learnFromOptions.option6"),
    },
    {
      id: "7",
      key: t("learnFromOptions.option7"),
      value: t("learnFromOptions.option7"),
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [wrong, setWrong] = useState<string | null>(null);
  const formSchema = z.object({
    name: z.string().optional(),
    intlDialCode: z
      .string()
      .regex(/^\d{1,4}$/, { message: t("phone.error") })
      .or(z.literal(""))
      .optional(),
    phone: z.string().optional(),
    companyName: z.string().min(2, {
      message: t("company.error"),
    }),
    jobRole: z.string().optional(),
    email: z.string().email({
      message: t("email.error"),
    }),
    useScene: z
      .array(z.string())
      .min(1, {
        message: t("reason.error"),
      })
      .max(3, {
        message: t("reason.error"),
      }),
    requirement: z
      .string()
      .trim()
      .min(2, {
        message: t("content.error"),
      }),
    isSignedPrivacyNotice: z.boolean(),
    source: z
      .array(z.string())
      .min(1, {
        message: t("reason.error"),
      })
      .max(1, {
        message: t("reason.error"),
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
      setWrong(tTips("error.content"));
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
          <NestedInput label={t("name.label")} name="name" />
          <NestedPhoneInput label={t("phone.label")} />
          <NestedInput label={t("company.label")} name="companyName" />
          <NestedInput label={t("job.label")} name="jobRole" />
          <NestedInput label={t("email.label")} name="email" />
          <NestedMultiSelectInput
            label={
              <>
                {t("reason.label")}{" "}
                <span className="text-text-tertiary">
                  {t("reason.subLabel")}
                </span>
              </>
            }
            max={3}
            name="useScene"
            options={useSceneOptions}
          />
          <NestedInput label={t("content.label")} name="requirement" rows={3} />
          <NestedMultiSelectInput
            label={t("whereDidYouLearn")}
            max={1}
            name="source"
            options={learnFromOptions}
            showCheckbox={false}
          />

          <NestedCheckbox
            label={
              <span className={"ml-2 text-contrast-secondary text-input-label"}>
                {tForm("agree.label")}{" "}
                <TextLink className="text-white" id="/legal/privacy-notice">
                  {tForm("agree.link")}
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
            {t("submitButton")}
          </Button>
          <div className="wrong-msg">{wrong}</div>
        </form>
      </FormProvider>
      <Dialog
        confirm={tTips("success.title")}
        desc={tTips("success.content")}
        isOpen={isOpen}
        onConfirm={() => handleConfirm()}
        title={tTips("success.title")}
      />
    </>
  );
}
