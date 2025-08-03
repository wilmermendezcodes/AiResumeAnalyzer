import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "~/../constants/index";
import { ReadableStreamBYOBRequest } from "node:stream/web";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>
      </section>

      {resumes.length > 0 && (
      <div className="resumes-section">
      {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume}/> 
        ))}
      </div>
      )}
    </main>
  );
}
