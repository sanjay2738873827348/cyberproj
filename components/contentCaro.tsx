"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import i1 from "../public/i1.jpeg"; // Import the image
import i2 from "../public/i2.jpeg"
import i3 from "../public/i3.jpg"
import i4 from "../public/i4.webp"
import i5 from  "../public/i5.jpg"
import i6 from  "../public/i6.png"


export function CaroCaro() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <div></div>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The CIA Triad is a widely used model in information security that represents the three core principles essential for securing information systems:
              </span>{" "}
              Confidentiality:
              Ensures that information is only accessible to those authorized to view it.
              Prevents unauthorized access, typically through encryption, access control, and authentication mechanisms.

              Integrity:
              Ensures that the information remains accurate, complete, and unaltered by unauthorized individuals.
              Achieved through measures like checksums, hashing, and digital signatures.

              Availability:
              Ensures that information and resources are accessible and usable when needed by authorized users.
Achieved through redundancy, backups, and ensuring systems are free from denial-of-service attacks.
The CIA Triad serves as the foundation for designing, implementing, and managing effective information security programs.
            </p>
            <br></br>
            <Image
              src = {i1}
              alt="CIA TRAID"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContent2 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              To effectively protect data, it's essential to recognize the different "states" it can be in, as each state requires specific security measures.              
              </span>{" "}
              Data at Rest refers to information that is stored and not actively being used or transmitted. This includes data in files, databases, or storage devices like hard drives, USBs, and memory cards.

Data in Transit is data that is being transferred from one system to another, such as during file transfers over a network or the internet. Since this data is moving, it can be vulnerable to interception and requires protection through encryption and secure transfer protocols.

Data in Use refers to data that is actively being processed or worked on. For example, this could include data being used by an application or created by a user. Since it's being manipulated in real-time, it's important to secure it against unauthorized access or modification during use.
            </p>
            <br></br>
            <Image
              src = {i2}
              alt="CIA TRAID"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContent3 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Authentication is the process of verifying identity, and there are three main ways to authenticate someone:
</span>{" "}
Something You Know: This typically refers to a password or PIN. It's something the user knows and must enter correctly to gain access.

Something You Have: This method involves something physical that the user possesses, such as a smart card, security token, or a one-time code sent to their phone. The user must present this item to complete authentication.

Something You Are: This is based on biometric data, such as a fingerprint, facial recognition, or iris scan. It uses unique physical characteristics to verify the user's identity.

Using a combination of these methods is often referred to as multi-factor authentication (MFA), which significantly enhances security.




            </p>
            <br></br>
            <Image
              src = {i3}
              alt="CIA TRAID"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContent4 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              A password is simply a combination of characters and numbers, and while it may seem secure, even a simple password can be vulnerable to attack.

</span>{" "}
Password Attacks
There are two main ways attackers try to gain access to an account using passwords:

Stealing the Password

Attackers can obtain passwords by looking over someone's shoulder (shoulder surfing), using a keylogger (a program that records keystrokes), or finding passwords written down in unsecured locations. These methods can be easily avoided by practicing proper security hygiene, such as using password managers and avoiding writing passwords down.
Guessing the Password

Brute Force Attacks: This method involves software programs that automatically test all possible combinations of characters to crack the password. It can be very effective if the password is simple or short.
Stupid User Attacks: Attackers may guess passwords based on personal information about the user, such as dates of birth, pet names, or other easily guessable details. This is why it's important to avoid using easily discoverable information in passwords.
In both cases, weak or reused passwords make it much easier for attackers to break into accounts.








            </p>
            <br></br>
            <Image
              src = {i4}
              alt="CIA TRAID"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContent5 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Phishing is a type of cyberattack where attackers use fake emails and websites to trick individuals into revealing sensitive personal or financial information.

</span>{" "}
Here’s how it works:
You might receive an email that appears to come from a trusted organization, such as your bank.
The email typically contains a link that looks like it leads to the organization’s official website.
However, if you click the link, you’re redirected to a replica of the real website. The website may look identical to the original, but it's controlled by the attackers.
Once on the fake site, any information you enter—such as account numbers, passwords, or PINs—can be stolen and used by the attackers for malicious purposes.
Phishing attacks are often designed to look legitimate and convincing, making it crucial to verify links and be cautious about unsolicited emails.
            </p>
            <br></br>
            <Image
              src = {i5}
              alt="CIA TRAID"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};


const DummyContent6 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Cybersecurity threats are ever-evolving and can affect individuals, businesses, and organizations of all sizes. Here are some common types of threats to be aware of:

</span>{" "}
Malware
Malicious software like viruses, ransomware, and spyware designed to damage systems, steal data, or disrupt operations.

Ransomware
A type of malware that locks or encrypts data, demanding a ransom for access. It can paralyze businesses and cause significant financial loss.

Phishing
Fraudulent emails or websites that trick individuals into sharing sensitive information like passwords or account details.

Man-in-the-Middle (MITM) Attacks
Cybercriminals intercept and alter communications between two parties, stealing sensitive data such as login credentials.

Denial-of-Service (DoS) Attacks
Attackers flood a system or website with traffic, making it unavailable to legitimate users. DDoS attacks involve multiple systems working together.

SQL Injection
Malicious code injected into SQL queries to access or manipulate a database, potentially leading to data breaches.

Insider Threats
Trusted individuals, like employees, intentionally or unintentionally expose sensitive data or misuse their access privileges.

Social Engineering
Manipulating people into revealing confidential information or performing actions that compromise security.

Recognizing these threats is the first step in protecting your data and systems from harm.




            </p>
            <br></br>
            <Image
              src = {i6}
              alt="CIA TRAID"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "CIA Triad",
    title: "Confidentiality, Integrity, and Availability.",
    src: i1, // Pass the imported image `i1` directly
    content: <DummyContent />,
  },
  {
    category: "Data States",
    title: "Data at its Core",
    src: i2,
    content: <DummyContent2 />
  },
  {
    category: "Three Methods of Authentication",
    title: "Keeping you safe on the web",
    src: i3,
    content: <DummyContent3 />,
  },
  {
    category: "Passwords and Common Attacks",
    title: "The Keys to Digital Data",
    src: i4,
    content: <DummyContent4 />,
  },
  {
    category: "Art Of Phishing",
    title: "Conning Millions for their secrets",
    src: i5,
    content: <DummyContent5 />,
  },
  {
    category: "Potential Cybersecurity Threats",
    title: "Theres a target on everyone's back.",
    src: i6,
    content: <DummyContent6 />,
  },
];
