"use client";

import Header from "@/components/Header";
import React, { useState } from "react";
import { User, Mail, Phone, Users } from "lucide-react";

// Type definitions
interface MembershipFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipType: MembershipType;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  membershipType?: string;
}

interface MembershipOption {
  value: MembershipType;
  label: string;
}

type MembershipType = "patron" | "corporate" | "associate" | "student" | "";

type FormFieldName = keyof MembershipFormData;

// Validation result type
interface ValidationResult {
  isValid: boolean;
  errors: FormErrors;
}

const MembershipForm: React.FC = () => {
  const [formData, setFormData] = useState<MembershipFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    membershipType: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const membershipOptions: readonly MembershipOption[] = [
    { value: "patron", label: "Patron" },
    { value: "corporate", label: "Corporate Member" },
    { value: "associate", label: "Associate" },
    { value: "student", label: "Student" },
  ] as const;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    const fieldName = name as FormFieldName;

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: undefined,
      }));
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): ValidationResult => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.membershipType) {
      newErrors.membershipType = "Please select a membership type";
    }

    return {
      isValid: Object.keys(newErrors).length === 0,
      errors: newErrors,
    };
  };

  const resetForm = (): void => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      membershipType: "",
    });
    setErrors({});
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const validation = validateForm();
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise<void>((resolve) => setTimeout(resolve, 2000));

      // Handle success - you can add your actual API call here
      console.log("Form submitted:", formData);
      alert(
        "Thank you! Your membership application has been submitted successfully."
      );

      resetForm();
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "There was an error submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (fieldName: FormFieldName): string => {
    const baseClasses =
      "block w-full pl-10 pr-3 py-2 border rounded-lg transition-colors";
    const errorClasses = errors[fieldName]
      ? "border-red-300"
      : "border-gray-300";
    return `${baseClasses} ${errorClasses}`;
  };

  return (
    <section
      className="py-16 px-4 relative border-b-12 border-gray-600/40"
      id="membership-form"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-orange-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-20 w-20 h-20 bg-pink-100 rounded-full opacity-15"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Header title="Join Our Community" underlineColor="bg-orange-400" />
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-md mt-4">
            Ready to become part of the International Relations Society of
            Kenya? Fill out the form below to start your membership journey with
            us.
          </p>
        </div>

        {/* Membership Form */}
        <div className="bg-white p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={getInputClassName("firstName")}
                    placeholder="Enter your first name"
                    aria-invalid={!!errors.firstName}
                    aria-describedby={
                      errors.firstName ? "firstName-error" : undefined
                    }
                  />
                </div>
                {errors.firstName && (
                  <p
                    id="firstName-error"
                    className="text-red-500 text-sm mt-1"
                    role="alert"
                  >
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={getInputClassName("lastName")}
                    placeholder="Enter your last name"
                    aria-invalid={!!errors.lastName}
                    aria-describedby={
                      errors.lastName ? "lastName-error" : undefined
                    }
                  />
                </div>
                {errors.lastName && (
                  <p
                    id="lastName-error"
                    className="text-red-500 text-sm mt-1"
                    role="alert"
                  >
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={getInputClassName("email")}
                  placeholder="Enter your email address"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </div>
              {errors.email && (
                <p
                  id="email-error"
                  className="text-red-500 text-sm mt-1"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={getInputClassName("phone")}
                  placeholder="Enter your phone number"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
              </div>
              {errors.phone && (
                <p
                  id="phone-error"
                  className="text-red-500 text-sm mt-1"
                  role="alert"
                >
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Membership Type */}
            <div className="space-y-2">
              <label
                htmlFor="membershipType"
                className="block text-sm font-medium text-gray-700"
              >
                Membership Type *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="membershipType"
                  name="membershipType"
                  value={formData.membershipType}
                  onChange={handleInputChange}
                  className={`${getInputClassName("membershipType")} bg-white`}
                  aria-invalid={!!errors.membershipType}
                  aria-describedby={
                    errors.membershipType ? "membershipType-error" : undefined
                  }
                >
                  <option value="">Select membership type</option>
                  {membershipOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.membershipType && (
                <p
                  id="membershipType-error"
                  className="text-red-500 text-sm mt-1"
                  role="alert"
                >
                  {errors.membershipType}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-400 hover:bg-orange-500 disabled:bg-orange-300 text-white px-4 py-2 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                aria-describedby="submit-status"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>
            </div>

            {/* Required fields note */}
            <p className="text-sm text-gray-500 text-center">
              * Required fields
            </p>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Have questions about membership? Contact us at{" "}
            <a
              href="mailto:info@irsk.org"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              info@irsk.org
            </a>{" "}
            or call{" "}
            <a
              href="tel:+254700000000"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              +254 700 000 000
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipForm;
