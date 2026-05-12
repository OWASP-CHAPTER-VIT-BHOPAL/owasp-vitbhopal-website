"use client";
import { Container } from "@/components/ui/container";
import Header from "@/components/layout/header";
import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { CustomToaster } from "@/components/ui/custom-toaster";

type FormState = {
  email: string;
  category: string;
  steps: string;
  severity: string;
  screenRecording: string;
};

const initialState: FormState = {
  email: "",
  category: "",
  steps: "",
  severity: "",
  screenRecording: "",
};

const MAX_ATTACHMENTS = 3;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB per attachment

const categories = [
  "UI/UX Issue",
  "Performance Issue",
  "Security Vulnerability",
  "Functionality Bug",
  "Data Loss",
  "Integration Problem",
  "Other",
];

const severityLevels = ["Low", "Medium", "High", "Critical"];

const BugReportForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [canContact, setCanContact] = useState(false);
  const [loading, setLoading] = useState(false);

  const attachmentSummary = useMemo(
    () =>
      attachments.length
        ? `${attachments.length} file${attachments.length > 1 ? "s" : ""} attached`
        : "No files selected",
    [attachments],
  );

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelection = (files: FileList | null) => {
    if (!files?.length) return;

    const selectedFiles = Array.from(files);
    const totalFiles = attachments.length + selectedFiles.length;

    if (totalFiles > MAX_ATTACHMENTS) {
      toast.error(`You can upload up to ${MAX_ATTACHMENTS} attachments.`);
      return;
    }

    for (const file of selectedFiles) {
      if (file.size > MAX_FILE_SIZE) {
        toast.error("Each attachment must be 10 MB or smaller.");
        return;
      }
    }

    setAttachments((prev) => [...prev, ...selectedFiles]);
  };

  const handleAttachmentRemove = (index: number) => {
    setAttachments((prev) => prev.filter((_, current) => current !== index));
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    handleFileSelection(event.dataTransfer.files);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (attachments.length === 0) {
      toast.error("Please add at least one attachment before submitting.");
      return;
    }

    setLoading(true);

    try {
      const payload = new FormData();
      payload.append("email", form.email.trim());
      payload.append("category", form.category);
      payload.append("steps", form.steps.trim());
      payload.append("severity", form.severity);
      payload.append("screenRecording", form.screenRecording.trim());
      payload.append("canContact", canContact ? "true" : "false");

      attachments.forEach((file) => {
        payload.append("attachments", file);
      });

      const response = await fetch("/api/bug-report", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit bug report.");
      }

      toast.success("Bug report submitted successfully!");
      setForm(initialState);
      setAttachments([]);
      setCanContact(false);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to submit bug report.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="min-h-screen bg-[#0f0f0f] px-4 md:px-6 lg:px-8">
      <CustomToaster />

      <Header title="Report a Bug">
        Help us improve our platform by sharing detailed feedback whenever you
        encounter an issue. We use every report to deliver a better, more
        reliable experience for the OWASP VIT Bhopal community.
      </Header>

      <h2 className="text-3xl font-medium text-[#1b1a1d] md:text-4xl"> .</h2>
      <div className="my-4 w-full border-2 border-dashed border-white/12" />

      <div className="mx-auto mt-8 max-w-5xl md:mt-16">
        <div className="rounded-3xl bg-gradient-to-b from-[#202020] to-[#191919] p-6 shadow-[0_1px_0.5px_#ffffff1a_inset,0_1px_1px_#ffffff35_inset,0_10px_10px_-9px_#00000070,0_20px_20px_-14px_#00000060,0_0px_6px_0px_#00000060] md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Left Column */}
              <div className="flex flex-col space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Your email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-2xl bg-[#0f0f0f] p-3 text-sm text-white shadow-[0_0.5px_0_#ffffff50,0_2px_6px_#00000090_inset] transition-colors placeholder:text-white/40 focus:outline-none md:p-4 md:text-base"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-white"
                  >
                    Please select a category{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleInputChange}
                      required
                      className="w-full appearance-none rounded-2xl bg-[#0f0f0f] p-3 text-sm text-white shadow-[0_0.5px_0_#ffffff50,0_2px_6px_#00000090_inset] transition-colors focus:outline-none md:p-4 md:text-base"
                    >
                      <option className="bg-[#0f0f0f] text-white" value="">
                        Select a Category
                      </option>
                      {categories.map((category) => (
                        <option
                          key={category}
                          value={category}
                          className="bg-[#0f0f0f] text-white"
                        >
                          {category}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/60">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 9l6 6 6-6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="severity"
                    className="block text-sm font-medium text-white"
                  >
                    Severity of the issue
                  </label>
                  <div className="relative">
                    <select
                      id="severity"
                      name="severity"
                      value={form.severity}
                      onChange={handleInputChange}
                      className="w-full appearance-none rounded-2xl bg-[#0f0f0f] p-3 text-sm text-white shadow-[0_0.5px_0_#ffffff50,0_2px_6px_#00000090_inset] transition-colors focus:outline-none md:p-4 md:text-base"
                    >
                      <option className="bg-[#0f0f0f] text-white" value="">
                        Select severity
                      </option>
                      {severityLevels.map((level) => (
                        <option
                          key={level}
                          value={level}
                          className="bg-[#0f0f0f] text-white"
                        >
                          {level}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/60">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 9l6 6 6-6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="screenRecording"
                    className="block text-sm font-medium text-white"
                  >
                    Link to screen recording
                  </label>
                  <input
                    id="screenRecording"
                    name="screenRecording"
                    type="url"
                    value={form.screenRecording}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl bg-[#0f0f0f] p-3 text-sm text-white shadow-[0_0.5px_0_#ffffff50,0_2px_6px_#00000090_inset] transition-colors placeholder:text-white/40 focus:outline-none md:p-4 md:text-base"
                    placeholder="https://..."
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-6">
                <div className="flex flex-1 flex-col space-y-2">
                  <label
                    htmlFor="steps"
                    className="block text-sm font-medium text-white"
                  >
                    Steps to reproduce the issue{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="steps"
                    name="steps"
                    value={form.steps}
                    onChange={handleInputChange}
                    required
                    className="w-full flex-1 resize-none rounded-2xl bg-[#0f0f0f] p-3 text-sm text-white shadow-[0_0.5px_0_#ffffff50,0_2px_6px_#00000090_inset] transition-colors placeholder:text-white/40 focus:outline-none md:p-4 md:text-base"
                    placeholder="Describe the bug, steps to reproduce, expected behavior, and actual behavior..."
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-white">
                    Attachments <span className="text-red-400">*</span>
                  </label>
                  <label
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="flex cursor-pointer flex-col items-center justify-center rounded-2xl bg-[#0f0f0f] px-6 py-6 text-center shadow-[0_0.5px_0_#ffffff50,0_2px_6px_#00000090_inset] transition-all"
                  >
                    <input
                      type="file"
                      name="attachments"
                      multiple
                      className="hidden"
                      required
                      onChange={(event) =>
                        handleFileSelection(event.target.files)
                      }
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-6 w-6 text-white/60"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5l4.5-4.5m0 0L12 7.5m4.5 4.5H5.25m4.5 6.75H6.75A2.25 2.25 0 014.5 16.5v-9A2.25 2.25 0 016.75 5.25h10.5A2.25 2.25 0 0119.5 7.5v9a2.25 2.25 0 01-2.25 2.25h-1.5"
                      />
                    </svg>
                    <p className="mt-2 text-sm font-medium text-white">
                      Drag & drop files or browse
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      Up to {MAX_ATTACHMENTS} files, 10 MB each
                    </p>
                    <p className="mt-2 text-xs font-medium text-white/80">
                      {attachmentSummary}
                    </p>
                  </label>
                  {attachments.length > 0 && (
                    <ul className="space-y-2">
                      {attachments.map((file, index) => (
                        <li
                          key={`${file.name}-${index}`}
                          className="flex items-center justify-between rounded-2xl bg-gradient-to-b from-[#202020] to-[#191919] px-3 py-2.5 shadow-[0_1px_0.5px_#ffffff1a_inset,0_1px_1px_#ffffff35_inset,0_4px_4px_-2px_#00000070] transition-colors md:px-4"
                        >
                          <span className="truncate pr-3 text-sm text-white/90">
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleAttachmentRemove(index)}
                            className="flex-shrink-0 text-xs font-medium text-red-400 transition hover:text-red-300"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-gradient-to-b from-[#202020] to-[#191919] px-6 py-3.5 text-sm font-semibold text-white/90 shadow-[0_1px_0.5px_#ffffff1a_inset,0_1px_1px_#ffffff35_inset,0_10px_10px_-9px_#00000070,0_20px_20px_-14px_#00000060,0_0px_6px_0px_#00000060] transition-all hover:brightness-110 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:active:scale-100 md:text-base"
            >
              {loading ? "Submitting..." : "Report bug"}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default BugReportForm;
