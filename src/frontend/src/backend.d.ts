import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Enquiry {
    cityState: string;
    fullName: string;
    email: string;
    yearOfPassing: bigint;
    timestamp: Time;
    specialization: string;
    phoneNumber: string;
    program: Program;
}
export enum Program {
    mba = "mba",
    mca = "mca",
    phd = "phd",
    mtech = "mtech",
    btech = "btech"
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    submitEnquiry(fullName: string, email: string, phoneNumber: string, cityState: string, program: Program, specialization: string, yearOfPassing: bigint): Promise<void>;
}
