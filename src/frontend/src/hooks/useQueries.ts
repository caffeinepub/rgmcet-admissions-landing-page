import { useMutation } from "@tanstack/react-query";
import type { Program } from "../backend.d";
import { useActor } from "./useActor";

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  cityState: string;
  program: Program;
  specialization: string;
  yearOfPassing: number;
}

export function useSubmitEnquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: EnquiryFormData) => {
      if (!actor) throw new Error("Backend not ready");
      await actor.submitEnquiry(
        data.fullName,
        data.email,
        data.phoneNumber,
        data.cityState,
        data.program,
        data.specialization,
        BigInt(data.yearOfPassing),
      );
    },
  });
}
