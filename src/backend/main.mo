import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  type Program = { #btech; #mtech; #mca; #mba; #phd };

  type Enquiry = {
    fullName : Text;
    email : Text;
    phoneNumber : Text;
    cityState : Text;
    program : Program;
    specialization : Text;
    yearOfPassing : Nat;
    timestamp : Time.Time;
  };

  module Enquiry {
    public func compare(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Int.compare(enquiry1.timestamp, enquiry2.timestamp);
    };
  };

  let enquiries = Map.empty<Text, Enquiry>();

  public shared ({ caller }) func submitEnquiry(
    fullName : Text,
    email : Text,
    phoneNumber : Text,
    cityState : Text,
    program : Program,
    specialization : Text,
    yearOfPassing : Nat,
  ) : async () {
    if (enquiries.containsKey(email)) {
      Runtime.trap("An enquiry with this email already exists");
    };

    let enquiry : Enquiry = {
      fullName;
      email;
      phoneNumber;
      cityState;
      program;
      specialization;
      yearOfPassing;
      timestamp = Time.now();
    };

    enquiries.add(email, enquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.values().toArray().sort();
  };
};
